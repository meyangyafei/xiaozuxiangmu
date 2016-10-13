$(function () {
	var
		navLinks = $("nav .content a"),
		allQuestion = navLinks.eq(0),
		myAsk =  navLinks.eq(1),
		quesCon = $(".question-relevent"),
		article = quesCon.find('article').clone(),
		sample = $(".sample-section", article).clone(),
		now = Number($(".page-number span strong", article).eq(0).text())
		url = "ask.html",
		form = null;

	myAsk.on('tap', function () {
		var
			url = "ask.html";

		// 更换内容
		if(!form) {
			$.get(url, function (respone) {
				form = respone;
				quesCon.html(form);
			});
		}else {
			quesCon.html(form);
		}

		// 更改类名
		navLinks.removeClass("active");
		$(this).addClass("active");
	});

	allQuestion.on('tap', function () {
		var
			articleCon = $(".question-article-con", article),
			pageAll = $(".page-number span strong", article).eq(1);

		// 更换内容
		initQuestion(sample, articleCon, pageAll, now);
		quesCon.html(article)

		// 更改类名
		navLinks.removeClass("active");
		$(this).addClass("active");
	});
})
