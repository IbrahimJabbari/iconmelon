(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define("views/IconView",["views/ProtoView","models/IconModel","underscore","jquery","helpers"],function(e,n,r,i,s){var o,u;return o=function(e){function i(){return u=i.__super__.constructor.apply(this,arguments),u}return t(i,e),i.prototype.model=n,i.prototype.template="#icon-view-template",i.prototype.className="icon-with-text-b",i.prototype.events={click:"toggleSelected"},i.prototype.initialize=function(e){return this.o=e!=null?e:{},this.bindModelEvents(),i.__super__.initialize.apply(this,arguments),this},i.prototype.bindModelEvents=function(){return this.model.on("change",this.render)},i.prototype.render=function(){return i.__super__.render.apply(this,arguments),this.$el.toggleClass("is-check",this.model.get("isSelected")),this.$el.toggleClass("h-gm",this.model.get("isFiltered")),App.vent.on("icon:deselect",r.bind(this.deselect,this)),this},i.prototype.deselect=function(){return this.model.deselect()},i.prototype.toggleSelected=function(){return this.model.toggleSelected()},i}(e),o})}).call(this);