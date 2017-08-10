define([], function() {

	var Tips = (function() {

		var $tipBox = $(".tips-box");
		var $tipsInner = $tipBox.children(".tips-inner");
		$tipBox.show();
		var tipBoxHeight = $tipsInner.css("height");
		$tipsInner.hide();
		$tipBox.removeClass("hide");

		return {
			show: function(idx) {
				var standardLinePx = 20 + 6;
				var paddingValue = '8px 0';
				var topMovePx = 24 + idx * 48 + 8;

				$tipsInner.css("top", -standardLinePx)
					.css("padding", "0")
					.css("height", "0")
					.show();
				$tipsInner.animate({
					top: -(standardLinePx + topMovePx),
					padding: paddingValue,
					height: tipBoxHeight
				}, 200);

			},
			hide: function() {
				$tipsInner.fadeOut(300);
			},
			init: function() {

			}
		};
	})();

	//bind & slide use this index
	var index = 0;

	var slide = function(idx) {
		var $wrap = $(".switch-wrap");
		$wrap.css("transform", "translate(-" + (idx * 100) + "%,0)");
		$(".icon-wrap").addClass("hide");
		$(".icon-wrap").eq(idx).removeClass("hide");
		index = idx;
	};

	var bind = function() {

		var timeout = 5000; //5秒后关闭
		var taskid = 0;

		$(".tips-inner li").bind("mouseup", function() {
			index = $(this).index();
			slide(index);
			Tips.hide();
		});

		$('body').click(function() {
			Tips.hide();
		});

		$(".icon").click(function() {
			Tips.show(index);
			return false;
		});

		$(".tips-box").bind("mouseenter", function() {
			clearTimeout(taskid);
		}).bind("mouseleave", function() {
			taskid = setTimeout(function() { //todo
				Tips.hide();
			}, timeout);
		});
	};

	var setColumn = function() {
		var $switchPart1 = $('section.switch-part1');
		$switchPart1.siblings().css("left", function(index) {
			return (index + 1) * 100 + '%';
		});

	};

	// fetch bangumi rss inside
	var bangumiRssClass = '.bangumi-rss-inside';
	var bangumiInit = function () {
		var bangumiRssSection = $(bangumiRssClass);
		var url = bangumiRssSection.attr('data-url').trim();
		$.get(url).done(function (data) {
			var innerHtml = data.entries.map(function (entry) {
				return `
					<li>
						<div>${entry.content}</div>
						<div class="time" title="${entry.time}">${entry.timeText}</div>
					</li>
				`
			}).join('');
			innerHtml += `<li><a href="${data.link}">更多 ${data.title} <i class="fa fa-external-link" aria-hidden="true"></i></a></li>`;
			innerHtml = `<ul>${innerHtml}</ul>`;
			bangumiRssSection.html(innerHtml);
			bangumiRssSection.find('a').prop('target', '_blank');
		});
	}

	return {
		init: function() {
			bind();
			setColumn();
			Tips.init();
			if ($(bangumiRssClass).length > 0) {
				bangumiInit();
			}
		},
		slide: slide
	};
});