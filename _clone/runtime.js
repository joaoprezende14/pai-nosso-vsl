/* Clonador runtime */
(function () {
  if (window.__CLONADOR_RT__) return;
  var S = document.currentScript;
  if (!S) return;
  var ROOT = new URL('../', S.src).href;
  var ORIG = S.getAttribute('data-orig') || location.href;
  var MAP = {"https://liberada-para-voceqz.lovable.app/~flock.js":"~flock.js","https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap":"_c/78a6dede01-css2.css","https://liberada-para-voceqz.lovable.app/__l5e/events.270c78a44fc53e7b.js":"__l5e/events.270c78a44fc53e7b.js","https://liberada-para-voceqz.lovable.app/assets/styles-BaaRWicO.css":"assets/styles-BaaRWicO.css","https://liberada-para-voceqz.lovable.app/assets/routes-CBZrP5J_.js":"assets/routes-CBZrP5J_.js","https://liberada-para-voceqz.lovable.app/assets/index-CE1LLpPp.js":"assets/index-CE1LLpPp.js","https://fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7t1R-tQKr51.woff2":"_ext/fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7t1R-tQKr51.woff2","https://scripts.converteai.net/35a8e48b-8970-47ce-a60c-01b83717b2fd/players/6ad95cf833164b7b20966a2d/v4/player.js":"_ext/scripts.converteai.net/35a8e48b-8970-47ce-a60c-01b83717b2fd/players/6ad95cf833164b7b20966a2d/v4/player.js","https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js":"_ext/scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js","https://images.converteai.net/35a8e48b-8970-47ce-a60c-01b83717b2fd/players/6ad95cf833164b7b20966a2d/thumbnail.jpg":"_ext/images.converteai.net/35a8e48b-8970-47ce-a60c-01b83717b2fd/players/6ad95cf833164b7b20966a2d/thumbnail.jpg","https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap":"_c/d3eb038072-css2.css","https://m3u8.vturb.net/t-c+5N+qr.iTzJgFc590OuV.8hUxVjIa+S/35a8e48b-8970-47ce-a60c-01b83717b2fd/6ad95cb6e6ca7721fac8711e/main.m3u8":"_ext/m3u8.vturb.net/t-c+5N+qr.iTzJgFc590OuV.8hUxVjIa+S/35a8e48b-8970-47ce-a60c-01b83717b2fd/6ad95cb6e6ca7721fac8711e/main.m3u8","https://fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7t4R-tQKr51pE8.woff2":"_ext/fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7t4R-tQKr51pE8.woff2","https://fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7t6R-tQKr51pE8.woff2":"_ext/fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7t6R-tQKr51pE8.woff2","https://fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7txR-tQKr51pE8.woff2":"_ext/fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7txR-tQKr51pE8.woff2","https://fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7t7R-tQKr51pE8.woff2":"_ext/fonts.gstatic.com/s/nunitosans/v19/pe0TMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfGWVpNn64CL7U8upHZIbMV51Q42ptCp7t7R-tQKr51pE8.woff2","https://cdn.converteai.net/35a8e48b-8970-47ce-a60c-01b83717b2fd/6ad95cb6e6ca7721fac8711e/poster.jpg":"_ext/cdn.converteai.net/35a8e48b-8970-47ce-a60c-01b83717b2fd/6ad95cb6e6ca7721fac8711e/poster.jpg","https://cdn.converteai.net/1.mp4":"_ext/cdn.converteai.net/1.mp4","https://images.converteai.net/35a8e48b-8970-47ce-a60c-01b83717b2fd/players/6ad95cf833164b7b20966a2d/cover.jpg":"_ext/images.converteai.net/35a8e48b-8970-47ce-a60c-01b83717b2fd/players/6ad95cf833164b7b20966a2d/cover.jpg","https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwkT9mI1F55MKw.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwkT9mI1F55MKw.woff2","https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwAT9mI1F55MKw.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwAT9mI1F55MKw.woff2","https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwgT9mI1F55MKw.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwgT9mI1F55MKw.woff2","https://liberada-para-voceqz.lovable.app/assets/popup-oferta-Dx1Vvldn.png":"assets/popup-oferta-Dx1Vvldn.png","https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwsT9mI1F55MKw.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwsT9mI1F55MKw.woff2","https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwcT9mI1F55MKw.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwcT9mI1F55MKw.woff2","https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvvYwYZ8UA3J58.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvvYwYZ8UA3J58.woff2","https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwoT9mI1F55MKw.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwoT9mI1F55MKw.woff2","https://fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwQT9mI1F54.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCm3FwrK3iLTcvnUwQT9mI1F54.woff2","https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvmYwYZ8UA3J58.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvmYwYZ8UA3J58.woff2","https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvuYwYZ8UA3J58.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvuYwYZ8UA3J58.woff2","https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvtYwYZ8UA3J58.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvtYwYZ8UA3J58.woff2","https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvhYwYZ8UA3J58.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvhYwYZ8UA3J58.woff2","https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcviYwYZ8UA3.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcviYwYZ8UA3.woff2","https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvsYwYZ8UA3J58.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcvsYwYZ8UA3J58.woff2","https://liberada-para-voceqz.lovable.app/favicon.ico":"favicon.ico"};
  var POSTS = {"https://liberada-para-voceqz.lovable.app/__l5e/trackevents":"_c/post-73e743e949-trackevents.json"};
  var HEADS = {};
  var GUARD = /*CLONADOR_GUARD*/{"on":true,"ids":["2386932512117175"],"prefixes":[],"allow":["utmify","meta"]}/*/CLONADOR_GUARD*/;
  var FAMS = [["meta","connect\\.facebook\\.net|facebook\\.com\\/tr\\b|facebook\\.com\\/privacy_sandbox|\\/fbevents\\.js","i"],["google","googletagmanager\\.com|google-analytics\\.com|analytics\\.google\\.com|googleadservices\\.com|doubleclick\\.net|googlesyndication\\.com|\\.google\\.[a-z.]+\\/(ccm|rmkt|pagead|ads\\/ga-audiences)\\/|\\/gtag\\/js\\?|\\/gtm\\.js\\?id=GTM-","i"],["tiktok","analytics\\.tiktok\\.com|analytics-sg\\.tiktok\\.com|business-api\\.tiktok\\.com","i"],["twitter","ads-twitter\\.com|analytics\\.twitter\\.com|\\/\\/t\\.co\\/(1\\/)?i\\/adsct|ads-api\\.x\\.com","i"],["pinterest","pinimg\\.com\\/ct\\/|ct\\.pinterest\\.com","i"],["snap","sc-static\\.net\\/scevent|tr\\.snapchat\\.com|tr-shadow\\.snapchat\\.com","i"],["bing","bat\\.bing\\.com|bat\\.r\\.msn\\.com","i"],["reddit","redditstatic\\.com\\/ads|alb\\.reddit\\.com|pixel-config\\.reddit\\.com","i"],["kwai","kwai|kwaipros","i"],["taboola","taboola\\.com","i"],["outbrain","outbrain\\.com","i"],["clarity","clarity\\.ms","i"],["hotjar","hotjar\\.(com|io)","i"],["utmify","utmify","i"],["outros","bzr\\.openai\\.com|bzrcdn\\.openai\\.com|magnus\\.ms|adjust\\.com|adjust\\.net\\.in|appsflyer\\.com|onelink\\.me\\/.*pixel|amplitude\\.com|mixpanel\\.com|api\\.segment\\.io|cdn\\.segment\\.com|fullstory\\.com|posthog\\.com|heapanalytics\\.com|logrocket\\.(io|com)|lr-ingest|sentry\\.io|ingest\\.sentry|\\/\\/sentry\\.|datadoghq|browser-intake|newrelic\\.com|nr-data\\.net|onesignal\\.com|quantserve|scorecardresearch|criteo|adnxs|adsrvr|mc\\.yandex|yandex\\.ru\\/(metrika|watch)|plausible\\.io\\/api\\/event|stats\\.wp\\.com|pixel\\.wp\\.com|events\\.launchdarkly|cdn\\.mxpnl\\.com|smartlook|mouseflow|luckyorange|crazyegg","i"]].map(function (f) { return [f[0], new RegExp(f[1], f[2])]; });
  var TPATH = new RegExp("\\/gtm\\.js\\?id=GTM-|\\/gtag\\/js\\?id=|\\/g\\/collect\\?|\\/j\\/collect\\?|\\/r\\/collect\\?|\\/ccm\\/collect|\\/rmkt\\/collect|\\/pagead\\/(1p-)?(viewthrough)?conversion|\\/tr\\/?\\?id=\\d+&ev=|\\/signals\\/config\\/\\d+|\\/i18n\\/pixel\\/events\\.js", "i");
  var THOST = new RegExp("^(ev|evt|evtruck|events?|track(ing|er)?|collect(or)?|analytics|metrics|telemetry|stats|pixels?|logs?|logging|ingest|beacon|rum|sgtm)\\.", "i");
  var LOCAL = {};
  function index(m) {
    var by = {};
    for (var k in m) {
      var qi = k.indexOf('?'); var b = qi < 0 ? k : k.slice(0, qi);
      (by[b] = by[b] || []).push(k);
    }
    return by;
  }
  for (var k in MAP) LOCAL[MAP[k]] = 1;
  var BYPATH = index(MAP);
  var POSTBY = index(POSTS);
  var HEADBY = index(HEADS);
  window.__CLONADOR_RT__ = { root: ROOT, orig: ORIG, guard: GUARD, blocked: [] };

  // parâmetros que só servem para furar cache (ex.: ?_rsc= do Next.js, ?v=123): não mudam o conteúdo
  var VOLATILE = /^(_rsc|_|t|ts|_t|_ts|timestamp|cb|cachebust|cache_bust|nocache|rand|v|ver|version|dpl)$/i;
  function stripVolatile(u) {
    try {
      var x = new URL(u); var keep = [];
      x.searchParams.forEach(function (val, key) { if (!VOLATILE.test(key)) keep.push([key, val]); });
      keep.sort(function (a, c) { return a[0] < c[0] ? -1 : a[0] > c[0] ? 1 : 0; });
      x.search = '';
      for (var i = 0; i < keep.length; i++) x.searchParams.append(keep[i][0], keep[i][1]);
      return x.href;
    } catch (e) { return u; }
  }
  function lookupIn(m, by, abs, loose) {
    if (m[abs] != null) return m[abs];
    var qi = abs.indexOf('?'); var base = qi < 0 ? abs : abs.slice(0, qi);
    var list = by[base];
    if (!list) return null;
    var target = stripVolatile(abs);
    for (var i = 0; i < list.length; i++) if (stripVolatile(list[i]) === target) return m[list[i]];
    if (loose) return m[list[0]];
    return null;
  }
  // imagens: aceita outra variação da mesma imagem (outra largura do next/image, outro ?w=)
  function lookupImage(abs) {
    var hit = lookupIn(MAP, BYPATH, abs, false);
    if (hit != null) return hit;
    try {
      var x = new URL(abs);
      if (/\/_next\/image\/?$/.test(x.pathname) && x.searchParams.get('url')) {
        var want = x.searchParams.get('url'); var w = +x.searchParams.get('w') || 0;
        var list = BYPATH[x.origin + x.pathname] || []; var best = null; var bd = 1e9;
        for (var i = 0; i < list.length; i++) {
          var y = new URL(list[i]);
          if (y.searchParams.get('url') !== want) continue;
          var d = Math.abs((+y.searchParams.get('w') || 0) - w);
          if (d < bd) { bd = d; best = list[i]; }
        }
        if (best) return MAP[best];
        return lookupIn(MAP, BYPATH, new URL(want, abs).href, true);
      }
      if (/\.(png|jpe?g|gif|webp|avif|svg)$/i.test(x.pathname) || /[?&](w|width|h|height|q|quality|fit|format|fm|auto)=/.test(x.search)) return lookupIn(MAP, BYPATH, abs, true);
    } catch (e) {}
    return null;
  }

  // ---------- bloqueio de rastreamento do dono original
  function familyOf(u) { for (var i = 0; i < FAMS.length; i++) if (FAMS[i][1].test(u)) return FAMS[i][0]; return null; }
  function blocks(abs) {
    if (!GUARD.on || !/^https?:/i.test(abs)) return false;
    for (var i = 0; i < GUARD.prefixes.length; i++) if (abs.indexOf(GUARD.prefixes[i]) === 0) return true;
    var dec = abs; try { dec = decodeURIComponent(abs); } catch (e) {}
    for (var j = 0; j < GUARD.ids.length; j++) if (GUARD.ids[j] && dec.indexOf(GUARD.ids[j]) >= 0) return true;
    var fam = familyOf(abs) || (TPATH.test(abs) ? 'google' : null);
    if (fam) return GUARD.allow.indexOf(fam) < 0;
    try { var hn = new URL(abs).hostname; return hn !== location.hostname && THOST.test(hn) && GUARD.allow.indexOf('host:' + hn) < 0; } catch (e) { return false; }
  }
  function note(u) { try { var b = window.__CLONADOR_RT__.blocked; if (b.length < 200) b.push(String(u).slice(0, 300)); } catch (e) {} }
  var EMPTY_JS = 'data:text/javascript,';
  var EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

  function splitHash(s) { var i = s.indexOf('#'); return i < 0 ? [s, ''] : [s.slice(0, i), s.slice(i)]; }
  function localExists(abs) {
    if (abs.indexOf(ROOT) !== 0) return false;
    var rel = abs.slice(ROOT.length).split('?')[0];
    try { rel = decodeURIComponent(rel); } catch (e) {}
    if (rel === '' || rel.slice(-1) === '/') rel += 'index.html';
    // pastas que só existem no clone (CSS reescrito, espelhos de outros domínios, runtime)
    if (/^(_c|_ext|_clone)\//.test(rel)) return true;
    return !!LOCAL[rel];
  }
  function absOf(u) {
    var s = String(u).trim();
    var cur = new URL(splitHash(s)[0], document.baseURI).href;
    var orig = new URL(splitHash(s)[0], ORIG).href;
    return { cur: cur, orig: orig, hash: splitHash(s)[1] };
  }
  // kind: 'img' aceita variações da mesma imagem; 'block' devolve o substituto quando é rastreador
  function mapUrl(u, kind) {
    if (u == null) return u;
    var isObj = typeof u === 'object' && u instanceof URL;
    if (typeof u !== 'string' && !isObj) return u;
    var s = String(u).trim();
    if (!s || /^(data|blob|javascript|about|mailto|tel|chrome-extension):/i.test(s)) return u;
    if (s.indexOf('/__clonador/') >= 0) return u; // arquivos do editor do Clonador
    try {
      var a = absOf(s);
      if (kind && kind !== 'img' && (blocks(a.orig) || blocks(a.cur))) { note(a.orig); return kind; }
      if (localExists(a.cur)) return u;
      var look = kind === 'img' ? lookupImage : function (x) { return lookupIn(MAP, BYPATH, x, false); };
      var hit = look(a.orig);
      if (hit == null) hit = look(a.cur);
      if (hit != null) return ROOT + hit + a.hash;
      if (kind === 'img' && (blocks(a.orig) || blocks(a.cur))) { note(a.orig); return EMPTY_GIF; }
      if (new URL(a.cur).origin === location.origin) return a.orig + a.hash;
      return u;
    } catch (e) { return u; }
  }
  function mapSrcset(v) {
    if (typeof v !== 'string') return v;
    return v.split(/,(?=\s*\S)/).map(function (part) {
      var m = part.trim().split(/\s+/);
      m[0] = mapUrl(m[0], 'img');
      return m.join(' ');
    }).join(', ');
  }
  function mapCssText(t) {
    if (typeof t !== 'string' || t.indexOf('url(') < 0) return t;
    return t.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, function (m, q, ref) {
      var n = mapUrl(ref, 'img');
      return n === ref ? m : 'url("' + n + '")';
    });
  }
  function postHit(u) {
    try { var a = absOf(u); var h = lookupIn(POSTS, POSTBY, a.orig, false); if (h == null) h = lookupIn(POSTS, POSTBY, a.cur, false); return h; } catch (e) { return null; }
  }
  function trackerReq(u) { try { var a = absOf(u); return blocks(a.orig) || blocks(a.cur) ? a.orig : null; } catch (e) { return null; } }
  window.__clonadorMapUrl = mapUrl;

  // fetch e XHR
  var F = window.fetch;
  if (F) {
    window.fetch = function (input, init) {
      try {
        var isReq = input && typeof input === 'object' && !(input instanceof URL) && input.url;
        var url = isReq ? input.url : String(input);
        var method = String((init && init.method) || (isReq && input.method) || 'GET').toUpperCase();
        var t = trackerReq(url);
        if (t) { note(t); return Promise.resolve(new Response('{}', { status: 200, headers: { 'content-type': 'application/json' } })); }
        if (method === 'HEAD') {
          // sondagem de middleware do Next.js: devolve os cabeçalhos gravados na captura
          var hd = null; try { var ah = absOf(url); hd = lookupIn(HEADS, HEADBY, ah.orig, false); if (hd == null) hd = lookupIn(HEADS, HEADBY, ah.cur, false); } catch (e) {}
          if (hd != null) return Promise.resolve(new Response(null, { status: hd.status || 200, headers: hd.headers || {} }));
        }
        if (method !== 'GET' && method !== 'HEAD') {
          var ph = postHit(url);
          if (ph != null) return F.call(this, ROOT + ph, { method: 'GET', credentials: 'same-origin' });
        }
        if (isReq) { var n = mapUrl(input.url); if (n !== input.url) input = new Request(n, input); }
        else input = mapUrl(url);
      } catch (e) {}
      return F.call(this, input, init);
    };
  }
  var XO = XMLHttpRequest.prototype.open;
  var XS = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    this.__cl = null;
    try {
      var t = trackerReq(url);
      if (t) { note(t); this.__cl = 'get'; arguments[0] = 'GET'; arguments[1] = 'data:application/json,{}'; }
      else if (!/^(GET|HEAD)$/i.test(method || 'GET')) {
        var ph = postHit(url);
        if (ph != null) { this.__cl = 'get'; arguments[0] = 'GET'; arguments[1] = ROOT + ph; }
      }
      if (!this.__cl) arguments[1] = mapUrl(url);
    } catch (e) {}
    return XO.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (body) {
    if (this.__cl === 'get') return XS.call(this, null);
    return XS.apply(this, arguments);
  };
  if (navigator.sendBeacon) {
    var SB = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = function (url, data) {
      var t = trackerReq(url);
      if (t) { note(t); return true; }
      return SB(mapUrl(url), data);
    };
  }

  // propriedades src/href/srcset/poster
  function hook(proto, prop, fn) {
    try {
      var d = Object.getOwnPropertyDescriptor(proto, prop);
      if (!d || !d.set) return;
      Object.defineProperty(proto, prop, {
        configurable: true, enumerable: d.enumerable,
        get: d.get, set: function (v) { return d.set.call(this, fn(v)); }
      });
    } catch (e) {}
  }
  var asImg = function (v) { return mapUrl(v, 'img'); };
  hook(HTMLImageElement.prototype, 'src', asImg);
  hook(HTMLImageElement.prototype, 'srcset', mapSrcset);
  hook(HTMLSourceElement.prototype, 'src', function (v) { return mapUrl(v); });
  hook(HTMLSourceElement.prototype, 'srcset', mapSrcset);
  hook(HTMLScriptElement.prototype, 'src', function (v) { return mapUrl(v, EMPTY_JS); });
  hook(HTMLLinkElement.prototype, 'href', function (v) { return mapUrl(v, 'data:,'); });
  hook(HTMLIFrameElement.prototype, 'src', function (v) { var t = trackerReq(v); if (t) { note(t); return 'about:blank'; } return v; });
  hook(HTMLMediaElement.prototype, 'src', function (v) { return mapUrl(v); });
  hook(HTMLVideoElement.prototype, 'poster', asImg);

  var SA = Element.prototype.setAttribute;
  var TAGS = { IMG: 1, SOURCE: 1, SCRIPT: 1, LINK: 1, VIDEO: 1, AUDIO: 1, TRACK: 1, INPUT: 1, IMAGE: 1, USE: 1, IFRAME: 1 };
  function mapAttr(el, name, value) {
    var n = String(name).toLowerCase();
    if (n === 'style') return mapCssText(value);
    var tag = el.tagName.toUpperCase();
    if (!TAGS[tag]) return value;
    if (tag === 'IFRAME') { if (n === 'src') { var t = trackerReq(value); if (t) { note(t); return 'about:blank'; } } return value; }
    if (n === 'src' || n === 'poster' || (n === 'href' && tag !== 'A') || n === 'xlink:href') {
      if (tag === 'SCRIPT') return mapUrl(value, EMPTY_JS);
      if (tag === 'LINK') return mapUrl(value, 'data:,');
      if (tag === 'IMG' || n === 'poster' || tag === 'IMAGE') return mapUrl(value, 'img');
      return mapUrl(value);
    }
    if (n === 'srcset') return mapSrcset(value);
    return value;
  }
  Element.prototype.setAttribute = function (name, value) {
    try { value = mapAttr(this, name, value); } catch (e) {}
    return SA.call(this, name, value);
  };

  // conteúdo inserido via innerHTML / templates: corrige depois de entrar no DOM
  var ATTRS = ['src', 'srcset', 'poster', 'href', 'style'];
  function fix(el) {
    if (!el || el.nodeType !== 1 || el.hasAttribute('data-clonador-ui')) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      var v = el.getAttribute(a);
      var n = mapAttr(el, a, v);
      if (n !== v) SA.call(el, a, n);
    }
  }
  function fixTree(node) {
    if (!node || node.nodeType !== 1) return;
    fix(node);
    if (node.querySelectorAll) {
      var list = node.querySelectorAll('img,source,video,audio,link,script,image,use,iframe,[style*="url("]');
      for (var i = 0; i < list.length; i++) fix(list[i]);
    }
  }
  try {
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === 'attributes') fix(m.target);
        else for (var j = 0; j < m.addedNodes.length; j++) fixTree(m.addedNodes[j]);
      }
    }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ATTRS });
  } catch (e) {}
})();
