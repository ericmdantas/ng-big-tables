;(function(ng) {
	"use strict";

	ng.module('app', [])
	  .controller('Ctrl', [
			'$interval',
			function($interval) {
				let itemsCache = [];
				let intervalP = null;
				this.items = [];
				this.qtd = 250000; // 250k

				this.clear = function() {
					this.items.length = 0;
					itemsCache.length = 0;

					$interval.cancel(intervalP)
				}

				function debounce(itemsCache, time, cb) {
					let initPos = 0
					let lastPos = 0
					let walk = 25000
					let itemsCacheBroken = []

					intervalP = $interval(() => {
						initPos = lastPos
						lastPos += walk

						if (!itemsCache[lastPos]) {
							$interval.cancel(intervalP)
						}

						for (let i = initPos; i < lastPos; i++) {
							itemsCacheBroken.push(itemsCache[i])
						}

						cb(itemsCacheBroken)

						itemsCacheBroken.length = 0
					}, time)
				}

				this.addBatch = function(qtd) {
					for (let i = 0; i < qtd; i++) {
						itemsCache.push({
							_id: i,
							info1: 'a' + i,
							info2: 'b' + i,
							info3: 'c' + i,
						});
					}

					debounce(itemsCache, 33, (itemsCacheBroken) => {
						this.items = this.items.concat(itemsCacheBroken)
					})
				}

				this.addAll = function(qtd) {
					for (let i = 0; i < qtd; i++) {
						itemsCache.push({
							_id: i,
							info1: 'a' + i,
							info2: 'b' + i,
							info3: 'c' + i,
						});
					}

					this.items = itemsCache
				}
			}
	  ]);
}(angular));
