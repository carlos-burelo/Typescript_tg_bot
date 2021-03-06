import { Telegraf } from "telegraf";
import { _apis } from "../../config";
import { getLang } from "../../lang";
import {
	getGitRepo,
	getGitRepos,
	getGitUser,
	getRepository,
} from "../controllers/github.controller";
import { generateLog } from "../libs/messages";

export default function (bot: Telegraf) {
	bot.command("/git", async (ctx) => {
		try {
			const _ = getLang(ctx.chat);
			let msg: string[] = ctx.message.text.split(" ");
			if (!msg[1]) {
				return ctx.reply(_.githubModule.noUserFound);
			}
			await getGitUser(ctx, msg[1]);
		} catch (error) {
			const [, l, c] = error.stack.match(/(\d+):(\d+)/);
			generateLog(ctx, error, [l, c], "/git", __filename);
		}
	});
	bot.command("/repos", async (ctx) => {
		try {
			const { githubModule: _ } = getLang(ctx.chat);
			let user: string[] | string = ctx.update.message.text.split(" ");
			user = user[1];
			if (!user) {
				return ctx.reply(_.noUserFound);
			} else {
				await getGitRepos(ctx, user);
			}
		} catch (error) {
			const [, l, c] = error.stack.match(/(\d+):(\d+)/);
			generateLog(ctx, error, [l, c], "/repos", __filename);
		}
	});
	bot.command("/repo", async (ctx) => {
		try {
			const { githubModule: _ } = getLang(ctx.chat);
			let message: string[] = ctx.update.message.text.split(" ");
			let user: string = message[1];
			let repo: string = message[2];
			let match = message[1].match(/https:\/\/github.com\/.+\/.+/gi);
			if (match) {
				user = match[0].split("/")[3];
				repo = match[0].split("/")[4];
				return await getGitRepo(ctx, user, repo);
			}
			if (!user) {
				return ctx.reply(_.noUserFound);
			}
			if (!repo) {
				return ctx.reply(_.noRepoFound);
			}
			await getGitRepo(ctx, user, repo);
		} catch (error) {
			const [, l, c] = error.stack.match(/(\d+):(\d+)/);
			generateLog(ctx, error, [l, c], "/repo", __filename);
		}
	});
	bot.command("/clone", async (ctx) => {
		try {
			const { githubModule: _ } = getLang(ctx.chat);
			let message: string[] = ctx.update.message.text.split(" ");
			let user: string = message[1];
			let repo: string = message[2];
			let match = message[1].match(/https:\/\/github.com\/.+\/.+/gi);
			if (match) {
				user = match[0].split("/")[3];
				repo = match[0].split("/")[4];
				return await getRepository(ctx, user, repo);
			}
			if (!user) {
				ctx.reply(_.noUserFound);
			}
			if (!repo) {
				ctx.reply(_.noRepoFound);
			}
			await getRepository(ctx, user, repo);
		} catch (error) {
			const [, l, c] = error.stack.match(/(\d+):(\d+)/);
			generateLog(ctx, error, [l, c], "/clone", __filename);
		}
	});
}
