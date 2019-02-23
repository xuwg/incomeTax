window.onload = function () {
    function $(id) {
        return document.getElementById(id);
    }

    var qiShu = $("qiShu").value;

    $("qiShu").onchange = function () {

        qiShu = this.value;
        var gongZi = $("gongZi").value;
        $("gongZiAcc").value = gongZi * qiShu;
        var buZhu = $("buZhu").value;
        $("buZhuAcc").value = buZhu * qiShu;
        var baoXian = $("baoXian").value;
        $("baoXianAcc").value = baoXian * qiShu;
        var gongJiJin = $("gongJiJin").value;
        $("gongJiJinAcc").value = gongJiJin * qiShu;
        var fuJia = $("fuJia").value;
        $("fuJiaAcc").value = fuJia * qiShu;
    }

    function lianDong(input, acc) {
        $(input).oninput = function () {
            $(acc).value = this.value * qiShu;
        }
    }

    function select(item) {
        $(item).onmouseover = function () {
            this.select();
        }
    }

    lianDong("gongZi", "gongZiAcc");
    lianDong("buZhu", "buZhuAcc");
    lianDong("baoXian", "baoXianAcc");
    lianDong("gongJiJin", "gongJiJinAcc");
    lianDong("fuJia", "fuJiaAcc");

    select("gongZi");
    select("gongZiAcc");
    select("buZhu");
    select("buZhuAcc");
    select("baoXian");
    select("baoXianAcc");
    select("gongJiJin");
    select("gongJiJinAcc");
    select("fuJia");
    select("fuJiaAcc");

    // 根据输入计算累积，没有累计值的情况下，使用单个月的值乘以期数
    function prepare(input, acc, qiShu) {
        var inputValue = $(input).value;
        var accValue = $(acc).value;
        if (accValue == "") {
            accValue = inputValue * qiShu;
        }
        return accValue;
    }

    function GetTaxShuoDe(qiShu) {

        var gongZiAcc = prepare("gongZi", "gongZiAcc", qiShu);
        var buZhuAcc = prepare("buZhu", "buZhuAcc", qiShu);
        var baoXianAcc = prepare("baoXian", "baoXianAcc", qiShu);
        var gongJiJinAcc = prepare("gongJiJin", "gongJiJinAcc", qiShu);
        var fuJiaAcc = prepare("fuJia", "fuJiaAcc", qiShu);

        // 总收入去掉免税额得到应税金额
        var taxShuoDe = parseFloat(gongZiAcc) + parseFloat(buZhuAcc) - 5000 * qiShu - baoXianAcc - gongJiJinAcc - fuJiaAcc;

        return taxShuoDe;
    }

    $("cal").onclick = function () {
        var taxKouChu = $("taxKouChu").value;

        var taxShuoDe = GetTaxShuoDe(qiShu);
        $("taxShuoDe").innerText = "应纳税所得额" + taxShuoDe.toFixed(2) + "元";
        var taxLv = GetTaxLv(taxShuoDe);
        $("taxLv").innerText = "适用税率" + taxLv + "%";
        var tax = (taxShuoDe * taxLv / 100).toFixed(2);
        $("yingJiaotax").value = tax; //累积应交税款

        // 前一个月应税所得
        var preMonthTaxShuoDe = qiShu == 1 ? 0 : GetTaxShuoDe(qiShu - 1);

        var yiJiaoTax = qiShu == 1 ? 0 : (preMonthTaxShuoDe * GetTaxLv(preMonthTaxShuoDe) / 100).toFixed(2); //已交税
        $("yiJiaoTax").value = yiJiaoTax;
        var tuiBuTax = tax - yiJiaoTax;
        $("tuiBuTax").value = tuiBuTax;

        console.log($("gongJiJin").value);
        $("shouRu").value = parseFloat($("gongZi").value - $("baoXian").value - $("gongJiJin").value - tuiBuTax + parseFloat($("buZhu").value)).toFixed(2);

        function GetTaxLv(taxShuoDe) {
            if (taxShuoDe > 0) {
                if (taxShuoDe <= 36000) {
                    return 3;
                } else if (taxShuoDe <= 144000) {
                    return 10;
                } else if (taxShuoDe <= 300000) {
                    return 20;
                } else if (taxShuoDe <= 420000) {
                    return 25;
                } else if (taxShuoDe <= 660000) {
                    return 30;
                } else if (taxShuoDe <= 960000) {
                    return 35;
                } else {
                    return 45;
                }
            }
        }
    }


    $("reset").onclick = function () {
        $("gongZi").value = 0;
        $("gongZiAcc").value = "";
        $("buZhu").value = 0;
        $("buZhuAcc").value = "";
        $("baoXian").value = 0;
        $("baoXianAcc").value = "";
        $("gongJiJin").value = 0;
        $("gongJiJinAcc").value = "";
        $("fuJia").value = 0;
        $("fuJiaAcc").value = "";
    }
}