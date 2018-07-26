module.exports = function(o) {
    return {
        ci: o.items.map(function(oItem) {
            return {
                mingzi: oItem.name,
                yanse: oItem.color
            };
        })
    };
};
