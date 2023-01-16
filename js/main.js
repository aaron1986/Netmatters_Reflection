function() {
    var i = t._watcher.get();
    if (ii(i)) {
      var n = t.getValue(),
        s = w(i, n);
      e.checked ? 0 > s && t.set(i.concat(n)) : s > -1 && t.set(i.slice(0, s).concat(i.slice(s + 1)))
    } else t.set(function() {
      var t = e.checked;
      return t && e.hasOwnProperty("_trueValue") ? e._trueValue : !t && e.hasOwnProperty("_falseValue") ? e._falseValue : t
    }())
  }