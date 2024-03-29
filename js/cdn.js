(function() {
  function t(t, i) {
    for (var e in i) m.call(i, e) && (t[e] = i[e]);

    function s() {
      this.constructor = t
    }
    return s.prototype = i.prototype, t.prototype = new s, t.__super__ = i.prototype, t
  }
  var i, e, s, n, o, p, a, h, r, l, g, c, u, d = [].slice,
    m = {}.hasOwnProperty,
    x = [].indexOf || function(t) {
      for (var i = 0, e = this.length; i < e; i++)
        if (i in this && this[i] === t) return i;
      return -1
    };

  function f(t, i) {
    null == t && (t = !0), this.clear = null == i || i, t && AnimationUpdater.add(this)
  }

  function v() {
    return v.__super__.constructor.apply(this, arguments)
  }

  function y(t, i) {
    this.el = t, this.fractionDigits = i
  }

  function V(t, i) {
    if (this.elem = t, this.text = null != i && i, V.__super__.constructor.call(this), void 0 === this.elem) throw new Error("The element isn't defined.");
    this.value = 1 * this.elem.innerHTML, this.text && (this.value = 0)
  }

  function w(t) {
    if (this.gauge = t, void 0 === this.gauge) throw new Error("The element isn't defined.");
    this.ctx = this.gauge.ctx, this.canvas = this.gauge.canvas, w.__super__.constructor.call(this, !1, !1), this.setOptions()
  }

  function S(t) {
    this.elem = t
  }

  function M(t) {
    var i, e;
    this.canvas = t, M.__super__.constructor.call(this), this.percentColors = null, "undefined" != typeof G_vmlCanvasManager && (this.canvas = window.G_vmlCanvasManager.initElement(this.canvas)), this.ctx = this.canvas.getContext("2d"), i = this.canvas.clientHeight, e = this.canvas.clientWidth, this.canvas.height = i, this.canvas.width = e, this.gp = [new p(this)], this.setOptions()
  }

  function C(t) {
    this.canvas = t, C.__super__.constructor.call(this), "undefined" != typeof G_vmlCanvasManager && (this.canvas = window.G_vmlCanvasManager.initElement(this.canvas)), this.ctx = this.canvas.getContext("2d"), this.setOptions(), this.render()
  }

  function _() {
    return _.__super__.constructor.apply(this, arguments)
  }! function() {
    var s, n, t, o, i, e, a;
    for (t = 0, i = (a = ["ms", "moz", "webkit", "o"]).length; t < i && (e = a[t], !window.requestAnimationFrame); t++) window.requestAnimationFrame = window[e + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
    s = null, o = 0, n = {}, requestAnimationFrame ? window.cancelAnimationFrame || (s = window.requestAnimationFrame, window.requestAnimationFrame = function(t, i) {
      var e;
      return e = ++o, s(function() {
        if (!n[e]) return t()
      }, i), e
    }, window.cancelAnimationFrame = function(t) {
      return n[t] = !0
    }) : (window.requestAnimationFrame = function(t, i) {
      var e, s, n, o;
      return e = (new Date).getTime(), o = Math.max(0, 16 - (e - n)), s = window.setTimeout(function() {
        return t(e + o)
      }, o), n = e + o, s
    }, window.cancelAnimationFrame = function(t) {
      return clearTimeout(t)
    })
  }(), u = function(t) {
    var i, e;
    for (t -= 3600 * (i = Math.floor(t / 3600)) + 60 * (e = Math.floor((t - 3600 * i) / 60)), t += "", e += ""; e.length < 2;) e = "0" + e;
    for (; t.length < 2;) t = "0" + t;
    return (i = i ? i + ":" : "") + e + ":" + t
  }, g = function() {
    var t, i, e;
    return e = (i = 1 <= arguments.length ? d.call(arguments, 0) : [])[0], t = i[1], r(e.toFixed(t))
  }, c = function(t, i) {
    var e, s, n;
    for (e in s = {}, t) m.call(t, e) && (n = t[e], s[e] = n);
    for (e in i) m.call(i, e) && (n = i[e], s[e] = n);
    return s
  }, r = function(t) {
    var i, e, s, n;
    for (s = (e = (t += "").split("."))[0], n = "", 1 < e.length && (n = "." + e[1]), i = /(\d+)(\d{3})/; i.test(s);) s = s.replace(i, "$1,$2");
    return s + n
  }, l = function(t) {
    return "#" === t.charAt(0) ? t.substring(1, 7) : t
  }, f.prototype.animationSpeed = 32, f.prototype.update = function(t) {
    var i;
    return null == t && (t = !1), !(!t && this.displayedValue === this.value || (this.ctx && this.clear && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), i = this.value - this.displayedValue, Math.abs(i / this.animationSpeed) <= .001 ? this.displayedValue = this.value : this.displayedValue = this.displayedValue + i / this.animationSpeed, this.render(), 0))
  }, t(v, h = f), v.prototype.displayScale = 1, v.prototype.forceUpdate = !0, v.prototype.setTextField = function(t, i) {
    return this.textField = t instanceof a ? t : new a(t, i)
  }, v.prototype.setMinValue = function(t, i) {
    var e, s, n, o, a;
    if (this.minValue = t, null == i && (i = !0), i) {
      for (this.displayedValue = this.minValue, a = [], s = 0, n = (o = this.gp || []).length; s < n; s++) e = o[s], a.push(e.displayedValue = this.minValue);
      return a
    }
  }, v.prototype.setOptions = function(t) {
    return null == t && (t = null), this.options = c(this.options, t), this.textField && (this.textField.el.style.fontSize = t.fontSize + "px"), .5 < this.options.angle && (this.options.angle = .5), this.configDisplayScale(), this
  }, v.prototype.configDisplayScale = function() {
    var t, i, e, s, n;
    return s = this.displayScale, !1 === this.options.highDpiSupport ? delete this.displayScale : (i = window.devicePixelRatio || 1, t = this.ctx.webkitBackingStorePixelRatio || this.ctx.mozBackingStorePixelRatio || this.ctx.msBackingStorePixelRatio || this.ctx.oBackingStorePixelRatio || this.ctx.backingStorePixelRatio || 1, this.displayScale = i / t), this.displayScale !== s && (n = this.canvas.G__width || this.canvas.width, e = this.canvas.G__height || this.canvas.height, this.canvas.width = n * this.displayScale, this.canvas.height = e * this.displayScale, this.canvas.style.width = n + "px", this.canvas.style.height = e + "px", this.canvas.G__width = n, this.canvas.G__height = e), this
  }, v.prototype.parseValue = function(t) {
    return t = parseFloat(t) || Number(t), isFinite(t) ? t : 0
  }, s = v, y.prototype.render = function(t) {
    return this.el.innerHTML = g(t.displayedValue, this.fractionDigits)
  }, a = y, t(V, h), V.prototype.displayedValue = 0, V.prototype.value = 0, V.prototype.setVal = function(t) {
    return this.value = 1 * t
  }, V.prototype.render = function() {
    var t;
    return t = this.text ? u(this.displayedValue.toFixed(0)) : r(g(this.displayedValue)), this.elem.innerHTML = t
  }, i = V, t(w, h), w.prototype.displayedValue = 0, w.prototype.value = 0, w.prototype.options = {
    strokeWidth: .035,
    length: .1,
    color: "#000000",
    iconPath: null,
    iconScale: 1,
    iconAngle: 0
  }, w.prototype.img = null, w.prototype.setOptions = function(t) {
    if (null == t && (t = null), this.options = c(this.options, t), this.length = 2 * this.gauge.radius * this.gauge.options.radiusScale * this.options.length, this.strokeWidth = this.canvas.height * this.options.strokeWidth, this.maxValue = this.gauge.maxValue, this.minValue = this.gauge.minValue, this.animationSpeed = this.gauge.animationSpeed, this.options.angle = this.gauge.options.angle, this.options.iconPath) return this.img = new Image, this.img.src = this.options.iconPath
  }, w.prototype.render = function() {
    var t, i, e, s, n, o, a, h, r;
    if (t = this.gauge.getAngle.call(this, this.displayedValue), h = Math.round(this.length * Math.cos(t)), r = Math.round(this.length * Math.sin(t)), o = Math.round(this.strokeWidth * Math.cos(t - Math.PI / 2)), a = Math.round(this.strokeWidth * Math.sin(t - Math.PI / 2)), i = Math.round(this.strokeWidth * Math.cos(t + Math.PI / 2)), e = Math.round(this.strokeWidth * Math.sin(t + Math.PI / 2)), this.ctx.beginPath(), this.ctx.fillStyle = this.options.color, this.ctx.arc(0, 0, this.strokeWidth, 0, 2 * Math.PI, !1), this.ctx.fill(), this.ctx.beginPath(), this.ctx.moveTo(o, a), this.ctx.lineTo(h, r), this.ctx.lineTo(i, e), this.ctx.fill(), this.img) return s = Math.round(this.img.width * this.options.iconScale), n = Math.round(this.img.height * this.options.iconScale), this.ctx.save(), this.ctx.translate(h, r), this.ctx.rotate(t + Math.PI / 180 * (90 + this.options.iconAngle)), this.ctx.drawImage(this.img, -s / 2, -n / 2, s, n), this.ctx.restore()
  }, p = w, S.prototype.updateValues = function(t) {
    return this.value = t[0], this.maxValue = t[1], this.avgValue = t[2], this.render()
  }, S.prototype.render = function() {
    var t, i;
    return this.textField && this.textField.text(g(this.value)), 0 === this.maxValue && (this.maxValue = 2 * this.avgValue), i = this.value / this.maxValue * 100, t = this.avgValue / this.maxValue * 100, $(".bar-value", this.elem).css({
      width: i + "%"
    }), $(".typical-value", this.elem).css({
      width: t + "%"
    })
  }, t(M, s), M.prototype.elem = null, M.prototype.value = [20], M.prototype.maxValue = 80, M.prototype.minValue = 0, M.prototype.displayedAngle = 0, M.prototype.displayedValue = 0, M.prototype.lineWidth = 40, M.prototype.paddingTop = .1, M.prototype.paddingBottom = .1, M.prototype.percentColors = null, M.prototype.options = {
    colorStart: "#6fadcf",
    colorStop: void 0,
    gradientType: 0,
    strokeColor: "#e0e0e0",
    pointer: {
      length: .8,
      strokeWidth: .035,
      iconScale: 1
    },
    angle: .15,
    lineWidth: .44,
    radiusScale: 1,
    fontSize: 40,
    limitMax: !1,
    limitMin: !1
  }, M.prototype.setOptions = function(t) {
    var i, e, s, n, o;
    for (null == t && (t = null), M.__super__.setOptions.call(this, t), this.configPercentColors(), this.extraPadding = 0, this.options.angle < 0 && (n = Math.PI * (1 + this.options.angle), this.extraPadding = Math.sin(n)), this.availableHeight = this.canvas.height * (1 - this.paddingTop - this.paddingBottom), this.lineWidth = this.availableHeight * this.options.lineWidth, this.radius = (this.availableHeight - this.lineWidth / 2) / (1 + this.extraPadding), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), e = 0, s = (o = this.gp).length; e < s; e++)(i = o[e]).setOptions(this.options.pointer), i.render();
    return this.render(), this
  }, M.prototype.configPercentColors = function() {
    var t, i, e, s, n, o, a;
    if (this.percentColors = null, void 0 !== this.options.percentColors) {
      for (this.percentColors = new Array, o = [], e = s = 0, n = this.options.percentColors.length - 1; 0 <= n ? s <= n : n <= s; e = 0 <= n ? ++s : --s) a = parseInt(l(this.options.percentColors[e][1]).substring(0, 2), 16), i = parseInt(l(this.options.percentColors[e][1]).substring(2, 4), 16), t = parseInt(l(this.options.percentColors[e][1]).substring(4, 6), 16), o.push(this.percentColors[e] = {
        pct: this.options.percentColors[e][0],
        color: {
          r: a,
          g: i,
          b: t
        }
      });
      return o
    }
  }, M.prototype.set = function(t) {
    var i, e, s, n, o, a, h, r, l;
    for (t instanceof Array || (t = [t]), e = s = 0, h = t.length - 1; 0 <= h ? s <= h : h <= s; e = 0 <= h ? ++s : --s) t[e] = this.parseValue(t[e]);
    if (t.length > this.gp.length)
      for (e = n = 0, r = t.length - this.gp.length; 0 <= r ? n < r : r < n; e = 0 <= r ? ++n : --n)(i = new p(this)).setOptions(this.options.pointer), this.gp.push(i);
    else t.length < this.gp.length && (this.gp = this.gp.slice(this.gp.length - t.length));
    for (a = e = 0, o = t.length; a < o; a++)(l = t[a]) > this.maxValue ? this.options.limitMax ? l = this.maxValue : this.maxValue = l + 1 : l < this.minValue && (this.options.limitMin ? l = this.minValue : this.minValue = l - 1), this.gp[e].value = l, this.gp[e++].setOptions({
      minValue: this.minValue,
      maxValue: this.maxValue,
      angle: this.options.angle
    });
    return this.value = Math.max(Math.min(t[t.length - 1], this.maxValue), this.minValue), AnimationUpdater.add(this), AnimationUpdater.run(this.forceUpdate), this.forceUpdate = !1
  }, M.prototype.getAngle = function(t) {
    return (1 + this.options.angle) * Math.PI + (t - this.minValue) / (this.maxValue - this.minValue) * (1 - 2 * this.options.angle) * Math.PI
  }, M.prototype.getColorForPercentage = function(t, i) {
    var e, s, n, o, a, h, r;
    if (0 === t) e = this.percentColors[0].color;
    else
      for (e = this.percentColors[this.percentColors.length - 1].color, n = o = 0, h = this.percentColors.length - 1; 0 <= h ? o <= h : h <= o; n = 0 <= h ? ++o : --o)
        if (t <= this.percentColors[n].pct) {
          e = !0 === i ? (r = this.percentColors[n - 1] || this.percentColors[0], s = this.percentColors[n], a = (t - r.pct) / (s.pct - r.pct), {
            r: Math.floor(r.color.r * (1 - a) + s.color.r * a),
            g: Math.floor(r.color.g * (1 - a) + s.color.g * a),
            b: Math.floor(r.color.b * (1 - a) + s.color.b * a)
          }) : this.percentColors[n].color;
          break
        } return "rgb(" + [e.r, e.g, e.b].join(",") + ")"
  }, M.prototype.getColorForValue = function(t, i) {
    var e;
    return e = (t - this.minValue) / (this.maxValue - this.minValue), this.getColorForPercentage(e, i)
  }, M.prototype.renderStaticLabels = function(t, i, e, s) {
    var n, o, a, h, r, l, p, c, u, d;
    for (this.ctx.save(), this.ctx.translate(i, e), l = /\d+\.?\d?/, r = (n = t.font || "10px Times").match(l)[0], c = n.slice(r.length), o = parseFloat(r) * this.displayScale, this.ctx.font = o + c, this.ctx.fillStyle = t.color || "#000000", this.ctx.textBaseline = "bottom", this.ctx.textAlign = "center", a = 0, h = (p = t.labels).length; a < h; a++) void 0 !== (d = p[a]).label ? (!this.options.limitMin || d >= this.minValue) && (!this.options.limitMax || d <= this.maxValue) && (r = (n = d.font || t.font).match(l)[0], c = n.slice(r.length), o = parseFloat(r) * this.displayScale, this.ctx.font = o + c, u = this.getAngle(d.label) - 3 * Math.PI / 2, this.ctx.rotate(u), this.ctx.fillText(g(d.label, t.fractionDigits), 0, -s - this.lineWidth / 2), this.ctx.rotate(-u)) : (!this.options.limitMin || d >= this.minValue) && (!this.options.limitMax || d <= this.maxValue) && (u = this.getAngle(d) - 3 * Math.PI / 2, this.ctx.rotate(u), this.ctx.fillText(g(d, t.fractionDigits), 0, -s - this.lineWidth / 2), this.ctx.rotate(-u));
    return this.ctx.restore()
  }, M.prototype.renderTicks = function(t, i, e, s) {
    var n, o, a, h, r, l, p, c, u, d, g, m, x, f, v, y, V, w, S, M;
    if (t !== {}) {
      for (l = t.divisions || 0, w = t.subDivisions || 0, a = t.divColor || "#fff", f = t.subColor || "#fff", h = t.divLength || .7, y = t.subLength || .2, u = parseFloat(this.maxValue) - parseFloat(this.minValue), d = parseFloat(u) / parseFloat(t.divisions), v = parseFloat(d) / parseFloat(t.subDivisions), n = parseFloat(this.minValue), o = 0 + v, r = (c = u / 400) * (t.divWidth || 1), V = c * (t.subWidth || 1), m = [], S = p = 0, g = l + 1; p < g; S = p += 1) this.ctx.lineWidth = this.lineWidth * h, x = this.lineWidth / 2 * (1 - h), M = this.radius * this.options.radiusScale + x, this.ctx.strokeStyle = a, this.ctx.beginPath(), this.ctx.arc(0, 0, M, this.getAngle(n - r), this.getAngle(n + r), !1), this.ctx.stroke(), o = n + v, n += d, S !== t.divisions && 0 < w ? m.push(function() {
        var t, i, e;
        for (e = [], t = 0, i = w - 1; t < i; t += 1) this.ctx.lineWidth = this.lineWidth * y, x = this.lineWidth / 2 * (1 - y), M = this.radius * this.options.radiusScale + x, this.ctx.strokeStyle = f, this.ctx.beginPath(), this.ctx.arc(0, 0, M, this.getAngle(o - V), this.getAngle(o + V), !1), this.ctx.stroke(), e.push(o += v);
        return e
      }.call(this)) : m.push(void 0);
      return m
    }
  }, M.prototype.render = function() {
    var t, i, e, s, n, o, a, h, r, l, p, c, u, d, g, m;
    if (g = this.canvas.width / 2, e = this.canvas.height * this.paddingTop + this.availableHeight - (this.radius + this.lineWidth / 2) * this.extraPadding, t = this.getAngle(this.displayedValue), this.textField && this.textField.render(this), this.ctx.lineCap = "butt", l = this.radius * this.options.radiusScale, this.options.staticLabels && this.renderStaticLabels(this.options.staticLabels, g, e, l), this.options.staticZones)
      for (this.ctx.save(), this.ctx.translate(g, e), this.ctx.lineWidth = this.lineWidth, s = 0, o = (p = this.options.staticZones).length; s < o; s++) r = (m = p[s]).min, this.options.limitMin && r < this.minValue && (r = this.minValue), h = m.max, this.options.limitMax && h > this.maxValue && (h = this.maxValue), d = this.radius * this.options.radiusScale, m.height && (this.ctx.lineWidth = this.lineWidth * m.height, u = this.lineWidth / 2 * (m.offset || 1 - m.height), d = this.radius * this.options.radiusScale + u), this.ctx.strokeStyle = m.strokeStyle, this.ctx.beginPath(), this.ctx.arc(0, 0, d, this.getAngle(r), this.getAngle(h), !1), this.ctx.stroke();
    else void 0 !== this.options.customFillStyle ? i = this.options.customFillStyle(this) : null !== this.percentColors ? i = this.getColorForValue(this.displayedValue, this.options.generateGradient) : void 0 !== this.options.colorStop ? ((i = 0 === this.options.gradientType ? this.ctx.createRadialGradient(g, e, 9, g, e, 70) : this.ctx.createLinearGradient(0, 0, g, 0)).addColorStop(0, this.options.colorStart), i.addColorStop(1, this.options.colorStop)) : i = this.options.colorStart, this.ctx.strokeStyle = i, this.ctx.beginPath(), this.ctx.arc(g, e, l, (1 + this.options.angle) * Math.PI, t, !1), this.ctx.lineWidth = this.lineWidth, this.ctx.stroke(), this.ctx.strokeStyle = this.options.strokeColor, this.ctx.beginPath(), this.ctx.arc(g, e, l, t, (2 - this.options.angle) * Math.PI, !1), this.ctx.stroke(), this.ctx.save(), this.ctx.translate(g, e);
    for (this.options.renderTicks && this.renderTicks(this.options.renderTicks, g, e, l), this.ctx.restore(), this.ctx.translate(g, e), n = 0, a = (c = this.gp).length; n < a; n++) c[n].update(!0);
    return this.ctx.translate(-g, -e)
  }, o = M, t(C, s), C.prototype.lineWidth = 15, C.prototype.displayedValue = 0, C.prototype.value = 33, C.prototype.maxValue = 80, C.prototype.minValue = 0, C.prototype.options = {
    lineWidth: .1,
    colorStart: "#6f6ea0",
    colorStop: "#c0c0db",
    strokeColor: "#eeeeee",
    shadowColor: "#d5d5d5",
    angle: .35,
    radiusScale: 1
  }, C.prototype.getAngle = function(t) {
    return (1 - this.options.angle) * Math.PI + (t - this.minValue) / (this.maxValue - this.minValue) * (2 + this.options.angle - (1 - this.options.angle)) * Math.PI
  }, C.prototype.setOptions = function(t) {
    return null == t && (t = null), C.__super__.setOptions.call(this, t), this.lineWidth = this.canvas.height * this.options.lineWidth, this.radius = this.options.radiusScale * (this.canvas.height / 2 - this.lineWidth / 2), this
  }, C.prototype.set = function(t) {
    return this.value = this.parseValue(t), this.value > this.maxValue ? this.options.limitMax ? this.value = this.maxValue : this.maxValue = this.value : this.value < this.minValue && (this.options.limitMin ? this.value = this.minValue : this.minValue = this.value), AnimationUpdater.add(this), AnimationUpdater.run(this.forceUpdate), this.forceUpdate = !1
  }, C.prototype.render = function() {
    var t, i, e, s;
    return t = this.getAngle(this.displayedValue), s = this.canvas.width / 2, e = this.canvas.height / 2, this.textField && this.textField.render(this), (i = this.ctx.createRadialGradient(s, e, 39, s, e, 70)).addColorStop(0, this.options.colorStart), i.addColorStop(1, this.options.colorStop), this.radius, this.lineWidth, this.radius, this.lineWidth, this.ctx.strokeStyle = this.options.strokeColor, this.ctx.beginPath(), this.ctx.arc(s, e, this.radius, (1 - this.options.angle) * Math.PI, (2 + this.options.angle) * Math.PI, !1), this.ctx.lineWidth = this.lineWidth, this.ctx.lineCap = "round", this.ctx.stroke(), this.ctx.strokeStyle = i, this.ctx.beginPath(), this.ctx.arc(s, e, this.radius, (1 - this.options.angle) * Math.PI, t, !1), this.ctx.stroke()
  }, t(_, e = C), _.prototype.strokeGradient = function(t, i, e, s) {
    var n;
    return (n = this.ctx.createRadialGradient(t, i, e, t, i, s)).addColorStop(0, this.options.shadowColor), n.addColorStop(.12, this.options._orgStrokeColor), n.addColorStop(.88, this.options._orgStrokeColor), n.addColorStop(1, this.options.shadowColor), n
  }, _.prototype.setOptions = function(t) {
    var i, e, s, n;
    return null == t && (t = null), _.__super__.setOptions.call(this, t), n = this.canvas.width / 2, i = this.canvas.height / 2, e = this.radius - this.lineWidth / 2, s = this.radius + this.lineWidth / 2, this.options._orgStrokeColor = this.options.strokeColor, this.options.strokeColor = this.strokeGradient(n, i, e, s), this
  }, n = _, window.AnimationUpdater = {
    elements: [],
    animId: null,
    addAll: function(t) {
      var i, e, s, n;
      for (n = [], e = 0, s = t.length; e < s; e++) i = t[e], n.push(AnimationUpdater.elements.push(i));
      return n
    },
    add: function(t) {
      if (x.call(AnimationUpdater.elements, t) < 0) return AnimationUpdater.elements.push(t)
    },
    run: function(t) {
      var i, e, s, n, o, a, h;
      if (null == t && (t = !1), isFinite(parseFloat(t)) || !0 === t) {
        for (i = !0, h = [], s = e = 0, o = (a = AnimationUpdater.elements).length; e < o; s = ++e) a[s].update(!0 === t) ? i = !1 : h.push(s);
        for (n = h.length - 1; 0 <= n; n += -1) s = h[n], AnimationUpdater.elements.splice(s, 1);
        return AnimationUpdater.animId = i ? null : requestAnimationFrame(AnimationUpdater.run)
      }
      if (!1 === t) return !0 === AnimationUpdater.animId && cancelAnimationFrame(AnimationUpdater.animId), AnimationUpdater.animId = requestAnimationFrame(AnimationUpdater.run)
    }
  }, "function" == typeof window.define && null != window.define.amd ? define(function() {
    return {
      Gauge: o,
      Donut: n,
      BaseDonut: e,
      TextRenderer: a
    }
  }) : "undefined" != typeof module && null != module.exports ? module.exports = {
    Gauge: o,
    Donut: n,
    BaseDonut: e,
    TextRenderer: a
  } : (window.Gauge = o, window.Donut = n, window.BaseDonut = e, window.TextRenderer = a)
}).call(this);

// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.1 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
! function(a) {
  var b, c, d = "0.4.2",
    e = "hasOwnProperty",
    f = /[\.\/]/,
    g = "*",
    h = function() {},
    i = function(a, b) {
      return a - b
    },
    j = {
      n: {}
    },
    k = function(a, d) {
      a = String(a);
      var e, f = c,
        g = Array.prototype.slice.call(arguments, 2),
        h = k.listeners(a),
        j = 0,
        l = [],
        m = {},
        n = [],
        o = b;
      b = a, c = 0;
      for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
      for (l.sort(i); l[j] < 0;)
        if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;
      for (p = 0; q > p; p++)
        if (e = h[p], "zIndex" in e)
          if (e.zIndex == l[j]) {
            if (n.push(e.apply(d, g)), c) break;
            do
              if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break; while (e)
          } else m[e.zIndex] = e;
      else if (n.push(e.apply(d, g)), c) break;
      return c = f, b = o, n.length ? n : null
    };
  k._events = j, k.listeners = function(a) {
    var b, c, d, e, h, i, k, l, m = a.split(f),
      n = j,
      o = [n],
      p = [];
    for (e = 0, h = m.length; h > e; e++) {
      for (l = [], i = 0, k = o.length; k > i; i++)
        for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
      o = l
    }
    return p
  }, k.on = function(a, b) {
    if (a = String(a), "function" != typeof b) return function() {};
    for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
      n: {}
    });
    for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)
      if (d.f[e] == b) return h;
    return d.f.push(b),
      function(a) {
        +a == +a && (b.zIndex = +a)
      }
  }, k.f = function(a) {
    var b = [].slice.call(arguments, 1);
    return function() {
      k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
    }
  }, k.stop = function() {
    c = 1
  }, k.nt = function(a) {
    return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
  }, k.nts = function() {
    return b.split(f)
  }, k.off = k.unbind = function(a, b) {
    if (!a) return k._events = j = {
      n: {}
    }, void 0;
    var c, d, h, i, l, m, n, o = a.split(f),
      p = [j];
    for (i = 0, l = o.length; l > i; i++)
      for (m = 0; m < p.length; m += h.length - 2) {
        if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);
        else
          for (d in c) c[e](d) && h.push(c[d]);
        p.splice.apply(p, h)
      }
    for (i = 0, l = p.length; l > i; i++)
      for (c = p[i]; c.n;) {
        if (b) {
          if (c.f) {
            for (m = 0, n = c.f.length; n > m; m++)
              if (c.f[m] == b) {
                c.f.splice(m, 1);
                break
              }! c.f.length && delete c.f
          }
          for (d in c.n)
            if (c.n[e](d) && c.n[d].f) {
              var q = c.n[d].f;
              for (m = 0, n = q.length; n > m; m++)
                if (q[m] == b) {
                  q.splice(m, 1);
                  break
                }! q.length && delete c.n[d].f
            }
        } else {
          delete c.f;
          for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f
        }
        c = c.n
      }
  }, k.once = function(a, b) {
    var c = function() {
      return k.unbind(a, c), b.apply(this, arguments)
    };
    return k.on(a, c)
  }, k.version = d, k.toString = function() {
    return "You are running Eve " + d
  }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
    return k
  }) : a.eve = k
}(this),
function(a, b) {
  "function" == typeof define && define.amd ? define(["."], function(c) {
    return b(a, c)
  }) : b(a, a.eve)
}(this, function(a, b) {
  function c(a) {
    if (c.is(a, "function")) return u ? a() : b.on("raphael.DOMload", a);
    if (c.is(a, V)) return c._engine.create[D](c, a.splice(0, 3 + c.is(a[0], T))).add(a);
    var d = Array.prototype.slice.call(arguments, 0);
    if (c.is(d[d.length - 1], "function")) {
      var e = d.pop();
      return u ? e.call(c._engine.create[D](c, d)) : b.on("raphael.DOMload", function() {
        e.call(c._engine.create[D](c, d))
      })
    }
    return c._engine.create[D](c, arguments)
  }

  function d(a) {
    if (Object(a) !== a) return a;
    var b = new a.constructor;
    for (var c in a) a[z](c) && (b[c] = d(a[c]));
    return b
  }

  function e(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      if (a[c] === b) return a.push(a.splice(c, 1)[0])
  }

  function f(a, b, c) {
    function d() {
      var f = Array.prototype.slice.call(arguments, 0),
        g = f.join("␀"),
        h = d.cache = d.cache || {},
        i = d.count = d.count || [];
      return h[z](g) ? (e(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[D](b, f), c ? c(h[g]) : h[g])
    }
    return d
  }

  function g() {
    return this.hex
  }

  function h(a, b) {
    for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
      var f = [{
        x: +a[d - 2],
        y: +a[d - 1]
      }, {
        x: +a[d],
        y: +a[d + 1]
      }, {
        x: +a[d + 2],
        y: +a[d + 3]
      }, {
        x: +a[d + 4],
        y: +a[d + 5]
      }];
      b ? d ? e - 4 == d ? f[3] = {
        x: +a[0],
        y: +a[1]
      } : e - 2 == d && (f[2] = {
        x: +a[0],
        y: +a[1]
      }, f[3] = {
        x: +a[2],
        y: +a[3]
      }) : f[0] = {
        x: +a[e - 2],
        y: +a[e - 1]
      } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
        x: +a[d],
        y: +a[d + 1]
      }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
    }
    return c
  }

  function i(a, b, c, d, e) {
    var f = -3 * b + 9 * c - 9 * d + 3 * e,
      g = a * f + 6 * b - 12 * c + 6 * d;
    return a * g - 3 * b + 3 * c
  }

  function j(a, b, c, d, e, f, g, h, j) {
    null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j;
    for (var k = j / 2, l = 12, m = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; l > p; p++) {
      var q = k * m[p] + k,
        r = i(q, a, c, e, g),
        s = i(q, b, d, f, h),
        t = r * r + s * s;
      o += n[p] * N.sqrt(t)
    }
    return k * o
  }

  function k(a, b, c, d, e, f, g, h, i) {
    if (!(0 > i || j(a, b, c, d, e, f, g, h) < i)) {
      var k, l = 1,
        m = l / 2,
        n = l - m,
        o = .01;
      for (k = j(a, b, c, d, e, f, g, h, n); Q(k - i) > o;) m /= 2, n += (i > k ? 1 : -1) * m, k = j(a, b, c, d, e, f, g, h, n);
      return n
    }
  }

  function l(a, b, c, d, e, f, g, h) {
    if (!(O(a, c) < P(e, g) || P(a, c) > O(e, g) || O(b, d) < P(f, h) || P(b, d) > O(f, h))) {
      var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
        j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
        k = (a - c) * (f - h) - (b - d) * (e - g);
      if (k) {
        var l = i / k,
          m = j / k,
          n = +l.toFixed(2),
          o = +m.toFixed(2);
        if (!(n < +P(a, c).toFixed(2) || n > +O(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +O(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +O(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +O(f, h).toFixed(2))) return {
          x: l,
          y: m
        }
      }
    }
  }

  function m(a, b, d) {
    var e = c.bezierBBox(a),
      f = c.bezierBBox(b);
    if (!c.isBBoxIntersect(e, f)) return d ? 0 : [];
    for (var g = j.apply(0, a), h = j.apply(0, b), i = ~~(g / 5), k = ~~(h / 5), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; i + 1 > q; q++) {
      var r = c.findDotsAtSegment.apply(c, a.concat(q / i));
      m.push({
        x: r.x,
        y: r.y,
        t: q / i
      })
    }
    for (q = 0; k + 1 > q; q++) r = c.findDotsAtSegment.apply(c, b.concat(q / k)), n.push({
      x: r.x,
      y: r.y,
      t: q / k
    });
    for (q = 0; i > q; q++)
      for (var s = 0; k > s; s++) {
        var t = m[q],
          u = m[q + 1],
          v = n[s],
          w = n[s + 1],
          x = Q(u.x - t.x) < .001 ? "y" : "x",
          y = Q(w.x - v.x) < .001 ? "y" : "x",
          z = l(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
        if (z) {
          if (o[z.x.toFixed(4)] == z.y.toFixed(4)) continue;
          o[z.x.toFixed(4)] = z.y.toFixed(4);
          var A = t.t + Q((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
            B = v.t + Q((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
          A >= 0 && 1 >= A && B >= 0 && 1 >= B && (d ? p++ : p.push({
            x: z.x,
            y: z.y,
            t1: A,
            t2: B
          }))
        }
      }
    return p
  }

  function n(a, b, d) {
    a = c._path2curve(a), b = c._path2curve(b);
    for (var e, f, g, h, i, j, k, l, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) {
      var s = a[q];
      if ("M" == s[0]) e = i = s[1], f = j = s[2];
      else {
        "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j);
        for (var t = 0, u = b.length; u > t; t++) {
          var v = b[t];
          if ("M" == v[0]) g = k = v[1], h = l = v[2];
          else {
            "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, l, k, l], g = k, h = l);
            var w = m(n, o, d);
            if (d) p += w;
            else {
              for (var x = 0, y = w.length; y > x; x++) w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
              p = p.concat(w)
            }
          }
        }
      }
    }
    return p
  }

  function o(a, b, c, d, e, f) {
    null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
  }

  function p() {
    return this.x + H + this.y + H + this.width + " × " + this.height
  }

  function q(a, b, c, d, e, f) {
    function g(a) {
      return ((l * a + k) * a + j) * a
    }

    function h(a, b) {
      var c = i(a, b);
      return ((o * c + n) * c + m) * c
    }

    function i(a, b) {
      var c, d, e, f, h, i;
      for (e = a, i = 0; 8 > i; i++) {
        if (f = g(e) - a, Q(f) < b) return e;
        if (h = (3 * l * e + 2 * k) * e + j, Q(h) < 1e-6) break;
        e -= f / h
      }
      if (c = 0, d = 1, e = a, c > e) return c;
      if (e > d) return d;
      for (; d > c;) {
        if (f = g(e), Q(f - a) < b) return e;
        a > f ? c = e : d = e, e = (d - c) / 2 + c
      }
      return e
    }
    var j = 3 * b,
      k = 3 * (d - b) - j,
      l = 1 - j - k,
      m = 3 * c,
      n = 3 * (e - c) - m,
      o = 1 - m - n;
    return h(a, 1 / (200 * f))
  }

  function r(a, b) {
    var c = [],
      d = {};
    if (this.ms = b, this.times = 1, a) {
      for (var e in a) a[z](e) && (d[_(e)] = a[e], c.push(_(e)));
      c.sort(lb)
    }
    this.anim = d, this.top = c[c.length - 1], this.percents = c
  }

  function s(a, d, e, f, g, h) {
    e = _(e);
    var i, j, k, l, m, n, p = a.ms,
      r = {},
      s = {},
      t = {};
    if (f)
      for (v = 0, x = ic.length; x > v; v++) {
        var u = ic[v];
        if (u.el.id == d.id && u.anim == a) {
          u.percent != e ? (ic.splice(v, 1), k = 1) : j = u, d.attr(u.totalOrigin);
          break
        }
      } else f = +s;
    for (var v = 0, x = a.percents.length; x > v; v++) {
      if (a.percents[v] == e || a.percents[v] > f * a.top) {
        e = a.percents[v], m = a.percents[v - 1] || 0, p = p / a.top * (e - m), l = a.percents[v + 1], i = a.anim[e];
        break
      }
      f && d.attr(a.anim[a.percents[v]])
    }
    if (i) {
      if (j) j.initstatus = f, j.start = new Date - j.ms * f;
      else {
        for (var y in i)
          if (i[z](y) && (db[z](y) || d.paper.customAttributes[z](y))) switch (r[y] = d.attr(y), null == r[y] && (r[y] = cb[y]), s[y] = i[y], db[y]) {
            case T:
              t[y] = (s[y] - r[y]) / p;
              break;
            case "colour":
              r[y] = c.getRGB(r[y]);
              var A = c.getRGB(s[y]);
              t[y] = {
                r: (A.r - r[y].r) / p,
                g: (A.g - r[y].g) / p,
                b: (A.b - r[y].b) / p
              };
              break;
            case "path":
              var B = Kb(r[y], s[y]),
                C = B[1];
              for (r[y] = B[0], t[y] = [], v = 0, x = r[y].length; x > v; v++) {
                t[y][v] = [0];
                for (var D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (C[v][D] - r[y][v][D]) / p
              }
              break;
            case "transform":
              var G = d._,
                H = Pb(G[y], s[y]);
              if (H)
                for (r[y] = H.from, s[y] = H.to, t[y] = [], t[y].real = !0, v = 0, x = r[y].length; x > v; v++)
                  for (t[y][v] = [r[y][v][0]], D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (s[y][v][D] - r[y][v][D]) / p;
              else {
                var K = d.matrix || new o,
                  L = {
                    _: {
                      transform: G.transform
                    },
                    getBBox: function() {
                      return d.getBBox(1)
                    }
                  };
                r[y] = [K.a, K.b, K.c, K.d, K.e, K.f], Nb(L, s[y]), s[y] = L._.transform, t[y] = [(L.matrix.a - K.a) / p, (L.matrix.b - K.b) / p, (L.matrix.c - K.c) / p, (L.matrix.d - K.d) / p, (L.matrix.e - K.e) / p, (L.matrix.f - K.f) / p]
              }
              break;
            case "csv":
              var M = I(i[y])[J](w),
                N = I(r[y])[J](w);
              if ("clip-rect" == y)
                for (r[y] = N, t[y] = [], v = N.length; v--;) t[y][v] = (M[v] - r[y][v]) / p;
              s[y] = M;
              break;
            default:
              for (M = [][E](i[y]), N = [][E](r[y]), t[y] = [], v = d.paper.customAttributes[y].length; v--;) t[y][v] = ((M[v] || 0) - (N[v] || 0)) / p
          }
        var O = i.easing,
          P = c.easing_formulas[O];
        if (!P)
          if (P = I(O).match(Z), P && 5 == P.length) {
            var Q = P;
            P = function(a) {
              return q(a, +Q[1], +Q[2], +Q[3], +Q[4], p)
            }
          } else P = nb;
        if (n = i.start || a.start || +new Date, u = {
            anim: a,
            percent: e,
            timestamp: n,
            start: n + (a.del || 0),
            status: 0,
            initstatus: f || 0,
            stop: !1,
            ms: p,
            easing: P,
            from: r,
            diff: t,
            to: s,
            el: d,
            callback: i.callback,
            prev: m,
            next: l,
            repeat: h || a.times,
            origin: d.attr(),
            totalOrigin: g
          }, ic.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - p * f, 1 == ic.length)) return kc();
        k && (u.start = new Date - u.ms * f), 1 == ic.length && jc(kc)
      }
      b("raphael.anim.start." + d.id, d, a)
    }
  }

  function t(a) {
    for (var b = 0; b < ic.length; b++) ic[b].el.paper == a && ic.splice(b--, 1)
  }
  c.version = "2.1.0", c.eve = b;
  var u, v, w = /[, ]+/,
    x = {
      circle: 1,
      rect: 1,
      path: 1,
      ellipse: 1,
      text: 1,
      image: 1
    },
    y = /\{(\d+)\}/g,
    z = "hasOwnProperty",
    A = {
      doc: document,
      win: a
    },
    B = {
      was: Object.prototype[z].call(A.win, "Raphael"),
      is: A.win.Raphael
    },
    C = function() {
      this.ca = this.customAttributes = {}
    },
    D = "apply",
    E = "concat",
    F = "ontouchstart" in A.win || A.win.DocumentTouch && A.doc instanceof DocumentTouch,
    G = "",
    H = " ",
    I = String,
    J = "split",
    K = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [J](H),
    L = {
      mousedown: "touchstart",
      mousemove: "touchmove",
      mouseup: "touchend"
    },
    M = I.prototype.toLowerCase,
    N = Math,
    O = N.max,
    P = N.min,
    Q = N.abs,
    R = N.pow,
    S = N.PI,
    T = "number",
    U = "string",
    V = "array",
    W = Object.prototype.toString,
    X = (c._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
    Y = {
      NaN: 1,
      Infinity: 1,
      "-Infinity": 1
    },
    Z = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    $ = N.round,
    _ = parseFloat,
    ab = parseInt,
    bb = I.prototype.toUpperCase,
    cb = c._availableAttrs = {
      "arrow-end": "none",
      "arrow-start": "none",
      blur: 0,
      "clip-rect": "0 0 1e9 1e9",
      cursor: "default",
      cx: 0,
      cy: 0,
      fill: "#fff",
      "fill-opacity": 1,
      font: '10px "Arial"',
      "font-family": '"Arial"',
      "font-size": "10",
      "font-style": "normal",
      "font-weight": 400,
      gradient: 0,
      height: 0,
      href: "http://raphaeljs.com/",
      "letter-spacing": 0,
      opacity: 1,
      path: "M0,0",
      r: 0,
      rx: 0,
      ry: 0,
      src: "",
      stroke: "#000",
      "stroke-dasharray": "",
      "stroke-linecap": "butt",
      "stroke-linejoin": "butt",
      "stroke-miterlimit": 0,
      "stroke-opacity": 1,
      "stroke-width": 1,
      target: "_blank",
      "text-anchor": "middle",
      title: "Raphael",
      transform: "",
      width: 0,
      x: 0,
      y: 0
    },
    db = c._availableAnimAttrs = {
      blur: T,
      "clip-rect": "csv",
      cx: T,
      cy: T,
      fill: "colour",
      "fill-opacity": T,
      "font-size": T,
      height: T,
      opacity: T,
      path: "path",
      r: T,
      rx: T,
      ry: T,
      stroke: "colour",
      "stroke-opacity": T,
      "stroke-width": T,
      transform: "transform",
      width: T,
      x: T,
      y: T
    },
    eb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
    fb = {
      hs: 1,
      rg: 1
    },
    gb = /,?([achlmqrstvxz]),?/gi,
    hb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
    ib = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
    jb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
    kb = (c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
    lb = function(a, b) {
      return _(a) - _(b)
    },
    mb = function() {},
    nb = function(a) {
      return a
    },
    ob = c._rectPath = function(a, b, c, d, e) {
      return e ? [
        ["M", a + e, b],
        ["l", c - 2 * e, 0],
        ["a", e, e, 0, 0, 1, e, e],
        ["l", 0, d - 2 * e],
        ["a", e, e, 0, 0, 1, -e, e],
        ["l", 2 * e - c, 0],
        ["a", e, e, 0, 0, 1, -e, -e],
        ["l", 0, 2 * e - d],
        ["a", e, e, 0, 0, 1, e, -e],
        ["z"]
      ] : [
        ["M", a, b],
        ["l", c, 0],
        ["l", 0, d],
        ["l", -c, 0],
        ["z"]
      ]
    },
    pb = function(a, b, c, d) {
      return null == d && (d = c), [
        ["M", a, b],
        ["m", 0, -d],
        ["a", c, d, 0, 1, 1, 0, 2 * d],
        ["a", c, d, 0, 1, 1, 0, -2 * d],
        ["z"]
      ]
    },
    qb = c._getPath = {
      path: function(a) {
        return a.attr("path")
      },
      circle: function(a) {
        var b = a.attrs;
        return pb(b.cx, b.cy, b.r)
      },
      ellipse: function(a) {
        var b = a.attrs;
        return pb(b.cx, b.cy, b.rx, b.ry)
      },
      rect: function(a) {
        var b = a.attrs;
        return ob(b.x, b.y, b.width, b.height, b.r)
      },
      image: function(a) {
        var b = a.attrs;
        return ob(b.x, b.y, b.width, b.height)
      },
      text: function(a) {
        var b = a._getBBox();
        return ob(b.x, b.y, b.width, b.height)
      },
      set: function(a) {
        var b = a._getBBox();
        return ob(b.x, b.y, b.width, b.height)
      }
    },
    rb = c.mapPath = function(a, b) {
      if (!b) return a;
      var c, d, e, f, g, h, i;
      for (a = Kb(a), e = 0, g = a.length; g > e; e++)
        for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
      return a
    };
  if (c._g = A, c.type = A.win.SVGAngle || A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == c.type) {
    var sb, tb = A.doc.createElement("div");
    if (tb.innerHTML = '<v:shape adj="1"/>', sb = tb.firstChild, sb.style.behavior = "url(#default#VML)", !sb || "object" != typeof sb.adj) return c.type = G;
    tb = null
  }
  c.svg = !(c.vml = "VML" == c.type), c._Paper = C, c.fn = v = C.prototype = c.prototype, c._id = 0, c._oid = 0, c.is = function(a, b) {
    return b = M.call(b), "finite" == b ? !Y[z](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || W.call(a).slice(8, -1).toLowerCase() == b
  }, c.angle = function(a, b, d, e, f, g) {
    if (null == f) {
      var h = a - d,
        i = b - e;
      return h || i ? (180 + 180 * N.atan2(-i, -h) / S + 360) % 360 : 0
    }
    return c.angle(a, b, f, g) - c.angle(d, e, f, g)
  }, c.rad = function(a) {
    return a % 360 * S / 180
  }, c.deg = function(a) {
    return 180 * a / S % 360
  }, c.snapTo = function(a, b, d) {
    if (d = c.is(d, "finite") ? d : 10, c.is(a, V)) {
      for (var e = a.length; e--;)
        if (Q(a[e] - b) <= d) return a[e]
    } else {
      a = +a;
      var f = b % a;
      if (d > f) return b - f;
      if (f > a - d) return b - f + a
    }
    return b
  }, c.createUUID = function(a, b) {
    return function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
    }
  }(/[xy]/g, function(a) {
    var b = 0 | 16 * N.random(),
      c = "x" == a ? b : 8 | 3 & b;
    return c.toString(16)
  }), c.setWindow = function(a) {
    b("raphael.setWindow", c, A.win, a), A.win = a, A.doc = A.win.document, c._engine.initWin && c._engine.initWin(A.win)
  };
  var ub = function(a) {
      if (c.vml) {
        var b, d = /^\s+|\s+$/g;
        try {
          var e = new ActiveXObject("htmlfile");
          e.write("<body>"), e.close(), b = e.body
        } catch (g) {
          b = createPopup().document.body
        }
        var h = b.createTextRange();
        ub = f(function(a) {
          try {
            b.style.color = I(a).replace(d, G);
            var c = h.queryCommandValue("ForeColor");
            return c = (255 & c) << 16 | 65280 & c | (16711680 & c) >>> 16, "#" + ("000000" + c.toString(16)).slice(-6)
          } catch (e) {
            return "none"
          }
        })
      } else {
        var i = A.doc.createElement("i");
        i.title = "Raphaël Colour Picker", i.style.display = "none", A.doc.body.appendChild(i), ub = f(function(a) {
          return i.style.color = a, A.doc.defaultView.getComputedStyle(i, G).getPropertyValue("color")
        })
      }
      return ub(a)
    },
    vb = function() {
      return "hsb(" + [this.h, this.s, this.b] + ")"
    },
    wb = function() {
      return "hsl(" + [this.h, this.s, this.l] + ")"
    },
    xb = function() {
      return this.hex
    },
    yb = function(a, b, d) {
      if (null == b && c.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && c.is(a, U)) {
        var e = c.getRGB(a);
        a = e.r, b = e.g, d = e.b
      }
      return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
    },
    zb = function(a, b, d, e) {
      a *= 255, b *= 255, d *= 255;
      var f = {
        r: a,
        g: b,
        b: d,
        hex: c.rgb(a, b, d),
        toString: xb
      };
      return c.is(e, "finite") && (f.opacity = e), f
    };
  c.color = function(a) {
    var b;
    return c.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : c.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (c.is(a, "string") && (a = c.getRGB(a)), c.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
      hex: "none"
    }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = xb, a
  }, c.hsb2rgb = function(a, b, c, d) {
    this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
    var e, f, g, h, i;
    return a = a % 360 / 60, i = c * b, h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
  }, c.hsl2rgb = function(a, b, c, d) {
    this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
    var e, f, g, h, i;
    return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
  }, c.rgb2hsb = function(a, b, c) {
    c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
    var d, e, f, g;
    return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
      h: d,
      s: e,
      b: f,
      toString: vb
    }
  }, c.rgb2hsl = function(a, b, c) {
    c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
    var d, e, f, g, h, i;
    return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
      h: d,
      s: e,
      l: f,
      toString: wb
    }
  }, c._path2string = function() {
    return this.join(",").replace(gb, "$1")
  }, c._preload = function(a, b) {
    var c = A.doc.createElement("img");
    c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
      b.call(this), this.onload = null, A.doc.body.removeChild(this)
    }, c.onerror = function() {
      A.doc.body.removeChild(this)
    }, A.doc.body.appendChild(c), c.src = a
  }, c.getRGB = f(function(a) {
    if (!a || (a = I(a)).indexOf("-") + 1) return {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      error: 1,
      toString: g
    };
    if ("none" == a) return {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      toString: g
    };
    !(fb[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = ub(a));
    var b, d, e, f, h, i, j = a.match(X);
    return j ? (j[2] && (e = ab(j[2].substring(5), 16), d = ab(j[2].substring(3, 5), 16), b = ab(j[2].substring(1, 3), 16)), j[3] && (e = ab((h = j[3].charAt(3)) + h, 16), d = ab((h = j[3].charAt(2)) + h, 16), b = ab((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100)), j[5] ? (i = j[5][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsb2rgb(b, d, e, f)) : j[6] ? (i = j[6][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsl2rgb(b, d, e, f)) : (j = {
      r: b,
      g: d,
      b: e,
      toString: g
    }, j.hex = "#" + (16777216 | e | d << 8 | b << 16).toString(16).slice(1), c.is(f, "finite") && (j.opacity = f), j)) : {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      error: 1,
      toString: g
    }
  }, c), c.hsb = f(function(a, b, d) {
    return c.hsb2rgb(a, b, d).hex
  }), c.hsl = f(function(a, b, d) {
    return c.hsl2rgb(a, b, d).hex
  }), c.rgb = f(function(a, b, c) {
    return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
  }), c.getColor = function(a) {
    var b = this.getColor.start = this.getColor.start || {
        h: 0,
        s: 1,
        b: a || .75
      },
      c = this.hsb2rgb(b.h, b.s, b.b);
    return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
      h: 0,
      s: 1,
      b: b.b
    })), c.hex
  }, c.getColor.reset = function() {
    delete this.start
  }, c.parsePathString = function(a) {
    if (!a) return null;
    var b = Ab(a);
    if (b.arr) return Cb(b.arr);
    var d = {
        a: 7,
        c: 6,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        z: 0
      },
      e = [];
    return c.is(a, V) && c.is(a[0], V) && (e = Cb(a)), e.length || I(a).replace(hb, function(a, b, c) {
      var f = [],
        g = b.toLowerCase();
      if (c.replace(jb, function(a, b) {
          b && f.push(+b)
        }), "m" == g && f.length > 2 && (e.push([b][E](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g) e.push([b][E](f));
      else
        for (; f.length >= d[g] && (e.push([b][E](f.splice(0, d[g]))), d[g]););
    }), e.toString = c._path2string, b.arr = Cb(e), e
  }, c.parseTransformString = f(function(a) {
    if (!a) return null;
    var b = [];
    return c.is(a, V) && c.is(a[0], V) && (b = Cb(a)), b.length || I(a).replace(ib, function(a, c, d) {
      var e = [];
      M.call(c), d.replace(jb, function(a, b) {
        b && e.push(+b)
      }), b.push([c][E](e))
    }), b.toString = c._path2string, b
  });
  var Ab = function(a) {
    var b = Ab.ps = Ab.ps || {};
    return b[a] ? b[a].sleep = 100 : b[a] = {
      sleep: 100
    }, setTimeout(function() {
      for (var c in b) b[z](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
    }), b[a]
  };
  c.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
    var j = 1 - i,
      k = R(j, 3),
      l = R(j, 2),
      m = i * i,
      n = m * i,
      o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
      p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
      q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
      r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
      s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
      t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
      u = j * a + i * c,
      v = j * b + i * d,
      w = j * e + i * g,
      x = j * f + i * h,
      y = 90 - 180 * N.atan2(q - s, r - t) / S;
    return (q > s || t > r) && (y += 180), {
      x: o,
      y: p,
      m: {
        x: q,
        y: r
      },
      n: {
        x: s,
        y: t
      },
      start: {
        x: u,
        y: v
      },
      end: {
        x: w,
        y: x
      },
      alpha: y
    }
  }, c.bezierBBox = function(a, b, d, e, f, g, h, i) {
    c.is(a, "array") || (a = [a, b, d, e, f, g, h, i]);
    var j = Jb.apply(null, a);
    return {
      x: j.min.x,
      y: j.min.y,
      x2: j.max.x,
      y2: j.max.y,
      width: j.max.x - j.min.x,
      height: j.max.y - j.min.y
    }
  }, c.isPointInsideBBox = function(a, b, c) {
    return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
  }, c.isBBoxIntersect = function(a, b) {
    var d = c.isPointInsideBBox;
    return d(b, a.x, a.y) || d(b, a.x2, a.y) || d(b, a.x, a.y2) || d(b, a.x2, a.y2) || d(a, b.x, b.y) || d(a, b.x2, b.y) || d(a, b.x, b.y2) || d(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
  }, c.pathIntersection = function(a, b) {
    return n(a, b)
  }, c.pathIntersectionNumber = function(a, b) {
    return n(a, b, 1)
  }, c.isPointInsidePath = function(a, b, d) {
    var e = c.pathBBox(a);
    return c.isPointInsideBBox(e, b, d) && 1 == n(a, [
      ["M", b, d],
      ["H", e.x2 + 10]
    ], 1) % 2
  }, c._removedFactory = function(a) {
    return function() {
      b("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
    }
  };
  var Bb = c.pathBBox = function(a) {
      var b = Ab(a);
      if (b.bbox) return d(b.bbox);
      if (!a) return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        x2: 0,
        y2: 0
      };
      a = Kb(a);
      for (var c, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++)
        if (c = a[i], "M" == c[0]) e = c[1], f = c[2], g.push(e), h.push(f);
        else {
          var k = Jb(e, f, c[1], c[2], c[3], c[4], c[5], c[6]);
          g = g[E](k.min.x, k.max.x), h = h[E](k.min.y, k.max.y), e = c[5], f = c[6]
        } var l = P[D](0, g),
        m = P[D](0, h),
        n = O[D](0, g),
        o = O[D](0, h),
        p = n - l,
        q = o - m,
        r = {
          x: l,
          y: m,
          x2: n,
          y2: o,
          width: p,
          height: q,
          cx: l + p / 2,
          cy: m + q / 2
        };
      return b.bbox = d(r), r
    },
    Cb = function(a) {
      var b = d(a);
      return b.toString = c._path2string, b
    },
    Db = c._pathToRelative = function(a) {
      var b = Ab(a);
      if (b.rel) return Cb(b.rel);
      c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a));
      var d = [],
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0;
      "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f]));
      for (var j = i, k = a.length; k > j; j++) {
        var l = d[j] = [],
          m = a[j];
        if (m[0] != M.call(m[0])) switch (l[0] = M.call(m[0]), l[0]) {
          case "a":
            l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
            break;
          case "v":
            l[1] = +(m[1] - f).toFixed(3);
            break;
          case "m":
            g = m[1], h = m[2];
          default:
            for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
        } else {
          l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f);
          for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p]
        }
        var r = d[j].length;
        switch (d[j][0]) {
          case "z":
            e = g, f = h;
            break;
          case "h":
            e += +d[j][r - 1];
            break;
          case "v":
            f += +d[j][r - 1];
            break;
          default:
            e += +d[j][r - 2], f += +d[j][r - 1]
        }
      }
      return d.toString = c._path2string, b.rel = Cb(d), d
    },
    Eb = c._pathToAbsolute = function(a) {
      var b = Ab(a);
      if (b.abs) return Cb(b.abs);
      if (c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a)), !a || !a.length) return [
        ["M", 0, 0]
      ];
      var d = [],
        e = 0,
        f = 0,
        g = 0,
        i = 0,
        j = 0;
      "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], g = e, i = f, j++, d[0] = ["M", e, f]);
      for (var k, l, m = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n = j, o = a.length; o > n; n++) {
        if (d.push(k = []), l = a[n], l[0] != bb.call(l[0])) switch (k[0] = bb.call(l[0]), k[0]) {
            case "A":
              k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
              break;
            case "V":
              k[1] = +l[1] + f;
              break;
            case "H":
              k[1] = +l[1] + e;
              break;
            case "R":
              for (var p = [e, f][E](l.slice(1)), q = 2, r = p.length; r > q; q++) p[q] = +p[q] + e, p[++q] = +p[q] + f;
              d.pop(), d = d[E](h(p, m));
              break;
            case "M":
              g = +l[1] + e, i = +l[2] + f;
            default:
              for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e : f)
          } else if ("R" == l[0]) p = [e, f][E](l.slice(1)), d.pop(), d = d[E](h(p, m)), k = ["R"][E](l.slice(-2));
          else
            for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
        switch (k[0]) {
          case "Z":
            e = g, f = i;
            break;
          case "H":
            e = k[1];
            break;
          case "V":
            f = k[1];
            break;
          case "M":
            g = k[k.length - 2], i = k[k.length - 1];
          default:
            e = k[k.length - 2], f = k[k.length - 1]
        }
      }
      return d.toString = c._path2string, b.abs = Cb(d), d
    },
    Fb = function(a, b, c, d) {
      return [a, b, c, d, c, d]
    },
    Gb = function(a, b, c, d, e, f) {
      var g = 1 / 3,
        h = 2 / 3;
      return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    },
    Hb = function(a, b, c, d, e, g, h, i, j, k) {
      var l, m = 120 * S / 180,
        n = S / 180 * (+e || 0),
        o = [],
        p = f(function(a, b, c) {
          var d = a * N.cos(c) - b * N.sin(c),
            e = a * N.sin(c) + b * N.cos(c);
          return {
            x: d,
            y: e
          }
        });
      if (k) y = k[0], z = k[1], w = k[2], x = k[3];
      else {
        l = p(a, b, -n), a = l.x, b = l.y, l = p(i, j, -n), i = l.x, j = l.y;
        var q = (N.cos(S / 180 * e), N.sin(S / 180 * e), (a - i) / 2),
          r = (b - j) / 2,
          s = q * q / (c * c) + r * r / (d * d);
        s > 1 && (s = N.sqrt(s), c = s * c, d = s * d);
        var t = c * c,
          u = d * d,
          v = (g == h ? -1 : 1) * N.sqrt(Q((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
          w = v * c * r / d + (a + i) / 2,
          x = v * -d * q / c + (b + j) / 2,
          y = N.asin(((b - x) / d).toFixed(9)),
          z = N.asin(((j - x) / d).toFixed(9));
        y = w > a ? S - y : y, z = w > i ? S - z : z, 0 > y && (y = 2 * S + y), 0 > z && (z = 2 * S + z), h && y > z && (y -= 2 * S), !h && z > y && (z -= 2 * S)
      }
      var A = z - y;
      if (Q(A) > m) {
        var B = z,
          C = i,
          D = j;
        z = y + m * (h && z > y ? 1 : -1), i = w + c * N.cos(z), j = x + d * N.sin(z), o = Hb(i, j, c, d, e, 0, h, C, D, [z, B, w, x])
      }
      A = z - y;
      var F = N.cos(y),
        G = N.sin(y),
        H = N.cos(z),
        I = N.sin(z),
        K = N.tan(A / 4),
        L = 4 / 3 * c * K,
        M = 4 / 3 * d * K,
        O = [a, b],
        P = [a + L * G, b - M * F],
        R = [i + L * I, j - M * H],
        T = [i, j];
      if (P[0] = 2 * O[0] - P[0], P[1] = 2 * O[1] - P[1], k) return [P, R, T][E](o);
      o = [P, R, T][E](o).join()[J](",");
      for (var U = [], V = 0, W = o.length; W > V; V++) U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x;
      return U
    },
    Ib = function(a, b, c, d, e, f, g, h, i) {
      var j = 1 - i;
      return {
        x: R(j, 3) * a + 3 * R(j, 2) * i * c + 3 * j * i * i * e + R(i, 3) * g,
        y: R(j, 3) * b + 3 * R(j, 2) * i * d + 3 * j * i * i * f + R(i, 3) * h
      }
    },
    Jb = f(function(a, b, c, d, e, f, g, h) {
      var i, j = e - 2 * c + a - (g - 2 * e + c),
        k = 2 * (c - a) - 2 * (e - c),
        l = a - c,
        m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j,
        n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j,
        o = [b, h],
        p = [a, g];
      return Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j, Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
        min: {
          x: P[D](0, p),
          y: P[D](0, o)
        },
        max: {
          x: O[D](0, p),
          y: O[D](0, o)
        }
      }
    }),
    Kb = c._path2curve = f(function(a, b) {
      var c = !b && Ab(a);
      if (!b && c.curve) return Cb(c.curve);
      for (var d = Eb(a), e = b && Eb(b), f = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, g = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, h = (function(a, b) {
          var c, d;
          if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
          switch (!(a[0] in {
            T: 1,
            Q: 1
          }) && (b.qx = b.qy = null), a[0]) {
            case "M":
              b.X = a[1], b.Y = a[2];
              break;
            case "A":
              a = ["C"][E](Hb[D](0, [b.x, b.y][E](a.slice(1))));
              break;
            case "S":
              "C" == pcom || "S" == pcom ? (c = 2 * b.x - b.bx, d = 2 * b.y - b.by) : (c = b.x, d = b.y), a = ["C", c, d][E](a.slice(1));
              break;
            case "T":
              "Q" == pcom || "T" == pcom ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"][E](Gb(b.x, b.y, b.qx, b.qy, a[1], a[2]));
              break;
            case "Q":
              b.qx = a[1], b.qy = a[2], a = ["C"][E](Gb(b.x, b.y, a[1], a[2], a[3], a[4]));
              break;
            case "L":
              a = ["C"][E](Fb(b.x, b.y, a[1], a[2]));
              break;
            case "H":
              a = ["C"][E](Fb(b.x, b.y, a[1], b.y));
              break;
            case "V":
              a = ["C"][E](Fb(b.x, b.y, b.x, a[1]));
              break;
            case "Z":
              a = ["C"][E](Fb(b.x, b.y, b.X, b.Y))
          }
          return a
        }), i = function(a, b) {
          if (a[b].length > 7) {
            a[b].shift();
            for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"][E](c.splice(0, 6)));
            a.splice(b, 1), l = O(d.length, e && e.length || 0)
          }
        }, j = function(a, b, c, f, g) {
          a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = O(d.length, e && e.length || 0))
        }, k = 0, l = O(d.length, e && e.length || 0); l > k; k++) {
        d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
        var m = d[k],
          n = e && e[k],
          o = m.length,
          p = e && n.length;
        f.x = m[o - 2], f.y = m[o - 1], f.bx = _(m[o - 4]) || f.x, f.by = _(m[o - 3]) || f.y, g.bx = e && (_(n[p - 4]) || g.x), g.by = e && (_(n[p - 3]) || g.y), g.x = e && n[p - 2], g.y = e && n[p - 1]
      }
      return e || (c.curve = Cb(d)), e ? [d, e] : d
    }, null, Cb),
    Lb = (c._parseDots = f(function(a) {
      for (var b = [], d = 0, e = a.length; e > d; d++) {
        var f = {},
          g = a[d].match(/^([^:]*):?([\d\.]*)/);
        if (f.color = c.getRGB(g[1]), f.color.error) return null;
        f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), b.push(f)
      }
      for (d = 1, e = b.length - 1; e > d; d++)
        if (!b[d].offset) {
          for (var h = _(b[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++)
            if (b[j].offset) {
              i = b[j].offset;
              break
            } i || (i = 100, j = e), i = _(i);
          for (var k = (i - h) / (j - d + 1); j > d; d++) h += k, b[d].offset = h + "%"
        } return b
    }), c._tear = function(a, b) {
      a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
    }),
    Mb = (c._tofront = function(a, b) {
      b.top !== a && (Lb(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
    }, c._toback = function(a, b) {
      b.bottom !== a && (Lb(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
    }, c._insertafter = function(a, b, c) {
      Lb(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
    }, c._insertbefore = function(a, b, c) {
      Lb(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
    }, c.toMatrix = function(a, b) {
      var c = Bb(a),
        d = {
          _: {
            transform: G
          },
          getBBox: function() {
            return c
          }
        };
      return Nb(d, b), d.matrix
    }),
    Nb = (c.transformPath = function(a, b) {
      return rb(a, Mb(a, b))
    }, c._extractTransform = function(a, b) {
      if (null == b) return a._.transform;
      b = I(b).replace(/\.{3}|\u2026/g, a._.transform || G);
      var d = c.parseTransformString(b),
        e = 0,
        f = 0,
        g = 0,
        h = 1,
        i = 1,
        j = a._,
        k = new o;
      if (j.transform = d || [], d)
        for (var l = 0, m = d.length; m > l; l++) {
          var n, p, q, r, s, t = d[l],
            u = t.length,
            v = I(t[0]).toLowerCase(),
            w = t[0] != v,
            x = w ? k.invert() : 0;
          "t" == v && 3 == u ? w ? (n = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - n, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k
        }
      a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
    }),
    Ob = function(a) {
      var b = a[0];
      switch (b.toLowerCase()) {
        case "t":
          return [b, 0, 0];
        case "m":
          return [b, 1, 0, 0, 1, 0, 0];
        case "r":
          return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
        case "s":
          return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
      }
    },
    Pb = c._equaliseTransform = function(a, b) {
      b = I(b).replace(/\.{3}|\u2026/g, a), a = c.parseTransformString(a) || [], b = c.parseTransformString(b) || [];
      for (var d, e, f, g, h = O(a.length, b.length), i = [], j = [], k = 0; h > k; k++) {
        if (f = a[k] || Ob(b[k]), g = b[k] || Ob(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])) return;
        for (i[k] = [], j[k] = [], d = 0, e = O(f.length, g.length); e > d; d++) d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d])
      }
      return {
        from: i,
        to: j
      }
    };
  c._getContainer = function(a, b, d, e) {
      var f;
      return f = null != e || c.is(a, "object") ? a : A.doc.getElementById(a), null != f ? f.tagName ? null == b ? {
        container: f,
        width: f.style.pixelWidth || f.offsetWidth,
        height: f.style.pixelHeight || f.offsetHeight
      } : {
        container: f,
        width: b,
        height: d
      } : {
        container: 1,
        x: a,
        y: b,
        width: d,
        height: e
      } : void 0
    }, c.pathToRelative = Db, c._engine = {}, c.path2curve = Kb, c.matrix = function(a, b, c, d, e, f) {
      return new o(a, b, c, d, e, f)
    },
    function(a) {
      function b(a) {
        return a[0] * a[0] + a[1] * a[1]
      }

      function d(a) {
        var c = N.sqrt(b(a));
        a[0] && (a[0] /= c), a[1] && (a[1] /= c)
      }
      a.add = function(a, b, c, d, e, f) {
        var g, h, i, j, k = [
            [],
            [],
            []
          ],
          l = [
            [this.a, this.c, this.e],
            [this.b, this.d, this.f],
            [0, 0, 1]
          ],
          m = [
            [a, c, e],
            [b, d, f],
            [0, 0, 1]
          ];
        for (a && a instanceof o && (m = [
            [a.a, a.c, a.e],
            [a.b, a.d, a.f],
            [0, 0, 1]
          ]), g = 0; 3 > g; g++)
          for (h = 0; 3 > h; h++) {
            for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
            k[g][h] = j
          }
        this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2]
      }, a.invert = function() {
        var a = this,
          b = a.a * a.d - a.b * a.c;
        return new o(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
      }, a.clone = function() {
        return new o(this.a, this.b, this.c, this.d, this.e, this.f)
      }, a.translate = function(a, b) {
        this.add(1, 0, 0, 1, a, b)
      }, a.scale = function(a, b, c, d) {
        null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
      }, a.rotate = function(a, b, d) {
        a = c.rad(a), b = b || 0, d = d || 0;
        var e = +N.cos(a).toFixed(9),
          f = +N.sin(a).toFixed(9);
        this.add(e, f, -f, e, b, d), this.add(1, 0, 0, 1, -b, -d)
      }, a.x = function(a, b) {
        return a * this.a + b * this.c + this.e
      }, a.y = function(a, b) {
        return a * this.b + b * this.d + this.f
      }, a.get = function(a) {
        return +this[I.fromCharCode(97 + a)].toFixed(4)
      }, a.toString = function() {
        return c.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
      }, a.toFilter = function() {
        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
      }, a.offset = function() {
        return [this.e.toFixed(4), this.f.toFixed(4)]
      }, a.split = function() {
        var a = {};
        a.dx = this.e, a.dy = this.f;
        var e = [
          [this.a, this.c],
          [this.b, this.d]
        ];
        a.scalex = N.sqrt(b(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = N.sqrt(b(e[1])), d(e[1]), a.shear /= a.scaley;
        var f = -e[0][1],
          g = e[1][1];
        return 0 > g ? (a.rotate = c.deg(N.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = c.deg(N.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
      }, a.toTransformString = function(a) {
        var b = a || this[J]();
        return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : G) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : G) + (b.rotate ? "r" + [b.rotate, 0, 0] : G)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
      }
    }(o.prototype);
  var Qb = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
  v.safari = "Apple Computer, Inc." == navigator.vendor && (Qb && Qb[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Qb && Qb[1] < 8 ? function() {
    var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
      stroke: "none"
    });
    setTimeout(function() {
      a.remove()
    })
  } : mb;
  for (var Rb = function() {
      this.returnValue = !1
    }, Sb = function() {
      return this.originalEvent.preventDefault()
    }, Tb = function() {
      this.cancelBubble = !0
    }, Ub = function() {
      return this.originalEvent.stopPropagation()
    }, Vb = function(a) {
      var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
        c = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
      return {
        x: a.clientX + c,
        y: a.clientY + b
      }
    }, Wb = function() {
      return A.doc.addEventListener ? function(a, b, c, d) {
        var e = function(a) {
          var b = Vb(a);
          return c.call(d, a, b.x, b.y)
        };
        if (a.addEventListener(b, e, !1), F && L[b]) {
          var f = function(b) {
            for (var e = Vb(b), f = b, g = 0, h = b.targetTouches && b.targetTouches.length; h > g; g++)
              if (b.targetTouches[g].target == a) {
                b = b.targetTouches[g], b.originalEvent = f, b.preventDefault = Sb, b.stopPropagation = Ub;
                break
              } return c.call(d, b, e.x, e.y)
          };
          a.addEventListener(L[b], f, !1)
        }
        return function() {
          return a.removeEventListener(b, e, !1), F && L[b] && a.removeEventListener(L[b], e, !1), !0
        }
      } : A.doc.attachEvent ? function(a, b, c, d) {
        var e = function(a) {
          a = a || A.win.event;
          var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
            e = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
            f = a.clientX + e,
            g = a.clientY + b;
          return a.preventDefault = a.preventDefault || Rb, a.stopPropagation = a.stopPropagation || Tb, c.call(d, a, f, g)
        };
        a.attachEvent("on" + b, e);
        var f = function() {
          return a.detachEvent("on" + b, e), !0
        };
        return f
      } : void 0
    }(), Xb = [], Yb = function(a) {
      for (var c, d = a.clientX, e = a.clientY, f = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, g = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft, h = Xb.length; h--;) {
        if (c = Xb[h], F && a.touches) {
          for (var i, j = a.touches.length; j--;)
            if (i = a.touches[j], i.identifier == c.el._drag.id) {
              d = i.clientX, e = i.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
              break
            }
        } else a.preventDefault();
        var k, l = c.el.node,
          m = l.nextSibling,
          n = l.parentNode,
          o = l.style.display;
        A.win.opera && n.removeChild(l), l.style.display = "none", k = c.el.paper.getElementByPoint(d, e), l.style.display = o, A.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)), k && b("raphael.drag.over." + c.el.id, c.el, k), d += g, e += f, b("raphael.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
      }
    }, Zb = function(a) {
      c.unmousemove(Yb).unmouseup(Zb);
      for (var d, e = Xb.length; e--;) d = Xb[e], d.el._drag = {}, b("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, a);
      Xb = []
    }, $b = c.el = {}, _b = K.length; _b--;) ! function(a) {
    c[a] = $b[a] = function(b, d) {
      return c.is(b, "function") && (this.events = this.events || [], this.events.push({
        name: a,
        f: b,
        unbind: Wb(this.shape || this.node || A.doc, a, b, d || this)
      })), this
    }, c["un" + a] = $b["un" + a] = function(b) {
      for (var d = this.events || [], e = d.length; e--;) d[e].name != a || !c.is(b, "undefined") && d[e].f != b || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events);
      return this
    }
  }(K[_b]);
  $b.data = function(a, d) {
    var e = kb[this.id] = kb[this.id] || {};
    if (0 == arguments.length) return e;
    if (1 == arguments.length) {
      if (c.is(a, "object")) {
        for (var f in a) a[z](f) && this.data(f, a[f]);
        return this
      }
      return b("raphael.data.get." + this.id, this, e[a], a), e[a]
    }
    return e[a] = d, b("raphael.data.set." + this.id, this, d, a), this
  }, $b.removeData = function(a) {
    return null == a ? kb[this.id] = {} : kb[this.id] && delete kb[this.id][a], this
  }, $b.getData = function() {
    return d(kb[this.id] || {})
  }, $b.hover = function(a, b, c, d) {
    return this.mouseover(a, c).mouseout(b, d || c)
  }, $b.unhover = function(a, b) {
    return this.unmouseover(a).unmouseout(b)
  };
  var ac = [];
  $b.drag = function(a, d, e, f, g, h) {
    function i(i) {
      (i.originalEvent || i).preventDefault();
      var j = i.clientX,
        k = i.clientY,
        l = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
        m = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
      if (this._drag.id = i.identifier, F && i.touches)
        for (var n, o = i.touches.length; o--;)
          if (n = i.touches[o], this._drag.id = n.identifier, n.identifier == this._drag.id) {
            j = n.clientX, k = n.clientY;
            break
          } this._drag.x = j + m, this._drag.y = k + l, !Xb.length && c.mousemove(Yb).mouseup(Zb), Xb.push({
        el: this,
        move_scope: f,
        start_scope: g,
        end_scope: h
      }), d && b.on("raphael.drag.start." + this.id, d), a && b.on("raphael.drag.move." + this.id, a), e && b.on("raphael.drag.end." + this.id, e), b("raphael.drag.start." + this.id, g || f || this, i.clientX + m, i.clientY + l, i)
    }
    return this._drag = {}, ac.push({
      el: this,
      start: i
    }), this.mousedown(i), this
  }, $b.onDragOver = function(a) {
    a ? b.on("raphael.drag.over." + this.id, a) : b.unbind("raphael.drag.over." + this.id)
  }, $b.undrag = function() {
    for (var a = ac.length; a--;) ac[a].el == this && (this.unmousedown(ac[a].start), ac.splice(a, 1), b.unbind("raphael.drag.*." + this.id));
    !ac.length && c.unmousemove(Yb).unmouseup(Zb), Xb = []
  }, v.circle = function(a, b, d) {
    var e = c._engine.circle(this, a || 0, b || 0, d || 0);
    return this.__set__ && this.__set__.push(e), e
  }, v.rect = function(a, b, d, e, f) {
    var g = c._engine.rect(this, a || 0, b || 0, d || 0, e || 0, f || 0);
    return this.__set__ && this.__set__.push(g), g
  }, v.ellipse = function(a, b, d, e) {
    var f = c._engine.ellipse(this, a || 0, b || 0, d || 0, e || 0);
    return this.__set__ && this.__set__.push(f), f
  }, v.path = function(a) {
    a && !c.is(a, U) && !c.is(a[0], V) && (a += G);
    var b = c._engine.path(c.format[D](c, arguments), this);
    return this.__set__ && this.__set__.push(b), b
  }, v.image = function(a, b, d, e, f) {
    var g = c._engine.image(this, a || "about:blank", b || 0, d || 0, e || 0, f || 0);
    return this.__set__ && this.__set__.push(g), g
  }, v.text = function(a, b, d) {
    var e = c._engine.text(this, a || 0, b || 0, I(d));
    return this.__set__ && this.__set__.push(e), e
  }, v.set = function(a) {
    !c.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
    var b = new mc(a);
    return this.__set__ && this.__set__.push(b), b.paper = this, b.type = "set", b
  }, v.setStart = function(a) {
    this.__set__ = a || this.set()
  }, v.setFinish = function() {
    var a = this.__set__;
    return delete this.__set__, a
  }, v.setSize = function(a, b) {
    return c._engine.setSize.call(this, a, b)
  }, v.setViewBox = function(a, b, d, e, f) {
    return c._engine.setViewBox.call(this, a, b, d, e, f)
  }, v.top = v.bottom = null, v.raphael = c;
  var bc = function(a) {
    var b = a.getBoundingClientRect(),
      c = a.ownerDocument,
      d = c.body,
      e = c.documentElement,
      f = e.clientTop || d.clientTop || 0,
      g = e.clientLeft || d.clientLeft || 0,
      h = b.top + (A.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
      i = b.left + (A.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
    return {
      y: h,
      x: i
    }
  };
  v.getElementByPoint = function(a, b) {
    var c = this,
      d = c.canvas,
      e = A.doc.elementFromPoint(a, b);
    if (A.win.opera && "svg" == e.tagName) {
      var f = bc(d),
        g = d.createSVGRect();
      g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
      var h = d.getIntersectionList(g, null);
      h.length && (e = h[h.length - 1])
    }
    if (!e) return null;
    for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode;
    return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null
  }, v.getElementsByBBox = function(a) {
    var b = this.set();
    return this.forEach(function(d) {
      c.isBBoxIntersect(d.getBBox(), a) && b.push(d)
    }), b
  }, v.getById = function(a) {
    for (var b = this.bottom; b;) {
      if (b.id == a) return b;
      b = b.next
    }
    return null
  }, v.forEach = function(a, b) {
    for (var c = this.bottom; c;) {
      if (a.call(b, c) === !1) return this;
      c = c.next
    }
    return this
  }, v.getElementsByPoint = function(a, b) {
    var c = this.set();
    return this.forEach(function(d) {
      d.isPointInside(a, b) && c.push(d)
    }), c
  }, $b.isPointInside = function(a, b) {
    var d = this.realPath = qb[this.type](this);
    return this.attr("transform") && this.attr("transform").length && (d = c.transformPath(d, this.attr("transform"))), c.isPointInsidePath(d, a, b)
  }, $b.getBBox = function(a) {
    if (this.removed) return {};
    var b = this._;
    return a ? ((b.dirty || !b.bboxwt) && (this.realPath = qb[this.type](this), b.bboxwt = Bb(this.realPath), b.bboxwt.toString = p, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = qb[this.type](this)), b.bbox = Bb(rb(this.realPath, this.matrix)), b.bbox.toString = p, b.dirty = b.dirtyT = 0), b.bbox)
  }, $b.clone = function() {
    if (this.removed) return null;
    var a = this.paper[this.type]().attr(this.attr());
    return this.__set__ && this.__set__.push(a), a
  }, $b.glow = function(a) {
    if ("text" == this.type) return null;
    a = a || {};
    var b = {
        width: (a.width || 10) + (+this.attr("stroke-width") || 1),
        fill: a.fill || !1,
        opacity: a.opacity || .5,
        offsetx: a.offsetx || 0,
        offsety: a.offsety || 0,
        color: a.color || "#000"
      },
      c = b.width / 2,
      d = this.paper,
      e = d.set(),
      f = this.realPath || qb[this.type](this);
    f = this.matrix ? rb(f, this.matrix) : f;
    for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({
      stroke: b.color,
      fill: b.fill ? b.color : "none",
      "stroke-linejoin": "round",
      "stroke-linecap": "round",
      "stroke-width": +(b.width / c * g).toFixed(3),
      opacity: +(b.opacity / c).toFixed(3)
    }));
    return e.insertBefore(this).translate(b.offsetx, b.offsety)
  };
  var cc = function(a, b, d, e, f, g, h, i, l) {
      return null == l ? j(a, b, d, e, f, g, h, i) : c.findDotsAtSegment(a, b, d, e, f, g, h, i, k(a, b, d, e, f, g, h, i, l))
    },
    dc = function(a, b) {
      return function(d, e, f) {
        d = Kb(d);
        for (var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length; p > o; o++) {
          if (i = d[o], "M" == i[0]) g = +i[1], h = +i[2];
          else {
            if (j = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
              if (b && !m.start) {
                if (k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f) return l;
                m.start = l, l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                continue
              }
              if (!a && !b) return k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), {
                x: k.x,
                y: k.y,
                alpha: k.alpha
              }
            }
            n += j, g = +i[5], h = +i[6]
          }
          l += i.shift() + i
        }
        return m.end = l, k = a ? n : b ? m : c.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), k.alpha && (k = {
          x: k.x,
          y: k.y,
          alpha: k.alpha
        }), k
      }
    },
    ec = dc(1),
    fc = dc(),
    gc = dc(0, 1);
  c.getTotalLength = ec, c.getPointAtLength = fc, c.getSubpath = function(a, b, c) {
    if (this.getTotalLength(a) - c < 1e-6) return gc(a, b).end;
    var d = gc(a, c, 1);
    return b ? gc(d, b).end : d
  }, $b.getTotalLength = function() {
    var a = this.getPath();
    if (a) return this.node.getTotalLength ? this.node.getTotalLength() : ec(a)
  }, $b.getPointAtLength = function(a) {
    var b = this.getPath();
    if (b) return fc(b, a)
  }, $b.getPath = function() {
    var a, b = c._getPath[this.type];
    if ("text" != this.type && "set" != this.type) return b && (a = b(this)), a
  }, $b.getSubpath = function(a, b) {
    var d = this.getPath();
    if (d) return c.getSubpath(d, a, b)
  };
  var hc = c.easing_formulas = {
    linear: function(a) {
      return a
    },
    "<": function(a) {
      return R(a, 1.7)
    },
    ">": function(a) {
      return R(a, .48)
    },
    "<>": function(a) {
      var b = .48 - a / 1.04,
        c = N.sqrt(.1734 + b * b),
        d = c - b,
        e = R(Q(d), 1 / 3) * (0 > d ? -1 : 1),
        f = -c - b,
        g = R(Q(f), 1 / 3) * (0 > f ? -1 : 1),
        h = e + g + .5;
      return 3 * (1 - h) * h * h + h * h * h
    },
    backIn: function(a) {
      var b = 1.70158;
      return a * a * ((b + 1) * a - b)
    },
    backOut: function(a) {
      a -= 1;
      var b = 1.70158;
      return a * a * ((b + 1) * a + b) + 1
    },
    elastic: function(a) {
      return a == !!a ? a : R(2, -10 * a) * N.sin((a - .075) * 2 * S / .3) + 1
    },
    bounce: function(a) {
      var b, c = 7.5625,
        d = 2.75;
      return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
    }
  };
  hc.easeIn = hc["ease-in"] = hc["<"], hc.easeOut = hc["ease-out"] = hc[">"], hc.easeInOut = hc["ease-in-out"] = hc["<>"], hc["back-in"] = hc.backIn, hc["back-out"] = hc.backOut;
  var ic = [],
    jc = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
      setTimeout(a, 16)
    },
    kc = function() {
      for (var a = +new Date, d = 0; d < ic.length; d++) {
        var e = ic[d];
        if (!e.el.removed && !e.paused) {
          var f, g, h = a - e.start,
            i = e.ms,
            j = e.easing,
            k = e.from,
            l = e.diff,
            m = e.to,
            n = (e.t, e.el),
            o = {},
            p = {};
          if (e.initstatus ? (h = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * i, e.status = e.initstatus, delete e.initstatus, e.stop && ic.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top, !(0 > h))
            if (i > h) {
              var q = j(h / i);
              for (var r in k)
                if (k[z](r)) {
                  switch (db[r]) {
                    case T:
                      f = +k[r] + q * i * l[r];
                      break;
                    case "colour":
                      f = "rgb(" + [lc($(k[r].r + q * i * l[r].r)), lc($(k[r].g + q * i * l[r].g)), lc($(k[r].b + q * i * l[r].b))].join(",") + ")";
                      break;
                    case "path":
                      f = [];
                      for (var t = 0, u = k[r].length; u > t; t++) {
                        f[t] = [k[r][t][0]];
                        for (var v = 1, w = k[r][t].length; w > v; v++) f[t][v] = +k[r][t][v] + q * i * l[r][t][v];
                        f[t] = f[t].join(H)
                      }
                      f = f.join(H);
                      break;
                    case "transform":
                      if (l[r].real)
                        for (f = [], t = 0, u = k[r].length; u > t; t++)
                          for (f[t] = [k[r][t][0]], v = 1, w = k[r][t].length; w > v; v++) f[t][v] = k[r][t][v] + q * i * l[r][t][v];
                      else {
                        var x = function(a) {
                          return +k[r][a] + q * i * l[r][a]
                        };
                        f = [
                          ["m", x(0), x(1), x(2), x(3), x(4), x(5)]
                        ]
                      }
                      break;
                    case "csv":
                      if ("clip-rect" == r)
                        for (f = [], t = 4; t--;) f[t] = +k[r][t] + q * i * l[r][t];
                      break;
                    default:
                      var y = [][E](k[r]);
                      for (f = [], t = n.paper.customAttributes[r].length; t--;) f[t] = +y[t] + q * i * l[r][t]
                  }
                  o[r] = f
                } n.attr(o),
                function(a, c, d) {
                  setTimeout(function() {
                    b("raphael.anim.frame." + a, c, d)
                  })
                }(n.id, n, e.anim)
            } else {
              if (function(a, d, e) {
                  setTimeout(function() {
                    b("raphael.anim.frame." + d.id, d, e), b("raphael.anim.finish." + d.id, d, e), c.is(a, "function") && a.call(d)
                  })
                }(e.callback, n, e.anim), n.attr(m), ic.splice(d--, 1), e.repeat > 1 && !e.next) {
                for (g in m) m[z](g) && (p[g] = e.totalOrigin[g]);
                e.el.attr(p), s(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
              }
              e.next && !e.stop && s(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
            }
        }
      }
      c.svg && n && n.paper && n.paper.safari(), ic.length && jc(kc)
    },
    lc = function(a) {
      return a > 255 ? 255 : 0 > a ? 0 : a
    };
  $b.animateWith = function(a, b, d, e, f, g) {
    var h = this;
    if (h.removed) return g && g.call(h), h;
    var i = d instanceof r ? d : c.animation(d, e, f, g);
    s(i, h, i.percents[0], null, h.attr());
    for (var j = 0, k = ic.length; k > j; j++)
      if (ic[j].anim == b && ic[j].el == a) {
        ic[k - 1].start = ic[j].start;
        break
      } return h
  }, $b.onAnimation = function(a) {
    return a ? b.on("raphael.anim.frame." + this.id, a) : b.unbind("raphael.anim.frame." + this.id), this
  }, r.prototype.delay = function(a) {
    var b = new r(this.anim, this.ms);
    return b.times = this.times, b.del = +a || 0, b
  }, r.prototype.repeat = function(a) {
    var b = new r(this.anim, this.ms);
    return b.del = this.del, b.times = N.floor(O(a, 0)) || 1, b
  }, c.animation = function(a, b, d, e) {
    if (a instanceof r) return a;
    (c.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), b = +b || 0;
    var f, g, h = {};
    for (g in a) a[z](g) && _(g) != g && _(g) + "%" != g && (f = !0, h[g] = a[g]);
    return f ? (d && (h.easing = d), e && (h.callback = e), new r({
      100: h
    }, b)) : new r(a, b)
  }, $b.animate = function(a, b, d, e) {
    var f = this;
    if (f.removed) return e && e.call(f), f;
    var g = a instanceof r ? a : c.animation(a, b, d, e);
    return s(g, f, g.percents[0], null, f.attr()), f
  }, $b.setTime = function(a, b) {
    return a && null != b && this.status(a, P(b, a.ms) / a.ms), this
  }, $b.status = function(a, b) {
    var c, d, e = [],
      f = 0;
    if (null != b) return s(a, this, -1, P(b, 1)), this;
    for (c = ic.length; c > f; f++)
      if (d = ic[f], d.el.id == this.id && (!a || d.anim == a)) {
        if (a) return d.status;
        e.push({
          anim: d.anim,
          status: d.status
        })
      } return a ? 0 : e
  }, $b.pause = function(a) {
    for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.pause." + this.id, this, ic[c].anim) !== !1 && (ic[c].paused = !0);
    return this
  }, $b.resume = function(a) {
    for (var c = 0; c < ic.length; c++)
      if (ic[c].el.id == this.id && (!a || ic[c].anim == a)) {
        var d = ic[c];
        b("raphael.anim.resume." + this.id, this, d.anim) !== !1 && (delete d.paused, this.status(d.anim, d.status))
      } return this
  }, $b.stop = function(a) {
    for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.stop." + this.id, this, ic[c].anim) !== !1 && ic.splice(c--, 1);
    return this
  }, b.on("raphael.remove", t), b.on("raphael.clear", t), $b.toString = function() {
    return "Raphaël’s object"
  };
  var mc = function(a) {
      if (this.items = [], this.length = 0, this.type = "set", a)
        for (var b = 0, c = a.length; c > b; b++) !a[b] || a[b].constructor != $b.constructor && a[b].constructor != mc || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
    },
    nc = mc.prototype;
  nc.push = function() {
    for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], !a || a.constructor != $b.constructor && a.constructor != mc || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
    return this
  }, nc.pop = function() {
    return this.length && delete this[this.length--], this.items.pop()
  }, nc.forEach = function(a, b) {
    for (var c = 0, d = this.items.length; d > c; c++)
      if (a.call(b, this.items[c], c) === !1) return this;
    return this
  };
  for (var oc in $b) $b[z](oc) && (nc[oc] = function(a) {
    return function() {
      var b = arguments;
      return this.forEach(function(c) {
        c[a][D](c, b)
      })
    }
  }(oc));
  return nc.attr = function(a, b) {
      if (a && c.is(a, V) && c.is(a[0], "object"))
        for (var d = 0, e = a.length; e > d; d++) this.items[d].attr(a[d]);
      else
        for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(a, b);
      return this
    }, nc.clear = function() {
      for (; this.length;) this.pop()
    }, nc.splice = function(a, b) {
      a = 0 > a ? O(this.length + a, 0) : a, b = O(0, P(this.length - a, b));
      var c, d = [],
        e = [],
        f = [];
      for (c = 2; c < arguments.length; c++) f.push(arguments[c]);
      for (c = 0; b > c; c++) e.push(this[a + c]);
      for (; c < this.length - a; c++) d.push(this[a + c]);
      var g = f.length;
      for (c = 0; c < g + d.length; c++) this.items[a + c] = this[a + c] = g > c ? f[c] : d[c - g];
      for (c = this.items.length = this.length -= b - g; this[c];) delete this[c++];
      return new mc(e)
    }, nc.exclude = function(a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (this[b] == a) return this.splice(b, 1), !0
    }, nc.animate = function(a, b, d, e) {
      (c.is(d, "function") || !d) && (e = d || null);
      var f, g, h = this.items.length,
        i = h,
        j = this;
      if (!h) return this;
      e && (g = function() {
        !--h && e.call(j)
      }), d = c.is(d, U) ? d : g;
      var k = c.animation(a, b, d, g);
      for (f = this.items[--i].animate(k); i--;) this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k), this.items[i] && !this.items[i].removed || h--;
      return this
    }, nc.insertAfter = function(a) {
      for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
      return this
    }, nc.getBBox = function() {
      for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
        if (!this.items[e].removed) {
          var f = this.items[e].getBBox();
          a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
        } return a = P[D](0, a), b = P[D](0, b), c = O[D](0, c), d = O[D](0, d), {
        x: a,
        y: b,
        x2: c,
        y2: d,
        width: c - a,
        height: d - b
      }
    }, nc.clone = function(a) {
      a = this.paper.set();
      for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
      return a
    }, nc.toString = function() {
      return "Raphaël‘s set"
    }, nc.glow = function(a) {
      var b = this.paper.set();
      return this.forEach(function(c) {
        var d = c.glow(a);
        null != d && d.forEach(function(a) {
          b.push(a)
        })
      }), b
    }, nc.isPointInside = function(a, b) {
      var c = !1;
      return this.forEach(function(d) {
        return d.isPointInside(a, b) ? (console.log("runned"), c = !0, !1) : void 0
      }), c
    }, c.registerFont = function(a) {
      if (!a.face) return a;
      this.fonts = this.fonts || {};
      var b = {
          w: a.w,
          face: {},
          glyphs: {}
        },
        c = a.face["font-family"];
      for (var d in a.face) a.face[z](d) && (b.face[d] = a.face[d]);
      if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
        b.face["units-per-em"] = ab(a.face["units-per-em"], 10);
        for (var e in a.glyphs)
          if (a.glyphs[z](e)) {
            var f = a.glyphs[e];
            if (b.glyphs[e] = {
                w: f.w,
                k: {},
                d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                  return {
                    l: "L",
                    c: "C",
                    x: "z",
                    t: "m",
                    r: "l",
                    v: "c"
                  } [a] || "M"
                }) + "z"
              }, f.k)
              for (var g in f.k) f[z](g) && (b.glyphs[e].k[g] = f.k[g])
          }
      }
      return a
    }, v.getFont = function(a, b, d, e) {
      if (e = e || "normal", d = d || "normal", b = +b || {
          normal: 400,
          bold: 700,
          lighter: 300,
          bolder: 800
        } [b] || 400, c.fonts) {
        var f = c.fonts[a];
        if (!f) {
          var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, G) + "(\\s|$)", "i");
          for (var h in c.fonts)
            if (c.fonts[z](h) && g.test(h)) {
              f = c.fonts[h];
              break
            }
        }
        var i;
        if (f)
          for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != b || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++);
        return i
      }
    }, v.print = function(a, b, d, e, f, g, h, i) {
      g = g || "middle", h = O(P(h || 0, 1), -1), i = O(P(i || 1, 3), 1);
      var j, k = I(d)[J](G),
        l = 0,
        m = 0,
        n = G;
      if (c.is(e, "string") && (e = this.getFont(e)), e) {
        j = (f || 16) / e.face["units-per-em"];
        for (var o = e.face.bbox[J](w), p = +o[0], q = o[3] - o[1], r = 0, s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2), t = 0, u = k.length; u > t; t++) {
          if ("\n" == k[t]) l = 0, x = 0, m = 0, r += q * i;
          else {
            var v = m && e.glyphs[k[t - 1]] || {},
              x = e.glyphs[k[t]];
            l += m ? (v.w || e.w) + (v.k && v.k[k[t]] || 0) + e.w * h : 0, m = 1
          }
          x && x.d && (n += c.transformPath(x.d, ["t", l * j, r * j, "s", j, j, p, s, "t", (a - p) / j, (b - s) / j]))
        }
      }
      return this.path(n).attr({
        fill: "#000",
        stroke: "none"
      })
    }, v.add = function(a) {
      if (c.is(a, "array"))
        for (var b, d = this.set(), e = 0, f = a.length; f > e; e++) b = a[e] || {}, x[z](b.type) && d.push(this[b.type]().attr(b));
      return d
    }, c.format = function(a, b) {
      var d = c.is(b, V) ? [0][E](b) : arguments;
      return a && c.is(a, U) && d.length - 1 && (a = a.replace(y, function(a, b) {
        return null == d[++b] ? G : d[b]
      })), a || G
    }, c.fullfill = function() {
      var a = /\{([^\}]+)\}/g,
        b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
        c = function(a, c, d) {
          var e = d;
          return c.replace(b, function(a, b, c, d, f) {
            b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
          }), e = (null == e || e == d ? a : e) + ""
        };
      return function(b, d) {
        return String(b).replace(a, function(a, b) {
          return c(a, b, d)
        })
      }
    }(), c.ninja = function() {
      return B.was ? A.win.Raphael = B.is : delete Raphael, c
    }, c.st = nc,
    function(a, b, d) {
      function e() {
        /in/.test(a.readyState) ? setTimeout(e, 9) : c.eve("raphael.DOMload")
      }
      null == a.readyState && a.addEventListener && (a.addEventListener(b, d = function() {
        a.removeEventListener(b, d, !1), a.readyState = "complete"
      }, !1), a.readyState = "loading"), e()
    }(document, "DOMContentLoaded"), b.on("raphael.DOMload", function() {
      u = !0
    }),
    function() {
      if (c.svg) {
        var a = "hasOwnProperty",
          b = String,
          d = parseFloat,
          e = parseInt,
          f = Math,
          g = f.max,
          h = f.abs,
          i = f.pow,
          j = /[, ]+/,
          k = c.eve,
          l = "",
          m = " ",
          n = "http://www.w3.org/1999/xlink",
          o = {
            block: "M5,0 0,2.5 5,5z",
            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
            open: "M6,1 1,3.5 6,6",
            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
          },
          p = {};
        c.toString = function() {
          return "Your browser supports SVG.\nYou are running Raphaël " + this.version
        };
        var q = function(d, e) {
            if (e) {
              "string" == typeof d && (d = q(d));
              for (var f in e) e[a](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), b(e[f])) : d.setAttribute(f, b(e[f])))
            } else d = c._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
            return d
          },
          r = function(a, e) {
            var j = "linear",
              k = a.id + e,
              m = .5,
              n = .5,
              o = a.node,
              p = a.paper,
              r = o.style,
              s = c._g.doc.getElementById(k);
            if (!s) {
              if (e = b(e).replace(c._radial_gradient, function(a, b, c) {
                  if (j = "radial", b && c) {
                    m = d(b), n = d(c);
                    var e = 2 * (n > .5) - 1;
                    i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e)
                  }
                  return l
                }), e = e.split(/\s*\-\s*/), "linear" == j) {
                var t = e.shift();
                if (t = -d(t), isNaN(t)) return null;
                var u = [0, 0, f.cos(c.rad(t)), f.sin(c.rad(t))],
                  v = 1 / (g(h(u[2]), h(u[3])) || 1);
                u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
              }
              var w = c._parseDots(e);
              if (!w) return null;
              if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), a.gradient && k != a.gradient.id && (p.defs.removeChild(a.gradient), delete a.gradient), !a.gradient) {
                s = q(j + "Gradient", {
                  id: k
                }), a.gradient = s, q(s, "radial" == j ? {
                  fx: m,
                  fy: n
                } : {
                  x1: u[0],
                  y1: u[1],
                  x2: u[2],
                  y2: u[3],
                  gradientTransform: a.matrix.invert()
                }), p.defs.appendChild(s);
                for (var x = 0, y = w.length; y > x; x++) s.appendChild(q("stop", {
                  offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                  "stop-color": w[x].color || "#fff"
                }))
              }
            }
            return q(o, {
              fill: "url(#" + k + ")",
              opacity: 1,
              "fill-opacity": 1
            }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1
          },
          s = function(a) {
            var b = a.getBBox(1);
            q(a.pattern, {
              patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
            })
          },
          t = function(d, e, f) {
            if ("path" == d.type) {
              for (var g, h, i, j, k, m = b(e).toLowerCase().split("-"), n = d.paper, r = f ? "end" : "start", s = d.node, t = d.attrs, u = t["stroke-width"], v = m.length, w = "classic", x = 3, y = 3, z = 5; v--;) switch (m[v]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                  w = m[v];
                  break;
                case "wide":
                  y = 5;
                  break;
                case "narrow":
                  y = 2;
                  break;
                case "long":
                  x = 5;
                  break;
                case "short":
                  x = 2
              }
              if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = {
                  fill: "none",
                  stroke: t.stroke
                }) : (j = i = x / 2, k = {
                  fill: t.stroke,
                  stroke: "none"
                }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) {
                var A = "raphael-marker-" + w,
                  B = "raphael-marker-" + r + w + x + y;
                c._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), {
                  "stroke-linecap": "round",
                  d: o[w],
                  id: A
                })), p[A] = 1);
                var C, D = c._g.doc.getElementById(B);
                D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), {
                  id: B,
                  markerHeight: y,
                  markerWidth: x,
                  orient: "auto",
                  refX: j,
                  refY: y / 2
                }), C = q(q("use"), {
                  "xlink:href": "#" + A,
                  transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                  "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                }), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k);
                var E = i * ("diamond" != w && "oval" != w);
                f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - E * u) : (g = E * u, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = c.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e
              } else f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - g) : (g = 0, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, {
                d: c.getSubpath(t.path, g, h)
              }), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"];
              for (k in p)
                if (p[a](k) && !p[k]) {
                  var F = c._g.doc.getElementById(k);
                  F && F.parentNode.removeChild(F)
                }
            }
          },
          u = {
            "": [0],
            none: [0],
            "-": [3, 1],
            ".": [1, 1],
            "-.": [3, 1, 1, 1],
            "-..": [3, 1, 1, 1, 1, 1],
            ". ": [1, 3],
            "- ": [4, 3],
            "--": [8, 3],
            "- .": [4, 3, 1, 3],
            "--.": [8, 3, 1, 3],
            "--..": [8, 3, 1, 3, 1, 3]
          },
          v = function(a, c, d) {
            if (c = u[b(c).toLowerCase()]) {
              for (var e = a.attrs["stroke-width"] || "1", f = {
                  round: e,
                  square: e,
                  butt: 0
                } [a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = c.length; h--;) g[h] = c[h] * e + (h % 2 ? 1 : -1) * f;
              q(a.node, {
                "stroke-dasharray": g.join(",")
              })
            }
          },
          w = function(d, f) {
            var i = d.node,
              k = d.attrs,
              m = i.style.visibility;
            i.style.visibility = "hidden";
            for (var o in f)
              if (f[a](o)) {
                if (!c._availableAttrs[a](o)) continue;
                var p = f[o];
                switch (k[o] = p, o) {
                  case "blur":
                    d.blur(p);
                    break;
                  case "href":
                  case "title":
                    var u = q("title"),
                      w = c._g.doc.createTextNode(p);
                    u.appendChild(w), i.appendChild(u);
                    break;
                  case "target":
                    var x = i.parentNode;
                    if ("a" != x.tagName.toLowerCase()) {
                      var u = q("a");
                      x.insertBefore(u, i), u.appendChild(i), x = u
                    }
                    "target" == o ? x.setAttributeNS(n, "show", "blank" == p ? "new" : p) : x.setAttributeNS(n, o, p);
                    break;
                  case "cursor":
                    i.style.cursor = p;
                    break;
                  case "transform":
                    d.transform(p);
                    break;
                  case "arrow-start":
                    t(d, p);
                    break;
                  case "arrow-end":
                    t(d, p, 1);
                    break;
                  case "clip-rect":
                    var z = b(p).split(j);
                    if (4 == z.length) {
                      d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                      var A = q("clipPath"),
                        B = q("rect");
                      A.id = c.createUUID(), q(B, {
                        x: z[0],
                        y: z[1],
                        width: z[2],
                        height: z[3]
                      }), A.appendChild(B), d.paper.defs.appendChild(A), q(i, {
                        "clip-path": "url(#" + A.id + ")"
                      }), d.clip = B
                    }
                    if (!p) {
                      var C = i.getAttribute("clip-path");
                      if (C) {
                        var D = c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g, l));
                        D && D.parentNode.removeChild(D), q(i, {
                          "clip-path": l
                        }), delete d.clip
                      }
                    }
                    break;
                  case "path":
                    "path" == d.type && (q(i, {
                      d: p ? k.path = c._pathToAbsolute(p) : "M0,0"
                    }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                    break;
                  case "width":
                    if (i.setAttribute(o, p), d._.dirty = 1, !k.fx) break;
                    o = "x", p = k.x;
                  case "x":
                    k.fx && (p = -k.x - (k.width || 0));
                  case "rx":
                    if ("rx" == o && "rect" == d.type) break;
                  case "cx":
                    i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                    break;
                  case "height":
                    if (i.setAttribute(o, p), d._.dirty = 1, !k.fy) break;
                    o = "y", p = k.y;
                  case "y":
                    k.fy && (p = -k.y - (k.height || 0));
                  case "ry":
                    if ("ry" == o && "rect" == d.type) break;
                  case "cy":
                    i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                    break;
                  case "r":
                    "rect" == d.type ? q(i, {
                      rx: p,
                      ry: p
                    }) : i.setAttribute(o, p), d._.dirty = 1;
                    break;
                  case "src":
                    "image" == d.type && i.setAttributeNS(n, "href", p);
                    break;
                  case "stroke-width":
                    (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                    break;
                  case "stroke-dasharray":
                    v(d, p, f);
                    break;
                  case "fill":
                    var E = b(p).match(c._ISURL);
                    if (E) {
                      A = q("pattern");
                      var F = q("image");
                      A.id = c.createUUID(), q(A, {
                          x: 0,
                          y: 0,
                          patternUnits: "userSpaceOnUse",
                          height: 1,
                          width: 1
                        }), q(F, {
                          x: 0,
                          y: 0,
                          "xlink:href": E[1]
                        }), A.appendChild(F),
                        function(a) {
                          c._preload(E[1], function() {
                            var b = this.offsetWidth,
                              c = this.offsetHeight;
                            q(a, {
                              width: b,
                              height: c
                            }), q(F, {
                              width: b,
                              height: c
                            }), d.paper.safari()
                          })
                        }(A), d.paper.defs.appendChild(A), q(i, {
                          fill: "url(#" + A.id + ")"
                        }), d.pattern = A, d.pattern && s(d);
                      break
                    }
                    var G = c.getRGB(p);
                    if (G.error) {
                      if (("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p)) {
                        if ("opacity" in k || "fill-opacity" in k) {
                          var H = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                          if (H) {
                            var I = H.getElementsByTagName("stop");
                            q(I[I.length - 1], {
                              "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                            })
                          }
                        }
                        k.gradient = p, k.fill = "none";
                        break
                      }
                    } else delete f.gradient, delete k.gradient, !c.is(k.opacity, "undefined") && c.is(f.opacity, "undefined") && q(i, {
                      opacity: k.opacity
                    }), !c.is(k["fill-opacity"], "undefined") && c.is(f["fill-opacity"], "undefined") && q(i, {
                      "fill-opacity": k["fill-opacity"]
                    });
                    G[a]("opacity") && q(i, {
                      "fill-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                    });
                  case "stroke":
                    G = c.getRGB(p), i.setAttribute(o, G.hex), "stroke" == o && G[a]("opacity") && q(i, {
                      "stroke-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                    }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                    break;
                  case "gradient":
                    ("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p);
                    break;
                  case "opacity":
                    k.gradient && !k[a]("stroke-opacity") && q(i, {
                      "stroke-opacity": p > 1 ? p / 100 : p
                    });
                  case "fill-opacity":
                    if (k.gradient) {
                      H = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), H && (I = H.getElementsByTagName("stop"), q(I[I.length - 1], {
                        "stop-opacity": p
                      }));
                      break
                    }
                    default:
                      "font-size" == o && (p = e(p, 10) + "px");
                      var J = o.replace(/(\-.)/g, function(a) {
                        return a.substring(1).toUpperCase()
                      });
                      i.style[J] = p, d._.dirty = 1, i.setAttribute(o, p)
                }
              } y(d, f), i.style.visibility = m
          },
          x = 1.2,
          y = function(d, f) {
            if ("text" == d.type && (f[a]("text") || f[a]("font") || f[a]("font-size") || f[a]("x") || f[a]("y"))) {
              var g = d.attrs,
                h = d.node,
                i = h.firstChild ? e(c._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
              if (f[a]("text")) {
                for (g.text = f.text; h.firstChild;) h.removeChild(h.firstChild);
                for (var j, k = b(f.text).split("\n"), m = [], n = 0, o = k.length; o > n; n++) j = q("tspan"), n && q(j, {
                  dy: i * x,
                  x: g.x
                }), j.appendChild(c._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j
              } else
                for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++) n ? q(m[n], {
                  dy: i * x,
                  x: g.x
                }) : q(m[0], {
                  dy: 0
                });
              q(h, {
                x: g.x,
                y: g.y
              }), d._.dirty = 1;
              var p = d._getBBox(),
                r = g.y - (p.y + p.height / 2);
              r && c.is(r, "finite") && q(m[0], {
                dy: r
              })
            }
          },
          z = function(a, b) {
            this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.matrix = c.matrix(), this.realPath = null, this.paper = b, this.attrs = this.attrs || {}, this._ = {
              transform: [],
              sx: 1,
              sy: 1,
              deg: 0,
              dx: 0,
              dy: 0,
              dirty: 1
            }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
          },
          A = c.el;
        z.prototype = A, A.constructor = z, c._engine.path = function(a, b) {
          var c = q("path");
          b.canvas && b.canvas.appendChild(c);
          var d = new z(c, b);
          return d.type = "path", w(d, {
            fill: "none",
            stroke: "#000",
            path: a
          }), d
        }, A.rotate = function(a, c, e) {
          if (this.removed) return this;
          if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
            var f = this.getBBox(1);
            c = f.x + f.width / 2, e = f.y + f.height / 2
          }
          return this.transform(this._.transform.concat([
            ["r", a, c, e]
          ])), this
        }, A.scale = function(a, c, e, f) {
          if (this.removed) return this;
          if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
          return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
            ["s", a, c, e, f]
          ])), this
        }, A.translate = function(a, c) {
          return this.removed ? this : (a = b(a).split(j), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this.transform(this._.transform.concat([
            ["t", a, c]
          ])), this)
        }, A.transform = function(b) {
          var d = this._;
          if (null == b) return d.transform;
          if (c._extractTransform(this, b), this.clip && q(this.clip, {
              transform: this.matrix.invert()
            }), this.pattern && s(this), this.node && q(this.node, {
              transform: this.matrix
            }), 1 != d.sx || 1 != d.sy) {
            var e = this.attrs[a]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
              "stroke-width": e
            })
          }
          return this
        }, A.hide = function() {
          return !this.removed && this.paper.safari(this.node.style.display = "none"), this
        }, A.show = function() {
          return !this.removed && this.paper.safari(this.node.style.display = ""), this
        }, A.remove = function() {
          if (!this.removed && this.node.parentNode) {
            var a = this.paper;
            a.__set__ && a.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && a.defs.removeChild(this.gradient), c._tear(this, a), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var b in this) this[b] = "function" == typeof this[b] ? c._removedFactory(b) : null;
            this.removed = !0
          }
        }, A._getBBox = function() {
          if ("none" == this.node.style.display) {
            this.show();
            var a = !0
          }
          var b = {};
          try {
            b = this.node.getBBox()
          } catch (c) {} finally {
            b = b || {}
          }
          return a && this.hide(), b
        }, A.attr = function(b, d) {
          if (this.removed) return this;
          if (null == b) {
            var e = {};
            for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
            return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
          }
          if (null == d && c.is(b, "string")) {
            if ("fill" == b && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
            if ("transform" == b) return this._.transform;
            for (var g = b.split(j), h = {}, i = 0, l = g.length; l > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
            return l - 1 ? h : h[g[0]]
          }
          if (null == d && c.is(b, "array")) {
            for (h = {}, i = 0, l = b.length; l > i; i++) h[b[i]] = this.attr(b[i]);
            return h
          }
          if (null != d) {
            var m = {};
            m[b] = d
          } else null != b && c.is(b, "object") && (m = b);
          for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
          for (n in this.paper.customAttributes)
            if (this.paper.customAttributes[a](n) && m[a](n) && c.is(this.paper.customAttributes[n], "function")) {
              var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
              this.attrs[n] = m[n];
              for (var p in o) o[a](p) && (m[p] = o[p])
            } return w(this, m), this
        }, A.toFront = function() {
          if (this.removed) return this;
          "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
          var a = this.paper;
          return a.top != this && c._tofront(this, a), this
        }, A.toBack = function() {
          if (this.removed) return this;
          var a = this.node.parentNode;
          return "a" == a.tagName.toLowerCase() ? a.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : a.firstChild != this.node && a.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper), this.paper, this
        }, A.insertAfter = function(a) {
          if (this.removed) return this;
          var b = a.node || a[a.length - 1].node;
          return b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this
        }, A.insertBefore = function(a) {
          if (this.removed) return this;
          var b = a.node || a[0].node;
          return b.parentNode.insertBefore(this.node, b), c._insertbefore(this, a, this.paper), this
        }, A.blur = function(a) {
          var b = this;
          if (0 !== +a) {
            var d = q("filter"),
              e = q("feGaussianBlur");
            b.attrs.blur = a, d.id = c.createUUID(), q(e, {
              stdDeviation: +a || 1.5
            }), d.appendChild(e), b.paper.defs.appendChild(d), b._blur = d, q(b.node, {
              filter: "url(#" + d.id + ")"
            })
          } else b._blur && (b._blur.parentNode.removeChild(b._blur), delete b._blur, delete b.attrs.blur), b.node.removeAttribute("filter");
          return b
        }, c._engine.circle = function(a, b, c, d) {
          var e = q("circle");
          a.canvas && a.canvas.appendChild(e);
          var f = new z(e, a);
          return f.attrs = {
            cx: b,
            cy: c,
            r: d,
            fill: "none",
            stroke: "#000"
          }, f.type = "circle", q(e, f.attrs), f
        }, c._engine.rect = function(a, b, c, d, e, f) {
          var g = q("rect");
          a.canvas && a.canvas.appendChild(g);
          var h = new z(g, a);
          return h.attrs = {
            x: b,
            y: c,
            width: d,
            height: e,
            r: f || 0,
            rx: f || 0,
            ry: f || 0,
            fill: "none",
            stroke: "#000"
          }, h.type = "rect", q(g, h.attrs), h
        }, c._engine.ellipse = function(a, b, c, d, e) {
          var f = q("ellipse");
          a.canvas && a.canvas.appendChild(f);
          var g = new z(f, a);
          return g.attrs = {
            cx: b,
            cy: c,
            rx: d,
            ry: e,
            fill: "none",
            stroke: "#000"
          }, g.type = "ellipse", q(f, g.attrs), g
        }, c._engine.image = function(a, b, c, d, e, f) {
          var g = q("image");
          q(g, {
            x: c,
            y: d,
            width: e,
            height: f,
            preserveAspectRatio: "none"
          }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
          var h = new z(g, a);
          return h.attrs = {
            x: c,
            y: d,
            width: e,
            height: f,
            src: b
          }, h.type = "image", h
        }, c._engine.text = function(a, b, d, e) {
          var f = q("text");
          a.canvas && a.canvas.appendChild(f);
          var g = new z(f, a);
          return g.attrs = {
            x: b,
            y: d,
            "text-anchor": "middle",
            text: e,
            font: c._availableAttrs.font,
            stroke: "none",
            fill: "#000"
          }, g.type = "text", w(g, g.attrs), g
        }, c._engine.setSize = function(a, b) {
          return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
        }, c._engine.create = function() {
          var a = c._getContainer.apply(0, arguments),
            b = a && a.container,
            d = a.x,
            e = a.y,
            f = a.width,
            g = a.height;
          if (!b) throw new Error("SVG container not found.");
          var h, i = q("svg"),
            j = "overflow:hidden;";
          return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, {
            height: g,
            version: 1.1,
            width: f,
            xmlns: "http://www.w3.org/2000/svg"
          }), 1 == b ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", c._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i)), b = new c._Paper, b.width = f, b.height = g, b.canvas = i, b.clear(), b._left = b._top = 0, h && (b.renderfix = function() {}), b.renderfix(), b
        }, c._engine.setViewBox = function(a, b, c, d, e) {
          k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
          var f, h, i = g(c / this.width, d / this.height),
            j = this.top,
            l = e ? "meet" : "xMinYMin";
          for (null == a ? (this._vbSize && (i = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = i, f = a + m + b + m + c + m + d), q(this.canvas, {
              viewBox: f,
              preserveAspectRatio: l
            }); i && j;) h = "stroke-width" in j.attrs ? j.attrs["stroke-width"] : 1, j.attr({
            "stroke-width": h
          }), j._.dirty = 1, j._.dirtyT = 1, j = j.prev;
          return this._viewBox = [a, b, c, d, !!e], this
        }, c.prototype.renderfix = function() {
          var a, b = this.canvas,
            c = b.style;
          try {
            a = b.getScreenCTM() || b.createSVGMatrix()
          } catch (d) {
            a = b.createSVGMatrix()
          }
          var e = -a.e % 1,
            f = -a.f % 1;
          (e || f) && (e && (this._left = (this._left + e) % 1, c.left = this._left + "px"), f && (this._top = (this._top + f) % 1, c.top = this._top + "px"))
        }, c.prototype.clear = function() {
          c.eve("raphael.clear", this);
          for (var a = this.canvas; a.firstChild;) a.removeChild(a.firstChild);
          this.bottom = this.top = null, (this.desc = q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël " + c.version)), a.appendChild(this.desc), a.appendChild(this.defs = q("defs"))
        }, c.prototype.remove = function() {
          k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
          for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null
        };
        var B = c.st;
        for (var C in A) A[a](C) && !B[a](C) && (B[C] = function(a) {
          return function() {
            var b = arguments;
            return this.forEach(function(c) {
              c[a].apply(c, b)
            })
          }
        }(C))
      }
    }(),
    function() {
      if (c.vml) {
        var a = "hasOwnProperty",
          b = String,
          d = parseFloat,
          e = Math,
          f = e.round,
          g = e.max,
          h = e.min,
          i = e.abs,
          j = "fill",
          k = /[, ]+/,
          l = c.eve,
          m = " progid:DXImageTransform.Microsoft",
          n = " ",
          o = "",
          p = {
            M: "m",
            L: "l",
            C: "c",
            Z: "x",
            m: "t",
            l: "r",
            c: "v",
            z: "x"
          },
          q = /([clmz]),?([^clmz]*)/gi,
          r = / progid:\S+Blur\([^\)]+\)/g,
          s = /-?[^,\s-]+/g,
          t = "position:absolute;left:0;top:0;width:1px;height:1px",
          u = 21600,
          v = {
            path: 1,
            rect: 1,
            image: 1
          },
          w = {
            circle: 1,
            ellipse: 1
          },
          x = function(a) {
            var d = /[ahqstv]/gi,
              e = c._pathToAbsolute;
            if (b(a).match(d) && (e = c._path2curve), d = /[clmz]/g, e == c._pathToAbsolute && !b(a).match(d)) {
              var g = b(a).replace(q, function(a, b, c) {
                var d = [],
                  e = "m" == b.toLowerCase(),
                  g = p[b];
                return c.replace(s, function(a) {
                  e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u))
                }), g + d
              });
              return g
            }
            var h, i, j = e(a);
            g = [];
            for (var k = 0, l = j.length; l > k; k++) {
              h = j[k], i = j[k][0].toLowerCase(), "z" == i && (i = "x");
              for (var m = 1, r = h.length; r > m; m++) i += f(h[m] * u) + (m != r - 1 ? "," : o);
              g.push(i)
            }
            return g.join(n)
          },
          y = function(a, b, d) {
            var e = c.matrix();
            return e.rotate(-a, .5, .5), {
              dx: e.x(b, d),
              dy: e.y(b, d)
            }
          },
          z = function(a, b, c, d, e, f) {
            var g = a._,
              h = a.matrix,
              k = g.fillpos,
              l = a.node,
              m = l.style,
              o = 1,
              p = "",
              q = u / b,
              r = u / c;
            if (m.visibility = "hidden", b && c) {
              if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1 : 1), f) {
                var s = y(f, d, e);
                d = s.dx, e = s.dy
              }
              if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) {
                var t = l.getElementsByTagName(j);
                t = t && t[0], l.removeChild(t), k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o), g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(t)
              }
              m.visibility = "visible"
            }
          };
        c.toString = function() {
          return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
        };
        var A = function(a, c, d) {
            for (var e = b(c).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
              case "block":
              case "classic":
              case "oval":
              case "diamond":
              case "open":
              case "none":
                h = e[g];
                break;
              case "wide":
              case "narrow":
                j = e[g];
                break;
              case "long":
              case "short":
                i = e[g]
            }
            var k = a.node.getElementsByTagName("stroke")[0];
            k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
          },
          B = function(e, i) {
            e.attrs = e.attrs || {};
            var l = e.node,
              m = e.attrs,
              p = l.style,
              q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
              r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
              s = e;
            for (var t in i) i[a](t) && (m[t] = i[t]);
            if (q && (m.path = c._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~b(m.path).toLowerCase().indexOf("r") ? c._pathToAbsolute(m.path) : m.path), "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
              var y = +m.cx,
                B = +m.cy,
                D = +m.rx || +m.r || 0,
                E = +m.ry || +m.r || 0;
              l.path = c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u)), e._.dirty = 1
            }
            if ("clip-rect" in i) {
              var G = b(i["clip-rect"]).split(k);
              if (4 == G.length) {
                G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1];
                var H = l.clipRect || c._g.doc.createElement("div"),
                  I = H.style;
                I.clip = c.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H)
              }
              i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
            }
            if (e.textpath) {
              var J = e.textpath.style;
              i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"])
            }
            if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
              var K = l.getElementsByTagName(j),
                L = !1;
              if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) {
                var M = b(i.fill).match(c._ISURL);
                if (M) {
                  K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = M[1], K.type = "tile";
                  var N = e.getBBox(1);
                  K.position = N.x + n + N.y, e._.fillpos = [N.x, N.y], c._preload(M[1], function() {
                    e._.fillsize = [this.offsetWidth, this.offsetHeight]
                  })
                } else K.color = c.getRGB(i.fill).hex, K.src = o, K.type = "solid", c.getRGB(i.fill).error && (s.type in {
                  circle: 1,
                  ellipse: 1
                } || "r" != b(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1)
              }
              if ("fill-opacity" in i || "opacity" in i) {
                var O = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+c.getRGB(i.fill).o + 1 || 2) - 1);
                O = h(g(O, 0), 1), K.opacity = O, K.src && (K.color = "none")
              }
              l.appendChild(K);
              var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                Q = !1;
              !P && (Q = P = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0), ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1);
              var R = c.getRGB(i.stroke);
              P.on && i.stroke && (P.color = R.hex), O = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+R.o + 1 || 2) - 1);
              var S = .75 * (d(i["stroke-width"]) || 1);
              if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), i["stroke-dasharray"]) {
                var T = {
                  "-": "shortdash",
                  ".": "shortdot",
                  "-.": "shortdashdot",
                  "-..": "shortdashdotdot",
                  ". ": "dot",
                  "- ": "dash",
                  "--": "longdash",
                  "- .": "dashdot",
                  "--.": "longdashdot",
                  "--..": "longdashdotdot"
                };
                P.dashstyle = T[a](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o
              }
              Q && l.appendChild(P)
            }
            if ("text" == s.type) {
              s.paper.canvas.style.display = o;
              var U = s.paper.span,
                V = 100,
                W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
              p = U.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), W = d(m["font-size"] || W && W[0]) || 10, p.fontSize = W * V + "px", s.textpath.string && (U.innerHTML = b(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
              var X = U.getBoundingClientRect();
              s.W = m.w = (X.right - X.left) / V, s.H = m.h = (X.bottom - X.top) / V, s.X = m.x, s.Y = m.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = c.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
              for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, $ = Y.length; $ > Z; Z++)
                if (Y[Z] in i) {
                  s._.dirty = 1;
                  break
                } switch (m["text-anchor"]) {
                case "start":
                  s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2;
                  break;
                case "end":
                  s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2;
                  break;
                default:
                  s.textpath.style["v-text-align"] = "center", s.bbx = 0
              }
              s.textpath.style["v-text-kern"] = !0
            }
          },
          C = function(a, f, g) {
            a.attrs = a.attrs || {};
            var h = (a.attrs, Math.pow),
              i = "linear",
              j = ".5 .5";
            if (a.attrs.gradient = f, f = b(f).replace(c._radial_gradient, function(a, b, c) {
                return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c), o
              }), f = f.split(/\s*\-\s*/), "linear" == i) {
              var k = f.shift();
              if (k = -d(k), isNaN(k)) return null
            }
            var l = c._parseDots(f);
            if (!l) return null;
            if (a = a.shape || a.node, l.length) {
              a.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color;
              for (var m = [], p = 0, q = l.length; q > p; p++) l[p].offset && m.push(l[p].offset + n + l[p].color);
              g.colors = m.length ? m.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), a.appendChild(g)
            }
            return 1
          },
          D = function(a, b) {
            this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = b, this.matrix = c.matrix(), this._ = {
              transform: [],
              sx: 1,
              sy: 1,
              dx: 0,
              dy: 0,
              deg: 0,
              dirty: 1,
              dirtyT: 1
            }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
          },
          E = c.el;
        D.prototype = E, E.constructor = D, E.transform = function(a) {
          if (null == a) return this._.transform;
          var d, e = this.paper._viewBoxShift,
            f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
          e && (d = a = b(a).replace(/\.{3}|\u2026/g, this._.transform || o)), c._extractTransform(this, f + a);
          var g, h = this.matrix.clone(),
            i = this.skew,
            j = this.node,
            k = ~b(this.attrs.fill).indexOf("-"),
            l = !b(this.attrs.fill).indexOf("url(");
          if (h.translate(1, 1), l || k || "image" == this.type)
            if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
              j.style.filter = h.toFilter();
              var m = this.getBBox(),
                p = this.getBBox(1),
                q = m.x - p.x,
                r = m.y - p.y;
              j.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
            } else j.style.filter = o, z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
          else j.style.filter = o, i.matrix = b(h), i.offset = h.offset();
          return d && (this._.transform = d), this
        }, E.rotate = function(a, c, e) {
          if (this.removed) return this;
          if (null != a) {
            if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
              var f = this.getBBox(1);
              c = f.x + f.width / 2, e = f.y + f.height / 2
            }
            return this._.dirtyT = 1, this.transform(this._.transform.concat([
              ["r", a, c, e]
            ])), this
          }
        }, E.translate = function(a, c) {
          return this.removed ? this : (a = b(a).split(k), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += c), this.transform(this._.transform.concat([
            ["t", a, c]
          ])), this)
        }, E.scale = function(a, c, e, f) {
          if (this.removed) return this;
          if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
          return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
            ["s", a, c, e, f]
          ])), this._.dirtyT = 1, this
        }, E.hide = function() {
          return !this.removed && (this.node.style.display = "none"), this
        }, E.show = function() {
          return !this.removed && (this.node.style.display = o), this
        }, E._getBBox = function() {
          return this.removed ? {} : {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
          }
        }, E.remove = function() {
          if (!this.removed && this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this), c.eve.unbind("raphael.*.*." + this.id), c._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
            this.removed = !0
          }
        }, E.attr = function(b, d) {
          if (this.removed) return this;
          if (null == b) {
            var e = {};
            for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
            return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
          }
          if (null == d && c.is(b, "string")) {
            if (b == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
            for (var g = b.split(k), h = {}, i = 0, m = g.length; m > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
            return m - 1 ? h : h[g[0]]
          }
          if (this.attrs && null == d && c.is(b, "array")) {
            for (h = {}, i = 0, m = b.length; m > i; i++) h[b[i]] = this.attr(b[i]);
            return h
          }
          var n;
          null != d && (n = {}, n[b] = d), null == d && c.is(b, "object") && (n = b);
          for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
          if (n) {
            for (o in this.paper.customAttributes)
              if (this.paper.customAttributes[a](o) && n[a](o) && c.is(this.paper.customAttributes[o], "function")) {
                var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                this.attrs[o] = n[o];
                for (var q in p) p[a](q) && (n[q] = p[q])
              } n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n)
          }
          return this
        }, E.toFront = function() {
          return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && c._tofront(this, this.paper), this
        }, E.toBack = function() {
          return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper)), this)
        }, E.insertAfter = function(a) {
          return this.removed ? this : (a.constructor == c.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this)
        }, E.insertBefore = function(a) {
          return this.removed ? this : (a.constructor == c.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), c._insertbefore(this, a, this.paper), this)
        }, E.blur = function(a) {
          var b = this.node.runtimeStyle,
            d = b.filter;
          return d = d.replace(r, o), 0 !== +a ? (this.attrs.blur = a, b.filter = d + n + m + ".Blur(pixelradius=" + (+a || 1.5) + ")", b.margin = c.format("-{0}px 0 0 -{0}px", f(+a || 1.5))) : (b.filter = d, b.margin = 0, delete this.attrs.blur), this
        }, c._engine.path = function(a, b) {
          var c = F("shape");
          c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
          var d = new D(c, b),
            e = {
              fill: "none",
              stroke: "#000"
            };
          a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
          var f = F("skew");
          return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d
        }, c._engine.rect = function(a, b, d, e, f, g) {
          var h = c._rectPath(b, d, e, f, g),
            i = a.path(h),
            j = i.attrs;
          return i.X = j.x = b, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i
        }, c._engine.ellipse = function(a, b, c, d, e) {
          var f = a.path();
          return f.attrs, f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {
            cx: b,
            cy: c,
            rx: d,
            ry: e
          }), f
        }, c._engine.circle = function(a, b, c, d) {
          var e = a.path();
          return e.attrs, e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {
            cx: b,
            cy: c,
            r: d
          }), e
        }, c._engine.image = function(a, b, d, e, f, g) {
          var h = c._rectPath(d, e, f, g),
            i = a.path(h).attr({
              stroke: "none"
            }),
            k = i.attrs,
            l = i.node,
            m = l.getElementsByTagName(j)[0];
          return k.src = b, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = b, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i
        }, c._engine.text = function(a, d, e, g) {
          var h = F("shape"),
            i = F("path"),
            j = F("textpath");
          d = d || 0, e = e || 0, g = g || "", i.v = c.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = b(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
          var k = new D(h, a),
            l = {
              fill: "#000",
              stroke: "none",
              font: c._availableAttrs.font,
              text: g
            };
          k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = b(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), a.canvas.appendChild(h);
          var m = F("skew");
          return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k
        }, c._engine.setSize = function(a, b) {
          var d = this.canvas.style;
          return this.width = a, this.height = b, a == +a && (a += "px"), b == +b && (b += "px"), d.width = a, d.height = b, d.clip = "rect(0 " + a + " " + b + " 0)", this._viewBox && c._engine.setViewBox.apply(this, this._viewBox), this
        }, c._engine.setViewBox = function(a, b, d, e, f) {
          c.eve("raphael.setViewBox", this, this._viewBox, [a, b, d, e, f]);
          var h, i, j = this.width,
            k = this.height,
            l = 1 / g(d / j, e / k);
          return f && (h = k / e, i = j / d, j > d * h && (a -= (j - d * h) / 2 / h), k > e * i && (b -= (k - e * i) / 2 / i)), this._viewBox = [a, b, d, e, !!f], this._viewBoxShift = {
            dx: -a,
            dy: -b,
            scale: l
          }, this.forEach(function(a) {
            a.transform("...")
          }), this
        };
        var F;
        c._engine.initWin = function(a) {
          var b = a.document;
          b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
          try {
            !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
              return b.createElement("<rvml:" + a + ' class="rvml">')
            }
          } catch (c) {
            F = function(a) {
              return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
          }
        }, c._engine.initWin(c._g.win), c._engine.create = function() {
          var a = c._getContainer.apply(0, arguments),
            b = a.container,
            d = a.height,
            e = a.width,
            f = a.x,
            g = a.y;
          if (!b) throw new Error("VML container not found.");
          var h = new c._Paper,
            i = h.canvas = c._g.doc.createElement("div"),
            j = i.style;
          return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 1e3 * u + n + 1e3 * u, h.coordorigin = "0 0", h.span = c._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == b ? (c._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i), h.renderfix = function() {}, h
        }, c.prototype.clear = function() {
          c.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = c._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
        }, c.prototype.remove = function() {
          c.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
          for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
          return !0
        };
        var G = c.st;
        for (var H in E) E[a](H) && !G[a](H) && (G[H] = function(a) {
          return function() {
            var b = arguments;
            return this.forEach(function(c) {
              c[a].apply(c, b)
            })
          }
        }(H))
      }
    }(), B.was ? A.win.Raphael = c : Raphael = c, c
});

/**
 * JustGage - animated gauges using RaphaelJS
 * Check http://www.justgage.com for official releases
 * Licensed under MIT.
 * @author Bojan Djuricic (@Toorshia)
 **/

JustGage = function(config) {

  var obj = this;

  // Helps in case developer wants to debug it. unobtrusive
  if (config === null || config === undefined) {
    console.log('* justgage: Make sure to pass options to the constructor!');
    return false;
  }

  var node;

  if (config.id !== null && config.id !== undefined) {
    node = document.getElementById(config.id);
    if (!node) {
      console.log('* justgage: No element with id : %s found', config.id);
      return false;
    }
  } else if (config.parentNode !== null && config.parentNode !== undefined) {
    node = config.parentNode;
  } else {
    console.log('* justgage: Make sure to pass the existing element id or parentNode to the constructor.');
    return false;
  }

  var dataset = node.dataset ? node.dataset : {};

  // check for defaults
  var defaults = (config.defaults !== null && config.defaults !== undefined) ? config.defaults : false;
  if (defaults !== false) {
    config = extend({}, config, defaults);
    delete config.defaults;
  }

  // configurable parameters
  obj.config = {
    // id : string
    // this is container element id
    id: config.id,

    // value : float
    // value gauge is showing
    value: kvLookup('value', config, dataset, 0, 'float'),

    // defaults : bool
    // defaults parameter to use
    defaults: kvLookup('defaults', config, dataset, 0, false),

    // parentNode : node object
    // this is container element
    parentNode: kvLookup('parentNode', config, dataset, null),

    // width : int
    // gauge width
    width: kvLookup('width', config, dataset, null),

    // height : int
    // gauge height
    height: kvLookup('height', config, dataset, null),

    // valueFontColor : string
    // color of label showing current value
    valueFontColor: kvLookup('valueFontColor', config, dataset, "#010101"),

    // valueFontFamily : string
    // color of label showing current value
    valueFontFamily: kvLookup('valueFontFamily', config, dataset, "Arial"),

    // symbol : string
    // special symbol to show next to value
    symbol: kvLookup('symbol', config, dataset, ''),

    // min : float
    // min value
    min: kvLookup('min', config, dataset, 0, 'float'),

    // minTxt : string
    // min value text
    minTxt: kvLookup('minTxt', config, dataset, false),

    // max : float
    // max value
    max: kvLookup('max', config, dataset, 100, 'float'),

    // maxTxt : string
    // max value text
    maxTxt: kvLookup('maxTxt', config, dataset, false),

    // reverse : bool
    // reverse min and max
    reverse: kvLookup('reverse', config, dataset, false),

    // humanFriendlyDecimal : int
    // number of decimal places for our human friendly number to contain
    humanFriendlyDecimal: kvLookup('humanFriendlyDecimal', config, dataset, 0),


    // textRenderer: func
    // function applied before rendering text
    textRenderer: kvLookup('textRenderer', config, dataset, null),

    // onAnimationEnd: func
    // function applied after animation is done
    onAnimationEnd: kvLookup('onAnimationEnd', config, dataset, null),

    // gaugeWidthScale : float
    // width of the gauge element
    gaugeWidthScale: kvLookup('gaugeWidthScale', config, dataset, 1.0),

    // gaugeColor : string
    // background color of gauge element
    gaugeColor: kvLookup('gaugeColor', config, dataset, "#edebeb"),

    // label : string
    // text to show below value
    label: kvLookup('label', config, dataset, ''),

    // labelFontColor : string
    // color of label showing label under value
    labelFontColor: kvLookup('labelFontColor', config, dataset, "#b3b3b3"),

    // shadowOpacity : int
    // 0 ~ 1
    shadowOpacity: kvLookup('shadowOpacity', config, dataset, 0.2),

    // shadowSize: int
    // inner shadow size
    shadowSize: kvLookup('shadowSize', config, dataset, 5),

    // shadowVerticalOffset : int
    // how much shadow is offset from top
    shadowVerticalOffset: kvLookup('shadowVerticalOffset', config, dataset, 3),

    // levelColors : string[]
    // colors of indicator, from lower to upper, in RGB format
    levelColors: kvLookup('levelColors', config, dataset, ["#a9d70b", "#f9c802", "#ff0000"], 'array', ','),

    // startAnimationTime : int
    // length of initial animation
    startAnimationTime: kvLookup('startAnimationTime', config, dataset, 700),

    // startAnimationType : string
    // type of initial animation (linear, >, <,  <>, bounce)
    startAnimationType: kvLookup('startAnimationType', config, dataset, '>'),

    // refreshAnimationTime : int
    // length of refresh animation
    refreshAnimationTime: kvLookup('refreshAnimationTime', config, dataset, 700),

    // refreshAnimationType : string
    // type of refresh animation (linear, >, <,  <>, bounce)
    refreshAnimationType: kvLookup('refreshAnimationType', config, dataset, '>'),

    // donutStartAngle : int
    // angle to start from when in donut mode
    donutStartAngle: kvLookup('donutStartAngle', config, dataset, 90),

    // valueMinFontSize : int
    // absolute minimum font size for the value
    valueMinFontSize: kvLookup('valueMinFontSize', config, dataset, 16),

    // labelMinFontSize
    // absolute minimum font size for the label
    labelMinFontSize: kvLookup('labelMinFontSize', config, dataset, 10),

    // minLabelMinFontSize
    // absolute minimum font size for the minimum label
    minLabelMinFontSize: kvLookup('minLabelMinFontSize', config, dataset, 10),

    // maxLabelMinFontSize
    // absolute minimum font size for the maximum label
    maxLabelMinFontSize: kvLookup('maxLabelMinFontSize', config, dataset, 10),

    // hideValue : bool
    // hide value text
    hideValue: kvLookup('hideValue', config, dataset, false),

    // hideMinMax : bool
    // hide min and max values
    hideMinMax: kvLookup('hideMinMax', config, dataset, false),

    // showInnerShadow : bool
    // show inner shadow
    showInnerShadow: kvLookup('showInnerShadow', config, dataset, false),

    // humanFriendly : bool
    // convert large numbers for min, max, value to human friendly (e.g. 1234567 -> 1.23M)
    humanFriendly: kvLookup('humanFriendly', config, dataset, false),

    // noGradient : bool
    // whether to use gradual color change for value, or sector-based
    noGradient: kvLookup('noGradient', config, dataset, false),

    // donut : bool
    // show full donut gauge
    donut: kvLookup('donut', config, dataset, false),

    // relativeGaugeSize : bool
    // whether gauge size should follow changes in container element size
    relativeGaugeSize: kvLookup('relativeGaugeSize', config, dataset, false),

    // counter : bool
    // animate level number change
    counter: kvLookup('counter', config, dataset, false),

    // decimals : int
    // number of digits after floating point
    decimals: kvLookup('decimals', config, dataset, 0),

    // customSectors : [] of objects
    // number of digits after floating point
    customSectors: kvLookup('customSectors', config, dataset, []),

    // formatNumber: boolean
    // formats numbers with commas where appropriate
    formatNumber: kvLookup('formatNumber', config, dataset, false),

    // pointer : bool
    // show value pointer
    pointer: kvLookup('pointer', config, dataset, false),

    // pointerOptions : object
    // define pointer look
    pointerOptions: kvLookup('pointerOptions', config, dataset, [])
  };

  // variables
  var
    canvasW,
    canvasH,
    widgetW,
    widgetH,
    aspect,
    dx,
    dy,
    valueFontSize,
    valueX,
    valueY,
    labelFontSize,
    labelX,
    labelY,
    minFontSize,
    minX,
    minY,
    maxFontSize,
    maxX,
    maxY;

  // overflow values
  if (obj.config.value > obj.config.max) obj.config.value = obj.config.max;
  if (obj.config.value < obj.config.min) obj.config.value = obj.config.min;
  obj.originalValue = kvLookup('value', config, dataset, -1, 'float');

  // create canvas
  if (obj.config.id !== null && (document.getElementById(obj.config.id)) !== null) {
    obj.canvas = Raphael(obj.config.id, "100%", "100%");
  } else if (obj.config.parentNode !== null) {
    obj.canvas = Raphael(obj.config.parentNode, "100%", "100%");
  }

  // canvas dimensions
  if (obj.config.relativeGaugeSize === true) {
    if (obj.config.donut === true) {
      obj.canvas.setViewBox(0, 0, 200, 200, true);
      canvasW = 200;
      canvasH = 200;
    } else {
      obj.canvas.setViewBox(0, 0, 200, 100, true);
      canvasW = 200;
      canvasH = 100;
    }
  } else if (obj.config.width !== null && obj.config.height !== null) {
    canvasW = obj.config.width;
    canvasH = obj.config.height;
  } else if (obj.config.parentNode !== null) {
    obj.canvas.setViewBox(0, 0, 200, 100, true);
    canvasW = 200;
    canvasH = 100;
  } else {
    canvasW = getStyle(document.getElementById(obj.config.id), "width").slice(0, -2) * 1;
    canvasH = getStyle(document.getElementById(obj.config.id), "height").slice(0, -2) * 1;
  }

  // widget dimensions
  if (obj.config.donut === true) {
    if (canvasW > canvasH) { // landscape
      widgetH = canvasH;
      widgetW = widgetH;
      // width less than height
    } else if (canvasW < canvasH) { // portrait
      widgetW = canvasW;
      widgetH = widgetW;
    } else { // square
      widgetW = canvasW;
      widgetH = widgetW;
    }

    // delta
    dx = (canvasW - widgetW) / 2;
    dy = (canvasH - widgetH) / 2;

    // value
    valueFontSize = ((widgetH / 6.4) > 16) ? (widgetH / 5.4) : 18;
    valueX = dx + widgetW / 2;
    if (obj.config.label !== '') {
      valueY = dy + widgetH / 1.85;
    } else {
      valueY = dy + widgetH / 1.7;
    }

    // label
    labelFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
    labelX = dx + widgetW / 2;
    labelY = valueY + labelFontSize;

    // min
    minFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
    minX = dx + (widgetW / 10) + (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
    minY = labelY;

    // max
    maxFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
    maxX = dx + widgetW - (widgetW / 10) - (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
    maxY = labelY;
  } else {
    if (canvasW > canvasH) { // landscape
      widgetH = canvasH;
      widgetW = widgetH * 2;
      if (widgetW > canvasW) { //if width doesn't fit, rescale both
        aspect = widgetW / canvasW;
        widgetW = widgetW / aspect;
        widgetH = widgetH / aspect;
      }
    } else if (canvasW < canvasH) { // portrait
      widgetW = canvasW;
      widgetH = widgetW / 2;
    } else { // square
      widgetW = canvasW;
      widgetH = widgetW * 0.5;
    }

    // delta
    dx = (canvasW - widgetW) / 2;
    dy = (canvasH - widgetH) / 2;

    // value
    valueFontSize = ((widgetH / 6.5) > obj.config.valueMinFontSize) ? (widgetH / 6.5) : obj.config.valueMinFontSize;
    valueX = dx + widgetW / 2;
    valueY = dy + widgetH / 1.275;

    // label
    labelFontSize = ((widgetH / 16) > obj.config.labelMinFontSize) ? (widgetH / 16) : obj.config.labelMinFontSize;
    labelX = dx + widgetW / 2;
    labelY = valueY + valueFontSize / 2 + 5;

    // min
    minFontSize = ((widgetH / 16) > obj.config.minLabelMinFontSize) ? (widgetH / 16) : obj.config.minLabelMinFontSize;
    minX = dx + (widgetW / 10) + (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
    minY = labelY;

    // max
    maxFontSize = ((widgetH / 16) > obj.config.maxLabelMinFontSize) ? (widgetH / 16) : obj.config.maxLabelMinFontSize;
    maxX = dx + widgetW - (widgetW / 10) - (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2;
    maxY = labelY;
  }

  // parameters
  obj.params = {
    canvasW: canvasW,
    canvasH: canvasH,
    widgetW: widgetW,
    widgetH: widgetH,
    dx: dx,
    dy: dy,
    valueFontSize: valueFontSize,
    valueX: valueX,
    valueY: valueY,
    labelFontSize: labelFontSize,
    labelX: labelX,
    labelY: labelY,
    minFontSize: minFontSize,
    minX: minX,
    minY: minY,
    maxFontSize: maxFontSize,
    maxX: maxX,
    maxY: maxY
  };

  // var clear
  canvasW, canvasH, widgetW, widgetH, aspect, dx, dy, valueFontSize, valueX, valueY, labelFontSize, labelX, labelY, minFontSize, minX, minY, maxFontSize, maxX, maxY = null;

  // pki - custom attribute for generating gauge paths
  obj.canvas.customAttributes.pki = function(value, min, max, w, h, dx, dy, gws, donut, reverse) {

    var alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, path;

    if (donut) {
      alpha = (1 - 2 * (value - min) / (max - min)) * Math.PI;
      Ro = w / 2 - w / 30;
      Ri = Ro - w / 6.666666666666667 * gws;

      Cx = w / 2 + dx;
      Cy = h / 2 + dy;

      Xo = Cx + Ro * Math.cos(alpha);
      Yo = Cy - Ro * Math.sin(alpha);
      Xi = Cx + Ri * Math.cos(alpha);
      Yi = Cy - Ri * Math.sin(alpha);

      path = "M" + (Cx - Ri) + "," + Cy + " ";
      path += "L" + (Cx - Ro) + "," + Cy + " ";
      if (value > ((max - min) / 2)) {
        path += "A" + Ro + "," + Ro + " 0 0 1 " + (Cx + Ro) + "," + Cy + " ";
      }
      path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
      path += "L" + Xi + "," + Yi + " ";
      if (value > ((max - min) / 2)) {
        path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx + Ri) + "," + Cy + " ";
      }
      path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
      path += "Z ";

      return {
        path: path
      };
    } else {
      alpha = (1 - (value - min) / (max - min)) * Math.PI;
      Ro = w / 2 - w / 10;
      Ri = Ro - w / 6.666666666666667 * gws;

      Cx = w / 2 + dx;
      Cy = h / 1.25 + dy;

      // Xo = w / 2 + dx + Ro * Math.cos(alpha);
      // Yo = h - (h - Cy) - Ro * Math.sin(alpha);
      // Xi = w / 2 + dx + Ri * Math.cos(alpha);
      // Yi = h - (h - Cy) - Ri * Math.sin(alpha);

      Xo = Cx + Ro * Math.cos(alpha);
      Yo = Cy - Ro * Math.sin(alpha);
      Xi = Cx + Ri * Math.cos(alpha);
      Yi = Cy - Ri * Math.sin(alpha);

      path = "M" + (Cx - Ri) + "," + Cy + " ";
      path += "L" + (Cx - Ro) + "," + Cy + " ";
      path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
      path += "L" + Xi + "," + Yi + " ";
      path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
      path += "Z ";

      return {
        path: path
      };
    }

    // var clear
    alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, path = null;
  };

  // ndl - custom attribute for generating needle path
  obj.canvas.customAttributes.ndl = function(value, min, max, w, h, dx, dy, gws, donut) {

    var dlt = w * 3.5 / 100;
    var dlb = w / 15;
    var dw = w / 100;

    if (obj.config.pointerOptions.toplength != null && obj.config.pointerOptions.toplength != undefined) dlt = obj.config.pointerOptions.toplength;
    if (obj.config.pointerOptions.bottomlength != null && obj.config.pointerOptions.bottomlength != undefined) dlb = obj.config.pointerOptions.bottomlength;
    if (obj.config.pointerOptions.bottomwidth != null && obj.config.pointerOptions.bottomwidth != undefined) dw = obj.config.pointerOptions.bottomwidth;

    var alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, Xc, Yc, Xz, Yz, Xa, Ya, Xb, Yb, path;

    if (donut) {

      alpha = (1 - 2 * (value - min) / (max - min)) * Math.PI;
      Ro = w / 2 - w / 30;
      Ri = Ro - w / 6.666666666666667 * gws;

      Cx = w / 2 + dx;
      Cy = h / 2 + dy;

      Xo = w / 2 + dx + Ro * Math.cos(alpha);
      Yo = h - (h - Cy) - Ro * Math.sin(alpha);
      Xi = w / 2 + dx + Ri * Math.cos(alpha);
      Yi = h - (h - Cy) - Ri * Math.sin(alpha);

      Xc = Xo + dlt * Math.cos(alpha);
      Yc = Yo - dlt * Math.sin(alpha);
      Xz = Xi - dlb * Math.cos(alpha);
      Yz = Yi + dlb * Math.sin(alpha);

      Xa = Xz + dw * Math.sin(alpha);
      Ya = Yz + dw * Math.cos(alpha);
      Xb = Xz - dw * Math.sin(alpha);
      Yb = Yz - dw * Math.cos(alpha);

      path = 'M' + Xa + ',' + Ya + ' ';
      path += 'L' + Xb + ',' + Yb + ' ';
      path += 'L' + Xc + ',' + Yc + ' ';
      path += 'Z ';

      return {
        path: path
      };

    } else {
      alpha = (1 - (value - min) / (max - min)) * Math.PI;
      Ro = w / 2 - w / 10;
      Ri = Ro - w / 6.666666666666667 * gws;

      Cx = w / 2 + dx;
      Cy = h / 1.25 + dy;

      Xo = w / 2 + dx + Ro * Math.cos(alpha);
      Yo = h - (h - Cy) - Ro * Math.sin(alpha);
      Xi = w / 2 + dx + Ri * Math.cos(alpha);
      Yi = h - (h - Cy) - Ri * Math.sin(alpha);

      Xc = Xo + dlt * Math.cos(alpha);
      Yc = Yo - dlt * Math.sin(alpha);
      Xz = Xi - dlb * Math.cos(alpha);
      Yz = Yi + dlb * Math.sin(alpha);

      Xa = Xz + dw * Math.sin(alpha);
      Ya = Yz + dw * Math.cos(alpha);
      Xb = Xz - dw * Math.sin(alpha);
      Yb = Yz - dw * Math.cos(alpha);

      path = 'M' + Xa + ',' + Ya + ' ';
      path += 'L' + Xb + ',' + Yb + ' ';
      path += 'L' + Xc + ',' + Yc + ' ';
      path += 'Z ';

      return {
        path: path
      };
    }

    // var clear
    alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, Xc, Yc, Xz, Yz, Xa, Ya, Xb, Yb, path = null;
  };

  // gauge
  obj.gauge = obj.canvas.path().attr({
    "stroke": "none",
    "fill": obj.config.gaugeColor,
    pki: [
      obj.config.max,
      obj.config.min,
      obj.config.max,
      obj.params.widgetW,
      obj.params.widgetH,
      obj.params.dx,
      obj.params.dy,
      obj.config.gaugeWidthScale,
      obj.config.donut,
      obj.config.reverse
    ]
  });

  // level
  obj.level = obj.canvas.path().attr({
    "stroke": "none",
    "fill": getColor(obj.config.value, (obj.config.value - obj.config.min) / (obj.config.max - obj.config.min), obj.config.levelColors, obj.config.noGradient, obj.config.customSectors),
    pki: [
      obj.config.min,
      obj.config.min,
      obj.config.max,
      obj.params.widgetW,
      obj.params.widgetH,
      obj.params.dx,
      obj.params.dy,
      obj.config.gaugeWidthScale,
      obj.config.donut,
      obj.config.reverse
    ]
  });
  if (obj.config.donut) {
    obj.level.transform("r" + obj.config.donutStartAngle + ", " + (obj.params.widgetW / 2 + obj.params.dx) + ", " + (obj.params.widgetH / 2 + obj.params.dy));
  }

  if (obj.config.pointer) {
    // needle
    obj.needle = obj.canvas.path().attr({
      "stroke": (obj.config.pointerOptions.stroke !== null && obj.config.pointerOptions.stroke !== undefined) ? obj.config.pointerOptions.stroke : "none",
      "stroke-width": (obj.config.pointerOptions.stroke_width !== null && obj.config.pointerOptions.stroke_width !== undefined) ? obj.config.pointerOptions.stroke_width : 0,
      "stroke-linecap": (obj.config.pointerOptions.stroke_linecap !== null && obj.config.pointerOptions.stroke_linecap !== undefined) ? obj.config.pointerOptions.stroke_linecap : "square",
      "fill": (obj.config.pointerOptions.color !== null && obj.config.pointerOptions.color !== undefined) ? obj.config.pointerOptions.color : "#000000",
      ndl: [
        obj.config.min,
        obj.config.min,
        obj.config.max,
        obj.params.widgetW,
        obj.params.widgetH,
        obj.params.dx,
        obj.params.dy,
        obj.config.gaugeWidthScale,
        obj.config.donut
      ]
    });

    if (obj.config.donut) {
      obj.needle.transform("r" + obj.config.donutStartAngle + ", " + (obj.params.widgetW / 2 + obj.params.dx) + ", " + (obj.params.widgetH / 2 + obj.params.dy));
    }
  }

  // value
  obj.txtValue = obj.canvas.text(obj.params.valueX, obj.params.valueY, 0);
  obj.txtValue.attr({
    "font-size": obj.params.valueFontSize,
    "font-weight": "bold",
    "font-family": obj.config.valueFontFamily,
    "fill": obj.config.valueFontColor,
    "fill-opacity": "0"
  });
  setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);

  // label
  obj.txtLabel = obj.canvas.text(obj.params.labelX, obj.params.labelY, obj.config.label);
  obj.txtLabel.attr({
    "font-size": obj.params.labelFontSize,
    "font-weight": "normal",
    "font-family": "Arial",
    "fill": obj.config.labelFontColor,
    "fill-opacity": "0"
  });
  setDy(obj.txtLabel, obj.params.labelFontSize, obj.params.labelY);

  // min
  var min = obj.config.min;
  if (obj.config.reverse) {
    min = obj.config.max;
  }

  obj.txtMinimum = min;
  if (obj.config.minTxt) {
    obj.txtMinimum = obj.config.minTxt;
  } else if (obj.config.humanFriendly) {
    obj.txtMinimum = humanFriendlyNumber(min, obj.config.humanFriendlyDecimal);
  } else if (obj.config.formatNumber) {
    obj.txtMinimum = formatNumber(min);
  }
  obj.txtMin = obj.canvas.text(obj.params.minX, obj.params.minY, obj.txtMinimum);
  obj.txtMin.attr({
    "font-size": obj.params.minFontSize,
    "font-weight": "normal",
    "font-family": "Arial",
    "fill": obj.config.labelFontColor,
    "fill-opacity": (obj.config.hideMinMax || obj.config.donut) ? "0" : "1"
  });
  setDy(obj.txtMin, obj.params.minFontSize, obj.params.minY);

  // max
  var max = obj.config.max;
  if (obj.config.reverse) {
    max = obj.config.min;
  }
  obj.txtMaximum = max;
  if (obj.config.maxTxt) {
    obj.txtMaximum = obj.config.maxTxt;
  } else if (obj.config.humanFriendly) {
    obj.txtMaximum = humanFriendlyNumber(max, obj.config.humanFriendlyDecimal);
  } else if (obj.config.formatNumber) {
    obj.txtMaximum = formatNumber(max);
  }
  obj.txtMax = obj.canvas.text(obj.params.maxX, obj.params.maxY, obj.txtMaximum);
  obj.txtMax.attr({
    "font-size": obj.params.maxFontSize,
    "font-weight": "normal",
    "font-family": "Arial",
    "fill": obj.config.labelFontColor,
    "fill-opacity": (obj.config.hideMinMax || obj.config.donut) ? "0" : "1"
  });
  setDy(obj.txtMax, obj.params.maxFontSize, obj.params.maxY);

  var defs = obj.canvas.canvas.childNodes[1];
  var svg = "http://www.w3.org/2000/svg";

  if (ie !== 'undefined' && ie < 9) {
    // VML mode - no SVG & SVG filter support
  } else if (ie !== 'undefined') {
    onCreateElementNsReady(function() {
      obj.generateShadow(svg, defs);
    });
  } else {
    obj.generateShadow(svg, defs);
  }

  // var clear
  defs, svg = null;

  // set value to display
  if (obj.config.textRenderer) {
    obj.originalValue = obj.config.textRenderer(obj.originalValue);
  } else if (obj.config.humanFriendly) {
    obj.originalValue = humanFriendlyNumber(obj.originalValue, obj.config.humanFriendlyDecimal) + obj.config.symbol;
  } else if (obj.config.formatNumber) {
    obj.originalValue = formatNumber(obj.originalValue) + obj.config.symbol;
  } else {
    obj.originalValue = (obj.originalValue * 1).toFixed(obj.config.decimals) + obj.config.symbol;
  }

  if (obj.config.counter === true) {
    //on each animation frame
    eve.on("raphael.anim.frame." + (obj.level.id), function() {
      var currentValue = obj.level.attr("pki")[0];
      if (obj.config.reverse) {
        currentValue = (obj.config.max * 1) + (obj.config.min * 1) - (obj.level.attr("pki")[0] * 1);
      }
      if (obj.config.textRenderer) {
        obj.txtValue.attr("text", obj.config.textRenderer(Math.floor(currentValue)));
      } else if (obj.config.humanFriendly) {
        obj.txtValue.attr("text", humanFriendlyNumber(Math.floor(currentValue), obj.config.humanFriendlyDecimal) + obj.config.symbol);
      } else if (obj.config.formatNumber) {
        obj.txtValue.attr("text", formatNumber(Math.floor(currentValue)) + obj.config.symbol);
      } else {
        obj.txtValue.attr("text", (currentValue * 1).toFixed(obj.config.decimals) + obj.config.symbol);
      }
      setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
      currentValue = null;
    });
    //on animation end
    eve.on("raphael.anim.finish." + (obj.level.id), function() {
      obj.txtValue.attr({
        "text": obj.originalValue
      });
      setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
    });
  } else {
    //on animation start
    eve.on("raphael.anim.start." + (obj.level.id), function() {
      obj.txtValue.attr({
        "text": obj.originalValue
      });
      setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
    });
  }

  // animate gauge level, value & label
  var rvl = obj.config.value;
  if (obj.config.reverse) {
    rvl = (obj.config.max * 1) + (obj.config.min * 1) - (obj.config.value * 1);
  }
  obj.level.animate({
    pki: [
      rvl,
      obj.config.min,
      obj.config.max,
      obj.params.widgetW,
      obj.params.widgetH,
      obj.params.dx,
      obj.params.dy,
      obj.config.gaugeWidthScale,
      obj.config.donut,
      obj.config.reverse
    ]
  }, obj.config.startAnimationTime, obj.config.startAnimationType, obj.config.onAnimationEnd);

  if (obj.config.pointer) {
    obj.needle.animate({
      ndl: [
        rvl,
        obj.config.min,
        obj.config.max,
        obj.params.widgetW,
        obj.params.widgetH,
        obj.params.dx,
        obj.params.dy,
        obj.config.gaugeWidthScale,
        obj.config.donut
      ]
    }, obj.config.startAnimationTime, obj.config.startAnimationType);
  }

  obj.txtValue.animate({
    "fill-opacity": (obj.config.hideValue) ? "0" : "1"
  }, obj.config.startAnimationTime, obj.config.startAnimationType);
  obj.txtLabel.animate({
    "fill-opacity": "1"
  }, obj.config.startAnimationTime, obj.config.startAnimationType);
};

/** Refresh gauge level */
JustGage.prototype.refresh = function(val, max) {

  var obj = this;
  var displayVal, color, max = max || null;

  // set new max
  if (max !== null) {
    obj.config.max = max;
    // TODO: update customSectors

    obj.txtMaximum = obj.config.max;
    if (obj.config.maxTxt) {
      obj.txtMaximum = obj.config.maxTxt;
    } else if (obj.config.humanFriendly) {
      obj.txtMaximum = humanFriendlyNumber(obj.config.max, obj.config.humanFriendlyDecimal);
    } else if (obj.config.formatNumber) {
      obj.txtMaximum = formatNumber(obj.config.max);
    }
    if (!obj.config.reverse) {
      obj.txtMax.attr({
        "text": obj.txtMaximum
      });
      setDy(obj.txtMax, obj.params.maxFontSize, obj.params.maxY);
    } else {
      obj.txtMin.attr({
        "text": obj.txtMaximum
      });
      obj.txtMax.attr({
        "text": obj.txtMinimum
      });
      setDy(obj.txtMin, obj.params.minFontSize, obj.params.minY);
      setDy(obj.txtMax, obj.params.minFontSize, obj.params.minY);
    }
  }

  // overflow values
  displayVal = val;
  if ((val * 1) > (obj.config.max * 1)) {
    val = (obj.config.max * 1);
  }
  if ((val * 1) < (obj.config.min * 1)) {
    val = (obj.config.min * 1);
  }

  color = getColor(val, (val - obj.config.min) / (obj.config.max - obj.config.min), obj.config.levelColors, obj.config.noGradient, obj.config.customSectors);

  if (obj.config.textRenderer) {
    displayVal = obj.config.textRenderer(displayVal);
  } else if (obj.config.humanFriendly) {
    displayVal = humanFriendlyNumber(displayVal, obj.config.humanFriendlyDecimal) + obj.config.symbol;
  } else if (obj.config.formatNumber) {
    displayVal = formatNumber((displayVal * 1).toFixed(obj.config.decimals)) + obj.config.symbol;
  } else {
    displayVal = (displayVal * 1).toFixed(obj.config.decimals) + obj.config.symbol;
  }
  obj.originalValue = displayVal;
  obj.config.value = val * 1;

  if (!obj.config.counter) {
    obj.txtValue.attr({
      "text": displayVal
    });
    setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
  }

  var rvl = obj.config.value;
  if (obj.config.reverse) {
    rvl = (obj.config.max * 1) + (obj.config.min * 1) - (obj.config.value * 1);
  }

  obj.level.animate({
    pki: [
      rvl,
      obj.config.min,
      obj.config.max,
      obj.params.widgetW,
      obj.params.widgetH,
      obj.params.dx,
      obj.params.dy,
      obj.config.gaugeWidthScale,
      obj.config.donut,
      obj.config.reverse
    ],
    "fill": color
  }, obj.config.refreshAnimationTime, obj.config.refreshAnimationType, obj.config.onAnimationEnd);

  if (obj.config.pointer) {
    obj.needle.animate({
      ndl: [
        rvl,
        obj.config.min,
        obj.config.max,
        obj.params.widgetW,
        obj.params.widgetH,
        obj.params.dx,
        obj.params.dy,
        obj.config.gaugeWidthScale,
        obj.config.donut
      ]
    }, obj.config.refreshAnimationTime, obj.config.refreshAnimationType);
  }

  // var clear
  obj, displayVal, color, max = null;
};

/** Destroy gauge object */
JustGage.prototype.destroy = function() {
  document.getElementById(this.config.id).innerHTML = '';
};

/** Generate shadow */
JustGage.prototype.generateShadow = function(svg, defs) {

  var obj = this;
  var sid = "inner-shadow-" + obj.config.id;
  var gaussFilter, feOffset, feGaussianBlur, feComposite1, feFlood, feComposite2, feComposite3;

  // FILTER
  gaussFilter = document.createElementNS(svg, "filter");
  gaussFilter.setAttribute("id", sid);
  defs.appendChild(gaussFilter);

  // offset
  feOffset = document.createElementNS(svg, "feOffset");
  feOffset.setAttribute("dx", 0);
  feOffset.setAttribute("dy", obj.config.shadowVerticalOffset);
  gaussFilter.appendChild(feOffset);

  // blur
  feGaussianBlur = document.createElementNS(svg, "feGaussianBlur");
  feGaussianBlur.setAttribute("result", "offset-blur");
  feGaussianBlur.setAttribute("stdDeviation", obj.config.shadowSize);
  gaussFilter.appendChild(feGaussianBlur);

  // composite 1
  feComposite1 = document.createElementNS(svg, "feComposite");
  feComposite1.setAttribute("operator", "out");
  feComposite1.setAttribute("in", "SourceGraphic");
  feComposite1.setAttribute("in2", "offset-blur");
  feComposite1.setAttribute("result", "inverse");
  gaussFilter.appendChild(feComposite1);

  // flood
  feFlood = document.createElementNS(svg, "feFlood");
  feFlood.setAttribute("flood-color", "black");
  feFlood.setAttribute("flood-opacity", obj.config.shadowOpacity);
  feFlood.setAttribute("result", "color");
  gaussFilter.appendChild(feFlood);

  // composite 2
  feComposite2 = document.createElementNS(svg, "feComposite");
  feComposite2.setAttribute("operator", "in");
  feComposite2.setAttribute("in", "color");
  feComposite2.setAttribute("in2", "inverse");
  feComposite2.setAttribute("result", "shadow");
  gaussFilter.appendChild(feComposite2);

  // composite 3
  feComposite3 = document.createElementNS(svg, "feComposite");
  feComposite3.setAttribute("operator", "over");
  feComposite3.setAttribute("in", "shadow");
  feComposite3.setAttribute("in2", "SourceGraphic");
  gaussFilter.appendChild(feComposite3);

  // set shadow
  if (obj.config.showInnerShadow) {
    obj.canvas.canvas.childNodes[2].setAttribute("filter", "url(" + window.location.pathname + "#" + sid + ")");
    obj.canvas.canvas.childNodes[3].setAttribute("filter", "url(" + window.location.pathname + "#" + sid + ")");
  }

  // var clear
  gaussFilter, feOffset, feGaussianBlur, feComposite1, feFlood, feComposite2, feComposite3 = null;
};

//
// tiny helper function to lookup value of a key from two hash tables
// if none found, return defaultvalue
//
// key: string
// tablea: object
// tableb: DOMStringMap|object
// defval: string|integer|float|null
// datatype: return datatype
// delimiter: delimiter to be used in conjunction with datatype formatting
//
function kvLookup(key, tablea, tableb, defval, datatype, delimiter) {
  var val = defval;
  var canConvert = false;
  if (!(key === null || key === undefined)) {
    if (tableb !== null && tableb !== undefined && typeof tableb === "object" && key in tableb) {
      val = tableb[key];
      canConvert = true;
    } else if (tablea !== null && tablea !== undefined && typeof tablea === "object" && key in tablea) {
      val = tablea[key];
      canConvert = true;
    } else {
      val = defval;
    }
    if (canConvert === true) {
      if (datatype !== null && datatype !== undefined) {
        switch (datatype) {
          case 'int':
            val = parseInt(val, 10);
            break;
          case 'float':
            val = parseFloat(val);
            break;
          default:
            break;
        }
      }
    }
  }
  return val;
};

/** Get color for value */
function getColor(val, pct, col, noGradient, custSec) {

  var no, inc, colors, percentage, rval, gval, bval, lower, upper, range, rangePct, pctLower, pctUpper, color;
  var noGradient = noGradient || custSec.length > 0;

  if (custSec.length > 0) {
    if (custSec.percents === true) val = pct * 100;
    for (var i = 0; i < custSec.ranges.length; i++) {
      if (val >= custSec.ranges[i].lo && val <= custSec.ranges[i].hi) {
        return custSec.ranges[i].color;
      }
    }
  }

  no = col.length;
  if (no === 1) return col[0];
  inc = (noGradient) ? (1 / no) : (1 / (no - 1));
  colors = [];
  for (i = 0; i < col.length; i++) {
    percentage = (noGradient) ? (inc * (i + 1)) : (inc * i);
    rval = parseInt((cutHex(col[i])).substring(0, 2), 16);
    gval = parseInt((cutHex(col[i])).substring(2, 4), 16);
    bval = parseInt((cutHex(col[i])).substring(4, 6), 16);
    colors[i] = {
      pct: percentage,
      color: {
        r: rval,
        g: gval,
        b: bval
      }
    };
  }

  if (pct === 0) {
    return 'rgb(' + [colors[0].color.r, colors[0].color.g, colors[0].color.b].join(',') + ')';
  }

  for (var j = 0; j < colors.length; j++) {
    if (pct <= colors[j].pct) {
      if (noGradient) {
        return 'rgb(' + [colors[j].color.r, colors[j].color.g, colors[j].color.b].join(',') + ')';
      } else {
        lower = colors[j - 1];
        upper = colors[j];
        range = upper.pct - lower.pct;
        rangePct = (pct - lower.pct) / range;
        pctLower = 1 - rangePct;
        pctUpper = rangePct;
        color = {
          r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
          g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
          b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
        };
        return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
      }
    }
  }

}

/** Fix Raphael display:none tspan dy attribute bug */
function setDy(elem, fontSize, txtYpos) {
  if ((!ie || ie > 9) && elem.node.firstChild.attributes.dy) {
    elem.node.firstChild.attributes.dy.value = 0;
  }
}

/** Random integer  */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**  Cut hex  */
function cutHex(str) {
  return (str.charAt(0) == "#") ? str.substring(1, 7) : str;
}

/**  Human friendly number suffix - From: http://stackoverflow.com/questions/2692323/code-golf-friendly-number-abbreviator */
function humanFriendlyNumber(n, d) {
  var p, d2, i, s;

  p = Math.pow;
  d2 = p(10, d);
  i = 7;
  while (i) {
    s = p(10, i-- * 3);
    if (s <= n) {
      n = Math.round(n * d2 / s) / d2 + "KMGTPE" [i];
    }
  }
  return n;
}

/** Format numbers with commas - From: http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */
function formatNumber(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

/**  Get style  */
function getStyle(oElm, strCssRule) {
  var strValue = "";
  if (document.defaultView && document.defaultView.getComputedStyle) {
    strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
  } else if (oElm.currentStyle) {
    strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
      return p1.toUpperCase();
    });
    strValue = oElm.currentStyle[strCssRule];
  }
  return strValue;
}

/**  Create Element NS Ready  */
function onCreateElementNsReady(func) {
  if (document.createElementNS !== undefined) {
    func();
  } else {
    setTimeout(function() {
      onCreateElementNsReady(func);
    }, 100);
  }
}

/**  Get IE version  */
// ----------------------------------------------------------
// A short snippet for detecting versions of IE in JavaScript
// without resorting to user-agent sniffing
// ----------------------------------------------------------
// If you're not in IE (or IE version is less than 5) then:
// ie === undefined
// If you're in IE (>=5) then you can determine which version:
// ie === 7; // IE7
// Thus, to detect IE:
// if (ie) {}
// And to detect the version:
// ie === 6 // IE6
// ie > 7 // IE8, IE9 ...
// ie < 9 // Anything less than IE9
// ----------------------------------------------------------
// UPDATE: Now using Live NodeList idea from @jdalton
var ie = (function() {

  var undef,
    v = 3,
    div = document.createElement('div'),
    all = div.getElementsByTagName('i');

  while (
    div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
    all[0]
  );
  return v > 4 ? v : undef;
}());

// extend target object with second object
function extend(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i])
      continue;

    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key))
        out[key] = arguments[i][key];
    }
  }

  return out;
};