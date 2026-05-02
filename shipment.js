var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIML = "/api/iml";
var jpdbIRL = "/api/irl";

var dbName = "DELIVERY-DB";
var relationName = "SHIPMENT-TABLE";
var connToken = "90935263|-31949236567996154|90958481";

// PAGE LOAD
$(document).ready(function () {
    resetForm();
});

// RESET FUNCTION
function resetForm() {

    $("#shipmentForm")[0].reset();

    $("#description, #source, #destination, #shippingDate, #deliveryDate")
        .prop("disabled", true);

    $("#save, #update, #reset").prop("disabled", true);

    $("#shipNo").prop("disabled", false).focus();
}

// ENABLE FIELDS
function enableFields() {
    $("#description, #source, #destination, #shippingDate, #deliveryDate")
        .prop("disabled", false);
}

// PRIMARY KEY CHECK
$("#shipNo").on("change", function () {

    var shipNo = $("#shipNo").val();
    if (shipNo === "") return;

    var jsonStr = {
        "Shipment-No": shipNo
    };

    var getReq = createGET_BY_KEYRequest(
        connToken, dbName, relationName, JSON.stringify(jsonStr)
    );

    jQuery.ajaxSetup({ async: false });
    var res = executeCommandAtGivenBaseUrl(getReq, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({ async: true });

    if (res.status === 400) {
        // NEW RECORD
        enableFields();
        $("#save, #reset").prop("disabled", false);
        $("#description").focus();
    }

    else if (res.status === 200) {
        // EXISTING RECORD
        var data = JSON.parse(res.data).record;

        $("#shipNo").prop("disabled", true);

        $("#description").val(data.Description);
        $("#source").val(data.Source);
        $("#destination").val(data.Destination);
        $("#shippingDate").val(data["Shipping-Date"]);
        $("#deliveryDate").val(data["Expected-Delivery-Date"]);

        enableFields();

        $("#update, #reset").prop("disabled", false);

        localStorage.setItem("recno", JSON.parse(res.data).rec_no);
    }
});

// VALIDATION
function validateData() {

    if ($("#shipNo").val() === "") return alert("Enter Shipment No"), "";
    if ($("#description").val() === "") return alert("Enter Description"), "";
    if ($("#source").val() === "") return alert("Enter Source"), "";
    if ($("#destination").val() === "") return alert("Enter Destination"), "";
    if ($("#shippingDate").val() === "") return alert("Enter Shipping Date"), "";
    if ($("#deliveryDate").val() === "") return alert("Enter Delivery Date"), "";

    return JSON.stringify({
        "Shipment-No": $("#shipNo").val(),
        "Description": $("#description").val(),
        "Source": $("#source").val(),
        "Destination": $("#destination").val(),
        "Shipping-Date": $("#shippingDate").val(),
        "Expected-Delivery-Date": $("#deliveryDate").val()
    });
}

// SAVE
$("#save").click(function () {

    var jsonStr = validateData();
    if (jsonStr === "") return;

    var req = createPUTRequest(connToken, jsonStr, dbName, relationName);

    jQuery.ajaxSetup({ async: false });
    executeCommandAtGivenBaseUrl(req, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });

    alert("Data Saved Successfully!");
    resetForm();
});

// UPDATE
$("#update").click(function () {

    var jsonStr = validateData();
    if (jsonStr === "") return;

    var req = createUPDATERecordRequest(
        connToken,
        jsonStr,
        dbName,
        relationName,
        localStorage.getItem("recno")
    );

    jQuery.ajaxSetup({ async: false });
    executeCommandAtGivenBaseUrl(req, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });

    alert("Data Updated Successfully!");
    resetForm();
});

// RESET
$("#reset").click(function () {
    resetForm();
});
