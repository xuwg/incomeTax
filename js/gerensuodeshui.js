function keyControl(evt) {
    if (!evt) evt = window.event;
    var currentCode = evt.keyCode;
    if (currentCode == 13) {
        //document.getElementById("tax").blur(); document.getElementById("btnCalc").click(); cancelKey(evt); } } function
        cancelKey(evt) {
            if (evt.preventDefault) {
                evt.stopPropagation();
                evt.preventDefault();
            } else {
                evt.cancelBubble =
                    true;
                evt.returnValue = false;
            }
        }
        $().ready(function () {
            if ($("#txtIncome").length > 0) {
                $("#txtIncome")[0].focus();
            }
        })
        function taxTypeChange() {
            if (document.all.taxType.value == 0) {
                location = location.href;
                return;
            }
            location = document.all.taxType.value;
        }

        function incomeChange() {
            var income = $("#txtIncome").val();
            if (!isNaN(income)) {
                $("#txtIncome").val(income);
                var taxPeriod = $("#taxPeriod").val();
                $("#txtIncomeAll").val(income * taxPeriod);
            }
        }

        function insureChange() {
            var insure = $("#txtInsure").val();
            if (!isNaN(insure)) {
                $("#txtInsure").val(insure);
                var
                    taxPeriod = $("#taxPeriod").val();
                $("#txtInsureAll").val(insure * taxPeriod);
            }
        }

        function zxfjChange() {
            var zxfj =
                $("#txtZXFJ").val();
            if (!isNaN(zxfj)) {
                $("#txtZXFJ").val(zxfj);
                var taxPeriod = $("#taxPeriod").val();
                $("#txtZXFJAll").val(zxfj * taxPeriod);
            }
        }

        function taxPeriodChange() {
            incomeChange();
            insureChange();
            zxfjChange();
        }
        ////////////////////////total_index function btnCalc_onClick_total_index() { clearResult_all_index();
        checkData_all_index();
        var taxPeriod = parseFloat($("#taxPeriod").val());
        var income =
            parseFloat($("#txtIncome").val());
        var incomeAll = parseFloat($("#txtIncomeAll").val());
        var lastIncome = incomeAll -
            income;
        var insure = parseFloat($("#txtInsure").val());
        var insureAll = parseFloat($("#txtInsureAll").val());
        var
            lastInsure = insureAll - insure;
        var zxfj = parseFloat($("#txtZXFJ").val());
        var zxfjAll =
            parseFloat($("#txtZXFJAll").val());
        var lastZXFJ = zxfjAll - zxfj;
        var baseLine = 5000; //calc___A var taxableIncome =
        incomeAll - insureAll - zxfjAll - baseLine * taxPeriod;
        var R = 0,
            Q = 0;
        var A = taxableIncome;
        A = A.toFixed(2);
        var res =
            calcRQ_all_index(A);
        R = res[0];
        Q = res[1];
        var taxAll = taxableIncome * R - Q;
        taxAll = Math.round(taxAll * 100) / 100;
        //calc___A2 var R2=0,Q2=0,lastTaxAll=0; var lastTaxableIncome=0; if(taxPeriod>1){ lastTaxableIncome = lastIncome -
        lastInsure - lastZXFJ - baseLine * (taxPeriod - 1);
        var A2 = lastTaxableIncome;
        A2 = A2.toFixed(2);
        res = calcRQ_all_index(A2);
        R2 = res[0];
        Q2 = res[1];
        lastTaxAll = lastTaxableIncome * R2 - Q2;
        lastTaxAll = Math.round(lastTaxAll * 100) / 100;
    }
    tax =
        taxAll - Math.max(lastTaxAll, 0);
    tax = Math.round(tax * 100) / 100;
    taxTmp = tax > 0 ? tax : 0
    var realIncome = income - insure -
        taxTmp;
    realIncome = Math.round(realIncome * 100) / 100;
    $("#lblTaxableIncome")[0].innerText = taxableIncome.toFixed(2);
    $("#lblTaxRate")[0].innerText = R * 100;
    $("#lblQuick")[0].innerText = Q;
    $("#txtTaxAll")[0].value = taxAll;
    $("#txtTaxAlready")[0].value = lastTaxAll;
    $("#txtTax")[0].value = tax;
    $("#txtRealIncome")[0].value = realIncome;
    var
        geshui100Tips = document.getElementById("geshui100Tips");
    if (geshui100Tips) {
        document.getElementById("geshui100Tips").style.display = "block"; //显示 } $("#txtIncome")[0].select(); } function
        clearResult_all_index() {
            $("#lblTaxableIncome")[0].innerText = "0";
            $("#lblTaxRate")[0].innerText = "0";
            $("#lblQuick")[0].innerText = "0";
            $("#txtTax")[0].value = "";
            $("#txtTaxAll")[0].value = "";
            $("#txtTaxAlready")[0].value = "";
            $("#txtRealIncome")[0].value = "";
        }

        function checkData_all_index() { //工资收入 var income
            = parseFloat($("#txtIncome").val());
            if (isNaN(income)) {
                alert("无效的本月工资");
                $("#txtIncome")[0].focus();
                $("#txtIncome")[0].select();
                return;
            }
            $("#txtIncome").val(income);
            var incomeAll =
                parseFloat($("#txtIncomeAll").val());
            if (isNaN(incomeAll)) {
                alert("无效的累计工资");
                $("#txtIncomeAll")[0].focus();
                $("#txtIncomeAll")[0].select();
                return;
            }
            $("#txtIncomeAll").val(incomeAll); //社保 var insure =
            parseFloat($("#txtInsure").val());
            if (isNaN(insure)) {
                alert("无效的各项社会保险费金额");
                $("#txtInsure")[0].focus();
                $("#txtInsure")[0].select();
                return;
            }
            $("#txtInsure").val(insure);
            var insureAll =
                parseFloat($("#txtInsureAll").val());
            if (isNaN(insureAll)) {
                alert("无效的累计各项社会保险费金额");
                $("#txtInsureAll")[0].focus();
                $("#txtInsureAll")[0].select();
                return;
            }
            $("#txtInsureAll").val(insureAll); //专项附加扣除 var zxfj =
            parseFloat($("#txtZXFJ").val());
            if (isNaN(zxfj)) {
                alert("无效的专项附加扣除金额");
                $("#txtZXFJ")[0].focus();
                $("#txtZXFJ")[0].select();
                return;
            }
            $("#txtZXFJ").val(zxfj);
            var zxfjAll = parseFloat($("#txtZXFJAll").val());
            if (isNaN(zxfjAll)) {
                alert("无效的累计专项附加扣除金额");
                $("#txtZXFJAll")[0].focus();
                $("#txtZXFJAll")[0].select();
                return;
            }
            $("#txtZXFJAll").val(zxfjAll);
        }

        function calcRQ_all_index(A) {
            if (A <= 36000) {
                R = 0.03;
                Q = 0;
            } else if (A > 36000 && A <= 144000) {
                R = 0.1;
                Q = 2520;
            } else if (A > 144000 && A <= 300000) {
                R = 0.2;
                Q = 16920;
            } else if (A > 300000 && A <= 420000) {
                R = 0.25;
                Q = 31920;
            } else if (A > 420000 && A <= 660000) {
                R = 0.3;
                Q = 52920;
            } else if (A > 660000 && A <= 960000) {
                R = 0.35;
                Q = 85920;
            } else {
                R = 0.45;
                Q = 181920;
            }
            return new Array(R, Q);
        }

        function btnReset_onClick_total_index() {
            clearResult_all_index();
            $("#txtInsure")[0].value = "0";
            $("#txtInsureAll")[0].value = "0";
            $("#txtZXFJ")[0].value = "0";
            $("#txtZXFJAll")[0].value = "0";
            $("#txtIncome")[0].value = "";
            $("#txtIncomeAll")[0].value = "0";
            $("#txtIncome")[0].focus();
            $("#txtIncome")[0].select();
        }
        ////////////////////////index function btnCalc_onClick_index() { clearResult_index(); var
        income = parseFloat($("#txtIncome").val());
        if (isNaN(income)) {
            alert("无效的收入金额");
            $("#txtIncome")[0].focus();
            $("#txtIncome")[0].select();
            return;
        }
        $("#txtIncome").val(income);
        var insure = parseFloat($("#txtInsure").val());
        if (isNaN(insure)) {
            alert("无效的各项社会保险费金额");
            $("#txtInsure")[0].focus();
            $("#txtInsure")[0].select();
            return;
        }
        $("#txtInsure").val(insure);
        var baseLine = $("#selBaseLine").val();
        var taxableIncome = income - insure - baseLine;
        if (taxableIncome <= 0) {
            alert("您无需缴纳个人所得税!");
            $("#txtIncome")[0].focus();
            $("#txtIncome")[0].select();
            return;
        }
        var R, Q;
        var A = taxableIncome;
        A = A.toFixed(2);
        if (A <= 3000) {
            R = 0.03;
            Q = 0;
        } else if (A > 3000 && A <= 12000) {
            R = 0.1;
            Q = 210
        } else if (A > 12000 && A <= 25000) {
            R = 0.2;
            Q = 1410
        } else if (A > 25000 &&
            A <= 35000) {
            R = 0.25;
            Q = 2660
        } else if (A > 35000 && A <= 55000) {
            R = 0.3;
            Q = 4410
        } else if (A > 55000 &&
            A <= 80000) {
            R = 0.35;
            Q = 7160
        } else {
            R = 0.45;
            Q = 15160;
        }
        var tax = taxableIncome * R -
            Q;
        tax = Math.round(tax * 100) / 100;
        var realIncome = income - insure - tax;
        realIncome = Math.round(realIncome * 100) / 100;
        $("#lblTaxableIncome")[0].innerText = taxableIncome.toFixed(2);
        $("#lblTaxRate")[0].innerText = R * 100;
        $("#lblQuick")[0].innerText = Q;
        $("#txtTax")[0].value = tax;
        $("#txtRealIncome")[0].value = realIncome;
        $("#txtIncome")[0].select();
    }

    function btnReset_onClick_index() {
        clearResult_index();
        $("#txtInsure")[0].value = "0";
        $("#selBaseLine").val(5000);
        $("#txtIncome")[0].value = "";
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
    }

    function
    clearResult_index() {
        $("#lblTaxableIncome")[0].innerText = "0";
        $("#lblTaxRate")[0].innerText = "0";
        $("#lblQuick")[0].innerText = "0";
        $("#txtTax")[0].value = "";
        $("#txtRealIncome")[0].value = "";
    }
    ////////////////////////shgz function btnCalc_onClick_shgz() {
    clearResult_shgz();
    var income = parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的收入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    var
        insure = parseFloat($("#txtInsure").val());
    if (isNaN(insure)) {
        alert("无效的各项社会保险费金额");
        $("#txtInsure")[0].focus();
        $("#txtInsure")[0].select();
        return;
    }
    $("#txtInsure").val(insure);
    var
        baseLine = $("#selBaseLine").val();
    var taxableIncome = income - baseLine;
    if (taxableIncome <= 0) {
        $("#txtTax")[0].value = "0";
        $("#txtRealIncome")[0].value = (income + insure).toFixed(2);
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    var R, Q;
    var A = taxableIncome;
    A = A.toFixed(2);
    if (A <= 2910) {
        R = 0.03;
        Q = 0;
    } else if (A > 2910 &&
        A <= 11010) {
        R = 0.1;
        Q = 210
    } else if (A > 11010 && A <= 21410) {
        R = 0.2;
        Q = 1410
    } else
    if (A > 21410 && A <= 28910) {
        R = 0.25;
        Q = 2660
    } else if (A > 28910 && A <= 42910) {
        R = 0.3;
        Q = 4410
    } else if (A > 42910 && A <= 59160) {
        R = 0.35;
        Q = 7160
    } else {
        R = 0.45;
        Q = 15160;
    }
    taxableIncome = (A - Q) / (1 - R);
    A = taxableIncome.toFixed(2);
    if (A <= 3000) {
        R = 0.03;
        Q = 0;
    } else if (A > 3000 && A <= 12000) {
        R = 0.1;
        Q = 210
    } else if (A > 12000 && A <= 25000) {
        R = 0.2;
        Q = 1410
    } else
    if (A > 25000 && A <= 35000) {
        R = 0.25;
        Q = 2660
    } else
    if (A > 35000 && A <= 55000) {
        R = 0.3;
        Q = 4410
    } else
    if (A > 55000 && A <= 80000) {
        R = 0.35;
        Q = 7160
    } else {
        R = 0.45;
        Q = 15160;
    }
    var tax = A * R -
        Q;
    var realIncome = income + insure +
        tax;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function btnReset_onClick_shgz() {
    clearResult_shgz();
    $("#txtInsure")[0].value = "0";
    $("#selBaseLine").val(5000);
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function clearResult_shgz() {
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
}
////////////////////////nzj
function btnCalc_onClick_nzj() {
    clearResult_nzj();
    var income = parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    if (income <= 0) {
        alert("收入低于0元，无需纳税。");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    var R, Q;
    var A = income / 12;
    A = A.toFixed(2);
    if (A <= 3000) {
        R = 0.03;
        Q = 0;
    } else if (A > 3000 && A <= 12000) {
        R = 0.1;
        Q = 210
    } else if (A > 12000 && A <= 25000) {
        R = 0.2;
        Q = 1410
    } else if (A > 25000 && A <= 35000) {
        R = 0.25;
        Q = 2660
    } else
    if (A > 35000 && A <= 55000) {
        R = 0.3;
        Q = 4410
    } else
    if (A > 55000 && A <= 80000) {
        R = 0.35;
        Q = 7160
    } else {
        R = 0.45;
        Q = 15160;
    }
    $("#lblAverage")[0].innerText = A;
    var tax = income *
        R - Q;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblTaxRate")[0].innerText = R * 100;
    $("#lblQuick")[0].innerText = Q;
    var realIncome = income -
        tax;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_nzj() {
    clearResult_nzj();
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_nzj() {
    $("#lblAverage")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
    $("#lblQuick")[0].innerText = "0";
}
////////////////////////lwbc
function
btnCalc_onClick_lwbc() {
    clearResult_lwbc();
    var income = parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    if (income <
        800) {
        alert("收入低于800元，无需纳税。");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    var
        deduct = 800;
    if (income > 4000)
        deduct = income *
        0.2;
    var
        taxableIncome = income -
        deduct;
    $("#lblDeduct")[0].innerText = deduct.toFixed(2);
    $("#lblTaxableIncome")[0].innerText = taxableIncome.toFixed(2);
    var
        rate = 0.2,
        quick = 0;
    if (taxableIncome >
        20000 &&
        taxableIncome <= 50000) {
        rate = 0.3;
        quick = 2000;
    } else if (
        taxableIncome >
        50000) {
        rate = 0.4;
        quick = 7000;
    }
    var
        tax = taxableIncome *
        rate -
        quick;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblTaxRate")[0].innerText = rate * 100;
    $("#lblQuick")[0].innerText = quick;
    var
        realIncome = income -
        tax;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_lwbc() {
    clearResult_lwbc();
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_lwbc() {
    $("#lblDeduct")[0].innerText = "0";
    $("#lblTaxableIncome")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
    $("#lblQuick")[0].innerText = "0";
}
////////////////////////gtgsh
function
btnCalc_onClick_gtgsh() {
    clearResult_gtgsh();
    var income =
        parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    if (income <=
        0) {
        alert("收入低于0元，无需纳税。");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    var A = income.toFixed(2);
    var R = 0,
        Q = 0;
    if (A <= 15000) {
        R = 0.05;
        Q = 0;
    } else
    if (A > 15000 &&
        A <= 30000) {
        R = 0.1;
        Q = 750;
    } else
    if (
        A > 30000 &&
        A <= 60000) {
        R = 0.2;
        Q = 3750;
    } else
    if (
        A > 60000 &&
        A <= 100000) {
        R = 0.3;
        Q = 9750;
    } else
    if (
        A > 100000) {
        R = 0.35;
        Q = 14750;
    }
    var
        tax = A *
        R -
        Q;
    var
        realIncome =
        income -
        tax;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblTaxRate")[0].innerText = R * 100;
    $("#lblQuick")[0].innerText = Q;
    $("#lblTaxableIncome")[0].innerText = A;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_gtgsh() {
    clearResult_gtgsh();
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_gtgsh() {
    $("#lblTaxableIncome")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#lblQuick")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
}
////////////////////////cbcz
function
btnCalc_onClick_cbcz() {
    clearResult_cbcz();
    var
        income =
        parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    if (income <=
        0) {
        alert("收入低于0元，无需纳税。");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    var
        month = $("#selMonths")[0].value;
    var
        taxableIncome = income -
        month *
        3500;
    if (taxableIncome <=
        0) {
        taxableIncome = 0;
        $("#lblTaxableIncome")[0].innerText = "0";
        $("#lblTaxRate")[0].innerText = "0";
        $("#lblQuick")[0].innerText = "0";
        $("#txtTax")[0].value = "0";
        $("#txtRealIncome")[0].value = income;
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    var
        A = taxableIncome.toFixed(2);
    var
        R = 0,
        Q = 0;
    if (A <= 15000) {
        R = 0.05;
        Q = 0;
    } else
    if (
        A > 15000 &&
        A <= 30000) {
        R = 0.1;
        Q = 750;
    } else
    if (
        A > 30000 &&
        A <= 60000) {
        R = 0.2;
        Q = 3750;
    } else
    if (
        A > 60000 &&
        A <= 100000) {
        R = 0.3;
        Q = 9750;
    } else
    if (
        A > 100000) {
        R = 0.35;
        Q = 14750;
    }
    var
        tax = A *
        R -
        Q;
    var
        realIncome =
        income -
        tax;
    $("#lblTaxableIncome")[0].innerText = A;
    $("#lblTaxRate")[0].innerText = R * 100;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblQuick")[0].innerText = Q;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_cbcz() {
    clearResult_cbcz();
    $("#selMonths").val(12);
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_cbcz() {
    $("#lblTaxableIncome")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#lblQuick")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
}
////////////////////////gcsd
function
btnCalc_onClick_gcsd() {
    clearResult_gcsd();
    var
        income =
        parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    if (income <
        800) {
        alert("收入低于800元，无需纳税。");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    var
        deduct = 800;
    if (income > 4000)
        deduct = income *
        0.2;
    var
        taxableIncome = income -
        deduct;
    $("#lblDeduct")[0].innerText = deduct.toFixed(2);
    $("#lblTaxableIncome")[0].innerText = taxableIncome.toFixed(2);
    var
        tax = taxableIncome *
        0.14;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblTaxRate")[0].innerText = "14";
    var
        realIncome =
        income -
        tax;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_gcsd() {
    clearResult_gcsd();
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_gcsd() {
    $("#lblDeduct")[0].innerText = "0";
    $("#lblTaxableIncome")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
}
////////////////////////txq
function
btnCalc_onClick_txq() {
    clearResult_txq();
    var
        income =
        parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    if (income <
        800) {
        alert("收入低于800元，无需纳税。");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    var
        deduct = 800;
    if (income > 4000)
        deduct = income *
        0.2;
    var
        taxableIncome = income -
        deduct;
    $("#lblDeduct")[0].innerText = deduct.toFixed(2);
    $("#lblTaxableIncome")[0].innerText = taxableIncome.toFixed(2);
    var
        tax = taxableIncome *
        0.2;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblTaxRate")[0].innerText = "20";
    var
        realIncome =
        income -
        tax;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_txq() {
    clearResult_txq();
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_txq() {
    $("#lblDeduct")[0].innerText = "0";
    $("#lblTaxableIncome")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
}
////////////////////////cczl
function
btnCalc_onClick_cczl() {
    clearResult_cczl();
    var
        income =
        parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    if (income <
        800) {
        alert("收入低于800元，无需纳税。");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    var
        deduct = 800;
    if (income > 4000)
        deduct = income *
        0.2;
    var
        taxableIncome = income -
        deduct;
    $("#lblDeduct")[0].innerText = deduct.toFixed(2);
    $("#lblTaxableIncome")[0].innerText = taxableIncome.toFixed(2);
    var
        tax = taxableIncome *
        0.2;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblTaxRate")[0].innerText = "20";
    var
        realIncome =
        income -
        tax;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_cczl() {
    clearResult_cczl();
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_cczl() {
    $("#lblDeduct")[0].innerText = "0";
    $("#lblTaxableIncome")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
}
////////////////////////cczr
function
btnCalc_onClick_cczr() {
    clearResult_cczr();
    var
        income =
        parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    $("#lblTaxableIncome")[0].innerText = income.toFixed(2);
    var
        tax = income *
        0.2;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblTaxRate")[0].innerText = "20";
    var
        realIncome =
        income -
        tax;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_cczr() {
    clearResult_cczr()
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_cczr() {
    $("#lblTaxableIncome")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
}
////////////////////////lxhl
function
btnCalc_onClick_lxhl() {
    clearResult_lxhl();
    var
        income =
        parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    $("#lblTaxableIncome")[0].innerText = income.toFixed(2);
    var
        tax = income *
        0.2;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblTaxRate")[0].innerText = "20";
    var
        realIncome =
        income -
        tax;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_lxhl() {
    clearResult_lxhl()
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_lxhl() {
    $("#lblTaxableIncome")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
}
////////////////////////orsd
function
btnCalc_onClick_orsd() {
    clearResult_orsd();
    var
        income =
        parseFloat($("#txtIncome").val());
    if (isNaN(income)) {
        alert("无效的输入金额");
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();
        return;
    }
    $("#txtIncome").val(income);
    $("#lblTaxableIncome")[0].innerText = income.toFixed(2);
    var
        tax = income *
        0.2;
    $("#txtTax")[0].value = tax.toFixed(2);
    $("#lblTaxRate")[0].innerText = "20";
    var
        realIncome =
        income -
        tax;
    $("#txtRealIncome")[0].value = realIncome.toFixed(2);
    $("#txtIncome")[0].select();
}

function
btnReset_onClick_orsd() {
    clearResult_orsd()
    $("#txtIncome")[0].value = "";
    $("#txtIncome")[0].focus();
    $("#txtIncome")[0].select();
}

function
clearResult_orsd() {
    $("#lblTaxableIncome")[0].innerText = "0";
    $("#lblTaxRate")[0].innerText = "0";
    $("#txtTax")[0].value = "";
    $("#txtRealIncome")[0].value = "";
}