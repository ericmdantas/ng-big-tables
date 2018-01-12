;(function(ng) {
	"use strict";

	ng.module('app', [])
	  .controller('Ctrl', [
			function() {
				let itemsCache = [];
				this.items = [];
				this.qtd = 100000; // 100k

				this.push = function(qtd) {
					this.items.length = 0;
					itemsCache.length = 0;

					console.time('push')
					for (let i = 0; i < qtd; i++) {
						this.items.push({
							_id: i,
							info1: 'a' + i,
							info2: 'b' + i,
							info3: 'c' + i,
						});
					}
					console.timeEnd('push')
				}

				this.ref = function(qtd) {
					this.items.length = 0;
					itemsCache.length = 0;

					console.time('ref')
					for (let i = 0; i < qtd; i++) {
						itemsCache.push({
							_id: i,
							info1: 'a' + i,
							info2: 'b' + i,
							info3: 'c' + i,
						});
					}
					console.timeEnd('ref')

					this.items = itemsCache;
				}
			}
	  ]);
}(angular));
