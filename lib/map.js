module.exports = function(o) {

    function mapItem(oItem) {
        var oReturn = {
            mingzi: oItem.name,
            yanse: oItem.color
        };

        if (oItem.items) {
            oReturn.ci = oItem.items.map(function(oNestedItem) {
                return mapItem(oNestedItem);
            });
            return oReturn;
        }

        return oReturn;
    }

    return {
        ci: o.items.map(function(oItem) {
            return mapItem(oItem);
        })
    };
};
