var modalMessage = "Message",
    inputStatus;

var footerFixed = function(){
    $(".modalList ul li a").eq(1).trigger("click");
    var _height = $(document).height();
    $("footer").css("top", _height - 260)
};

var fullPageAnimate = function(){
    var _height = $(".alignMiddle").outerHeight() / 2;

    $(".alignMiddle").css("margin-top", -_height);

    $(window).resize(function(){
        $(".alignMiddle").css("margin-top", -_height);
    });

    $(".page-scroll").click(function(){
        var _pos = $(this).parents("section").next().offset().top;
        $('body,html').animate({scrollTop: _pos - 10}, 1000, 'swing', function(){});
    });    
};

var modalTab = function(){
    $(".modalList ul li a").click(function(){
        $(".modalList ul li a").removeClass("active");
        $(this).addClass("active");

        var _index = $(this).parent().index();
        $(".modalContent").hide();
        $(".modalContent").eq(_index).show();
    });
    $(".modalTab li a").click(function(){
        $(".modalTab ul li a").removeClass("active");
        $(this).addClass("active");

        var _index = $(this).parent().index();
        $(".tabContent").hide();
        $(".tabContent").eq(_index).show();
    });
    $(".chartTab li").click(function(){
        $(".chartTab li ").removeClass("active");
        $(this).addClass("active");

        var _index = $(this).index();
        $(".chartContItem").hide();
        $(".chartContItem").eq(_index).show();
    });
};

var detailViewFunc = function() {
    $(".detail-view").each(function() {
        $(this).find(".openDetail").click(function() {
            $(this).parent().next().toggle();
            $("html, body").animate({
                scrollTop: 1500
            }, '1000', 'swing', function() {});
        });
    });
};

var detailModalFunc = function() {
	$(".modal-tab-links ul li a").click(function(){
		alert($(this).index())
	})
};

var multiSearchFunc = function() {
    $(".btn-how-to-use").click(function() {
        $(".how-to-use").slideDown();
    });
};

var toolTipFunc = function(val1, val2, val3) {
    var toolTipTemp = '<div class="chartToolTip">' +
        '<span class="light">' + val1 + ' Patch (02.25)</span>' +
        '<span class="color">Aatrox:' + val2 + '</span>' +
        '<span class="dark">Top Champion Average' + val3 + '</span>' +
        '</div>';
    return toolTipTemp;
};

var masteriesAccFunc = function() {
    $(".masteriesCols").each(function() {
        $(this).addClass("disable");
        $(this).click(function() {
            $(".masteriesCols").addClass("disable");
            $(this).removeClass("disable");
        })
    });
};


var chart01 = function() {
    $(function() {
        $('#chartPickRate').highcharts({
            chart: {
                type: 'line',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                height: 200
            },

            tooltip: {
                backgroundColor: '#171717',
                shared: true,
                useHTML: true,
                headerFormat: '<small style="color:#b8bbc4;">{point.key} Patch ()</small><div>',
                pointFormat: '<span style="color: {series.color}">{series.name}: </span>' +
                    '<span style="text-align: right; color:#fff;">Top Champion Average {point.y}</span>',
                footerFormat: '</div>',
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['6.1 (01.14)', '6.2 (01.28)', '6.3 (02.12)', '6.4 (02.25)', '6.5 <span class="emretest">qwe</span>'],
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
            },
            plotOptions: {
                series: {
                    marker: {
                        fillColor: '#f49d12',
                        lineWidth: 3,
                        radius: 4,
                        lineColor: '#ffffff' // inherit from series
                    }
                }
            },
            yAxis: {
                min: 10,
                max: 50,
                tickInterval: 10,
                title: {
                    text: '',
                },
                labels: {
                    format: '{value} %'
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                name: '.',
                data: [8, 10, 18, 10, 8],
                color: '#f49d12',
                lineWidth: 3
            }]
        });

        $('#chartGameLength').highcharts({
            chart: {
                type: 'line',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                height: 150
            },

            tooltip: {formatter: function() {
		        return this.x + ' - Aatrox ' + this.y + '(10th) Top Champion Average 50%';
		    }
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['6.1 (01.14)', '6.2 (01.28)', '6.3 (02.12)', '6.4 (02.25)', '6.5 <span class="emretest">qwe</span>'],
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
            },
            plotOptions: {
                series: {
                    marker: {
                        fillColor: '#2ecb72',
                        lineWidth: 3,
                        radius: 4,
                        lineColor: '#ffffff' // inherit from series
                    }
                }
            },
            yAxis: {
                labels: {
                    align: 'left',
                    x: 0,
                    y: 0
                },
                min: 0,
                lineWidth: 0,
                title: {
                    text: '',
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#2ecb72'
                    }]

                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                name: '.',
                data: [8, 10, 18, 10, 8],
                color: '#2ecb72',
                lineWidth: 3
            }]
        });



        $('#chartWinRate').highcharts({
            chart: {
                type: 'line',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                height: 150
            },

            tooltip: {
                backgroundColor: '#171717',
                shared: true,
                useHTML: true,
                headerFormat: '<small style="color:#b8bbc4;">{point.key} Patch ()</small><div>',
                pointFormat: '<span style="color: {series.color}">{series.name}: </span>' +
                    '<span style="text-align: right; color:#fff;">Top Champion Average {point.y}</span>',
                footerFormat: '</div>',
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['6.1 (01.14)', '6.2 (01.28)', '6.3 (02.12)', '6.4 (02.25)', '6.5 <span class="emretest">qwe</span>'],
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0
            },
            plotOptions: {
                series: {
                    marker: {
                        fillColor: '#1d79b5',
                        lineWidth: 3,
                        radius: 4,
                        lineColor: '#ffffff' // inherit from series
                    }
                }
            },
            yAxis: {
                labels: {
                    align: 'left',
                    x: 0,
                    y: 0
                },
                min: 0,
                lineWidth: 0,
                title: {
                    text: '',
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]

                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                name: '.',
                data: [8, 10, 18, 10, 8],
                color: '#2985c0',
                lineWidth: 3
            }]
        });
    });
}
var chart02 = function(){
//chartGold
//chartExp
//chartCS
    $('.chartGold').highcharts({
        chart: {
            backgroundColor: '#141415',
            height: 200,
            type: 'spline',
            width: 730
        },
        xAxis: {
            categories: ['0m', '5m', '10m', '15m', '20m', '25m'],
            tickLength: 20,
            labels: {
                style: {
                    color: '#696f7a',
                    font: '13.7px GothamLight'
                }                
            },
           tickLength: 0,
           lineWidth: 0,
           minorGridLineWidth: 0,
        },
        yAxis: {
            gridLineColor: '#696f7a',
            title: {
                enabled: true,
                text: 'Total Gold',
                style: {
                    fontWeight: 'normal'
                }
            },
            labels: {
                format: '{value}k',
                style: {
                    color: '#696f7a',
                    font: '13.7px GothamLight'
                }
            }
        },
        series: [{
            name: 'Vayne',
            data: [1, 5, 10, 15, 20, 25],
            color: '#02b473',
            lineWidth: 2,

        }, {
            name: 'Janna',
            data: [1, 2, 3, 4, 5, 6],
            color: '#c16a04',
            lineWidth: 2,
        }],
        credits: {
              enabled: false
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
            }
        },
        legend: {
            enabled: false
        },
        title:{
            text:''
        },
        exporting: {
            enabled: false
        }
    });
    $('.chartExp').highcharts({
        chart: {
            backgroundColor: '#141415',
            height: 200,
            type: 'spline',
            width: 730
        },
        xAxis: {
            categories: ['0m', '5m', '10m', '15m', '20m', '25m'],
            tickLength: 20,
            labels: {
                style: {
                    color: '#696f7a',
                    font: '13.7px GothamLight'
                }                
            },
           tickLength: 0,
           lineWidth: 0,
           minorGridLineWidth: 0,
        },
        yAxis: {
            gridLineColor: '#696f7a',
            title: {
                enabled: true,
                text: 'Total Gold',
                style: {
                    fontWeight: 'normal'
                }
            },
            labels: {
                format: '{value}k',
                style: {
                    color: '#696f7a',
                    font: '13.7px GothamLight'
                }
            }
        },
        series: [{
            name: 'Vayne',
            data: [1, 5, 10, 15, 20, 25],
            color: '#2980b9',
            lineWidth: 2,

        }, {
            name: 'Janna',
            data: [1, 2, 3, 4, 5, 6],
            color: '#8e44ad',
            lineWidth: 2,
        }],
        credits: {
              enabled: false
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
            }
        },
        legend: {
            enabled: false
        },
        title:{
            text:''
        },
        exporting: {
            enabled: false
        }
    });
    $('.chartCS').highcharts({
        chart: {
            backgroundColor: '#141415',
            height: 200,
            type: 'spline',
            width: 730
        },
        xAxis: {
            categories: ['0m', '5m', '10m', '15m', '20m', '25m'],
            tickLength: 20,
            labels: {
                style: {
                    color: '#696f7a',
                    font: '13.7px GothamLight'
                }                
            },
           tickLength: 0,
           lineWidth: 0,
           minorGridLineWidth: 0,
        },
        yAxis: {
            gridLineColor: '#696f7a',
            title: {
                enabled: true,
                text: 'Total Gold',
                style: {
                    fontWeight: 'normal'
                }
            },
            labels: {
                format: '{value}k',
                style: {
                    color: '#696f7a',
                    font: '13.7px GothamLight'
                }
            }
        },
        series: [{
            name: 'Vayne',
            data: [1, 5, 10, 15, 20, 25],
            color: '#8e44ad',
            lineWidth: 2,

        }, {
            name: 'Janna',
            data: [1, 2, 3, 4, 5, 6],
            color: '#2980b9',
            lineWidth: 2,
        }],
        credits: {
              enabled: false
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
            }
        },
        legend: {
            enabled: false
        },
        title:{
            text:''
        },
        exporting: {
            enabled: false
        }
    });
};

var customSelect = function() {
    $(".customSelect").hover(function() {
        $this = $(this);
        $(".selectOverlay").fadeIn();
        $this.find(".listItems").stop(true, true).slideDown()
        $this.find("i").removeClass("fa-angle-down")
        $this.find("i").addClass("fa-angle-up");
        $("body").addClass("addBlur")


    }, function() {
        $this = $(this);
        $this.find(".listItems").stop(true, true).slideUp();
        $this.find("i").removeClass("fa-angle-up")
        $this.find("i").addClass("fa-angle-down")
        $("body").removeClass("addBlur");
    });

    $(".listItems .listItem").click(function() {
        var selectText = $(this).text();
        $(this).parent().parent().find(".listText").text(selectText);
    });

};

var customSort = function() {
    $(".dataTable").each(function() {
        $(this).find("thead td").click(function() {
            //fa-angle-up
            //fa-angle-down
            var _class = $(this).find("i").attr("class");
            if (_class == "fa fa-angle-up") {
                $(this).find("i").removeClass("fa-angle-up")
                $(this).find("i").addClass("fa-angle-down")
            } else if (_class == "fa fa-angle-down") {
                $(this).find("i").removeClass("fa-angle-down")
                $(this).find("i").addClass("fa-angle-up")
            }

        });
    });
};

var pagerAddText = function() {
    setTimeout(function() {
        $(".dataTables_paginate").append("<div class='fl info'>Showing 1 to 5 of 200 camphions</div>")
    })
};

var bugFix = function() {
    $("table thead tr").each(function() {
        $(this).find("td").eq(0).trigger("click");
        $(this).find("td").eq(0).trigger("click");
    });
};

var tabFunc = function() {
    $(".tabContent").eq(0).show();
    $(".tabList li").click(function() {
        $(".tabList li").removeClass("active")
        $(this).addClass("active")
        $(".tabContent").hide();
        $(".tabContent").eq($(this).index()).show();
        $("table").each(function() {
            $(this).find("thead").find("tr").find("td").eq(0).trigger("click");
            $(this).find("thead").find("tr").find("td").eq(0).trigger("click");
        });
    });
};

var customRadio = function() {
    $(".filterItem").each(function() {
        $(this).find("li").click(function() {
            $(this).parent("ul").find("i").removeClass("fa-dot-circle-o")
            $(this).find("i").addClass("fa-dot-circle-o");
        });
    });
};



var tooltipTemplateFunc = function(title, info, text) {
    tooltipVal = "<div class='masteriesTooltip'><span class='arrow'></span><span class='title'>" + title + "</span><span class='info'>" + info + "</span><span class='text'>" + text + "</span></div>";
    console.log($(".masteriesTooltip").offset());
    //window.outerWidth

};


var inputPlaceFunc = function() {
    $("input, textarea").each(function() {
        $(this).focus(function() {
            if (!inputStatus) {
                _val = $(this).val();
                $(this).val("");
            }
        });
        $(this).blur(function() {
            inputStatus = true;
            $(this).val().length > 0 ? "" : $(this).val(_val);
        })
    })
};

var numPlus = function() {

    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {

                duration: 500,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });



    });

};

var goToFunc = function() {
    alert("test");
};


// jQuery dom ready
$(document).ready(function() {




    /*
	$('.swiper-container').mixItUp().on('mixEnd', function(e, state){
		$(".mix").show()
	});


    var swiper = new Swiper('.swiper-container', {

	   tap: function(event, target) {
        console.log('click');
        $('#modal-gallery').modal('show');
    	},
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 7,
        spaceBetween: 0
    });

	//swiper.slideTo(5, 1000, true)
*/
    $(".statRight").click(function() {
        $("html, body").animate({scrollTop: 800}, '1000', 'swing', function() {});
    });
    customRadio();


    $('.summaryRecent table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '260px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '105px'
        }, {
            sWidth: '70px'
        }, {
            sWidth: '55px'
        }, {
            sWidth: '55px'
        }, {
            sWidth: '90px'
        }],
    });



    $('.resultTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '150px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '100px'
        }, {
            sWidth: '77px'
        }, {
            sWidth: '55px'
        }, {
            sWidth: '55px'
        }, {
            sWidth: '90px'
        }],
    });



    $('.leaderTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": true,
        "bAutoWidth": false,
        scrollY: '420px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '80px'
        }, {
            sWidth: '300px'
        }, {
            sWidth: '200px'
        }, {
            sWidth: '280px'
        }, {
            sWidth: '280px'
        }, {
            sWidth: '280px'
        }, {
            sWidth: '255px'
        }, ]
    });


    $('.leaguesTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": true,
        "bAutoWidth": false,
        scrollY: '420px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '80px'
        }, {
            sWidth: '300px'
        }, {
            sWidth: '200px'
        }, {
            sWidth: '280px'
        }, {
            sWidth: '255px'
        }]
    });



    $('.banRate .rateTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '350px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '60px'
        }, {
            sWidth: '100px'
        }, {
            sWidth: '120px'
        }],
    });
    $('.overviewTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '350px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '60px'
        }, {
            sWidth: '100px'
        }, {
            sWidth: '120px'
        }]
    });
    $('.twoBox table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '100px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '80px'
        }, {
            sWidth: '120px'
        }, {
            sWidth: '80px'
        }]
    });

    $('.pageItems .mostCoreBuild .rateTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '220px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '80px'
        }, {
            sWidth: '120px'
        }, {
            sWidth: '80px'
        }]
    });

    $('.pageOverview .mostCoreBuild .rateTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '300px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '80px'
        }, {
            sWidth: '120px'
        }, {
            sWidth: '80px'
        }]
    });

    $('.pageItems .mostBoots .rateTable table, .pageMasteriesSub .mostBoots .rateTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '220px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '80px'
        }, {
            sWidth: '120px'
        }, {
            sWidth: '80px'
        }]

    });


    $('.pageItems .mostFinalItem .rateTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '220px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '80px'
        }, {
            sWidth: '120px'
        }, {
            sWidth: '80px'
        }]

    });




    $('.pageMasteriesSub .mostMasteries .rateTable table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: 'auto',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '110px'
        }, {
            sWidth: '540px'
        }, {
            sWidth: '105px'
        }]

    });


    $('.championStatistics table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": true,
        "bAutoWidth": false,
        scrollY: '350px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '85px'
        }, {
            sWidth: '318px'
        }, {
            sWidth: '255px'
        }, {
            sWidth: '170px'
        }, {
            sWidth: '120px'
        }, {
            sWidth: '120px'
        }, {
            sWidth: '100px'
        }]
    });


    $('.master-ranks-list table').DataTable({
        "bFilter": false,
        "bInfo": false,
        "bPaginate": false,
        "bAutoWidth": false,
        scrollY: '400px',
        "scrollCollapse": true,
        "aoColumns": [{
            sWidth: '50px'
        }, {
            sWidth: '100px'
        }, {
            sWidth: '50px'
        }, {
            sWidth: '50px'
        }, {
            sWidth: '100px'
        }]
    });



    $('.rateTable .dataTables_scrollBody, .filterItem ul, .statTableContent .dataTables_scrollBody, .timeline').slimScroll({
        height: 'auto',
        opacity: 0
    }).mouseover(function() {
        $(this).next('.slimScrollBar').css('opacity', 0.4);
    });




    tabFunc();

    $(".bottomCol .item").each(function() {
        $(this).hover(function() {
            var _title = $(this).attr("data-title"),
                _info = $(this).attr("data-info"),
                _text = $(this).attr("data-text");
            tooltipTemplateFunc(_title, _info, _text);
            $(this).append(tooltipVal);
        }, function() {
            $(".masteriesTooltip").remove();
        })
    });

    numPlus();
    inputPlaceFunc();
    $(".contactModal textarea").val(modalMessage);


    //$(".contactModal, #modalOverlay").fadeIn();
    /* select2 textbox disabled */

    /*$(".customSelect").select2({
    	minimumResultsForSearch: -1
    });*/

    /* select 2 addClass */
    /*$(".customSelect").each(function(){
    	var addClass = $(this).attr("class").split(" ")[1];
    	$("." + addClass).next().addClass("_js"+addClass)
    });*/

    /* select 2 open js addClass */
    /*$(".customSelect").next().each(function(){
		$(this).click(function(){
			//$(".regionSelect").addClass('w160')
			var addClass = $(this).prev().attr("data-name");
			$(".select2-container").addClass(addClass + "Content");
   			$('.select2-results__options').slimScroll();
		});
	});*/

    /* championSearch Slide */
    $(".championSlide").owlCarousel({
        items: 7,
        center: true,
        loop: true,
        margin: 40,
        nav: true
    });

    $(document).on('click', '.owl-item', function() {
        n = $(this).index();
        $('.championSlide').trigger('to.owl.carousel', n)
    });



    /* Scroll Edit */
    //$('.rateTable .rateContent, .filterItem ul').perfectScrollbar();
    /* Table Sort */
    //$(".rateTable table").tablesorter();
    /* Modal Func */
    $(".newsLetter").click(function() {
        $(".newsLetterModal, #modalOverlay").fadeIn();
    });

    $(".modalClose").click(function() {
        $("#modalOverlay, #modal").fadeOut();
    });

    $(".showContactModal").click(function() {
        $(".contactModal, #modalOverlay").fadeIn();
    });

    $("#modalOverlay").click(function() {
        $("#modalOverlay, #modal").fadeOut();
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $("#modalOverlay, #modal").fadeOut();
        };
    });

    $(".statTable").on("click", function() {
        StatFunc();
    });


    /* Table Sort */

    /*
    	var options = {
      		valueNames: [ 'rateID', 'rateChampion', 'rateValue' ]
    	};
    	var userList = new List('rateTable', options);

    	var options2 = {
      		valueNames: [ 'rateID', 'rateChampion', 'rateWin', 'ratePlayed', 'rateKDA', 'rateCS', 'rateGold' ],
      		page: 5,
      		plugins: [
      		ListPagination({})
      		]
    	};
    	var userList2 = new List('statTable', options2);
    */
    pagerAddText();
    customSort();
    bugFix();
    customSelect();
    masteriesAccFunc();
    multiSearchFunc();
    chart01();
    chart02();
    detailViewFunc();
    detailModalFunc();
    fullPageAnimate();
    modalTab();
    footerFixed();
});

var StatFunc = function() {
    $(".rateWin strong").each(function() {
        var _text = $(this).text();
        var _val = _text.split("%")[0];
        var _firstVal = _val.split(".")[0];
        $(this).prev().find(".rateBar").css("width", _val + "%");
        if (_firstVal == 0) {
            $(this).prev().find(".rateBar").css("width", "1%");
        };

        /* color control */
        if (_firstVal > 15) {
            $(this).prev().find(".rateBar").addClass("bgGreyGra")
        } else if (_firstVal > 10) {
            $(this).prev().find(".rateBar").addClass("bgOrange")
        } else if (_firstVal < 10) {
            $(this).prev().find(".rateBar").addClass("bgRed")
        }

    });
}


/* custom bar */
setTimeout(function() {
    $(".rateVal").each(function() {
        var _text = $(this).text();
        var _val = _text.split("%")[0];
        var _firstVal = _val.split(".")[0];
        $(this).next().find(".rateBar").css("width", _val + "%");
        if (_firstVal <= 3) {
            $(this).next().find(".rateBar").css("width", "3%");
        };

        /* color control */
        if (_firstVal > 15) {
            $(this).next().find(".rateBar").addClass("bgGreen")
        } else if (_firstVal > 10) {
            $(this).next().find(".rateBar").addClass("bgOrange")
        } else if (_firstVal <= 10) {
            $(this).next().find(".rateBar").addClass("bgRed")
        }
    });


    $(".rankStateRight .rateVal").each(function() {
        var _text = $(this).text();
        var _val = _text.split("%")[0];
        var _firstVal = _val.split(".")[0];
        $(this).parent().parent().find(".rateBar").css("width", _val + "%");
        if (_firstVal <= 3) {
            $(this).parent().parent().find(".rateBar").css("width", "3%");
        };

        /* color control */
        if (_firstVal > 15) {
            $(this).parent().parent().find(".rateBar").addClass("bgGreen")
        } else if (_firstVal > 10) {
            $(this).parent().parent().find(".rateBar").addClass("bgOrange")
        } else if (_firstVal <= 10) {
            $(this).parent().parent().find(".rateBar").addClass("bgRed")
        }
    });

}, 500);

/* custom bar */
setTimeout(function() {
    StatFunc();
}, 500);

// Pure dom ready
(function() {})();