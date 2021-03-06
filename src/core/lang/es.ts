import { _bot, _owner } from "../../config";
import { ChatUserI, KeyI } from "../interfaces";

const string_base: string = "<b>Commands in the module:</b>";

export const es = {
	global: {
		id: "ES",
		name: "Español",
		pleaseReplyMsg: `Responda al mensaje para continuar.`,
		onlyOwner: `Este comando solo esta disponible para el propietario del bot.`,
		preventBot: "Comando anulado, no puedes afectarme",
		preventOwner: `Comando anulado, mi propietario tiene inmunidad.`,
		permissionsDenied: "No cuentas con los permisos necesarios",
		preventSudo: (name: string) =>
			`${name} tiene protection de superusuario`,
		langMenu: "*Choose a language*",
		setLanguageSucces: (lang: string) =>
			`Language set to  ${lang == "es" ? "Español 🇲🇽" : "English 🇺🇸"}`,
		sameLanguage: (lang: string) =>
			`El lenguaje ya esta en  ${
				lang == "es" ? "Español 🇲🇽" : "English 🇺🇸"
			}`,
		codeLangError: "Codigo de lenguaje incorrecto",
		noPrivateChats: "Este comando no es compatible en chats privados",
		argumentError: "Argumento incorrecto.",
		notArguments: "Agrege algun argumento.",
		errorInFormat: "Formato incorrecto",
	},
	helpers: {
		anyActionSucces: (i: KeyI, A: string, B: string) =>
			`${B} ha sido ${keys[i]} por ${A}`,
		memberActionAdmin: (i: KeyI) =>
			`No puedes ${keys[i]} a un administrador`,
		adminActionAdmin: (i: KeyI) =>
			`No puedes ${keys[i]} a otro administrador`,
		anyActionCreator: (i: KeyI) =>
			`No puedes ${keys[i]} al propietario del chat`,
		anyActionOwner: (i: KeyI) => `No puedes ${keys[i]} a mi propietario`,
		noYourAutoAction: (i: KeyI) => `No te puedes auto${keys[i]}`,
		noAutoAction: (i: KeyI) => `No puedo auto${keys[i]}me`,
	},
	permissions: {
		setPermsSuccess: "Permisos establecidos",
		setPermsError: "Hubo un error al estableces los permisos",
		title: (title: string) => `Permisos de *${title}*`,
		can_send_messages: (k: boolean) => `${k ? "✅" : "❌"} | *Mensajes* `,
		can_send_media_messages: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Multimedia* `,
		can_send_polls: (k: boolean) => `${k ? "✅" : "❌"} | *Encuestas* `,
		can_send_other_messages: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Otros mensajes* `,
		can_add_web_page_previews: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Añadir previsualizacion web* `,
		can_change_info: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Cambiar informacion* `,
		can_invite_users: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Invitar usuarios* `,
		can_pin_messages: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Anclar mensajes* `,
		can_be_edited: (k: boolean) => `${k ? "✅" : "❌"} | *Ser editado:* `,
		can_manage_chat: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Administar el chat:* `,
		can_delete_messages: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Borrar mensages:* `,
		can_restrict_members: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Restringir usuarios:* `,
		can_promote_members: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Promover usuarios:* `,
		can_manage_voice_chats: (k: boolean) =>
			`${k ? "✅" : "❌"} | *Administrar chats de voz:* `,
		is_anonymous: (k: boolean) => `${k ? "✅" : "❌"} | *Ser anomimo:* `,
	},
	startModule: {
		message:
			`Hola mi nombres es ${_bot.first_name}, un bot administrador de grupos y gestor ` +
			`de informacion desarrollado en typescript por @${_owner.username}.\n` +
			`A continuacion le muestro una serie de opciones que actualmente tengo disponibles.\n`,
		reportInfo: `Porfavor sea especifico con el problema o responda al problema que el bot presenta`,
		reportLowLength:
			"Sea mas especifico con la situacion en la que el bot fallo, use Ingles y español de ser posible",
	},
	adminMoodule: {
		adminList: `Lista de adminstradores`, //Admin list
		pinSuccess: "Mensaje anclado satisfactoriamente",
		pinError: "No se ha podido anclar el mensaje",
		unPinSuccess: "Mensaje desanclado satisfactoriamente",
		unPinAllSuccess: "Todos los mensajes an sido deshanclados",
		unPinError: "El mensaje no ha podido ser desanclado",
		unPinAllError: "Los mensajes no han podido ser desanclados",
		unPinSuggestion: "Use '--all' para desanclar todos los mensajes",
	},
	androidModule: {
		noModel: "Porfavor coloque algun modelo",
		noCsc: "Porfavor coloque alguna region",
		titleMagisk: "*Ultimas versiones de magisk*\n\n",
		titleFirm: (model: string, csc: string) =>
			`*Ultimo firmware para SM-${model} ${csc}*\n\n`,
		words: {
			title1: (device: string) =>
				`<b>TWRP for ${device.toUpperCase()}\n\n</b>`,
			name: (a: string) => `<b>Nombre:</b> ${a}\n`,
			size: (a: string) => `<b>Tamaño:</b> ${a}\n`,
			release: (a: string) => `<b>Lanzamiento:</b> ${a}\n`,
			link: (url: string, name: string) =>
				`<a href="${url}">${name}</a>\n\n`,
		},
	},
	banModule: {
		unBanSuccess: "El baneo ha sido removido",
		setBanSuccess: "Mensaje de baneo establecido",
	},
	bioModule: {
		notFound: (name: string) => `${name} no cuenta con una biografia`,
		setBioSuccess: "Biografia establecida satisfactoriamente",
		updateBioSuccess: "Biografia actualizada satisfactoriamente",
		deleteBioSuccess: "Biografia eliminada satisfactoriamente",
		emptyBiography: `Biografía vacía, agregue al menos 2 caracteres.`,
	},
	notesModule: {
		noteNotFound: "La nota no existe.",
		notesNotFound: "No hay notas en este chat",
		personalNotes: "📋 Notas personales",
		publicNotes: (title: string) => `*📋 Notas en ${title}*`,
		updateNote: (note: string) => `\`#${note}\` se ha actualizado.`,
		noteAdded: (note: string) => `\`#${note}\` se ha añadido a las *notas*`,
		deleteNote: (note: string) =>
			`_#${note}_ se ha eliminado de las *notas*`,
		noteSuggest: "\nPara obtener use: `#name`",
	},
	warnModule: {
		reason: "Razon?...",
		firstWarn: "Primera advertencia",
		secondWarn: "Ultima advertencia",
		lastWarn: "Por ahora no puedo banear, por ahora...",
		warnInfo: ({ first_name, id, count, username }) =>
			`<b>Usuario:</b> ${first_name}\n` +
			`<b>Id:</b> <code>${id}</code>\n` +
			`<b>Nickname:</b> @${username}\n` +
			`<b>Advertencias:</b> ${count}/3\n` +
			`<b>Razones:</b>\n`,
		warnRemoved: "1 advertencia removida.",
		allWarnsRemoved: "Todas las advertencias fueron removidas",
		noWarns: (name: string) => `${name} no cuenta con advertencias.`,
	},
	filterModule: {
		noFilterKey: "Establezca una palabra para el filtro",
		setRespFilter: "Establezca respuestas para el filtro",
		filterSaved: (id: string) =>
			`\`${id}\` ha sido añadido a los *filtros*`,
		noFoundFilter: (filter: string) =>
			`El filtro \`${filter}\` no existe en mi base de datos`,
		removedFilter: (filter: string) =>
			`El filtro: \`${filter}\` fue removido`,
		title: (title: string) => `Filtros en *${title}*\n\n`,
		noFiltersFound: `No ahy filtros en este chat`,
		filterDesc: (filter: string) =>
			`Descripcion del *filtro*: \`${filter}\` \n\n`,
		type: (type: string) => `*Tipo:*  _${type}_\n`,
		resp: `*Respuestas:* \n`,
	},
	githubModule: {
		noUserFound: "Coloque algun usuario",
		noRepoFound: "Coloque algun repositorio",
		reposTitle: (a: number) => `*Repositorios: (${a})*\n\n`,
		profileNotFound: "Usuario no encontrado",
	},
	helpModule: {
		modules: [
			{
				text: "Administrador",
				callback: "help_admin",
				content:
					`${string_base} Admin\n\n` +
					`<b>/adminlist | /admins</b>\n` +
					`Retorna la lista de los administradores\n\n` +
					`<b>/promote (replymessage)</b>\n` +
					`Promueve a un miembro o administrador\n\n` +
					`<b>/demote (replymessage)</b>\n` +
					`Degrada a un miembro o administrador\n\n` +
					`<b>/link</b>\n` +
					`Retorna el link del grupo si este esta disponible\n\n` +
					`<b>/perms (replymessage)</b>\n` +
					`Retorna los permisos del grupo\n\n` +
					`<b>/setperms</b>\n` +
					`Establece permisos optimios para el buen funcionamiento del bot\n\n` +
					`<b>/pin (replymessage) | (message)</b>\n` +
					`Ancla una nota al chat\n\n` +
					`<b>/unpin (--all)</b>\n` +
					`Desancla la nota actual o todas las notas.\n\n`,
			},
			{
				text: "Propietario",
				callback: "help_owner",
				content:
					`${string_base} <b>owner</b>\n\n` +
					`<b>/sudolist | /sudos</b>\n` +
					`Retorna la lista de los superusuarios\n\n` +
					`<b>/groups</b>\n` +
					`Retorna la lista de los grupos vinculados\n\n` +
					`<b>/send (id) (message) | (replymessage)</b>\n` +
					`Envia un mensaje o multimedia a una cuenta especifica.\n` +
					`❓: <code>/send 1234567890 Hola</code>\n\n` +
					`<b>/sudo (replymessage)</b>\n` +
					`Promueve a un usuario a sudo\n\n` +
					`<b>/eco (message)</b>\n` +
					`Envia un mensage a todos los grupos en la base de datos\n`,
			},
			{
				text: "Antiflood",
				callback: "help_antiflood",
				content:
					`${string_base} Antiflood\n\n` +
					`<b>bold</b>, <strong>bold</strong>
					<i>italic</i>, <em>italic</em>
					<u>underline</u>, <ins>underline</ins>
					<s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
					<b>bold <i>italic bold <s>italic bold strikethrough</s> <u>underline italic bold</u></i> bold</b>
					<a href="http://www.example.com/">inline URL</a>
					<a href="tg://user?id=123456789">inline mention of a user</a>
					<code>inline fixed-width code</code>
					<pre>pre-formatted fixed-width code block</pre>
					<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>\n`,
			},
			{
				text: "Antispam",
				callback: "help_antispam",
				content:
					`${string_base} AntiSpam\n\n` +
					`MODULO NO DISPONIBLE POR AHORA \n`,
			},
			{
				text: "Baneos",
				callback: "help_ban",
				content:
					`${string_base} Ban\n\n` +
					`<b>/ban (replymessage)</b>\n` +
					`Banea a un usuario del grupo\n\n` +
					`<b>/unban (replymessage)</b>\n` +
					`Remueve el ban al usuario\n\n` +
					`<b>/setban (replymessage)</b>\n` +
					`Establece un mensaje para mostrar durante el baneo\n\n`,
			},
			{
				text: "Bios",
				callback: "help_bios",
				content:
					`${string_base} Bios And Abouts\n\n` +
					`<b>/setbio (replymessage)</b>\n` +
					`Establece una biografia al usuario\n\n` +
					`<b>/bio (replymessage)</b>\n` +
					`Obtiene la biografia del usuario\n\n` +
					`<b>/bio (replymessage) (--rm)</b>\n` +
					`Elimina la biogradia del usuario\n\n` +
					`<b>/info (replymessage)</b>\n` +
					`Obtiene la informacion de un usuario\n\n`,
			},
			{
				text: "Lista negra",
				callback: "help_black_list",
				content:
					`${string_base} BlackList\n\n` +
					`MODULO NO DISPONIBLE POR AHORA \n`,
			},
			{
				text: "Github",
				callback: "help_github",
				content:
					`${string_base} GitHub\n\n` +
					`<b>/git (user)</b>\n` +
					`Retorna la informacion del usuario.\n\n` +
					`<b>/repos (user)</b>\n` +
					`Obtiene los repositosios del usuario\n\n` +
					`<b>/clone (user) (repo) | (url)</b>\n` +
					`Descarga el repositorio con parametros o una url valida\n\n` +
					`<b>/repo (user) (repo)</b>\n` +
					`Obtiene un repositorio en especifico\n\n`,
			},
			{
				text: "Extras",
				callback: "help_extras",
				content:
					`${string_base} Extras\n\n` +
					`<b>/cc cant code code</b>\n` +
					`Retorna la equvalencia actual de las monedas en solicidatas.\n` +
					`❓: <code>/cc 1 USD MXO</code>\n\n` +
					`<b>/loli</b>\n` +
					`Retorna una loli\n\n` +
					`<b>/poll (question) "1", "2"</b>\n` +
					`❓: <code>/poll (are you ok?) "yes" "no"</code>\n` +
					`Retorna una encuesta publica de respuestas multiples.\n\n`,
			},
			{
				text: "Silencio",
				callback: "help_mute",
				content:
					`${string_base} Silencio\n\n` +
					`MODULO NO DISPONIBLE POR AHORA \n`,
			},
			{
				text: "Notas",
				callback: "help_notes",
				content:
					`${string_base} Notas\n\n` +
					`<b>/notes</b>\n` +
					`Obtiene todas las notas guardadas.\n\n` +
					`<b>/add | /save  (replymessage) | (message)</b>\n` +
					`Agrega una nota a la base de datos\n\n` +
					`<b>#notename (--rm)</b>\n` +
					`Obtiene una nota en especifico o borra la nota con el atributo "--rm"\n\n`,
			},
			{
				text: "Reglas",
				callback: "help_rules",
				content:
					`${string_base} Reglas\n\n` +
					`MODULO NO DISPONIBLE POR AHORA \n`,
			},
			{
				text: "Stickers",
				callback: "help_stickers",
				content:
					`${string_base} Stickers\n\n` +
					`<b>/stickerid (replymessage)</b>\n` +
					`Retorna el Id del sticker al que se responde\n\n` +
					`<b>/kang (replymessage)</b>\n` +
					`Añade como un sticker la imagen o sticker enviado, a su propio StickerPack\n`,
			},
			{
				text: "Traductor",
				callback: "help_translate",
				content:
					`${string_base} Traductor\n\n` +
					`<b>/tr (lang) (text) | (replymessage)</b>\n` +
					`Retorna la traduccion del texto escrito o el mensage respondido\n` +
					`❓: <code>/tr es Hello World</code>\n`,
			},
			{
				text: "Usuarios",
				callback: "help_users",
				content:
					`${string_base} Usuarios\n\n` +
					`<b>/info (replymessage)</b>\n` +
					`Retorna la informacion del usuario o grupo\n\n` +
					`/id (replymessage)\n` +
					`Retorna solo el id del usuario|grupo\n`,
			},
			{
				text: "Advertencias",
				callback: "help_warns",
				content:
					`${string_base} Advertencias\n\n` +
					`<b>/warn</b>\n` +
					`Añade una advertencia al contador del usuario,
					si el contador llega a (3) el usuario sera baneado\n\n` +
					`<b>/warn --info</b>\n` +
					`Retorna los detalles del contador de advertencias del usuario\n\n` +
					`<b>/warn --rm</b>\n` +
					`Borra una advertencia del contador del usuario\n`,
			},
			{
				text: "Bienvenidas",
				callback: "help_welcomes",
				content:
					`${string_base} Bienvenidas\n\n` +
					`<b>/welcome</b>\n` +
					`Muestra las configuraciones actuales de las bienvenidas.\n\n` +
					`<b>/welcome off | on</b>\n` +
					`Activa/desactiva las bienvenidas en el chat.\n\n` +
					`<b>/setwelcome</b>\n` +
					`Establece una bienvenida personalizada.\n\n` +
					`<b>/goodbye</b>\n` +
					`Muestra las configuraciones actuales de las despedidas.\n\n` +
					`<b>/goodbye off | on</b>\n` +
					`Activa/desactiva las despedidas en el chat \n\n` +
					`<b>/setgoodbye</b>\n` +
					`Establece una despedida personalizada \n`,
			},
			//<b></b>
			{
				text: "NPM",
				callback: "help_npm",
				content:
					`${string_base} NPM\n\n` +
					`<b>/npm (packagename)</b>\n` +
					`Retorna informacion del paquete solicitado.\n\n` +
					`<b>/npm ? (packagename)</b>\n` +
					`Hace una busqueda y retorna las coincidencias del paquete solicitado.\n`,
			},
			{
				text: "Node",
				callback: "help_node",
				content:
					`${string_base} Node\n\n` +
					`<b>/os</b>\n` +
					`Retorna informacion sobre el entorno donde se ejecuta el bot.\n\n`,
			},
			{
				text: "Texto a voz",
				callback: "help_tts",
				content:
					`${string_base} Text to speach\n\n` +
					`<b>/tss (lang) (text) | (replymessage)</b>\n` +
					`Retorna un audio en el lenguaje solicidato \n`,
			},
			{
				text: "Android",
				callback: "help_android",
				content:
					`${string_base} Android\n\n` +
					`<b>/magisk</b>\n` +
					`Retorna las ultimas versiones de magisk\n\n` +
					`<b>/twrp (device)</b>\n` +
					`Retorna las compilaciones de twrp para el dispositivo solicitado.\n\n` +
					`<b>/fw (model) (csc)</b>\n` +
					`Retorna la ultima compilacion de los firmwares de samsung \n`,
			},
		],
		message:
			`Aqui te presento algunos de los modulos que actualmente tengo disponibles.\n` +
			`Puedes acceder a los modulos usando\n\n/help <modulename>`,
	},
	extrasModule: {
		noBaseFound: "Escriba un valor base",
		baseIsNaN: "EL valor base debe ser un numero",
		origNotFound: "Escriba un valor de origen",
		destNotFound: "Escriba un valor de destino",
		emptyPoll: "Escriba el contenido de la encuesta",
		emptyTitlePoll: "Escriba un titulo para la encuesta",
		minResp: "Necesito al menos 2 respuestas",
		errorFormatPoll: "Formato de encuesta erroneo",
		kangFormatError: "Este formato no puede convertirse a sticker",
		kangProcess: [
			"`Obteniendo url...`",
			"`Descargando archivo...`",
			"`Procesando imagen...`",
			"`Agregando al paquete...`",
		],
		errorCreatePack: "`Hubo un error al crear el paquete`",
		errorAddPack: "`Hubo un error al añadir el sticker al paquete`",
		finish: (name: string) =>
			`Sticker añadido satisfactoriamente [aqui](t.me/addstickers/${name})`,
		deleteSticker: "Sticker eliminado satisfactoriamente",
		tgsFormatError:
			"Por el momento no tengo compatibilidad con stickers animados.",
	},
	ownerModule: {
		invalidID: "El ID no es valido",
		noSudos: "No hay sudos por el momento.",
		sudoAdd: (sudo: string) => `${sudo} ha sido añadido a los sudos.`,
		sudoUpdate: (sudo: string) =>
			`Se han actualizado loa valores de ${sudo}.`,
		delSudo: (sudo: string) => `${sudo} ha sido eliminado de los sudos`,
		noSudo: (sudo: string) => `${sudo} no es un sudo.`,
	},
	npmModule: {
		titleSearch: "Principales modulos npm encontrados",
		title: (query: string) => `Informacion del modulo ${query}`,
	},
	welcomeModule: {
		ownerProcess: [
			"Bienvenido propietario",
			"Estableciedndo permisos...",
			"Error al establecer permisos.",
			"Permisos establecidos correctamente.",
		],
		prefRepeat: (a: string) => `El valor ya esta establecido el ${a}`,
		prefSuccess: (a: string) =>
			`Preferencias de ${
				a == "welcome" ? "bienvenida" : "despedida"
			} establecidas.`,
	},
	trasnlatorModule: {
		limit: "El mensaje sobrepasa el limite de caracteres permitido (200)",
	},
	usersModule:{
		youId:(id:number)=>`Tu ID es: \`${id}\``,
		yourId:(name:string,id:number)=>`El ID de ${name} es: \`${id}\``,
		myId:(id:number)=> `Mi ID es: \`${id}\``,
		groupId:(id:number)=>`El ID del grupo es: \`${id}\``,
		id:(id:number)=>`<b>Id:</b> <code>${id}</code>\n`,
		name:(name:string)=>`<b>Nombre:</b> <i>${name}</i>\n`,
		lastName:(lastName:string)=>`<b>Apellido:</b> <i>${lastName}</i>\n`,
		acount: (username:string)=>`<b>Cuenta:</b> <i>@${username}</i>\n`,
		range:(range:string)=>`<b>Rango:</b> <i>${range}</i>\n`,
		customTitle:(title:string)=>`<b>Titulo personalizado:</b> <i>${title}</i>\n`,
		isBot: (v:boolean)=>`<b>Tipo:</b> ${v ? ' <i>Bot</i>': '<i>Usuario</i>'}\n`,
		type:(type:string)=> `<b>Tipo:</b> <i>${type}</i>\n`,
		groupInfo:'<b>Informacion de grupo</b>\n\n',
		userInfo:'<b>Informacion de usuario</b>\n\n',
		title:(title:string)=>`<b>Titulo:</b> <i>${title}</i>\n`,
		inviteLink:(link:string, name:string)=>`<b>Link de invitacion:</b> <a href="${link}">@${name}</a>\n`
	}
};

const keys = {
	ban: "banear",
	demote: "degradar",
	promote: "promover",
	mute: 'silenciar',
	banned: "baneado(a)",
	unbanned: "desbaneado(a)",
	demoted: "degradado(a)",
	promoted: "promovido(a)",
	warn: "advertir",
};
