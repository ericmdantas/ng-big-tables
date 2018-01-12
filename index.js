;(function(ng) {
	"use strict";

	ng.module('app', [])
	  .controller('Ctrl', [
			function() {
				let itemsCache = [];
				this.items = [];
				this.qtd = 25000; // 25k

				this.clear = function() {
					this.items.length = 0;
					itemsCache.length = 0;
				}

				this.add = function(qtd) {
					for (let i = 0; i < qtd; i++) {
						itemsCache.push({
							_id: i,
							info1: 'a' + i,
							info2: 'b' + i,
							info3: 'c' + i,
						});
					}

					this.items = itemsCache;
				}
			}
	  ]);
}(angular));
