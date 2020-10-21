const Template = require('dw/util/Template');
const HashMap = require('dw/util/HashMap');

/**
 * Render logic for the banner
 * @param {dw.experience.PageScriptContext} context The page context
 * @return {string} The rendered template
 */
module.exports.render = function (context) {
    const model = new HashMap();
    const { content } = context;

    var ribbonText = content.ribbonText;
    var topText = content.topText;
    var bottomText = content.bottomText;

   // model.html = content.html.content;
    model.html = "<style>* { font-family: Helvetica, Arial, sans-serif; }\n" +
        "\n" +
        ".promoBox {\n" +
        "\tdisplay: inline-block;\n" +
        "\tposition: relative;\n" +
        "\tmargin: 5px;\n" +
        "\tpadding: 10px;\n" +
        "\twidth: 300px;\n" +
        "    border: 2px solid #ddd;\n" +
        "\t-webkit-border-radius: 8px;\n" +
        "\t\t\tborder-radius: 8px;\n" +
        "  \toverflow: hidden;\n" +
        "\n" +
        "\tbackground: #ffffff;\n" +
        "\tbackground: -moz-linear-gradient(-45deg, #ffffff 0%, #f1f1f1 50%, #e1e1e1 51%, #f6f6f6 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#ffffff), color-stop(50%,#f1f1f1), color-stop(51%,#e1e1e1), color-stop(100%,#f6f6f6));\n" +
        "\tbackground: -webkit-linear-gradient(-45deg, #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);\n" +
        "\tbackground: -o-linear-gradient(-45deg, #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);\n" +
        "\tbackground: -ms-linear-gradient(-45deg, #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);\n" +
        "\tbackground: linear-gradient(135deg, #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=1 );\n" +
        "\n" +
        "\t-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);\n" +
        "\t\t\tbox-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);\n" +
        "}\n" +
        "\n" +
        ".promoBox aside {\n" +
        "\tposition: absolute;\n" +
        "\twidth: 230px;\n" +
        "\tright: 0;\n" +
        "\tmargin: 0 -65px 0 0;\n" +
        "\t-webkit-transform: rotate(35deg);\n" +
        "\t -khtml-transform: rotate(35deg);\n" +
        "\t   -moz-transform: rotate(35deg);\n" +
        "\t\t-ms-transform: rotate(35deg);\n" +
        "\t\t\ttransform: rotate(35deg);\n" +
        "\t-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);\n" +
        "\t\t\tbox-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);\n" +
        "\ttext-align: center;\n" +
        "\ttext-transform: uppercase;\n" +
        "\tfont-size: 10px;\n" +
        "\t\n" +
        "\tcolor: #fff;\n" +
        "\tbackground: #4f85bb;\n" +
        "\tbackground: -moz-linear-gradient(-45deg, #4f85bb 0%, #4f85bb 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#4f85bb), color-stop(100%,#4f85bb));\n" +
        "\tbackground: -webkit-linear-gradient(-45deg, #4f85bb 0%,#4f85bb 100%);\n" +
        "\tbackground: -o-linear-gradient(-45deg, #4f85bb 0%,#4f85bb 100%);\n" +
        "\tbackground: -ms-linear-gradient(-45deg, #4f85bb 0%,#4f85bb 100%);\n" +
        "\tbackground: linear-gradient(135deg, #4f85bb 0%,#4f85bb 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4f85bb', endColorstr='#4f85bb',GradientType=1 );\n" +
        "\n" +
        "}\n" +
        "\n" +
        ".promoBox aside p { padding: 10px 80px 10px 80px; margin: 0; }\n" +
        ".promoBox h4 { \n" +
        "\tfont-size: 25px; \n" +
        "\tmargin: 0; \n" +
        "\tpadding: 0 35% 10px 0; \n" +
        "\tline-height: 25px; \n" +
        "\tborder-bottom: 1px solid #ddd;\n" +
        "\n" +
        "}\n" +
        ".promoBox p { font-size: 12px; }\n" +
        "\n" +
        "/* COLOR: Box & Text\n" +
        "\\* --------------------------------- */\n" +
        ".promoBox.info-box {\n" +
        "\tbackground: #e0f3fa;\n" +
        "\tbackground: -moz-linear-gradient(-45deg, #e0f3fa 0%, #d8f0fc 50%, #b8e2f6 51%, #b6dffd 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#e0f3fa), color-stop(50%,#d8f0fc), color-stop(51%,#b8e2f6), color-stop(100%,#b6dffd));\n" +
        "\tbackground: -webkit-linear-gradient(-45deg, #e0f3fa 0%,#d8f0fc 50%,#b8e2f6 51%,#b6dffd 100%);\n" +
        "\tbackground: -o-linear-gradient(-45deg, #e0f3fa 0%,#d8f0fc 50%,#b8e2f6 51%,#b6dffd 100%);\n" +
        "\tbackground: -ms-linear-gradient(-45deg, #e0f3fa 0%,#d8f0fc 50%,#b8e2f6 51%,#b6dffd 100%);\n" +
        "\tbackground: linear-gradient(135deg, #e0f3fa 0%,#d8f0fc 50%,#b8e2f6 51%,#b6dffd 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0f3fa', endColorstr='#b6dffd',GradientType=1 );\n" +
        "\tborder-color: #b6e1f6;\n" +
        "}\n" +
        ".promoBox.info-box h4 { color: #225b9c; border-color: #8dc2dd; }\n" +
        "\n" +
        ".promoBox.warning-box {\n" +
        "\tbackground: #fceabb;\n" +
        "\tbackground: -moz-linear-gradient(-45deg, #fceabb 0%, #fccd4d 50%, #f8b500 51%, #fbdf93 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#fceabb), color-stop(50%,#fccd4d), color-stop(51%,#f8b500), color-stop(100%,#fbdf93));\n" +
        "\tbackground: -webkit-linear-gradient(-45deg, #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%);\n" +
        "\tbackground: -o-linear-gradient(-45deg, #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%);\n" +
        "\tbackground: -ms-linear-gradient(-45deg, #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%);\n" +
        "\tbackground: linear-gradient(135deg, #fceabb 0%,#fccd4d 50%,#f8b500 51%,#fbdf93 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fbdf93',GradientType=1 );\n" +
        "\tborder-color: #fccf5a;\n" +
        "}\n" +
        ".promoBox.warning-box h4 { color: #775600; border-color: #9e8135; }\n" +
        "\n" +
        ".promoBox.danger-box {\n" +
        "\tbackground: #f85032;\n" +
        "\tbackground: -moz-linear-gradient(-45deg, #f85032 0%, #f16f5c 50%, #f6290c 51%, #f02f17 71%, #e73827 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#f85032), color-stop(50%,#f16f5c), color-stop(51%,#f6290c), color-stop(71%,#f02f17), color-stop(100%,#e73827));\n" +
        "\tbackground: -webkit-linear-gradient(-45deg, #f85032 0%,#f16f5c 50%,#f6290c 51%,#f02f17 71%,#e73827 100%);\n" +
        "\tbackground: -o-linear-gradient(-45deg, #f85032 0%,#f16f5c 50%,#f6290c 51%,#f02f17 71%,#e73827 100%);\n" +
        "\tbackground: -ms-linear-gradient(-45deg, #f85032 0%,#f16f5c 50%,#f6290c 51%,#f02f17 71%,#e73827 100%);\n" +
        "\tbackground: linear-gradient(135deg, #f85032 0%,#f16f5c 50%,#f6290c 51%,#f02f17 71%,#e73827 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827',GradientType=1 );\n" +
        "\tborder-color: #ff433e;\n" +
        "\tcolor: #fff;\n" +
        "}\n" +
        ".promoBox.danger-box h4 { color: #fff; border-color: #ff706d; }\n" +
        "\n" +
        ".promoBox.success-box {\n" +
        "\tbackground: #9dd53a;\n" +
        "\tbackground: -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#9dd53a), color-stop(50%,#a1d54f), color-stop(51%,#80c217), color-stop(100%,#7cbc0a));\n" +
        "\tbackground: -webkit-linear-gradient(-45deg, #9dd53a 0%,#a1d54f 50%,#80c217 51%,#7cbc0a 100%);\n" +
        "\tbackground: -o-linear-gradient(-45deg, #9dd53a 0%,#a1d54f 50%,#80c217 51%,#7cbc0a 100%);\n" +
        "\tbackground: -ms-linear-gradient(-45deg, #9dd53a 0%,#a1d54f 50%,#80c217 51%,#7cbc0a 100%);\n" +
        "\tbackground: linear-gradient(135deg, #9dd53a 0%,#a1d54f 50%,#80c217 51%,#7cbc0a 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9dd53a', endColorstr='#7cbc0a',GradientType=1 );\n" +
        "\tborder-color: #9dd53a;\n" +
        "\tcolor: #fff;\n" +
        "}\n" +
        ".promoBox.success-box h4 { color: #4d690b; border-color: #ccfc5a; }\n" +
        "\n" +
        "/* COLOR: Ribbon\n" +
        "\\* --------------------------------- */\n" +
        ".promoBox.info-ribbon aside {\n" +
        "\tbackground: #1e5799;\n" +
        "\tbackground: -moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(50%,#2989d8), color-stop(51%,#207cca), color-stop(100%,#7db9e8));\n" +
        "\tbackground: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);\n" +
        "\tbackground: -o-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);\n" +
        "\tbackground: -ms-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);\n" +
        "\tbackground: linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 );\n" +
        "}\n" +
        "\n" +
        ".promoBox.warning-ribbon aside {\n" +
        "\tbackground: #f9c667;\n" +
        "\tbackground: -moz-linear-gradient(-45deg, #f9c667 0%, #f79621 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#f9c667), color-stop(100%,#f79621));\n" +
        "\tbackground: -webkit-linear-gradient(-45deg, #f9c667 0%,#f79621 100%);\n" +
        "\tbackground: -o-linear-gradient(-45deg, #f9c667 0%,#f79621 100%);\n" +
        "\tbackground: -ms-linear-gradient(-45deg, #f9c667 0%,#f79621 100%);\n" +
        "\tbackground: linear-gradient(135deg, #f9c667 0%,#f79621 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9c667', endColorstr='#f79621',GradientType=1 );\n" +
        "}\n" +
        "\n" +
        ".promoBox.danger-ribbon aside {\n" +
        "\tbackground: #ff3019;\n" +
        "\tbackground: -moz-linear-gradient(45deg, #ff3019 0%, #cf0404 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left bottom, right top, color-stop(0%,#ff3019), color-stop(100%,#cf0404));\n" +
        "\tbackground: -webkit-linear-gradient(45deg, #ff3019 0%,#cf0404 100%);\n" +
        "\tbackground: -o-linear-gradient(45deg, #ff3019 0%,#cf0404 100%);\n" +
        "\tbackground: -ms-linear-gradient(45deg, #ff3019 0%,#cf0404 100%);\n" +
        "\tbackground: linear-gradient(45deg, #ff3019 0%,#cf0404 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff3019', endColorstr='#cf0404',GradientType=1 );\n" +
        "}\n" +
        "\n" +
        ".promoBox.success-ribbon aside {\n" +
        "\tbackground: #a9db80;\n" +
        "\tbackground: -moz-linear-gradient(-45deg, #a9db80 0%, #96c56f 100%);\n" +
        "\tbackground: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#a9db80), color-stop(100%,#96c56f));\n" +
        "\tbackground: -webkit-linear-gradient(-45deg, #a9db80 0%,#96c56f 100%);\n" +
        "\tbackground: -o-linear-gradient(-45deg, #a9db80 0%,#96c56f 100%);\n" +
        "\tbackground: -ms-linear-gradient(-45deg, #a9db80 0%,#96c56f 100%);\n" +
        "\tbackground: linear-gradient(135deg, #a9db80 0%,#96c56f 100%);\n" +
        "\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a9db80', endColorstr='#96c56f',GradientType=1 );\n" +
        "}\n" +
        "</style>\n" +
        "<center>\n" +
        "<br><div class=\"promoBox success-ribbon\">\n" +
        "\t<aside><p>"+ ribbonText + "</p></aside>\n" +
        "\t<h4>" + topText + "</h4>\n" +
        "\t<p>" + bottomText + "</p>\n" +
        "</div>\n" +
        "</center>";

    return new Template('experience/components/assets/distributorDashboard').render(model).text;
};
