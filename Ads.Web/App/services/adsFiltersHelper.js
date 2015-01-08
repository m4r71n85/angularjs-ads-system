app.factory('adsFilterHelper', [
    'itemsPerPage',
    function (itemsPerPage) {
        var settings = {};

        var resetSettings = function () {
            settings = { startPage: 1, pageSize: itemsPerPage, townId: '', categoryId: '' };
        }

        var setPage = function (page) {
            settings.startPage = page;
        }

        var getPage = function (page) {
            return settings.startPage;
        }

        var setCategory = function (categoryId) {
            settings.categoryId = categoryId;
            settings.startPage = 1;
        }

        var getCategory = function () {
            return settings.categoryId;
        }

        var setTown = function (townId) {
            settings.townId = townId;
            settings.startPage = 1;
        }

        var getTown = function () {
            return settings.townId;
        }

        var getSettings = function () {
            return settings;
        }

        resetSettings();

        return {
            setCategory: setCategory,
            getCategory: getCategory,
            setTown: setTown,
            getTown: getTown,
            getPage: getPage,
            setPage: setPage,
            getSettings: getSettings,
            resetSettings: resetSettings
        };
    }])