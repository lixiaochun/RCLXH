layui.define(['layer', 'element'],function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        element = layui.element();
    //页面跳转
    var loadPage = function(url,p){
        var parent = window.parent.document;    //主页面的DOM
        $(parent).find("#index_frame").attr("src", url);
    };

    var getTab = function () {
        console.log('1');
        layui.companyMng.loadCompanyData();
        var tabIndex = layui.utils.getArg("token");
        element.tabChange('sysmng', tabIndex.toString());
        $('#index_frame', parent.document).show();
        switch (tabIndex){
            case '0':layui.companyMng.loadCompanyData();break;
            case '1':layui.MSMng.loadMSData();break;
            case '2':layui.equipmentMng.loadEquipmentData();break;
            case '3':layui.networkMng.loadNetWorkData();break;
            case '4':layui.userMng.loadUserData();break;
            case '5':layui.roleMng.loadRoleData();break;
        }
    };
    var obj = {
        loadPage : loadPage,
        getTab: getTab
    };
    /*输出内容，注意顺序*/
    exports('sysMng',obj)
})