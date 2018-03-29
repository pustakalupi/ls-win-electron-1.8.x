const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron')
const path = require('path')

describe('Application launch', function () {
    this.timeout(10000);
    
    beforeEach(function () {
        console.log("beforeEach");
        this.app = new Application({
            path: electronPath,
            args: [path.join(__dirname, '..')]
        })
        return this.app.start()
    });

    afterEach(function () {
        console.log("afterEach");
        if (this.app && this.app.isRunning()) {
            return this.app.stop()
        }
    });

    it('hanya 1 window', function () {
        return this.app.client.getWindowCount().then(function (count) {
            assert.equal(count, 1);
        });
    });

    it('title adalah Bab-5-Testing', function () {
        return this.app.client.getTitle().then(function (title) {
            assert.equal(title, 'Bab-5-Testing');
        });
    });

    it('window tampil dan visible', function () {
        return this.app.browserWindow.isVisible().then(function (visible) {
            assert.equal(visible, true);
        });
    });

    it('clipboard berfungsi dengan benar', function () {
        return this.app.electron.clipboard.writeText('isi clipboard').electron.clipboard.readText().then(function (clipboardText) {
            assert.equal(clipboardText, 'isi clipboard');
        });
    });
});