/// <reference path="ua-type-factory.ts" />

module DEFAULT_SET {

    export function changeStylesheet(args) {

        var ua = navigator.userAgent;
        var head = document.getElementsByTagName('head')[0];
        var query = location.search;
        
        if (query.indexOf("sass") != -1) {
        	args.path = args.path.replace("css/", "css_debug/");
        }

        for(var val in args.file) {
            var prefix = (args.pure)? '': this.uaTypeFactory(ua) + '_';
            document.write('<link rel="stylesheet" type="text/css" href="' + args.path + prefix + args.file[val] + '">');
        }

    }

}
