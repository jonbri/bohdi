module.exports = function(o) {
    function mapItem(oItem) {
        var oReturn = {
            mingzi: oItem.name,
            yanse: oItem.color
        };

        if (!oItem.items) {
            return oReturn;
        }

        oReturn.ci = oItem.items.map(mapItem);

        return oReturn;
    }

    return {
        ci: o.items.map(mapItem)
    };
};
