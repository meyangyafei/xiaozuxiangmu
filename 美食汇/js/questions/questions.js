$(function () {
	var
		prev = $(".previous-page"),
		next = $(".next-page"),
		pageNow = $(".page-number span strong").eq(0),
		pageAll = $(".page-number span strong").eq(1),
		now = Number(pageNow.text()),
		sample = $(".sample-section").clone(),
		articleCon = $(".question-article-con");

	// 更改页码：上一页
	prev.on('tap', function () {
		now = now - 1 > 0 ? now - 1 : 1;
		pageNow.text(now);

		$(".page-number > a").removeClass("active");
		$(this).addClass("active");
	});

	// 更改页码：下一页
	next.on('tap', function () {
		now = now + 1 <= 6 ? now + 1 : 6;
		pageNow.text(now);

		$(".page-number > a").removeClass("active");
		$(this).addClass("active");
	});

	//
	$(".page-number > a").on("tap", function () {
		initQuestion(sample, articleCon, pageAll, now);
	});
	initQuestion(sample, articleCon, pageAll, now);
})
function loadQuestion (context, sample, articleCon, now) {
	var
		con = context[now - 1];

	// 清除
	articleCon.empty();

	// 添加
	$.each(con, function (index, item) {
		var
			section = sample.clone(),
			question = $("a", section),
			waitNum = $(".wait strong", section),
			skim = $(".skim strong", section);

		// 修改内容
		question.text(item.question);
		waitNum.text(item.waitNum);
		skim.text(item.viewNum);

		// 添加
		articleCon.append(section);
	});
}

function initQuestion (sample, articleCon, pageAll, now) {
	// 初始内容
	$.get('../json/questions.json', function (response) {
		// 总页数
		pageAll.text(response.length);

		// 加载内容
		loadQuestion(response, sample, articleCon, now);

		// 回到顶部
		$(window).scrollTop(0);
	});
}