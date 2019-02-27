function cal() {
    var qiShu = $("qiShu").value;
    $("gongZi").focus();

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
        function dong() {
            $(acc).value = (this.value * qiShu).toFixed(2);
        }
        $(input).oninput = dong;
        $(input).onpropertychange = dong;
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
    select("yangLaoJiShu");
    select("yangLaoFei");
    select("shiYeJiShu");
    select("shiYeFei");
    select("gongShangJiShu");
    select("gongShangFei");
    select("shengYvJiShu");
    select("shengYvFei");
    select("yiLiaoJiShu");
    select("yiLiaoFei");
    select("gongJiJin");
    select("gongJiJinAcc");
    select("gongJiJinJiShu");
    select("gongJiJinFei");
    select("fuJia");
    select("fuJiaAcc");


    var baoXianDisplay = 1;
    $("baoXianIco").onclick = function () {
        if (baoXianDisplay) {
            $("baoXianDetail").style.display = "none";
            this.style.backgroundPosition = "0 0";
            baoXianDisplay = 0;
        } else {
            $("baoXianDetail").style.display = "block";
            this.style.backgroundPosition = "-32px 0";
            baoXianDisplay = 1;
        }
    }

    var gongJiJinDisplay = 1;
    $("gongJiJinIco").onclick = function () {
        if (gongJiJinDisplay) {
            $("gongJiJinDetail").style.display = "none";
            this.style.backgroundPosition = "0 0";
            gongJiJinDisplay = 0;
        } else {
            $("gongJiJinDetail").style.display = "block";
            this.style.backgroundPosition = "-32px 0";
            gongJiJinDisplay = 1;
        }
    }

    // 保险费总和
    function setBaoXianFei() {
        var yangLaoFei = $("yangLaoFei").value;
        var shiYeFei = $("shiYeFei").value;
        var gongShangFei = $("gongShangFei").value;
        var shengYvFei = $("shengYvFei").value;
        var yiLiaoFei = $("yiLiaoFei").value;

        var baoXianFei = parseFloat(yangLaoFei == "" ? 0 : yangLaoFei) + parseFloat(shiYeFei == "" ? 0 : shiYeFei) +
            parseFloat(gongShangFei == "" ? 0 : gongShangFei) + parseFloat(shengYvFei == "" ? 0 : shengYvFei) + parseFloat(yiLiaoFei == "" ? 0 : yiLiaoFei);
        $("baoXian").value = baoXianFei.toFixed(2);
        $("baoXianAcc").value = (baoXianFei * qiShu).toFixed(2);
    }

    //保险基数联动 保险费 
    function baoXianJiShuLianDong(jishu, fei, rate, extra) {
        function baoXianJiShuDong() {
            var jiShu = $(jishu).value;
            jiShu = jiShu == "" ? 0 : jiShu;
            $(fei).value = (jiShu * rate + parseFloat(extra)).toFixed(2);

            setBaoXianFei();
        };
        $(jishu).oninput = baoXianJiShuDong;
        $(jishu).onpropertychange = baoXianJiShuDong;
    }

    //单项保险费联动 保险费 
    function baoXianFeiLianDong(fei) {
        $(fei).oninput = setBaoXianFei;
        $(fei).onpropertychange = setBaoXianFei;
    }

    // 养老比例
    var yangLaoBiLi = 0.08;
    // 失业比例
    var shiYeBiLi = 0.002;
    // 医疗比例
    var yiLiaoBiLi = 0.02;
    // 公积金比例
    var gongJiJinBiLi = 0.12;

    // 养老
    baoXianFeiLianDong("yangLaoFei");
    baoXianJiShuLianDong("yangLaoJiShu", "yangLaoFei", yangLaoBiLi, 0);
    // 失业
    baoXianFeiLianDong("shiYeFei");
    baoXianJiShuLianDong("shiYeJiShu", "shiYeFei", shiYeBiLi, 0);
    // 工伤
    baoXianFeiLianDong("gongShangFei");
    baoXianJiShuLianDong("gongShangJiShu", "gongShangFei", 0.0, 0);
    // 生育
    baoXianFeiLianDong("shengYvFei");
    baoXianJiShuLianDong("shengYvJiShu", "shengYvFei", 0.0, 0);
    // 医疗
    baoXianFeiLianDong("yiLiaoFei");
    baoXianJiShuLianDong("yiLiaoJiShu", "yiLiaoFei", yiLiaoBiLi, 3);

    // 公积金联动
    function gongJiJinJiShuDong() {
        var gongJiJinJiShu = $("gongJiJinJiShu").value;
        gongJiJinJiShu = gongJiJinJiShu == "" ? 0 : gongJiJinJiShu;
        var gongJiJinFei = gongJiJinJiShu * gongJiJinBiLi;
        $("gongJiJinFei").value = gongJiJinFei;
        $("gongJiJin").value = gongJiJinFei;
        $("gongJiJinAcc").value = gongJiJinFei * qiShu;
    };
    $("gongJiJinJiShu").oninput = gongJiJinJiShuDong;
    $("gongJiJinJiShu").onpropertychange = gongJiJinJiShuDong;
    function gongJiJinFeiDong() {

        var gongJiJinFei = $("gongJiJinFei").value;
        gongJiJinFei = gongJiJinFei == "" ? 0 : gongJiJinFei;
        $("gongJiJin").value = gongJiJinFei;
        $("gongJiJinAcc").value = gongJiJinFei * qiShu;
    };
    $("gongJiJinFei").oninput = gongJiJinFeiDong;
    $("gongJiJinFei").onpropertychange = gongJiJinFeiDong;

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

        return taxShuoDe > 0 ? taxShuoDe : 0;
    }

    // 获取前一个月的应税所得
    function GetPreMonthTaxShuoDe(qiShu) {

        function preMonthValue(accId, id, qiShu) {
            var acc = $(accId).value;
            if (acc == "") {
                acc = $(id).value * qiShu;
            } else {
                acc = acc - $(id).value;
            }
            return acc;
        }

        qiShu--;
        if (qiShu <= 0) {
            return 0;
        } else {
            var gongZiAcc = preMonthValue("gongZiAcc", "gongZi", qiShu);
            var buZhuAcc = preMonthValue("buZhuAcc", "buZhu", qiShu);
            var baoXianAcc = preMonthValue("baoXianAcc", "baoXian", qiShu);
            var gongJiJinAcc = preMonthValue("gongJiJinAcc", "gongJiJin", qiShu);
            var fuJiaAcc = preMonthValue("fuJiaAcc", "fuJia", qiShu);
            // 总收入去掉免税额得到应税金额
            var taxShuoDe = parseFloat(gongZiAcc) + parseFloat(buZhuAcc) - 5000 * qiShu - baoXianAcc - gongJiJinAcc - fuJiaAcc;

            return taxShuoDe > 0 ? taxShuoDe : 0;
        }
    }

    $("cal").onclick = function () {
        var taxKouChu = $("taxKouChu").value;

        var taxShuoDe = GetTaxShuoDe(qiShu);
        $("taxShuoDe").innerText = "应纳税所得额" + taxShuoDe.toFixed(2) + "元";
        var taxLv = GetTaxLv(taxShuoDe);
        $("taxLv").innerText = "适用税率" + taxLv + "%";
        var kouChuShu = GetKouChuShu(taxShuoDe);
        $("taxKouChu").innerText = "速算扣除数" + kouChuShu + "元";
        var tax = (taxShuoDe * taxLv / 100 - kouChuShu).toFixed(2);
        $("yingJiaotax").value = tax; //累积应交税款

        // 前一个月应税所得
        var preMonthTaxShuoDe = GetPreMonthTaxShuoDe(qiShu);
        var yiJiaoTax = (preMonthTaxShuoDe * GetTaxLv(preMonthTaxShuoDe) / 100 - GetKouChuShu(preMonthTaxShuoDe)).toFixed(2); //已交税
        $("yiJiaoTax").value = yiJiaoTax; //已缴税款
        var tuiBuTax = (tax - yiJiaoTax).toFixed(2); //退补税款
        $("tuiBuTax").value = tuiBuTax;
        // 收入
        function toFloat(id) {
            var num = $(id).value;
            if (num == "") {
                num = 0;
            }
            return parseFloat(num);
        }
        var shouRu = toFloat("gongZi") - toFloat("baoXian") - toFloat("gongJiJin") - tuiBuTax + toFloat("buZhu");
        $("shouRu").value = (shouRu >= 0 ? shouRu : 0).toFixed(2);

        // 税率
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
            return 0;
        }

        // 速算扣除数
        function GetKouChuShu(taxShuoDe) {
            if (taxShuoDe > 0) {
                if (taxShuoDe <= 36000) {
                    return 0;
                } else if (taxShuoDe <= 144000) {
                    return 2520;
                } else if (taxShuoDe <= 300000) {
                    return 16920;
                } else if (taxShuoDe <= 420000) {
                    return 31920;
                } else if (taxShuoDe <= 660000) {
                    return 52920;
                } else if (taxShuoDe <= 960000) {
                    return 85920;
                } else {
                    return 181920;
                }
            }
            return 0;
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