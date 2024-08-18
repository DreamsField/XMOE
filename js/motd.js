var getting = {
	url: 'https://mcmap.top/motd?ip=fycx.xmoe.top&port=1035',
	dataType: 'json',
	success: function (res) {
		if (res.code = 200) {
			if (res.status == "online") {
				var servermotd = res.motd
				var serverstatus = "在线"
				var serverversion = res.version
				var serveragreement = res.agreement
				var serveronline = (res.online + "/" + res.max)
				var serverdelay = res.delay + "ms"
			} else {
				var servermotd = "服务器维护中"
				var serverstatus = "服务器维护中"
				var serverversion = "服务器维护中"
				var serveragreement = "服务器维护中"
				var serveronline = "服务器维护中"
				var serverdelay = "服务器维护中"
			}
		$("#motd").html(servermotd);
		$("#status").html(serverstatus);
		$("#version").html(serverversion);
		$("#agreement").html(serveragreement);
		$("#online").html(serveronline);
		$("#delay").html(serverdelay);
		//下面的用不上
		$("#real").html(res.real);
		$("#location").html(res.location);
		$("#max").html(res.max);
		$("#gamemode").html(res.gamemode);
		}
	}
};
setInterval(function () { $.ajax(getting) }, 1000);