agGrid.initialiseAgGridWithAngular1(angular);
var module = angular.module("example", ["agGrid"]);
module.controller("exampleCtrl", function ($scope) {
    var columnDefs = [
        { headerName: "Cusip", field: "cusip" },
        { headerName: "Instrument", field: "instrument" },
        { headerName: "Instr Type", field: "instrType" },
        { headerName: "DM", field: "DM" },
        { headerName: "Buy Price", field: "buyPrice" },
        { headerName: "Sell Price", field: "sellPrice" },
        { headerName: "Price Time", field: "priceTime" },
        { headerName: "Sette Date", field: "setteDate" },
        { headerName: "Min(MM)", field: "minMM" },
        { headerName: "Max(MM)", field: "maxmm" },
        { headerName: "Markup(bps)", field: "markupbps" },
        { headerName: "Markdown(bps)", field: "markdownbps" },
        { headerName: "Remove", field: "remove" }
    ];
    var rowData = [
        {
            cusip: "cusip1", instrument: "instrument1", instrType: 'instrType1', DM: 'DM1', buyPrice: 'buyPrice1',
            sellPrice: 'sellPrice1', priceTime: 'priceTime1', setteDate: 'setteDate1', minMM: 'minMM1', maxmm: 'maxmm',
            markupbps: 'markupbps1', markdownbps: 'markdownbps1', remove: 'remove`'
        },
        {
            cusip: "cusip2", instrument: "instrument2", instrType: 'instrType2', DM: 'DM2', buyPrice: 'buyPrice1',
            sellPrice: 'sellPrice1', priceTime: 'priceTime1', setteDate: 'setteDate1', minMM: 'minMM1', maxmm: 'maxmm1',
            markupbps: 'markupbps1', markdownbps: 'markdownbps1', remove: 'remove1'
        },
        {
            cusip: "cusip1", instrument: "instrument1", instrType: 'instrType1', DM: 'DM1', buyPrice: 'buyPrice1',
            sellPrice: 'sellPrice1', priceTime: 'priceTime1', setteDate: 'setteDate1', minMM: 'minMM1', maxmm: 'maxmm',
            markupbps: 'markupbps', markdownbps: 'markdownbps', remove: 'remove'
        },
        {
            cusip: "cusip1", instrument: "instrument1", instrType: 'instrType1', DM: 'DM1', buyPrice: 'buyPrice1',
            sellPrice: 'sellPrice1', priceTime: 'priceTime1', setteDate: 'setteDate1', minMM: 'minMM1', maxmm: 'maxmm',
            markupbps: 'markupbps', markdownbps: 'markdownbps', remove: 'remove'
        },
        {
            cusip: "cusip1", instrument: "instrument1", instrType: 'instrType1', DM: 'DM1', buyPrice: 'buyPrice1',
            sellPrice: 'sellPrice1', priceTime: 'priceTime1', setteDate: 'setteDate1', minMM: 'minMM1', maxmm: 'maxmm',
            markupbps: 'markupbps', markdownbps: 'markdownbps', remove: 'remove'
        },
    ];
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };

    var columnDefs1 = [
        { headerName: "client", field: "client" },
        { headerName: "Instrument", field: "instrument" },
        { headerName: "Fill Qty/MMY", field: "fillQtyMMY" },
        { headerName: "Buy/Sell", field: "buySell" },
        { headerName: "Status", field: "status" },
        { headerName: "Fill Time", field: "fillTime" }
    ];
    var rowData1 = [
        {
            client: "client1", instrument: "instrument1", fillQtyMMY: 'fillQtyMMY1', buySell: 'buySell1', status: 'status1',
            fillTime: 'fillTime1'            
        },
        {
            client: "client1", instrument: "instrument1", fillQtyMMY: 'fillQtyMMY1', buySell: 'buySell1', status: 'status1',
            fillTime: 'fillTime1'            
        },
        {
            client: "client1", instrument: "instrument1", fillQtyMMY: 'fillQtyMMY1', buySell: 'buySell1', status: 'status1',
            fillTime: 'fillTime1'            
        },
        {
            client: "client1", instrument: "instrument1", fillQtyMMY: 'fillQtyMMY1', buySell: 'buySell1', status: 'status1',
            fillTime: 'fillTime1'            
        },
        {
            client: "client1", instrument: "instrument1", fillQtyMMY: 'fillQtyMMY1', buySell: 'buySell1', status: 'status1',
            fillTime: 'fillTime1'            
        },
    ]
    $scope.gridOptions1 = {
        columnDefs: columnDefs1,
        rowData: rowData1
    };
});