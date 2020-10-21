const Template = require('dw/util/Template');
const HashMap = require('dw/util/HashMap');
const FileWriter = require('dw/io/FileWriter')
const File = require('dw/io/File')

/**
 * Render logic for the banner
 * @param {dw.experience.PageScriptContext} context The page context
 * @return {string} The rendered template
 */
module.exports.render = function (context) {
    const model = new HashMap();
    const { content } = context;

    let file;
    let writer;
    try {
        file = new File("/CATALOGS/nto-storefront-global/stuffs.css");
        // file.createNewFile();
        // temps = 0;
        // writer = new FileWriter(file);
        // writer.writeLine("stuffs is here!!!!");
        // writer.close();
    } catch (e) {

    }




   // model.html = content.html.content;
    model.html = "<style>\n" +
        "    .text-center {\n" +
        "        text-align: center;\n" +
        "    }\n" +
        "\n" +
        "\n" +
        "    .text--kpi--link {\n" +
        "        font-family: proxima-nova,sans-serif;\n" +
        "        font-size: 1.17rem;\n" +
        "        text-transform: uppercase;\n" +
        "        color: #747474;\n" +
        "    }\n" +
        "\n" +
        "    .SvgIcon[icon].icon--kpi {\n" +
        "        height: 1.65em;\n" +
        "        width: 1.65em;\n" +
        "    }\n" +
        "    .SvgIcon[icon] {\n" +
        "        display: inline-block;\n" +
        "        width: 2rem;\n" +
        "        height: 2rem;\n" +
        "        color: #231f20;\n" +
        "    }\n" +
        "    .marginBottom--negative--xs {\n" +
        "        margin-bottom: -5px;\n" +
        "    }\n" +
        "    .color--kpiLink {\n" +
        "        color: #747474!important;\n" +
        "    }\n" +
        "\n" +
        "    path[Attributes Style] {\n" +
        "        d: path(\"M 20.736 192 L 8.187 204.55 L 3.92 208.434 l 4.267 4.482 L 24.92 196.183 Z\");\n" +
        "        transform: translate(1280.46, 326.843);\n" +
        "        fill: currentcolor;\n" +
        "    }\n" +
        "\n" +
        "    path[Attributes Style] {\n" +
        "        d: path(\"M 8.1 192 l 12.55 12.55 l 4.267 3.885 l -4.267 4.482 L 3.92 196.183 Z\");\n" +
        "        transform: translate(1280.46, 326.843);\n" +
        "        fill: currentcolor;\n" +
        "    }\n" +
        "\n" +
        "    user agent stylesheet\n" +
        "    :not(svg) {\n" +
        "        transform-origin: 0px 0px;\n" +
        "    }\n" +
        "\n" +
        "    .SvgIcon[icon] img, .SvgIcon[icon] svg {\n" +
        "        width: 100%;\n" +
        "        height: 100%;\n" +
        "        pointer-events: none;\n" +
        "    }\n" +
        "    svg:not(:root) {\n" +
        "        overflow: hidden;\n" +
        "    }\n" +
        "\n" +
        "    .container__cards {\n" +
        "        display: flex;\n" +
        "        flex-wrap: nowrap;\n" +
        "        height: 50%;\n" +
        "    }\n" +
        "    .container__content__topmargin {\n" +
        "        margin-top: 1.5rem;\n" +
        "    }\n" +
        "\n" +
        "    .container__content {\n" +
        "        background-size: cover;\n" +
        "        /*max-width: 800px;*/\n" +
        "        max-width: 1300px;\n" +
        "        margin-left: auto;\n" +
        "        margin-right: auto;\n" +
        "    }\n" +
        "\n" +
        "    .border--light {\n" +
        "        border: 1px solid #e9e9e9;\n" +
        "    }\n" +
        "    .panel__card__left {\n" +
        "        margin: 1.5rem;\n" +
        "        margin-left: unset;\n" +
        "    }\n" +
        "    .panel__card__width17 {\n" +
        "        max-width: 12rem;\n" +
        "        /*max-width: 17rem;*/\n" +
        "        margin: 1.5rem;\n" +
        "    }\n" +
        "\n" +
        "    .card--width--pct30, .col--width--pct30 {\n" +
        "        flex-basis: 30%;\n" +
        "    }\n" +
        "    .panel__card__right {\n" +
        "        margin: 1.5rem;\n" +
        "        margin-right: unset;\n" +
        "    }\n" +
        "\n" +
        "    .card--direction--row {\n" +
        "        flex-direction: row;\n" +
        "    }\n" +
        "\n" +
        "    .card--nowrap {\n" +
        "        flex-wrap: nowrap;\n" +
        "    }\n" +
        "\n" +
        "    .container__cards__chartalign {\n" +
        "        height: 75%;\n" +
        "        align-items: center;\n" +
        "    }\n" +
        "\n" +
        "    .container__cards {\n" +
        "        display: flex;\n" +
        "        flex-wrap: nowrap;\n" +
        "        justify-content: space-between;\n" +
        "\n" +
        "    }\n" +
        "\n" +
        "    .panel__card__chartwidth {\n" +
        "        flex-basis: 30%;\n" +
        "    }\n" +
        "    .panel__card__width13 {\n" +
        "        max-width: 13rem;\n" +
        "    }\n" +
        "\n" +
        "    .panel__card__innerpanel__center {\n" +
        "        justify-content: center;\n" +
        "        text-align: center;\n" +
        "    }\n" +
        "\n" +
        "    .text--kpi--small--bold {\n" +
        "        font-family: proxima-nova,sans-serif;\n" +
        "        font-size: 1rem;\n" +
        "        line-height: 1rem;\n" +
        "        font-weight: 700;\n" +
        "    }\n" +
        "\n" +
        "    .color--negative {\n" +
        "        color: #ed4444!important;\n" +
        "    }\n" +
        "\n" +
        "    .card--width--pct10, .col--width--pct10 {\n" +
        "        flex-basis: 10%;\n" +
        "    }\n" +
        "\n" +
        "    path[Attributes Style] {\n" +
        "        d: path(\"M 0 0 L 328 0 L 328 66 L 0 66 Z\");\n" +
        "        stroke: none;\n" +
        "        fill: rgb(255, 255, 255);\n" +
        "    }\n" +
        "\n" +
        "    path[Attributes Style] {\n" +
        "        d: path(\"M 5 5 L 215 5 L 215 60 L 5 60 Z\");\n" +
        "        stroke: none;\n" +
        "        fill: rgb(255, 255, 255);\n" +
        "        fill-opacity: 0;\n" +
        "    }\n" +
        "\n" +
        "    .kpi__desc__center {\n" +
        "        width: 75%;\n" +
        "        text-align: center;\n" +
        "    }\n" +
        "\n" +
        "    .panel__card {\n" +
        "        border: 1px solid silver;\n" +
        "        display: flex;\n" +
        "        flex-direction: column;\n" +
        "        flex: 1 1 auto;\n" +
        "        margin: 10px;\n" +
        "    }\n" +
        "    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n" +
        "        display: block;\n" +
        "    }\n" +
        "    * {\n" +
        "        -webkit-box-sizing: border-box;\n" +
        "        -moz-box-sizing: border-box;\n" +
        "        box-sizing: border-box;\n" +
        "    }\n" +
        "    .panel__card__content {\n" +
        "        height: 100%;\n" +
        "        padding: 5px;\n" +
        "    }\n" +
        "    .text--kpi--title {\n" +
        "        color: #747474;\n" +
        "        font-weight: 500;\n" +
        "        font-family: proxima-nova,sans-serif;\n" +
        "        margin-bottom: 1rem;\n" +
        "        font-size: 1rem;\n" +
        "    }\n" +
        "\n" +
        "    .text-left {\n" +
        "        text-align: left;\n" +
        "    }\n" +
        "    .text--kpi--large {\n" +
        "        font-family: proxima-nova,sans-serif;\n" +
        "        font-size: 1.5rem;\n" +
        "        line-height: 1.5rem;\n" +
        "        margin-bottom: .4rem;\n" +
        "        font-weight: 600;\n" +
        "        color: #00aeef;\n" +
        "    }\n" +
        "    .text--kpi--small {\n" +
        "        font-family: proxima-nova,sans-serif;\n" +
        "        font-size: 0.875rem;\n" +
        "        font-weight: 400;\n" +
        "        line-height: 1.4;\n" +
        "        //line-height: 1rem;\n" +
        "        margin-bottom: 1rem;\n" +
        "    }\n" +
        "    .text--kpi--medium {\n" +
        "        font-family: proxima-nova,sans-serif;\n" +
        "        font-size: 1.rem;\n" +
        "        line-height: 1.rem;\n" +
        "        margin-bottom: .4rem;\n" +
        "        font-weight: 600;\n" +
        "        color: #00aeef;\n" +
        "    }\n" +
        "    .panel__card__title {\n" +
        "        background-color: #e9e9e9;\n" +
        "        padding: 5px;\n" +
        "    }\n" +
        "\n" +
        "    a.UndecoratedLink {\n" +
        "        text-decoration: none;\n" +
        "    }\n" +
        "\n" +
        "\n" +
        "</style>\n" +
        "\n" +
        "\n" +
        "        <section class=\"container__cards container__content container__content__topmargin\">\n" +
        "            <article class=\"panel__card panel__card__left panel__card__width17 border--light text-center\">\n" +
        "                <div class=\"panel__card__content\">\n" +
        "                    <div class=\"text-left text--kpi--title\">Leads Qualifications</div>\n" +
        "                    <div class=\"text--kpi--large\"><span ng-bind=\"DistributorKpi.LeadId[0].TotalNewCustSignups|number:0\">0</span></div>\n" +
        "                    <div class=\"text--kpi--small\">New Customers</div>\n" +
        "                    <div class=\"text--kpi--medium\"><!----><span ng-if=\"!IsCanada\">$</span><!----><span ng-bind=\"DistributorKpi.LeadId[0].TotalNewCustQv|number:2\">0.00</span></div>\n" +
        "                    <div class=\"text--kpi--small\">New Customer Sales</div>\n" +
        "                </div>\n" +
        "                <!---->\n" +
        "                <!----><div ng-if=\"!DistributorKpi.LeadId[0].IsEligible\" class=\"panel__card__title\">\n" +
        "                <a class=\"UndecoratedLink text--kpi--link\" href=\"/97111/office/incentives-and-recognition/leadership-incentives/leads-program\">How do i qualify</a>\n" +
        "            </div><!---->\n" +
        "            </article>\n" +
        "            <article class=\"panel__card panel__card__width17 border--light text-center\">\n" +
        "                <div class=\"panel__card__content\">\n" +
        "                    <div class=\"text-left text--kpi--title\">New Customer Bonus</div>\n" +
        "                    <div class=\"text--kpi--large\"><span ng-bind=\"DistributorKpi.BonusNewVol[0].TotalCustSignups|number:0\">0</span></div>\n" +
        "                    <div class=\"text--kpi--small\">New Customers</div>\n" +
        "                    <div class=\"text--kpi--medium\"><!----><span ng-if=\"!IsCanada\">$</span><!----><span ng-bind=\"DistributorKpi.BonusNewVol[0].TotalNewCustQv|number:2\">0.00</span></div>\n" +
        "                    <div class=\"text--kpi--small\">New Customer Sales</div>\n" +
        "                    <div class=\"text--kpi--large\">$<span ng-bind=\"DistributorKpi.BonusNewVol[0].BonusAmount|number:0\">0</span></div>\n" +
        "                    <div class=\"text--kpi--small\">Current Bonus</div>\n" +
        "                    <hr class=\"hr__kpi\">\n" +
        "                    <div class=\"text--kpi--medium color--kpiLink\">$<span ng-bind=\"DistributorKpi.BonusNewVol[0].PriorBonusAmount|number:0\">0</span></div>\n" +
        "                    <div class=\"text--kpi--small color--kpiLink\">Last Pay Period Bonus</div>\n" +
        "                </div>\n" +
        "                <div class=\"panel__card__title\">\n" +
        "                    <a class=\"UndecoratedLink text--kpi--link\" style=\"text-decoration: none;transition: color .5s ease;font-family: proxima-nova,sans-serif;font-size: 1.17rem;text-transform: uppercase;color: #747474;\" href=\"\">View Report</a>\n" +
        "                </div>\n" +
        "            </article>\n" +
        "            <article class=\"panel__card panel__card__width17 border--light text-center\">\n" +
        "                <div class=\"panel__card__content\">\n" +
        "                    <div class=\"text-left text--kpi--title\">Total Sales Bonus</div>\n" +
        "                    <!---->\n" +
        "                    <!----><div ng-if=\"!DistributorKpi.BonusTotalVol[0].MetMinimumQv\">\n" +
        "\n" +
        "                    <i class=\"far fa-times fa-3x\"></i>\n" +
        "                </div><!---->\n" +
        "                    <div class=\"text--kpi--small\">Bonus Activated?</div>\n" +
        "                    <div class=\"text--kpi--medium\"><!----><span ng-if=\"!IsCanada\">$</span><!----><span ng-bind=\"DistributorKpi.BonusTotalVol[0].FrontlineCustVol|number:2\">0.00</span></div>\n" +
        "                    <div class=\"text--kpi--small\">Total Customer Sales</div>\n" +
        "                    <div class=\"text--kpi--large \">$<span ng-bind=\"DistributorKpi.BonusTotalVol[0].BonusAmount|number:0\">0</span></div>\n" +
        "                    <div class=\"text--kpi--small\">Current Bonus</div>\n" +
        "                    <hr class=\"hr__kpi\">\n" +
        "                    <div class=\"text--kpi--medium color--kpiLink\">$<span ng-bind=\"DistributorKpi.BonusTotalVol[0].PriorBonusAmount|number:0\">0</span></div>\n" +
        "                    <div class=\"text--kpi--small color--kpiLink\">Last Pay Period Bonus</div>\n" +
        "                </div>\n" +
        "                <div class=\"panel__card__title\">\n" +
        "                    <a class=\"UndecoratedLink text--kpi--link\" href=\"\">View Report</a>\n" +
        "                </div>\n" +
        "            </article>\n" +
        "\n" +
        "            <article class=\"panel__card panel__card__right border--light text-center card--width--pct30\">\n" +
        "                <div class=\"panel__card__content\">\n" +
        "                    <div class=\"text-left text--kpi--title\">Wholesale Commissions</div>\n" +
        "                    <section class=\"container__cards container__cards__chartalign card--nowrap card--direction--row text-left\">\n" +
        "\n" +
        "                        <article class=\"panel__card__chartwidth panel__card__width13\">\n" +
        "                            <div class=\"panel__card__innerpanel__center\">\n" +
        "                                <div class=\"panel__card__innerpanel__cell text--kpi--large\">\n" +
        "                                    $<span ng-bind=\"DistributorKpi.Earnings|number:2\">0.00</span>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"panel__card__innerpanel__center\">\n" +
        "                                <div class=\"text--kpi--small\">Current Commissions</div>\n" +
        "                                <hr class=\"hr__kpi\">\n" +
        "                                <div class=\"text--kpi--medium color--kpiLink\">$<span ng-bind=\"DistributorKpi.PriorEarnings|number:2\">0.00</span></div>\n" +
        "                                <div class=\"text--kpi--small color--kpiLink\">Last Pay Period Commissions</div>\n" +
        "                            </div>\n" +
        "                        </article>\n" +
        "\n" +
        "                        <article class=\"card--width--pct10\">\n" +
        "                            <!----><div ng-if=\"!SalesPositive\" class=\"text--kpi--small--bold panel__card__innerpanel__cell panel__card__innerpanel__cell__reducetopmargin color--negative\" style=\"\">\n" +
        "                            <svg-icon class=\"SvgIcon performance-icon color--negative\" icon=\"arrow-down\"><!----><svg ng-if=\"Ready\" class=\"SvgIcon performance-icon color--negative\"><use xlink:href=\"#Svg_arrow-down\" ng-attr-xlink:href=\"{{::TrustedSvgHref}}\"></use></svg><!----></svg-icon>\n" +
        "                            <span class=\"text--kpi--small--bold\" ng-bind=\"DistributorKpi.SalesPerformance|number:2\">0.00</span>\n" +
        "                            %\n" +
        "                        </div><!---->\n" +
        "                            <!---->\n" +
        "                        </article>\n" +
        "\n" +
        "                        <article class=\"mobilevisible\">\n" +
        "                            <div id=\"chart\" class=\"chartSquare k-chart\" style=\"width: 328.13px; height: 66.17px; position: relative; touch-action: pan-y;\" data-role=\"chart\"><svg style=\"width: 100%; height: 100%; overflow: hidden; left: -0.046875px; top: -0.703125px;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"><defs><clipPath id=\"kdef3\"><path d=\"M5 5 L 215 5 215 60 5 60Z\" stroke=\"#000\" stroke-linejoin=\"miter\" fill=\"none\"></path></clipPath><clipPath id=\"kdef4\"><path d=\"M5 5 L 323 5 323 61 5 61Z\" stroke=\"#000\" stroke-linejoin=\"miter\" fill=\"none\"></path></clipPath></defs><g><path d=\"M0 0 L 328 0 328 66 0 66Z\" stroke=\"none\" fill=\"#ffffff\"></path><path d=\"M5 5 L 215 5 215 60 5 60Z\" stroke=\"none\" fill=\"#fff\" fill-opacity=\"0\"></path><g><g></g><g></g><g><g></g></g><g clip-path=\"url(#kdef3)\"><g clip-path=\"url(#kdef4)\"><path d=\"M22.5 32.5 L 57.5 32.5 92.5 32.5 127.5 32.5 162.5 32.5 197.5 32.5\" stroke=\"#898989\" stroke-width=\"2\" fill=\"none\"></path><circle cx=\"22.5\" cy=\"32.5\" r=\"4\" stroke=\"#898989\" stroke-width=\"2\" stroke-opacity=\"1\" fill=\"#898989\" fill-opacity=\"1\"></circle><circle cx=\"57.5\" cy=\"32.5\" r=\"4\" stroke=\"#898989\" stroke-width=\"2\" stroke-opacity=\"1\" fill=\"#898989\" fill-opacity=\"1\"></circle><circle cx=\"92.5\" cy=\"32.5\" r=\"4\" stroke=\"#898989\" stroke-width=\"2\" stroke-opacity=\"1\" fill=\"#898989\" fill-opacity=\"1\"></circle><circle cx=\"127.5\" cy=\"32.5\" r=\"4\" stroke=\"#898989\" stroke-width=\"2\" stroke-opacity=\"1\" fill=\"#898989\" fill-opacity=\"1\"></circle><circle cx=\"162.5\" cy=\"32.5\" r=\"4\" stroke=\"#898989\" stroke-width=\"2\" stroke-opacity=\"1\" fill=\"#898989\" fill-opacity=\"1\"></circle><circle cx=\"197.5\" cy=\"32.5\" r=\"4\" stroke=\"#00aeef\" stroke-width=\"2\" stroke-opacity=\"1\" fill=\"#00aeef\" fill-opacity=\"1\"></circle></g></g></g><g></g><g><g><g transform=\"matrix(1,0,0,1,226,23.5)\"><path d=\"M1 3.5 L 8 3.5 8 10.5 1 10.5Z\" stroke=\"#898989\" stroke-width=\"1\" fill=\"#898989\"></path><g><text style=\"font:12px Arial,Helvetica,sans-serif;\" x=\"15\" y=\"11\" stroke=\"none\" fill=\"#686868\" fill-opacity=\"1\">Commissions</text></g><path style=\"cursor:pointer;\" d=\"M0 0 L 87 0 87 14 0 14Z\" stroke=\"none\" fill=\"#fff\" fill-opacity=\"0\"></path></g></g></g><g></g></g></svg></div>\n" +
        "                            <div class=\"text--kpi--small color--kpiLink kpi__desc__center\">Trend line includes activity for current and maximum of five previous Pay Periods</div>\n" +
        "                        </article>\n" +
        "                    </section>\n" +
        "                </div>\n" +
        "                <div class=\"panel__card__title\">\n" +
        "                    <a class=\"UndecoratedLink text--kpi--link\" href=\"\">View Report</a>\n" +
        "                </div>\n" +
        "            </article>\n" +
        "        </section>\n" +
        "\n";

    return new Template('experience/components/assets/distributorDashboard').render(model).text;
};
