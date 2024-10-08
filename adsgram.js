!(function () {
  "use strict";
  try {
    if ("undefined" != typeof document) {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          '@charset "UTF-8";body{--adsgram-accent-text-color: var(--tg-theme-accent-text-color, #168acd);--adsgram-color-scheme: var(--tg-color-scheme, light);--adsgram-bg-color: var(--tg-theme-bg-color, #fff);--adsgram-button-color: var(--tg-theme-button-color, #40a7e3);--adsgram-button-text-color: var(--tg-theme-button-text-color, #fff);--adsgram-destructive-text-color: var( --tg-theme-destructive-text-color, #d14e4e );--adsgram-header-bg-color: var(--tg-theme-header-bg-color, #fff);--adsgram-hint-color: var(--tg-theme-hint-color, #999);--adsgram-link-color: var(--tg-theme-link-color, #168acd);--adsgram-secondary-bg-color: var(--tg-theme-secondary-bg-color, #f1f1f1);--adsgram-section-bg-color: var(--tg-theme-section-bg-color, #fff);--adsgram-section-header-text-color: var( --tg-theme-section-header-text-color, #168acd );--adsgram-subtitle-text-color: var(--tg-theme-subtitle-text-color, #999);--adsgram-text-color: var(--tg-theme-text-color, #000)}._banner_1jcal_1{position:fixed;top:0;left:0;width:100%;height:100%;overflow-y:scroll;display:flex;flex-direction:column;justify-content:space-between}._banner_1jcal_1 button{text-decoration:none;appearance:none;outline:none;box-shadow:none;background:none}._banner_1jcal_1 button:disabled{background:none}._banner_1jcal_1 *{max-width:none;font-size:0;margin:0;padding:0;box-sizing:content-box}._banner_1jcal_1::-webkit-scrollbar{display:none}._preview_1jcal_37{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between}._wrapper_1jcal_46{margin:28px 60px 0 0;display:flex;flex-direction:column;height:100%}._background_px36w_1{position:fixed;top:0;left:0;width:100%;height:100%}._preview_px36w_9{position:absolute;border-radius:8px}._preview_px36w_9:after{border-radius:8px}._dark_px36w_18{background:var(--adsgram-bg-color, rgb(15 15 15 / 100%));background-blend-mode:darken}._dark_px36w_18:after{content:"";position:absolute;inset:0;background-position:center;background-repeat:no-repeat;background-size:cover;background-image:url(https://telegram.org/img/tgme/pattern.svg);filter:invert(99%) sepia(2%) saturate(1%) hue-rotate(161deg) brightness(116%) contrast(73%);mix-blend-mode:overlay}._light_px36w_36{background-image:radial-gradient(64.13% 64.66% at 0% 0%,#d6d896,#d6d89600),radial-gradient(57.75% 64.84% at 100% 100%,#dbddbe,#dbddbe00),radial-gradient(49.87% 52.71% at 0% 100%,#78a389,#78a38900);background-color:#99ba92;background-blend-mode:lighten}._light_px36w_36:after{content:"";position:absolute;inset:0;background-position:center;background-repeat:no-repeat;background-size:cover;background-image:url(https://telegram.org/img/tgme/pattern.svg);filter:invert(33%) sepia(5%) saturate(0%) hue-rotate(164deg) brightness(99%) contrast(100%);mix-blend-mode:soft-light}._label_aphru_1{padding:0 8px;border-radius:12px;width:fit-content;position:relative;z-index:1;cursor:pointer}._label_aphru_1:before{content:"";position:absolute;z-index:-1;inset:0;border-radius:12px}._dark_aphru_18:before{opacity:.55;filter:contrast(140%);background-color:var(--adsgram-secondary-bg-color)}._light_aphru_24:before{background-color:#4a8e3a8a}._text_aphru_28{font-family:SF Pro,Roboto,sans-serif;font-size:13px;font-weight:500;line-height:23px;text-align:center;vertical-align:top;color:var(--adsgram-button-text-color)}._footer_1310a_1{display:flex;flex-direction:column;margin:20px 0 16px 60px;justify-content:end;gap:8px;align-items:center;flex:1 1 auto}._timer_dby7g_1{padding:0 8px;width:fit-content;position:relative;z-index:1}._timer_dby7g_1:before{content:"";position:absolute;z-index:-1;inset:0;border-radius:12px}._dark_dby7g_16:before{opacity:.55;filter:contrast(140%);background-color:var(--adsgram-secondary-bg-color)}._light_dby7g_22:before{background-color:#4a8e3a8a}._time_dby7g_1{font-family:SF Pro,Roboto,sans-serif;font-size:13px;font-weight:500;line-height:23px;text-align:center;vertical-align:top;color:var(--adsgram-button-text-color)}._post_8vnoc_1{position:relative;display:flex;animation-name:_show_8vnoc_1;animation-play-state:running;animation-duration:.1s;animation-fill-mode:forwards;animation-timing-function:ease-out}@keyframes _show_8vnoc_1{0%{opacity:0}to{opacity:1}}._channel_8vnoc_21{align-self:end;cursor:pointer;margin:0 4px 0 10px;width:40px;height:40px}._icon_8vnoc_29{width:40px;height:40px;border-radius:100%;object-fit:cover;background-color:var(--adsgram-secondary-bg-color)}._tail_8vnoc_37{width:6px;height:10px;align-self:end;display:flex;color:var(--adsgram-secondary-bg-color);z-index:1}._tail_8vnoc_37 svg{width:6px;height:10px}._message_8vnoc_51{display:flex;flex-direction:column;border-radius:18px 18px 18px 0;background-color:var(--adsgram-secondary-bg-color);box-shadow:0 1px 2px #00000029;width:100%}._image_8vnoc_60{object-fit:cover;border-radius:16px 16px 4px 4px;width:calc(100% - 4px);margin:2px 2px 0;aspect-ratio:1}._text_8vnoc_68{font-family:SF Pro,Roboto,sans-serif;margin:8px;padding:0;display:flex;flex-direction:column;gap:18px;font-size:15px;line-height:18px;width:calc(100% - 16px)}._title_8vnoc_80{font-family:SF Pro,Roboto,sans-serif;font-size:15px;line-height:18px;font-weight:500;letter-spacing:0;color:var(--adsgram-text-color);margin:0;padding:0}._description_8vnoc_91{color:var(--adsgram-text-color);font-weight:400;font-size:15px;line-height:18px}._footer_8vnoc_98{display:flex;justify-content:space-between}._name_8vnoc_103{transition:color .2s cubic-bezier(.2,0,0,1);color:var(--adsgram-hint-color);text-decoration:none;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;border:none;padding:0;cursor:default;background:none;font-family:SF Pro,Roboto,sans-serif;font-weight:400;font-size:15px;line-height:18px;text-align:left;word-break:break-word}._clickable_8vnoc_124{cursor:pointer;color:var(--adsgram-link-color)}._adlabel_8vnoc_129{color:var(--adsgram-subtitle-text-color);transform:translate(-2px,4px);font-size:12px;line-height:16px;white-space:nowrap;vertical-align:bottom;align-self:end}._button_1ktlg_1{display:inline-block;position:relative;margin:4px 0 0 60px;width:calc(100% - 60px);height:40px;border:none;color:var(--adsgram-button-text-color);cursor:pointer;font-family:SF Pro,Roboto,sans-serif;font-size:14px;font-weight:400;line-height:40px;text-align:center;letter-spacing:.03em;z-index:1;background-color:transparent;border-radius:6px 6px 15px 15px;animation-name:_show_1ktlg_1;animation-play-state:running;animation-duration:.2s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(.2,0,0,1)}@keyframes _show_1ktlg_1{0%{transform:translateY(-20px) scale(.1);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}._button_1ktlg_1:before{content:"";position:absolute;z-index:-1;inset:0;border-radius:6px 6px 15px 15px}._light_1ktlg_46:before{background:#4a8e3a8c}._dark_1ktlg_50:before{background-color:var(--adsgram-secondary-bg-color);opacity:.55;filter:contrast(140%)}._button_1ktlg_1:active{animation-name:_click_1ktlg_1;animation-play-state:running;animation-duration:.1s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(.2,0,0,1)}@keyframes _click_1ktlg_1{0%{transform:scale(1)}to{transform:scale(95%)}}._tooltip_6220y_1{position:relative;text-align:center;border-radius:12px;background-color:var(--adsgram-secondary-bg-color);padding:10px 12px;top:-10px;opacity:0;scale:25%;cursor:default;box-shadow:0 1px 2px #00000029;animation-name:_show_6220y_1;animation-play-state:running;animation-duration:.2s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(.2,0,0,1);transform:translate(30px);align-self:center}@keyframes _show_6220y_1{0%{opacity:0;top:-10px;scale:25%}to{opacity:1;top:10px;scale:100%}}._tooltip_6220y_1:after{content:"";position:absolute;left:50%;top:0;transform:translate(-50%,-100%);border:6px solid;border-color:transparent transparent var(--adsgram-secondary-bg-color) transparent}._title_6220y_46{font-family:SF Pro,Roboto,sans-serif;font-size:13px;font-weight:500;line-height:16px;text-align:center;color:var(--adsgram-text-color);margin:0}._banner_1g55r_1{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000c}._preview_1g55r_10{position:absolute;width:100%;height:100%}._preview_1g55r_10 .rmp-container{border-radius:8px}._button_qaa11_1{position:absolute;z-index:3;left:50%;transform:translate(-50%);height:48px;border-radius:8px;border:1px solid transparent;padding:12px 24px;background-color:var(--adsgram-button-color);color:var(--adsgram-button-text-color);cursor:pointer;font-size:16px;font-weight:600;line-height:24px;font-family:SF Pro,Roboto,sans-serif;animation-name:_show_qaa11_1;animation-duration:.3s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(.05,.7,.1,1)}@keyframes _show_qaa11_1{0%{opacity:0;bottom:10px}to{opacity:1;bottom:30px}}._visible_qaa11_35{visibility:visible;animation-play-state:running}._hidden_qaa11_40{visibility:hidden;animation-play-state:paused}._footer_171kv_1{position:absolute;bottom:0;width:100%;z-index:3;display:flex;justify-content:space-between}._timeline_gq9ld_1{height:18px;width:100%;margin:auto 8px;display:flex;flex-wrap:wrap;align-content:center}._bar_gq9ld_10{width:100%;height:2px;border-radius:4px;background-color:#ffffff59}._progress_gq9ld_17{width:0;height:100%;border-radius:4px;background-color:#fff}._wrapper_mc76l_1{display:flex;flex-direction:column;height:100%;font-family:SF Pro,Roboto,sans-serif;font-size:13px;font-weight:400;line-height:16px;letter-spacing:0;text-align:center;margin:10px 0;width:calc(100% - var(--adsgram-header-height) * 2);cursor:pointer}._adlabel_mc76l_16{color:#fff9;margin:0}._tgchannel_mc76l_21{color:#fff;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}._close_3nc4s_1{height:100%;aspect-ratio:1 / 1;display:flex;place-content:center center;flex-wrap:wrap}._close_3nc4s_1._clickable_3nc4s_9{cursor:pointer}._image_3nc4s_13{animation-name:_show_3nc4s_1;animation-duration:.15s;animation-play-state:running;animation-timing-function:cubic-bezier(0,0,0,1)}@keyframes _show_3nc4s_1{0%{opacity:0}to{opacity:1}}._header_vtxy5_1{--adsgram-header-height: 52px;position:absolute;top:0;width:100%;height:var(--adsgram-header-height);z-index:3;background:linear-gradient(#00000059,#0000);display:flex;justify-content:space-between}._preview_vtxy5_14{border-radius:8px 8px 0 0}._volume_p5grr_1{height:100%;aspect-ratio:1 / 1;display:flex;place-content:center center;flex-wrap:wrap;cursor:pointer}._packshot_1og3q_1{background:#141414cc;position:absolute;top:0;height:100%;width:100%;display:flex;place-content:center center;flex-wrap:wrap;backdrop-filter:blur(25px);animation-name:_packshot_1og3q_1;animation-duration:.2s;animation-timing-function:cubic-bezier(0,0,0,1)}@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)){._packshot_1og3q_1{background:#7474804d;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px)}}._creatives_1og3q_24{width:280px;display:flex;flex-direction:column;place-content:center center;transform:translateY(-26px);animation-name:_creatives_1og3q_24;animation-duration:.4s;animation-timing-function:cubic-bezier(.05,.7,.1,1);position:relative}._image_1og3q_36{width:128px;height:128px;border-radius:20px;border:1px solid rgb(0 0 0 / 4%);box-shadow:0 8px 20px #00000029;margin:0 auto 20px}._title_1og3q_45{font-family:SF Pro,Roboto,sans-serif;font-size:28px;font-weight:700;line-height:32px;letter-spacing:0;text-align:center;color:#fff;margin:8px}._description_1og3q_56{font-family:SF Pro,Roboto,sans-serif;font-size:16px;font-weight:500;line-height:24px;letter-spacing:0;text-align:center;color:#fff9}._play_1og3q_66{visibility:visible;animation-play-state:running}._pause_1og3q_71{visibility:hidden;animation-play-state:paused}@keyframes _packshot_1og3q_1{0%{opacity:0}to{opacity:1}}@keyframes _creatives_1og3q_24{0%{opacity:0;top:40px}to{opacity:1;top:0}}.rmp-container{width:100%;height:100%}.rmp-ad-container-skip,.rmp-ad-click-ui-mobile{visibility:hidden}.rmp-container{position:relative;text-align:center;outline:none;background:#000;padding:0;border:none;display:block;font-size:14px;max-width:none;max-height:none;overflow:hidden;line-height:1;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif}.rmp-container *{box-sizing:border-box}.rmp-video,.rmp-content{width:100%;height:100%;position:absolute;left:0;top:0;margin:0;padding:0;outline:none;display:block}.rmp-ad-container{position:absolute;top:0;left:0;margin:0;padding:0;width:100%;height:100%;outline:none;display:block;text-align:initial}.rmp-fullscreen-on{position:fixed!important;width:100%!important;height:100%!important;background:#000!important;overflow:hidden!important;z-index:9999!important;top:0;left:0}.rmp-vpaid-container{position:absolute;top:0;left:0;margin:0;padding:0;width:100%;height:100%;outline:none;display:block;text-align:initial}.rmp-ad-vast-video-player{width:100%;height:100%;position:absolute;left:0;top:0;margin:0;padding:0;outline:none;display:block;cursor:pointer}.rmp-ad-container-icons{position:absolute;display:block;cursor:pointer}.rmp-ad-container-skip{position:absolute;right:0;bottom:44px;width:160px;height:40px;line-height:38px;text-align:center;cursor:pointer;background-color:#333;border:1px solid #333}.rmp-ad-container-skip:hover{border-color:#000}.rmp-ad-container-skip-waiting{width:100%;position:absolute;padding:0 2px;color:#cfcfcf;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.rmp-ad-container-skip-message{width:65%;position:absolute;left:5%;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.rmp-ad-container-skip-icon{position:absolute;left:75%;width:20%;height:100%;background-repeat:no-repeat;background-position:center;opacity:.7}.rmp-ad-container-skip:hover .rmp-ad-container-skip-icon{opacity:1}.rmp-ad-container-play-button{width:136px;height:136px;border-radius:100%;background-color:#ffffff1f;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center}.rmp-ad-non-linear-container{position:absolute;text-align:center;left:50%;bottom:0;transform:translate(-50%)}.rmp-ad-non-linear-anchor:link,.rmp-ad-non-linear-anchor:visited,.rmp-ad-non-linear-anchor:hover,.rmp-ad-non-linear-anchor:active{text-decoration:none}.rmp-ad-non-linear-creative{position:relative;cursor:pointer;text-align:center;width:100%;height:100%;bottom:0}.rmp-ad-non-linear-close{right:0;top:0;position:absolute;cursor:pointer;width:20px;height:20px;background-color:#000;background-size:cover;border:4px solid #000000}.rmp-ad-click-ui-mobile{border:2px solid #ffffff;background:#0006;color:#fff;display:block;position:absolute;right:8px;top:8px;font-size:18px;width:112px;height:34px;text-decoration:none;text-align:center;line-height:30px;box-shadow:0 0 2px #0009}.rmp-ad-click-ui-mobile:visited,.rmp-ad-click-ui-mobile:hover,.rmp-ad-click-ui-mobile:active{color:#fff;text-decoration:none}.rmp-linear-simid-creative{position:absolute;top:0;border-width:0;width:100%;height:100%}.overlayed{position:absolute;top:0;width:640px;height:480px}.content{width:640px;height:480px}.hidden{display:none}._wrapper_1cu5o_1{width:100%;height:100%;position:relative}._banner_3g56a_1{position:fixed;bottom:10px;right:10px;width:calc(100% - 20px);border-radius:10px;background-color:var(--adsgram-bg-color);cursor:pointer;display:flex;animation-name:_show_3g56a_1;animation-duration:.2s;animation-play-state:running;animation-timing-function:cubic-bezier(0,0,.4,1)}@keyframes _show_3g56a_1{0%{bottom:-10px;opacity:.2}to{bottom:10px;opacity:1}}._image_3g56a_28{width:50px;height:50px;border-radius:5px;margin:8px}._text_3g56a_35{display:flex;flex-direction:column;margin:4px 0 0;padding:0}._title_3g56a_42{font-size:18px;font-weight:500;color:var(--adsgram-link-color)}._description_3g56a_48{color:var(--adsgram-text-color)}'
        )
      ),
        document.head.appendChild(o);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e = "undefined" != typeof globalThis ? globalThis : e || self).SAD =
          {})
      );
})(this, function (e) {
  "use strict";
  var t = Object.defineProperty,
    i = Object.defineProperties,
    n = Object.getOwnPropertyDescriptors,
    r = Object.getOwnPropertySymbols,
    s = Object.prototype.hasOwnProperty,
    a = Object.prototype.propertyIsEnumerable,
    o = (e, i, n) =>
      i in e
        ? t(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[i] = n),
    l = (e, t) => {
      for (var i in t || (t = {})) s.call(t, i) && o(e, i, t[i]);
      if (r) for (var i of r(t)) a.call(t, i) && o(e, i, t[i]);
      return e;
    },
    c = (e, t) => i(e, n(t)),
    d = (e, t, i) => (o(e, "symbol" != typeof t ? t + "" : t, i), i),
    h = (e, t, i) =>
      new Promise((n, r) => {
        var s = (e) => {
            try {
              o(i.next(e));
            } catch (Re) {
              r(Re);
            }
          },
          a = (e) => {
            try {
              o(i.throw(e));
            } catch (Re) {
              r(Re);
            }
          },
          o = (e) =>
            e.done ? n(e.value) : Promise.resolve(e.value).then(s, a);
        o((i = i.apply(e, t)).next());
      });
  const u = {
      ru: "Ð ÐˆÐ Ñ—Ð¡Ðƒ! Ð â€™ Ð Ò‘Ð Â°Ð Ð…Ð Ð…Ð¡â€¹Ð â„– Ð Ñ˜Ð Ñ•Ð Ñ˜Ð ÂµÐ Ð…Ð¡â€š Ð Ð…Ð ÂµÐ¡â€š Ð Ò‘Ð Ñ•Ð¡ÐƒÐ¡â€šÐ¡Ñ“Ð Ñ—Ð Ð…Ð Ñ•Ð â„– Ð¡Ð‚Ð ÂµÐ Ñ”Ð Â»Ð Â°Ð Ñ˜Ð¡â€¹. Ð ÑŸÐ Ñ•Ð Ñ—Ð¡Ð‚Ð Ñ•Ð Â±Ð¡Ñ“Ð â„–Ð¡â€šÐ Âµ Ð ÂµÐ¡â€°Ð¡â€˜ Ð¡Ð‚Ð Â°Ð Â· Ð¡â€¡Ð¡Ñ“Ð¡â€šÐ¡ÐŠ Ð Ñ—Ð Ñ•Ð Â·Ð Â¶Ð Âµ Ñ€ÑŸâ„¢Ð",
      en: "Oops! No ads available at the moment. Try again later Ñ€ÑŸâ„¢Ð",
    },
    p = "tgo",
    m = "RewardedVideo",
    _ = "FullscreenMedia",
    g = { [m]: "104", [_]: "511", [p]: "104" },
    f = m,
    v = "https://api.adsgram.ai/",
    y = "AdsgramError";
  class E extends Error {
    constructor({ message: e }) {
      super(e),
        d(this, "message"),
        (this.name = y),
        (this.message = `${y}: ${e}`),
        this.logError(e);
    }
    logError(e) {
      var t, i, n, r;
      "function" ==
      typeof (null == (i = null == (t = window.Telegram) ? void 0 : t.WebApp)
        ? void 0
        : i.showPopup)
        ? null ==
            (r =
              null == (n = null == window ? void 0 : window.Telegram)
                ? void 0
                : n.WebApp) ||
          r.showPopup({
            title: "AdsgramError",
            message: e.length < 256 ? e : e.substring(0, 255),
          })
        : alert(e),
        console.error(this);
    }
  }
  class b extends Error {
    constructor({ message: e, code: t }) {
      super(),
        d(this, "message"),
        d(this, "code"),
        (this.message = e),
        (this.code = t);
    }
  }
  class A {
    constructor(e, t) {
      return (
        d(this, "apiUrl"),
        d(this, "app"),
        d(this, "data"),
        (this.app = e),
        (this.apiUrl = t),
        (this.data = {}),
        this
      );
    }
    add(e, t) {
      return (this.data[e] = t), this;
    }
    addError(e) {
      return (
        (this.data.error = (function (e) {
          return e instanceof Error
            ? { name: e.name, message: e.message, stack: e.stack }
            : String(e);
        })(e)),
        this
      );
    }
    clean() {
      return (this.data = {}), this;
    }
    send(e, t = "ERROR") {
      fetch(`${this.getSendUrl(e, t)}`, { method: "GET", cache: "no-cache" })
        .then(() => !0)
        .catch(() => !1);
    }
    getLogRequestData(e, t) {
      return { app: this.app, type: t, event: e, data: l({}, this.data) };
    }
    getSendUrl(e, t) {
      return `${this.apiUrl}?${((e) => {
        const t = {};
        for (const [i, n] of Object.entries(e))
          "object" == typeof n && null !== n
            ? (t[i] = JSON.stringify(n))
            : null != n && "" !== n && (t[i] = String(n));
        return new URLSearchParams(t);
      })(this.getLogRequestData(e, t))}`;
    }
  }
  function T() {
    var e;
    return null == (e = null == window ? void 0 : window.Telegram)
      ? void 0
      : e.WebApp;
  }
  function w() {
    const e = T();
    return null == e ? void 0 : e.initDataUnsafe;
  }
  function k() {
    const e = w();
    return null == e ? void 0 : e.user;
  }
  const P = "frontend-error";
  function I() {
    const e = new A("SAD", `${v}${P}`),
      t = (function () {
        try {
          const e = T(),
            t = k();
          return {
            tg_id: String(null == t ? void 0 : t.id),
            tg_platform: null == e ? void 0 : e.platform,
            platform: window.navigator.platform,
            userAgent: window.navigator.userAgent,
            origin: window.location.origin,
          };
        } catch (Wi) {
          return null;
        }
      })();
    return t && e.add("environment", t), e;
  }
  function C(e, t) {
    return h(this, null, function* () {
      const i = I();
      i.add("blockId", e)
        .add("isForceCampaign", Boolean(t))
        .add("campaignId", Number(t));
      try {
        const n = (function (e, t) {
            var i, n, r, s, a, o;
            try {
              const l = T(),
                c = w(),
                d = k();
              return {
                blockId: e,
                forceCampaignId: t,
                tg_id: String(null == d ? void 0 : d.id),
                tg_platform: null == l ? void 0 : l.platform,
                platform: window.navigator.platform,
                language:
                  (null == d ? void 0 : d.language_code) ||
                  window.navigator.language,
                is_premium: null == d ? void 0 : d.is_premium,
                chat_type: null == c ? void 0 : c.chat_type,
                chat_instance: null == c ? void 0 : c.chat_instance,
                attach_chat_type:
                  null == (i = null == c ? void 0 : c.chat) ? void 0 : i.type,
                attach_chat_id: (
                  null == (n = null == c ? void 0 : c.chat) ? void 0 : n.id
                )
                  ? String(null == (r = c.chat) ? void 0 : r.id)
                  : void 0,
                receiver_id: (
                  null == (s = null == c ? void 0 : c.receiver) ? void 0 : s.id
                )
                  ? String(
                      null == (a = null == c ? void 0 : c.receiver)
                        ? void 0
                        : a.id
                    )
                  : void 0,
                receiver_is_bot: null == (o = c.receiver) ? void 0 : o.is_bot,
              };
            } catch (l) {
              throw (
                (I()
                  .addError(l)
                  .add("blockId", e)
                  .add("campaignId", t)
                  .send("CannotGetRequestData"),
                new E({ message: "Cannot get request data." }))
              );
            }
          })(e, t),
          r = yield fetch(
            `${v}adv?${((e) => {
              const t = {};
              for (const [i, n] of Object.entries(e))
                "object" == typeof n && null !== n
                  ? (t[i] = JSON.stringify(n))
                  : null != n && "" !== n && (t[i] = String(n));
              return new URLSearchParams(t);
            })(n)}`,
            {
              method: "GET",
              cache: "no-cache",
              referrerPolicy: "strict-origin-when-cross-origin",
            }
          );
        if (r.ok) return yield r.json();
        const s = yield r.json();
        switch (s.error) {
          case "Wrong referer":
            throw (
              (i.send("WrongReferer", "WARN"),
              new E({
                message: `Platform App url for blockId = ${e} not equal to ${window.location.origin}\nCreate new platform with app url ${window.location.origin} and new blockId for this platform.`,
              }))
            );
          case "Need to use active blockid":
            throw (
              (i.send("BlockNotActive", "WARN"),
              new E({
                message:
                  "Block is not active\nIf block has moderation status send message to https://t.me/adsgramsupport with platform url and screenshot from BotFather.\nMore info https://docs.adsgram.ai/publisher/get-block-id#moderation",
              }))
            );
          case "Not found this id":
            throw (
              (i.send("BlockNotFound", "WARN"),
              new E({
                message: `BlockId = ${e} is not found. Make sure that this is your blockId https://partner.adsgram.ai/units/${e}/`,
              }))
            );
          case "Need to specify blockid":
            throw (
              (i.send("NotPassBlock", "WARN"),
              new E({ message: "You don't pass blockId to Init function" }))
            );
        }
        throw new b({ code: r.status, message: JSON.stringify(s) });
      } catch (Wi) {
        throw (
          (Wi instanceof b
            ? i.addError(Wi).send("APIFetchBannerData")
            : Wi instanceof E ||
              i.addError(Wi).send("UnknownFetchBannerDataError"),
          Wi)
        );
      }
    });
  }
  var S,
    V,
    R,
    L,
    N,
    U,
    O,
    D,
    x = {},
    F = [],
    M = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    B = Array.isArray;
  function q(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }
  function W(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function H(e, t, i) {
    var n,
      r,
      s,
      a = {};
    for (s in t)
      "key" == s ? (n = t[s]) : "ref" == s ? (r = t[s]) : (a[s] = t[s]);
    if (
      (arguments.length > 2 &&
        (a.children = arguments.length > 3 ? S.call(arguments, 2) : i),
      "function" == typeof e && null != e.defaultProps)
    )
      for (s in e.defaultProps) void 0 === a[s] && (a[s] = e.defaultProps[s]);
    return $(e, a, n, r, null);
  }
  function $(e, t, i, n, r) {
    var s = {
      type: e,
      props: t,
      key: i,
      ref: n,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: null == r ? ++R : r,
      __i: -1,
      __u: 0,
    };
    return null == r && null != V.vnode && V.vnode(s), s;
  }
  function j(e) {
    return e.children;
  }
  function J(e, t) {
    (this.props = e), (this.context = t);
  }
  function z(e, t) {
    if (null == t) return e.__ ? z(e.__, e.__i + 1) : null;
    for (var i; t < e.__k.length; t++)
      if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
    return "function" == typeof e.type ? z(e) : null;
  }
  function G(e) {
    var t, i;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (i = e.__k[t]) && null != i.__e) {
          e.__e = e.__c.base = i.__e;
          break;
        }
      return G(e);
    }
  }
  function Y(e) {
    ((!e.__d && (e.__d = !0) && L.push(e) && !Q.__r++) ||
      N !== V.debounceRendering) &&
      ((N = V.debounceRendering) || U)(Q);
  }
  function Q() {
    var e, t, i, n, r, s, a, o, l;
    for (L.sort(O); (e = L.shift()); )
      e.__d &&
        ((t = L.length),
        (n = void 0),
        (s = (r = (i = e).__v).__e),
        (o = []),
        (l = []),
        (a = i.__P) &&
          (((n = q({}, r)).__v = r.__v + 1),
          V.vnode && V.vnode(n),
          se(
            a,
            n,
            r,
            i.__n,
            void 0 !== a.ownerSVGElement,
            32 & r.__u ? [s] : null,
            o,
            null == s ? z(r) : s,
            !!(32 & r.__u),
            l
          ),
          (n.__.__k[n.__i] = n),
          ae(o, n, l),
          n.__e != s && G(n)),
        L.length > t && L.sort(O));
    Q.__r = 0;
  }
  function K(e, t, i, n, r, s, a, o, l, c, d) {
    var h,
      u,
      p,
      m,
      _,
      g = (n && n.__k) || F,
      f = t.length;
    for (
      i.__d = l,
        (function (e, t, i) {
          var n,
            r,
            s,
            a,
            o,
            l = t.length,
            c = i.length,
            d = c,
            h = 0;
          for (e.__k = [], n = 0; n < l; n++)
            null !=
            (r = e.__k[n] =
              null == (r = t[n]) ||
              "boolean" == typeof r ||
              "function" == typeof r
                ? null
                : "string" == typeof r ||
                  "number" == typeof r ||
                  "bigint" == typeof r ||
                  r.constructor == String
                ? $(null, r, null, null, r)
                : B(r)
                ? $(j, { children: r }, null, null, null)
                : void 0 === r.constructor && r.__b > 0
                ? $(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v)
                : r)
              ? ((r.__ = e),
                (r.__b = e.__b + 1),
                (o = ee(r, i, (a = n + h), d)),
                (r.__i = o),
                (s = null),
                -1 !== o && (d--, (s = i[o]) && (s.__u |= 131072)),
                null == s || null === s.__v
                  ? (-1 == o && h--,
                    "function" != typeof r.type && (r.__u |= 65536))
                  : o !== a &&
                    (o === a + 1
                      ? h++
                      : o > a
                      ? d > l - a
                        ? (h += o - a)
                        : h--
                      : (h = o < a && o == a - 1 ? o - a : 0),
                    o !== n + h && (r.__u |= 65536)))
              : (s = i[n]) &&
                null == s.key &&
                s.__e &&
                (s.__e == e.__d && (e.__d = z(s)),
                le(s, s, !1),
                (i[n] = null),
                d--);
          if (d)
            for (n = 0; n < c; n++)
              null != (s = i[n]) &&
                0 == (131072 & s.__u) &&
                (s.__e == e.__d && (e.__d = z(s)), le(s, s));
        })(i, t, g),
        l = i.__d,
        h = 0;
      h < f;
      h++
    )
      null != (p = i.__k[h]) &&
        "boolean" != typeof p &&
        "function" != typeof p &&
        ((u = -1 === p.__i ? x : g[p.__i] || x),
        (p.__i = h),
        se(e, p, u, r, s, a, o, l, c, d),
        (m = p.__e),
        p.ref &&
          u.ref != p.ref &&
          (u.ref && oe(u.ref, null, p), d.push(p.ref, p.__c || m, p)),
        null == _ && null != m && (_ = m),
        65536 & p.__u || u.__k === p.__k
          ? (l = X(p, l, e))
          : "function" == typeof p.type && void 0 !== p.__d
          ? (l = p.__d)
          : m && (l = m.nextSibling),
        (p.__d = void 0),
        (p.__u &= -196609));
    (i.__d = l), (i.__e = _);
  }
  function X(e, t, i) {
    var n, r;
    if ("function" == typeof e.type) {
      for (n = e.__k, r = 0; n && r < n.length; r++)
        n[r] && ((n[r].__ = e), (t = X(n[r], t, i)));
      return t;
    }
    return (
      e.__e != t && (i.insertBefore(e.__e, t || null), (t = e.__e)),
      t && t.nextSibling
    );
  }
  function Z(e, t) {
    return (
      (t = t || []),
      null == e ||
        "boolean" == typeof e ||
        (B(e)
          ? e.some(function (e) {
              Z(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function ee(e, t, i, n) {
    var r = e.key,
      s = e.type,
      a = i - 1,
      o = i + 1,
      l = t[i];
    if (null === l || (l && r == l.key && s === l.type)) return i;
    if (n > (null != l && 0 == (131072 & l.__u) ? 1 : 0))
      for (; a >= 0 || o < t.length; ) {
        if (a >= 0) {
          if ((l = t[a]) && 0 == (131072 & l.__u) && r == l.key && s === l.type)
            return a;
          a--;
        }
        if (o < t.length) {
          if ((l = t[o]) && 0 == (131072 & l.__u) && r == l.key && s === l.type)
            return o;
          o++;
        }
      }
    return -1;
  }
  function te(e, t, i) {
    "-" === t[0]
      ? e.setProperty(t, null == i ? "" : i)
      : (e[t] =
          null == i ? "" : "number" != typeof i || M.test(t) ? i : i + "px");
  }
  function ie(e, t, i, n, r) {
    var s;
    e: if ("style" === t)
      if ("string" == typeof i) e.style.cssText = i;
      else {
        if (("string" == typeof n && (e.style.cssText = n = ""), n))
          for (t in n) (i && t in i) || te(e.style, t, "");
        if (i) for (t in i) (n && i[t] === n[t]) || te(e.style, t, i[t]);
      }
    else if ("o" === t[0] && "n" === t[1])
      (s = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1"))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + s] = i),
        i
          ? n
            ? (i.u = n.u)
            : ((i.u = Date.now()), e.addEventListener(t, s ? re : ne, s))
          : e.removeEventListener(t, s ? re : ne, s);
    else {
      if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        "width" !== t &&
        "height" !== t &&
        "href" !== t &&
        "list" !== t &&
        "form" !== t &&
        "tabIndex" !== t &&
        "download" !== t &&
        "rowSpan" !== t &&
        "colSpan" !== t &&
        "role" !== t &&
        t in e
      )
        try {
          e[t] = null == i ? "" : i;
          break e;
        } catch (a) {}
      "function" == typeof i ||
        (null == i || (!1 === i && "-" !== t[4])
          ? e.removeAttribute(t)
          : e.setAttribute(t, i));
    }
  }
  function ne(e) {
    var t = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= t.u) return;
    } else e.t = Date.now();
    return t(V.event ? V.event(e) : e);
  }
  function re(e) {
    return this.l[e.type + !0](V.event ? V.event(e) : e);
  }
  function se(e, t, i, n, r, s, a, o, l, c) {
    var d,
      h,
      u,
      p,
      m,
      _,
      g,
      f,
      v,
      y,
      E,
      b,
      A,
      T,
      w,
      k = t.type;
    if (void 0 !== t.constructor) return null;
    128 & i.__u && ((l = !!(32 & i.__u)), (s = [(o = t.__e = i.__e)])),
      (d = V.__b) && d(t);
    e: if ("function" == typeof k)
      try {
        if (
          ((f = t.props),
          (v = (d = k.contextType) && n[d.__c]),
          (y = d ? (v ? v.props.value : d.__) : n),
          i.__c
            ? (g = (h = t.__c = i.__c).__ = h.__E)
            : ("prototype" in k && k.prototype.render
                ? (t.__c = h = new k(f, y))
                : ((t.__c = h = new J(f, y)),
                  (h.constructor = k),
                  (h.render = ce)),
              v && v.sub(h),
              (h.props = f),
              h.state || (h.state = {}),
              (h.context = y),
              (h.__n = n),
              (u = h.__d = !0),
              (h.__h = []),
              (h._sb = [])),
          null == h.__s && (h.__s = h.state),
          null != k.getDerivedStateFromProps &&
            (h.__s == h.state && (h.__s = q({}, h.__s)),
            q(h.__s, k.getDerivedStateFromProps(f, h.__s))),
          (p = h.props),
          (m = h.state),
          (h.__v = t),
          u)
        )
          null == k.getDerivedStateFromProps &&
            null != h.componentWillMount &&
            h.componentWillMount(),
            null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
          if (
            (null == k.getDerivedStateFromProps &&
              f !== p &&
              null != h.componentWillReceiveProps &&
              h.componentWillReceiveProps(f, y),
            !h.__e &&
              ((null != h.shouldComponentUpdate &&
                !1 === h.shouldComponentUpdate(f, h.__s, y)) ||
                t.__v === i.__v))
          ) {
            for (
              t.__v !== i.__v &&
                ((h.props = f), (h.state = h.__s), (h.__d = !1)),
                t.__e = i.__e,
                t.__k = i.__k,
                t.__k.forEach(function (e) {
                  e && (e.__ = t);
                }),
                E = 0;
              E < h._sb.length;
              E++
            )
              h.__h.push(h._sb[E]);
            (h._sb = []), h.__h.length && a.push(h);
            break e;
          }
          null != h.componentWillUpdate && h.componentWillUpdate(f, h.__s, y),
            null != h.componentDidUpdate &&
              h.__h.push(function () {
                h.componentDidUpdate(p, m, _);
              });
        }
        if (
          ((h.context = y),
          (h.props = f),
          (h.__P = e),
          (h.__e = !1),
          (b = V.__r),
          (A = 0),
          "prototype" in k && k.prototype.render)
        ) {
          for (
            h.state = h.__s,
              h.__d = !1,
              b && b(t),
              d = h.render(h.props, h.state, h.context),
              T = 0;
            T < h._sb.length;
            T++
          )
            h.__h.push(h._sb[T]);
          h._sb = [];
        } else
          do {
            (h.__d = !1),
              b && b(t),
              (d = h.render(h.props, h.state, h.context)),
              (h.state = h.__s);
          } while (h.__d && ++A < 25);
        (h.state = h.__s),
          null != h.getChildContext && (n = q(q({}, n), h.getChildContext())),
          u ||
            null == h.getSnapshotBeforeUpdate ||
            (_ = h.getSnapshotBeforeUpdate(p, m)),
          K(
            e,
            B(
              (w =
                null != d && d.type === j && null == d.key
                  ? d.props.children
                  : d)
            )
              ? w
              : [w],
            t,
            i,
            n,
            r,
            s,
            a,
            o,
            l,
            c
          ),
          (h.base = t.__e),
          (t.__u &= -161),
          h.__h.length && a.push(h),
          g && (h.__E = h.__ = null);
      } catch (P) {
        (t.__v = null),
          l || null != s
            ? ((t.__e = o), (t.__u |= l ? 160 : 32), (s[s.indexOf(o)] = null))
            : ((t.__e = i.__e), (t.__k = i.__k)),
          V.__e(P, t, i);
      }
    else
      null == s && t.__v === i.__v
        ? ((t.__k = i.__k), (t.__e = i.__e))
        : (t.__e = (function (e, t, i, n, r, s, a, o, l) {
            var c,
              d,
              h,
              u,
              p,
              m,
              _,
              g = i.props,
              f = t.props,
              v = t.type;
            if (("svg" === v && (r = !0), null != s))
              for (c = 0; c < s.length; c++)
                if (
                  (p = s[c]) &&
                  "setAttribute" in p == !!v &&
                  (v ? p.localName === v : 3 === p.nodeType)
                ) {
                  (e = p), (s[c] = null);
                  break;
                }
            if (null == e) {
              if (null === v) return document.createTextNode(f);
              (e = r
                ? document.createElementNS("http://www.w3.org/2000/svg", v)
                : document.createElement(v, f.is && f)),
                (s = null),
                (o = !1);
            }
            if (null === v) g === f || (o && e.data === f) || (e.data = f);
            else {
              if (
                ((s = s && S.call(e.childNodes)),
                (g = i.props || x),
                !o && null != s)
              )
                for (g = {}, c = 0; c < e.attributes.length; c++)
                  g[(p = e.attributes[c]).name] = p.value;
              for (c in g)
                (p = g[c]),
                  "children" == c ||
                    ("dangerouslySetInnerHTML" == c
                      ? (h = p)
                      : "key" === c || c in f || ie(e, c, null, p, r));
              for (c in f)
                (p = f[c]),
                  "children" == c
                    ? (u = p)
                    : "dangerouslySetInnerHTML" == c
                    ? (d = p)
                    : "value" == c
                    ? (m = p)
                    : "checked" == c
                    ? (_ = p)
                    : "key" === c ||
                      (o && "function" != typeof p) ||
                      g[c] === p ||
                      ie(e, c, p, g[c], r);
              if (d)
                o ||
                  (h && (d.__html === h.__html || d.__html === e.innerHTML)) ||
                  (e.innerHTML = d.__html),
                  (t.__k = []);
              else if (
                (h && (e.innerHTML = ""),
                K(
                  e,
                  B(u) ? u : [u],
                  t,
                  i,
                  n,
                  r && "foreignObject" !== v,
                  s,
                  a,
                  s ? s[0] : i.__k && z(i, 0),
                  o,
                  l
                ),
                null != s)
              )
                for (c = s.length; c--; ) null != s[c] && W(s[c]);
              o ||
                ((c = "value"),
                void 0 !== m &&
                  (m !== e[c] ||
                    ("progress" === v && !m) ||
                    ("option" === v && m !== g[c])) &&
                  ie(e, c, m, g[c], !1),
                (c = "checked"),
                void 0 !== _ && _ !== e[c] && ie(e, c, _, g[c], !1));
            }
            return e;
          })(i.__e, t, i, n, r, s, a, l, c));
    (d = V.diffed) && d(t);
  }
  function ae(e, t, i) {
    t.__d = void 0;
    for (var n = 0; n < i.length; n++) oe(i[n], i[++n], i[++n]);
    V.__c && V.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (i) {
          V.__e(i, t.__v);
        }
      });
  }
  function oe(e, t, i) {
    try {
      "function" == typeof e ? e(t) : (e.current = t);
    } catch (n) {
      V.__e(n, i);
    }
  }
  function le(e, t, i) {
    var n, r;
    if (
      (V.unmount && V.unmount(e),
      (n = e.ref) && ((n.current && n.current !== e.__e) || oe(n, null, t)),
      null != (n = e.__c))
    ) {
      if (n.componentWillUnmount)
        try {
          n.componentWillUnmount();
        } catch (s) {
          V.__e(s, t);
        }
      (n.base = n.__P = null), (e.__c = void 0);
    }
    if ((n = e.__k))
      for (r = 0; r < n.length; r++)
        n[r] && le(n[r], t, i || "function" != typeof e.type);
    i || null == e.__e || W(e.__e), (e.__ = e.__e = e.__d = void 0);
  }
  function ce(e, t, i) {
    return this.constructor(e, i);
  }
  function de(e, t, i) {
    var n, r, s, a;
    V.__ && V.__(e, t),
      (r = (n = "function" == typeof i) ? null : (i && i.__k) || t.__k),
      (s = []),
      (a = []),
      se(
        t,
        (e = ((!n && i) || t).__k = H(j, null, [e])),
        r || x,
        x,
        void 0 !== t.ownerSVGElement,
        !n && i ? [i] : r ? null : t.firstChild ? S.call(t.childNodes) : null,
        s,
        !n && i ? i : r ? r.__e : t.firstChild,
        n,
        a
      ),
      ae(s, e, a);
  }
  function he(e, t) {
    var i = {
      __c: (t = "__cC" + D++),
      __: e,
      Consumer: function (e, t) {
        return e.children(t);
      },
      Provider: function (e) {
        var i, n;
        return (
          this.getChildContext ||
            ((i = []),
            ((n = {})[t] = this),
            (this.getChildContext = function () {
              return n;
            }),
            (this.shouldComponentUpdate = function (e) {
              this.props.value !== e.value &&
                i.some(function (e) {
                  (e.__e = !0), Y(e);
                });
            }),
            (this.sub = function (e) {
              i.push(e);
              var t = e.componentWillUnmount;
              e.componentWillUnmount = function () {
                i.splice(i.indexOf(e), 1), t && t.call(e);
              };
            })),
          e.children
        );
      },
    };
    return (i.Provider.__ = i.Consumer.contextType = i);
  }
  (S = F.slice),
    (V = {
      __e: function (e, t, i, n) {
        for (var r, s, a; (t = t.__); )
          if ((r = t.__c) && !r.__)
            try {
              if (
                ((s = r.constructor) &&
                  null != s.getDerivedStateFromError &&
                  (r.setState(s.getDerivedStateFromError(e)), (a = r.__d)),
                null != r.componentDidCatch &&
                  (r.componentDidCatch(e, n || {}), (a = r.__d)),
                a)
              )
                return (r.__E = r);
            } catch (o) {
              e = o;
            }
        throw e;
      },
    }),
    (R = 0),
    (J.prototype.setState = function (e, t) {
      var i;
      (i =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = q({}, this.state))),
        "function" == typeof e && (e = e(q({}, i), this.props)),
        e && q(i, e),
        null != e && this.__v && (t && this._sb.push(t), Y(this));
    }),
    (J.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), Y(this));
    }),
    (J.prototype.render = j),
    (L = []),
    (U =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (O = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (Q.__r = 0),
    (D = 0);
  const ue = ["RewardedVideo", "FullscreenMedia"];
  const pe = {
      show: "show",
      load: "load",
      preload: "preload",
      destroy: "destroy",
      finalDestroy: "finalDestroy",
      error: "error",
      renderError: "renderError",
    },
    me = {
      onReward: "onReward",
      onStart: "onStart",
      onSkip: "onSkip",
      onBannerNotFound: "onBannerNotFound",
      onError: "onError",
    },
    _e = l(l(l({}, pe), me), { replay: "replay" });
  function ge({ data: e, EventEmitter: t }) {
    var i, n, r, s, a;
    const o = (function (e) {
      return ue.includes(e.bannerType);
    })(e);
    if (o) {
      const e = document.body.style.overflow;
      (document.body.style.overflow = "hidden"),
        (null ==
        (n =
          null == (i = null == window ? void 0 : window.Telegram)
            ? void 0
            : i.WebApp)
          ? void 0
          : n.isExpanded) ||
          null ==
            (a =
              null ==
              (s =
                null == (r = null == window ? void 0 : window.Telegram)
                  ? void 0
                  : r.WebApp)
                ? void 0
                : s.expand) ||
          a.call(s),
        t.on(pe.finalDestroy, () => {
          document.body.style.overflow = e;
        });
    }
  }
  const fe = 2;
  function ve(e, t) {
    return h(this, arguments, function* (e, t, i = fe) {
      if ("string" != typeof e || "" === e)
        return (
          t.add("trackingUrl", JSON.stringify(e)).send("WrongTrackingUrl"), !1
        );
      for (let n = 1 + i; n > 0; --n)
        try {
          if ((yield fetch(e, { method: "GET", cache: "no-cache" })).ok)
            return !0;
        } catch (Wi) {
          t.addError(Wi).add("trackingUrl", e).send("APITrackingError");
        }
      return !1;
    });
  }
  const ye = 15,
    Ee = "_banner_1jcal_1",
    be = "_wrapper_1jcal_46";
  let Ae = class {
    constructor() {
      d(this, "handlers"), (this.handlers = []);
    }
    on(e, t) {
      if ("function" != typeof t)
        throw new E({
          message:
            "The handler argument must be of type Function. Received type " +
            typeof t,
        });
      if (!e)
        throw new E({
          message:
            "The event argument must be of type String. Received type " +
            typeof e,
        });
      if (!_e[e])
        throw new E({
          message: `The event argument must be one of ${Object.keys(_e).join(
            ", "
          )}. Received ${e}`,
        });
      return this.handlers.push({ event: e, handler: t }), this;
    }
    off(e, t) {
      return (
        (this.handlers = this.handlers.filter(
          (i) => i.event !== e || i.handler !== t
        )),
        this
      );
    }
    emit(e) {
      let t = !1;
      return (
        this.handlers.forEach((i) => {
          i.event === e && ((t = !0), i.handler());
        }),
        t
      );
    }
    removeAllListeners(e) {
      return e
        ? ((this.handlers = this.handlers.filter((t) => t.event !== e)), this)
        : ((this.handlers = []), this);
    }
    hasHandlers(e) {
      return this.handlers.some(({ event: t }) => t === e);
    }
  };
  const Te = he(
    new Proxy(new Ae(), {
      apply() {
        console.warn("EventEmitter not initialized");
      },
      get() {
        console.warn("EventEmitter not initialized");
      },
    })
  );
  var we,
    ke,
    Pe,
    Ie,
    Ce = 0,
    Se = [],
    Ve = [],
    Re = V.__b,
    Le = V.__r,
    Ne = V.diffed,
    Ue = V.__c,
    Oe = V.unmount;
  function De(e, t) {
    V.__h && V.__h(ke, e, Ce || t), (Ce = 0);
    var i = ke.__H || (ke.__H = { __: [], __h: [] });
    return e >= i.__.length && i.__.push({ __V: Ve }), i.__[e];
  }
  function xe(e) {
    return (
      (Ce = 1),
      (function (e, t, i) {
        var n = De(we++, 2);
        if (
          ((n.t = e),
          !n.__c &&
            ((n.__ = [
              i ? i(t) : Ye(void 0, t),
              function (e) {
                var t = n.__N ? n.__N[0] : n.__[0],
                  i = n.t(t, e);
                t !== i && ((n.__N = [i, n.__[1]]), n.__c.setState({}));
              },
            ]),
            (n.__c = ke),
            !ke.u))
        ) {
          var r = function (e, t, i) {
            if (!n.__c.__H) return !0;
            var r = n.__c.__H.__.filter(function (e) {
              return e.__c;
            });
            if (
              r.every(function (e) {
                return !e.__N;
              })
            )
              return !s || s.call(this, e, t, i);
            var a = !1;
            return (
              r.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
                }
              }),
              !(!a && n.__c.props === e) && (!s || s.call(this, e, t, i))
            );
          };
          ke.u = !0;
          var s = ke.shouldComponentUpdate,
            a = ke.componentWillUpdate;
          (ke.componentWillUpdate = function (e, t, i) {
            if (this.__e) {
              var n = s;
              (s = void 0), r(e, t, i), (s = n);
            }
            a && a.call(this, e, t, i);
          }),
            (ke.shouldComponentUpdate = r);
        }
        return n.__N || n.__;
      })(Ye, e)
    );
  }
  function Fe(e, t) {
    var i = De(we++, 3);
    !V.__s && Ge(i.__H, t) && ((i.__ = e), (i.i = t), ke.__H.__h.push(i));
  }
  function Me(e) {
    return (
      (Ce = 5),
      Be(function () {
        return { current: e };
      }, [])
    );
  }
  function Be(e, t) {
    var i = De(we++, 7);
    return Ge(i.__H, t) ? ((i.__V = e()), (i.i = t), (i.__h = e), i.__V) : i.__;
  }
  function qe(e, t) {
    return (
      (Ce = 8),
      Be(function () {
        return e;
      }, t)
    );
  }
  function We(e) {
    var t = ke.context[e.__c],
      i = De(we++, 9);
    return (
      (i.c = e),
      t ? (null == i.__ && ((i.__ = !0), t.sub(ke)), t.props.value) : e.__
    );
  }
  function He() {
    for (var e; (e = Se.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(Je), e.__H.__h.forEach(ze), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), V.__e(t, e.__v);
        }
  }
  (V.__b = function (e) {
    (ke = null), Re && Re(e);
  }),
    (V.__r = function (e) {
      Le && Le(e), (we = 0);
      var t = (ke = e.__c).__H;
      t &&
        (Pe === ke
          ? ((t.__h = []),
            (ke.__h = []),
            t.__.forEach(function (e) {
              e.__N && (e.__ = e.__N), (e.__V = Ve), (e.__N = e.i = void 0);
            }))
          : (t.__h.forEach(Je), t.__h.forEach(ze), (t.__h = []), (we = 0))),
        (Pe = ke);
    }),
    (V.diffed = function (e) {
      Ne && Ne(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((1 !== Se.push(t) && Ie === V.requestAnimationFrame) ||
            ((Ie = V.requestAnimationFrame) || je)(He)),
        t.__H.__.forEach(function (e) {
          e.i && (e.__H = e.i),
            e.__V !== Ve && (e.__ = e.__V),
            (e.i = void 0),
            (e.__V = Ve);
        })),
        (Pe = ke = null);
    }),
    (V.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(Je),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || ze(e);
            }));
        } catch (i) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (t = []),
            V.__e(i, e.__v);
        }
      }),
        Ue && Ue(e, t);
    }),
    (V.unmount = function (e) {
      Oe && Oe(e);
      var t,
        i = e.__c;
      i &&
        i.__H &&
        (i.__H.__.forEach(function (e) {
          try {
            Je(e);
          } catch (i) {
            t = i;
          }
        }),
        (i.__H = void 0),
        t && V.__e(t, i.__v));
    });
  var $e = "function" == typeof requestAnimationFrame;
  function je(e) {
    var t,
      i = function () {
        clearTimeout(n), $e && cancelAnimationFrame(t), setTimeout(e);
      },
      n = setTimeout(i, 100);
    $e && (t = requestAnimationFrame(i));
  }
  function Je(e) {
    var t = ke,
      i = e.__c;
    "function" == typeof i && ((e.__c = void 0), i()), (ke = t);
  }
  function ze(e) {
    var t = ke;
    (e.__c = e.__()), (ke = t);
  }
  function Ge(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (t, i) {
        return t !== e[i];
      })
    );
  }
  function Ye(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function Qe(e, t) {
    for (var i in e) if ("__source" !== i && !(i in t)) return !0;
    for (var n in t) if ("__source" !== n && e[n] !== t[n]) return !0;
    return !1;
  }
  function Ke(e) {
    this.props = e;
  }
  ((Ke.prototype = new J()).isPureReactComponent = !0),
    (Ke.prototype.shouldComponentUpdate = function (e, t) {
      return Qe(this.props, e) || Qe(this.state, t);
    });
  var Xe = V.__b;
  V.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      Xe && Xe(e);
  };
  var Ze = V.__e;
  V.__e = function (e, t, i, n) {
    if (e.then)
      for (var r, s = t; (s = s.__); )
        if ((r = s.__c) && r.__c)
          return (
            null == t.__e && ((t.__e = i.__e), (t.__k = i.__k)), r.__c(e, t)
          );
    Ze(e, t, i, n);
  };
  var et = V.unmount;
  function tt(e, t, i) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (e) {
            "function" == typeof e.__c && e.__c();
          }),
          (e.__c.__H = null)),
        null !=
          (e = (function (e, t) {
            for (var i in t) e[i] = t[i];
            return e;
          })({}, e)).__c &&
          (e.__c.__P === i && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (e) {
            return tt(e, t, i);
          }))),
      e
    );
  }
  function it(e, t, i) {
    return (
      e &&
        i &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (e) {
            return it(e, t, i);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && i.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = i))),
      e
    );
  }
  function nt() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function rt(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function st() {
    (this.u = null), (this.o = null);
  }
  (V.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), et && et(e);
  }),
    ((nt.prototype = new J()).__c = function (e, t) {
      var i = t.__c,
        n = this;
      null == n.t && (n.t = []), n.t.push(i);
      var r = rt(n.__v),
        s = !1,
        a = function () {
          s || ((s = !0), (i.__R = null), r ? r(o) : o());
        };
      i.__R = a;
      var o = function () {
        if (!--n.__u) {
          if (n.state.__a) {
            var e = n.state.__a;
            n.__v.__k[0] = it(e, e.__c.__P, e.__c.__O);
          }
          var t;
          for (n.setState({ __a: (n.__b = null) }); (t = n.t.pop()); )
            t.forceUpdate();
        }
      };
      n.__u++ || 32 & t.__u || n.setState({ __a: (n.__b = n.__v.__k[0]) }),
        e.then(a, a);
    }),
    (nt.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (nt.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var i = document.createElement("div"),
            n = this.__v.__k[0].__c;
          this.__v.__k[0] = tt(this.__b, i, (n.__O = n.__P));
        }
        this.__b = null;
      }
      var r = t.__a && H(j, null, e.fallback);
      return r && (r.__u &= -33), [H(j, null, t.__a ? null : e.children), r];
    });
  var at = function (e, t, i) {
    if (
      (++i[1] === i[0] && e.o.delete(t),
      e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
    )
      for (i = e.u; i; ) {
        for (; i.length > 3; ) i.pop()();
        if (i[1] < i[0]) break;
        e.u = i = i[2];
      }
  };
  ((st.prototype = new J()).__a = function (e) {
    var t = this,
      i = rt(t.__v),
      n = t.o.get(e);
    return (
      n[0]++,
      function (r) {
        var s = function () {
          t.props.revealOrder ? (n.push(r), at(t, e, n)) : r();
        };
        i ? i(s) : s();
      }
    );
  }),
    (st.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = Z(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
      for (var i = t.length; i--; ) this.o.set(t[i], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (st.prototype.componentDidUpdate = st.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, i) {
          at(e, i, t);
        });
      });
  var ot =
      ("undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.element")) ||
      60103,
    lt =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    ct = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    dt = /[A-Z0-9]/g,
    ht = "undefined" != typeof document,
    ut = function (e) {
      return (
        "undefined" != typeof Symbol && "symbol" == typeof Symbol()
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(e);
    };
  (J.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(J.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
  var pt = V.event;
  function mt() {}
  function _t() {
    return this.cancelBubble;
  }
  function gt() {
    return this.defaultPrevented;
  }
  V.event = function (e) {
    return (
      pt && (e = pt(e)),
      (e.persist = mt),
      (e.isPropagationStopped = _t),
      (e.isDefaultPrevented = gt),
      (e.nativeEvent = e)
    );
  };
  var ft = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    vt = V.vnode;
  V.vnode = function (e) {
    "string" == typeof e.type &&
      (function (e) {
        var t = e.props,
          i = e.type,
          n = {};
        for (var r in t) {
          var s = t[r];
          if (
            !(
              ("value" === r && "defaultValue" in t && null == s) ||
              (ht && "children" === r && "noscript" === i) ||
              "class" === r ||
              "className" === r
            )
          ) {
            var a = r.toLowerCase();
            "defaultValue" === r && "value" in t && null == t.value
              ? (r = "value")
              : "download" === r && !0 === s
              ? (s = "")
              : "ondoubleclick" === a
              ? (r = "ondblclick")
              : "onchange" !== a ||
                ("input" !== i && "textarea" !== i) ||
                ut(t.type)
              ? "onfocus" === a
                ? (r = "onfocusin")
                : "onblur" === a
                ? (r = "onfocusout")
                : ct.test(r)
                ? (r = a)
                : -1 === i.indexOf("-") && lt.test(r)
                ? (r = r.replace(dt, "-$&").toLowerCase())
                : null === s && (s = void 0)
              : (a = r = "oninput"),
              "oninput" === a && n[(r = a)] && (r = "oninputCapture"),
              (n[r] = s);
          }
        }
        "select" == i &&
          n.multiple &&
          Array.isArray(n.value) &&
          (n.value = Z(t.children).forEach(function (e) {
            e.props.selected = -1 != n.value.indexOf(e.props.value);
          })),
          "select" == i &&
            null != n.defaultValue &&
            (n.value = Z(t.children).forEach(function (e) {
              e.props.selected = n.multiple
                ? -1 != n.defaultValue.indexOf(e.props.value)
                : n.defaultValue == e.props.value;
            })),
          t.class && !t.className
            ? ((n.class = t.class), Object.defineProperty(n, "className", ft))
            : ((t.className && !t.class) || (t.class && t.className)) &&
              (n.class = n.className = t.className),
          (e.props = n);
      })(e),
      (e.$$typeof = ot),
      vt && vt(e);
  };
  var yt = V.__r;
  V.__r = function (e) {
    yt && yt(e), e.__c;
  };
  var Et = V.diffed;
  function bt() {
    return We(Te);
  }
  V.diffed = function (e) {
    Et && Et(e);
    var t = e.props,
      i = e.__e;
    null != i &&
      "textarea" === e.type &&
      "value" in t &&
      t.value !== i.value &&
      (i.value = null == t.value ? "" : t.value);
  };
  const At = he(I());
  function Tt() {
    return We(At);
  }
  function wt(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var kt,
    Pt = { exports: {} };
  (kt = Pt),
    (function () {
      var e = {}.hasOwnProperty;
      function t() {
        for (var e = "", t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          r && (e = n(e, i(r)));
        }
        return e;
      }
      function i(i) {
        if ("string" == typeof i || "number" == typeof i) return i;
        if ("object" != typeof i) return "";
        if (Array.isArray(i)) return t.apply(null, i);
        if (
          i.toString !== Object.prototype.toString &&
          !i.toString.toString().includes("[native code]")
        )
          return i.toString();
        var r = "";
        for (var s in i) e.call(i, s) && i[s] && (r = n(r, s));
        return r;
      }
      function n(e, t) {
        return t ? (e ? e + " " + t : e + t) : e;
      }
      kt.exports
        ? ((t.default = t), (kt.exports = t))
        : (window.classNames = t);
    })();
  const It = wt(Pt.exports),
    Ct = {
      background: "_background_px36w_1",
      preview: "_preview_px36w_9",
      dark: "_dark_px36w_18",
      light: "_light_px36w_36",
    };
  function St() {
    var e;
    return (null == (e = T()) ? void 0 : e.colorScheme) || "light";
  }
  var Vt = 0;
  function Rt(e, t, i, n, r, s) {
    var a,
      o,
      l = {};
    for (o in t) "ref" == o ? (a = t[o]) : (l[o] = t[o]);
    var c = {
      type: e,
      props: l,
      key: i,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: --Vt,
      __i: -1,
      __u: 0,
      __source: r,
      __self: s,
    };
    if ("function" == typeof e && (a = e.defaultProps))
      for (o in a) void 0 === l[o] && (l[o] = a[o]);
    return V.vnode && V.vnode(c), c;
  }
  function Lt() {
    const e = St();
    return Rt(j, {
      children: Rt("div", {
        className: It(Ct.background, "light" === e ? Ct.light : Ct.dark, !1),
      }),
    });
  }
  const Nt = {
    label: "_label_aphru_1",
    dark: "_dark_aphru_18",
    light: "_light_aphru_24",
    text: "_text_aphru_28",
  };
  var Ut = Object.defineProperty,
    Ot = (e, t, i) =>
      ((e, t, i) =>
        t in e
          ? Ut(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
  function Dt(e, t) {
    let i;
    const n = () => {
      void 0 !== i && t && t(i), (i = void 0);
    };
    return [() => (void 0 === i ? (i = e(n)) : i), n];
  }
  const xt = new (class {
    constructor(e, t = {}) {
      (this.scope = e), (this.options = t);
    }
    print(e, ...t) {
      const i = new Date(),
        n = Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          fractionalSecondDigits: 3,
          timeZone: "UTC",
        }).format(i),
        { textColor: r, bgColor: s } = this.options,
        a = "font-weight: bold;padding: 0 5px;border-radius:5px";
      console[e](
        `%c${n}%c / %c${this.scope}`,
        `${a};background-color: lightblue;color:black`,
        "",
        `${a};${r ? `color:${r};` : ""}${s ? `background-color:${s}` : ""}`,
        ...t
      );
    }
    error(...e) {
      this.print("error", ...e);
    }
    log(...e) {
      this.print("log", ...e);
    }
  })("SDK", { bgColor: "forestgreen", textColor: "white" });
  class Ft {
    constructor() {
      Ot(this, "listeners", new Map()),
        Ot(this, "listenersCount", 0),
        Ot(this, "subscribeListeners", []);
    }
    clear() {
      this.listeners.clear(), (this.subscribeListeners = []);
    }
    get count() {
      return this.listenersCount + this.subscribeListeners.length;
    }
    emit(e, ...t) {
      this.subscribeListeners.forEach((i) => i({ event: e, args: t })),
        (this.listeners.get(e) || []).forEach(([i, n]) => {
          i(...t), n && this.off(e, i);
        });
    }
    on(e, t, i) {
      let n = this.listeners.get(e);
      return (
        n || this.listeners.set(e, (n = [])),
        n.push([t, i]),
        (this.listenersCount += 1),
        () => this.off(e, t)
      );
    }
    off(e, t) {
      const i = this.listeners.get(e) || [];
      for (let n = 0; n < i.length; n += 1)
        if (t === i[n][0])
          return i.splice(n, 1), void (this.listenersCount -= 1);
    }
    subscribe(e) {
      return this.subscribeListeners.push(e), () => this.unsubscribe(e);
    }
    unsubscribe(e) {
      for (let t = 0; t < this.subscribeListeners.length; t += 1)
        if (this.subscribeListeners[t] === e)
          return void this.subscribeListeners.splice(t, 1);
    }
  }
  function Mt(e, t, i) {
    return (
      window.addEventListener(e, t, i),
      () => window.removeEventListener(e, t, i)
    );
  }
  function Bt(...e) {
    let t = !1;
    const i = [...e];
    return [
      (e) => !t && i.push(e),
      () => {
        t || ((t = !0), i.forEach((e) => e()));
      },
      t,
    ];
  }
  class qt extends Error {
    constructor(e, t, i) {
      super(t, { cause: i }),
        (this.type = e),
        Object.setPrototypeOf(this, qt.prototype);
    }
  }
  function Wt(e, t, i) {
    return new qt(e, t, i);
  }
  const Ht = "ERR_METHOD_UNSUPPORTED",
    $t = "ERR_METHOD_PARAMETER_UNSUPPORTED",
    jt = "ERR_UNKNOWN_ENV",
    Jt = "ERR_TIMED_OUT",
    zt = "ERR_UNEXPECTED_TYPE",
    Gt = "ERR_PARSE";
  function Yt() {
    return Wt(zt, "Value has unexpected type");
  }
  class Qt {
    constructor(e, t, i) {
      (this.parser = e), (this.isOptional = t), (this.type = i);
    }
    parse(e) {
      if (!this.isOptional || void 0 !== e)
        try {
          return this.parser(e);
        } catch (t) {
          throw Wt(
            Gt,
            "Unable to parse value" + (this.type ? ` as ${this.type}` : ""),
            t
          );
        }
    }
    optional() {
      return (this.isOptional = !0), this;
    }
  }
  function Kt(e, t) {
    return () => new Qt(e, !1, t);
  }
  const Xt = Kt((e) => {
    if ("boolean" == typeof e) return e;
    const t = String(e);
    if ("1" === t || "true" === t) return !0;
    if ("0" === t || "false" === t) return !1;
    throw Yt();
  }, "boolean");
  function Zt(e, t) {
    const i = {};
    for (const r in e) {
      const s = e[r];
      if (!s) continue;
      let a, o;
      if ("function" == typeof s || "parse" in s)
        (a = r), (o = "function" == typeof s ? s : s.parse.bind(s));
      else {
        const { type: e } = s;
        (a = s.from || r), (o = "function" == typeof e ? e : e.parse.bind(e));
      }
      try {
        const e = o(t(a));
        void 0 !== e && (i[r] = e);
      } catch (n) {
        throw Wt(Gt, `Unable to parse field "${r}"`, n);
      }
    }
    return i;
  }
  function ei(e) {
    let t = e;
    if (
      ("string" == typeof t && (t = JSON.parse(t)),
      "object" != typeof t || null === t || Array.isArray(t))
    )
      throw Yt();
    return t;
  }
  function ti(e, t) {
    return new Qt(
      (t) => {
        const i = ei(t);
        return Zt(e, (e) => i[e]);
      },
      !1,
      t
    );
  }
  const ii = Kt((e) => {
    if ("number" == typeof e) return e;
    if ("string" == typeof e) {
      const t = Number(e);
      if (!Number.isNaN(t)) return t;
    }
    throw Yt();
  }, "number");
  const ni = Kt((e) => {
      if ("string" == typeof e || "number" == typeof e) return e.toString();
      throw Yt();
    }, "string"),
    ri = Kt(
      (e) =>
        (function (e) {
          const t = e.replace(/\s/g, "").toLowerCase();
          if (
            (function (e) {
              return /^#[\da-f]{6}$/i.test(e);
            })(t)
          )
            return t;
          if (
            (function (e) {
              return /^#[\da-f]{3}$/i.test(e);
            })(t)
          ) {
            let e = "#";
            for (let i = 0; i < 3; i += 1) e += t[1 + i].repeat(2);
            return e;
          }
          const i =
            t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/) ||
            t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);
          if (!i)
            throw new Error(
              `Value "${e}" does not satisfy any of known RGB formats.`
            );
          return i.slice(1).reduce((e, t) => {
            const i = parseInt(t, 10).toString(16);
            return e + (1 === i.length ? "0" : "") + i;
          }, "#");
        })(ni().parse(e)),
      "rgb"
    );
  function si() {
    ["TelegramGameProxy_receiveEvent", "TelegramGameProxy", "Telegram"].forEach(
      (e) => {
        delete window[e];
      }
    );
  }
  function ai(e, t) {
    window.dispatchEvent(
      new MessageEvent("message", {
        data: JSON.stringify({ eventType: e, eventData: t }),
        source: window.parent,
      })
    );
  }
  const oi = {
    clipboard_text_received: ti({
      req_id: ni(),
      data: (e) => (null === e ? e : ni().optional().parse(e)),
    }),
    custom_method_invoked: ti({
      req_id: ni(),
      result: (e) => e,
      error: ni().optional(),
    }),
    invoice_closed: ti({ slug: ni(), status: ni() }),
    phone_requested: ti({ status: ni() }),
    popup_closed: {
      parse: (e) =>
        ti({ button_id: (e) => (null == e ? void 0 : ni().parse(e)) }).parse(
          null != e ? e : {}
        ),
    },
    qr_text_received: ti({ data: ni().optional() }),
    theme_changed: ti({
      theme_params: (e) => {
        const t = ri().optional();
        return Object.entries(ei(e)).reduce(
          (e, [i, n]) => ((e[i] = t.parse(n)), e),
          {}
        );
      },
    }),
    viewport_changed: ti({
      height: ii(),
      width: (e) => (null == e ? window.innerWidth : ii().parse(e)),
      is_state_stable: Xt(),
      is_expanded: Xt(),
    }),
    write_access_requested: ti({ status: ni() }),
  };
  function li() {
    const e = new Ft(),
      t = new Ft();
    t.subscribe((t) => {
      e.emit("event", { name: t.event, payload: t.args[0] });
    }),
      [
        ["TelegramGameProxy_receiveEvent"],
        ["TelegramGameProxy", "receiveEvent"],
        ["Telegram", "WebView", "receiveEvent"],
      ].forEach((e) => {
        let t = window;
        e.forEach((e, i, n) => {
          i !== n.length - 1
            ? (e in t || (t[e] = {}), (t = t[e]))
            : (t[e] = ai);
        });
      });
    const [, i] = Bt(
      si,
      Mt("resize", () => {
        t.emit("viewport_changed", {
          width: window.innerWidth,
          height: window.innerHeight,
          is_state_stable: !0,
          is_expanded: !0,
        });
      }),
      Mt("message", (e) => {
        if (e.source !== window.parent) return;
        let i;
        try {
          i = (function (e) {
            return ti({ eventType: ni(), eventData: (e) => e }).parse(e);
          })(e.data);
        } catch (a) {
          return;
        }
        const { eventType: n, eventData: r } = i,
          s = oi[n];
        try {
          const e = s ? s.parse(r) : r;
          t.emit(...(e ? [n, e] : [n]));
        } catch (o) {
          xt.error(
            `An error occurred processing the "${n}" event from the Telegram application. Please, file an issue here: https://github.com/Telegram-Mini-Apps/tma.js/issues/new/choose`,
            i,
            o
          );
        }
      }),
      () => e.clear(),
      () => t.clear()
    );
    return [
      {
        on: t.on.bind(t),
        off: t.off.bind(t),
        subscribe: (t) => e.on("event", t),
        unsubscribe(t) {
          e.off("event", t);
        },
        get count() {
          return t.count + e.count;
        },
      },
      i,
    ];
  }
  const [ci, di] = Dt(
    (e) => {
      const [t, i] = li(),
        n = t.off.bind(t);
      return (
        (t.off = (i, r) => {
          const { count: s } = t;
          n(i, r), s && !t.count && e();
        }),
        [t, i]
      );
    },
    ([, e]) => e()
  );
  function hi(e, t, i) {
    return ci()[0].on(e, t, i);
  }
  function ui(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
  }
  function pi(e, t) {
    return (
      (function (e, t) {
        const i = e.split("."),
          n = t.split("."),
          r = Math.max(i.length, n.length);
        for (let s = 0; s < r; s += 1) {
          const e = parseInt(i[s] || "0", 10),
            t = parseInt(n[s] || "0", 10);
          if (e !== t) return e > t ? 1 : -1;
        }
        return 0;
      })(e, t) <= 0
    );
  }
  function mi(e, t, i) {
    if ("string" == typeof i) {
      if ("web_app_open_link" === e && "try_instant_view" === t)
        return pi("6.4", i);
      if ("web_app_set_header_color" === e && "color" === t)
        return pi("6.9", i);
    }
    switch (e) {
      case "web_app_open_tg_link":
      case "web_app_open_invoice":
      case "web_app_setup_back_button":
      case "web_app_set_background_color":
      case "web_app_set_header_color":
      case "web_app_trigger_haptic_feedback":
        return pi("6.1", t);
      case "web_app_open_popup":
        return pi("6.2", t);
      case "web_app_close_scan_qr_popup":
      case "web_app_open_scan_qr_popup":
      case "web_app_read_text_from_clipboard":
        return pi("6.4", t);
      case "web_app_switch_inline_query":
        return pi("6.7", t);
      case "web_app_invoke_custom_method":
      case "web_app_request_write_access":
      case "web_app_request_phone":
        return pi("6.9", t);
      case "web_app_setup_settings_button":
        return pi("6.10", t);
      case "web_app_biometry_get_info":
      case "web_app_biometry_open_settings":
      case "web_app_biometry_request_access":
      case "web_app_biometry_request_auth":
      case "web_app_biometry_update_token":
        return pi("7.2", t);
      default:
        return [
          "iframe_ready",
          "iframe_will_reload",
          "web_app_close",
          "web_app_data_send",
          "web_app_expand",
          "web_app_open_link",
          "web_app_ready",
          "web_app_request_theme",
          "web_app_request_viewport",
          "web_app_setup_main_button",
          "web_app_setup_closing_behavior",
        ].includes(e);
    }
  }
  let _i = "https://web.telegram.org";
  function gi() {
    return _i;
  }
  function fi(e, t, i) {
    let n,
      r = {};
    void 0 === t && void 0 === i
      ? (r = {})
      : void 0 !== t && void 0 !== i
      ? ((r = i), (n = t))
      : void 0 !== t && ("targetOrigin" in t ? (r = t) : (n = t));
    const { targetOrigin: s = gi() } = r;
    if (
      (function () {
        try {
          return window.self !== window.top;
        } catch (e) {
          return !0;
        }
      })()
    )
      window.parent.postMessage(
        JSON.stringify({ eventType: e, eventData: n }),
        s
      );
    else if (
      (function (e) {
        return (
          "external" in e &&
          ui(e.external) &&
          "notify" in e.external &&
          "function" == typeof e.external.notify
        );
      })(window)
    )
      window.external.notify(JSON.stringify({ eventType: e, eventData: n }));
    else {
      if (
        !(function (e) {
          return (
            "TelegramWebviewProxy" in e &&
            ui(e.TelegramWebviewProxy) &&
            "postEvent" in e.TelegramWebviewProxy &&
            "function" == typeof e.TelegramWebviewProxy.postEvent
          );
        })(window)
      )
        throw Wt(
          jt,
          "Unable to determine current environment and possible way to send event. You are probably trying to use Mini Apps method outside of Telegram application environment."
        );
      window.TelegramWebviewProxy.postEvent(e, JSON.stringify(n));
    }
  }
  function vi(e) {
    return (t, i) => {
      if (!mi(t, e))
        throw Wt(Ht, `Method "${t}" is unsupported in Mini Apps version ${e}`);
      if (ui(i)) {
        let n;
        if (
          ("web_app_open_link" === t && "try_instant_view" in i
            ? (n = "try_instant_view")
            : "web_app_set_header_color" === t && "color" in i && (n = "color"),
          n && !mi(t, n, e))
        )
          throw Wt(
            $t,
            `Parameter "${n}" of "${t}" method is unsupported in Mini Apps version ${e}`
          );
      }
      return fi(t, i);
    };
  }
  function yi(e, t) {
    return Promise.race([
      "function" == typeof e ? e() : e,
      new Promise((e, i) => {
        setTimeout(() => {
          i(
            (function (e) {
              return Wt(Jt, `Timeout reached: ${e}ms`);
            })(t)
          );
        }, t);
      }),
    ]);
  }
  const Ei = Kt(
    (e) => (e instanceof Date ? e : new Date(1e3 * ii().parse(e))),
    "Date"
  );
  function bi(e, t) {
    return new Qt(
      (t) => {
        if ("string" != typeof t && !(t instanceof URLSearchParams)) throw Yt();
        const i = "string" == typeof t ? new URLSearchParams(t) : t;
        return Zt(e, (e) => {
          const t = i.get(e);
          return null === t ? void 0 : t;
        });
      },
      !1,
      t
    );
  }
  const Ai = ti(
      {
        id: ii(),
        type: ni(),
        title: ni(),
        photoUrl: { type: ni().optional(), from: "photo_url" },
        username: ni().optional(),
      },
      "Chat"
    ).optional(),
    Ti = ti(
      {
        addedToAttachmentMenu: {
          type: Xt().optional(),
          from: "added_to_attachment_menu",
        },
        allowsWriteToPm: { type: Xt().optional(), from: "allows_write_to_pm" },
        firstName: { type: ni(), from: "first_name" },
        id: ii(),
        isBot: { type: Xt().optional(), from: "is_bot" },
        isPremium: { type: Xt().optional(), from: "is_premium" },
        languageCode: { type: ni().optional(), from: "language_code" },
        lastName: { type: ni().optional(), from: "last_name" },
        photoUrl: { type: ni().optional(), from: "photo_url" },
        username: ni().optional(),
      },
      "User"
    ).optional();
  function wi(e) {
    return e.replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`);
  }
  const ki = Kt((e) => {
    const t = ri().optional();
    return Object.entries(ei(e)).reduce(
      (e, [i, n]) => (
        (e[
          (function (e) {
            return e.replace(/_[a-z]/g, (e) => e[1].toUpperCase());
          })(i)
        ] = t.parse(n)),
        e
      ),
      {}
    );
  }, "ThemeParams");
  function Pi(e) {
    return bi({
      botInline: { type: Xt().optional(), from: "tgWebAppBotInline" },
      initData: {
        type: bi(
          {
            authDate: { type: Ei(), from: "auth_date" },
            canSendAfter: { type: ii().optional(), from: "can_send_after" },
            chat: Ai,
            chatInstance: { type: ni().optional(), from: "chat_instance" },
            chatType: { type: ni().optional(), from: "chat_type" },
            hash: ni(),
            queryId: { type: ni().optional(), from: "query_id" },
            receiver: Ti,
            startParam: { type: ni().optional(), from: "start_param" },
            user: Ti,
          },
          "InitData"
        ).optional(),
        from: "tgWebAppData",
      },
      initDataRaw: { type: ni().optional(), from: "tgWebAppData" },
      platform: { type: ni(), from: "tgWebAppPlatform" },
      showSettings: { type: Xt().optional(), from: "tgWebAppShowSettings" },
      startParam: { type: ni().optional(), from: "tgWebAppStartParam" },
      themeParams: { type: ki(), from: "tgWebAppThemeParams" },
      version: { type: ni(), from: "tgWebAppVersion" },
    }).parse(e);
  }
  function Ii(e) {
    return Pi(e.replace(/^[^?#]*[?#]/, "").replace(/[?#]/g, "&"));
  }
  function Ci() {
    return Ii(window.location.href);
  }
  function Si() {
    return performance.getEntriesByType("navigation")[0];
  }
  function Vi() {
    const e = Si();
    if (!e) throw new Error("Unable to get first navigation entry.");
    return Ii(e.name);
  }
  function Ri(e) {
    return `tma.js/${e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)}`;
  }
  function Li(e, t) {
    sessionStorage.setItem(Ri(e), JSON.stringify(t));
  }
  function Ni(e) {
    const t = sessionStorage.getItem(Ri(e));
    try {
      return t ? JSON.parse(t) : void 0;
    } catch (i) {}
  }
  function Ui() {
    return Pi(Ni("launchParams") || "");
  }
  function Oi(e) {
    const {
        initDataRaw: t,
        themeParams: i,
        platform: n,
        version: r,
        showSettings: s,
        startParam: a,
        botInline: o,
      } = e,
      l = new URLSearchParams();
    return (
      l.set("tgWebAppPlatform", n),
      l.set(
        "tgWebAppThemeParams",
        (function (e) {
          return JSON.stringify(
            Object.fromEntries(Object.entries(e).map(([e, t]) => [wi(e), t]))
          );
        })(i)
      ),
      l.set("tgWebAppVersion", r),
      t && l.set("tgWebAppData", t),
      a && l.set("tgWebAppStartParam", a),
      "boolean" == typeof s && l.set("tgWebAppShowSettings", s ? "1" : "0"),
      "boolean" == typeof o && l.set("tgWebAppBotInline", o ? "1" : "0"),
      l.toString()
    );
  }
  function Di(e) {
    Li("launchParams", Oi(e));
  }
  function xi() {
    const e = Si();
    return !(!e || "reload" !== e.type);
  }
  const [Fi] = Dt(function () {
    let e = 0;
    return () => (e += 1).toString();
  });
  class Mi {
    constructor(e, t) {
      Ot(this, "supports"),
        (this.supports = (function (e, t) {
          return (i) => mi(t[i], e);
        })(e, t));
    }
  }
  class Bi extends Mi {
    constructor(e, t, i) {
      var n, r;
      super(e, { readTextFromClipboard: "web_app_read_text_from_clipboard" }),
        Ot(this, "supportsParam"),
        (this.version = e),
        (this.createRequestId = t),
        (this.postEvent = i),
        (this.supportsParam =
          ((n = e),
          (r = {
            "openLink.tryInstantView": [
              "web_app_open_link",
              "try_instant_view",
            ],
          }),
          (e) => {
            const [t, i] = r[e];
            return mi(t, i, n);
          }));
    }
    openLink(e, t) {
      const i = new URL(e, window.location.href).toString();
      mi("web_app_open_link", this.version)
        ? this.postEvent(
            "web_app_open_link",
            l({ url: i }, "boolean" == typeof t ? { try_instant_view: t } : {})
          )
        : window.open(i, "_blank");
    }
    openTelegramLink(e) {
      const {
        hostname: t,
        pathname: i,
        search: n,
      } = new URL(e, "https://t.me");
      if ("t.me" !== t)
        throw new Error(
          `URL has not allowed hostname: ${t}. Only "t.me" is allowed`
        );
      mi("web_app_open_tg_link", this.version)
        ? this.postEvent("web_app_open_tg_link", { path_full: i + n })
        : (window.location.href = e);
    }
    readTextFromClipboard() {
      return h(this, null, function* () {
        const e = this.createRequestId(),
          { data: t = null } = yield (function (e) {
            return h(this, null, function* () {
              let t;
              const i = new Promise((e) => {
                  t = e;
                }),
                { event: n, capture: r, timeout: s } = e,
                [, a] = Bt(
                  ...(Array.isArray(n) ? n : [n]).map((e) =>
                    hi(e, (e) => (!r || r(e)) && t(e))
                  )
                );
              try {
                return (
                  (e.postEvent || fi)(e.method, e.params),
                  yield s ? yi(i, s) : i
                );
              } finally {
                a();
              }
            });
          })({
            method: "web_app_read_text_from_clipboard",
            event: "clipboard_text_received",
            postEvent: this.postEvent,
            params: { req_id: e },
            capture: ((i = e), ({ req_id: e }) => e === i),
          });
        var i;
        return t;
      });
    }
    shareURL(e, t) {
      this.openTelegramLink(
        "https://t.me/share/url?" +
          new URLSearchParams({ url: e, text: t || "" }).toString()
      );
    }
  }
  const qi =
    ((Wi = ({ version: e, postEvent: t, createRequestId: i }) =>
      new Bi(e, i, t)),
    () => {
      const e = (function () {
          for (const t of [Ci, Vi, Ui])
            try {
              const e = t();
              return Di(e), e;
            } catch (e) {}
          throw new Error(
            "Unable to retrieve launch parameters from any known source."
          );
        })(),
        t = c(l({}, e), { postEvent: vi(e.version), createRequestId: Fi() });
      if ("function" == typeof Wi) return Wi(t);
      const [i, n, r] = Bt(),
        s = Hi(c(l({}, t), { state: xi() ? Ni(Wi) : void 0, addCleanup: i })),
        a = (e) => (
          r ||
            i(
              e.on("change", (e) => {
                Li(Wi, e);
              })
            ),
          e
        );
      return [s instanceof Promise ? s.then(a) : a(s), n];
    });
  var Wi, Hi;
  function $i({ url: e, logger: t }) {
    try {
      const t = document.createElement("a");
      t.href = e;
      const i = qi();
      ("http:" !== t.protocol && "https:" !== t.protocol) ||
      "t.me" !== t.hostname
        ? i.openLink(e, !0)
        : i.openTelegramLink(e);
    } catch (Wi) {
      t.add("url", e).send("OpenUrlError", "WARN"), window.open(e, "_blank");
    }
  }
  function ji({ timer: e }) {
    const t = Tt(),
      i = St(),
      n = qe(
        (i) => {
          i.isTrusted &&
            (i.stopPropagation(),
            e.stop(),
            $i({ url: "https://t.me/+NumBvh9EOiM2MDAy", logger: t }));
        },
        [t, e]
      );
    return Rt("div", {
      className: It(Nt.label, "light" === i ? Nt.light : Nt.dark),
      onClick: n,
      children: Rt("span", {
        className: Nt.text,
        children: "@adsgram_ai Ð²Ð‚â€œ ads in Telegram",
      }),
    });
  }
  const Ji = { footer: "_footer_1310a_1" },
    zi = {
      timer: "_timer_dby7g_1",
      dark: "_dark_dby7g_16",
      light: "_light_dby7g_22",
      time: "_time_dby7g_1",
    },
    Gi = (e) => {
      const t = e % 60,
        i = (e) => `00${e}`.slice(-2);
      return `${i(((e - t) / 60) % 60)}:${i(t)}`;
    };
  function Yi({ timer: e }) {
    const t = St(),
      [i, n] = xe(ye),
      r = qe((e, t) => {
        n(t);
      }, []);
    return (
      Fe(() => {
        e.subscribeOnTimeUpdate(r);
      }, [r, e]),
      Rt("div", {
        className: It(zi.timer, "light" === t ? zi.light : zi.dark),
        children: Rt("span", { className: zi.time, children: Gi(i) }),
      })
    );
  }
  function Qi({ timer: e }) {
    return Rt("div", {
      className: Ji.footer,
      children: [Rt(Yi, { timer: e }), Rt(ji, { timer: e })],
    });
  }
  const Ki = {
      post: "_post_8vnoc_1",
      show: "_show_8vnoc_1",
      channel: "_channel_8vnoc_21",
      icon: "_icon_8vnoc_29",
      tail: "_tail_8vnoc_37",
      message: "_message_8vnoc_51",
      image: "_image_8vnoc_60",
      text: "_text_8vnoc_68",
      title: "_title_8vnoc_80",
      description: "_description_8vnoc_91",
      footer: "_footer_8vnoc_98",
      name: "_name_8vnoc_103",
      clickable: "_clickable_8vnoc_124",
      adlabel: "_adlabel_8vnoc_129",
    },
    Xi = "Ad Ð’Â· 18+";
  function Zi() {
    return (
      void 0 !== window.ontouchstart ||
      "ontouchstart" in document.documentElement
    );
  }
  function en({
    image: e,
    title: t,
    description: i,
    advertiserName: n,
    icon: r,
    onClick: s,
    isClickable: a,
  }) {
    const o = Tt(),
      l = St(),
      c = Zi(),
      d = qe(
        (e) => {
          o.add("url", e.currentTarget.src).send("ImageLoadError");
        },
        [o]
      );
    return Rt("div", {
      className: It(Ki.post, "light" === l ? Ki.light : Ki.dark),
      children: [
        Rt("div", {
          className: Ki.channel,
          children: Rt("img", {
            className: Ki.icon,
            src: r,
            alt: "channel",
            onError: d,
          }),
        }),
        Rt("div", {
          className: Ki.tail,
          children: Rt("svg", {
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 6 10",
            children: Rt("path", { d: "M0 9c4.5-.5 6-5.5 6-9v10H0V9Z" }),
          }),
        }),
        Rt("div", {
          className: Ki.message,
          children: [
            Rt("img", {
              className: Ki.image,
              src: e,
              alt: "Post main",
              onError: d,
            }),
            Rt("div", {
              className: Ki.text,
              children: [
                Rt("h2", { className: Ki.title, children: t }),
                Rt("span", { className: Ki.description, children: i }),
                Rt("div", {
                  className: Ki.footer,
                  children: [
                    Rt("button", {
                      className: It(Ki.name, a && Ki.clickable),
                      onClick: c ? void 0 : s,
                      onTouchStart: c ? s : void 0,
                      disabled: !a,
                      children: n,
                    }),
                    Rt("span", { className: Ki.adlabel, children: Xi }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  const tn = {
    button: "_button_1ktlg_1",
    show: "_show_1ktlg_1",
    light: "_light_1ktlg_46",
    dark: "_dark_1ktlg_50",
    click: "_click_1ktlg_1",
  };
  function nn({ buttonName: e, onClick: t }) {
    const i = St(),
      n = Zi();
    return Rt("button", {
      className: It(tn.button, "light" === i ? tn.light : tn.dark),
      onClick: n ? void 0 : t,
      onTouchStart: n ? t : void 0,
      children: e,
    });
  }
  const rn = {
      ru: "Ð â€“Ð Ñ˜Ð Ñ‘, Ð¡â€¡Ð¡â€šÐ Ñ•Ð Â±Ð¡â€¹ Ð Â·Ð Â°Ð Â±Ð¡Ð‚Ð Â°Ð¡â€šÐ¡ÐŠ Ð Ð…Ð Â°Ð Ñ–Ð¡Ð‚Ð Â°Ð Ò‘Ð¡Ñ“!",
      en: "Click to get the reward!",
    },
    sn = {
      tooltip: "_tooltip_6220y_1",
      show: "_show_6220y_1",
      title: "_title_6220y_46",
    };
  function an(e) {
    const t =
      (null == (i = k()) ? void 0 : i.language_code) ||
      window.navigator.language;
    var i;
    return t in e ? e[t] : e.en;
  }
  function on() {
    return Rt("div", {
      className: sn.tooltip,
      children: Rt("h3", { className: sn.title, children: an(rn) }),
    });
  }
  function ln(e) {
    const t = window.getComputedStyle(e);
    if (
      "0px" == t.height ||
      "none" == t.display ||
      "0" == t.opacity ||
      "hidden" == t.visibility ||
      "circle(0px at 50% 50%)" == t.clipPath ||
      "scale(0)" == t.transform ||
      e.hasAttribute("hidden") ||
      "hidden" === document.visibilityState
    )
      return !1;
    const i = e.getBoundingClientRect(),
      n = i.left,
      r = i.top,
      s = document.elementFromPoint(n, r);
    if (null != s && !e.isSameNode(s)) {
      const i = t.zIndex,
        n = window.getComputedStyle(s).zIndex;
      if (Number(i) < Number(n)) return !1;
      if (
        "" === i &&
        "" === n &&
        e.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING
      )
        return !1;
    }
    return (
      (i.bottom - i.top) * (i.right - i.left) >=
      0.5 *
        ((window.innerHeight || document.documentElement.clientHeight) *
          (window.innerWidth || document.documentElement.clientWidth))
    );
  }
  function cn(e) {
    const t = Me(null),
      [i, n] = xe(!1);
    return (
      Fe(() => {
        t.current = new IntersectionObserver(
          ([e]) => {
            e.isIntersecting && ln(e.target) ? n(!0) : n(!1);
          },
          { root: null, rootMargin: "0px", threshold: 0.5 }
        );
      }, []),
      Fe(
        () => (
          e.current && t.current && t.current.observe(e.current),
          () => {
            t.current && (n(!1), t.current.disconnect());
          }
        ),
        [e]
      ),
      i
    );
  }
  function dn({ EventEmitter: e, rewardTracking: t }) {
    const i = Tt();
    Fe(() => {
      const n = () => {
        ve(t, i);
      };
      return (
        e.on(me.onReward, n),
        () => {
          e.off(me.onReward, n);
        }
      );
    }, [e, t, i]);
  }
  const hn = class e {
    constructor({ callbacks: e, endTime: t }) {
      d(this, "startTime"),
        d(this, "endTime"),
        d(this, "time"),
        d(this, "stopped"),
        d(this, "finished"),
        d(this, "stopTime"),
        d(this, "fromStopToResumeTime"),
        d(this, "onSpecificTimeCallback"),
        d(this, "onTimeUpdateCallback"),
        d(this, "onTickUpdateCallback"),
        d(this, "onEndCallback"),
        (this.startTime = performance.now()),
        (this.endTime = t),
        (this.time = 0),
        (this.stopped = !1),
        (this.finished = !1),
        (this.stopTime = 0),
        (this.fromStopToResumeTime = 0),
        (this.onSpecificTimeCallback = {});
      for (const i in e)
        isNaN(Number(i)) || (this.onSpecificTimeCallback[i] = e[i]);
      (this.onTickUpdateCallback = e.onTimeUpdate),
        (this.onTickUpdateCallback = e.onTick),
        (this.onEndCallback = e.endCallback),
        this.tick();
    }
    tick() {
      var t, i, n;
      if (this.stopped || this.finished) return;
      if (
        performance.now() - this.fromStopToResumeTime - this.startTime >
        1e3 * (this.time + 1)
      ) {
        ++this.time,
          null == (t = this.onTimeUpdateCallback) ||
            t.call(this, this.time, this.elapsedTime);
        const e = this.onSpecificTimeCallback[this.time];
        null == e || e(this.time, this.elapsedTime);
      }
      this.time < this.endTime
        ? setTimeout(this.tick.bind(this), e.checkInterval)
        : (null == (i = this.onEndCallback) ||
            i.call(this, this.time, this.elapsedTime),
          (this.finished = !0)),
        null == (n = this.onTickUpdateCallback) ||
          n.call(this, this.time, this.elapsedTime);
    }
    stop() {
      return (
        this.stopped ||
          ((this.stopTime = performance.now()), (this.stopped = !0)),
        this.time
      );
    }
    resume() {
      if (this.stopped) {
        const e = performance.now() - this.stopTime;
        (this.fromStopToResumeTime += e), (this.stopped = !1), this.tick();
      }
    }
    restart() {
      (this.time = 0),
        (this.fromStopToResumeTime = performance.now() - this.stopTime),
        (this.stopped = !1),
        (this.finished = !1),
        this.tick();
    }
    get isFinished() {
      return this.finished;
    }
    get isStopped() {
      return this.stopped;
    }
    get elapsedTime() {
      return this.endTime - this.time;
    }
    subscribeOnSpecificTimeUpdate(e, t) {
      this.onSpecificTimeCallback[e] = t;
    }
    subscribeOnTimeUpdate(e) {
      this.onTimeUpdateCallback = e;
    }
    subscribeOnTickUpdate(e) {
      this.onTickUpdateCallback = e;
    }
    subscribeOnEnd(e) {
      this.onEndCallback = e;
    }
    unsubscribeAll() {
      (this.onEndCallback = void 0),
        (this.onTimeUpdateCallback = void 0),
        (this.onSpecificTimeCallback = {}),
        (this.onTickUpdateCallback = void 0);
    }
    destroy() {
      (this.finished = !0), this.unsubscribeAll();
    }
  };
  d(hn, "checkInterval", 100);
  let un = hn;
  function pn(e, t) {
    Fe(() => {
      let i = !1;
      const n = () => {
          "visible" === document.visibilityState && i && ((i = !1), e()),
            "hidden" === document.visibilityState &&
              ((i = !0), null == t || t());
        },
        r = () => {
          i && ((i = !1), e());
        };
      return (
        window.addEventListener("visibilitychange", n),
        window.addEventListener("focus", r),
        () => {
          window.removeEventListener("visibilitychange", n),
            window.removeEventListener("focus", r);
        }
      );
    }, [t, e]);
  }
  const mn = "_banner_1g55r_1",
    _n = he("");
  function gn() {
    return We(_n);
  }
  const fn = {
      button: "_button_qaa11_1",
      show: "_show_qaa11_1",
      visible: "_visible_qaa11_35",
      hidden: "_hidden_qaa11_40",
    },
    vn = 15e3,
    yn = he(null);
  function En() {
    return We(yn);
  }
  function bn(e) {
    return `${e}-action-button`;
  }
  const An = new (class {
    constructor() {
      d(this, "subscribers", {}), d(this, "dispatchedEvents", new Set());
    }
    onFiredBeforePlayerEvent(e, t) {
      var i, n;
      this.dispatchedEvents.has(e)
        ? t()
        : (null != (n = (i = this.subscribers)[e]) ? n : (i[e] = [])).push(t);
    }
    dispatchEvent(e) {
      var t;
      this.dispatchedEvents.add(e),
        null == (t = this.subscribers[e]) || t.map((e) => e()),
        (this.subscribers[e] = []);
    }
    clear() {
      (this.dispatchedEvents = new Set()), (this.subscribers = {});
    }
  })();
  function Tn({ text: e }) {
    const t = gn(),
      i = En(),
      n = bt(),
      r = Tt(),
      [s, a] = xe(!1),
      [o, l] = xe(""),
      c = Me(1 / 0),
      d = qe(() => {
        i &&
          (l(i.clickThroughUrl),
          i.on("showActionButton", () => {
            a(!0);
          }));
      }, [i]);
    Fe(() => {
      i && An.onFiredBeforePlayerEvent("adstarted", d);
    }, [d, i]);
    const h = qe(
      (e) => {
        e.isTrusted &&
          (!(function (e) {
            let t;
            try {
              t = new URL(e);
            } catch (Wi) {
              return !1;
            }
            const i = /https?:/.test(t.protocol),
              n = "t.me" === t.hostname,
              r = /bot\/./i.test(t.pathname);
            return i && n && r;
          })(o)
            ? (null == i || i.pause(), (c.current = Date.now()))
            : i && (i.muted = !0),
          $i({ url: o, logger: r }));
      },
      [o, r, i]
    );
    return (
      pn(
        qe(() => {
          Date.now() - c.current > vn && n.emit("onReward"),
            (c.current = 1 / 0);
        }, [n])
      ),
      Rt("button", {
        id: bn(t),
        className: `${fn.button} ${s ? fn.visible : fn.hidden}`,
        onClick: h,
        children: e,
      })
    );
  }
  const wn = { footer: "_footer_171kv_1" };
  const kn = {
    timeline: "_timeline_gq9ld_1",
    bar: "_bar_gq9ld_10",
    progress: "_progress_gq9ld_17",
  };
  function Pn({ packshotDuration: e }) {
    const t = Me(null),
      i = En(),
      n = qe(() => {
        t.current &&
          i &&
          (function ({ player: e, progress: t, packshotDuration: i }) {
            const n = e.adDuration + (i || 0);
            let r,
              s,
              a = !1,
              o = !1;
            e.on("adcomplete", () => {
              o = !0;
            }),
              e.on("addestroyed", () => {
                a = !0;
              });
            const l = (c) => {
              if (o && i) {
                void 0 === r && (r = c);
                const o = c - r;
                if ((o >= i && (a = !0), s !== c)) {
                  const i = ((e.adDuration + o) / n) * 100;
                  t.style.width = `${i}%`;
                }
                s = c;
              }
              if (!o) {
                const i = (e.adCurrentTime / n) * 100;
                Number(t.style.width.replace("%", "")) < i &&
                  (t.style.width = `${i}%`);
              }
              a || requestAnimationFrame(l);
            };
            requestAnimationFrame(l);
          })({ player: i, progress: t.current, packshotDuration: e });
      }, [e, i]);
    return (
      Fe(() => {
        i && i.on("adstarted", n);
      }, [n, i]),
      Rt("div", {
        className: kn.timeline,
        children: Rt("div", {
          className: kn.bar,
          children: Rt("div", { className: kn.progress, ref: t }),
        }),
      })
    );
  }
  function In({ packshotDuration: e }) {
    return Rt("div", {
      className: wn.footer,
      children: Rt(Pn, { packshotDuration: e }),
    });
  }
  const Cn = {
    wrapper: "_wrapper_mc76l_1",
    adlabel: "_adlabel_mc76l_16",
    tgchannel: "_tgchannel_mc76l_21",
  };
  function Sn() {
    const e = En(),
      t = Tt(),
      i = qe(() => {
        e && e.pause(),
          $i({ url: "https://t.me/+NumBvh9EOiM2MDAy", logger: t });
      }, [t, e]);
    return Rt("div", {
      className: Cn.wrapper,
      onClick: i,
      children: [
        Rt("p", {
          className: Cn.tgchannel,
          children: "@adsgram_ai Ð²Ð‚â€œ ads in Telegram",
        }),
        Rt("p", { className: Cn.adlabel, children: Xi }),
      ],
    });
  }
  const Vn = {
    close: "_close_3nc4s_1",
    clickable: "_clickable_3nc4s_9",
    image: "_image_3nc4s_13",
    show: "_show_3nc4s_1",
  };
  const Rn = { ru: "Ð ÑŸÐ¡Ð‚Ð Ñ•Ð Ñ—Ð¡Ñ“Ð¡ÐƒÐ¡â€šÐ Ñ‘Ð¡â€šÐ¡ÐŠ Ð¡Ð‚Ð ÂµÐ Ñ”Ð Â»Ð Â°Ð Ñ˜Ð¡Ñ“?", en: "Skip Advert?" },
    Ln = {
      ru: "Ð ÑŸÐ¡Ð‚Ð Ñ•Ð Ñ—Ð¡Ñ“Ð¡ÐƒÐ¡â€šÐ Ñ‘Ð Ð† Ð¡Ð‚Ð ÂµÐ Ñ”Ð Â»Ð Â°Ð Ñ˜Ð¡Ñ“, Ð Ð…Ð Âµ Ð Ñ—Ð Ñ•Ð Â»Ð¡Ñ“Ð¡â€¡Ð Ñ‘Ð¡â€šÐ Âµ Ð Ð…Ð Â°Ð Ñ–Ð¡Ð‚Ð Â°Ð Ò‘Ð¡Ñ“",
      en: "If you skip ad, you won't get a reward",
    },
    Nn = { ru: "Ð ÑŸÐ¡Ð‚Ð Ñ•Ð Ñ—Ð¡Ñ“Ð¡ÐƒÐ¡â€šÐ Ñ‘Ð¡â€šÐ¡ÐŠ", en: "Skip anyway" },
    Un = {
      ru: "Ð ÑŸÐ¡Ð‚Ð Ñ•Ð Ò‘Ð Ñ•Ð Â»Ð Â¶Ð Ñ‘Ð¡â€šÐ¡ÐŠ Ð Ñ—Ð¡Ð‚Ð Ñ•Ð¡ÐƒÐ Ñ˜Ð Ñ•Ð¡â€šÐ¡Ð‚",
      en: "Continue watching",
    };
  function On() {
    return `${gn()}-video`;
  }
  const Dn = { NONSKIP_ALWAYS: !0 },
    xn =
      "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.295%207.115a.997.997%200%201%200-1.41-1.41L12%2010.59%207.115%205.705a.997.997%200%200%200-1.41%201.41L10.59%2012l-4.885%204.885a.997.997%200%200%200%201.41%201.41L12%2013.41l4.885%204.885a.997.997%200%201%200%201.41-1.41L13.41%2012l4.885-4.885Z'%20fill='%23fff'/%3e%3c/svg%3e";
  function Fn() {
    const e = En(),
      t = (function () {
        const e = En(),
          t = On(),
          [i, n] = xe(null);
        return (
          Fe(() => {
            An.onFiredBeforePlayerEvent("adstarted", () => {
              var i;
              if (null == e ? void 0 : e.isSkippableAd) {
                const e =
                  null == (i = document.getElementById(t))
                    ? void 0
                    : i.querySelector("div.rmp-ad-container-skip");
                e && n(e);
              }
            });
          }, [e, t]),
          i
        );
      })(),
      i = bt(),
      [n, r] = xe(!1),
      s = (function () {
        const e = En(),
          [t, i] = xe(!1);
        return (
          Fe(() => {
            e &&
              e.on("adcomplete", () => {
                i(!0);
              });
          }, [e]),
          t
        );
      })(),
      a = (function ({ onSkip: e, onContinue: t }) {
        return qe(() => {
          var i, n;
          if (
            "function" ==
            typeof (null ==
            (n = null == (i = window.Telegram) ? void 0 : i.WebApp)
              ? void 0
              : n.showPopup)
          )
            try {
              window.Telegram.WebApp.showPopup(
                {
                  title: an(Rn),
                  message: an(Ln),
                  buttons: [
                    { id: "skip", type: "destructive", text: an(Nn) },
                    { id: "continue", type: "default", text: an(Un) },
                  ],
                },
                (i) => {
                  "skip" === i && e(), "continue" === i && t();
                }
              );
            } catch (Wi) {
              e();
            }
          else e();
        }, [t, e]);
      })({
        onSkip: qe(() => {
          t && t.click(), i.emit(me.onSkip);
        }, [i, t]),
        onContinue: qe(() => {
          null == e || e.play();
        }, [e]),
      }),
      o = qe(() => {
        n && (s ? i.emit(me.onReward) : (null == e || e.pause(), a()));
      }, [i, n, s, e, a]);
    return (
      Fe(() => {
        e &&
          !Dn.NONSKIP_ALWAYS &&
          e.on("adskippablestatechanged", () => r(e.adSkippableState));
      }, [e]),
      Rt("div", {
        onClick: o,
        className: It(Vn.close, { clickable: n }),
        children:
          n &&
          Rt("img", { className: Vn.image, src: xn, alt: "Close ad button" }),
      })
    );
  }
  const Mn = { header: "_header_vtxy5_1", preview: "_preview_vtxy5_14" },
    Bn = { volume: "_volume_p5grr_1" },
    qn =
      "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13%205.345c0-1.576-1.92-2.349-3.011-1.213L6.654%207.6H5a3%203%200%200%200-3%203v2.8a3%203%200%200%200%203%203h1.23l3.798%203.703c1.109%201.08%202.972.295%202.972-1.253V5.345ZM5%2014.4h2.044L11%2018.257V5.966L7.505%209.6H5a1%201%200%200%200-1%201v2.8a1%201%200%200%200%201%201Z'%20fill='%23fff'/%3e%3cpath%20d='M16.707%208.793a1%201%200%201%200-1.414%201.414L17.086%2012l-1.793%201.793a1%201%200%200%200%201.414%201.414l1.793-1.793%201.793%201.793a1%201%200%200%200%201.414-1.414L19.914%2012l1.793-1.793a1%201%200%200%200-1.414-1.414L18.5%2010.586l-1.793-1.793Z'%20fill='%23fff'/%3e%3c/svg%3e",
    Wn =
      "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.807%203.39a1%201%200%200%201%201.324-.497%2010%2010%200%200%201%20.253%2018.095%201%201%200%201%201-.877-1.797%208%208%200%200%200-.202-14.476%201%201%200%200%201-.498-1.324Z'%20fill='%23fff'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.989%204.132C11.08%202.996%2013%203.769%2013%205.345V18.85c0%201.548-1.863%202.334-2.972%201.253L6.231%2016.4H5a3%203%200%200%201-3-3v-2.8a3%203%200%200%201%203-3h1.654l3.335-3.468ZM7.044%2014.4H5a1%201%200%200%201-1-1v-2.8a1%201%200%200%201%201-1h2.505L11%205.966v12.29L7.044%2014.4Z'%20fill='%23fff'/%3e%3cpath%20d='M16.479%206.536a1%201%200%200%200-.827%201.821%204%204%200%200%201%20.102%207.238%201%201%200%200%200%20.876%201.798%206%206%200%200%200-.151-10.857Z'%20fill='%23fff'/%3e%3c/svg%3e";
  function Hn() {
    const e = En(),
      [t, i] = xe(!1);
    Fe(() => {
      e && i(e.muted);
    }, [e]);
    return Rt("div", {
      onClick: qe(() => {
        (e.muted = !t), i((e) => !e);
      }, [t, e]),
      className: Bn.volume,
      children: Rt(
        "img",
        t ? { src: qn, alt: "unmute" } : { src: Wn, alt: "mute" }
      ),
    });
  }
  function $n() {
    return Rt("div", {
      className: It(Mn.header, !1),
      children: [Rt(Hn, {}), Rt(Sn, {}), Rt(Fn, {})],
    });
  }
  const jn = {
    packshot: "_packshot_1og3q_1",
    creatives: "_creatives_1og3q_24",
    image: "_image_1og3q_36",
    title: "_title_1og3q_45",
    description: "_description_1og3q_56",
    play: "_play_1og3q_66",
    pause: "_pause_1og3q_71",
  };
  function Jn({ image: e, title: t, description: i, duration: n }) {
    const r = En(),
      s = bt(),
      [a, o] = xe(!1);
    return (
      Fe(() => {
        let e;
        return (
          r &&
            r.on("adcomplete", () => {
              o(!0), (e = setTimeout(() => s.emit(me.onReward), n));
            }),
          () => {
            e && clearTimeout(e);
          }
        );
      }, [s, n, r]),
      Rt("div", {
        className: `${jn.packshot} ${a ? jn.play : jn.pause}`,
        children: Rt("div", {
          className: `${jn.creatives} ${a ? jn.play : jn.pause}`,
          children: [
            Rt("img", { className: jn.image, src: e, alt: "app icon" }),
            Rt("span", { className: jn.title, children: t }),
            Rt("span", { className: jn.description, children: i }),
          ],
        }),
      })
    );
  }
  function zn(e = {}) {
    return {
      id: e.id || null,
      adId: e.adId || null,
      sequence: e.sequence || null,
      apiFramework: e.apiFramework || null,
      universalAdIds: [],
      creativeExtensions: [],
    };
  }
  const Gn = [
    "ADCATEGORIES",
    "ADCOUNT",
    "ADPLAYHEAD",
    "ADSERVINGID",
    "ADTYPE",
    "APIFRAMEWORKS",
    "APPBUNDLE",
    "ASSETURI",
    "BLOCKEDADCATEGORIES",
    "BREAKMAXADLENGTH",
    "BREAKMAXADS",
    "BREAKMAXDURATION",
    "BREAKMINADLENGTH",
    "BREAKMINDURATION",
    "BREAKPOSITION",
    "CLICKPOS",
    "CLICKTYPE",
    "CLIENTUA",
    "CONTENTID",
    "CONTENTPLAYHEAD",
    "CONTENTURI",
    "DEVICEIP",
    "DEVICEUA",
    "DOMAIN",
    "EXTENSIONS",
    "GDPRCONSENT",
    "IFA",
    "IFATYPE",
    "INVENTORYSTATE",
    "LATLONG",
    "LIMITADTRACKING",
    "MEDIAMIME",
    "MEDIAPLAYHEAD",
    "OMIDPARTNER",
    "PAGEURL",
    "PLACEMENTTYPE",
    "PLAYERCAPABILITIES",
    "PLAYERSIZE",
    "PLAYERSTATE",
    "PODSEQUENCE",
    "REGULATIONS",
    "SERVERSIDE",
    "SERVERUA",
    "TRANSACTIONID",
    "UNIVERSALADID",
    "VASTVERSIONS",
    "VERIFICATIONVENDORS",
  ];
  function Yn(e, t = {}, i = {}) {
    const n = [],
      r = Xn(e);
    !t.ERRORCODE ||
      i.isCustomCode ||
      /^[0-9]{3}$/.test(t.ERRORCODE) ||
      (t.ERRORCODE = 900),
      (t.CACHEBUSTING = nr(Math.round(1e8 * Math.random()))),
      (t.TIMESTAMP = new Date().toISOString()),
      (t.RANDOM = t.random = t.CACHEBUSTING);
    for (const s in t) t[s] = ir(t[s]);
    for (const s in r) {
      const e = r[s];
      "string" == typeof e && n.push(Qn(e, t));
    }
    return n;
  }
  function Qn(e, t) {
    const i = (e = Kn(e, t)).match(/[^[\]]+(?=])/g);
    if (!i) return e;
    let n = i.filter((e) => Gn.indexOf(e) > -1);
    return 0 === n.length
      ? e
      : ((n = n.reduce((e, t) => ((e[t] = -1), e), {})), Kn(e, n));
  }
  function Kn(e, t) {
    let i = e;
    for (const n in t) {
      const e = t[n];
      i = i.replace(new RegExp(`(?:\\[|%%)(${n})(?:\\]|%%)`, "g"), e);
    }
    return i;
  }
  function Xn(e) {
    return Array.isArray(e)
      ? e.map((e) => (e && e.hasOwnProperty("url") ? e.url : e))
      : e;
  }
  function Zn(e) {
    return /^(https?:\/\/|\/\/)/.test(e);
  }
  function er(e, t) {
    for (let i = 0; i < t.length; i++) if (tr(t[i], e)) return !0;
    return !1;
  }
  function tr(e, t) {
    if (e && t) {
      const i = Object.getOwnPropertyNames(e),
        n = Object.getOwnPropertyNames(t);
      return i.length === n.length && e.id === t.id && e.url === t.url;
    }
    return !1;
  }
  function ir(e) {
    return encodeURIComponent(e).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16)}`
    );
  }
  function nr(e, t = 8) {
    return e.toString().padStart(t, "0");
  }
  const rr = {
    track: function (e, t, i) {
      Yn(e, t, i).forEach((e) => {
        if ("undefined" != typeof window && null !== window) {
          new Image().src = e;
        }
      });
    },
    resolveURLTemplates: Yn,
    extractURLsFromTemplates: Xn,
    filterValidUrlTemplates: function (e) {
      return Array.isArray(e)
        ? e.filter((e) => Zn(e.hasOwnProperty("url") ? e.url : e))
        : Zn(e);
    },
    containsTemplateObject: er,
    isTemplateObjectEqual: tr,
    encodeURIComponentRFC3986: ir,
    replaceUrlMacros: Qn,
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    flatten: function e(t) {
      return t.reduce((t, i) => t.concat(Array.isArray(i) ? e(i) : i), []);
    },
    joinArrayOfUniqueTemplateObjs: function (e = [], t = []) {
      const i = Array.isArray(e) ? e : [],
        n = Array.isArray(t) ? t : [];
      return i.concat(n).reduce((e, t) => (er(t, e) || e.push(t), e), []);
    },
    isValidTimeValue: function (e) {
      return Number.isFinite(e) && e >= -2;
    },
    addLeadingZeros: nr,
  };
  function sr(e) {
    return -1 !== ["true", "TRUE", "True", "1"].indexOf(e);
  }
  const ar = {
    childByName: function (e, t) {
      const i = e.childNodes;
      for (const n in i) {
        const e = i[n];
        if (e.nodeName === t) return e;
      }
    },
    childrenByName: function (e, t) {
      const i = [],
        n = e.childNodes;
      for (const r in n) {
        const e = n[r];
        e.nodeName === t && i.push(e);
      }
      return i;
    },
    resolveVastAdTagURI: function (e, t) {
      if (!t) return e;
      if (0 === e.indexOf("//")) {
        const { protocol: t } = location;
        return `${t}${e}`;
      }
      if (-1 === e.indexOf("://")) {
        return `${t.slice(0, t.lastIndexOf("/"))}/${e}`;
      }
      return e;
    },
    parseBoolean: sr,
    parseNodeText: function (e) {
      return e && (e.textContent || e.text || "").trim();
    },
    copyNodeAttribute: function (e, t, i) {
      const n = t.getAttribute(e);
      n && i.setAttribute(e, n);
    },
    parseAttributes: function (e) {
      const t = e.attributes,
        i = {};
      for (let n = 0; n < t.length; n++) i[t[n].nodeName] = t[n].nodeValue;
      return i;
    },
    parseDuration: function (e) {
      if (null == e) return -1;
      if (rr.isNumeric(e)) return parseInt(e);
      const t = e.split(":");
      if (3 !== t.length) return -1;
      const i = t[2].split(".");
      let n = parseInt(i[0]);
      2 === i.length && (n += parseFloat(`0.${i[1]}`));
      const r = parseInt(60 * t[1]),
        s = parseInt(60 * t[0] * 60);
      return isNaN(s) || isNaN(r) || isNaN(n) || r > 3600 || n > 60
        ? -1
        : s + r + n;
    },
    splitVAST: function (e) {
      const t = [];
      let i = null;
      return (
        e.forEach((n, r) => {
          if (
            (n.sequence && (n.sequence = parseInt(n.sequence, 10)),
            n.sequence > 1)
          ) {
            const t = e[r - 1];
            if (t && t.sequence === n.sequence - 1)
              return void (i && i.push(n));
            delete n.sequence;
          }
          (i = [n]), t.push(i);
        }),
        t
      );
    },
    assignAttributes: function (e, t) {
      if (e)
        for (const i in e) {
          const n = e[i];
          if (n.nodeName && n.nodeValue && t.hasOwnProperty(n.nodeName)) {
            let e = n.nodeValue;
            "boolean" == typeof t[n.nodeName] && (e = sr(e)),
              (t[n.nodeName] = e);
          }
        }
    },
    mergeWrapperAdData: function (e, t) {
      var i;
      (e.errorURLTemplates = t.errorURLTemplates.concat(e.errorURLTemplates)),
        (e.impressionURLTemplates = t.impressionURLTemplates.concat(
          e.impressionURLTemplates
        )),
        (e.extensions = t.extensions.concat(e.extensions)),
        t.viewableImpression.length > 0 &&
          (e.viewableImpression = [
            ...e.viewableImpression,
            ...t.viewableImpression,
          ]),
        (e.followAdditionalWrappers = t.followAdditionalWrappers),
        (e.allowMultipleAds = t.allowMultipleAds),
        (e.fallbackOnNoAd = t.fallbackOnNoAd);
      const n = (t.creatives || []).filter((e) => e && "companion" === e.type),
        r = n.reduce(
          (e, t) => (
            (t.variations || []).forEach((t) => {
              (t.companionClickTrackingURLTemplates || []).forEach((t) => {
                rr.containsTemplateObject(t, e) || e.push(t);
              });
            }),
            e
          ),
          []
        );
      e.creatives = n.concat(e.creatives);
      const s =
          t.videoClickTrackingURLTemplates &&
          t.videoClickTrackingURLTemplates.length,
        a =
          t.videoCustomClickURLTemplates &&
          t.videoCustomClickURLTemplates.length;
      if (
        (e.creatives.forEach((e) => {
          if (t.trackingEvents && t.trackingEvents[e.type])
            for (const i in t.trackingEvents[e.type]) {
              const n = t.trackingEvents[e.type][i];
              Array.isArray(e.trackingEvents[i]) || (e.trackingEvents[i] = []),
                (e.trackingEvents[i] = e.trackingEvents[i].concat(n));
            }
          "linear" === e.type &&
            (s &&
              (e.videoClickTrackingURLTemplates =
                e.videoClickTrackingURLTemplates.concat(
                  t.videoClickTrackingURLTemplates
                )),
            a &&
              (e.videoCustomClickURLTemplates =
                e.videoCustomClickURLTemplates.concat(
                  t.videoCustomClickURLTemplates
                )),
            !t.videoClickThroughURLTemplate ||
              (null !== e.videoClickThroughURLTemplate &&
                void 0 !== e.videoClickThroughURLTemplate) ||
              (e.videoClickThroughURLTemplate =
                t.videoClickThroughURLTemplate)),
            "companion" === e.type &&
              r.length &&
              (e.variations || []).forEach((e) => {
                e.companionClickTrackingURLTemplates =
                  rr.joinArrayOfUniqueTemplateObjs(
                    e.companionClickTrackingURLTemplates,
                    r
                  );
              });
        }),
        t.adVerifications &&
          (e.adVerifications = e.adVerifications.concat(t.adVerifications)),
        t.blockedAdCategories &&
          (e.blockedAdCategories = e.blockedAdCategories.concat(
            t.blockedAdCategories
          )),
        null == (i = t.creatives) ? void 0 : i.length)
      ) {
        const i = t.creatives.filter((e) => {
          var t;
          return (
            (null == (t = e.icons) ? void 0 : t.length) && !e.mediaFiles.length
          );
        });
        i.length && (e.creatives = e.creatives.concat(i));
      }
    },
  };
  function or(e, t) {
    const i = (function (e = {}) {
      const { id: t, adId: i, sequence: n, apiFramework: r } = zn(e);
      return {
        id: t,
        adId: i,
        sequence: n,
        apiFramework: r,
        type: "companion",
        required: null,
        variations: [],
      };
    })(t);
    return (
      (i.required = e.getAttribute("required") || null),
      (i.variations = ar.childrenByName(e, "Companion").map((e) => {
        const t = (function (e = {}) {
          return {
            id: e.id || null,
            adType: "companionAd",
            width: e.width || 0,
            height: e.height || 0,
            assetWidth: e.assetWidth || null,
            assetHeight: e.assetHeight || null,
            expandedWidth: e.expandedWidth || null,
            expandedHeight: e.expandedHeight || null,
            apiFramework: e.apiFramework || null,
            adSlotId: e.adSlotId || null,
            pxratio: e.pxratio || "1",
            renderingMode: e.renderingMode || "default",
            staticResources: [],
            htmlResources: [],
            iframeResources: [],
            adParameters: null,
            altText: null,
            companionClickThroughURLTemplate: null,
            companionClickTrackingURLTemplates: [],
            trackingEvents: {},
          };
        })(ar.parseAttributes(e));
        (t.htmlResources = ar
          .childrenByName(e, "HTMLResource")
          .reduce((e, t) => {
            const i = ar.parseNodeText(t);
            return i ? e.concat(i) : e;
          }, [])),
          (t.iframeResources = ar
            .childrenByName(e, "IFrameResource")
            .reduce((e, t) => {
              const i = ar.parseNodeText(t);
              return i ? e.concat(i) : e;
            }, [])),
          (t.staticResources = ar
            .childrenByName(e, "StaticResource")
            .reduce((e, t) => {
              const i = ar.parseNodeText(t);
              return i
                ? e.concat({
                    url: i,
                    creativeType: t.getAttribute("creativeType") || null,
                  })
                : e;
            }, [])),
          (t.altText = ar.parseNodeText(ar.childByName(e, "AltText")) || null);
        const i = ar.childByName(e, "TrackingEvents");
        i &&
          ar.childrenByName(i, "Tracking").forEach((e) => {
            const i = e.getAttribute("event"),
              n = ar.parseNodeText(e);
            i &&
              n &&
              (Array.isArray(t.trackingEvents[i]) || (t.trackingEvents[i] = []),
              t.trackingEvents[i].push(n));
          }),
          (t.companionClickTrackingURLTemplates = ar
            .childrenByName(e, "CompanionClickTracking")
            .map((e) => ({
              id: e.getAttribute("id") || null,
              url: ar.parseNodeText(e),
            }))),
          (t.companionClickThroughURLTemplate =
            ar.parseNodeText(ar.childByName(e, "CompanionClickThrough")) ||
            null);
        const n = ar.childByName(e, "AdParameters");
        return (
          n &&
            (t.adParameters = {
              value: ar.parseNodeText(n),
              xmlEncoded: n.getAttribute("xmlEncoded") || null,
            }),
          t
        );
      })),
      i
    );
  }
  function lr(e, t) {
    let i;
    const n = (function (e = {}) {
      const { id: t, adId: i, sequence: n, apiFramework: r } = zn(e);
      return {
        id: t,
        adId: i,
        sequence: n,
        apiFramework: r,
        type: "linear",
        duration: 0,
        skipDelay: null,
        mediaFiles: [],
        mezzanine: null,
        interactiveCreativeFile: null,
        closedCaptionFiles: [],
        videoClickThroughURLTemplate: null,
        videoClickTrackingURLTemplates: [],
        videoCustomClickURLTemplates: [],
        adParameters: null,
        icons: [],
        trackingEvents: {},
      };
    })(t);
    n.duration = ar.parseDuration(
      ar.parseNodeText(ar.childByName(e, "Duration"))
    );
    const r = e.getAttribute("skipoffset");
    if (null == r) n.skipDelay = null;
    else if ("%" === r.charAt(r.length - 1) && -1 !== n.duration) {
      const e = parseInt(r, 10);
      n.skipDelay = n.duration * (e / 100);
    } else n.skipDelay = ar.parseDuration(r);
    const s = ar.childByName(e, "VideoClicks");
    if (s) {
      const e = ar.childByName(s, "ClickThrough");
      (n.videoClickThroughURLTemplate = e
        ? { id: e.getAttribute("id") || null, url: ar.parseNodeText(e) }
        : null),
        ar.childrenByName(s, "ClickTracking").forEach((e) => {
          n.videoClickTrackingURLTemplates.push({
            id: e.getAttribute("id") || null,
            url: ar.parseNodeText(e),
          });
        }),
        ar.childrenByName(s, "CustomClick").forEach((e) => {
          n.videoCustomClickURLTemplates.push({
            id: e.getAttribute("id") || null,
            url: ar.parseNodeText(e),
          });
        });
    }
    const a = ar.childByName(e, "AdParameters");
    a &&
      (n.adParameters = {
        value: ar.parseNodeText(a),
        xmlEncoded: a.getAttribute("xmlEncoded") || null,
      }),
      ar.childrenByName(e, "TrackingEvents").forEach((e) => {
        ar.childrenByName(e, "Tracking").forEach((e) => {
          let t = e.getAttribute("event");
          const r = ar.parseNodeText(e);
          if (t && r) {
            if ("progress" === t) {
              if (((i = e.getAttribute("offset")), !i)) return;
              t =
                "%" === i.charAt(i.length - 1)
                  ? `progress-${i}`
                  : `progress-${Math.round(ar.parseDuration(i))}`;
            }
            Array.isArray(n.trackingEvents[t]) || (n.trackingEvents[t] = []),
              n.trackingEvents[t].push(r);
          }
        });
      }),
      ar.childrenByName(e, "MediaFiles").forEach((e) => {
        ar.childrenByName(e, "MediaFile").forEach((e) => {
          n.mediaFiles.push(
            (function (e) {
              const t = {
                id: null,
                fileURL: null,
                fileSize: 0,
                deliveryType: "progressive",
                mimeType: null,
                mediaType: null,
                codec: null,
                bitrate: 0,
                minBitrate: 0,
                maxBitrate: 0,
                width: 0,
                height: 0,
                apiFramework: null,
                scalable: null,
                maintainAspectRatio: null,
              };
              (t.id = e.getAttribute("id")),
                (t.fileURL = ar.parseNodeText(e)),
                (t.deliveryType = e.getAttribute("delivery")),
                (t.codec = e.getAttribute("codec")),
                (t.mimeType = e.getAttribute("type")),
                (t.mediaType = e.getAttribute("mediaType") || "2D"),
                (t.apiFramework = e.getAttribute("apiFramework")),
                (t.fileSize = parseInt(e.getAttribute("fileSize") || 0)),
                (t.bitrate = parseInt(e.getAttribute("bitrate") || 0)),
                (t.minBitrate = parseInt(e.getAttribute("minBitrate") || 0)),
                (t.maxBitrate = parseInt(e.getAttribute("maxBitrate") || 0)),
                (t.width = parseInt(e.getAttribute("width") || 0)),
                (t.height = parseInt(e.getAttribute("height") || 0));
              const i = e.getAttribute("scalable");
              i && "string" == typeof i && (t.scalable = ar.parseBoolean(i));
              const n = e.getAttribute("maintainAspectRatio");
              n &&
                "string" == typeof n &&
                (t.maintainAspectRatio = ar.parseBoolean(n));
              return t;
            })(e)
          );
        });
        const t = ar.childByName(e, "InteractiveCreativeFile");
        t &&
          (n.interactiveCreativeFile = (function (e) {
            const t = (function (e = {}) {
              return {
                type: e.type || null,
                apiFramework: e.apiFramework || null,
                variableDuration: ar.parseBoolean(e.variableDuration),
                fileURL: null,
              };
            })(ar.parseAttributes(e));
            return (t.fileURL = ar.parseNodeText(e)), t;
          })(t));
        const i = ar.childByName(e, "ClosedCaptionFiles");
        i &&
          ar.childrenByName(i, "ClosedCaptionFile").forEach((e) => {
            const t = (function (e = {}) {
              return {
                type: e.type || null,
                language: e.language || null,
                fileURL: null,
              };
            })(ar.parseAttributes(e));
            (t.fileURL = ar.parseNodeText(e)), n.closedCaptionFiles.push(t);
          });
        const r = ar.childByName(e, "Mezzanine"),
          s = (function (e, t) {
            const i = {};
            let n = !1;
            return (
              t.forEach((t) => {
                e && e.getAttribute(t) ? (i[t] = e.getAttribute(t)) : (n = !0);
              }),
              n ? null : i
            );
          })(r, ["delivery", "type", "width", "height"]);
        if (s) {
          const e = {
            id: null,
            fileURL: null,
            delivery: null,
            codec: null,
            type: null,
            width: 0,
            height: 0,
            fileSize: 0,
            mediaType: "2D",
          };
          (e.id = r.getAttribute("id")),
            (e.fileURL = ar.parseNodeText(r)),
            (e.delivery = s.delivery),
            (e.codec = r.getAttribute("codec")),
            (e.type = s.type),
            (e.width = parseInt(s.width, 10)),
            (e.height = parseInt(s.height, 10)),
            (e.fileSize = parseInt(r.getAttribute("fileSize"), 10)),
            (e.mediaType = r.getAttribute("mediaType") || "2D"),
            (n.mezzanine = e);
        }
      });
    const o = ar.childByName(e, "Icons");
    return (
      o &&
        ar.childrenByName(o, "Icon").forEach((e) => {
          n.icons.push(
            (function (e) {
              const t = {
                program: null,
                height: 0,
                width: 0,
                xPosition: 0,
                yPosition: 0,
                apiFramework: null,
                offset: null,
                duration: 0,
                type: null,
                staticResource: null,
                htmlResource: null,
                iframeResource: null,
                pxratio: "1",
                iconClickThroughURLTemplate: null,
                iconClickTrackingURLTemplates: [],
                iconViewTrackingURLTemplate: null,
                iconClickFallbackImages: [],
              };
              (t.program = e.getAttribute("program")),
                (t.height = parseInt(e.getAttribute("height") || 0)),
                (t.width = parseInt(e.getAttribute("width") || 0)),
                (t.xPosition = (function (e) {
                  if (-1 !== ["left", "right"].indexOf(e)) return e;
                  return parseInt(e || 0);
                })(e.getAttribute("xPosition"))),
                (t.yPosition = (function (e) {
                  if (-1 !== ["top", "bottom"].indexOf(e)) return e;
                  return parseInt(e || 0);
                })(e.getAttribute("yPosition"))),
                (t.apiFramework = e.getAttribute("apiFramework")),
                (t.pxratio = e.getAttribute("pxratio") || "1"),
                (t.offset = ar.parseDuration(e.getAttribute("offset"))),
                (t.duration = ar.parseDuration(e.getAttribute("duration"))),
                ar.childrenByName(e, "HTMLResource").forEach((e) => {
                  (t.type = e.getAttribute("creativeType") || "text/html"),
                    (t.htmlResource = ar.parseNodeText(e));
                }),
                ar.childrenByName(e, "IFrameResource").forEach((e) => {
                  (t.type = e.getAttribute("creativeType") || 0),
                    (t.iframeResource = ar.parseNodeText(e));
                }),
                ar.childrenByName(e, "StaticResource").forEach((e) => {
                  (t.type = e.getAttribute("creativeType") || 0),
                    (t.staticResource = ar.parseNodeText(e));
                });
              const i = ar.childByName(e, "IconClicks");
              if (i) {
                (t.iconClickThroughURLTemplate = ar.parseNodeText(
                  ar.childByName(i, "IconClickThrough")
                )),
                  ar.childrenByName(i, "IconClickTracking").forEach((e) => {
                    t.iconClickTrackingURLTemplates.push({
                      id: e.getAttribute("id") || null,
                      url: ar.parseNodeText(e),
                    });
                  });
                const e = ar.childByName(i, "IconClickFallbackImages");
                e &&
                  ar
                    .childrenByName(e, "IconClickFallbackImage")
                    .forEach((e) => {
                      t.iconClickFallbackImages.push({
                        url: ar.parseNodeText(e) || null,
                        width: e.getAttribute("width") || null,
                        height: e.getAttribute("height") || null,
                      });
                    });
              }
              return (
                (t.iconViewTrackingURLTemplate = ar.parseNodeText(
                  ar.childByName(e, "IconViewTracking")
                )),
                t
              );
            })(e)
          );
        }),
      n
    );
  }
  function cr(e, t) {
    const i = (function (e = {}) {
      const { id: t, adId: i, sequence: n, apiFramework: r } = zn(e);
      return {
        id: t,
        adId: i,
        sequence: n,
        apiFramework: r,
        type: "nonlinear",
        variations: [],
        trackingEvents: {},
      };
    })(t);
    return (
      ar.childrenByName(e, "TrackingEvents").forEach((e) => {
        let t, n;
        ar.childrenByName(e, "Tracking").forEach((e) => {
          (t = e.getAttribute("event")),
            (n = ar.parseNodeText(e)),
            t &&
              n &&
              (Array.isArray(i.trackingEvents[t]) || (i.trackingEvents[t] = []),
              i.trackingEvents[t].push(n));
        });
      }),
      ar.childrenByName(e, "NonLinear").forEach((e) => {
        const t = {
          id: null,
          width: 0,
          height: 0,
          expandedWidth: 0,
          expandedHeight: 0,
          scalable: !0,
          maintainAspectRatio: !0,
          minSuggestedDuration: 0,
          apiFramework: "static",
          adType: "nonLinearAd",
          type: null,
          staticResource: null,
          htmlResource: null,
          iframeResource: null,
          nonlinearClickThroughURLTemplate: null,
          nonlinearClickTrackingURLTemplates: [],
          adParameters: null,
        };
        (t.id = e.getAttribute("id") || null),
          (t.width = e.getAttribute("width")),
          (t.height = e.getAttribute("height")),
          (t.expandedWidth = e.getAttribute("expandedWidth")),
          (t.expandedHeight = e.getAttribute("expandedHeight")),
          (t.scalable = ar.parseBoolean(e.getAttribute("scalable"))),
          (t.maintainAspectRatio = ar.parseBoolean(
            e.getAttribute("maintainAspectRatio")
          )),
          (t.minSuggestedDuration = ar.parseDuration(
            e.getAttribute("minSuggestedDuration")
          )),
          (t.apiFramework = e.getAttribute("apiFramework")),
          ar.childrenByName(e, "HTMLResource").forEach((e) => {
            (t.type = e.getAttribute("creativeType") || "text/html"),
              (t.htmlResource = ar.parseNodeText(e));
          }),
          ar.childrenByName(e, "IFrameResource").forEach((e) => {
            (t.type = e.getAttribute("creativeType") || 0),
              (t.iframeResource = ar.parseNodeText(e));
          }),
          ar.childrenByName(e, "StaticResource").forEach((e) => {
            (t.type = e.getAttribute("creativeType") || 0),
              (t.staticResource = ar.parseNodeText(e));
          });
        const n = ar.childByName(e, "AdParameters");
        n &&
          (t.adParameters = {
            value: ar.parseNodeText(n),
            xmlEncoded: n.getAttribute("xmlEncoded") || null,
          }),
          (t.nonlinearClickThroughURLTemplate = ar.parseNodeText(
            ar.childByName(e, "NonLinearClickThrough")
          )),
          ar.childrenByName(e, "NonLinearClickTracking").forEach((e) => {
            t.nonlinearClickTrackingURLTemplates.push({
              id: e.getAttribute("id") || null,
              url: ar.parseNodeText(e),
            });
          }),
          i.variations.push(t);
      }),
      i
    );
  }
  function dr(e) {
    const t = [];
    return (
      e.forEach((e) => {
        const i = hr(e);
        i && t.push(i);
      }),
      t
    );
  }
  function hr(e) {
    if ("#comment" === e.nodeName) return null;
    const t = { name: null, value: null, attributes: {}, children: [] },
      i = e.attributes,
      n = e.childNodes;
    if (((t.name = e.nodeName), e.attributes))
      for (const s in i)
        if (i.hasOwnProperty(s)) {
          const e = i[s];
          e.nodeName && e.nodeValue && (t.attributes[e.nodeName] = e.nodeValue);
        }
    for (const s in n)
      if (n.hasOwnProperty(s)) {
        const e = hr(n[s]);
        e && t.children.push(e);
      }
    if (
      0 === t.children.length ||
      (1 === t.children.length &&
        ["#cdata-section", "#text"].indexOf(t.children[0].name) >= 0)
    ) {
      const i = ar.parseNodeText(e);
      "" !== i && (t.value = i), (t.children = []);
    }
    return null === (r = t).value &&
      0 === Object.keys(r.attributes).length &&
      0 === r.children.length
      ? null
      : t;
    var r;
  }
  function ur(e) {
    const t = [];
    return (
      e.forEach((e) => {
        const i = {
            id: e.getAttribute("id") || null,
            adId: pr(e),
            sequence: e.getAttribute("sequence") || null,
            apiFramework: e.getAttribute("apiFramework") || null,
          },
          n = [];
        let r;
        ar.childrenByName(e, "UniversalAdId").forEach((e) => {
          const t = {
            idRegistry: e.getAttribute("idRegistry") || "unknown",
            value: ar.parseNodeText(e),
          };
          n.push(t);
        });
        const s = ar.childByName(e, "CreativeExtensions");
        s && (r = dr(ar.childrenByName(s, "CreativeExtension")));
        for (const a in e.childNodes) {
          const s = e.childNodes[a];
          let o;
          switch (s.nodeName) {
            case "Linear":
              o = lr(s, i);
              break;
            case "NonLinearAds":
              o = cr(s, i);
              break;
            case "CompanionAds":
              o = or(s, i);
          }
          o &&
            (n && (o.universalAdIds = n),
            r && (o.creativeExtensions = r),
            t.push(o));
        }
      }),
      t
    );
  }
  function pr(e) {
    return (
      e.getAttribute("AdID") ||
      e.getAttribute("adID") ||
      e.getAttribute("adId") ||
      null
    );
  }
  const mr = {
    Wrapper: { subElements: ["VASTAdTagURI", "Impression"] },
    BlockedAdCategories: { attributes: ["authority"] },
    InLine: {
      subElements: [
        "AdSystem",
        "AdTitle",
        "Impression",
        "AdServingId",
        "Creatives",
      ],
    },
    Category: { attributes: ["authority"] },
    Pricing: { attributes: ["model", "currency"] },
    Verification: {
      oneOfinLineResources: ["JavaScriptResource", "ExecutableResource"],
      attributes: ["vendor"],
    },
    UniversalAdId: { attributes: ["idRegistry"] },
    JavaScriptResource: { attributes: ["apiFramework", "browserOptional"] },
    ExecutableResource: { attributes: ["apiFramework", "type"] },
    Tracking: { attributes: ["event"] },
    Creatives: { subElements: ["Creative"] },
    Creative: { subElements: ["UniversalAdId"] },
    Linear: { subElements: ["MediaFiles", "Duration"] },
    MediaFiles: { subElements: ["MediaFile"] },
    MediaFile: { attributes: ["delivery", "type", "width", "height"] },
    Mezzanine: { attributes: ["delivery", "type", "width", "height"] },
    NonLinear: {
      oneOfinLineResources: [
        "StaticResource",
        "IFrameResource",
        "HTMLResource",
      ],
      attributes: ["width", "height"],
    },
    Companion: {
      oneOfinLineResources: [
        "StaticResource",
        "IFrameResource",
        "HTMLResource",
      ],
      attributes: ["width", "height"],
    },
    StaticResource: { attributes: ["creativeType"] },
    Icons: { subElements: ["Icon"] },
    Icon: {
      oneOfinLineResources: [
        "StaticResource",
        "IFrameResource",
        "HTMLResource",
      ],
    },
  };
  function _r(e, t) {
    if (!mr[e.nodeName] || !mr[e.nodeName].attributes) return;
    const i = mr[e.nodeName].attributes.filter((t) => !e.getAttribute(t));
    i.length > 0 &&
      vr(
        { name: e.nodeName, parentName: e.parentNode.nodeName, attributes: i },
        t
      );
  }
  function gr(e, t, i) {
    const n = mr[e.nodeName],
      r = !i && "Wrapper" !== e.nodeName;
    if (!n || r) return;
    if (n.subElements) {
      const i = n.subElements.filter((t) => !ar.childByName(e, t));
      i.length > 0 &&
        vr(
          {
            name: e.nodeName,
            parentName: e.parentNode.nodeName,
            subElements: i,
          },
          t
        );
    }
    if (!i || !n.oneOfinLineResources) return;
    n.oneOfinLineResources.some((t) => ar.childByName(e, t)) ||
      vr(
        {
          name: e.nodeName,
          parentName: e.parentNode.nodeName,
          oneOfResources: n.oneOfinLineResources,
        },
        t
      );
  }
  function fr(e) {
    return e.children && 0 !== e.children.length;
  }
  function vr(
    {
      name: e,
      parentName: t,
      attributes: i,
      subElements: n,
      oneOfResources: r,
    },
    s
  ) {
    let a = `Element '${e}'`;
    (a += i
      ? ` missing required attribute(s) '${i.join(", ")}' `
      : n
      ? ` missing required sub element(s) '${n.join(", ")}' `
      : r
      ? ` must provide one of the following '${r.join(", ")}' `
      : " is empty"),
      s("VAST-warning", { message: a, parentElement: t, specVersion: 4.1 });
  }
  const yr = {
    verifyRequiredValues: function e(t, i, n) {
      if (t && t.nodeName)
        if (("InLine" === t.nodeName && (n = !0), _r(t, i), fr(t))) {
          gr(t, i, n);
          for (let r = 0; r < t.children.length; r++) e(t.children[r], i, n);
        } else
          0 === ar.parseNodeText(t).length &&
            vr({ name: t.nodeName, parentName: t.parentNode.nodeName }, i);
    },
    hasSubElements: fr,
    emitMissingValueWarning: vr,
    verifyRequiredAttributes: _r,
    verifyRequiredSubElements: gr,
  };
  function Er(e, t, { allowMultipleAds: i, followAdditionalWrappers: n } = {}) {
    const r = e.childNodes;
    for (const s in r) {
      const a = r[s];
      if (
        -1 !== ["Wrapper", "InLine"].indexOf(a.nodeName) &&
        ("Wrapper" !== a.nodeName || !1 !== n)
      ) {
        if (
          (ar.copyNodeAttribute("id", e, a),
          ar.copyNodeAttribute("sequence", e, a),
          ar.copyNodeAttribute("adType", e, a),
          "Wrapper" === a.nodeName)
        )
          return { ad: Tr(a, t), type: "WRAPPER" };
        if ("InLine" === a.nodeName)
          return { ad: br(a, t, { allowMultipleAds: i }), type: "INLINE" };
      }
    }
  }
  function br(e, t, { allowMultipleAds: i } = {}) {
    return !1 === i && e.getAttribute("sequence") ? null : Ar(e, t);
  }
  function Ar(e, t) {
    let i = [];
    t && yr.verifyRequiredValues(e, t);
    const n = e.childNodes,
      r = (function (e = {}) {
        return {
          id: e.id || null,
          sequence: e.sequence || null,
          adType: e.adType || null,
          adServingId: null,
          categories: [],
          expires: null,
          viewableImpression: [],
          system: null,
          title: null,
          description: null,
          advertiser: null,
          pricing: null,
          survey: null,
          errorURLTemplates: [],
          impressionURLTemplates: [],
          creatives: [],
          extensions: [],
          adVerifications: [],
          blockedAdCategories: [],
          followAdditionalWrappers: !0,
          allowMultipleAds: !1,
          fallbackOnNoAd: null,
        };
      })(ar.parseAttributes(e));
    for (const s in n) {
      const e = n[s];
      switch (e.nodeName) {
        case "Error":
          r.errorURLTemplates.push(ar.parseNodeText(e));
          break;
        case "Impression":
          r.impressionURLTemplates.push({
            id: e.getAttribute("id") || null,
            url: ar.parseNodeText(e),
          });
          break;
        case "Creatives":
          r.creatives = ur(ar.childrenByName(e, "Creative"));
          break;
        case "Extensions": {
          const t = ar.childrenByName(e, "Extension");
          (r.extensions = dr(t)), r.adVerifications.length || (i = kr(t));
          break;
        }
        case "AdVerifications":
          r.adVerifications = wr(ar.childrenByName(e, "Verification"));
          break;
        case "AdSystem":
          r.system = {
            value: ar.parseNodeText(e),
            version: e.getAttribute("version") || null,
          };
          break;
        case "AdTitle":
          r.title = ar.parseNodeText(e);
          break;
        case "AdServingId":
          r.adServingId = ar.parseNodeText(e);
          break;
        case "Category":
          r.categories.push({
            authority: e.getAttribute("authority") || null,
            value: ar.parseNodeText(e),
          });
          break;
        case "Expires":
          r.expires = parseInt(ar.parseNodeText(e), 10);
          break;
        case "ViewableImpression":
          r.viewableImpression.push(Pr(e));
          break;
        case "Description":
          r.description = ar.parseNodeText(e);
          break;
        case "Advertiser":
          r.advertiser = {
            id: e.getAttribute("id") || null,
            value: ar.parseNodeText(e),
          };
          break;
        case "Pricing":
          r.pricing = {
            value: ar.parseNodeText(e),
            model: e.getAttribute("model") || null,
            currency: e.getAttribute("currency") || null,
          };
          break;
        case "Survey":
          r.survey = {
            value: ar.parseNodeText(e),
            type: e.getAttribute("type") || null,
          };
          break;
        case "BlockedAdCategories":
          r.blockedAdCategories.push({
            authority: e.getAttribute("authority") || null,
            value: ar.parseNodeText(e),
          });
      }
    }
    return i.length && (r.adVerifications = r.adVerifications.concat(i)), r;
  }
  function Tr(e, t) {
    const i = Ar(e, t),
      n = e.getAttribute("followAdditionalWrappers"),
      r = e.getAttribute("allowMultipleAds"),
      s = e.getAttribute("fallbackOnNoAd");
    (i.followAdditionalWrappers = !n || ar.parseBoolean(n)),
      (i.allowMultipleAds = !!r && ar.parseBoolean(r)),
      (i.fallbackOnNoAd = s ? ar.parseBoolean(s) : null);
    let a = ar.childByName(e, "VASTAdTagURI");
    if (
      (a
        ? (i.nextWrapperURL = ar.parseNodeText(a))
        : ((a = ar.childByName(e, "VASTAdTagURL")),
          a && (i.nextWrapperURL = ar.parseNodeText(ar.childByName(a, "URL")))),
      i.creatives.forEach((e) => {
        if (-1 !== ["linear", "nonlinear"].indexOf(e.type)) {
          if (e.trackingEvents) {
            i.trackingEvents || (i.trackingEvents = {}),
              i.trackingEvents[e.type] || (i.trackingEvents[e.type] = {});
            for (const t in e.trackingEvents) {
              const n = e.trackingEvents[t];
              Array.isArray(i.trackingEvents[e.type][t]) ||
                (i.trackingEvents[e.type][t] = []),
                n.forEach((n) => {
                  i.trackingEvents[e.type][t].push(n);
                });
            }
          }
          e.videoClickTrackingURLTemplates &&
            (Array.isArray(i.videoClickTrackingURLTemplates) ||
              (i.videoClickTrackingURLTemplates = []),
            e.videoClickTrackingURLTemplates.forEach((e) => {
              i.videoClickTrackingURLTemplates.push(e);
            })),
            e.videoClickThroughURLTemplate &&
              (i.videoClickThroughURLTemplate = e.videoClickThroughURLTemplate),
            e.videoCustomClickURLTemplates &&
              (Array.isArray(i.videoCustomClickURLTemplates) ||
                (i.videoCustomClickURLTemplates = []),
              e.videoCustomClickURLTemplates.forEach((e) => {
                i.videoCustomClickURLTemplates.push(e);
              }));
        }
      }),
      i.nextWrapperURL)
    )
      return i;
  }
  function wr(e) {
    const t = [];
    return (
      e.forEach((e) => {
        const i = {
            resource: null,
            vendor: null,
            browserOptional: !1,
            apiFramework: null,
            type: null,
            parameters: null,
            trackingEvents: {},
          },
          n = e.childNodes;
        ar.assignAttributes(e.attributes, i);
        for (const t in n) {
          const e = n[t];
          switch (e.nodeName) {
            case "JavaScriptResource":
            case "ExecutableResource":
              (i.resource = ar.parseNodeText(e)),
                ar.assignAttributes(e.attributes, i);
              break;
            case "VerificationParameters":
              i.parameters = ar.parseNodeText(e);
          }
        }
        const r = ar.childByName(e, "TrackingEvents");
        r &&
          ar.childrenByName(r, "Tracking").forEach((e) => {
            const t = e.getAttribute("event"),
              n = ar.parseNodeText(e);
            t &&
              n &&
              (Array.isArray(i.trackingEvents[t]) || (i.trackingEvents[t] = []),
              i.trackingEvents[t].push(n));
          }),
          t.push(i);
      }),
      t
    );
  }
  function kr(e) {
    let t = null,
      i = [];
    return (
      e.some((e) => (t = ar.childByName(e, "AdVerifications"))),
      t && (i = wr(ar.childrenByName(t, "Verification"))),
      i
    );
  }
  function Pr(e) {
    const t = (e, t) => {
      const i = ar.parseNodeText(t);
      return i && e.push(i), e;
    };
    return {
      id: e.getAttribute("id") || null,
      viewable: ar.childrenByName(e, "Viewable").reduce(t, []),
      notViewable: ar.childrenByName(e, "NotViewable").reduce(t, []),
      viewUndetermined: ar.childrenByName(e, "ViewUndetermined").reduce(t, []),
    };
  }
  class Ir {
    constructor() {
      this._handlers = [];
    }
    on(e, t) {
      if ("function" != typeof t)
        throw new TypeError(
          "The handler argument must be of type Function. Received type " +
            typeof t
        );
      if (!e)
        throw new TypeError(
          "The event argument must be of type String. Received type " + typeof e
        );
      return this._handlers.push({ event: e, handler: t }), this;
    }
    once(e, t) {
      return this.on(
        e,
        (function (e, t, i) {
          const n = { fired: !1, wrapFn: void 0 };
          function r(...r) {
            n.fired || (e.off(t, n.wrapFn), (n.fired = !0), i.bind(e)(...r));
          }
          return (n.wrapFn = r), r;
        })(this, e, t)
      );
    }
    off(e, t) {
      return (
        (this._handlers = this._handlers.filter(
          (i) => i.event !== e || i.handler !== t
        )),
        this
      );
    }
    emit(e, ...t) {
      let i = !1;
      return (
        this._handlers.forEach((n) => {
          "*" === n.event && ((i = !0), n.handler(e, ...t)),
            n.event === e && ((i = !0), n.handler(...t));
        }),
        i
      );
    }
    removeAllListeners(e) {
      return e
        ? ((this._handlers = this._handlers.filter((t) => t.event !== e)), this)
        : ((this._handlers = []), this);
    }
    listenerCount(e) {
      return this._handlers.filter((t) => t.event === e).length;
    }
    listeners(e) {
      return this._handlers.reduce(
        (t, i) => (i.event === e && t.push(i.handler), t),
        []
      );
    }
    eventNames() {
      return this._handlers.map((e) => e.event);
    }
  }
  const Cr = {
      get: function (e, t, i) {
        i(
          new Error(
            "Please bundle the library for node to use the node urlHandler"
          )
        );
      },
    },
    Sr = 12e4;
  function Vr() {
    try {
      const e = new window.XMLHttpRequest();
      return "withCredentials" in e ? e : null;
    } catch (e) {
      return null;
    }
  }
  function Rr(e, t, i) {
    const n = i ? 408 : e.status,
      r = i
        ? `XHRURLHandler: Request timed out after ${e.timeout} ms (${n})`
        : `XHRURLHandler: ${e.statusText} (${n})`;
    t(new Error(r), null, { statusCode: n });
  }
  const Lr = {
    get: function (e, t, i) {
      if ("https:" === window.location.protocol && 0 === e.indexOf("http://"))
        return i(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
      try {
        const n = Vr();
        n.open("GET", e),
          (n.timeout = t.timeout || Sr),
          (n.withCredentials = t.withCredentials || !1),
          n.overrideMimeType && n.overrideMimeType("text/xml"),
          (n.onload = () =>
            (function (e, t) {
              200 === e.status
                ? t(null, e.responseXML, {
                    byteLength: e.response.length,
                    statusCode: e.status,
                  })
                : Rr(e, t, !1);
            })(n, i)),
          (n.onerror = () => Rr(n, i, !1)),
          (n.onabort = () => Rr(n, i, !1)),
          (n.ontimeout = () => Rr(n, i, !0)),
          n.send();
      } catch (n) {
        i(new Error("XHRURLHandler: Unexpected error"));
      }
    },
    supported: function () {
      return !!Vr();
    },
  };
  const Nr = {
    get: function (e, t, i) {
      return (
        i || ("function" == typeof t && (i = t), (t = {})),
        "undefined" == typeof window || null === window
          ? Cr.get(e, t, i)
          : Lr.supported()
          ? Lr.get(e, t, i)
          : i(
              new Error(
                "Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"
              )
            )
      );
    },
  };
  let Ur = 0,
    Or = 0;
  const Dr = (e, t) => {
      if (!e || !t || e <= 0 || t <= 0) return;
      Or = (Or * Ur + (8 * e) / t) / ++Ur;
    },
    xr = { ERRORCODE: 900, extensions: [] };
  class Fr extends Ir {
    constructor() {
      super(),
        (this.remainingAds = []),
        (this.errorURLTemplates = []),
        (this.rootErrorURLTemplates = []),
        (this.maxWrapperDepth = null),
        (this.URLTemplateFilters = []),
        (this.fetchingOptions = {}),
        (this.parsingOptions = {});
    }
    addURLTemplateFilter(e) {
      "function" == typeof e && this.URLTemplateFilters.push(e);
    }
    removeURLTemplateFilter() {
      this.URLTemplateFilters.pop();
    }
    countURLTemplateFilters() {
      return this.URLTemplateFilters.length;
    }
    clearURLTemplateFilters() {
      this.URLTemplateFilters = [];
    }
    trackVastError(e, t, ...i) {
      this.emit("VAST-error", Object.assign({}, xr, t, ...i)), rr.track(e, t);
    }
    getErrorURLTemplates() {
      return this.rootErrorURLTemplates.concat(this.errorURLTemplates);
    }
    getEstimatedBitrate() {
      return Or;
    }
    fetchVAST(e, t = 0, i = null, n = null) {
      return new Promise((r, s) => {
        this.URLTemplateFilters.forEach((t) => {
          e = t(e);
        });
        const a = Date.now();
        this.emit("VAST-resolving", {
          url: e,
          previousUrl: i,
          wrapperDepth: t,
          maxWrapperDepth: this.maxWrapperDepth,
          timeout: this.fetchingOptions.timeout,
          wrapperAd: n,
        }),
          this.urlHandler.get(e, this.fetchingOptions, (n, o, l = {}) => {
            const c = Math.round(Date.now() - a),
              d = Object.assign(
                {
                  url: e,
                  previousUrl: i,
                  wrapperDepth: t,
                  error: n,
                  duration: c,
                },
                l
              );
            this.emit("VAST-resolved", d), Dr(l.byteLength, c), n ? s(n) : r(o);
          });
      });
    }
    initParsingStatus(e = {}) {
      (this.errorURLTemplates = []),
        (this.fetchingOptions = {
          timeout: e.timeout || Sr,
          withCredentials: e.withCredentials,
        }),
        (this.maxWrapperDepth = e.wrapperLimit || 10),
        (this.parsingOptions = { allowMultipleAds: e.allowMultipleAds }),
        (this.remainingAds = []),
        (this.rootErrorURLTemplates = []),
        (this.rootURL = ""),
        (this.urlHandler = e.urlHandler || e.urlhandler || Nr),
        (this.vastVersion = null),
        Dr(e.byteLength, e.requestDuration);
    }
    getRemainingAds(e) {
      if (0 === this.remainingAds.length)
        return Promise.reject(
          new Error("No more ads are available for the given VAST")
        );
      const t = e ? rr.flatten(this.remainingAds) : this.remainingAds.shift();
      return (
        (this.errorURLTemplates = []),
        this.resolveAds(t, { wrapperDepth: 0, url: this.rootURL }).then((e) =>
          this.buildVASTResponse(e)
        )
      );
    }
    getAndParseVAST(e, t = {}) {
      return (
        this.initParsingStatus(t),
        this.URLTemplateFilters.forEach((t) => {
          e = t(e);
        }),
        (this.rootURL = e),
        this.fetchVAST(e).then(
          (i) => (
            (t.previousUrl = e),
            (t.isRootVAST = !0),
            (t.url = e),
            this.parse(i, t).then((e) => this.buildVASTResponse(e))
          )
        )
      );
    }
    parseVAST(e, t = {}) {
      return (
        this.initParsingStatus(t),
        (t.isRootVAST = !0),
        this.parse(e, t).then((e) => this.buildVASTResponse(e))
      );
    }
    buildVASTResponse(e) {
      const t = (function ({ ads: e, errorURLTemplates: t, version: i }) {
        return { ads: e || [], errorURLTemplates: t || [], version: i || null };
      })({
        ads: e,
        errorURLTemplates: this.getErrorURLTemplates(),
        version: this.vastVersion,
      });
      return this.completeWrapperResolving(t), t;
    }
    parseVastXml(
      e,
      {
        isRootVAST: t = !1,
        url: i = null,
        wrapperDepth: n = 0,
        allowMultipleAds: r,
        followAdditionalWrappers: s,
      }
    ) {
      if (!e || !e.documentElement || "VAST" !== e.documentElement.nodeName)
        throw (
          (this.emit("VAST-ad-parsed", {
            type: "ERROR",
            url: i,
            wrapperDepth: n,
          }),
          new Error("Invalid VAST XMLDocument"))
        );
      const a = [],
        o = e.documentElement.childNodes,
        l = e.documentElement.getAttribute("version");
      t && l && (this.vastVersion = l);
      for (const c in o) {
        const e = o[c];
        if ("Error" === e.nodeName) {
          const i = ar.parseNodeText(e);
          t
            ? this.rootErrorURLTemplates.push(i)
            : this.errorURLTemplates.push(i);
        } else if ("Ad" === e.nodeName) {
          if (this.vastVersion && parseFloat(this.vastVersion) < 3) r = !0;
          else if (!1 === r && a.length > 1) break;
          const t = Er(e, this.emit.bind(this), {
            allowMultipleAds: r,
            followAdditionalWrappers: s,
          });
          t.ad
            ? (a.push(t.ad),
              this.emit("VAST-ad-parsed", {
                type: t.type,
                url: i,
                wrapperDepth: n,
                adIndex: a.length - 1,
                vastVersion: l,
              }))
            : this.trackVastError(this.getErrorURLTemplates(), {
                ERRORCODE: 101,
              });
        }
      }
      return a;
    }
    parse(
      e,
      {
        url: t = null,
        resolveAll: i = !0,
        wrapperSequence: n = null,
        previousUrl: r = null,
        wrapperDepth: s = 0,
        isRootVAST: a = !1,
        followAdditionalWrappers: o,
        allowMultipleAds: l,
      } = {}
    ) {
      let c = [];
      this.vastVersion && parseFloat(this.vastVersion) < 3 && a && (l = !0);
      try {
        c = this.parseVastXml(e, {
          isRootVAST: a,
          url: t,
          wrapperDepth: s,
          allowMultipleAds: l,
          followAdditionalWrappers: o,
        });
      } catch (Wi) {
        return Promise.reject(Wi);
      }
      return (
        1 === c.length && null != n && (c[0].sequence = n),
        !1 === i &&
          ((this.remainingAds = ar.splitVAST(c)),
          (c = this.remainingAds.shift())),
        this.resolveAds(c, { wrapperDepth: s, previousUrl: r, url: t })
      );
    }
    resolveAds(e = [], { wrapperDepth: t, previousUrl: i, url: n }) {
      const r = [];
      return (
        (i = n),
        e.forEach((e) => {
          const n = this.resolveWrappers(e, t, i);
          r.push(n);
        }),
        Promise.all(r).then((e) => {
          const r = rr.flatten(e);
          if (!r && this.remainingAds.length > 0) {
            const e = this.remainingAds.shift();
            return this.resolveAds(e, {
              wrapperDepth: t,
              previousUrl: i,
              url: n,
            });
          }
          return r;
        })
      );
    }
    resolveWrappers(e, t, i) {
      return new Promise((n) => {
        var r;
        if ((t++, !e.nextWrapperURL)) return delete e.nextWrapperURL, n(e);
        if (t >= this.maxWrapperDepth)
          return (e.errorCode = 302), delete e.nextWrapperURL, n(e);
        (e.nextWrapperURL = ar.resolveVastAdTagURI(e.nextWrapperURL, i)),
          this.URLTemplateFilters.forEach((t) => {
            e.nextWrapperURL = t(e.nextWrapperURL);
          });
        const s =
            null != (r = this.parsingOptions.allowMultipleAds)
              ? r
              : e.allowMultipleAds,
          a = e.sequence;
        this.fetchVAST(e.nextWrapperURL, t, i, e)
          .then((r) =>
            this.parse(r, {
              url: e.nextWrapperURL,
              previousUrl: i,
              wrapperSequence: a,
              wrapperDepth: t,
              followAdditionalWrappers: e.followAdditionalWrappers,
              allowMultipleAds: s,
            }).then((t) => {
              if ((delete e.nextWrapperURL, 0 === t.length))
                return (e.creatives = []), n(e);
              t.forEach((t) => {
                t && ar.mergeWrapperAdData(t, e);
              }),
                n(t);
            })
          )
          .catch((t) => {
            (e.errorCode = 301), (e.errorMessage = t.message), n(e);
          });
      });
    }
    completeWrapperResolving(e) {
      if (0 === e.ads.length)
        this.trackVastError(e.errorURLTemplates, { ERRORCODE: 303 });
      else
        for (let t = e.ads.length - 1; t >= 0; t--) {
          const i = e.ads[t];
          (i.errorCode || 0 === i.creatives.length) &&
            (this.trackVastError(
              i.errorURLTemplates.concat(e.errorURLTemplates),
              { ERRORCODE: i.errorCode || 303 },
              { ERRORMESSAGE: i.errorMessage || "" },
              { extensions: i.extensions },
              { system: i.system }
            ),
            e.ads.splice(t, 1));
        }
    }
  }
  let Mr = null;
  const Br = {
    data: {},
    length: 0,
    getItem(e) {
      return this.data[e];
    },
    setItem(e, t) {
      (this.data[e] = t), (this.length = Object.keys(this.data).length);
    },
    removeItem(e) {
      delete this.data[e], (this.length = Object.keys(this.data).length);
    },
    clear() {
      (this.data = {}), (this.length = 0);
    },
  };
  class qr {
    constructor() {
      this.storage = this.initStorage();
    }
    initStorage() {
      if (Mr) return Mr;
      try {
        Mr =
          "undefined" != typeof window && null !== window
            ? window.localStorage || window.sessionStorage
            : null;
      } catch (e) {
        Mr = null;
      }
      return (Mr && !this.isStorageDisabled(Mr)) || ((Mr = Br), Mr.clear()), Mr;
    }
    isStorageDisabled(e) {
      const t = "__VASTStorage__";
      try {
        if ((e.setItem(t, t), e.getItem(t) !== t)) return e.removeItem(t), !0;
      } catch (Wi) {
        return !0;
      }
      return e.removeItem(t), !1;
    }
    getItem(e) {
      return this.storage.getItem(e);
    }
    setItem(e, t) {
      return this.storage.setItem(e, t);
    }
    removeItem(e) {
      return this.storage.removeItem(e);
    }
    clear() {
      return this.storage.clear();
    }
  }
  class Wr {
    constructor(e, t, i) {
      (this.cappingFreeLunch = e || 0),
        (this.cappingMinimumTimeInterval = t || 0),
        (this.defaultOptions = { withCredentials: !1, timeout: 0 }),
        (this.vastParser = new Fr()),
        (this.storage = i || new qr()),
        void 0 === this.lastSuccessfulAd && (this.lastSuccessfulAd = 0),
        void 0 === this.totalCalls && (this.totalCalls = 0),
        void 0 === this.totalCallsTimeout && (this.totalCallsTimeout = 0);
    }
    getParser() {
      return this.vastParser;
    }
    get lastSuccessfulAd() {
      return this.storage.getItem("vast-client-last-successful-ad");
    }
    set lastSuccessfulAd(e) {
      this.storage.setItem("vast-client-last-successful-ad", e);
    }
    get totalCalls() {
      return this.storage.getItem("vast-client-total-calls");
    }
    set totalCalls(e) {
      this.storage.setItem("vast-client-total-calls", e);
    }
    get totalCallsTimeout() {
      return this.storage.getItem("vast-client-total-calls-timeout");
    }
    set totalCallsTimeout(e) {
      this.storage.setItem("vast-client-total-calls-timeout", e);
    }
    hasRemainingAds() {
      return this.vastParser.remainingAds.length > 0;
    }
    getNextAds(e) {
      return this.vastParser.getRemainingAds(e);
    }
    get(e, t = {}) {
      const i = Date.now();
      return (
        (t = Object.assign({}, this.defaultOptions, t)).hasOwnProperty(
          "resolveAll"
        ) || (t.resolveAll = !1),
        this.totalCallsTimeout < i
          ? ((this.totalCalls = 1), (this.totalCallsTimeout = i + 36e5))
          : this.totalCalls++,
        new Promise((n, r) => {
          if (this.cappingFreeLunch >= this.totalCalls)
            return r(
              new Error(
                `VAST call canceled Ð²Ð‚â€œ FreeLunch capping not reached yet ${this.totalCalls}/${this.cappingFreeLunch}`
              )
            );
          const s = i - this.lastSuccessfulAd;
          if (s < 0) this.lastSuccessfulAd = 0;
          else if (s < this.cappingMinimumTimeInterval)
            return r(
              new Error(
                `VAST call canceled Ð²Ð‚â€œ (${this.cappingMinimumTimeInterval})ms minimum interval reached`
              )
            );
          this.vastParser
            .getAndParseVAST(e, t)
            .then((e) => n(e))
            .catch((e) => r(e));
        })
      );
    }
  }
  class Hr {
    constructor() {}
    _getConnectionType() {
      if (
        "string" == typeof navigator.connection.type &&
        "" !== navigator.connection.type
      )
        switch (navigator.connection.type) {
          case "ethernet":
            return "ethernet";
          case "wifi":
          case "wimax":
            return "wifi";
          case "bluetooth":
          case "cellular":
            return "cellular";
          case "none":
            return "none";
        }
      return "unknown";
    }
    _getBandwidthEstimate() {
      if (
        "number" == typeof navigator.connection.downlink &&
        navigator.connection.downlink > 0
      )
        return navigator.connection.downlink;
      if (
        "string" == typeof navigator.connection.effectiveType &&
        "" !== navigator.connection.effectiveType
      )
        switch (navigator.connection.effectiveType) {
          case "slow-2g":
            return 0.025;
          case "2g":
            return 0.035;
          case "3g":
            return 0.35;
          case "4g":
            return 1.4;
        }
      else if (
        "string" == typeof navigator.connection.type &&
        "" !== navigator.connection.type
      )
        switch (navigator.connection.type) {
          case "ethernet":
          case "wifi":
          case "wimax":
            return 1.4;
          case "bluetooth":
          case "cellular":
            return 0.35;
          case "none":
            return -1;
        }
      return 0.025;
    }
    get bandwidthData() {
      const e = { estimate: -1, connectionType: "none" };
      return void 0 === navigator.onLine || navigator.onLine
        ? void 0 === navigator.connection
          ? { estimate: 1.1, connectionType: "unknown" }
          : {
              estimate: this._getBandwidthEstimate(),
              connectionType: this._getConnectionType(),
            }
        : e;
    }
  }
  class $r {
    static _getStyleAttributeData(e, t) {
      let i = 0;
      if (e && "function" == typeof window.getComputedStyle) {
        const n = window.getComputedStyle(e, null);
        n && ((i = n.getPropertyValue(t)), (i = i.toString().toLowerCase()));
      }
      return (
        (i = i.toString()),
        i.indexOf("px") > -1 && (i = i.replace("px", "")),
        parseFloat(i)
      );
    }
    static createSyntheticEvent(e, t) {
      let i;
      if (t)
        try {
          (i = new Event(e)), t.dispatchEvent(i);
        } catch (Wi) {
          console.warn(Wi);
        }
    }
    static setStyle(e, t) {
      if (e && "object" == typeof t) {
        Object.keys(t).forEach((i) => {
          e.style[i] = t[i];
        });
      }
    }
    static getWidth(e) {
      return e
        ? $r.isNumber(e.offsetWidth) && 0 !== e.offsetWidth
          ? e.offsetWidth
          : $r._getStyleAttributeData(e, "width")
        : 0;
    }
    static getHeight(e) {
      return e
        ? $r.isNumber(e.offsetHeight) && 0 !== e.offsetHeight
          ? e.offsetHeight
          : $r._getStyleAttributeData(e, "height")
        : 0;
    }
    static show(e) {
      e && (e.style.display = "block");
    }
    static hide(e) {
      e && (e.style.display = "none");
    }
    static removeElement(e) {
      if (e && e.parentNode)
        try {
          e.parentNode.removeChild(e);
        } catch (Wi) {
          console.warn(Wi);
        }
    }
    static isEmptyObject(e) {
      return !(!e || "object" != typeof e || 0 !== Object.keys(e).length);
    }
    static get consoleStyle() {
      return "color: white; background-color: #00ACC1; padding:1px 3px; border-radius: 3px; margin-right: 7px";
    }
    static get consoleStyle2() {
      return "color: white; background-color: #FB8C00; padding:1px 3px; border-radius: 3px; margin-right: 7px";
    }
    static get consolePrepend2() {
      return navigator &&
        navigator.userAgent &&
        /(edge|xbox|msie|trident)/i.test(navigator.userAgent)
        ? "om-sdk-manager:"
        : "om-sdk-manager%c";
    }
    static get consolePrepend() {
      return navigator &&
        navigator.userAgent &&
        /(edge|xbox|msie|trident)/i.test(navigator.userAgent)
        ? "RMP-VAST:"
        : "%crmp-vast%c";
    }
    static logVideoEvents(e, t) {
      [
        "loadstart",
        "durationchange",
        "playing",
        "waiting",
        "loadedmetadata",
        "loadeddata",
        "canplay",
        "canplaythrough",
      ].forEach((t) => {
        e.addEventListener(t, (e) => {
          e && e.type;
        });
      });
    }
    static isNumber(e) {
      return !("number" != typeof e || !Number.isFinite(e));
    }
    static openWindow(e) {
      try {
        window.open(e, "_blank");
      } catch (Wi) {
        console.warn(Wi);
      }
    }
    static ajax(e, t, i, n = 0) {
      return new Promise((r, s) => {
        const a = new XMLHttpRequest();
        a.open("GET", e, !0),
          (a.timeout = t),
          i && (a.withCredentials = !0),
          (a.onloadend = () => {
            "number" == typeof a.status && a.status >= 200 && a.status < 300
              ? r("XMLHttpRequest request succeeded")
              : n < 1 || "number" != typeof n
              ? s(`XMLHttpRequest wrong status code: ${a.status}`)
              : $r.ajax(e, t, i, n - 1);
          }),
          (a.ontimeout = () => {
            n < 1 || "number" != typeof n
              ? s("XMLHttpRequest timeout")
              : $r.ajax(e, t, i, n - 1);
          }),
          a.send(null);
      });
    }
    static addEvents(e, t, i) {
      e &&
        e.length > 1 &&
        t &&
        "function" == typeof i &&
        e.forEach((e) => {
          t.addEventListener(e, i);
        });
    }
    static removeEvents(e, t, i) {
      e &&
        e.length > 1 &&
        t &&
        "function" == typeof i &&
        e.forEach((e) => {
          t.removeEventListener(e, i);
        });
    }
    static clearTimeout(e) {
      "number" == typeof e && window.clearTimeout(e);
    }
    static clearInterval(e) {
      "number" == typeof e && window.clearInterval(e);
    }
  }
  class jr {
    static _filterVersion(e) {
      if (navigator.userAgent) {
        const t = navigator.userAgent.match(e);
        if (Array.isArray(t) && void 0 !== t[1]) return parseInt(t[1], 10);
      }
      return -1;
    }
    static get _testVideo() {
      return document.createElement("video");
    }
    static get hasTouchEvents() {
      return !!(
        void 0 !== window.ontouchstart ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
      );
    }
    static get userAgent() {
      return navigator.userAgent ? navigator.userAgent : null;
    }
    static get devicePixelRatio() {
      let e = 1;
      return (
        $r.isNumber(window.devicePixelRatio) &&
          window.devicePixelRatio > 1 &&
          (e = window.devicePixelRatio),
        e
      );
    }
    static get maxTouchPoints() {
      return "number" == typeof navigator.maxTouchPoints
        ? navigator.maxTouchPoints
        : -1;
    }
    static get isIos() {
      const e = /os\s+(\d+)_/i;
      let t = [!1, -1];
      return (
        /(ipad|iphone|ipod)/i.test(jr.userAgent) &&
          jr.hasTouchEvents &&
          (t = [!0, jr._filterVersion(e)]),
        t
      );
    }
    static get isIpadOS() {
      return !!(
        !jr.isIos[0] &&
        jr.hasTouchEvents &&
        /macintel/i.test(navigator.platform) &&
        jr.devicePixelRatio > 1 &&
        jr.maxTouchPoints > 1
      );
    }
    static get isMacOS() {
      const e = /mac\s+os\s+x\s+(\d+)_(\d+)/i;
      let t = !1,
        i = -1;
      return (
        jr.isIos[0] ||
          jr.isIpadOS ||
          !/(macintosh|mac\s+os)/i.test(jr.userAgent) ||
          ((t = !0), (i = jr._filterVersion(e, !0))),
        [t, i]
      );
    }
    static get isSafari() {
      const e = /version\/(\d+)\./i;
      let t = !1,
        i = -1;
      return (
        /safari\/[.0-9]*/i.test(jr.userAgent) &&
          !/(chrome|chromium|android|crios|fxios)/i.test(jr.userAgent) &&
          ((t = !0), (i = jr._filterVersion(e))),
        [t, i]
      );
    }
    static get isMacOSSafari() {
      return jr.isMacOS[0] && jr.isSafari[0];
    }
    static get isAndroid() {
      const e = /android\s*(\d+)\./i;
      let t = [!1, -1];
      return (
        !jr.isIos[0] &&
          jr.hasTouchEvents &&
          /android/i.test(jr.userAgent) &&
          (t = [!0, jr._filterVersion(e)]),
        t
      );
    }
    static get isMobile() {
      /* return !!(jr.isIos[0] || jr.isAndroid[0] || jr.isIpadOS); */
      return true;
    }
    static get hasNativeFullscreenSupport() {
      const e = document.documentElement,
        t = jr._testVideo;
      return !(
        !e ||
        (void 0 === e.requestFullscreen &&
          void 0 === e.webkitRequestFullscreen &&
          void 0 === e.mozRequestFullScreen &&
          void 0 === e.msRequestFullscreen &&
          void 0 === t.webkitEnterFullscreen)
      );
    }
    static checkCanPlayType(e, t) {
      const i = jr._testVideo;
      if ("undefined" !== i.canPlayType) {
        if (
          (jr.isSafari[0] || jr.isIpadOS[0] || jr.isIos[0]) &&
          "video/webm" === e
        )
          return !1;
        if (e && t) {
          let n;
          try {
            n = i.canPlayType(`${e}; codecs="${t}"`);
          } catch (Wi) {
            return (n = i.canPlayType(e)), "probably" === n;
          }
          if ("" !== n) return !0;
        } else if (e && !t) {
          if ("" !== i.canPlayType(e)) return !0;
        }
      }
      return !1;
    }
  }
  class Jr {
    static _dispatch(e) {
      const t = this.trackingTags.filter((t) => e === t.event);
      t.length > 0 &&
        t.forEach((e) => {
          Jr.pingURI.call(this, e.url);
        });
    }
    static _vastReadableTime(e) {
      if ($r.isNumber(e) && e >= 0) {
        let t = 0,
          i = 0,
          n = 0,
          r = Math.floor(e % 1e3);
        return (
          (r =
            0 === r
              ? "000"
              : r < 10
              ? `00${r}`
              : r < 100
              ? `0${r}`
              : r.toString()),
          (t = Math.floor((1 * e) / 1e3)),
          t > 59 && ((i = Math.floor((1 * t) / 60)), (t -= 60 * i)),
          (t = 0 === t ? "00" : t < 10 ? `0${t}` : t.toString()),
          i > 59 && ((n = Math.floor((1 * i) / 60)), (i -= 60 * n)),
          (i = 0 === i ? "00" : i < 10 ? `0${i}` : i.toString()),
          (n =
            0 === n ? "00" : n < 10 ? `0${n}` : n > 23 ? "00" : n.toString()),
          `${n}:${i}:${t}.${r}`
        );
      }
      return "00:00:00.000";
    }
    static _generateCacheBusting() {
      let e = "";
      const t =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 8; i++) e += t.charAt(Math.floor(62 * Math.random()));
      return e;
    }
    static _ping(e) {
      if (/\.js$/i.test(e)) {
        const i = document.createElement("script");
        i.src = e;
        try {
          document.head.appendChild(i);
        } catch (t) {
          console.warn(t), document.body.appendChild(i);
        }
      } else
        $r.ajax(e, this.params.ajaxTimeout, !1, 2)
          .then(() => {})
          .catch((e) => {});
    }
    static _onVolumeChange() {
      this.__adPlayer.muted || 0 === this.__adPlayer.volume
        ? (zr.createApiEvent.call(this, "advolumemuted"),
          Jr.dispatch.call(this, "mute"))
        : !this.__adPlayer.muted &&
          this.__adPlayer.volume > 0 &&
          Jr.dispatch.call(this, "unmute"),
        zr.createApiEvent.call(this, "advolumechanged");
    }
    static _onTimeupdate() {
      let e = -1,
        t = -1;
      this.rmpVastAdPlayer &&
        ((t = this.rmpVastAdPlayer.currentTime),
        (e = this.rmpVastAdPlayer.duration)),
        t > 0 &&
          e > 0 &&
          e > t &&
          (t >= 0.25 * e && !this.firstQuartileEventFired
            ? ((this.firstQuartileEventFired = !0),
              zr.createApiEvent.call(this, "adfirstquartile"),
              Jr.dispatch.call(this, "firstQuartile"))
            : t >= 0.5 * e && !this.midpointEventFired
            ? ((this.midpointEventFired = !0),
              zr.createApiEvent.call(this, "admidpoint"),
              Jr.dispatch.call(this, "midpoint"))
            : t >= 0.75 * e &&
              !this.thirdQuartileEventFired &&
              ((this.thirdQuartileEventFired = !0),
              zr.createApiEvent.call(this, "adthirdquartile"),
              Jr.dispatch.call(this, "thirdQuartile")),
          t >= 2e3 &&
            !this.progressEventFired &&
            ((this.progressEventFired = !0),
            zr.createApiEvent.call(this, "adprogress"),
            Jr.dispatch.call(this, "progress-2")),
          Object.entries(this.params.timeEvents).forEach(([i, n]) => {
            if (!this.timeEventsFired[i]) {
              ((n < 0 && t >= e + n) || (n >= 0 && t >= n)) &&
                ((this.timeEventsFired[i] = !0),
                zr.createApiEvent.call(this, i));
            }
          }));
    }
    static _onPause() {
      if (this.__adPlayer && this.__adPlayer.paused) {
        if (this.__adPlayer.currentTime === this.__adPlayer.duration) return;
        zr.createApiEvent.call(this, "adpaused"),
          Jr.dispatch.call(this, "pause");
      }
    }
    static _onPlay() {
      this.__adPlayer &&
        !this.__adPlayer.paused &&
        0 !== this.__adPlayer.currentTime &&
        (zr.createApiEvent.call(this, "adresumed"),
        Jr.dispatch.call(this, "resume"));
    }
    static _onPlaying() {
      zr.createApiEvent.call(this, ["adimpression", "adstarted"]),
        Jr.dispatch.call(this, ["start", "creativeView", "impression"]);
    }
    static _onEnded() {
      zr.createApiEvent.call(this, "adcomplete"),
        Jr.dispatch.call(this, "complete"),
        this.rmpVastAdPlayer &&
          (this.params.pauseOnEnd
            ? this.__adPlayer.pause()
            : this.rmpVastAdPlayer.resumeContent());
    }
    static replaceMacros(e, t) {
      if (!/\[.+?\]/i.test(e)) return e;
      let i = e;
      const n =
        /\[(ADCOUNT|TRANSACTIONID|PLACEMENTTYPE|BREAKMAXDURATION|BREAKMINDURATION|BREAKMAXADS|BREAKMINADLENGTH|BREAKMAXADLENGTH|IFA|IFATYPE|CLIENTUA|SERVERUA|DEVICEIP|APPBUNDLE|EXTENSIONS|VERIFICATIONVENDORS|OMIDPARTNER|INVENTORYSTATE|CONTENTID|LATLONG)\]/gi;
      n.test(i) && (i = i.replace(n, "-1"));
      const r = /\[(CONTENTURI|CLICKPOS)\]/gi;
      r.test(i) && (i = i.replace(r, "-2"));
      const s = /\[TIMESTAMP\]/gi,
        a = new Date().toISOString();
      s.test(i) && (i = i.replace(s, encodeURIComponent(a)));
      const o = /\[CACHEBUSTING\]/gi;
      o.test(i) && (i = i.replace(o, Jr._generateCacheBusting()));
      const l = /\[(CONTENTPLAYHEAD|MEDIAPLAYHEAD)\]/gi;
      let c = this.rmpVastContentPlayer.currentTime;
      l.test(i) &&
        c > -1 &&
        (i = i.replace(l, encodeURIComponent(Jr._vastReadableTime(c))));
      const d = /\[BREAKPOSITION\]/gi;
      let h = -1;
      this.rmpVastAdPlayer && (h = this.rmpVastAdPlayer.duration),
        d.test(i) &&
          (i =
            0 === c
              ? i.replace(d, "1")
              : c > 0 && c < h
              ? i.replace(d, "2")
              : i.replace(d, "3"));
      const u = /\[ADTYPE\]/gi;
      u.test(i) &&
        this.ad.adType &&
        (i = i.replace(u, encodeURIComponent(this.ad.adType)));
      const p = /\[DEVICEUA\]/gi;
      p.test(i) &&
        jr.userAgent &&
        (i = i.replace(p, encodeURIComponent(jr.userAgent)));
      const m = /\[SERVERSIDE\]/gi;
      m.test(i) && jr.userAgent && (i = i.replace(m, "0"));
      const _ = /\[DOMAIN\]/gi;
      _.test(i) &&
        window.location.hostname &&
        (i = i.replace(_, encodeURIComponent(window.location.hostname)));
      const g = /\[PAGEURL\]/gi;
      g.test(i) &&
        window.location.href &&
        (i = i.replace(g, encodeURIComponent(window.location.href)));
      const f = /\[PLAYERCAPABILITIES\]/gi;
      f.test(i) &&
        (i = i.replace(f, "skip,mute,autoplay,mautoplay,fullscreen,icon"));
      const v = /\[CLICKTYPE\]/gi;
      if (v.test(i)) {
        let e = "1";
        jr.isMobile && (e = "2"), (i = i.replace(v, e));
      }
      const y = /\[PLAYERSIZE\]/gi;
      if (y.test(i)) {
        const e = parseInt($r.getWidth(this.container), 10),
          t = parseInt($r.getHeight(this.container), 10);
        i = i.replace(y, encodeURIComponent(`${e.toString()},${t.toString()}`));
      }
      if (t) {
        const e = /\[ADPLAYHEAD\]/gi;
        let t = -1;
        this.rmpVastAdPlayer && (t = this.rmpVastAdPlayer.currentTime),
          e.test(i) &&
            t > -1 &&
            (i = i.replace(e, encodeURIComponent(Jr._vastReadableTime(t))));
        const n = /\[UNIVERSALADID\]/gi;
        if (n.test(i) && this.creative.universalAdIds.length > 0) {
          let e = "";
          this.creative.universalAdIds.forEach((t, i) => {
            (0 === i && i === this.creative.universalAdIds.length - 1) ||
              (e += ","),
              (e += `${t.idRegistry} ${t.value}`);
          }),
            (i = i.replace(n, encodeURIComponent(e)));
        }
        const r = /\[ASSETURI\]/gi,
          s = this.adMediaUrl;
        r.test(i) &&
          "string" == typeof s &&
          "" !== s &&
          (i = i.replace(r, encodeURIComponent(s)));
        const a = /\[PODSEQUENCE\]/gi;
        a.test(i) &&
          this.ad.sequence &&
          (i = i.replace(a, encodeURIComponent(this.ad.sequence.toString())));
        const o = /\[ADSERVINGID\]/gi;
        o.test(i) &&
          this.ad.adServingId &&
          (i = i.replace(o, encodeURIComponent(this.ad.adServingId)));
      } else {
        const e = /\[ADCATEGORIES\]/gi;
        if (e.test(i) && this.ad.categories.length > 0) {
          const t = this.ad.categories.map((e) => e.value).join(",");
          i = i.replace(e, encodeURIComponent(t));
        }
        const t = /\[BLOCKEDADCATEGORIES\]/gi;
        if (t.test(i) && this.ad.blockedAdCategories.length > 0) {
          const e = this.ad.blockedAdCategories.map((e) => e.value).join(",");
          i = i.replace(t, encodeURIComponent(e));
        }
        const n = /\[VASTVERSIONS\]/gi;
        n.test(i) && (i = i.replace(n, "2,3,5,6,7,8,11,12,13,14"));
        const r = /\[APIFRAMEWORKS\]/gi;
        r.test(i) && (i = i.replace(r, "2"));
        const s = /\[MEDIAMIME\]/gi,
          a = [
            "video/webm",
            "video/mp4",
            "video/ogg",
            "video/3gpp",
            "application/vnd.apple.mpegurl",
            "application/dash+xml",
          ];
        if (s.test(i)) {
          let e = "";
          a.forEach((t) => {
            jr.checkCanPlayType(t) && (e += `${t},`);
          }),
            e &&
              ((e = e.slice(0, -1)), (i = i.replace(s, encodeURIComponent(e))));
        }
        const o = /\[PLAYERSTATE\]/gi;
        if (o.test(i)) {
          let e = "";
          this.rmpVastContentPlayer.muted && (e += "muted"),
            this.isInFullscreen && (e && (e += ","), (e += "fullscreen")),
            (i = i.replace(o, e));
        }
      }
      const E = /\[LIMITADTRACKING\]/gi;
      E.test(i) &&
        this.regulationsInfo.limitAdTracking &&
        (i = i.replace(
          E,
          encodeURIComponent(this.regulationsInfo.limitAdTracking)
        ));
      const b = /\[REGULATIONS\]/gi;
      b.test(i) &&
        this.regulationsInfo.regulations &&
        (i = i.replace(
          b,
          encodeURIComponent(this.regulationsInfo.regulations)
        ));
      const A = /\[GDPRCONSENT\]/gi;
      return (
        A.test(i) &&
          this.regulationsInfo.gdprConsent &&
          (i = i.replace(
            A,
            encodeURIComponent(this.regulationsInfo.gdprConsent)
          )),
        i
      );
    }
    static pingURI(e) {
      const t = Jr.replaceMacros.call(this, e, !0);
      Jr._ping.call(this, t);
    }
    static error(e, t) {
      let i = this.adErrorTags;
      303 === e &&
        this.vastErrorTags.length > 0 &&
        (i = [...i, ...this.vastErrorTags]),
        i.length > 0 &&
          i.forEach((i) => {
            if (i.url) {
              let n = i.url;
              const r = /\[ERRORCODE\]/gi;
              if (
                (r.test(n) &&
                  $r.isNumber(e) &&
                  e > 0 &&
                  e < 1e3 &&
                  (n = n.replace(r, e)),
                t)
              ) {
                const e = JSON.stringify(t),
                  i = encodeURIComponent(e),
                  r = `${n}${-1 !== n.indexOf("?") ? "&" : "?"}extra=${i}`;
                n = r;
              }
              Jr._ping.call(this, n);
            }
          });
    }
    static dispatch(e) {
      Array.isArray(e)
        ? e.forEach((e) => {
            Jr._dispatch.call(this, e);
          })
        : Jr._dispatch.call(this, e);
    }
    static destroy() {
      this.__adPlayer &&
        (this.__adPlayer.removeEventListener("pause", this.onPauseFn),
        this.__adPlayer.removeEventListener("play", this.onPlayFn),
        this.__adPlayer.removeEventListener("playing", this.onPlayingFn),
        this.__adPlayer.removeEventListener("ended", this.onEndedFn),
        this.__adPlayer.removeEventListener(
          "volumechange",
          this.onVolumeChangeFn
        ),
        this.__adPlayer.removeEventListener("timeupdate", this.onTimeupdateFn));
    }
    static wire() {
      this.__adPlayer &&
        this.creative.isLinear &&
        !this.rmpVastVpaidPlayer &&
        ((this.onPauseFn = Jr._onPause.bind(this)),
        this.__adPlayer.addEventListener("pause", this.onPauseFn),
        (this.onPlayFn = Jr._onPlay.bind(this)),
        this.__adPlayer.addEventListener("play", this.onPlayFn),
        (this.onPlayingFn = Jr._onPlaying.bind(this)),
        this.__adPlayer.addEventListener("playing", this.onPlayingFn, {
          once: !0,
        }),
        (this.onEndedFn = Jr._onEnded.bind(this)),
        this.__adPlayer.addEventListener("ended", this.onEndedFn, { once: !0 }),
        (this.onVolumeChangeFn = Jr._onVolumeChange.bind(this)),
        this.__adPlayer.addEventListener("volumechange", this.onVolumeChangeFn),
        (this.onTimeupdateFn = Jr._onTimeupdate.bind(this)),
        this.__adPlayer.addEventListener("timeupdate", this.onTimeupdateFn));
    }
  }
  class zr {
    static _onFullscreenchange(e) {
      e &&
        e.type &&
        ("fullscreenchange" === e.type
          ? this.isInFullscreen
            ? ((this.isInFullscreen = !1),
              this.__adOnStage &&
                this.creative.isLinear &&
                Jr.dispatch.call(this, ["exitFullscreen", "playerCollapse"]))
            : ((this.isInFullscreen = !0),
              this.__adOnStage &&
                this.creative.isLinear &&
                Jr.dispatch.call(this, ["fullscreen", "playerExpand"]))
          : "webkitbeginfullscreen" === e.type
          ? (this.__adOnStage &&
              this.creative.isLinear &&
              Jr.dispatch.call(this, ["fullscreen", "playerExpand"]),
            (this.isInFullscreen = !0))
          : "webkitendfullscreen" === e.type &&
            (this.__adOnStage &&
              this.creative.isLinear &&
              Jr.dispatch.call(this, ["exitFullscreen", "playerCollapse"]),
            (this.isInFullscreen = !1)));
    }
    static _updateVastError(e) {
      const t = [
          201, 204, 205, 400, 401, 402, 403, 501, 502, 503, 603, 901, 1002,
        ],
        i = [303, 900, 1001],
        n = [
          {
            code: 201,
            description: "Video player expecting different linearity.",
          },
          {
            code: 204,
            description: "Ad category was required but not provided.",
          },
          {
            code: 205,
            description:
              "Inline Category violates Wrapper BlockedAdCategories.",
          },
          {
            code: 303,
            description: "No VAST response after one or more Wrappers.",
          },
          {
            code: 400,
            description:
              "General Linear error. Video player is unable to display the Linear Ad.",
          },
          {
            code: 401,
            description:
              "File not found. Unable to find Linear/MediaFile from URI.",
          },
          { code: 402, description: "Timeout of MediaFile URI." },
          {
            code: 403,
            description:
              "Could not find MediaFile that is supported by this video player, based on the attributes of the MediaFile element.",
          },
          {
            code: 501,
            description:
              "Unable to display NonLinear Ad because creative dimensions do not align with creative display area (i.e. creative dimension too large).",
          },
          {
            code: 502,
            description: "Unable to fetch NonLinearAds/NonLinear resource.",
          },
          {
            code: 503,
            description:
              "Could not find NonLinear resource with supported type.",
          },
          {
            code: 603,
            description: "Unable to fetch CompanionAds/Companion resource.",
          },
          { code: 900, description: "Undefined Error." },
          { code: 901, description: "General VPAID error." },
          { code: 1001, description: "Invalid input for loadAds method" },
          {
            code: 1002,
            description: "Required DOMParser API is not available",
          },
          {
            code: 1100,
            description: "SIMID error: UNSPECIFIED_CREATIVE_ERROR",
          },
          { code: 1101, description: "SIMID error: CANNOT_LOAD_RESOURCE" },
          { code: 1102, description: "SIMID error: PLAYBACK_AREA_UNUSABLE" },
          { code: 1103, description: "SIMID error: INCORRECT_VERSION" },
          { code: 1104, description: "SIMID error: TECHNICAL_ERROR" },
          { code: 1105, description: "SIMID error: EXPAND_NOT_POSSIBLE" },
          { code: 1106, description: "SIMID error: PAUSE_NOT_HONORED" },
          { code: 1107, description: "SIMID error: PLAYMODE_NOT_ADEQUATE" },
          { code: 1108, description: "SIMID error: CREATIVE_INTERNAL_ERROR" },
          { code: 1109, description: "SIMID error: DEVICE_NOT_SUPPORTED" },
          {
            code: 1110,
            description: "SIMID error: MESSAGES_NOT_FOLLOWING_SPEC",
          },
          { code: 1111, description: "SIMID error: PLAYER_RESPONSE_TIMEOUT" },
          { code: 1200, description: "SIMID error: UNSPECIFIED_PLAYER_ERROR" },
          { code: 1201, description: "SIMID error: WRONG_VERSION" },
          { code: 1202, description: "SIMID error: UNSUPPORTED_TIME" },
          {
            code: 1203,
            description: "SIMID error: UNSUPPORTED_FUNCTIONALITY_REQUEST",
          },
          { code: 1204, description: "SIMID error: UNSUPPORTED_ACTIONS" },
          {
            code: 1205,
            description: "SIMID error: POSTMESSAGE_CHANNEL_OVERLOADED",
          },
          { code: 1206, description: "SIMID error: VIDEO_COULD_NOT_LOAD" },
          { code: 1207, description: "SIMID error: VIDEO_TIME_OUT" },
          { code: 1208, description: "SIMID error: RESPONSE_TIMEOUT" },
          { code: 1209, description: "SIMID error: MEDIA_NOT_SUPPORTED" },
          { code: 1210, description: "SIMID error: SPEC_NOT_FOLLOWED_ON_INIT" },
          {
            code: 1211,
            description: "SIMID error: SPEC_NOT_FOLLOWED_ON_MESSAGES",
          },
        ].filter((t) => t.code === e);
      n.length > 0
        ? ((this.__vastErrorCode = n[0].code),
          (this.__adErrorMessage = n[0].description))
        : ((this.__vastErrorCode = -1),
          (this.__adErrorMessage = "Error getting VAST error")),
        this.__vastErrorCode > -1 &&
          (i.indexOf(this.__vastErrorCode) > -1
            ? (this.__adErrorType = "adLoadError")
            : t.indexOf(this.__vastErrorCode) > -1 &&
              (this.__adErrorType = "adPlayError"));
    }
    static filterParams(e) {
      if (
        ((this.params = {
          ajaxTimeout: 5e3,
          creativeLoadTimeout: 8e3,
          ajaxWithCredentials: !1,
          maxNumRedirects: 4,
          labels: {
            skipMessage: "Skip ad",
            closeAd: "Close ad",
            textForInteractionUIOnMobile: "Learn more",
          },
          outstream: !1,
          showControlsForAdPlayer: !1,
          vastXmlInput: !1,
          enableVpaid: !0,
          enableSimid: !0,
          vpaidSettings: {
            width: 640,
            height: 360,
            viewMode: "normal",
            desiredBitrate: 500,
          },
          useHlsJS: !1,
          debugHlsJS: !1,
          omidSupport: !1,
          omidAllowedVendors: [],
          omidUnderEvaluation: !1,
          omidRunValidationScript: !1,
          omidAutoplay: !1,
          partnerName: "rmp-vast",
          partnerVersion: "13.2.0",
          pauseOnEnd: !1,
          timeEvents: {},
          clickThroughElementId: "",
        }),
        e && "object" == typeof e)
      ) {
        Object.keys(e).forEach((t) => {
          typeof e[t] == typeof this.params[t] &&
            (($r.isNumber(e[t]) && e[t] > 0) || "number" != typeof e[t]) &&
            ("vpaidSettings" === t
              ? ($r.isNumber(e.vpaidSettings.width) &&
                  e.vpaidSettings.width > 0 &&
                  (this.params.vpaidSettings.width = e.vpaidSettings.width),
                $r.isNumber(e.vpaidSettings.height) &&
                  e.vpaidSettings.height > 0 &&
                  (this.params.vpaidSettings.height = e.vpaidSettings.height),
                "string" == typeof e.vpaidSettings.viewMode &&
                  "fullscreen" === e.vpaidSettings.viewMode &&
                  (this.params.vpaidSettings.viewMode =
                    e.vpaidSettings.viewMode),
                $r.isNumber(e.vpaidSettings.desiredBitrate) &&
                  e.vpaidSettings.desiredBitrate > 0 &&
                  (this.params.vpaidSettings.desiredBitrate =
                    e.vpaidSettings.desiredBitrate))
              : (this.params[t] = e[t]));
        });
      }
    }
    static createApiEvent(e) {
      Array.isArray(e)
        ? e.forEach((e) => {
            e && this.dispatch(e);
          })
        : e && this.dispatch(e);
    }
    static playPromise(e, t) {
      let i;
      switch (e) {
        case "content":
          i = this.__contentPlayer;
          break;
        case "vast":
          i = this.__adPlayer;
      }
      if (i) {
        const n = i.play();
        void 0 !== n &&
          n
            .then(() => {
              t &&
                zr.createApiEvent.call(this, "adinitialplayrequestsucceeded");
            })
            .catch((i) => {
              console.warn(i),
                t && "vast" === e && this.creative.isLinear
                  ? (zr.createApiEvent.call(this, "adinitialplayrequestfailed"),
                    this.rmpVastAdPlayer.appendPlayButton())
                  : t &&
                    "content" === e &&
                    !this.creative.isLinear &&
                    zr.createApiEvent.call(this, "adinitialplayrequestfailed");
            });
      }
    }
    static makeButtonAccessible(e, t) {
      (e.tabIndex = 0),
        e.setAttribute("role", "button"),
        e.addEventListener("keyup", (t) => {
          const i = t.which;
          (13 !== i && 32 !== i) ||
            (t.stopPropagation(),
            t.preventDefault(),
            $r.createSyntheticEvent("click", e));
        }),
        t && e.setAttribute("aria-label", t);
    }
    static initInstanceVariables() {
      (this.adContainer = null),
        (this.contentWrapper = null),
        (this.container = null),
        (this.rmpVastContentPlayer = null),
        (this.rmpVastAdPlayer = null),
        (this.currentContentSrc = ""),
        (this.currentContentCurrentTime = -1),
        (this.params = {}),
        (this.events = {}),
        (this.onFullscreenchangeFn = null),
        (this.id = null),
        (this.isInFullscreen = !1),
        (this.adPod = !1),
        (this.adPodLength = 0),
        (this.adSequence = 0),
        (this.__contentPlayer = null),
        (this.__adPlayer = null),
        (this.__initialized = !1),
        (this.__contentPlayerCompleted = !1);
    }
    static resetVariablesForNewLoadAds() {
      this.off("adstarted", this.attachViewableObserverFn),
        (this.onPauseFn = null),
        (this.onPlayFn = null),
        (this.onPlayingFn = null),
        (this.onEndedFn = null),
        (this.onVolumeChangeFn = null),
        (this.onTimeupdateFn = null),
        (this.trackingTags = []),
        (this.vastErrorTags = []),
        (this.adErrorTags = []),
        (this.firstQuartileEventFired = !1),
        (this.midpointEventFired = !1),
        (this.progressEventFired = !1),
        (this.thirdQuartileEventFired = !1),
        (this.needsSeekAdjust = !1),
        (this.seekAdjustAttached = !1),
        (this.ad = {}),
        (this.creative = {}),
        (this.attachViewableObserverFn = null),
        (this.viewableObserver = null),
        (this.viewablePreviousRatio = 0.5),
        (this.regulationsInfo = {}),
        (this.requireCategory = !1),
        (this.progressEvents = []),
        (this.rmpVastLinearCreative = null),
        (this.rmpVastNonLinearCreative = null),
        (this.validCompanionAds = []),
        (this.companionAdsList = []),
        (this.rmpVastVpaidPlayer = null),
        (this.adParametersData = ""),
        (this.rmpVastSimidPlayer = null),
        (this.rmpVastIcons = null),
        (this.__adTagUrl = ""),
        (this.__companionAdsRequiredAttribute = ""),
        (this.__vastErrorCode = -1),
        (this.__adErrorType = ""),
        (this.__adErrorMessage = ""),
        (this.__adOnStage = !1),
        (this.timeEventsFired = {}),
        (this.clickThroughElement = null);
    }
    static handleFullscreen() {
      jr.hasNativeFullscreenSupport &&
        ((this.onFullscreenchangeFn = zr._onFullscreenchange.bind(this)),
        jr.isIos[0]
          ? (this.__contentPlayer.addEventListener(
              "webkitbeginfullscreen",
              this.onFullscreenchangeFn
            ),
            this.__contentPlayer.addEventListener(
              "webkitendfullscreen",
              this.onFullscreenchangeFn
            ))
          : document.addEventListener(
              "fullscreenchange",
              this.onFullscreenchangeFn
            ));
    }
    static processVastErrors(e, t, i) {
      t && Jr.error.call(this, e, i),
        zr._updateVastError.call(this, e),
        zr.createApiEvent.call(this, "aderror"),
        this.rmpVastAdPlayer && this.rmpVastAdPlayer.resumeContent();
    }
  }
  const Gr = {
      CREATE_SESSION: "createSession",
      RESOLVE: "resolve",
      REJECT: "reject",
    },
    Yr = "Media:durationchange",
    Qr = "Media:ended",
    Kr = "Media:error",
    Xr = "Media:pause",
    Zr = "Media:play",
    es = "Media:playing",
    ts = "Media:seeked",
    is = "Media:seeking",
    ns = "Media:timeupdate",
    rs = "Media:volumechange",
    ss = "Player:init",
    as = "Player:log",
    os = "Player:startCreative",
    ls = "Player:adSkipped",
    cs = "Player:adStopped",
    ds = {
      CLICK_THRU: "Creative:clickThru",
      EXPAND_NONLINEAR: "Creative:expandNonlinear",
      COLLAPSE_NONLINEAR: "Creative:collapseNonlinear",
      FATAL_ERROR: "Creative:fatalError",
      GET_MEDIA_STATE: "Creative:getMediaState",
      LOG: "Creative:log",
      REQUEST_FULL_SCREEN: "Creative:requestFullScreen",
      REQUEST_SKIP: "Creative:requestSkip",
      REQUEST_STOP: "Creative:requestStop",
      REQUEST_PAUSE: "Creative:requestPause",
      REQUEST_PLAY: "Creative:requestPlay",
      REQUEST_RESIZE: "Creative:requestResize",
      REQUEST_VOLUME: "Creative:requestVolume",
      REQUEST_TRACKING: "Creative:reportTracking",
      REQUEST_CHANGE_AD_DURATION: "Creative:requestChangeAdDuration",
    },
    hs = [
      ds.GET_MEDIA_STATE,
      ds.REQUEST_VIDEO_LOCATION,
      ds.READY,
      ds.CLICK_THRU,
      ds.REQUEST_SKIP,
      ds.REQUEST_STOP,
      ds.REQUEST_PAUSE,
      ds.REQUEST_PLAY,
      ds.REQUEST_FULL_SCREEN,
      ds.REQUEST_VOLUME,
      ds.REQUEST_RESIZE,
      ds.REQUEST_CHANGE_AD_DURATION,
      ds.REPORT_TRACKING,
      ss,
      os,
      ls,
      cs,
      "Player:fatalError",
      Gr.CREATE_SESSION,
    ],
    us = 1102,
    ps = 1105,
    ms = 1202,
    _s = 1206,
    gs = {
      UNSPECIFIED: 0,
      USER_INITIATED: 1,
      MEDIA_PLAYBACK_COMPLETE: 2,
      PLAYER_INITATED: 3,
      CREATIVE_INITIATED: 4,
      NON_LINEAR_DURATION_COMPLETE: 5,
    };
  class fs {
    constructor() {
      (this.listeners_ = {}),
        (this.sessionId_ = ""),
        (this.nextMessageId_ = 1),
        (this.target_ = window.parent),
        (this.resolutionListeners_ = {}),
        window.addEventListener("message", this.receiveMessage.bind(this), !1);
    }
    reset() {
      (this.listeners_ = {}),
        (this.sessionId_ = ""),
        (this.nextMessageId_ = 1),
        (this.resolutionListeners_ = {});
    }
    sendMessage(e, t) {
      const i = this.nextMessageId_++,
        n = e == Gr.CREATE_SESSION ? e : `SIMID:${e}`,
        r = {
          sessionId: this.sessionId_,
          messageId: i,
          type: n,
          timestamp: Date.now(),
          args: t,
        };
      return hs.includes(e)
        ? new Promise((e, t) => {
            this.addResolveRejectListener_(i, e, t),
              this.target_.postMessage(JSON.stringify(r), "*");
          })
        : new Promise((e) => {
            this.target_.postMessage(JSON.stringify(r), "*"), e();
          });
    }
    addListener(e, t) {
      this.listeners_[e]
        ? this.listeners_[e].push(t)
        : (this.listeners_[e] = [t]);
    }
    addResolveRejectListener_(e, t, i) {
      this.resolutionListeners_[e] = ((e) => {
        const n = e.type,
          r = e.args.value;
        "resolve" == n ? t(r) : "reject" == n && i(r);
      }).bind(this);
    }
    receiveMessage(e) {
      if (!e || !e.data) return;
      let t;
      try {
        t = JSON.parse(e.data);
      } catch (Wi) {
        return;
      }
      if (!t) return;
      const i = t.sessionId,
        n = t.type,
        r = "" == this.sessionId_ && n == Gr.CREATE_SESSION,
        s = this.sessionId_ == i;
      if ((r || s) && null != n)
        if (Object.values(Gr).includes(n)) this.handleProtocolMessage_(t);
        else if (n.startsWith("SIMID:")) {
          const e = n.substr(6),
            i = this.listeners_[e];
          i && i.forEach((e) => e(t));
        }
    }
    handleProtocolMessage_(e) {
      const t = e.type;
      let i, n, r, s;
      switch (t) {
        case Gr.CREATE_SESSION:
          (this.sessionId_ = e.sessionId),
            this.resolve(e),
            (i = this.listeners_[t]),
            i && i.forEach((t) => t(e));
          break;
        case Gr.RESOLVE:
        case Gr.REJECT:
          (n = e.args),
            (r = n.messageId),
            (s = this.resolutionListeners_[r]),
            s && (s(e), delete this.resolutionListeners_[r]);
      }
    }
    resolve(e, t) {
      const i = this.nextMessageId_++,
        n = { messageId: e.messageId, value: t },
        r = {
          sessionId: this.sessionId_,
          messageId: i,
          type: Gr.RESOLVE,
          timestamp: Date.now(),
          args: n,
        };
      this.target_.postMessage(JSON.stringify(r), "*");
    }
    reject(e, t) {
      const i = this.nextMessageId_++,
        n = { messageId: e.messageId, value: t },
        r = {
          sessionId: this.sessionId_,
          messageId: i,
          type: Gr.REJECT,
          timestamp: Date.now(),
          args: n,
        };
      this.target_.postMessage(JSON.stringify(r), "*");
    }
    createSession() {
      this.generateSessionId_(),
        this.sendMessage(Gr.CREATE_SESSION).then(
          () => {},
          () => {}
        );
    }
    generateSessionId_() {
      const e = new Uint8Array(16);
      window.crypto.getRandomValues(e);
      const t = Array.from(Array(32).keys()).map((t) => {
        const i = t % 2 == 0,
          n = e[Math.floor(t / 2)];
        return i ? n >> 4 : 15 & n;
      });
      (t[12] = 4), (t[16] = 8 | (3 & t[16]));
      const i = t.map((e) => e.toString(16)),
        n = [
          i.slice(0, 8).join(""),
          i.slice(8, 12).join(""),
          i.slice(12, 16).join(""),
          i.slice(16, 20).join(""),
          i.slice(20).join(""),
        ].join("-");
      this.sessionId_ = n;
    }
    setMessageTarget(e) {
      this.target_ = e;
    }
  }
  class vs {
    constructor(e, t) {
      (this.simidProtocol = new fs()),
        this.addListeners_(),
        (this.rmpVast_ = t),
        (this.simidData_ = t.creative.simid),
        (this.adContainer_ = t.adContainer),
        (this.playerDiv_ = t.contentWrapper),
        (this.adPlayerUrl_ = e),
        (this.adParameters_ = t.creative.simid.adParameters),
        (this.adId_ = t.creative.adId),
        (this.creativeId_ = t.creative.id),
        (this.adServingId_ = t.ad.adServingId),
        (this.clickThroughUrl_ = t.creative.clickThroughUrl),
        (this.contentVideoElement_ = t.__contentPlayer),
        (this.adVideoElement_ = t.__adPlayer),
        (this.simidIframe_ = null),
        (this.initializationPromise_ = null),
        (this.adVideoTrackingEvents_ = new Map()),
        (this.contentVideoTrackingEvents_ = new Map()),
        (this.isLinearAd_ = t.creative.isLinear),
        (this.nonLinearStartTime_ = null),
        (this.requestedDuration_ = 0),
        (this.resolveSessionCreatedPromise_ = null),
        (this.sessionCreatedPromise_ = new Promise((e) => {
          this.resolveSessionCreatedPromise_ = e;
        })),
        (this.resolveInitializationPromise_ = null),
        (this.rejectInitializationPromise_ = null),
        (this.nonLinearDimensions_ = null),
        (this.durationInterval_ = null),
        (this.initializationPromise_ = new Promise((e, t) => {
          (this.resolveInitializationPromise_ = e),
            (this.rejectInitializationPromise_ = t);
        })),
        this.trackEventsOnAdVideoElement_(),
        this.trackEventsOnContentVideoElement_(),
        this.hideAdPlayer_();
    }
    initializeAd() {
      (this.isLinearAd_ ||
        this.isValidDimensions_(this.getNonlinearDimensions_())) &&
        ((this.simidIframe_ = this.createSimidIframe_()),
        this.isLinearAd_ || this.displayNonlinearCreative_(),
        (this.requestDuration_ = 0),
        this.initializationPromise_.catch((e) => {
          this.onAdInitializedFailed_(e);
        }),
        this.sessionCreatedPromise_.then(() => {
          this.sendInitMessage_();
        }));
    }
    playAd() {
      this.initializationPromise_
        .then(() => {
          this.startCreativePlayback_();
        })
        .catch((e) => {});
    }
    playAdVideo() {
      this.adVideoElement_.play();
    }
    createSimidIframe_() {
      const e = document.createElement("iframe");
      return (
        (e.style.display = "none"),
        this.playerDiv_.appendChild(e),
        this.isLinearAd_ && e.classList.add("rmp-linear-simid-creative"),
        this.simidProtocol.setMessageTarget(e.contentWindow),
        e.setAttribute("allowFullScreen", ""),
        e.setAttribute("allow", "geolocation"),
        (e.src = this.simidData_.fileURL),
        e
      );
    }
    addListeners_() {
      this.simidProtocol.addListener(
        Gr.CREATE_SESSION,
        this.onSessionCreated_.bind(this)
      ),
        this.simidProtocol.addListener(
          ds.REQUEST_FULL_SCREEN,
          this.onRequestFullScreen.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.REQUEST_PLAY,
          this.onRequestPlay.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.REQUEST_PAUSE,
          this.onRequestPause.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.FATAL_ERROR,
          this.onCreativeFatalError.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.REQUEST_SKIP,
          this.onRequestSkip.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.REQUEST_STOP,
          this.onRequestStop.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.REQUEST_CHANGE_AD_DURATION,
          this.onRequestChangeAdDuration.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.GET_MEDIA_STATE,
          this.onGetMediaState.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.LOG,
          this.onReceiveCreativeLog.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.EXPAND_NONLINEAR,
          this.onExpandResize.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.COLLAPSE_NONLINEAR,
          this.onCollapse.bind(this)
        ),
        this.simidProtocol.addListener(
          ds.REQUEST_RESIZE,
          this.onRequestResize.bind(this)
        );
    }
    onSessionCreated_() {
      this.resolveSessionCreatedPromise_();
    }
    destroySimidIframe_() {
      this.simidIframe_ &&
        (this.simidIframe_.remove(),
        (this.simidIframe_ = null),
        this.simidProtocol.reset());
      for (let [e, t] of this.adVideoTrackingEvents_)
        this.adVideoElement_.removeEventListener(e, t, !0);
      for (let [e, t] of this.contentVideoTrackingEvents_)
        this.contentVideoElement_.removeEventListener(e, t, !0);
      this.adVideoTrackingEvents_.clear(),
        this.contentVideoTrackingEvents_.clear();
    }
    getFullDimensions_(e) {
      const t = e.getBoundingClientRect();
      return { x: 0, y: 0, width: t.width, height: t.height };
    }
    isValidDimensions_(e) {
      const t = this.playerDiv_.getBoundingClientRect(),
        i =
          parseInt(e.y, 10) + parseInt(e.height, 10) <= parseInt(t.height, 10),
        n = parseInt(e.x, 10) + parseInt(e.width, 10) <= parseInt(t.width, 10);
      return i && n;
    }
    getNonlinearDimensions_() {
      if (this.nonLinearDimensions_) return this.nonLinearDimensions_;
      let e = {};
      return (
        (e.x = document.getElementById("x_val").value),
        (e.y = document.getElementById("y_val").value),
        (e.width = document.getElementById("width").value),
        (e.height = document.getElementById("height").value),
        e
      );
    }
    displayNonlinearCreative_() {
      const e = this.getNonlinearDimensions_();
      if (!this.isValidDimensions_(e)) return;
      this.setSimidIframeDimensions_(e),
        (this.simidIframe_.style.position = "absolute"),
        this.contentVideoElement_.play();
      const t = document.getElementById("duration").value;
      this.requestedDuration_ = t;
    }
    setSimidIframeDimensions_(e) {
      (this.simidIframe_.style.height = e.height),
        (this.simidIframe_.style.width = e.width),
        (this.simidIframe_.style.left = `${e.x}px`),
        (this.simidIframe_.style.top = `${e.y}px`);
    }
    onExpandResize(e) {
      if (this.isLinearAd_) {
        const t = {
          errorCode: ps,
          message: "Linear resize not yet supported.",
        };
        this.simidProtocol.reject(e, t);
      } else {
        const t = this.getFullDimensions_(this.contentVideoElement_);
        this.setSimidIframeDimensions_(t),
          this.contentVideoElement_.pause(),
          this.simidProtocol.resolve(e);
      }
    }
    onCollapse(e) {
      const t = this.getNonlinearDimensions_();
      if (this.isLinearAd_) {
        const t = { message: "Cannot collapse linear ads." };
        this.simidProtocol.reject(e, t);
      } else if (this.isValidDimensions_(t))
        this.setSimidIframeDimensions_(t),
          (this.simidIframe_.style.position = "absolute"),
          this.contentVideoElement_.play(),
          this.simidProtocol.resolve(e);
      else {
        const t = {
          message:
            "Unable to collapse to dimensions bigger than the player. Please modify dimensions to a smaller size.",
        };
        this.simidProtocol.reject(e, t);
      }
    }
    onRequestResize(e) {
      if (this.isLinearAd_) {
        const t = {
          errorCode: ps,
          message: "Linear resize not yet supported.",
        };
        this.simidProtocol.reject(e, t);
      } else if (this.isValidDimensions_(e.args.creativeDimensions))
        (this.nonLinearDimensions_ = e.args.creativeDimensions),
          this.setSimidIframeDimensions_(e.args.creativeDimensions),
          this.simidProtocol.resolve(e);
      else {
        const t = {
          errorCode: ps,
          message:
            "Unable to resize a non-linear ad with dimensions bigger than the player. Please modify dimensions to a smaller size.",
        };
        this.simidProtocol.reject(e, t);
      }
    }
    sendInitMessage_() {
      const e = {
          videoDimensions: this.getFullDimensions_(this.contentVideoElement_),
          creativeDimensions: this.isLinearAd_
            ? this.getFullDimensions_(this.contentVideoElement_)
            : this.getNonlinearDimensions_(),
          fullscreen: !1,
          fullscreenAllowed: !0,
          variableDurationAllowed: !0,
          skippableState: "adHandles",
          siteUrl: document.location.host,
          appId: "",
          useragent: window.navigator.userAgent,
          deviceId: "",
          muted: this.adVideoElement_.muted,
          volume: this.adVideoElement_.volume,
        },
        t = {
          adParameters: this.adParameters_,
          adId: this.adId_,
          creativeId: this.creativeId_,
          adServingId: this.adServingId_,
          clickThroughUrl: this.clickThroughUrl_,
        };
      this.isLinearAd_ ||
        (t.duration = document.getElementById("duration").value);
      const i = { environmentData: e, creativeData: t };
      this.simidProtocol
        .sendMessage(ss, i)
        .then((e) => {
          this.resolveInitializationPromise_(e);
        })
        .catch((e) => {
          this.rejectInitializationPromise_(e);
        });
    }
    startCreativePlayback_() {
      this.showSimidIFrame_(),
        this.isLinearAd_
          ? this.playLinearVideoAd_()
          : ((this.nonLinearStartTime_ = this.contentVideoElement_.currentTime),
            this.contentVideoElement_.play()),
        this.simidProtocol.sendMessage(os);
    }
    playLinearVideoAd_() {
      this.contentVideoElement_.pause(),
        this.showAdPlayer_(),
        (this.adVideoElement_.src = this.adPlayerUrl_),
        this.adVideoElement_.load(),
        this.adVideoElement_.play();
    }
    onAdInitializedFailed_(e) {
      const t = JSON.stringify(e);
      this.destroyIframeAndResumeContent_(!0, t.errorCode);
    }
    hideSimidIFrame_() {
      this.simidIframe_.style.display = "none";
    }
    showSimidIFrame_() {
      this.simidIframe_.style.display = "block";
    }
    showAdPlayer_() {
      (this.adVideoElement_.style.display = "block"),
        (this.adContainer_.style.display = "block");
    }
    hideAdPlayer_() {
      (this.adVideoElement_.style.display = "none"),
        (this.adContainer_.style.display = "none");
    }
    trackEventsOnAdVideoElement_() {
      this.adVideoTrackingEvents_.set("durationchange", () => {
        this.simidProtocol.sendMessage(Yr, {
          duration: this.adVideoElement_.duration,
        });
      }),
        this.adVideoTrackingEvents_.set("ended", this.videoComplete.bind(this)),
        this.adVideoTrackingEvents_.set("error", () => {
          this.simidProtocol.sendMessage(Kr, { error: "", message: "" });
        }),
        this.adVideoTrackingEvents_.set("pause", () => {
          this.simidProtocol.sendMessage(Xr);
        }),
        this.adVideoTrackingEvents_.set("play", () => {
          this.simidProtocol.sendMessage(Zr);
        }),
        this.adVideoTrackingEvents_.set("playing", () => {
          this.simidProtocol.sendMessage(es);
        }),
        this.adVideoTrackingEvents_.set("seeked", () => {
          this.simidProtocol.sendMessage(ts);
        }),
        this.adVideoTrackingEvents_.set("seeking", () => {
          this.simidProtocol.sendMessage(is);
        }),
        this.adVideoTrackingEvents_.set("timeupdate", () => {
          this.simidProtocol.sendMessage(ns, {
            currentTime: this.adVideoElement_.currentTime,
          }),
            this.compareAdAndRequestedDurations_();
        }),
        this.adVideoTrackingEvents_.set("volumechange", () => {
          this.simidProtocol.sendMessage(rs, {
            volume: this.adVideoElement_.volume,
          });
        });
      for (let [e, t] of this.adVideoTrackingEvents_)
        this.adVideoElement_.addEventListener(e, t, !0);
    }
    trackEventsOnContentVideoElement_() {
      this.contentVideoTrackingEvents_.set("timeupdate", () => {
        null !== this.nonLinearStartTime_ &&
          this.contentVideoElement_.currentTime - this.nonLinearStartTime_ >
            this.requestedDuration_ &&
          this.stopAd(gs.NON_LINEAR_DURATION_COMPLETE);
      });
      for (let [e, t] of this.contentVideoTrackingEvents_)
        this.contentVideoElement_.addEventListener(e, t, !0);
    }
    stopAd(e = gs.PLAYER_INITATED, t, i) {
      this.simidIframe_ &&
        (this.hideSimidIFrame_(),
        this.simidProtocol
          .sendMessage(cs)
          .then(() => this.destroyIframeAndResumeContent_(t, i)));
    }
    skipAd() {
      this.hideSimidIFrame_(),
        this.simidProtocol
          .sendMessage(ls)
          .then(() => this.destroyIframeAndResumeContent_());
    }
    destroyIframeAndResumeContent_(e, t) {
      this.destroySimidIframe_(),
        e
          ? zr.processVastErrors.call(this.rmpVast_, t, !0)
          : this.rmpVast_.rmpVastAdPlayer &&
            this.rmpVast_.rmpVastAdPlayer.resumeContent();
    }
    onRequestFullScreen(e) {
      let t = null;
      this.simidIframe_.requestFullscreen
        ? (t = this.simidIframe_.requestFullscreen())
        : this.simidIframe_.mozRequestFullScreen
        ? (t = this.simidIframe_.mozRequestFullScreen())
        : this.simidIframe_.webkitRequestFullscreen
        ? (t = this.simidIframe_.webkitRequestFullscreen())
        : this.simidIframe_.msRequestFullscreen &&
          (t = this.simidIframe_.msRequestFullscreen()),
        t
          ? t.then(() => this.simidProtocol.resolve(e))
          : this.simidProtocol.resolve(e);
    }
    onRequestPlay(e) {
      if (this.isLinearAd_)
        this.adVideoElement_
          .play()
          .then(() => this.simidProtocol.resolve(e))
          .catch(() => {
            const t = {
              errorCode: _s,
              message: "The SIMID media could not be loaded.",
            };
            this.simidProtocol.reject(e, t);
          });
      else {
        const t = {
          errorCode: us,
          message: "Non linear ads do not play video.",
        };
        this.simidProtocol.reject(e, t);
      }
    }
    onRequestPause(e) {
      this.adVideoElement_.pause(), this.simidProtocol.resolve(e);
    }
    pauseAd() {
      this.adVideoElement_.pause();
    }
    onCreativeFatalError(e) {
      this.simidProtocol.resolve(e),
        this.stopAd(gs.CREATIVE_INITIATED, !0, 1100);
    }
    onRequestSkip(e) {
      this.simidProtocol.resolve(e), this.skipAd();
    }
    onRequestStop(e) {
      this.simidProtocol.resolve(e), this.stopAd(gs.CREATIVE_INITIATED);
    }
    onReportTracking(e) {
      e.args.trackingUrls.forEach((e) => {
        Jr.pingURI.call(this.rmpVast_, e);
      });
    }
    videoComplete() {
      if ((this.simidProtocol.sendMessage(Qr), 0 == this.requestedDuration_))
        this.stopAd(gs.MEDIA_PLAYBACK_COMPLETE);
      else if (-2 != this.requestedDuration_) {
        const e =
          1e3 * (this.requestedDuration_ - this.adVideoElement_.duration);
        setTimeout(() => {
          this.stopAd(gs.CREATIVE_INITIATED);
        }, e);
      }
    }
    onRequestChangeAdDuration(e) {
      const t = e.args.duration;
      if (-2 != t && t < 0) {
        const t = {
          errorCode: ms,
          message: "A negative duration is not valid.",
        };
        this.simidProtocol.reject(e, t);
      } else (this.requestedDuration_ = t), this.compareAdAndRequestedDurations_(), this.simidProtocol.resolve(e);
    }
    compareAdAndRequestedDurations_() {
      0 != this.requestedDuration_ &&
        -2 != this.requestedDuration_ &&
        this.adVideoElement_.currentTime >= this.requestedDuration_ &&
        this.stopAd(gs.CREATIVE_INITATED);
    }
    onGetMediaState(e) {
      const t = {
        currentSrc: this.adVideoElement_.currentSrc,
        currentTime: this.adVideoElement_.currentTime,
        duration: this.adVideoElement_.duration,
        ended: this.adVideoElement_.ended,
        muted: this.adVideoElement_.muted,
        paused: this.adVideoElement_.paused,
        volume: this.adVideoElement_.volume,
        fullscreen: this.adVideoElement_.fullscreen,
      };
      this.simidProtocol.resolve(e, t);
    }
    onReceiveCreativeLog(e) {
      e.args.message;
    }
    sendLog(e) {
      const t = { message: e };
      this.simidProtocol.sendMessage(as, t);
    }
  }
  class ys {
    constructor(e) {
      (this._rmpVast = e),
        (this._adContainer = e.adContainer),
        (this._adPlayer = e.__adPlayer),
        (this._onPlayingAppendIconsFn = null),
        (this._iconsData = []);
    }
    get iconsData() {
      return this._iconsData;
    }
    _onIconClickThrough(e, t) {
      t && (t.stopPropagation(), "touchend" === t.type && t.preventDefault()),
        $r.openWindow(this._iconsData[e].iconClickThroughUrl);
      const i = this._iconsData[e].iconClickTrackingUrls;
      i.length > 0 &&
        i.forEach((e) => {
          e.url && Jr.pingURI.call(this._rmpVast, e.url);
        });
    }
    _onIconLoadPingTracking(e) {
      Jr.pingURI.call(this._rmpVast, this._iconsData[e].iconViewTrackingUrl);
    }
    _onPlayingAppendIcons() {
      this._iconsData.forEach((e, t) => {
        let i, n;
        e.staticResourceUrl
          ? ((i = document.createElement("img")), (n = e.staticResourceUrl))
          : (e.iframeResourceUrl || e.htmlContent) &&
            ((i = document.createElement("iframe")),
            (i.sandbox = "allow-scripts allow-same-origin"),
            (n = e.htmlContent ? e.htmlContent : e.iframeResourceUrl),
            $r.setStyle(i, { border: "none", overflow: "hidden" }),
            i.setAttribute("scrolling", "no"),
            i.setAttribute(
              "allow",
              "autoplay; fullscreen; picture-in-picture; encrypted-media"
            ),
            i.setAttribute(
              "sandbox",
              "allow-scripts allow-presentation allow-same-origin"
            )),
          (i.className = "rmp-ad-container-icons"),
          $r.setStyle(i, {
            width: `${parseInt(e.width, 10)}px`,
            height: `${parseInt(e.height, 10)}px`,
          });
        const r = e.xPosition;
        "left" === r
          ? (i.style.left = "0px")
          : "right" === r
          ? (i.style.right = "0px")
          : parseInt(r, 10) >= 0
          ? (i.style.left = `${r}px`)
          : (i.style.left = "0px");
        const s = e.yPosition;
        if (
          ("top" === s
            ? (i.style.top = "0px")
            : "bottom" === r
            ? (i.style.bottom = "0px")
            : parseInt(s, 10) >= 0
            ? (i.style.top = `${s}px`)
            : (i.style.top = "0px"),
          e.iconViewTrackingUrl &&
            (i.onload = this._onIconLoadPingTracking.bind(this, t)),
          e.iconClickThroughUrl)
        ) {
          const e = this._onIconClickThrough.bind(this, t);
          $r.addEvents(["touchend", "click"], i, e);
        }
        e.htmlContent ? (i.srcdoc = n) : (i.src = n),
          this._adContainer.appendChild(i);
      });
    }
    destroy() {
      const e = this._adContainer.querySelectorAll(".rmp-ad-container-icons");
      e.length > 0 &&
        e.forEach((e) => {
          $r.removeElement(e);
        }),
        this._adPlayer &&
          this._adPlayer.removeEventListener(
            "playing",
            this._onPlayingAppendIconsFn
          );
    }
    parse(e) {
      for (let t = 0; t < e.length; t++) {
        const i = e[t],
          n = i.program;
        if (null === n) continue;
        const r = i.width,
          s = i.height,
          a = i.xPosition,
          o = i.yPosition;
        if (r <= 0 || s <= 0 || a < 0 || o < 0) continue;
        const l = i.staticResource,
          c = i.iframeResource,
          d = i.htmlResource;
        if (null === l && null === c && null === d) continue;
        const h = {
          program: n,
          width: r,
          height: s,
          xPosition: a,
          yPosition: o,
          staticResourceUrl: l,
          iframeResourceUrl: c,
          htmlContent: d,
        };
        (h.iconViewTrackingUrl = i.iconViewTrackingURLTemplate),
          (h.iconClickThroughUrl = i.iconClickThroughURLTemplate),
          (h.iconClickTrackingUrls = i.iconClickTrackingURLTemplates),
          this._iconsData.push(h);
      }
    }
    append() {
      (this._onPlayingAppendIconsFn = this._onPlayingAppendIcons.bind(this)),
        this._adPlayer.addEventListener(
          "playing",
          this._onPlayingAppendIconsFn,
          { once: !0 }
        );
    }
  }
  class Es {
    constructor(e) {
      (this._rmpVast = e),
        (this._params = e.params),
        (this._container = e.container),
        (this._adContainer = e.adContainer),
        (this._adPlayer = e.__adPlayer),
        (this._contentPlayer = e.__contentPlayer),
        (this._firstAdPlayerPlayRequest = !0),
        (this._interactionMobileUI = null),
        (this._skipWaitingUI = null),
        (this._skipMessageUI = null),
        (this._skipIconUI = null),
        (this._skipButtonUI = null),
        (this._skippableAdCanBeSkipped = !1),
        (this._onSkipInteractionFn = null),
        (this._onTimeupdateCheckSkipFn = null),
        (this._onDurationChangeFn = null),
        (this._onLoadedmetadataPlayFn = null),
        (this._onContextMenuFn = null),
        (this._onPlaybackErrorFn = null),
        (this._onInteractionOpenClickThroughUrlFn = null),
        (this._creativeLoadTimeoutCallback = null),
        (this._hlsJS = []),
        (this._hlsJSIndex = 0),
        (this._readingHlsJS = !1);
    }
    get hlsJSInstances() {
      return this._hlsJS;
    }
    get hlsJSIndex() {
      return this._hlsJSIndex;
    }
    set hlsJSIndex(e) {
      this._hlsJSIndex = e;
    }
    get readingHlsJS() {
      return this._readingHlsJS;
    }
    set readingHlsJS(e) {
      this._readingHlsJS = e;
    }
    get skippableAdCanBeSkipped() {
      return this._skippableAdCanBeSkipped;
    }
    _onDurationChange() {
      let e = -1;
      if (
        (this._rmpVast.rmpVastAdPlayer &&
          (e = this._rmpVast.rmpVastAdPlayer.duration),
        zr.createApiEvent.call(this._rmpVast, "addurationchange"),
        -1 === e)
      )
        return;
      Object.keys(this._rmpVast.creative.trackingEvents).forEach((t) => {
        if (/progress-/i.test(t)) {
          const i = t.split("-")[1];
          if (/%/i.test(i)) {
            let n = i.slice(0, -1);
            n = (e * parseFloat(n)) / 100;
            this._rmpVast.creative.trackingEvents[t].forEach((e) => {
              this._rmpVast.progressEvents.push({ time: n, url: e });
            });
          } else {
            this._rmpVast.creative.trackingEvents[t].forEach((e) => {
              this._rmpVast.progressEvents.push({
                time: 1e3 * parseFloat(i),
                url: e,
              });
            });
          }
        }
      }),
        this._rmpVast.progressEvents.length > 0 &&
          this._rmpVast.progressEvents.sort((e, t) => e.time - t.time);
    }
    _onLoadedmetadataPlay() {
      $r.clearTimeout(this._creativeLoadTimeoutCallback),
        this._adPlayer &&
          (this._adPlayer.volume !== this._contentPlayer.volume &&
            (this._adPlayer.volume = this._contentPlayer.volume),
          this._contentPlayer.muted
            ? (this._adPlayer.muted = !0)
            : (this._adPlayer.muted = !1)),
        $r.show(this._adContainer),
        $r.show(this._adPlayer),
        (this._rmpVast.__adOnStage = !0),
        this._rmpVast.rmpVastAdPlayer &&
          (this._rmpVast.rmpVastAdPlayer.play(this._firstAdPlayerPlayRequest),
          (this._firstAdPlayerPlayRequest = !1)),
        zr.createApiEvent.call(this._rmpVast, "adloaded"),
        Jr.dispatch.call(this._rmpVast, "loaded");
    }
    _onInteractionOpenClickThroughUrl(e) {
      e && e.stopPropagation(),
        zr.createApiEvent.call(this._rmpVast, "adclick"),
        Jr.dispatch.call(this._rmpVast, "clickthrough");
    }
    _onPlaybackError(e) {
      if (e && e.target) {
        const t = e.target;
        if (t.error && $r.isNumber(t.error.code)) {
          const e = t.error.code;
          let i = "";
          "string" == typeof t.error.message && (i = t.error.message);
          if (4 === e) {
            const e = {
              errorCode: t.error.code,
              errorMessage: t.error.message,
              videoNetworkState: t.networkState,
              videoReadyState: t.readyState,
              videoSrc: t.src,
              videoCurrentSrc: t.currentSrc,
            };
            zr.processVastErrors.call(this._rmpVast, 401, !0, e);
          }
        }
      }
    }
    _onContextMenu(e) {
      e && (e.stopPropagation(), e.preventDefault());
    }
    _updateWaitingForCanBeSkippedUI(e) {
      Math.round(e) > 0 &&
        (this._skipWaitingUI.textContent = `${
          this._params.labels.skipMessage
        } ${Math.round(e)}s`);
    }
    _onTimeupdateCheckSkip() {
      "none" === this._skipButtonUI.style.display &&
        $r.setStyle(this._skipButtonUI, { display: "block" });
      const e = this._adPlayer.currentTime;
      $r.isNumber(e) &&
        e > 0 &&
        (e >= this._rmpVast.creative.skipoffset
          ? (this._adPlayer.removeEventListener(
              "timeupdate",
              this._onTimeupdateCheckSkipFn
            ),
            $r.setStyle(this._skipWaitingUI, { display: "none" }),
            $r.setStyle(this._skipMessageUI, { display: "block" }),
            $r.setStyle(this._skipIconUI, { display: "block" }),
            (this._skippableAdCanBeSkipped = !0),
            zr.createApiEvent.call(this._rmpVast, "adskippablestatechanged"))
          : this._rmpVast.creative.skipoffset - e > 0 &&
            this._updateWaitingForCanBeSkippedUI(
              this._rmpVast.creative.skipoffset - e
            ));
    }
    _onSkipInteraction(e) {
      e && (e.stopPropagation(), "touchend" === e.type && e.preventDefault()),
        this._skippableAdCanBeSkipped &&
          (zr.createApiEvent.call(this._rmpVast, "adskipped"),
          Jr.dispatch.call(this._rmpVast, "skip"),
          this._rmpVast.rmpVastAdPlayer &&
            this._rmpVast.rmpVastAdPlayer.resumeContent());
    }
    _appendSkipUI() {
      (this._skipButtonUI = document.createElement("div")),
        (this._skipButtonUI.className = "rmp-ad-container-skip"),
        $r.setStyle(this._skipButtonUI, { display: "none" }),
        zr.makeButtonAccessible(
          this._skipButtonUI,
          this._params.labels.skipMessage
        ),
        (this._skipWaitingUI = document.createElement("div")),
        (this._skipWaitingUI.className = "rmp-ad-container-skip-waiting"),
        this._updateWaitingForCanBeSkippedUI(this._rmpVast.creative.skipoffset),
        $r.setStyle(this._skipWaitingUI, { display: "block" }),
        (this._skipMessageUI = document.createElement("div")),
        (this._skipMessageUI.className = "rmp-ad-container-skip-message"),
        (this._skipMessageUI.textContent = this._params.labels.skipMessage),
        $r.setStyle(this._skipMessageUI, { display: "none" }),
        (this._skipIconUI = document.createElement("div")),
        (this._skipIconUI.className = "rmp-ad-container-skip-icon"),
        $r.setStyle(this._skipIconUI, { display: "none" }),
        (this._onSkipInteractionFn = this._onSkipInteraction.bind(this)),
        $r.addEvents(
          ["click", "touchend"],
          this._skipButtonUI,
          this._onSkipInteractionFn
        ),
        this._skipButtonUI.appendChild(this._skipWaitingUI),
        this._skipButtonUI.appendChild(this._skipMessageUI),
        this._skipButtonUI.appendChild(this._skipIconUI),
        this._adContainer.appendChild(this._skipButtonUI),
        (this._onTimeupdateCheckSkipFn =
          this._onTimeupdateCheckSkip.bind(this)),
        this._adPlayer.addEventListener(
          "timeupdate",
          this._onTimeupdateCheckSkipFn
        );
    }
    _onHlsJSError(e, t) {
      if (t.fatal)
        switch (t.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            this._hlsJS[this._hlsJSIndex].startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            this._hlsJS[this._hlsJSIndex].recoverMediaError();
            break;
          default:
            zr.processVastErrors.call(this._rmpVast, 900, !0);
        }
    }
    destroy() {
      this._interactionMobileUI &&
        (this._interactionMobileUI.removeEventListener(
          "touchend",
          this._onInteractionOpenClickThroughUrlFn
        ),
        $r.removeElement(this._interactionMobileUI)),
        $r.clearTimeout(this._creativeLoadTimeoutCallback),
        $r.removeElement(this._skipButtonUI),
        $r.removeEvents(
          ["click", "touchend"],
          this._skipButtonUI,
          this._onSkipInteractionFn
        ),
        this._adPlayer &&
          (this._adPlayer.removeEventListener(
            "click",
            this._onInteractionOpenClickThroughUrlFn
          ),
          this._adPlayer.removeEventListener(
            "timeupdate",
            this._onTimeupdateCheckSkipFn
          ),
          this._adPlayer.removeEventListener(
            "durationchange",
            this._onDurationChangeFn
          ),
          this._adPlayer.removeEventListener(
            "loadedmetadata",
            this._onLoadedmetadataPlayFn
          ),
          this._adPlayer.removeEventListener(
            "contextmenu",
            this._onContextMenuFn
          ),
          this._adPlayer.removeEventListener("error", this._onPlaybackErrorFn)),
        this._contentPlayer.removeEventListener(
          "error",
          this._onPlaybackErrorFn
        ),
        this.clickThroughElement &&
          this.clickThroughElement.removeEventListener(
            "click",
            this._onInteractionOpenClickThroughUrlFn
          );
    }
    update(e, t) {
      if (
        ((this._onDurationChangeFn = this._onDurationChange.bind(this)),
        this._adPlayer.addEventListener(
          "durationchange",
          this._onDurationChangeFn,
          { once: !0 }
        ),
        (this._onLoadedmetadataPlayFn = this._onLoadedmetadataPlay.bind(this)),
        this._adPlayer.addEventListener(
          "loadedmetadata",
          this._onLoadedmetadataPlayFn,
          { once: !0 }
        ),
        (this._onContextMenuFn = this._onContextMenu.bind(this)),
        this._adPlayer.addEventListener("contextmenu", this._onContextMenuFn),
        (this._onPlaybackErrorFn = this._onPlaybackError.bind(this)),
        (this._creativeLoadTimeoutCallback = setTimeout(() => {
          const e = this._adPlayer,
            t = {
              videoNetworkState: e.networkState,
              videoReadyState: e.readyState,
              videoSrc: e.src,
              videoCurrentSrc: e.currentSrc,
            };
          zr.processVastErrors.call(this._rmpVast, 402, !0, t);
        }, this._params.creativeLoadTimeout)),
        this._params.useHlsJS &&
          "application/vnd.apple.mpegurl" === t &&
          void 0 !== window.Hls &&
          Hls.isSupported())
      ) {
        this._readingHlsJS = !0;
        const t = {
          debug: this._params.debugHlsJS,
          capLevelToPlayerSize: !0,
          testBandwidth: !0,
          startLevel: -1,
          lowLatencyMode: !1,
        };
        (this._hlsJS[this._hlsJSIndex] = new Hls(t)),
          this._hlsJS[this._hlsJSIndex].on(
            Hls.Events.ERROR,
            this._onHlsJSError.bind(this)
          ),
          this._hlsJS[this._hlsJSIndex].loadSource(e),
          this._hlsJS[this._hlsJSIndex].attachMedia(this._adPlayer);
      } else void 0 === this._rmpVast.creative.simid || (this._rmpVast.creative.simid && !this._params.enableSimid) ? (this._adPlayer.addEventListener("error", this._onPlaybackErrorFn), (this._adPlayer.src = e), this._adPlayer.load()) : (this._rmpVast.rmpVastSimidPlayer && this._rmpVast.rmpVastSimidPlayer.stopAd(), (this._rmpVast.rmpVastSimidPlayer = new vs(e, this._rmpVast)), this._rmpVast.rmpVastSimidPlayer.initializeAd(), this._rmpVast.rmpVastSimidPlayer.playAd());
      (this._onInteractionOpenClickThroughUrlFn =
        this._onInteractionOpenClickThroughUrl.bind(this)),
        this._rmpVast.creative.clickThroughUrl &&
          ((this.clickThroughElement =
            this._params.clickThroughElementId &&
            document.getElementById(this._params.clickThroughElementId)),
          this.clickThroughElement
            ? this.clickThroughElement.addEventListener(
                "click",
                this._onInteractionOpenClickThroughUrlFn
              )
            : jr.isMobile
            ? ((this._interactionMobileUI = document.createElement("a")),
              (this._interactionMobileUI.className = "rmp-ad-click-ui-mobile"),
              (this._interactionMobileUI.textContent =
                this._params.labels.textForInteractionUIOnMobile),
              this._interactionMobileUI.addEventListener(
                "touchend",
                this._onInteractionOpenClickThroughUrlFn
              ),
              (this._interactionMobileUI.href =
                this._rmpVast.creative.clickThroughUrl),
              (this._interactionMobileUI.target = "_blank"),
              this._adContainer.appendChild(this._interactionMobileUI))
            : this._adPlayer.addEventListener(
                "click",
                this._onInteractionOpenClickThroughUrlFn
              )),
        this._rmpVast.creative.isSkippableAd && this._appendSkipUI();
    }
    parse(e) {
      const t = e.icons,
        i = e.mediaFiles;
      if (0 === i.length) return;
      t.length > 0 &&
        ((this._rmpVast.rmpVastIcons = new ys(this._rmpVast)),
        this._rmpVast.rmpVastIcons.parse(t));
      const n = "hvc1",
        r = "avc1.4d401f",
        s = "vp9",
        a = (e) => {
          if (e.codec && e.mimeType) return e.codec;
          if ("video/mp4" === e.mimeType && e.fileURL.endsWith("-x265.mp4"))
            return n;
          if (e.mimeType)
            switch (e.mimeType) {
              case "video/mp4":
                return r;
              case "video/webm":
                return s;
              default:
                return null;
            }
          return null;
        },
        o = ["video/mp4", "video/webm"],
        l = i.filter(
          (e) =>
            null !== e.fileURL &&
            null !== e.mimeType &&
            o.includes(e.mimeType) &&
            ((e) => {
              const t = a(e);
              return !!t && jr.checkCanPlayType(e.mimeType, t);
            })(e)
        );
      if (0 === l.length) {
        const e = i.findAll((e) => "video/mp4" === e.mimeType && a(e) === r);
        l.push(...e);
      }
      const c = (e) => {
          const { width: t, height: i, bitrate: o } = e;
          if (o) return o;
          return { [r]: 87e-5, [s]: 61e-5, [n]: 76e-5 }[a(e)] * t * i;
        },
        d = new Hr(),
        h = d.bandwidthData.estimate > -1,
        u = (e) => {
          const { width: t, height: i } = e;
          let n = 1;
          if (h) {
            const t = Math.round(1e3 * d.bandwidthData.estimate);
            n *= Math.min(t / c(e), 1);
          }
          if (t && i) {
            const e = Math.min(
              t / ($r.getWidth(this._container) * jr.devicePixelRatio),
              i / ($r.getHeight(this._container) * jr.devicePixelRatio)
            );
            n *= Math.min(1, e);
          }
          return n;
        };
      let p,
        m = 0;
      for (let _ = 0; _ < l.length; _++) {
        const e = u(l[_]);
        e > m
          ? ((m = e), (p = l[_]))
          : e === m && (p = c(l[_]) < c(p) ? l[_] : p);
      }
      (this._rmpVast.creative.mediaUrl = p.fileURL),
        (this._rmpVast.creative.height = p.height),
        (this._rmpVast.creative.width = p.width),
        (this._rmpVast.creative.type = p.mimeType),
        this._rmpVast.rmpVastAdPlayer &&
          this._rmpVast.rmpVastAdPlayer.append(p.fileURL, p.mimeType);
    }
  }
  class bs {
    constructor(e) {
      (this._rmpVast = e),
        (this._params = e.params),
        (this._adContainer = e.adContainer),
        (this._container = e.container),
        (this._nonLinearMinSuggestedDuration = 0),
        (this._firstContentPlayerPlayRequest = !0),
        (this._nonLinearCloseElement = null),
        (this._nonLinearAElement = null),
        (this._nonLinearInnerElement = null),
        (this._nonLinearContainerElement = null),
        (this._onNonLinearLoadSuccessFn = null),
        (this._onNonLinearLoadErrorFn = null),
        (this._onNonLinearClickThroughFn = null),
        (this._onClickCloseNonLinearFn = null);
    }
    get nonLinearContainerElement() {
      return this._nonLinearContainerElement;
    }
    _onNonLinearLoadError() {
      zr.processVastErrors.call(this._rmpVast, 502, !0);
    }
    _onNonLinearLoadSuccess() {
      (this._rmpVast.__adOnStage = !0),
        zr.createApiEvent.call(this._rmpVast, [
          "adloaded",
          "adimpression",
          "adstarted",
        ]),
        Jr.dispatch.call(this._rmpVast, [
          "impression",
          "creativeView",
          "start",
          "loaded",
        ]);
    }
    _onNonLinearClickThrough(e) {
      try {
        e && e.stopPropagation(),
          this._rmpVast.pause(),
          zr.createApiEvent.call(this._rmpVast, "adclick"),
          Jr.dispatch.call(this._rmpVast, "clickthrough");
      } catch (Wi) {
        console.warn(Wi);
      }
    }
    _onClickCloseNonLinear(e) {
      e && (e.stopPropagation(), "touchend" === e.type && e.preventDefault()),
        $r.setStyle(this._nonLinearContainerElement, { display: "none" }),
        zr.createApiEvent.call(this._rmpVast, "adclosed"),
        Jr.dispatch.call(this._rmpVast, "close");
    }
    _appendCloseButton() {
      (this._nonLinearCloseElement = document.createElement("div")),
        (this._nonLinearCloseElement.className = "rmp-ad-non-linear-close"),
        zr.makeButtonAccessible(
          this._nonLinearCloseElement,
          this._params.labels.closeAd
        ),
        this._nonLinearMinSuggestedDuration > 0
          ? ($r.setStyle(this._nonLinearCloseElement, { display: "none" }),
            setTimeout(() => {
              $r.setStyle(this._nonLinearCloseElement, { display: "block" });
            }, 1e3 * this._nonLinearMinSuggestedDuration))
          : $r.setStyle(this._nonLinearCloseElement, { display: "block" }),
        (this._onClickCloseNonLinearFn =
          this._onClickCloseNonLinear.bind(this)),
        $r.addEvents(
          ["touchend", "click"],
          this._nonLinearCloseElement,
          this._onClickCloseNonLinearFn
        ),
        this._nonLinearContainerElement.appendChild(
          this._nonLinearCloseElement
        );
    }
    destroy() {
      this._nonLinearInnerElement &&
        (this._nonLinearInnerElement.removeEventListener(
          "load",
          this._onNonLinearLoadSuccessFn
        ),
        this._nonLinearInnerElement.removeEventListener(
          "error",
          this._onNonLinearLoadErrorFn
        )),
        $r.removeEvents(
          ["touchend", "click"],
          this._nonLinearAElement,
          this._onNonLinearClickThroughFn
        ),
        $r.removeEvents(
          ["touchend", "click"],
          this._nonLinearCloseElement,
          this._onClickCloseNonLinearFn
        );
    }
    update() {
      (this._nonLinearContainerElement = document.createElement("div")),
        (this._nonLinearContainerElement.className =
          "rmp-ad-non-linear-container"),
        $r.setStyle(this._nonLinearContainerElement, {
          width: `${this._rmpVast.creative.width.toString()}px`,
          height: `${this._rmpVast.creative.height.toString()}px`,
        }),
        (this._nonLinearAElement = document.createElement("a")),
        (this._nonLinearAElement.className = "rmp-ad-non-linear-anchor"),
        this._rmpVast.creative.clickThroughUrl &&
          ((this._nonLinearAElement.href =
            this._rmpVast.creative.clickThroughUrl),
          (this._nonLinearAElement.target = "_blank"),
          (this._onNonLinearClickThroughFn =
            this._onNonLinearClickThrough.bind(this)),
          $r.addEvents(
            ["touchend", "click"],
            this._nonLinearAElement,
            this._onNonLinearClickThroughFn
          )),
        "image" === this._rmpVast.creative.nonLinearType
          ? (this._nonLinearInnerElement = document.createElement("img"))
          : ((this._nonLinearInnerElement = document.createElement("iframe")),
            (this._nonLinearInnerElement.sandbox =
              "allow-scripts allow-same-origin"),
            $r.setStyle(this._nonLinearInnerElement, {
              border: "none",
              overflow: "hidden",
            }),
            this._nonLinearInnerElement.setAttribute(
              "allow",
              "autoplay; fullscreen; picture-in-picture; encrypted-media"
            ),
            this._nonLinearInnerElement.setAttribute("scrolling", "no"),
            this._nonLinearInnerElement.setAttribute(
              "sandbox",
              "allow-scripts allow-presentation allow-same-origin"
            )),
        (this._nonLinearInnerElement.className = "rmp-ad-non-linear-creative"),
        (this._onNonLinearLoadErrorFn = this._onNonLinearLoadError.bind(this)),
        this._nonLinearInnerElement.addEventListener(
          "error",
          this._onNonLinearLoadErrorFn
        ),
        (this._onNonLinearLoadSuccessFn =
          this._onNonLinearLoadSuccess.bind(this)),
        this._nonLinearInnerElement.addEventListener(
          "load",
          this._onNonLinearLoadSuccessFn
        ),
        "html" === this._rmpVast.creative.nonLinearType
          ? (this._nonLinearInnerElement.srcdoc =
              this._rmpVast.creative.mediaUrl)
          : (this._nonLinearInnerElement.src = this._rmpVast.creative.mediaUrl),
        this._nonLinearAElement.appendChild(this._nonLinearInnerElement),
        this._nonLinearContainerElement.appendChild(this._nonLinearAElement),
        this._adContainer.appendChild(this._nonLinearContainerElement),
        this._appendCloseButton(),
        $r.show(this._adContainer),
        this._rmpVast.rmpVastContentPlayer.play(
          this._firstContentPlayerPlayRequest
        ),
        (this._firstContentPlayerPlayRequest = !1);
    }
    parse(e) {
      let t,
        i = !1;
      for (let n = 0; n < e.length; n++) {
        (i = !1), (t = e[n]);
        let r = t.width,
          s = t.height;
        if (
          (r <= 0 && (r = 300),
          s <= 0 && (s = 44),
          r > $r.getWidth(this._container) || s > $r.getHeight(this._container))
        ) {
          i = !0;
          continue;
        }
        this._nonLinearMinSuggestedDuration = t.minSuggestedDuration;
        const a = t.staticResource,
          o = t.iframeResource,
          l = t.htmlResource;
        if (null !== a || null !== o || null !== l) {
          a
            ? ((this._rmpVast.creative.mediaUrl = a),
              (this._rmpVast.creative.nonLinearType = "image"))
            : o
            ? ((this._rmpVast.creative.mediaUrl = o),
              (this._rmpVast.creative.nonLinearType = "iframe"))
            : l &&
              ((this._rmpVast.creative.mediaUrl = l),
              (this._rmpVast.creative.nonLinearType = "html")),
            (this._rmpVast.creative.width = r),
            (this._rmpVast.creative.height = s),
            (this._rmpVast.creative.type = t.type);
          break;
        }
      }
      if (!this._rmpVast.creative.mediaUrl || i) {
        let e = 503;
        return (
          i && (e = 501), void zr.processVastErrors.call(this._rmpVast, e, !0)
        );
      }
      (this._rmpVast.creative.clickThroughUrl =
        t.nonlinearClickThroughURLTemplate),
        t.nonlinearClickTrackingURLTemplates.length > 0 &&
          t.nonlinearClickTrackingURLTemplates.forEach((e) => {
            e.url &&
              this._rmpVast.trackingTags.push({
                event: "clickthrough",
                url: e.url,
              });
          }),
        this._rmpVast.rmpVastAdPlayer && this._rmpVast.rmpVastAdPlayer.append();
    }
  }
  class As {
    constructor(e) {
      (this.eventName = e), (this.callbacks = []);
    }
    registerCallback(e) {
      this.callbacks.push(e);
    }
    unregisterCallback(e) {
      const t = this.callbacks.indexOf(e);
      t > -1 && this.callbacks.splice(t, 1);
    }
    fire(e) {
      this.callbacks.slice(0).forEach((t) => {
        t(e);
      });
    }
  }
  class Ts {
    constructor(e) {
      (this._rmpVast = e),
        (this._params = e.params),
        (this._contentPlayer = e.__contentPlayer),
        (this._adContainer = e.adContainer),
        (this._contentWrapper = e.contentWrapper),
        (this._adPlayer = null),
        (this._onTimeUpdateFn = null),
        (this._onProgressFn = null),
        (this._onPlayButtonClickFn = null);
    }
    destroy() {
      this._rmpVast.rmpVastIcons && this._rmpVast.rmpVastIcons.destroy(),
        this._rmpVast.rmpVastVpaidPlayer &&
          this._rmpVast.rmpVastVpaidPlayer.destroy(),
        this._rmpVast.rmpVastNonLinearCreative &&
          this._rmpVast.rmpVastNonLinearCreative.destroy(),
        this._rmpVast.rmpVastLinearCreative &&
          this._rmpVast.rmpVastLinearCreative.destroy(),
        this._onTimeUpdateFn &&
          this._adPlayer.removeEventListener(
            "timeupdate",
            this._onTimeUpdateFn
          ),
        this._onProgressFn &&
          this._adPlayer.removeEventListener("progress", this._onProgressFn),
        this._onPlayButtonClickFn &&
          this._adPlayer.removeEventListener(
            "click",
            this._onPlayButtonClickFn
          ),
        Jr.destroy.call(this._rmpVast),
        $r.hide(this._adContainer),
        this._rmpVast.rmpVastContentPlayer &&
          this._rmpVast.rmpVastContentPlayer.destroy();
      try {
        this._adPlayer &&
          (this._adPlayer.pause(),
          this._rmpVast.rmpVastLinearCreative &&
          this._rmpVast.rmpVastLinearCreative.readingHlsJS
            ? ((this._rmpVast.rmpVastLinearCreative.readingHlsJS = !1),
              this._rmpVast.rmpVastLinearCreative.hlsJSInstances[
                this._rmpVast.rmpVastLinearCreative.hlsJSIndex
              ].destroy(),
              (this._rmpVast.rmpVastLinearCreative.hlsJSIndex = this._rmpVast
                .rmpVastLinearCreative.hlsJSIndex++))
            : (this._adPlayer.removeAttribute("src"), this._adPlayer.load()),
          $r.hide(this._adPlayer)),
          this._rmpVast.rmpVastNonLinearCreative &&
            $r.removeElement(
              this._rmpVast.rmpVastNonLinearCreative.nonLinearContainerElement
            );
      } catch (e) {
        console.warn(e);
      }
      zr.resetVariablesForNewLoadAds.call(this._rmpVast),
        zr.createApiEvent.call(this._rmpVast, "addestroyed");
    }
    init() {
      (this._rmpVast.adContainer = this._adContainer =
        document.createElement("div")),
        (this._adContainer.className = "rmp-ad-container"),
        this._contentWrapper.appendChild(this._adContainer),
        $r.hide(this._adContainer),
        (this._rmpVast.__adPlayer = this._adPlayer =
          document.createElement("video")),
        $r.logVideoEvents(this._adPlayer, "ad"),
        (this._adPlayer.disableRemotePlayback = !0),
        (this._adPlayer.disablePictureInPicture = !0),
        (this._adPlayer.className = "rmp-ad-vast-video-player"),
        this._params.showControlsForAdPlayer
          ? (this._adPlayer.controls = !0)
          : (this._adPlayer.controls = !1),
        this._contentPlayer.hasAttribute("muted") &&
          (this._contentPlayer.muted = !0),
        this._contentPlayer.muted && (this._adPlayer.muted = !0),
        (this._adPlayer.poster =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="),
        this._adPlayer.setAttribute("x-webkit-airplay", "allow"),
        "boolean" == typeof this._contentPlayer.playsInline &&
          this._contentPlayer.playsInline &&
          (this._adPlayer.playsInline = !0),
        $r.hide(this._adPlayer),
        this._adContainer.appendChild(this._adPlayer),
        this._contentPlayer.addEventListener("ended", () => {
          this._rmpVast.__adOnStage ||
            (this._rmpVast.__contentPlayerCompleted = !0);
        }),
        (this._adPlayer.preload = "auto"),
        jr.isMobile && (this._contentPlayer.load(), this._adPlayer.load()),
        (jr.isIos[0] || jr.isMacOS[0] || jr.isIpadOS || jr.isMacOS[0]) &&
          ((this._onTimeUpdateFn = this._onTimeUpdate.bind(this)),
          this._adPlayer.addEventListener("timeupdate", this._onTimeUpdateFn),
          (this._onProgressFn = this._onProgress.bind(this)),
          this._adPlayer.addEventListener("progress", this._onProgressFn)),
        (this._rmpVast.__initialized = !0);
    }
    append(e, t) {
      if (!this._adPlayer) {
        let e = null;
        if (
          (this._adContainer &&
            (e = this._adContainer.querySelector(".rmp-ad-vast-video-player")),
          null === e)
        )
          return void zr.processVastErrors.call(this._rmpVast, 900, !0);
        this._adPlayer = e;
      }
      if (
        (this._rmpVast.rmpVastContentPlayer.pause(),
        this._rmpVast.creative.isLinear)
      )
        e &&
          t &&
          this._rmpVast.rmpVastLinearCreative &&
          this._rmpVast.rmpVastLinearCreative.update(e, t);
      else {
        if (this._params.outstream)
          return void zr.processVastErrors.call(this._rmpVast, 201, !0);
        this._rmpVast.rmpVastNonLinearCreative &&
          this._rmpVast.rmpVastNonLinearCreative.update();
      }
      if ((Jr.wire.call(this._rmpVast), this._rmpVast.rmpVastIcons)) {
        this._rmpVast.rmpVastIcons.iconsData.length > 0 &&
          this._rmpVast.rmpVastIcons.append();
      }
    }
    appendPlayButton() {
      const e = document.createElement("div");
      e.className = "rmp-ad-container-play-button";
      const t = document.createElement("img");
      (t.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKESURBVHgB7dztcdNAEIDhNUMBKcHpIKkAUgFDBTgV4FRgUwGhAkMFmApsKiBUIHUAHSy7IzyRE9uxpDt93fvM7Ezy9/bjzmdZIgAAAAAAAAAAjIOqXlls9JH/PRXE5wtt8UcPW5GIyJ5U/iGZxQdBHHo+T8Q7QVha3UoZS+FofUtBc9pMpuwPzWgY35WxVI+G9ZlEVKThZTqisTSRyHzFJI7c4mYymeQyYK9kuKYW3g0rxtIJ2g6/6lgKntN2ZcqxdZ92Y6UDGUtD3oTP8cni3jbqv5Iq7V6mPR5LY++AsgeL9307tg75GFrVlfTw2JpSAnZmFpu+jKWURtAhucXcxtIP6UiKHVA2tVh3OZZST8DOTIr9YSktIwH7Fm0fW1PfA05ZW9zFPraSgJfdW3yJlQgScJ7cYmlJ+CaBkYBqcgn8JRCbcDVTKU5LcwmEDqjHb1cvQ9yy0gH1XFgEeYySBHSMBNT3WwIgAfV8tfn/IAGQgOr8g9mdBPJacK7cYmaV/1MCogPO41V/HXrxHR1wWi4Rqr6MDjguWtWX0QHP+elmHnvhd+iAfX7jed3W4js6oLCV4suXIGf7KlLvAL9M83Fz08Xiu5Q7YGtx2/WTcil2QLnqc+lYah2wlR5UfVkqHdCrqi9LoQO20rOqLxtzB/S26svG2gH+UNXtEH4ZM7YE+IL7wq9lIMY0gvzy7HJIi+/G0AG5RL4yHjSNy1/ecSE4TuPILN4IXqbhUfVVaDiZUvXVaRhUfV3azC+l6pvR+haC5rS6jcWVIIwKC+8vXfooCEuPv7j7adVPBeHZwi6o+o5p8eJVqv6A6L8R29Hizehv//+75vIMAAAAAAAAAIDW/AMZppzFSmxZ4wAAAABJRU5ErkJggg=="),
        (t.width = 96),
        (t.height = 96),
        e.appendChild(t),
        this._adContainer.appendChild(e),
        (this._onPlayButtonClickFn = this._onPlayButtonClick.bind(this)),
        this._adPlayer.addEventListener("click", this._onPlayButtonClickFn, {
          once: !0,
        });
      const i = setTimeout(() => {
        zr.processVastErrors.call(this, 400, !0);
      }, 8e3);
      this._adPlayer.addEventListener(
        "playing",
        () => {
          e.remove(), clearTimeout(i);
        },
        { once: !0 }
      );
    }
    _onPlayButtonClick() {
      this._adPlayer.play();
      const e = this._adContainer.querySelector(
        ".rmp-ad-container-play-button"
      );
      e && e.remove();
    }
    _onTimeUpdate() {
      this.lastBufferedTime < this._adPlayer.currentTime &&
        this._adPlayer.pause();
    }
    _onProgress() {
      this.lastBufferedTime > this._adPlayer.currentTime &&
        this._adPlayer.paused &&
        this._adPlayer.play();
    }
    set volume(e) {
      this._adPlayer && (this._adPlayer.volume = e);
    }
    get volume() {
      return this._adPlayer ? this._adPlayer.volume : -1;
    }
    set muted(e) {
      this._adPlayer &&
        (e && !this._adPlayer.muted
          ? (this._adPlayer.muted = !0)
          : !e && this._adPlayer.muted && (this._adPlayer.muted = !1));
    }
    get muted() {
      return !!this._adPlayer && this._adPlayer.muted;
    }
    get duration() {
      return this._adPlayer && $r.isNumber(this._adPlayer.duration)
        ? 1e3 * this._adPlayer.duration
        : -1;
    }
    get currentTime() {
      return this._adPlayer && $r.isNumber(this._adPlayer.currentTime)
        ? 1e3 * this._adPlayer.currentTime
        : -1;
    }
    get lastBufferedTime() {
      var e;
      if (this._adPlayer.buffered && this._adPlayer.buffered.length > 0) {
        const t =
          null == (e = this._adPlayer.buffered)
            ? void 0
            : e.end(this._adPlayer.buffered.length - 1);
        if (void 0 !== t) return t;
      }
      return 1 / 0;
    }
    play(e) {
      this._adPlayer &&
        this._adPlayer.paused &&
        zr.playPromise.call(this._rmpVast, "vast", e);
    }
    pause() {
      this._adPlayer && !this._adPlayer.paused && this._adPlayer.pause();
    }
    resumeContent() {
      this._rmpVast.rmpVastAdPlayer && this._rmpVast.rmpVastAdPlayer.destroy(),
        this._rmpVast.rmpVastLinearCreative &&
          (this._rmpVast.rmpVastLinearCreative.readingHlsJS = !1),
        this._rmpVast.__contentPlayerCompleted ||
          this._params.outstream ||
          this._rmpVast.rmpVastContentPlayer.play(),
        (this._rmpVast.__contentPlayerCompleted = !1);
    }
  }
  class ws {
    constructor(e) {
      (this._rmpVast = e),
        (this._contentPlayer = e.__contentPlayer),
        (this._customPlaybackCurrentTime = 0),
        (this._antiSeekLogicInterval = null);
    }
    destroy() {
      $r.clearInterval(this._antiSeekLogicInterval);
    }
    play(e) {
      this._contentPlayer &&
        this._contentPlayer.paused &&
        zr.playPromise.call(this._rmpVast, "content", e);
    }
    pause() {
      this._contentPlayer &&
        !this._contentPlayer.paused &&
        this._contentPlayer.pause();
    }
    set volume(e) {
      this._contentPlayer && (this._contentPlayer.volume = e);
    }
    get volume() {
      return this._contentPlayer ? this._contentPlayer.volume : -1;
    }
    get muted() {
      return !!this._contentPlayer && this._contentPlayer.muted;
    }
    set muted(e) {
      this._contentPlayer &&
        (e && !this._contentPlayer.muted
          ? (this._contentPlayer.muted = !0)
          : !e &&
            this._contentPlayer.muted &&
            (this._contentPlayer.muted = !1));
    }
    get currentTime() {
      return this._contentPlayer && $r.isNumber(this._contentPlayer.currentTime)
        ? 1e3 * this._contentPlayer.currentTime
        : -1;
    }
    seekTo(e) {
      $r.isNumber(e) &&
        e >= 0 &&
        this._contentPlayer &&
        (this._contentPlayer.currentTime = e / 1e3);
    }
    preventSeekingForCustomPlayback() {
      this._contentPlayer &&
        (this._antiSeekLogicInterval = setInterval(() => {
          if (this._rmpVast.creative.isLinear && this._rmpVast.__adOnStage) {
            Math.abs(
              this._customPlaybackCurrentTime - this._contentPlayer.currentTime
            ) > 1 &&
              (this._contentPlayer.currentTime =
                this._customPlaybackCurrentTime),
              (this._customPlaybackCurrentTime =
                this._contentPlayer.currentTime);
          }
        }, 200));
    }
  }
  class ks {
    constructor(e, t) {
      (this._rmpVast = t),
        (this.VastProperties = null),
        (this._adEvents = null),
        (this._mediaEvents = null),
        (this._adSession = null),
        (this._lastVideoTime = -1),
        (this._adVerifications = e),
        (this._onFullscreenChangeFn = null),
        (this._contentPlayer = t.__contentPlayer),
        (this._adPlayer = t.__adPlayer),
        (this._params = t.params),
        (this._isSkippableAd = t.isSkippableAd),
        (this._skipTimeOffset = t.skipTimeOffset);
    }
    _destroy() {
      document.removeEventListener(
        "fullscreenchange",
        this._onFullscreenChangeFn
      ),
        this._adSession.finish();
    }
    _onFullscreenChange() {
      const e = null !== document.fullscreenElement ? "fullscreen" : "normal";
      this._mediaEvents.playerStateChange(e);
    }
    _pingVerificationNotExecuted(e, t) {
      void 0 !== e.trackingEvents &&
        Array.isArray(e.trackingEvents.verificationNotExecuted) &&
        e.trackingEvents.verificationNotExecuted.length > 0 &&
        e.trackingEvents.verificationNotExecuted.forEach((e) => {
          let i = e;
          const n = /\[REASON\]/gi;
          n.test(i) && (i = i.replace(n, t)), Jr.pingURI.call(this._rmpVast, i);
        });
    }
    _adPlayerDidDispatchTimeUpdate() {
      if (
        !this._adEvents ||
        !this._mediaEvents ||
        !this._adPlayer ||
        0 === this._adPlayer.playbackRate
      )
        return;
      const e = this._adPlayer.currentTime,
        t = this._adPlayer.duration;
      if (e > -1 && t > 0) {
        const i = e / t;
        this._lastVideoTime < 0 && i >= 0
          ? (this._adEvents.impressionOccurred(),
            this._mediaEvents.start(t, this._adPlayer.volume))
          : this._lastVideoTime < 0.25 && i >= 0.25
          ? this._mediaEvents.firstQuartile()
          : this._lastVideoTime < 0.5 && i >= 0.5
          ? this._mediaEvents.midpoint()
          : this._lastVideoTime < 0.75 && i >= 0.75
          ? this._mediaEvents.thirdQuartile()
          : this._lastVideoTime < 1 &&
            i >= 1 &&
            (this._mediaEvents.complete(),
            (this._adEvents = null),
            (this._mediaEvents = null),
            setTimeout(() => {
              this._destroy();
            }, 300)),
          (this._lastVideoTime = i);
      }
    }
    _adPlayerDidDispatchEvent(e) {
      if (
        !(
          this._adSession &&
          this._adEvents &&
          this._mediaEvents &&
          this.VastProperties
        )
      )
        return;
      let t,
        i,
        n = "preroll";
      switch (e.type) {
        case "error":
          this._adSession.error("video", this._adPlayer.error.message);
          break;
        case "loadeddata":
          if (
            (this._skipTimeOffset < 0 && (this._skipTimeOffset = 0),
            this._params.outstream)
          )
            n = "standalone";
          else {
            const e = this._contentPlayer.currentTime,
              t = this._contentPlayer.duration;
            (e > 0 && e < t) || (e >= t && (n = "postroll"));
          }
          (t = new this.VastProperties(
            this._isSkippableAd,
            this._skipTimeOffset,
            this._params.omidAutoplay,
            n
          )),
            this._adEvents.loaded(t);
          break;
        case "pause":
          this._mediaEvents.pause();
          break;
        case "play":
          this._adPlayer.currentTime > 0 && this._mediaEvents.resume();
          break;
        case "timeupdate":
          this._adPlayerDidDispatchTimeUpdate();
          break;
        case "volumechange":
          (i = this._adPlayer.muted ? 0 : this._adPlayer.volume),
            this._mediaEvents.volumeChange(i);
          break;
        case "click":
          this._mediaEvents.adUserInteraction("click");
      }
    }
    _onOMWebLoaded() {
      const e = [];
      let t,
        i = [];
      for (let m = 0; m < this._adVerifications.length; m++) {
        const t = this._adVerifications[m];
        "string" == typeof t.resource &&
          "" !== t.resource &&
          (!(
            (void 0 !== t.type && "executable" === t.type) ||
            (void 0 !== t.apiFramework && "omid" !== t.apiFramework)
          )
            ? (this._params.omidAllowedVendors.length > 0 &&
                void 0 !== t.vendor &&
                !this._params.omidAllowedVendors.includes(t.vendor)) ||
              (void 0 === t.browserOptional || !0 !== t.browserOptional
                ? e.push(t)
                : i.push(m))
            : this._pingVerificationNotExecuted(t, "2"));
      }
      0 === e.length &&
        i.length > 0 &&
        i.forEach((t) => {
          e.push(this._adVerifications[t]);
        }),
        (this._adVerifications = e);
      try {
        t = OmidSessionClient.default;
      } catch (p) {
        return void console.warn(p);
      }
      const n = t.AdSession,
        r = t.Partner,
        s = t.Context,
        a = t.VerificationScriptResource,
        o = t.AdEvents,
        l = t.MediaEvents;
      this.VastProperties = t.VastProperties;
      const c = new r(this._params.partnerName, this._params.partnerVersion);
      let d = [];
      if (this._params.omidRunValidationScript) {
        const e =
            "https://cdn.radiantmediatechs.com/rmp/omsdk/1.3.37/omid-validation-verification-script-v1.js",
          t = "dummyVendor",
          i = JSON.stringify({ k: "v" });
        d.push(new a(e, t, i));
      } else {
        const e = "full";
        d = this._adVerifications.map(
          (t) => new a(t.resource, t.vendor, t.parameters, e)
        );
      }
      const h = new s(c, d, document.location.href);
      this._params.omidUnderEvaluation && (h.underEvaluation = !0);
      const u = window.top;
      u &&
        (h.setServiceWindow(u),
        h.setVideoElement(this._adPlayer),
        (this._adSession = new n(h)),
        this._adSession.setCreativeType("video"),
        this._adSession.setImpressionType("beginToRender"),
        this._adSession.isSupported() &&
          ((this._adEvents = new o(this._adSession)),
          (this._mediaEvents = new l(this._adSession)),
          this._adSession.start()));
    }
    init() {
      [
        "error",
        "loadeddata",
        "pause",
        "play",
        "timeupdate",
        "volumechange",
        "click",
      ].forEach((e) => {
        this._adPlayer.addEventListener(e, (e) =>
          this._adPlayerDidDispatchEvent(e)
        );
      }),
        (this._onFullscreenChangeFn = this._onFullscreenChange.bind(this)),
        document.addEventListener(
          "fullscreenchange",
          this._onFullscreenChangeFn
        ),
        this._onOMWebLoaded();
    }
  }
  class Ps {
    constructor(e, t) {
      zr.initInstanceVariables.call(this),
        "string" == typeof e &&
          "" !== e &&
          ((this.id = e),
          (this.container = document.getElementById(this.id)),
          (this.contentWrapper = this.container.querySelector(".rmp-content")),
          (this.__contentPlayer = this.container.querySelector(".rmp-video")),
          null !== this.container &&
            null !== this.contentWrapper &&
            null !== this.__contentPlayer &&
            ((this.rmpVastContentPlayer = new ws(this)),
            $r.logVideoEvents(this.__contentPlayer, "content"),
            zr.resetVariablesForNewLoadAds.call(this),
            zr.handleFullscreen.call(this),
            zr.filterParams.call(this, t)));
    }
    dispatch(e, t) {
      const i = this.events[e];
      if (i) {
        const n = { type: e };
        t && (n.data = t), i.fire(n);
      }
    }
    _on(e, t) {
      let i = this.events[e];
      i || ((i = new As(e)), (this.events[e] = i)), i.registerCallback(t);
    }
    on(e, t) {
      if ("string" != typeof e || "" === e || "function" != typeof t) return;
      e.split(" ").forEach((e) => {
        this._on(e, t);
      });
    }
    _one(e, t) {
      const i = (n) => {
        this.off(e, i), t(n);
      };
      this.on(e, i);
    }
    one(e, t) {
      if ("string" != typeof e || "" === e || "function" != typeof t) return;
      e.split(" ").forEach((e) => {
        this._one(e, t);
      });
    }
    _off(e, t) {
      const i = this.events[e];
      i &&
        i.callbacks.indexOf(t) > -1 &&
        (i.unregisterCallback(t),
        0 === i.callbacks.length && delete this.events[e]);
    }
    off(e, t) {
      if ("string" != typeof e || "" === e || "function" != typeof t) return;
      e.split(" ").forEach((e) => {
        this._off(e, t);
      });
    }
    _addTrackingEvents(e) {
      Object.keys(e).forEach((t) => {
        e[t].forEach((e) => {
          this.trackingTags.push({ event: t, url: e });
        });
      });
    }
    _parseCompanion(e) {
      (this.validCompanionAds = []),
        (this.__companionAdsRequiredAttribute = ""),
        e.required && (this.__companionAdsRequiredAttribute = e.required);
      const t = e.variations;
      if (t.length > 0)
        for (let i = 0; i < t.length; i++) {
          const e = t[i],
            n = { width: e.width, height: e.height },
            r = e.staticResources.find((e) => {
              if (e.url) return !0;
            }),
            s = e.iframeResources.find((e) => {
              if (e) return !0;
            }),
            a = e.htmlResources.find((e) => {
              if (e) return !0;
            });
          r && r.url && (n.imageUrl = r.url),
            s && s.length > 0 && (n.iframeUrl = s),
            a && a.length > 0 && (n.htmlContent = a),
            (void 0 === r && void 0 === s && void 0 === a) ||
              (e.companionClickThroughURLTemplate &&
                (n.companionClickThroughUrl =
                  e.companionClickThroughURLTemplate),
              e.companionClickTrackingURLTemplates.length > 0 &&
                (n.companionClickTrackingUrls =
                  e.companionClickTrackingURLTemplates),
              e.altText && (n.altText = e.altText),
              e.adSlotId && (n.adSlotId = e.adSlotId),
              (n.trackingEventsUrls = []),
              e.trackingEvents &&
                e.trackingEvents.creativeView &&
                e.trackingEvents.creativeView.forEach((e) => {
                  n.trackingEventsUrls.push(e);
                }),
              this.validCompanionAds.push(n));
        }
    }
    _handleIntersect(e) {
      e.forEach((e) => {
        e.intersectionRatio > this.viewablePreviousRatio &&
          (this.viewableObserver.unobserve(this.container),
          zr.createApiEvent.call(this, "adviewable"),
          Jr.dispatch.call(this, "viewable")),
          (this.viewablePreviousRatio = e.intersectionRatio);
      });
    }
    _attachViewableObserver() {
      if (
        (this.off("adstarted", this.attachViewableObserverFn),
        void 0 !== window.IntersectionObserver)
      ) {
        const e = { root: null, rootMargin: "0px", threshold: [0.5] };
        (this.viewableObserver = new IntersectionObserver(
          this._handleIntersect.bind(this),
          e
        )),
          this.viewableObserver.observe(this.container);
      } else zr.createApiEvent.call(this, "adviewundetermined"), Jr.dispatch.call(this, "viewundetermined");
    }
    _initViewableImpression() {
      this.viewableObserver && this.viewableObserver.unobserve(this.container),
        this.ad.viewableImpression.forEach((e) => {
          e.viewable.length > 0 &&
            e.viewable.forEach((e) => {
              this.trackingTags.push({ event: "viewable", url: e });
            }),
            e.notViewable.length > 0 &&
              e.notViewable.forEach((e) => {
                this.trackingTags.push({ event: "notviewable", url: e });
              }),
            e.viewUndetermined.length > 0 &&
              e.viewUndetermined.forEach((e) => {
                this.trackingTags.push({ event: "viewundetermined", url: e });
              });
        }),
        (this.attachViewableObserverFn =
          this._attachViewableObserver.bind(this)),
        this.on("adstarted", this.attachViewableObserverFn);
    }
    _loopAds(e) {
      return h(this, null, function* () {
        for (let t = 0; t < e.length; t++)
          yield new Promise((i) => {
            const n = e[t];
            if (
              ((this.ad.id = n.id),
              (this.ad.adServingId = n.adServingId),
              (this.ad.categories = n.categories),
              this.requireCategory &&
                ((0 !== this.ad.categories.length &&
                  this.ad.categories[0].authority) ||
                  (zr.processVastErrors.call(this, 204, !0), i())),
              (this.ad.blockedAdCategories = n.blockedAdCategories),
              this.requireCategory)
            ) {
              let e = !1;
              this.ad.blockedAdCategories.forEach((t) => {
                const i = t.authority,
                  n = t.value;
                this.ad.categories.forEach((t) => {
                  const r = t.authority,
                    s = t.value;
                  i === r &&
                    n === s &&
                    (zr.processVastErrors.call(this, 205, !0), (e = !0));
                });
              }),
                e && i();
            }
            if (
              ((this.ad.adType = n.adType),
              (this.ad.title = n.title),
              (this.ad.description = n.description),
              (this.ad.system = n.system),
              (this.ad.advertiser = n.advertiser),
              (this.ad.pricing = n.pricing),
              (this.ad.survey = n.survey),
              (this.ad.sequence = n.sequence),
              e.find((e) => {
                if (((this.adPod = !1), e.sequence && e.sequence > 1))
                  return (this.adPod = !0), !0;
              }),
              this.adPod)
            ) {
              let t = e.reduce((e, t) =>
                e.sequence > t.sequence ? e : t
              ).sequence;
              if (
                (e.forEach((e) => {
                  null === e.sequence && ((e.sequence = t + 1), t++);
                }),
                this.adSequence++,
                0 === this.adPodLength)
              ) {
                let t = 0;
                e.forEach((e) => {
                  e.sequence && t++;
                }),
                  (this.adPodLength = t);
              }
              this.one("addestroyed", () => {
                this.adSequence === this.adPodLength &&
                  ((this.adPodLength = 0),
                  (this.adSequence = 0),
                  (this.adPod = !1),
                  zr.createApiEvent.call(this, "adpodcompleted")),
                  i();
              });
            }
            (this.ad.viewableImpression = n.viewableImpression),
              this.ad.viewableImpression.length > 0 &&
                this._initViewableImpression(),
              n.errorURLTemplates.forEach((e) => {
                this.adErrorTags.push({ event: "error", url: e });
              }),
              n.impressionURLTemplates.forEach((e) => {
                e.url &&
                  this.trackingTags.push({ event: "impression", url: e.url });
              });
            const r = n.creatives;
            r.find((e) => {
              if ("companion" === e.type) return this._parseCompanion(e), !0;
            });
            for (let e = 0; e < r.length; e++) {
              const t = r[e];
              if ("companion" !== t.type)
                switch (
                  ((this.creative.id = t.id),
                  (this.creative.universalAdIds = t.universalAdIds),
                  (this.creative.adId = t.adId),
                  (this.creative.trackingEvents = t.trackingEvents),
                  t.type)
                ) {
                  case "linear":
                    if (
                      ((this.creative.duration = t.duration),
                      (this.creative.skipDelay = t.skipDelay),
                      this.creative.skipDelay &&
                        ((this.creative.skipoffset = t.skipDelay),
                        (this.creative.isSkippableAd = !0)),
                      t.videoClickThroughURLTemplate &&
                        t.videoClickThroughURLTemplate.url &&
                        (this.creative.clickThroughUrl =
                          t.videoClickThroughURLTemplate.url),
                      t.videoClickTrackingURLTemplates.length > 0 &&
                        t.videoClickTrackingURLTemplates.forEach((e) => {
                          e.url &&
                            this.trackingTags.push({
                              event: "clickthrough",
                              url: e.url,
                            });
                        }),
                      (this.creative.isLinear = !0),
                      t.interactiveCreativeFile &&
                        /simid/i.test(t.interactiveCreativeFile.apiFramework) &&
                        /text\/html/i.test(t.interactiveCreativeFile.type) &&
                        ((this.creative.simid = {
                          fileURL: t.interactiveCreativeFile.fileURL,
                          variableDuration:
                            t.interactiveCreativeFile.variableDuration,
                        }),
                        t.adParameters &&
                          t.adParameters.value &&
                          (this.creative.simid.adParameters =
                            t.adParameters.value)),
                      this._addTrackingEvents(t.trackingEvents),
                      (this.rmpVastLinearCreative = new Es(this)),
                      this.rmpVastLinearCreative.parse(t),
                      this.params.omidSupport && n.adVerifications.length > 0)
                    ) {
                      new ks(n.adVerifications, this).init();
                    }
                    break;
                  case "nonlinear":
                    (this.creative.isLinear = !1),
                      this._addTrackingEvents(t.trackingEvents),
                      (this.rmpVastNonLinearCreative = new bs(this)),
                      this.rmpVastNonLinearCreative.parse(t.variations);
                }
            }
          });
      });
    }
    _handleParsedVast(e) {
      e.errorURLTemplates.length > 0 &&
        e.errorURLTemplates.forEach((e) => {
          this.vastErrorTags.push({ event: "error", url: e });
        }),
        0 !== e.ads.length
          ? this._loopAds(e.ads)
          : zr.processVastErrors.call(this, 303, !0);
    }
    _getVastTag(e) {
      if ("string" == typeof e && "" !== e)
        if ("undefined" != typeof DOMParser)
          if (
            (zr.createApiEvent.call(this, "adtagstartloading"),
            this.params.vastXmlInput)
          ) {
            let i;
            try {
              i = new DOMParser().parseFromString(e, "text/xml");
            } catch (t) {
              return (
                console.warn(t), void zr.processVastErrors.call(this, 900, !0)
              );
            }
            new Fr()
              .parseVAST(i)
              .then((e) => {
                zr.createApiEvent.call(this, "adtagloaded"),
                  this._handleParsedVast(e);
              })
              .catch((e) => {
                console.warn(e), zr.processVastErrors.call(this, 900, !0);
              });
          } else {
            const t = new Wr(),
              i = {
                timeout: this.params.ajaxTimeout,
                withCredentials: this.params.ajaxWithCredentials,
                wrapperLimit: this.params.maxNumRedirects,
                resolveAll: !1,
                allowMultipleAds: !0,
              };
            (this.__adTagUrl = e),
              t
                .get(this.__adTagUrl, i)
                .then((e) => {
                  zr.createApiEvent.call(this, "adtagloaded"),
                    this._handleParsedVast(e);
                })
                .catch((e) => {
                  console.warn(e), zr.processVastErrors.call(this, 900, !0);
                });
          }
        else zr.processVastErrors.call(this, 1002, !1);
      else zr.processVastErrors.call(this, 1001, !1);
    }
    loadAds(e, t, i) {
      if ((this.__initialized || this.initialize(), "object" == typeof t)) {
        const e = /coppa|gdpr/gi;
        t.regulations &&
          e.test(t.regulations) &&
          (this.regulationsInfo.regulations = t.regulations);
        const i = /0|1/gi;
        t.limitAdTracking &&
          i.test(t.limitAdTracking) &&
          (this.regulationsInfo.limitAdTracking = t.limitAdTracking),
          t.gdprConsent && (this.regulationsInfo.gdprConsent = t.gdprConsent);
      }
      i && (this.requireCategory = !0);
      let n = e;
      if (
        (this.params.vastXmlInput || (n = Jr.replaceMacros.call(this, e, !1)),
        this.__adOnStage)
      )
        return (
          this.one("addestroyed", this.loadAds.bind(this, n)),
          void this.stopAds()
        );
      this._getVastTag(n);
    }
    play() {
      this.__adOnStage && this.creative && this.creative.isLinear
        ? this.rmpVastVpaidPlayer
          ? this.rmpVastVpaidPlayer.resumeAd()
          : this.rmpVastAdPlayer && this.rmpVastAdPlayer.play()
        : this.rmpVastContentPlayer.play();
    }
    pause() {
      this.__adOnStage && this.creative && this.creative.isLinear
        ? this.rmpVastVpaidPlayer
          ? this.rmpVastVpaidPlayer.pauseAd()
          : this.rmpVastAdPlayer && this.rmpVastAdPlayer.pause()
        : this.rmpVastContentPlayer.pause();
    }
    stopAds() {
      this.__adOnStage &&
        (this.rmpVastVpaidPlayer
          ? this.rmpVastVpaidPlayer.stopAd()
          : this.rmpVastSimidPlayer
          ? this.rmpVastSimidPlayer.stopAd()
          : this.rmpVastAdPlayer && this.rmpVastAdPlayer.resumeContent());
    }
    destroy() {
      this.__contentPlayer
        ? (this.__contentPlayer.removeEventListener(
            "webkitbeginfullscreen",
            this.onFullscreenchangeFn
          ),
          this.__contentPlayer.removeEventListener(
            "webkitendfullscreen",
            this.onFullscreenchangeFn
          ))
        : document.removeEventListener(
            "fullscreenchange",
            this.onFullscreenchangeFn
          ),
        this.rmpVastAdPlayer && this.rmpVastAdPlayer.destroy(),
        zr.initInstanceVariables.call(this);
    }
    skipAd() {
      this.__adOnStage &&
        this.adSkippableState &&
        (this.rmpVastVpaidPlayer
          ? this.rmpVastVpaidPlayer.skipAd()
          : this.rmpVastSimidPlayer
          ? this.rmpVastSimidPlayer.skipAd()
          : this.rmpVastAdPlayer && this.rmpVastAdPlayer.resumeContent());
    }
    get environment() {
      return jr;
    }
    get adPaused() {
      if (this.__adOnStage && this.creative && this.creative.isLinear) {
        if (this.rmpVastVpaidPlayer)
          return this.rmpVastVpaidPlayer.getAdPaused();
        if (this.__adPlayer) return this.__adPlayer.paused;
      }
      return !1;
    }
    set volume(e) {
      if (!$r.isNumber(e)) return;
      let t = 0;
      (t = e < 0 ? 0 : e > 1 ? 1 : e),
        this.__adOnStage &&
          this.creative &&
          this.creative.isLinear &&
          (this.rmpVastVpaidPlayer && this.rmpVastVpaidPlayer.setAdVolume(t),
          this.rmpVastAdPlayer && (this.rmpVastAdPlayer.volume = t)),
        (this.rmpVastContentPlayer.volume = t);
    }
    get volume() {
      if (this.__adOnStage && this.creative && this.creative.isLinear) {
        if (this.rmpVastVpaidPlayer)
          return this.rmpVastVpaidPlayer.getAdVolume();
        if (this.rmpVastAdPlayer) return this.rmpVastAdPlayer.volume;
      }
      return this.rmpVastContentPlayer.volume;
    }
    set muted(e) {
      "boolean" == typeof e &&
        (this.__adOnStage &&
          this.creative &&
          this.creative.isLinear &&
          (this.rmpVastVpaidPlayer
            ? e
              ? this.rmpVastVpaidPlayer.setAdVolume(0)
              : this.rmpVastVpaidPlayer.setAdVolume(1)
            : this.rmpVastAdPlayer && (this.rmpVastAdPlayer.muted = e)),
        (this.rmpVastContentPlayer.muted = e));
    }
    get muted() {
      if (this.__adOnStage && this.creative && this.creative.isLinear) {
        if (this.rmpVastVpaidPlayer)
          return 0 === this.rmpVastVpaidPlayer.getAdVolume();
        if (this.rmpVastAdPlayer) return this.rmpVastAdPlayer.muted;
      }
      return this.rmpVastContentPlayer.muted;
    }
    get adTagUrl() {
      return this.__adTagUrl;
    }
    get adMediaUrl() {
      if (this.__adOnStage) {
        if (this.rmpVastVpaidPlayer)
          return this.rmpVastVpaidPlayer.getCreativeUrl();
        if (this.creative && this.creative.mediaUrl)
          return this.creative.mediaUrl;
      }
      return "";
    }
    get adLinear() {
      return !(!this.creative || !this.creative.isLinear);
    }
    get adSystem() {
      return this.ad && this.ad.system
        ? {
            value: this.ad.system.value || "",
            version: this.ad.system.version || "",
          }
        : { value: "", version: "" };
    }
    get adUniversalAdIds() {
      return this.creative && this.creative.universalAdIds
        ? this.creative.universalAdIds
        : [];
    }
    get adContentType() {
      return this.creative && this.creative.type ? this.creative.type : "";
    }
    get adTitle() {
      return this.ad && this.ad.title ? this.ad.title : "";
    }
    get adDescription() {
      return this.ad && this.ad.description ? this.ad.description : "";
    }
    get adAdvertiser() {
      return this.ad && this.ad.advertiser && null !== this.ad.advertiser
        ? this.ad.advertiser
        : { id: "", value: "" };
    }
    get adPricing() {
      return this.ad && this.ad.pricing && null !== this.ad.pricing
        ? this.ad.pricing
        : { value: "", model: "", currency: "" };
    }
    get adSurvey() {
      return this.ad && this.ad.survey
        ? this.ad.survey
        : { value: "", type: "" };
    }
    get adAdServingId() {
      return this.ad && this.ad.adServingId ? this.ad.adServingId : "";
    }
    get adCategories() {
      return this.ad && this.ad.categories && this.ad.categories.length > 0
        ? this.ad.categories
        : [];
    }
    get adBlockedAdCategories() {
      return this.ad &&
        this.ad.blockedAdCategories &&
        this.ad.blockedAdCategories.length > 0
        ? this.ad.blockedAdCategories
        : [];
    }
    get adDuration() {
      if (this.__adOnStage && this.creative && this.creative.isLinear) {
        if (this.rmpVastVpaidPlayer) {
          let e = this.rmpVastVpaidPlayer.getAdDuration();
          return e > 0 && (e *= 1e3), e;
        }
        if (this.rmpVastAdPlayer) return this.rmpVastAdPlayer.duration;
      }
      return -1;
    }
    get adCurrentTime() {
      if (this.__adOnStage && this.creative && this.creative.isLinear) {
        if (this.rmpVastVpaidPlayer) {
          const e = this.rmpVastVpaidPlayer.getAdRemainingTime(),
            t = this.rmpVastVpaidPlayer.getAdDuration();
          return -1 === e || -1 === t || e > t ? -1 : 1e3 * (t - e);
        }
        if (this.rmpVastAdPlayer) return this.rmpVastAdPlayer.currentTime;
      }
      return -1;
    }
    get adRemainingTime() {
      if (this.__adOnStage && this.creative && this.creative.isLinear) {
        if (this.rmpVastVpaidPlayer) {
          let e = this.rmpVastVpaidPlayer.getAdRemainingTime();
          return e > 0 && (e *= 1e3), e;
        }
        if (this.rmpVastAdPlayer) {
          const e = this.rmpVastAdPlayer.currentTime,
            t = this.rmpVastAdPlayer.duration;
          return -1 === e || -1 === t || e > t ? -1 : t - e;
        }
      }
      return -1;
    }
    get adOnStage() {
      return this.__adOnStage;
    }
    get adMediaWidth() {
      if (this.__adOnStage) {
        if (this.rmpVastVpaidPlayer)
          return this.rmpVastVpaidPlayer.getAdWidth();
        if (this.creative && this.creative.width) return this.creative.width;
      }
      return -1;
    }
    get adMediaHeight() {
      if (this.__adOnStage) {
        if (this.rmpVastVpaidPlayer)
          return this.rmpVastVpaidPlayer.getAdHeight();
        if (this.creative && this.creative.height) return this.creative.height;
      }
      return -1;
    }
    get clickThroughUrl() {
      return this.creative && this.creative.clickThroughUrl
        ? this.creative.clickThroughUrl
        : "";
    }
    get skipTimeOffset() {
      return this.creative && this.creative.skipoffset
        ? this.creative.skipoffset
        : -1;
    }
    get isSkippableAd() {
      return !(!this.creative || !this.creative.isSkippableAd);
    }
    get contentPlayerCompleted() {
      return this.__contentPlayerCompleted;
    }
    set contentPlayerCompleted(e) {
      "boolean" == typeof e && (this.__contentPlayerCompleted = e);
    }
    get adErrorMessage() {
      return this.__adErrorMessage;
    }
    get adVastErrorCode() {
      return this.__vastErrorCode;
    }
    get adErrorType() {
      return this.__adErrorType;
    }
    get adSkippableState() {
      if (this.__adOnStage) {
        if (this.rmpVastVpaidPlayer)
          return this.rmpVastVpaidPlayer.getAdSkippableState();
        if (this.rmpVastSimidPlayer) return !0;
        if (this.isSkippableAd && this.rmpVastLinearCreative)
          return this.rmpVastLinearCreative.skippableAdCanBeSkipped;
      }
      return !1;
    }
    get adPlayer() {
      return this.__adPlayer;
    }
    get contentPlayer() {
      return this.__contentPlayer;
    }
    get initialized() {
      return this.__initialized;
    }
    get adPodInfo() {
      if (this.adPod && this.adPodLength) {
        const e = {};
        return (
          (e.adPodCurrentIndex = this.adSequence),
          (e.adPodLength = this.adPodLength),
          e
        );
      }
      return { adPodCurrentIndex: -1, adPodLength: 0 };
    }
    get companionAdsRequiredAttribute() {
      return this.__companionAdsRequiredAttribute;
    }
    getCompanionAdsList(e, t) {
      if (this.validCompanionAds.length > 0) {
        let i;
        if (
          ((i =
            "number" == typeof e && e > 0 && "number" == typeof t && t > 0
              ? this.validCompanionAds.filter(
                  (i) => e >= i.width && t >= i.height
                )
              : this.validCompanionAds),
          i.length > 0)
        )
          return (this.companionAdsList = i), this.companionAdsList;
      }
      return [];
    }
    _onImgClickThrough(e, t, i) {
      i && (i.stopPropagation(), "touchend" === i.type && i.preventDefault()),
        t &&
          t.forEach((e) => {
            e.url && Jr.pingURI.call(this, e.url);
          }),
        $r.openWindow(e);
    }
    getCompanionAd(e) {
      if (void 0 === this.companionAdsList[e]) return null;
      const t = this.companionAdsList[e];
      let i;
      if (
        (t.imageUrl || t.iframeUrl
          ? (t.imageUrl
              ? (i = document.createElement("img"))
              : ((i = document.createElement("iframe")),
                (i.sandbox = "allow-scripts allow-same-origin")),
            t.altText && (i.alt = t.altText),
            (i.width = t.width),
            (i.height = t.height),
            (i.style.cursor = "pointer"))
          : t.htmlContent && (i = t.htmlContent),
        t.imageUrl || t.iframeUrl)
      ) {
        const e = t.trackingEventsUrls;
        e.length > 0 &&
          ((i.onload = () => {
            e.forEach((e) => {
              Jr.pingURI.call(this, e);
            });
          }),
          (i.onerror = () => {
            Jr.error.call(this, 603);
          }));
        let n = null;
        if (
          (t.companionClickTrackingUrls && (n = t.companionClickTrackingUrls),
          t.companionClickThroughUrl)
        ) {
          const e = this._onImgClickThrough.bind(
            this,
            t.companionClickThroughUrl,
            n
          );
          $r.addEvents(["touchend", "click"], i, e);
        }
      }
      if (t.imageUrl) i.src = t.imageUrl;
      else if (t.iframeUrl) i.src = t.iframeUrl;
      else if (t.htmlContent)
        try {
          (i = new DOMParser().parseFromString(t.htmlContent, "text/html")),
            (i = i.documentElement);
        } catch (Wi) {
          return null;
        }
      return i;
    }
    initialize() {
      this.__initialized ||
        ((this.rmpVastAdPlayer = new Ts(this)), this.rmpVastAdPlayer.init());
    }
    resizeAd(e, t, i) {
      this.rmpVastVpaidPlayer && this.rmpVastVpaidPlayer.resizeAd(e, t, i);
    }
    expandAd() {
      this.rmpVastVpaidPlayer && this.rmpVastVpaidPlayer.expandAd();
    }
    collapseAd() {
      this.rmpVastVpaidPlayer && this.rmpVastVpaidPlayer.collapseAd();
    }
    get adExpanded() {
      return (
        this.rmpVastVpaidPlayer && this.rmpVastVpaidPlayer.getAdExpanded(), !1
      );
    }
    get vpaidCompanionAds() {
      return (
        this.rmpVastVpaidPlayer && this.rmpVastVpaidPlayer.getAdCompanions(), ""
      );
    }
  }
  const Is = "player-container",
    Cs = "player-video",
    Ss =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";
  function Vs({ setPlayerContext: e, playerRef: t, vast: i }) {
    const n = gn(),
      r = On(),
      s = bt(),
      a = qe(
        (e) => {
          const i = t.current;
          null !== i && i.adPaused && i.play(),
            e.preventDefault(),
            e.stopPropagation();
        },
        [t]
      );
    Fe(() => {
      var a, o, l;
      null === t.current &&
        ((t.current = new Ps(r, {
          vastXmlInput: !0,
          partnerName: "Adsgram",
          partnerVersion: "0.0.1",
          pauseOnEnd: !0,
          timeEvents: { showActionButton: 5e3, showPackshot: -500 },
          clickThroughElementId: bn(n),
        })),
        t.current.initialize(),
        t.current.loadAds(i),
        null == (a = t.current) ||
          a.on("addestroyed", () => {
            An.clear();
          }),
        null == (o = t.current) ||
          o.on("adstarted", () => {
            An.dispatchEvent("adstarted"), s.emit(me.onStart);
          }),
        null == (l = t.current) ||
          l.on("aderror", () => {
            s.emit(pe.error);
          }),
        e(t.current));
    }, [s, n, r, t, e, i]),
      Fe(() => {
        s.on(pe.finalDestroy, () => {
          var e;
          An.clear(), null == (e = t.current) || e.destroy();
        });
      }, [s, t]);
    return (
      pn(
        qe(() => {
          var e;
          (null == (e = t.current) ? void 0 : e.adPaused) &&
            setTimeout(() => {
              var e;
              return null == (e = t.current) ? void 0 : e.play();
            }, 500);
        }, [t]),
        qe(() => {
          var e;
          null == (e = t.current) || e.pause();
        }, [t])
      ),
      Rt("div", {
        class: "rmp-container",
        id: r,
        onClick: a,
        "data-testid": Is,
        children: Rt("div", {
          className: "rmp-content",
          children: Rt("video", {
            className: "rmp-video",
            poster: Ss,
            muted: !0,
            playsinline: !0,
            "data-testid": Cs,
          }),
        }),
      })
    );
  }
  const Rs = { wrapper: "_wrapper_1cu5o_1" };
  function Ls({
    vast: e,
    playerRef: t,
    actionButtonTitle: i,
    image: n,
    hasPackshot: r,
    duration: s,
    title: a,
    description: o,
  }) {
    const [l, c] = xe(null);
    return Rt(yn.Provider, {
      value: l,
      children: Rt("div", {
        class: Rs.wrapper,
        children: [
          Rt($n, {}),
          Rt(Tn, { text: i }),
          Rt(Vs, { vast: e, playerRef: t, setPlayerContext: c }),
          r && Rt(Jn, { image: n, duration: s, title: a, description: o }),
          Rt(In, { packshotDuration: s }),
        ],
      }),
    });
  }
  const Ns = "_banner_3g56a_1",
    Us = "_image_3g56a_28",
    Os = "_text_3g56a_35",
    Ds = "_title_3g56a_42",
    xs = "_description_3g56a_48";
  const Fs = {
    [m]: function ({
      vast: e,
      packshotImage: t,
      actionButtonTitle: i,
      title: n,
      description: r,
      trackings: s,
    }) {
      const a = Me(null),
        o = bt();
      return (
        dn({ rewardTracking: s.reward, EventEmitter: o }),
        Rt("div", {
          className: mn,
          children: Rt(Ls, {
            vast: e,
            playerRef: a,
            image: t,
            actionButtonTitle: i,
            hasPackshot: !0,
            title: n,
            description: r,
            duration: 5e3,
          }),
        })
      );
    },
    [p]: function ({ img: e, url: t, title: i, description: n }) {
      const r = Tt(),
        s = qe(
          (e) => {
            $i({ url: t, logger: r }), e.preventDefault();
          },
          [r, t]
        );
      return Rt("div", {
        className: Ns,
        onClick: s,
        children: [
          Rt("img", { className: Us, src: e, alt: "banner" }),
          Rt("p", {
            className: Os,
            children: [
              Rt("span", { className: Ds, children: i }),
              Rt("span", { className: xs, children: n }),
            ],
          }),
        ],
      });
    },
    [_]: function ({
      image: e,
      title: t,
      description: i,
      advertiserName: n,
      buttonName: r,
      url: s,
      trackings: a,
      icon: o,
    }) {
      const l = bt(),
        c = Tt(),
        d = Be(
          () =>
            new un({
              callbacks: {
                endCallback: () => {
                  l.emit(me.onReward);
                },
                3: () => _(!0),
                6: () => p(!0),
              },
              endTime: ye,
            }),
          [l]
        ),
        [u, p] = xe(!1),
        [m, _] = xe(!1),
        [g, f] = xe(!0),
        v = Me(1 / 0),
        y = qe(
          (e) => {
            e.isTrusted
              ? (e.preventDefault(),
                e.stopPropagation(),
                ve(a.click, c),
                d.stop(),
                f(!1),
                (v.current = Date.now()),
                $i({ url: s, logger: c }))
              : l.emit(me.onError);
          },
          [a.click, d, s, l, c]
        ),
        E = qe(() => {
          Date.now() - v.current > 1e4 && l.emit("onReward"),
            (v.current = 1 / 0),
            d.resume(),
            f(!0);
        }, [l, d]);
      pn(
        E,
        qe(() => {
          d.stop(), f(!1);
        }, [d])
      );
      const b = Me(null);
      return (
        (function ({
          sendTackingTime: e,
          showTracking: t,
          element: i,
          externalIsVisible: n,
          preventSend: r,
        }) {
          const s = Tt(),
            [a, o] = xe(!1),
            l = Be(() => new un({ endTime: e, callbacks: {} }), [e]),
            c = cn(i),
            d = Be(
              () => null !== i.current && c && n && ln(i.current),
              [i, n, c]
            ),
            u = qe(
              () =>
                h(this, null, function* () {
                  a || r || (yield ve(t, s), o(!0));
                }),
              [a, s, r, t]
            ),
            p = qe(() => {
              d || l.stop();
            }, [d, l]);
          Fe(
            () => (
              l.subscribeOnTickUpdate(p),
              l.subscribeOnEnd(u),
              () => {
                l.unsubscribeAll();
              }
            ),
            [u, p, l]
          ),
            Fe(() => {
              l.isStopped && d && l.restart();
            }, [d, l]);
        })({
          sendTackingTime: 2,
          showTracking: a.show,
          element: b,
          externalIsVisible: g,
          preventSend: !1,
        }),
        (function ({ renderTracking: e, element: t }) {
          const i = Tt(),
            [n, r] = xe(!1),
            s = cn(t);
          Fe(() => {
            s && e && !n && (ve(e, i), r(!0));
          }, [e, n, s, i]);
        })({ renderTracking: a.render, element: b }),
        dn({ rewardTracking: a.reward, EventEmitter: l }),
        Fe(() => {
          const e = () => {
            d.destroy();
          };
          return (
            l.on(pe.finalDestroy, e),
            () => {
              l.off(pe.finalDestroy, e);
            }
          );
        }, [l, d]),
        Fe(() => {
          l.emit(me.onStart);
        }, [l]),
        Rt("div", {
          className: Ee,
          ref: b,
          onClick: E,
          children: [
            Rt(Lt, {}),
            Rt("div", {
              className: be,
              children: [
                Rt(en, {
                  advertiserName: n,
                  title: t,
                  description: i,
                  image: e,
                  icon: o,
                  onClick: y,
                  isClickable: m,
                }),
                m && Rt(nn, { buttonName: r, onClick: y }),
                u && Rt(on, {}),
                Rt(Qi, { timer: d }),
              ],
            }),
          ],
        })
      );
    },
  };
  function Ms(e) {
    const { blockId: t, EventEmitter: i, logger: n, children: r } = e;
    return Rt(At.Provider, {
      value: n,
      children: Rt(Te.Provider, {
        value: i,
        children: Rt(_n.Provider, { value: t, children: r }),
      }),
    });
  }
  function Bs(e) {
    const t = {};
    for (const i in e) {
      const { name: n, value: r } = e[i];
      t[n] = r;
    }
    return t;
  }
  function qs(e) {
    const t = {};
    for (const i in e) {
      const { name: n, value: r } = e[i];
      t[n] = r;
    }
    return t;
  }
  const Ws = {
    [m]: function ({ banner: e }) {
      const { bannerAssets: t, trackings: i } = e,
        {
          title: n,
          description: r,
          buttonName: s,
          buttonImg: a,
          vast: o,
        } = Bs(t);
      return {
        vast: o,
        packshotImage: a,
        actionButtonTitle: s,
        title: n,
        description: r,
        trackings: qs(i),
      };
    },
    [p]: function ({ img: e, url: t, description: i, title: n }) {
      return { img: e, url: t, description: i, title: n };
    },
    [_]: function ({ banner: e }) {
      const { bannerAssets: t, trackings: i } = e,
        {
          advertiserName: n,
          buttonName: r,
          title: s,
          description: a,
          icon: o,
          image: l,
          url: c,
        } = Bs(t);
      return {
        advertiserName: n,
        buttonName: r,
        description: a,
        icon: o,
        image: l,
        url: c,
        title: s,
        trackings: qs(i),
      };
    },
  };
  class Hs extends J {
    constructor() {
      super(), (this.state = { hasError: !1 });
    }
    componentDidCatch(e, t) {
      try {
        this.props.logger
          .add("componentStack", null == t ? void 0 : t.componentStack)
          .addError(e)
          .send("ErrorBoundary");
      } catch (Wi) {}
      this.setState({ hasError: !0 });
    }
    render({ EventEmitter: e }) {
      return this.state.hasError
        ? (e.emit(pe.renderError), null)
        : this.props.children;
    }
  }
  function $s({
    data: e,
    bannerType: t,
    blockId: i,
    EventEmitter: n,
    logger: r,
  }) {
    const s = Fs[t],
      a = Ws[t](e);
    return Rt(Ms, {
      blockId: i,
      EventEmitter: n,
      logger: r,
      children: Rt(Hs, {
        EventEmitter: n,
        blockId: i,
        campaignId: e.campaignId,
        logger: r,
        children: Rt(s, l({}, a)),
      }),
    });
  }
  function js(e) {
    if (!(e instanceof HTMLElement))
      throw new E({ message: `${e} cannot be used to display ads` });
    return !1;
  }
  function Js({ blockId: e, container: t, data: i, EventEmitter: n }) {
    const r =
      t && js(t)
        ? t
        : (function (e) {
            const t = document.createElement("div");
            return (
              t.setAttribute("id", e),
              t.setAttribute("style", "position: relative;z-index:2147483647;"),
              document.body.appendChild(t),
              t
            );
          })(e);
    ge({ data: i, EventEmitter: n });
    const s = I();
    s.add("blockId", e)
      .add("bannerType", i.bannerType)
      .add("campaignId", i.campaignId);
    try {
      de(
        Rt($s, {
          bannerType: i.bannerType,
          data: i,
          blockId: e,
          EventEmitter: n,
          logger: s,
        }),
        r
      );
    } catch (Wi) {
      s.send("RenderError"), n.emit(pe.renderError);
    }
  }
  class zs {
    constructor({ blockId: e, container: t, debug: i, debugBannerType: n }) {
      d(this, "blockId"),
        d(this, "container"),
        d(this, "EventEmitter"),
        d(this, "bannerData"),
        d(this, "shouldRemoveContainer"),
        d(this, "isShowing"),
        d(this, "isLoading"),
        d(this, "forceCampaignId"),
        d(this, "loadBannerPromise"),
        (this.blockId = e),
        (this.container = t),
        (this.shouldRemoveContainer = !(t && js(t))),
        (this.EventEmitter = new Ae()),
        this.subscribe(),
        (this.isShowing = !1),
        (this.isLoading = !1),
        (this.forceCampaignId = i ? g[n || f] : void 0);
    }
    show() {
      return h(this, null, function* () {
        if (!this.bannerData) {
          let e;
          if (
            ((e =
              this.isLoading && this.loadBannerPromise instanceof Promise
                ? yield this.loadBannerPromise
                : yield this._load()),
            !e)
          )
            return new Promise((e, t) =>
              t({ description: an(u), state: "load", error: !1, done: !1 })
            );
        }
        return this.isShowing
          ? new Promise((e, t) => {
              t({
                description: "Attempt to call show when an ad is being shown",
                state: "playing",
                error: !0,
                done: !1,
              });
            })
          : new Promise((e, t) => {
              if (!this.bannerData)
                return t({
                  description: "No banner data to show",
                  state: "load",
                  error: !1,
                  done: !1,
                });
              (this.isShowing = !0),
                this.EventEmitter.emit(pe.show),
                Js({
                  blockId: this.blockId,
                  container: this.container,
                  data: this.bannerData,
                  EventEmitter: this.EventEmitter,
                }),
                this.EventEmitter.on(pe.renderError, () => {
                  this.EventEmitter.emit(me.onError),
                    t({
                      description: "Error during render ad",
                      state: "render",
                      error: !0,
                      done: !1,
                    });
                }),
                this.EventEmitter.on(pe.error, () => {
                  this.EventEmitter.emit(me.onError),
                    t({
                      description: "Error during playing ad",
                      state: "playing",
                      error: !0,
                      done: !1,
                    });
                }),
                this.EventEmitter.on(me.onSkip, () => {
                  t({
                    description: "The banner was skipped",
                    state: "playing",
                    error: !1,
                    done: !1,
                  });
                }),
                this.EventEmitter.on(me.onReward, () => {
                  e({
                    description: "The banner was viewed to the end",
                    state: "destroy",
                    error: !1,
                    done: !0,
                  });
                });
            });
      });
    }
    load() {
      return h(this, null, function* () {
        return new Promise((e) => {
          e(!0);
        });
      });
    }
    _load() {
      return h(this, null, function* () {
        return this.bannerData ||
          !(function () {
            const e = k();
            if (!e)
              throw (
                (I().send("NoUserData", "WARN"),
                new E({
                  message:
                    "Attempt to load banner without user data. If your dev server uses browser environment, you should mock window.Telegram.WebApp.initDataUnsafe.user.id. Be aware, some alerts/confirms won't be showed in browser",
                }))
              );
            return e && Boolean(e.id) && !e.is_bot;
          })()
          ? new Promise((e) => e(!0))
          : this.loadBannerPromise instanceof Promise && this.isLoading
          ? yield this.loadBannerPromise
          : ((this.isLoading = !0),
            this.EventEmitter.emit(pe.load),
            (this.loadBannerPromise = C(this.blockId, this.forceCampaignId)
              .then((e) =>
                e && e.bannerType
                  ? ((this.bannerData = e), !0)
                  : (this.EventEmitter.hasHandlers(me.onBannerNotFound)
                      ? this.EventEmitter.emit(me.onBannerNotFound)
                      : (function ({ message: e }) {
                          var t, i;
                          (null ==
                          (i =
                            null ==
                            (t = null == window ? void 0 : window.Telegram)
                              ? void 0
                              : t.WebApp)
                            ? void 0
                            : i.showAlert) &&
                            window.Telegram.WebApp.showAlert(e);
                        })({ message: an(u) }),
                    !1)
              )
              .catch(() => (this.EventEmitter.emit(me.onError), !1))
              .finally(() => {
                this.isLoading = !1;
              })),
            this.loadBannerPromise);
      });
    }
    preload() {
      return h(this, null, function* () {
        this.EventEmitter.emit(pe.preload);
      });
    }
    addEventListener(e, t) {
      if (!me[e])
        throw new E({
          message: `The event argument must be one of ${Object.keys(me).join(
            ", "
          )}. Received ${e}`,
        });
      this.EventEmitter.on(e, t);
    }
    removeEventListener(e, t) {
      if (!me[e])
        throw new E({
          message: `The event argument must be one of ${Object.keys(me).join(
            ", "
          )}. Received ${e}`,
        });
      this.EventEmitter.off(e, t);
    }
    destroy() {
      this.EventEmitter.emit(pe.destroy);
    }
    finalDestroy() {
      this.EventEmitter.emit(pe.finalDestroy),
        (function ({ blockId: e, container: t, shouldRemoveContainer: i }) {
          const n = t || document.getElementById(e);
          n && (de(null, n), i && n.remove());
        })({
          blockId: this.blockId,
          container: this.container,
          shouldRemoveContainer: this.shouldRemoveContainer,
        }),
        this.resetVariables();
    }
    subscribe() {
      this.EventEmitter.on(pe.destroy, this.finalDestroy.bind(this)),
        this.EventEmitter.on(me.onReward, this.finalDestroy.bind(this)),
        this.EventEmitter.on(me.onSkip, this.finalDestroy.bind(this)),
        this.EventEmitter.on(pe.error, this.finalDestroy.bind(this)),
        this.EventEmitter.on(pe.renderError, this.finalDestroy.bind(this));
    }
    resetVariables() {
      (this.bannerData = void 0),
        (this.loadBannerPromise = void 0),
        (this.isShowing = !1);
    }
  }
  const Gs = {
    blockId: function (e) {
      if (!("blockId" in e))
        throw new E({ message: "blockId is required param for init function" });
      if ("string" != typeof e.blockId)
        throw new E({ message: "blockId param should be string" });
      if (!/\d+/.test(e.blockId))
        throw new E({
          message: `blockId param should be string with number value inside, you pass ${e.blockId}`,
        });
      return !0;
    },
    container: function (e) {
      if ("container" in e) {
        if (e.container instanceof HTMLElement) return !0;
        throw new E({
          message: `container should be instanceof HTMLElement you call with ${JSON.stringify(
            e.container
          )}`,
        });
      }
      return !0;
    },
    hasReward: function (e) {
      if ("hasReward" in e) {
        if ("boolean" != typeof e.hasReward)
          throw new E({
            message: `hasReward should be boolean you call with ${JSON.stringify(
              e.hasReward
            )}`,
          });
        return !0;
      }
      return !0;
    },
    debug: function (e) {
      if ("debug" in e) {
        if ("boolean" != typeof e.debug)
          throw new E({
            message: `debug should be boolean you call with ${JSON.stringify(
              e.debug
            )}`,
          });
        return !0;
      }
      return !0;
    },
    debugBannerType: function (e) {
      if ("debugBannerType" in e) {
        if ("string" != typeof e.debugBannerType)
          throw new E({
            message: `debugBannerType should be string you call with ${JSON.stringify(
              e.debugBannerType
            )}`,
          });
        if (!Object.keys(g).includes(e.debugBannerType))
          throw new E({
            message: `debugBannerType should be one of ${Object.keys(
              g
            )} you call with ${e.debugBannerType}`,
          });
      }
      return !0;
    },
  };
  const Ys = {};
  function Qs(e) {
    if (
      !(function (e) {
        if ("object" != typeof e)
          throw new E({
            message: `Object should be passed to the init function you pass ${JSON.stringify(
              e
            )}`,
          });
        return (
          !(
            "object" != typeof e ||
            e instanceof Function ||
            Array.isArray(e) ||
            null === e
          ) && Object.values(Gs).every((t) => t(e))
        );
      })(e)
    )
      throw new E({
        message: "Attempt to create AdController with wrong params",
      });
    const { blockId: t } = e;
    return Ys[t] || (Ys[t] = new zs(e)), Ys[t];
  }
  function Ks(e) {
    return Qs(e);
  }
  (window.Adsgram = c(l({}, window.Adsgram), { init: Ks })),
    (e.init = Ks),
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
});
