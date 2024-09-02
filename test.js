(() => {
  var e,
    t,
    n = {
      62666: (e, t, n) => {
        "use strict";
        n.d(t, {
          IY: () => _,
          R9: () => g,
          aO: () => p,
          dy: () => w,
          iF: () => l,
          pU: () => v,
          rG: () => f,
          vJ: () => h,
          zp: () => b,
        });
        var s = n(45174),
          a = n(87894),
          i = n(59948),
          o = n(69006),
          r = n(49567),
          c = n(15684),
          d = n(57003),
          u = n(82971);
        function l(e, t) {
          const {
            id: n,
            type: s,
            title: a,
            description: i,
            url: o,
            thumb: r,
          } = e;
          return {
            id: n,
            queryId: t,
            type: s,
            title: a,
            description: i,
            url: o,
            webThumbnail: (0, c.C)(r),
          };
        }
        function p(e, t) {
          const {
            id: n,
            type: a,
            title: i,
            description: r,
            photo: d,
            document: l,
          } = e;
          return {
            id: n,
            queryId: t,
            type: a,
            title: i,
            description: r,
            ...("sticker" === a &&
              l instanceof s.Api.Document && {
                sticker: (0, u.R$)(l),
              }),
            ...(d instanceof s.Api.Photo && {
              photo: (0, o.rk)(d),
            }),
            ...("gif" === a &&
              l instanceof s.Api.Document && {
                gif: (0, c.f4)(l),
              }),
            ...("video" === a &&
              l instanceof s.Api.Document && {
                thumbnail: (0, o.Kq)(l.thumbs),
              }),
          };
        }
        function f(e) {
          return e ? (0, a.Up)(e, ["text", "startParam"]) : void 0;
        }
        function g(e) {
          return e ? (0, a.Up)(e, ["text", "url"]) : void 0;
        }
        function h(e) {
          return {
            id: e.botId.toString(),
            shouldRequestWriteAccess: e.requestWriteAccess,
            shortName: e.shortName,
            isForAttachMenu: e.showInAttachMenu,
            isForSideMenu: e.showInSideMenu,
            attachMenuPeerTypes: e.peerTypes?.map(m),
            icons: e.icons.map(y).filter(Boolean),
            isInactive: e.inactive,
            isDisclaimerNeeded: e.sideMenuDisclaimerNeeded,
          };
        }
        function m(e) {
          return e instanceof s.Api.AttachMenuPeerTypeBotPM
            ? "bots"
            : e instanceof s.Api.AttachMenuPeerTypePM
            ? "users"
            : e instanceof s.Api.AttachMenuPeerTypeChat
            ? "chats"
            : e instanceof s.Api.AttachMenuPeerTypeBroadcast
            ? "channels"
            : e instanceof s.Api.AttachMenuPeerTypeSameBotPM
            ? "self"
            : void 0;
        }
        function y(e) {
          if (!(e.icon instanceof s.Api.Document)) return;
          const t = (0, c.Cc)(e.icon);
          return t
            ? ((i.Ay.documents[String(e.icon.id)] = e.icon),
              {
                name: e.name,
                document: t,
              })
            : void 0;
        }
        function _(e, t) {
          const {
              description: n,
              descriptionPhoto: a,
              descriptionDocument: i,
              userId: u,
              commands: l,
              menuButton: p,
            } = e,
            f = u && (0, d.ol)(u, "user"),
            g = a instanceof s.Api.Photo ? (0, o.rk)(a) : void 0,
            h = i instanceof s.Api.Document ? (0, c.f4)(i) : void 0,
            m = l?.map((e) =>
              (function (e, t) {
                return {
                  botId: e,
                  ...(0, r._)(t),
                };
              })(f || t, e)
            );
          return {
            botId: f || t,
            description: n,
            gif: h,
            photo: g,
            menuButton: b(p),
            commands: m?.length ? m : void 0,
          };
        }
        function b(e) {
          return e instanceof s.Api.BotMenuButton
            ? {
                type: "webApp",
                text: e.text,
                url: e.url,
              }
            : {
                type: "commands",
              };
        }
        function w(e) {
          if (e instanceof s.Api.BotAppNotModified) return;
          const {
              id: t,
              accessHash: n,
              title: a,
              description: i,
              shortName: r,
              photo: d,
              document: u,
            } = e,
            l = d instanceof s.Api.Photo ? (0, o.rk)(d) : void 0,
            p = u instanceof s.Api.Document ? (0, c.Cc)(u) : void 0;
          return {
            id: t.toString(),
            accessHash: n.toString(),
            title: a,
            description: i,
            shortName: r,
            photo: l,
            document: p,
          };
        }
        function v(e) {
          const { app: t, inactive: n, requestWriteAccess: s } = e,
            a = w(t);
          if (a)
            return {
              ...a,
              isInactive: n,
              shouldRequestWriteAccess: s,
            };
        }
      },
      98731: (e, t, n) => {
        "use strict";
        n.d(t, {
          Av: () => c,
          ZQ: () => i,
          bY: () => d,
          lo: () => u,
          ne: () => g,
          zn: () => l,
        });
        var s = n(45174),
          a = n(57003);
        function i(e) {
          const {
            self: t,
            min: n,
            about: s,
            date: i,
            versioned: r,
            canSelfUnmute: c,
            justJoined: d,
            left: u,
            muted: l,
            mutedByYou: p,
            source: f,
            volume: g,
            volumeByAdmin: h,
            videoJoined: m,
            peer: y,
            video: _,
            presentation: b,
            raiseHandRating: w,
          } = e;
          return {
            isSelf: t,
            isMin: n,
            canSelfUnmute: c,
            isLeft: u,
            isMuted: l,
            isMutedByMe: p,
            hasJustJoined: d,
            isVolumeByAdmin: h,
            isVersioned: r,
            isVideoJoined: m,
            about: s,
            source: f,
            raiseHandRating: w?.toString(),
            volume: g,
            date: new Date(i),
            isUser: (0, a.QK)(y),
            id: (0, a.Zo)(y),
            video: _ ? o(_) : void 0,
            presentation: b ? o(b) : void 0,
          };
        }
        function o(e) {
          const { audioSource: t, endpoint: n, paused: s, sourceGroups: a } = e;
          return {
            audioSource: t,
            endpoint: n,
            isPaused: s,
            sourceGroups: a.map(r),
          };
        }
        function r(e) {
          return {
            semantics: e.semantics,
            sources: e.sources,
          };
        }
        function c(e) {
          const { id: t, accessHash: n } = e;
          if (e instanceof s.Api.GroupCallDiscarded)
            return {
              connectionState: "discarded",
              id: t.toString(),
              accessHash: n.toString(),
              participantsCount: 0,
              version: 0,
              participants: {},
            };
          const {
            version: a,
            participantsCount: i,
            streamDcId: o,
            scheduleDate: r,
            canChangeJoinMuted: c,
            joinMuted: d,
            canStartVideo: u,
            scheduleStartSubscribed: l,
          } = e;
          return {
            connectionState: "disconnected",
            isLoaded: !0,
            id: t.toString(),
            accessHash: n.toString(),
            version: a,
            participantsCount: i,
            streamDcId: o,
            scheduleDate: r,
            canChangeJoinMuted: c,
            joinMuted: d,
            canStartVideo: u,
            scheduleStartSubscribed: l,
            participants: {},
          };
        }
        function d(e) {
          return e.id.toString();
        }
        function u(e) {
          const { id: t } = e;
          let n = {
            id: t.toString(),
          };
          if (
            e instanceof s.Api.PhoneCallAccepted ||
            e instanceof s.Api.PhoneCallWaiting ||
            e instanceof s.Api.PhoneCall ||
            e instanceof s.Api.PhoneCallRequested
          ) {
            const {
              accessHash: t,
              adminId: s,
              date: a,
              video: i,
              participantId: o,
              protocol: r,
            } = e;
            n = {
              ...n,
              accessHash: t.toString(),
              adminId: s.toString(),
              participantId: o.toString(),
              date: a,
              isVideo: i,
              protocol: f(r),
            };
          }
          if (e instanceof s.Api.PhoneCall) {
            const {
              p2pAllowed: t,
              gAOrB: s,
              keyFingerprint: a,
              connections: i,
              startDate: o,
            } = e;
            n = {
              ...n,
              state: "active",
              gAOrB: Array.from(s),
              keyFingerprint: a.toString(),
              startDate: o,
              isP2pAllowed: Boolean(t),
              connections: i.map(p).filter(Boolean),
            };
          }
          return (
            e instanceof s.Api.PhoneCallDiscarded &&
              (n = {
                ...n,
                state: "discarded",
                duration: e.duration,
                reason: l(e.reason),
                needRating: e.needRating,
                needDebug: e.needDebug,
              }),
            e instanceof s.Api.PhoneCallWaiting &&
              (n = {
                ...n,
                state: "waiting",
                receiveDate: e.receiveDate,
              }),
            e instanceof s.Api.PhoneCallAccepted &&
              (n = {
                ...n,
                state: "accepted",
                gB: Array.from(e.gB),
              }),
            e instanceof s.Api.PhoneCallRequested &&
              (n = {
                ...n,
                state: "requested",
                gAHash: Array.from(e.gAHash),
              }),
            n
          );
        }
        function l(e) {
          return e instanceof s.Api.PhoneCallDiscardReasonMissed
            ? "missed"
            : e instanceof s.Api.PhoneCallDiscardReasonBusy
            ? "busy"
            : e instanceof s.Api.PhoneCallDiscardReasonHangup
            ? "hangup"
            : "disconnect";
        }
        function p(e) {
          if (e instanceof s.Api.PhoneConnectionWebrtc) {
            const {
              username: t,
              password: n,
              turn: s,
              stun: a,
              ip: i,
              ipv6: o,
              port: r,
            } = e;
            return {
              username: t,
              password: n,
              isTurn: s,
              isStun: a,
              ip: i,
              ipv6: o,
              port: r,
            };
          }
        }
        function f(e) {
          const {
            libraryVersions: t,
            minLayer: n,
            maxLayer: s,
            udpP2p: a,
            udpReflector: i,
          } = e;
          return {
            libraryVersions: t,
            minLayer: n,
            maxLayer: s,
            isUdpP2p: a,
            isUdpReflector: i,
          };
        }
        function g() {
          return new s.Api.PhoneCallProtocol({
            libraryVersions: ["4.0.0", "6.0.0"],
            minLayer: 92,
            maxLayer: 92,
            udpReflector: !0,
            udpP2p: !0,
          });
        }
      },
      69006: (e, t, n) => {
        "use strict";
        n.d(t, {
          k1: () => v,
          $w: () => A,
          rk: () => m,
          Wl: () => _,
          Bo: () => g,
          O: () => h,
          Kq: () => f,
          _h: () => b,
          gR: () => w,
        });
        var s = n(45174),
          a = n(56215),
          i = n(94660),
          o = n(87894),
          r = n(59948),
          c = n(49567);
        const d =
            '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {{width}} {{height}}" xml:space="preserve"><path fill-opacity="0.1" d="{{path}}" /></svg>',
          u =
            "AACAAAAHAAALMAAAQASTAVAAAZaacaaaahaaalmaaaqastava.az0123456789-,";
        var l = n(57003);
        const p = {
          w: 100,
          h: 100,
        };
        function f(e, t) {
          if (!e || !e.length) return;
          const n = e.find((e) => e instanceof s.Api.PhotoStrippedSize);
          if (!n) return;
          const i = e.filter((e) => e instanceof s.Api.PhotoSize),
            { w: o, h: r } = i.length ? i[i.length - 1] : p,
            { bytes: d } = n;
          return {
            dataUri: (0, c.b)(
              t && "image/jpeg" !== t ? d : (0, a.strippedPhotoToJpg)(d),
              void 0,
              t
            ),
            width: o,
            height: r,
          };
        }
        function g(e) {
          const { w: t, h: n, bytes: s } = e;
          return {
            dataUri: (0, c.b)(s, void 0, "image/webp"),
            width: t,
            height: n,
          };
        }
        function h(e, t) {
          const { w: n, h: s } = t;
          return {
            dataUri: `data:image/svg+xml;utf8,${
              ((a = e.bytes),
              (i = n),
              (o = s),
              d
                .replace(
                  "{{path}}",
                  (function (e) {
                    lett = "M";
                    const n = e.length;
                    for (lets = 0; s < n; s++) {
                      const n = e[s];
                      n >= 192
                        ? (t += u[n - 128 - 64])
                        : (n >= 128 ? (t += ",") : n >= 64 && (t += "-"),
                          (t += String(63 & n)));
                    }
                    return (t += "z"), t;
                  })(a)
                )
                .replace("{{width}}", String(i))
                .replace("{{height}}", String(o)))
            }`,
            width: n,
            height: s,
          };
          var a, i, o;
        }
        function m(e, t) {
          const n = e.sizes
            .filter(
              (e) =>
                e instanceof s.Api.PhotoSize ||
                e instanceof s.Api.PhotoSizeProgressive
            )
            .map(_);
          return {
            id: String(e.id),
            thumbnail: f(e.sizes),
            sizes: n,
            isSpoiler: t,
            ...(e.videoSizes && {
              videoSizes: (0, o.oE)(e.videoSizes.map(y)),
              isVideo: !0,
            }),
          };
        }
        function y(e) {
          if (!(e instanceof s.Api.VideoSize)) return;
          const { videoStartTs: t, size: n, h: a, w: i, type: o } = e;
          return {
            videoStartTs: t,
            size: n,
            height: a,
            width: i,
            type: o,
          };
        }
        function _(e) {
          const { w: t, h: n, type: s } = e;
          return {
            width: t,
            height: n,
            type: s,
          };
        }
        function b(e) {
          if (!(e.usernames || ("username" in e && e.username))) return;
          const t = [];
          return (
            "username" in e &&
              e.username &&
              t.push({
                username: e.username,
                isActive: !0,
                isEditable: !0,
              }),
            e.usernames &&
              e.usernames.forEach((e) => {
                let { username: n, active: s, editable: a } = e;
                t.push({
                  username: n,
                  ...(s && {
                    isActive: !0,
                  }),
                  ...(a && {
                    isEditable: !0,
                  }),
                });
              }),
            t
          );
        }
        function w(e) {
          let t, n, a, i, o, c;
          const d = r.Ay.chats;
          return (
            e.forEach((e) => {
              e instanceof s.Api.PrivacyValueAllowAll
                ? t || (t = "everybody")
                : e instanceof s.Api.PrivacyValueAllowContacts
                ? t || (t = "contacts")
                : e instanceof s.Api.PrivacyValueAllowCloseFriends
                ? t || (t = "closeFriends")
                : e instanceof s.Api.PrivacyValueDisallowContacts
                ? t || (t = "nonContacts")
                : e instanceof s.Api.PrivacyValueDisallowAll
                ? t || (t = "nobody")
                : e instanceof s.Api.PrivacyValueAllowUsers
                ? (a = e.users.map((e) => (0, l.ol)(e, "user")))
                : e instanceof s.Api.PrivacyValueDisallowUsers
                ? (o = e.users.map((e) => (0, l.ol)(e, "user")))
                : e instanceof s.Api.PrivacyValueAllowChatParticipants
                ? (i = e.chats.map((e) => {
                    const t = (0, l.ol)(e, "chat"),
                      n = (0, l.ol)(e, "channel");
                    return d[t] ? t : n;
                  }))
                : e instanceof s.Api.PrivacyValueDisallowChatParticipants &&
                  (c = e.chats.map((e) => {
                    const t = (0, l.ol)(e, "chat"),
                      n = (0, l.ol)(e, "channel");
                    return d[t] ? t : n;
                  }));
            }),
            t || ((t = "nobody"), (n = !0)),
            {
              visibility: t,
              isUnspecified: n,
              allowUserIds: a || [],
              allowChatIds: i || [],
              blockUserIds: o || [],
              blockChatIds: c || [],
            }
          );
        }
        function v(e) {
          const { text: t, entities: n } = e;
          return {
            text: t,
            entities: n.map(A),
          };
        }
        function A(e) {
          const { className: t, offset: n, length: a } = e;
          return e instanceof s.Api.MessageEntityMentionName
            ? {
                type: i.C7.MentionName,
                offset: n,
                length: a,
                userId: (0, l.ol)(e.userId, "user"),
              }
            : e instanceof s.Api.MessageEntityTextUrl
            ? {
                type: i.C7.TextUrl,
                offset: n,
                length: a,
                url: e.url,
              }
            : e instanceof s.Api.MessageEntityPre
            ? {
                type: i.C7.Pre,
                offset: n,
                length: a,
                language: e.language,
              }
            : e instanceof s.Api.MessageEntityCustomEmoji
            ? {
                type: i.C7.CustomEmoji,
                offset: n,
                length: a,
                documentId: e.documentId.toString(),
              }
            : {
                type: t,
                offset: n,
                length: a,
              };
        }
      },
      49567: (e, t, n) => {
        "use strict";
        function s(e) {
          return `${
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              ? ""
              : `data:${
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "image/jpeg"
                };base64,`
          }${btoa(String.fromCharCode(...e))}`;
        }
        function a(e) {
          const {
            flags: t,
            CONSTRUCTOR_ID: n,
            SUBCLASS_OF_ID: s,
            className: a,
            classType: i,
            getBytes: o,
            ...r
          } = e;
          return r;
        }
        n.d(t, {
          _: () => a,
          b: () => s,
        });
      },
      15684: (e, t, n) => {
        "use strict";
        n.d(t, {
          C: () => A,
          Cc: () => h,
          EZ: () => b,
          Of: () => m,
          RK: () => v,
          f4: () => g,
          jy: () => p,
          kf: () => _,
          o8: () => y,
          qR: () => l,
          r0: () => u,
          wi: () => f,
        });
        var s = n(45174),
          a = n(31481),
          i = n(87894),
          o = n(77064),
          r = n(69006),
          c = n(57003),
          d = n(82971);
        function u(e) {
          let t = {};
          e.media &&
            (t = {
              ...p(e.media),
            });
          const n = e.media instanceof s.Api.MessageMediaUnsupported;
          return (
            !e.message ||
              n ||
              t.sticker ||
              t.poll ||
              t.contact ||
              t.video?.isRound ||
              (t = {
                ...t,
                text: l(e.message, e.entities),
              }),
            t
          );
        }
        function l(e, t) {
          return {
            text: e,
            ...(t && {
              entities: t.map(r.$w),
            }),
          };
        }
        function p(e) {
          if ("ttlSeconds" in e && e.ttlSeconds) return;
          if (
            "extendedMedia" in e &&
            e.extendedMedia instanceof s.Api.MessageExtendedMedia
          )
            return p(e.extendedMedia.media);
          const t = (function (e) {
            if (
              e instanceof s.Api.MessageMediaDocument &&
              e.document &&
              e.document instanceof s.Api.Document
            )
              return (0, d.R$)(e.document, e.nopremium);
          })(e);
          if (t)
            return {
              sticker: t,
            };
          const n = (function (e) {
            if (
              e instanceof s.Api.MessageMediaPhoto &&
              e.photo &&
              e.photo instanceof s.Api.Photo
            )
              return (0, r.rk)(e.photo, e.spoiler);
          })(e);
          if (n)
            return {
              photo: n,
            };
          const a = (function (e) {
              if (
                e instanceof s.Api.MessageMediaDocument &&
                e.document instanceof s.Api.Document &&
                e.document.mimeType.startsWith("video")
              )
                return g(e.document, e.spoiler);
            })(e),
            o = (function (e) {
              if (
                e instanceof s.Api.MessageMediaDocument &&
                e.altDocument instanceof s.Api.Document &&
                e.altDocument.mimeType.startsWith("video")
              )
                return g(e.altDocument, e.spoiler);
            })(e);
          if (a)
            return {
              video: a,
              altVideo: o,
            };
          const u = (function (e) {
            if (
              !(
                e instanceof s.Api.MessageMediaDocument &&
                e.document &&
                e.document instanceof s.Api.Document
              )
            )
              return;
            const t = e.document.attributes.find(
              (e) => e instanceof s.Api.DocumentAttributeAudio
            );
            if (!t || t.voice) return;
            const n =
              e.document.thumbs &&
              e.document.thumbs
                .filter((e) => e instanceof s.Api.PhotoSize)
                .map((e) => (0, r.Wl)(e));
            return {
              id: String(e.document.id),
              fileName: w(e.document, "audio"),
              thumbnailSizes: n,
              size: e.document.size.toJSNumber(),
              ...(0, i.Up)(e.document, ["mimeType"]),
              ...(0, i.Up)(t, ["duration", "performer", "title"]),
            };
          })(e);
          if (u)
            return {
              audio: u,
            };
          const l = (function (e) {
            if (
              !(
                e instanceof s.Api.MessageMediaDocument &&
                e.document &&
                e.document instanceof s.Api.Document
              )
            )
              return;
            const t = e.document.attributes.find(
              (e) => e instanceof s.Api.DocumentAttributeAudio
            );
            if (!t || !t.voice) return;
            const { duration: n, waveform: a } = t;
            return {
              id: String(e.document.id),
              duration: n,
              waveform: a ? Array.from(a) : void 0,
            };
          })(e);
          if (l)
            return {
              voice: l,
            };
          const f = (function (e) {
            if (e instanceof s.Api.MessageMediaDocument && e.document)
              return h(e.document);
          })(e);
          if (f)
            return {
              document: f,
            };
          const _ = (function (e) {
            if (!(e instanceof s.Api.MessageMediaContact)) return;
            const { firstName: t, lastName: n, phoneNumber: a, userId: i } = e;
            return {
              firstName: t,
              lastName: n,
              phoneNumber: a,
              userId: (0, c.ol)(i, "user"),
            };
          })(e);
          if (_)
            return {
              contact: _,
            };
          const S = (function (e) {
            if (e instanceof s.Api.MessageMediaPoll)
              return y(e.poll, e.results);
          })(e);
          if (S)
            return {
              poll: S,
            };
          const I = b(e);
          if (I)
            return {
              webPage: I,
            };
          const C = (function (e) {
            if (e instanceof s.Api.MessageMediaInvoice)
              return (function (e) {
                const {
                    description: t,
                    title: n,
                    photo: a,
                    test: i,
                    totalAmount: o,
                    currency: r,
                    receiptMsgId: c,
                    extendedMedia: d,
                  } = e,
                  u =
                    d instanceof s.Api.MessageExtendedMediaPreview
                      ? v(d)
                      : void 0;
                return {
                  title: n,
                  text: t,
                  photo: A(a),
                  receiptMsgId: c,
                  amount: Number(o),
                  currency: r,
                  isTest: i,
                  extendedMedia: u,
                };
              })(e);
          })(e);
          if (C)
            return {
              invoice: C,
            };
          const P = (function (e) {
            return e instanceof s.Api.MessageMediaGeo
              ? (function (e) {
                  const t = m(e.geo);
                  return (
                    t && {
                      type: "geo",
                      geo: t,
                    }
                  );
                })(e)
              : e instanceof s.Api.MessageMediaVenue
              ? (function (e) {
                  const {
                      geo: t,
                      title: n,
                      provider: s,
                      address: a,
                      venueId: i,
                      venueType: o,
                    } = e,
                    r = m(t);
                  return (
                    r && {
                      type: "venue",
                      geo: r,
                      title: n,
                      provider: s,
                      address: a,
                      venueId: i,
                      venueType: o,
                    }
                  );
                })(e)
              : e instanceof s.Api.MessageMediaGeoLive
              ? (function (e) {
                  const { geo: t, period: n, heading: s } = e,
                    a = m(t);
                  return (
                    a && {
                      type: "geoLive",
                      geo: a,
                      period: n,
                      heading: s,
                    }
                  );
                })(e)
              : void 0;
          })(e);
          if (P)
            return {
              location: P,
            };
          const M = (function (e) {
            if (e instanceof s.Api.MessageMediaGame)
              return (function (e) {
                const {
                    id: t,
                    accessHash: n,
                    shortName: a,
                    title: i,
                    description: o,
                    photo: c,
                    document: d,
                  } = e.game,
                  u = c instanceof s.Api.Photo ? (0, r.rk)(c) : void 0,
                  l = d instanceof s.Api.Document ? h(d) : void 0;
                return {
                  id: t.toString(),
                  accessHash: n.toString(),
                  shortName: a,
                  title: i,
                  description: o,
                  photo: u,
                  document: l,
                };
              })(e);
          })(e);
          if (M)
            return {
              game: M,
            };
          const k = (function (e) {
            if (!(e instanceof s.Api.MessageMediaStory)) return;
            const t = (0, c.Zo)(e.peer);
            return {
              id: e.id,
              peerId: t,
              ...(e.viaMention && {
                isMention: !0,
              }),
            };
          })(e);
          if (k)
            return {
              storyData: k,
            };
          const R = (function (e) {
            if (e instanceof s.Api.MessageMediaGiveaway)
              return (function (e) {
                const {
                  channels: t,
                  months: n,
                  quantity: s,
                  untilDate: a,
                  countriesIso2: i,
                  onlyNewSubscribers: o,
                } = e;
                return {
                  channelIds: t.map((e) => (0, c.ol)(e, "channel")),
                  months: n,
                  quantity: s,
                  untilDate: a,
                  countries: i,
                  isOnlyForNewSubscribers: o,
                };
              })(e);
          })(e);
          return R
            ? {
                giveaway: R,
              }
            : void 0;
        }
        function f(e) {
          if (e instanceof s.Api.DocumentEmpty) return;
          const { id: t, mimeType: n, thumbs: i, size: o, attributes: c } = e;
          if (n === a.zPn && !self.isWebmSupported) return;
          const d = c.find((e) => e),
            u = c.find((e) => e),
            {
              duration: l,
              w: p,
              h: f,
              supportsStreaming: g = !1,
              roundMessage: h = !1,
            } = d;
          return {
            id: String(t),
            mimeType: n,
            duration: l,
            fileName: w(e, "video"),
            width: p,
            height: f,
            supportsStreaming: g,
            isRound: h,
            isGif: Boolean(u),
            thumbnail: (0, r.Kq)(i),
            size: o,
          };
        }
        function g(e, t) {
          if (e instanceof s.Api.DocumentEmpty) return;
          const { id: n, mimeType: i, thumbs: o, size: c, attributes: d } = e;
          if (i === a.zPn && !self.isWebmSupported) return;
          const u = d.find((e) => e instanceof s.Api.DocumentAttributeVideo);
          if (!u) return;
          const l = d.find((e) => e instanceof s.Api.DocumentAttributeAnimated),
            {
              duration: p,
              w: f,
              h: g,
              supportsStreaming: h = !1,
              roundMessage: m = !1,
              nosound: y,
            } = u;
          return {
            id: String(n),
            mimeType: i,
            duration: p,
            fileName: w(e, "video"),
            width: f,
            height: g,
            supportsStreaming: h,
            isRound: m,
            isGif: Boolean(l),
            thumbnail: (0, r.Kq)(o),
            size: c.toJSNumber(),
            isSpoiler: t,
            ...(y && {
              noSound: !0,
            }),
          };
        }
        function h(e) {
          if (!(e instanceof s.Api.Document)) return;
          const {
              id: t,
              size: n,
              mimeType: i,
              date: o,
              thumbs: c,
              attributes: d,
            } = e,
            u = c && c.find((e) => e instanceof s.Api.PhotoSize);
          let l,
            p,
            f = c && (0, r.Kq)(c);
          if (!f && c && u) {
            const e = c.find((e) => e instanceof s.Api.PhotoPathSize);
            e && (f = (0, r.O)(e, u));
          }
          if (u)
            if (
              ((p = {
                width: u.w,
                height: u.h,
              }),
              a.RJA.has(i))
            ) {
              l = "photo";
              const e = d.find(
                (e) => e instanceof s.Api.DocumentAttributeImageSize
              );
              if (e) {
                const { w: t, h: n } = e;
                p = {
                  width: t,
                  height: n,
                };
              }
            } else if (a.fNs.has(i)) {
              l = "video";
              const e = d.find(
                (e) => e instanceof s.Api.DocumentAttributeVideo
              );
              if (e) {
                const { w: t, h: n } = e;
                p = {
                  width: t,
                  height: n,
                };
              }
            }
          return {
            id: String(t),
            size: n.toJSNumber(),
            mimeType: i,
            timestamp: o,
            fileName: w(e),
            thumbnail: f,
            mediaType: l,
            mediaSize: p,
          };
        }
        function m(e) {
          if (e instanceof s.Api.GeoPointEmpty) return;
          const { long: t, lat: n, accuracyRadius: a, accessHash: i } = e;
          return {
            long: t,
            lat: n,
            accessHash: i.toString(),
            accuracyRadius: a,
          };
        }
        function y(e, t) {
          const { id: n, answers: s } = e,
            a = s.map((e) => ({
              text: e.text,
              option: (0, o.A9)(e.option),
            }));
          return {
            id: String(n),
            summary: {
              isPublic: e.publicVoters,
              ...(0, i.Up)(e, [
                "closed",
                "multipleChoice",
                "quiz",
                "question",
                "closePeriod",
                "closeDate",
              ]),
              answers: a,
            },
            results: _(t),
          };
        }
        function _(e) {
          const {
              results: t,
              totalVoters: n,
              recentVoters: s,
              solution: a,
              solutionEntities: i,
              min: d,
            } = e,
            u = t?.map((e) => {
              let { option: t, chosen: n, correct: s, voters: a } = e;
              return {
                isChosen: n,
                isCorrect: s,
                option: (0, o.A9)(t),
                votersCount: a,
              };
            });
          return {
            isMin: d,
            totalVoters: n,
            recentVoterIds: s?.map((e) => (0, c.Zo)(e)),
            results: u,
            solution: a,
            ...(i && {
              solutionEntities: i.map(r.$w),
            }),
          };
        }
        function b(e) {
          if (
            !(
              e instanceof s.Api.MessageMediaWebPage ||
              e instanceof s.Api.UpdateWebPage
            ) ||
            !(
              e.webpage instanceof s.Api.WebPage ||
              e.webpage instanceof s.Api.WebPagePending
            )
          )
            return;
          const { id: t, photo: n, document: a, attributes: d } = e.webpage;
          let u, l;
          a instanceof s.Api.Document &&
            a.mimeType.startsWith("video/") &&
            (u = g(a));
          const p = d?.find((e) => e instanceof s.Api.WebPageAttributeStory);
          if (p) {
            const e = (0, c.Zo)(p.peer);
            (l = {
              id: p.id,
              peerId: e,
            }),
              p.story instanceof s.Api.StoryItem && (0, o.np)(p.story, e);
          }
          return {
            id: Number(t),
            ...(0, i.Up)(e.webpage, [
              "url",
              "displayUrl",
              "embedUrl",
              "type",
              "siteName",
              "title",
              "description",
              "duration",
              "date",
            ]),
            photo: n instanceof s.Api.Photo ? (0, r.rk)(n) : void 0,
            document: !u && a ? h(a) : void 0,
            video: u,
            story: l,
          };
        }
        function w(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "file";
          const { mimeType: n, attributes: a } = e,
            i = a.find((e) => e instanceof s.Api.DocumentAttributeFilename);
          if (i) return i.fileName;
          const o = n.split("/")[1];
          return `${t}${String(e.id)}.${o}`;
        }
        function v(e) {
          const { w: t, h: n, thumb: s, videoDuration: a } = e;
          return {
            width: t,
            height: n,
            duration: a,
            thumbnail: s ? (0, r.Kq)([s]) : void 0,
          };
        }
        function A(e) {
          if (!e) return;
          const { url: t, size: n, mimeType: a } = e,
            i =
              e instanceof s.Api.WebDocument ? e.accessHash.toString() : void 0,
            o = e.attributes.find(
              (e) => e instanceof s.Api.DocumentAttributeImageSize
            );
          return {
            url: t,
            accessHash: i,
            size: n,
            mimeType: a,
            dimensions: o && {
              width: o.w,
              height: o.h,
            },
          };
        }
      },
      760: (e, t, n) => {
        "use strict";
        n.d(t, {
          Ep: () => k,
          I3: () => q,
          Pb: () => O,
          QD: () => P,
          T9: () => D,
          _V: () => R,
          ch: () => E,
          jT: () => N,
          nD: () => F,
          vs: () => M,
          zQ: () => T,
        });
        var s = n(45174),
          a = n(94660),
          i = n(31481),
          o = n(8172),
          r = n(87894),
          c = n(80140),
          d = n(70497),
          u = n(59510),
          l = n(77064),
          p = n(62666),
          f = n(98731),
          g = n(69006),
          h = n(15684),
          m = n(57003),
          y = n(28854),
          _ = n(71337);
        const b = 1e6,
          w = "temp",
          v = 63,
          A = 10;
        let S,
          I = 0;
        function C() {
          return (
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 1) +
            ++I / b
          );
        }
        function P(e) {
          S = e;
        }
        function M(e) {
          const {
              fromId: t,
              message: n,
              entities: a,
              startParam: o,
              channelPost: r,
              chatInvite: c,
              chatInviteHash: d,
              randomId: u,
              recommended: f,
              sponsorInfo: g,
              additionalInfo: y,
              showPeerPhoto: _,
              webpage: b,
              buttonText: w,
              app: v,
            } = e,
            A = t ? (0, m.Zo)(t) : void 0,
            S = c
              ? c instanceof s.Api.ChatInvite
                ? c.title
                : c.chat instanceof s.Api.ChatEmpty
                ? void 0
                : c.chat.title
              : void 0;
          return {
            randomId: (0, l.A9)(u),
            isBot: !!t && (0, m.QK)(t),
            text: (0, h.qR)(n, a),
            expiresAt: Math.round(Date.now() / 1e3) + i.Yc,
            isRecommended: Boolean(f),
            ...(b && {
              webPage: H(b),
            }),
            ...(_ && {
              isAvatarShown: !0,
            }),
            ...(A && {
              chatId: A,
            }),
            ...(d && {
              chatInviteHash: d,
            }),
            ...(c && {
              chatInviteTitle: S,
            }),
            ...(o && {
              startParam: o,
            }),
            ...(r && {
              channelPostId: r,
            }),
            ...(g && {
              sponsorInfo: g,
            }),
            ...(y && {
              additionalInfo: y,
            }),
            ...(w && {
              buttonText: w,
            }),
            ...(v && {
              botApp: (0, p.dy)(v),
            }),
          };
        }
        function k(e) {
          const t = (0, l.TN)(e);
          if (
            t &&
            (e instanceof s.Api.Message || e instanceof s.Api.MessageService)
          )
            return B(t, e);
        }
        function R(e) {
          return B((0, m.ol)(e.userId, "user"), {
            ...e,
            fromId: (0, u.j4)(e.out ? S : (0, m.ol)(e.userId, "user")),
          });
        }
        function E(e) {
          return B((0, m.ol)(e.chatId, "chat"), {
            ...e,
            fromId: (0, u.j4)((0, m.ol)(e.fromId, "user")),
          });
        }
        function T(e, t) {
          const n = C(t),
            s = (0, h.r0)(e);
          return {
            id: n,
            chatId: i.zv8,
            date: e.inboxDate || t,
            content: s,
            isOutgoing: !1,
          };
        }
        function B(e, t) {
          const n = t.fromId ? (0, m.Zo)(t.fromId) : void 0,
            a = t.peerId ? (0, m.Zo)(t.peerId) : void 0,
            i = !n && e === S,
            d = (t.out && !t.post) || (i && !t.fwdFrom),
            u = (0, h.r0)(t),
            p =
              t.action &&
              (function (e, t, n, a, i) {
                if (e instanceof s.Api.MessageActionEmpty) return;
                let o, r, c, d, u, p;
                const h = [];
                let y,
                  _,
                  b,
                  w,
                  v,
                  A,
                  I,
                  C,
                  P,
                  M = "other";
                const k =
                  "users" in e
                    ? e.users && e.users.map((e) => (0, m.ol)(e, "user"))
                    : ("userId" in e && [(0, m.ol)(e.userId, "user")]) || [];
                let R;
                if (e instanceof s.Api.MessageActionChatCreate)
                  (p = "ActionCreateGroup"),
                    h.push("%action_origin%", e.title),
                    (M = "chatCreate");
                else if (e instanceof s.Api.MessageActionChatEditTitle)
                  a
                    ? ((p = "ActionChannelChangedTitle"),
                      h.push("%message%", e.title))
                    : ((p = "ActionChangedTitle"),
                      h.push("%action_origin%", e.title));
                else if (e instanceof s.Api.MessageActionChatEditPhoto)
                  a
                    ? (p = "ActionChannelChangedPhoto")
                    : ((p = "NotificationEditedGroupPhoto"),
                      h.push("%action_origin%"));
                else if (e instanceof s.Api.MessageActionChatDeletePhoto)
                  a
                    ? (p = "ActionChannelRemovedPhoto")
                    : ((p = "ActionRemovedPhoto"), h.push("%action_origin%"));
                else if (e instanceof s.Api.MessageActionChatAddUser)
                  !t || k.includes(t)
                    ? ((p = "EventLogGroupJoined"), h.push("%target_user%"))
                    : ((p = "ActionAddUser"),
                      h.push("%action_origin%", "%target_user%"));
                else if (e instanceof s.Api.MessageActionChatDeleteUser)
                  !t || k.includes(t)
                    ? ((p = "ActionLeftUser"), h.push("%target_user%"))
                    : ((p = "ActionKickUser"),
                      h.push("%action_origin%", "%target_user%"));
                else if (e instanceof s.Api.MessageActionChatJoinedByLink)
                  (p = "NotificationInvitedToGroupByLink"),
                    h.push("%action_origin%");
                else if (e instanceof s.Api.MessageActionChannelCreate)
                  p = "ActionCreateChannel";
                else if (e instanceof s.Api.MessageActionChatMigrateTo)
                  (R = (0, m.Zo)(e)),
                    (p = "Migrated to %target_chat%"),
                    h.push("%target_chat%");
                else if (e instanceof s.Api.MessageActionChannelMigrateFrom)
                  (R = (0, m.Zo)(e)),
                    (p = "Migrated from %target_chat%"),
                    h.push("%target_chat%");
                else if (e instanceof s.Api.MessageActionPinMessage)
                  (p = "NotificationActionPinnedText"),
                    h.push("%action_origin%", "%message%");
                else if (e instanceof s.Api.MessageActionHistoryClear)
                  (p = "HistoryCleared"), (M = "historyClear");
                else if (e instanceof s.Api.MessageActionPhoneCall) {
                  const t = Boolean(e.duration);
                  if (
                    ((p = [
                      "CallMessage",
                      e.video ? "Video" : "",
                      i ? "Outgoing" : "Incoming",
                    ].join("")),
                    t)
                  ) {
                    const t = Math.max(Math.round(e.duration / 60), 1);
                    h.push(`${t} min${t > 1 ? "s" : ""}`);
                  }
                  o = {
                    isOutgoing: i,
                    isVideo: e.video,
                    duration: e.duration,
                    reason: (0, f.zn)(e.reason),
                  };
                } else if (e instanceof s.Api.MessageActionInviteToGroupCall)
                  (p = "Notification.VoiceChatInvitation"),
                    (r = {
                      id: e.call.id.toString(),
                      accessHash: e.call.accessHash.toString(),
                    }),
                    h.push("%action_origin%", "%target_user%");
                else if (e instanceof s.Api.MessageActionContactSignUp)
                  (p = "NotificationContactJoined"),
                    h.push("%action_origin%"),
                    (M = "contactSignUp");
                else if (e instanceof s.Api.MessageActionContactReturned)
                  (p = "NotificationContactReturned"),
                    h.push("%action_origin%"),
                    (M = "contactReturned");
                else if (e instanceof s.Api.MessageActionPaymentSent)
                  (c = Number(e.totalAmount)),
                    (d = e.currency),
                    (p = "PaymentSuccessfullyPaid"),
                    n && k.push(n),
                    h.push("%payment_amount%", "%target_user%", "%product%");
                else if (e instanceof s.Api.MessageActionGroupCall)
                  if (e.duration) {
                    const t = Math.max(Math.round(e.duration / 60), 1);
                    (p = "Notification.VoiceChatEnded"),
                      h.push(`${t} min${t > 1 ? "s" : ""}`);
                  } else
                    (p = "Notification.VoiceChatStartedChannel"),
                      (r = {
                        id: e.call.id.toString(),
                        accessHash: e.call.accessHash.toString(),
                      });
                else if (e instanceof s.Api.MessageActionBotAllowed)
                  e.domain
                    ? ((p = "ActionBotAllowed"), h.push(e.domain))
                    : (p = e.fromRequest
                        ? "lng_action_webapp_bot_allowed"
                        : "ActionAttachMenuBotAllowed");
                else if (e instanceof s.Api.MessageActionCustomAction)
                  p = e.message;
                else if (e instanceof s.Api.MessageActionChatJoinedByRequest)
                  (p = "ChatService.UserJoinedGroupByRequest"),
                    h.push("%action_origin%");
                else if (e instanceof s.Api.MessageActionGameScore)
                  (p =
                    t === S
                      ? "ActionYouScoredInGame"
                      : "ActionUserScoredInGame"),
                    h.push("%score%"),
                    (_ = e.score);
                else if (e instanceof s.Api.MessageActionWebViewDataSent)
                  (p = "Notification.WebAppSentData"), h.push(e.text);
                else if (e instanceof s.Api.MessageActionGiftPremium) {
                  if (
                    ((p = i ? "ActionGiftOutbound" : "ActionGiftInbound"),
                    i
                      ? h.push("%gift_payment_amount%")
                      : h.push("%action_origin%", "%gift_payment_amount%"),
                    n && k.push(n),
                    (d = e.currency),
                    e.cryptoCurrency)
                  ) {
                    const t = e.cryptoAmount.divide(1e7).toJSNumber() / 100;
                    u = {
                      currency: e.cryptoCurrency,
                      amount: t.toFixed(2),
                    };
                  }
                  (c = e.amount.toJSNumber()), (b = e.months);
                } else if (e instanceof s.Api.MessageActionTopicCreate)
                  (p = "TopicWasCreatedAction"),
                    (M = "topicCreate"),
                    h.push(e.title);
                else if (e instanceof s.Api.MessageActionTopicEdit)
                  void 0 !== e.closed
                    ? ((p = e.closed
                        ? "TopicWasClosedAction"
                        : "TopicWasReopenedAction"),
                      h.push("%action_origin%", "%action_topic%"))
                    : void 0 !== e.hidden
                    ? (p = e.hidden ? "TopicHidden2" : "TopicShown")
                    : e.title
                    ? ((p = "TopicRenamedTo"),
                      h.push("%action_origin%", e.title))
                    : e.iconEmojiId
                    ? ((p = "TopicWasIconChangedToAction"),
                      h.push("%action_origin%", "%action_topic_icon%"),
                      (w = e.iconEmojiId.toString()))
                    : (p = "ChatList.UnsupportedMessage"),
                    (v = !0);
                else if (e instanceof s.Api.MessageActionSuggestProfilePhoto) {
                  const a =
                    e.photo instanceof s.Api.Photo &&
                    e.photo.videoSizes?.length;
                  (p =
                    t === S
                      ? a
                        ? "ActionSuggestVideoFromYouDescription"
                        : "ActionSuggestPhotoFromYouDescription"
                      : a
                      ? "ActionSuggestVideoToYouDescription"
                      : "ActionSuggestPhotoToYouDescription"),
                    (M = "suggestProfilePhoto"),
                    h.push("%target_user%"),
                    n && k.push(n);
                } else
                  e instanceof s.Api.MessageActionGiveawayLaunch
                    ? ((p = "BoostingGiveawayJustStarted"),
                      h.push("%action_origin%"))
                    : e instanceof s.Api.MessageActionGiftCode
                    ? ((p = "BoostingReceivedGiftNoName"),
                      (A = e.slug),
                      (b = e.months),
                      (I = Boolean(e.viaGiveaway)),
                      (C = Boolean(e.unclaimed)),
                      e.boostPeer && (R = (0, m.Zo)(e.boostPeer)))
                    : e instanceof s.Api.MessageActionGiveawayResults
                    ? e.winnersCount
                      ? e.unclaimedCount
                        ? (p = "lng_action_giveaway_results_some")
                        : ((p = "BoostingGiveawayServiceWinnersSelected"),
                          h.push("%amount%"),
                          (c = e.winnersCount),
                          (P = e.winnersCount))
                      : (p = "lng_action_giveaway_results_none")
                    : (p = "ChatList.UnsupportedMessage");
                return (
                  "photo" in e &&
                    e.photo instanceof s.Api.Photo &&
                    ((0, l.Kv)(e.photo), (y = (0, g.rk)(e.photo))),
                  {
                    text: p,
                    type: M,
                    targetUserIds: k,
                    targetChatId: R,
                    photo: y,
                    amount: c,
                    currency: d,
                    giftCryptoInfo: u,
                    isGiveaway: I,
                    slug: A,
                    translationValues: h,
                    call: r,
                    phoneCall: o,
                    score: _,
                    months: b,
                    topicEmojiIconId: w,
                    isTopicAction: v,
                    isUnclaimed: C,
                    pluralValue: P,
                  }
                );
              })(t.action, n, a, Boolean(t.post), d);
          p && (u.action = p);
          const _ = t.date > (0, c.Fm)() + A,
            b =
              t.media instanceof s.Api.MessageMediaInvoice &&
              Boolean(t.media.extendedMedia),
            w = Boolean(t.editDate) && !t.editHide,
            {
              inlineButtons: v,
              keyboardButtons: I,
              keyboardPlaceholder: C,
              isKeyboardSingleUse: P,
              isKeyboardSelective: M,
            } = (function (e, t) {
              const { replyMarkup: n, media: a } = e;
              if (
                !(
                  n instanceof s.Api.ReplyKeyboardMarkup ||
                  n instanceof s.Api.ReplyInlineMarkup
                )
              )
                return;
              const i = n.rows.map((e) => {
                let { buttons: n } = e;
                return n
                  .map((e) => {
                    const { text: n } = e;
                    if (e instanceof s.Api.KeyboardButton)
                      return {
                        type: "command",
                        text: n,
                      };
                    if (e instanceof s.Api.KeyboardButtonUrl)
                      return e.url.includes("?startgroup=")
                        ? {
                            type: "unsupported",
                            text: n,
                          }
                        : {
                            type: "url",
                            text: n,
                            url: e.url,
                          };
                    if (e instanceof s.Api.KeyboardButtonCallback)
                      return e.requiresPassword
                        ? {
                            type: "unsupported",
                            text: n,
                          }
                        : {
                            type: "callback",
                            text: n,
                            data: (0, l.A9)(e.data),
                          };
                    if (e instanceof s.Api.KeyboardButtonRequestPoll)
                      return {
                        type: "requestPoll",
                        text: n,
                        isQuiz: e.quiz,
                      };
                    if (e instanceof s.Api.KeyboardButtonRequestPhone)
                      return {
                        type: "requestPhone",
                        text: n,
                      };
                    if (e instanceof s.Api.KeyboardButtonBuy) {
                      if (a instanceof s.Api.MessageMediaPayment && a.paymentId)
                        return {
                          type: "buy",
                          text: n,
                          value: a.paymentId.toString(),
                        };
                      if (
                        a instanceof s.Api.MessageMediaInvoice &&
                        a.receiptMsgId
                      )
                        return {
                          type: "receipt",
                          text: "PaymentReceipt",
                          receiptMessageId: a.receiptMsgId,
                        };
                      if (t) return;
                      return {
                        type: "buy",
                        text: n,
                      };
                    }
                    return e instanceof s.Api.KeyboardButtonGame
                      ? {
                          type: "game",
                          text: n,
                        }
                      : e instanceof s.Api.KeyboardButtonSwitchInline
                      ? {
                          type: "switchBotInline",
                          text: n,
                          query: e.query,
                          isSamePeer: e.samePeer,
                        }
                      : e instanceof s.Api.KeyboardButtonUserProfile
                      ? {
                          type: "userProfile",
                          text: n,
                          userId: e.userId.toString(),
                        }
                      : e instanceof s.Api.KeyboardButtonSimpleWebView
                      ? {
                          type: "simpleWebView",
                          text: n,
                          url: e.url,
                        }
                      : e instanceof s.Api.KeyboardButtonWebView
                      ? {
                          type: "webView",
                          text: n,
                          url: e.url,
                        }
                      : e instanceof s.Api.KeyboardButtonUrlAuth
                      ? {
                          type: "urlAuth",
                          text: n,
                          url: e.url,
                          buttonId: e.buttonId,
                        }
                      : {
                          type: "unsupported",
                          text: n,
                        };
                  })
                  .filter(Boolean);
              });
              return i.every((e) => !e.length)
                ? void 0
                : {
                    [n instanceof s.Api.ReplyKeyboardMarkup
                      ? "keyboardButtons"
                      : "inlineButtons"]: i,
                    ...(n instanceof s.Api.ReplyKeyboardMarkup && {
                      keyboardPlaceholder: n.placeholder,
                      isKeyboardSingleUse: n.singleUse,
                      isKeyboardSelective: n.selective,
                    }),
                  };
            })(t, b) || {},
            k = t.fwdFrom && U(t.fwdFrom, i),
            { mediaUnread: R, postAuthor: E } = t,
            T = t.groupedId && String(t.groupedId),
            B = Boolean(T) && !(u.document || u.audio || u.sticker),
            D = t.replyMarkup instanceof s.Api.ReplyKeyboardHide,
            V =
              t.replyMarkup instanceof s.Api.ReplyKeyboardHide &&
              t.replyMarkup.selective,
            F = t.noforwards || b,
            N = !t.noforwards,
            q = (0, o.e)(u, T),
            O = t.replies?.comments;
          return (0, r.Oy)({
            id: t.id,
            chatId: e,
            isOutgoing: d,
            content: u,
            date: t.date,
            senderId: n || (t.out && t.post && S) || e,
            viewsCount: t.views,
            forwardsCount: t.forwards,
            isScheduled: _,
            isFromScheduled: t.fromScheduled,
            isSilent: t.silent,
            isPinned: t.pinned,
            reactions: t.reactions && (0, y.uV)(t.reactions),
            emojiOnlyCount: q,
            ...(t.replyTo && {
              replyInfo: x(t.replyTo),
            }),
            forwardInfo: k,
            isEdited: w,
            editDate: t.editDate,
            isMediaUnread: R,
            hasUnreadMention: t.mentioned && R,
            isMentioned: t.mentioned,
            ...(T && {
              groupedId: T,
              isInAlbum: B,
            }),
            inlineButtons: v,
            ...(I && {
              keyboardButtons: I,
              keyboardPlaceholder: C,
              isKeyboardSingleUse: P,
              isKeyboardSelective: M,
            }),
            ...(D && {
              shouldHideKeyboardButtons: D,
              isHideKeyboardSelective: V,
            }),
            ...(t.viaBotId && {
              viaBotId: (0, m.ol)(t.viaBotId, "user"),
            }),
            postAuthorTitle: E,
            isProtected: F,
            isForwardingAllowed: N,
            hasComments: O,
          });
        }
        function D(e) {
          if (e instanceof s.Api.DraftMessageEmpty) return;
          const { message: t, entities: n, replyTo: a, date: i } = e,
            o =
              a instanceof s.Api.InputReplyToMessage
                ? {
                    type: "message",
                    replyToMsgId: a.replyToMsgId,
                    replyToTopId: a.topMsgId,
                    replyToPeerId:
                      a.replyToPeerId && (0, m.Zo)(a.replyToPeerId),
                    quoteText: void 0,
                  }
                : void 0;
          return {
            text: t ? (0, h.qR)(t, n) : void 0,
            replyInfo: o,
            date: i,
          };
        }
        function U(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const n = e.savedFromPeer && (0, m.Zo)(e.savedFromPeer),
            s = e.fromId && (0, m.Zo)(e.fromId);
          return {
            date: e.date,
            isImported: e.imported,
            isChannelPost: Boolean(e.channelPost),
            channelPostId: e.channelPost,
            isLinkedChannelPost: Boolean(e.channelPost && n && !t),
            fromChatId: n || s,
            fromMessageId: e.savedFromMsgId || e.channelPost,
            senderUserId: s,
            hiddenUserName: e.fromName,
            postAuthorTitle: e.postAuthor,
          };
        }
        function x(e) {
          if (e instanceof s.Api.MessageReplyStoryHeader)
            return {
              type: "story",
              userId: e.userId.toString(),
              storyId: e.storyId,
            };
          if (e instanceof s.Api.MessageReplyHeader) {
            const {
              replyFrom: t,
              replyToMsgId: n,
              replyToTopId: s,
              replyMedia: a,
              replyToPeerId: i,
              forumTopic: o,
              quote: r,
              quoteText: c,
              quoteEntities: d,
            } = e;
            return {
              type: "message",
              replyToMsgId: n,
              replyToTopId: s,
              isForumTopic: o,
              replyFrom: t && U(t),
              replyToPeerId: i && (0, m.Zo)(i),
              replyMedia: a && (0, h.jy)(a),
              isQuote: r,
              quoteText: void 0,
            };
          }
        }
        function V(e, t) {
          return {
            poll: {
              id: String(t),
              summary: (0, r.Up)(e.summary, ["question", "answers"]),
              results: {},
            },
          };
        }
        function F(e, t, n, s, a, r, u, l, p, f, g, h, m, y) {
          let _ = 0;
          _ = "localId" in y && y.localId ? y.localId : C(e.lastMessage?.id);
          const b =
              a &&
              (function (e) {
                const {
                  filename: t,
                  blobUrl: n,
                  previewBlobUrl: s,
                  mimeType: a,
                  size: o,
                  audio: r,
                  shouldSendAsFile: c,
                  shouldSendAsSpoiler: u,
                } = e;
                if (!c) {
                  if (e.quick) {
                    if (i.RJA.has(a)) {
                      const { width: t, height: a } = e.quick;
                      return {
                        photo: {
                          id: w,
                          sizes: [],
                          thumbnail: {
                            width: t,
                            height: a,
                            dataUri: s || n,
                          },
                          blobUrl: n,
                          isSpoiler: u,
                        },
                      };
                    }
                    if (i.fNs.has(a)) {
                      const { width: i, height: r, duration: c } = e.quick;
                      return {
                        video: {
                          id: w,
                          mimeType: a,
                          duration: c || 0,
                          fileName: t,
                          width: i,
                          height: r,
                          blobUrl: n,
                          ...(s && {
                            thumbnail: {
                              width: i,
                              height: r,
                              dataUri: s,
                            },
                          }),
                          size: o,
                          isSpoiler: u,
                        },
                      };
                    }
                  }
                  if (e.voice) {
                    const { duration: t, waveform: n } = e.voice,
                      { data: s } = (0, d.p)(n, v);
                    return {
                      voice: {
                        id: w,
                        duration: t,
                        waveform: s,
                      },
                    };
                  }
                  if (i.IH3.has(a)) {
                    const { duration: e, performer: n, title: s } = r || {};
                    return {
                      audio: {
                        id: w,
                        mimeType: a,
                        fileName: t,
                        size: o,
                        duration: e || 0,
                        title: s,
                        performer: n,
                      },
                    };
                  }
                }
                return {
                  document: {
                    mimeType: a,
                    fileName: t,
                    size: o,
                    ...(s && {
                      previewBlobUrl: s,
                    }),
                  },
                };
              })(a),
            A = "chatTypeChannel" === e.type,
            I =
              s &&
              ((k = s),
              (R = e.isForum),
              "story" === k.type
                ? {
                    type: "story",
                    userId: k.userId,
                    storyId: k.storyId,
                  }
                : {
                    type: "message",
                    replyToMsgId: k.replyToMsgId,
                    replyToTopId: k.replyToTopId,
                    replyToPeerId: k.replyToPeerId,
                    quoteText: void 0,
                    isForumTopic: !(!R || !k.replyToTopId) || void 0,
                  }),
            P = {
              id: _,
              chatId: e.id,
              content: {
                ...(t && {
                  text: {
                    text: t,
                    entities: n,
                  },
                }),
                ...b,
                ...(r && {
                  sticker: r,
                }),
                ...(u && {
                  video: u,
                }),
                ...(l && V(l, _)),
                ...(p && {
                  contact: p,
                }),
                ...(m && {
                  storyData: m,
                }),
              },
              date: g || Math.round(Date.now() / 1e3) + (0, c.SF)(),
              isOutgoing: !A,
              senderId: h?.id || S,
              replyInfo: I,
              ...(f && {
                groupedId: f,
                ...(b &&
                  (b.photo || b.video) && {
                    isInAlbum: !0,
                  }),
              }),
              ...(g && {
                isScheduled: !0,
              }),
              isForwardingAllowed: !0,
              localParams: {
                ...y,
                localId: _,
              },
            },
            M = (0, o.e)(P.content, P.groupedId);
          var k, R;
          return {
            ...P,
            ...(M && {
              emojiOnlyCount: M,
            }),
          };
        }
        function N(e) {
          let {
            toChat: t,
            toThreadId: n,
            message: s,
            scheduledAt: i,
            noAuthors: r,
            noCaptions: d,
            isCurrentUserPremium: u,
          } = e;
          const l = C(t?.lastMessage?.id),
            {
              content: p,
              chatId: f,
              id: g,
              senderId: h,
              groupedId: m,
              isInAlbum: y,
              forwardInfo: _,
            } = s,
            b = p.audio,
            w = t.id === S && (f !== t.id || s.forwardInfo) && !b,
            v = Object.keys(p).length > 1 && p.text && d,
            A = !u,
            I =
              p.text?.entities && A
                ? {
                    text: p.text.text,
                    entities: p.text.entities.filter(
                      (e) => e.type !== a.C7.CustomEmoji
                    ),
                  }
                : p.text,
            P = (0, o.e)(p, m),
            M = {
              ...p,
              text: v ? void 0 : I,
            },
            k = n === a.l3,
            R =
              n && !k
                ? {
                    type: "message",
                    replyToMsgId: n,
                    replyToTopId: n,
                    isForumTopic: t.isForum || void 0,
                  }
                : void 0;
          return {
            id: l,
            chatId: t.id,
            content: M,
            date: i || Math.round(Date.now() / 1e3) + (0, c.SF)(),
            isOutgoing: !w && "chatTypeChannel" !== t.type,
            senderId: S,
            sendingState: "messageSendingStatePending",
            groupedId: m,
            isInAlbum: y,
            isForwardingAllowed: !0,
            replyInfo: R,
            ...(n &&
              t?.isForum && {
                isTopicReply: !0,
              }),
            ...(P && {
              emojiOnlyCount: P,
            }),
            ...(s.chatId !== S &&
              !b &&
              !r && {
                forwardInfo: {
                  date: s.date,
                  isChannelPost: !1,
                  fromChatId: f,
                  fromMessageId: g,
                  senderUserId: _?.senderUserId || h,
                },
              }),
            ...(s.chatId === S &&
              !r && {
                forwardInfo: s.forwardInfo,
              }),
            ...(i && {
              isScheduled: !0,
            }),
          };
        }
        function q(e) {
          const t = (0, l.TN)(e);
          if (t && e instanceof s.Api.Message && e.replies)
            return O(e.replies, e.id, t);
        }
        function O(e, t, n) {
          const {
              channelId: s,
              replies: a,
              maxId: o,
              readMaxId: r,
              recentRepliers: c,
              comments: d,
            } = e,
            u = s ? (0, m.ol)(s, "channel") : void 0;
          if (u === i.h$y) return;
          const l = {
            messagesCount: a,
            ...(o && {
              lastMessageId: o,
            }),
            ...(r && {
              lastReadMessageId: r,
            }),
            ...(c && {
              recentReplierIds: c.map(m.Zo),
            }),
          };
          return d
            ? {
                ...l,
                isCommentsInfo: !0,
                chatId: u,
                originChannelId: n,
                originMessageId: t,
              }
            : {
                ...l,
                isCommentsInfo: !1,
                chatId: n,
                threadId: t,
              };
        }
        function H(e) {
          let t;
          return (
            e.photo instanceof s.Api.Photo &&
              ((0, l.Kv)(e.photo), (t = (0, g.rk)(e.photo))),
            {
              ...(0, r.Up)(e, ["url", "siteName"]),
              photo: t,
            }
          );
        }
        (0, _.postMessageListenInWorker)("setLocalMessageIdCounter", (e, t) => {
          I = t.value;
        });
      },
      57003: (e, t, n) => {
        "use strict";
        function s(e) {
          return e.hasOwnProperty("userId");
        }
        function a(e) {
          return e.hasOwnProperty("chatId");
        }
        function i(e, t) {
          return "user" === t
            ? e.toString()
            : "channel" === t
            ? `-100${e}`
            : `-${e}`;
        }
        function o(e) {
          return s(e)
            ? i(e.userId, "user")
            : a(e)
            ? i(e.chatId, "chat")
            : i(e.channelId, "channel");
        }
        function r(e) {
          const { color: t, backgroundEmojiId: n } = e;
          return {
            color: t,
            backgroundEmojiId: n?.toString(),
          };
        }
        n.d(t, {
          Du: () => a,
          QK: () => s,
          Zo: () => o,
          kD: () => r,
          ol: () => i,
        });
      },
      28854: (e, t, n) => {
        "use strict";
        n.d(t, {
          DK: () => l,
          _9: () => u,
          pT: () => c,
          rb: () => d,
          uV: () => o,
        });
        var s = n(45174),
          a = n(15684),
          i = n(57003);
        function o(e) {
          const { recentReactions: t, results: n, canSeeList: s } = e;
          return {
            canSeeList: s,
            results: n.map(c).filter(Boolean).sort(r),
            recentReactions: t?.map(d).filter(Boolean),
          };
        }
        function r(e, t) {
          return (
            t.count - e.count ||
            (void 0 !== e.chosenOrder && void 0 !== t.chosenOrder
              ? e.chosenOrder - t.chosenOrder
              : void 0 !== e.chosenOrder
              ? 1
              : void 0 !== t.chosenOrder
              ? -1
              : 0)
          );
        }
        function c(e) {
          const { chosenOrder: t, count: n, reaction: s } = e,
            a = u(s);
          if (a)
            return {
              chosenOrder: t,
              count: n,
              reaction: a,
            };
        }
        function d(e) {
          const {
              peerId: t,
              reaction: n,
              big: s,
              unread: a,
              date: o,
              my: r,
            } = e,
            c = u(n);
          if (c)
            return {
              peerId: (0, i.Zo)(t),
              reaction: c,
              addedDate: o,
              isUnread: a,
              isBig: s,
              isOwn: r,
            };
        }
        function u(e) {
          return e instanceof s.Api.ReactionEmoji
            ? {
                emoticon: e.emoticon,
              }
            : e instanceof s.Api.ReactionCustomEmoji
            ? {
                documentId: e.documentId.toString(),
              }
            : void 0;
        }
        function l(e) {
          const {
            selectAnimation: t,
            staticIcon: n,
            reaction: s,
            title: i,
            appearAnimation: o,
            inactive: r,
            aroundAnimation: c,
            centerIcon: d,
            effectAnimation: u,
            activateAnimation: l,
            premium: p,
          } = e;
          return {
            selectAnimation: (0, a.Cc)(t),
            appearAnimation: (0, a.Cc)(o),
            activateAnimation: (0, a.Cc)(l),
            effectAnimation: (0, a.Cc)(u),
            staticIcon: (0, a.Cc)(n),
            aroundAnimation: c ? (0, a.Cc)(c) : void 0,
            centerIcon: d ? (0, a.Cc)(d) : void 0,
            reaction: {
              emoticon: s,
            },
            title: i,
            isInactive: r,
            isPremium: p,
          };
        }
      },
      82971: (e, t, n) => {
        "use strict";
        n.d(t, {
          Mf: () => l,
          OM: () => g,
          R$: () => d,
          Xg: () => p,
          de: () => f,
          uL: () => u,
        });
        var s = n(45174),
          a = n(87894),
          i = n(59948),
          o = n(69006);
        const r = "application/x-tgsticker",
          c = "video/webm";
        function d(e, t) {
          if (e instanceof s.Api.DocumentEmpty) return;
          const { mimeType: n, videoThumbs: i } = e,
            d = e.attributes.find(
              (e) => e instanceof s.Api.DocumentAttributeSticker
            ),
            u = e.attributes.find(
              (e) => e instanceof s.Api.DocumentAttributeCustomEmoji
            ),
            l =
              (n === r || n === c) &&
              e.attributes.find(
                (e) => e instanceof s.Api.DocumentAttributeFilename
              );
          if (!d && !u && !l) return;
          const p = n === r,
            f = n === c,
            g = Boolean(u),
            h = g && u.textColor,
            m = e.attributes.find(
              (e) => e instanceof s.Api.DocumentAttributeImageSize
            ),
            y = e.attributes.find(
              (e) => e instanceof s.Api.DocumentAttributeVideo
            ),
            _ = m || y,
            b = d || u,
            w =
              ((I = b?.stickerset),
              I instanceof s.Api.InputStickerSetID
                ? {
                    id: String(I.id),
                    accessHash: String(I.accessHash),
                  }
                : I instanceof s.Api.InputStickerSetShortName
                ? {
                    shortName: I.shortName,
                  }
                : {
                    isMissing: !0,
                  }),
            v = b?.alt,
            A = Boolean(u?.free ?? !0),
            S =
              e.thumbs &&
              e.thumbs.find((e) => e instanceof s.Api.PhotoCachedSize);
          var I;
          if (
            !(
              n !== c ||
              self.isWebmSupported ||
              S ||
              (e.thumbs && e.thumbs.find((e) => e instanceof s.Api.PhotoSize))
            )
          )
            return;
          const C =
              e.thumbs &&
              e.thumbs.find((e) => e instanceof s.Api.PhotoPathSize),
            P = S ? (0, o.Bo)(S) : C && _ ? (0, o.O)(C, _) : void 0,
            { w: M, h: k } = S || _ || {},
            R =
              !t &&
              i &&
              (0, a.oE)(i?.filter((e) => e instanceof s.Api.VideoSize)).some(
                (e) => {
                  let { type: t } = e;
                  return "f" === t;
                }
              );
          return {
            id: String(e.id),
            stickerSetInfo: w,
            emoji: v,
            isCustomEmoji: g,
            isLottie: p,
            isVideo: f,
            width: M,
            height: k,
            thumbnail: P,
            hasEffect: R,
            isFree: A,
            shouldUseTextColor: h,
          };
        }
        function u(e) {
          const {
            archived: t,
            animated: n,
            installedDate: s,
            videos: a,
            id: i,
            accessHash: o,
            title: r,
            thumbs: c,
            count: d,
            shortName: u,
            emojis: l,
            thumbDocumentId: p,
          } = e;
          return {
            isArchived: t,
            isLottie: n,
            isVideos: a,
            isEmoji: l,
            installedDate: s,
            id: String(i),
            accessHash: String(o),
            title: r,
            hasThumbnail: Boolean(c?.length || p),
            thumbCustomEmojiId: p?.toString(),
            count: d,
            shortName: u,
          };
        }
        function l(e) {
          const t = u(e.set);
          if (e instanceof s.Api.StickerSetNoCovered) return t;
          const n = g(
            e instanceof s.Api.StickerSetCovered
              ? [e.cover]
              : e instanceof s.Api.StickerSetMultiCovered
              ? e.covers
              : e.documents
          );
          return e instanceof s.Api.StickerSetFullCovered
            ? {
                ...t,
                stickers: n,
                packs: f(e.packs),
              }
            : {
                ...t,
                covers: n,
              };
        }
        function p(e) {
          return {
            timestamps: e.a.map((e) => {
              let { t } = e;
              return t;
            }),
          };
        }
        function f(e) {
          return e.reduce((e, t) => {
            let { emoticon: n, documents: s } = t;
            return (
              (e[n] = s
                .map((e) => d(i.Ay.documents[String(e)]))
                .filter(Boolean)),
              e
            );
          }, {});
        }
        function g(e) {
          return e
            .map((e) => {
              if (e instanceof s.Api.Document) {
                const t = d(e);
                if (t) return (i.Ay.documents[String(e.id)] = e), t;
              }
            })
            .filter(Boolean);
        }
      },
      59510: (e, t, n) => {
        "use strict";
        n.d(t, {
          $t: () => T,
          A8: () => z,
          BJ: () => V,
          FZ: () => j,
          Gr: () => R,
          Gx: () => x,
          Hk: () => D,
          I2: () => P,
          J7: () => U,
          MQ: () => M,
          Ou: () => f,
          Pl: () => b,
          Rr: () => $,
          SW: () => W,
          Se: () => A,
          U5: () => H,
          Vg: () => J,
          XO: () => I,
          Y5: () => G,
          _T: () => O,
          bh: () => S,
          dd: () => k,
          en: () => C,
          gB: () => w,
          j4: () => g,
          kE: () => N,
          l2: () => h,
          lc: () => K,
          mH: () => Q,
          oq: () => Y,
          ot: () => E,
          oy: () => v,
          xB: () => B,
          xZ: () => L,
          xs: () => Z,
          y9: () => m,
          yC: () => _,
          yp: () => y,
          z0: () => q,
          zn: () => F,
        });
        var s = n(87263),
          a = n.n(s),
          i = n(45174),
          o = n(80071),
          r = n(94660),
          c = n(31481),
          d = n(87894),
          u = n(77064),
          l = n(59948);
        const p = 11;
        function f(e) {
          return e.startsWith("-")
            ? (
                (t = e).length >= c.bxS
                  ? t.startsWith("-100")
                  : (t.length !== p || !t.startsWith("-4")) && t.length >= p
              )
              ? "channel"
              : "chat"
            : "user";
          var t;
        }
        function g(e) {
          const t = f(e);
          return "user" === t
            ? new i.Api.PeerUser({
                userId: L(e, "user"),
              })
            : "channel" === t
            ? new i.Api.PeerChannel({
                channelId: L(e, "channel"),
              })
            : new i.Api.PeerChat({
                chatId: L(e, "chat"),
              });
        }
        function h(e, t) {
          const n = f(e);
          return "user" === n
            ? new i.Api.InputPeerUser({
                userId: L(e, "user"),
                accessHash: a()(t),
              })
            : "channel" === n
            ? new i.Api.InputPeerChannel({
                channelId: L(e, "channel"),
                accessHash: a()(t),
              })
            : new i.Api.InputPeerChat({
                chatId: L(e, "chat"),
              });
        }
        function m(e) {
          const t = f(e);
          let n;
          if ("user" === t) {
            if (((n = l.Ay.users[e]?.accessHash), !n)) return;
          } else if ("channel" === t && ((n = l.Ay.chats[e]?.accessHash), !n))
            return;
          return h(e, String(n));
        }
        function y(e, t) {
          const n = f(e);
          return "user" === n
            ? new i.Api.InputUser({
                userId: L(e, "user"),
                accessHash: a()(t),
              })
            : "channel" === n
            ? new i.Api.InputChannel({
                channelId: L(e, "channel"),
                accessHash: a()(t),
              })
            : L(e, "chat");
        }
        function _(e, t) {
          return new i.Api.InputStickerSetID({
            id: a()(e),
            accessHash: a()(t),
          });
        }
        function b(e) {
          return new i.Api.InputStickerSetShortName({
            shortName: e,
          });
        }
        function w(e) {
          const t = l.Ay.documents[e.id];
          if (t)
            return new i.Api.InputDocument(
              (0, d.Up)(t, ["id", "accessHash", "fileReference"])
            );
        }
        function v(e) {
          const t = w(e);
          if (t)
            return new i.Api.InputMediaDocument({
              id: t,
            });
        }
        function A(e, t) {
          const { summary: n, quiz: s } = e,
            a = new i.Api.Poll({
              id: t,
              publicVoters: n.isPublic,
              question: n.question,
              answers: n.answers.map((e) => {
                let { text: t, option: n } = e;
                return new i.Api.PollAnswer({
                  text: t,
                  option: (0, u.rW)(n),
                });
              }),
              quiz: n.quiz,
              multipleChoice: n.multipleChoice,
            });
          if (!s)
            return new i.Api.InputMediaPoll({
              poll: a,
            });
          const o = s.correctAnswers.map(u.rW),
            { solution: r } = s,
            c = s.solutionEntities ? s.solutionEntities.map(R) : [];
          return new i.Api.InputMediaPoll({
            poll: a,
            correctAnswers: o,
            ...(r && {
              solution: r,
              solutionEntities: c,
            }),
          });
        }
        function S(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return new i.Api.InputMediaPoll({
            poll: new i.Api.Poll({
              id: a()(e.id),
              publicVoters: e.summary.isPublic,
              question: e.summary.question,
              answers: e.summary.answers.map((e) => {
                let { text: t, option: n } = e;
                return new i.Api.PollAnswer({
                  text: t,
                  option: (0, u.rW)(n),
                });
              }),
              quiz: e.summary.quiz,
              multipleChoice: e.summary.multipleChoice,
              closeDate: e.summary.closeDate,
              closePeriod: e.summary.closePeriod,
              closed: !!t || e.summary.closed,
            }),
            correctAnswers: e.results.results
              ?.filter((e) => e.isCorrect)
              .map((e) => (0, u.rW)(e.option)),
            solution: e.results.solution,
            solutionEntities: e.results.solutionEntities?.map(R),
          });
        }
        function I(e) {
          const {
              emoticon: t,
              contacts: n,
              nonContacts: s,
              groups: a,
              channels: o,
              bots: r,
              excludeArchived: c,
              excludeMuted: d,
              excludeRead: u,
              pinnedChatIds: l,
              includedChatIds: p,
              excludedChatIds: f,
            } = e,
            g = l ? l.map(m).filter(Boolean) : [],
            h = p ? p.map(m).filter(Boolean) : [],
            y = f ? f.map(m).filter(Boolean) : [];
          return e.isChatList
            ? new i.Api.DialogFilterChatlist({
                id: e.id,
                title: e.title,
                emoticon: t || void 0,
                pinnedPeers: g,
                includePeers: h,
                hasMyInvites: e.hasMyInvites,
              })
            : new i.Api.DialogFilter({
                id: e.id,
                title: e.title,
                emoticon: t || void 0,
                contacts: n || void 0,
                nonContacts: s || void 0,
                groups: a || void 0,
                bots: r || void 0,
                excludeArchived: c || void 0,
                excludeMuted: d || void 0,
                excludeRead: u || void 0,
                broadcasts: o || void 0,
                pinnedPeers: g,
                includePeers: h,
                excludePeers: y,
              });
        }
        function C(e) {
          const t = m(e.peerId);
          return new i.Api.InputMediaStory({
            peer: t,
            id: e.id,
          });
        }
        function P() {
          return (0, o.readBigIntFromBuffer)(
            (0, o.generateRandomBytes)(8),
            !0,
            !0
          );
        }
        function M() {
          return (0, o.readBigIntFromBuffer)(
            (0, o.generateRandomBytes)(4),
            !0,
            !0
          ).toJSNumber();
        }
        function k(e, t, n) {
          return new i.Api.Message({
            id: e,
            peerId: g(t),
            fromId: g(t),
            media: n.media,
          });
        }
        function R(e) {
          const { type: t, offset: n, length: s } = e,
            o = "userId" in e ? l.Ay.users[e.userId] : void 0;
          switch (t) {
            case r.C7.Bold:
              return new i.Api.MessageEntityBold({
                offset: n,
                length: s,
              });
            case r.C7.Italic:
              return new i.Api.MessageEntityItalic({
                offset: n,
                length: s,
              });
            case r.C7.Underline:
              return new i.Api.MessageEntityUnderline({
                offset: n,
                length: s,
              });
            case r.C7.Strike:
              return new i.Api.MessageEntityStrike({
                offset: n,
                length: s,
              });
            case r.C7.Code:
              return new i.Api.MessageEntityCode({
                offset: n,
                length: s,
              });
            case r.C7.Pre:
              return new i.Api.MessageEntityPre({
                offset: n,
                length: s,
                language: e.language || "",
              });
            case r.C7.Blockquote:
              return new i.Api.MessageEntityBlockquote({
                offset: n,
                length: s,
              });
            case r.C7.TextUrl:
              return new i.Api.MessageEntityTextUrl({
                offset: n,
                length: s,
                url: e.url,
              });
            case r.C7.Url:
              return new i.Api.MessageEntityUrl({
                offset: n,
                length: s,
              });
            case r.C7.Hashtag:
              return new i.Api.MessageEntityHashtag({
                offset: n,
                length: s,
              });
            case r.C7.MentionName:
              return new i.Api.InputMessageEntityMentionName({
                offset: n,
                length: s,
                userId: new i.Api.InputUser({
                  userId: a()(o.id),
                  accessHash: o.accessHash,
                }),
              });
            case r.C7.Spoiler:
              return new i.Api.MessageEntitySpoiler({
                offset: n,
                length: s,
              });
            case r.C7.CustomEmoji:
              return new i.Api.MessageEntityCustomEmoji({
                offset: n,
                length: s,
                documentId: a()(e.documentId),
              });
            default:
              return new i.Api.MessageEntityUnknown({
                offset: n,
                length: s,
              });
          }
        }
        function E(e) {
          const { media: t } = e;
          return (
            !!t &&
            (t instanceof i.Api.MessageMediaPhoto ||
              t instanceof i.Api.MessageMediaDocument ||
              (t instanceof i.Api.MessageMediaWebPage &&
                t.webpage instanceof i.Api.WebPage &&
                (t.webpage.photo instanceof i.Api.Photo ||
                  (t.webpage.document instanceof i.Api.Document &&
                    t.webpage.document.mimeType.startsWith("video")))) ||
              (t instanceof i.Api.MessageMediaGame &&
                (t.game.document instanceof i.Api.Document ||
                  t.game.photo instanceof i.Api.Photo)) ||
              (t instanceof i.Api.MessageMediaInvoice &&
                (t.photo || t.extendedMedia)))
          );
        }
        function T(e) {
          return "photo" in e.action && e.action.photo instanceof i.Api.Photo;
        }
        function B(e) {
          if (e instanceof i.Api.PhotoEmpty) return new i.Api.ChatPhotoEmpty();
          const { dcId: t, id: n } = e;
          return new i.Api.ChatPhoto({
            dcId: t,
            photoId: n,
          });
        }
        function D(e) {
          const t = l.Ay.photos[e?.id];
          if (t)
            return new i.Api.InputPhoto(
              (0, d.Up)(t, ["id", "accessHash", "fileReference"])
            );
        }
        function U(e) {
          let { phone: t, firstName: n, lastName: s } = e;
          return new i.Api.InputPhoneContact({
            clientId: a()(1),
            phone: t,
            firstName: n,
            lastName: s,
          });
        }
        function x(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return new i.Api.ChatBannedRights({
            ...e,
            untilDate: t,
          });
        }
        function V(e) {
          return new i.Api.ChatAdminRights(e);
        }
        function F(e) {
          const { shippingAddress: t } = e;
          return new i.Api.PaymentRequestedInfo({
            ...e,
            shippingAddress: t ? new i.Api.PostAddress(t) : void 0,
          });
        }
        function N(e) {
          switch (e) {
            case "phoneNumber":
              return new i.Api.InputPrivacyKeyPhoneNumber();
            case "addByPhone":
              return new i.Api.InputPrivacyKeyAddedByPhone();
            case "lastSeen":
              return new i.Api.InputPrivacyKeyStatusTimestamp();
            case "profilePhoto":
              return new i.Api.InputPrivacyKeyProfilePhoto();
            case "forwards":
              return new i.Api.InputPrivacyKeyForwards();
            case "chatInvite":
              return new i.Api.InputPrivacyKeyChatInvite();
            case "phoneCall":
              return new i.Api.InputPrivacyKeyPhoneCall();
            case "phoneP2P":
              return new i.Api.InputPrivacyKeyPhoneP2P();
            case "voiceMessages":
              return new i.Api.InputPrivacyKeyVoiceMessages();
            case "bio":
              return new i.Api.InputPrivacyKeyAbout();
          }
        }
        function q(e) {
          switch (e) {
            case "spam":
              return new i.Api.InputReportReasonSpam();
            case "violence":
              return new i.Api.InputReportReasonViolence();
            case "childAbuse":
              return new i.Api.InputReportReasonChildAbuse();
            case "pornography":
              return new i.Api.InputReportReasonPornography();
            case "copyright":
              return new i.Api.InputReportReasonCopyright();
            case "fake":
              return new i.Api.InputReportReasonFake();
            case "geoIrrelevant":
              return new i.Api.InputReportReasonGeoIrrelevant();
            case "illegalDrugs":
              return new i.Api.InputReportReasonIllegalDrugs();
            case "personalDetails":
              return new i.Api.InputReportReasonPersonalDetails();
            case "other":
              return new i.Api.InputReportReasonOther();
          }
        }
        function O(e) {
          switch (e.type) {
            case "cancel":
              return new i.Api.SendMessageCancelAction();
            case "typing":
              return new i.Api.SendMessageTypingAction();
            case "recordAudio":
              return new i.Api.SendMessageRecordAudioAction();
            case "chooseSticker":
              return new i.Api.SendMessageChooseStickerAction();
            case "playingGame":
              return new i.Api.SendMessageGamePlayAction();
          }
        }
        function H(e) {
          return new i.Api.DataJSON({
            data: JSON.stringify(e),
          });
        }
        function L(e, t) {
          return "user" === t
            ? a()(e)
            : "channel" === t && e.length >= c.bxS
            ? a()(e.slice(4))
            : a()(e.slice(1));
        }
        function G(e) {
          return new i.Api.InputGroupCall({
            id: a()(e.id),
            accessHash: a()(e.accessHash),
          });
        }
        function j(e) {
          let { id: t, accessHash: n } = e;
          return new i.Api.InputPhoneCall({
            id: a()(t),
            accessHash: a()(n),
          });
        }
        function W(e) {
          return "slug" in e
            ? new i.Api.InputInvoiceSlug({
                slug: e.slug,
              })
            : new i.Api.InputInvoiceMessage({
                peer: h(e.chat.id, e.chat.accessHash),
                msgId: e.messageId,
              });
        }
        function z(e) {
          return e && "emoticon" in e
            ? new i.Api.ReactionEmoji({
                emoticon: e.emoticon,
              })
            : e && "documentId" in e
            ? new i.Api.ReactionCustomEmoji({
                documentId: a()(e.documentId),
              })
            : new i.Api.ReactionEmpty();
        }
        function K(e) {
          return "all" === e?.type
            ? new i.Api.ChatReactionsAll({
                allowCustom: e.areCustomAllowed,
              })
            : "some" === e?.type
            ? new i.Api.ChatReactionsSome({
                reactions: e.allowed.map(z),
              })
            : new i.Api.ChatReactionsNone();
        }
        function $(e, t) {
          return e.id === c.zNY
            ? new i.Api.EmojiStatusEmpty()
            : t
            ? new i.Api.EmojiStatusUntil({
                documentId: a()(e.id),
                until: t,
              })
            : new i.Api.EmojiStatus({
                documentId: a()(e.id),
              });
        }
        function J(e) {
          return new i.Api.TextWithEntities({
            text: e.text,
            entities: e.entities?.map(R) || [],
          });
        }
        function Z(e) {
          return new i.Api.InputBotAppID({
            id: a()(e.id),
            accessHash: a()(e.accessHash),
          });
        }
        function Q(e) {
          if ("story" === e.type)
            return new i.Api.InputReplyToStory({
              userId: m(e.userId),
              storyId: e.storyId,
            });
          if ("message" === e.type) {
            const {
              replyToMsgId: t,
              replyToTopId: n,
              replyToPeerId: s,
              quoteText: a,
            } = e;
            return new i.Api.InputReplyToMessage({
              replyToMsgId: t,
              topMsgId: n,
              replyToPeerId: s ? m(s) : void 0,
              quoteText: void 0,
              quoteEntities: void 0,
            });
          }
        }
        function Y(e) {
          const t = [];
          if (
            (e.allowedUsers?.length &&
              t.push(
                new i.Api.InputPrivacyValueAllowUsers({
                  users: e.allowedUsers.map((e) => {
                    let { id: t, accessHash: n } = e;
                    return y(t, n);
                  }),
                })
              ),
            e.allowedChats?.length &&
              t.push(
                new i.Api.InputPrivacyValueAllowChatParticipants({
                  chats: e.allowedChats.map((e) => {
                    let { id: t, type: n } = e;
                    return L(
                      t,
                      "chatTypeBasicGroup" === n ? "chat" : "channel"
                    );
                  }),
                })
              ),
            e.blockedUsers?.length &&
              t.push(
                new i.Api.InputPrivacyValueDisallowUsers({
                  users: e.blockedUsers.map((e) => {
                    let { id: t, accessHash: n } = e;
                    return y(t, n);
                  }),
                })
              ),
            e.blockedChats?.length &&
              t.push(
                new i.Api.InputPrivacyValueDisallowChatParticipants({
                  chats: e.blockedChats.map((e) => {
                    let { id: t, type: n } = e;
                    return L(
                      t,
                      "chatTypeBasicGroup" === n ? "chat" : "channel"
                    );
                  }),
                })
              ),
            !e.isUnspecified)
          )
            switch (e.visibility) {
              case "everybody":
                t.push(new i.Api.InputPrivacyValueAllowAll());
                break;
              case "contacts":
                t.push(new i.Api.InputPrivacyValueAllowContacts());
                break;
              case "nonContacts":
                t.push(new i.Api.InputPrivacyValueDisallowContacts());
                break;
              case "nobody":
                t.push(new i.Api.InputPrivacyValueDisallowAll());
            }
          return t;
        }
      },
      77064: (e, t, n) => {
        "use strict";
        n.d(t, {
          A9: () => b,
          JV: () => y,
          KK: () => _,
          Kv: () => h,
          NZ: () => p,
          RN: () => A,
          Rm: () => v,
          TN: () => u,
          V1: () => l,
          np: () => g,
          rW: () => w,
          xz: () => m,
        });
        var s = n(45174),
          a = n(57003),
          i = n(59948),
          o = n(48287).hp;
        const r = "#111111DD",
          c = "#E4D00A",
          d = {
            INVOKE: "#49DBF5",
            BEACON: "#F549DB",
            RESPONSE: "#6887F7",
            CONNECTING: "#E4D00A",
            CONNECTED: "#26D907",
            "CONNECTING ERROR": "#D1191C",
            "INVOKE ERROR": "#D1191C",
            UPDATE: "#0DD151",
            "UNEXPECTED UPDATE": "#9C9C9C",
            "UNEXPECTED RESPONSE": "#D1191C",
          };
        function u(e) {
          if (e instanceof s.Api.Message || e instanceof s.Api.MessageService)
            return (0, a.Zo)(e.peerId);
        }
        function l(e) {
          return (
            e instanceof s.Api.DialogFilter ||
            e instanceof s.Api.DialogFilterChatlist
          );
        }
        function p(e) {
          const t = `${u(e)}-${e.id}`;
          let n = e;
          e instanceof s.Api.Message &&
            e.media instanceof s.Api.MessageMediaInvoice &&
            e.media.extendedMedia instanceof s.Api.MessageExtendedMedia &&
            (n = new s.Api.Message({
              ...e,
              media: e.media.extendedMedia.media,
            })),
            (i.Ay.messages[t] = n),
            n instanceof s.Api.Message &&
              (n.media && f(n.media),
              n.replyTo instanceof s.Api.MessageReplyHeader &&
                n.replyTo.replyMedia &&
                f(n.replyTo.replyMedia)),
            n instanceof s.Api.MessageService &&
              "photo" in n.action &&
              h(n.action.photo);
        }
        function f(e) {
          e instanceof s.Api.MessageMediaDocument &&
            e.document instanceof s.Api.Document &&
            (i.Ay.documents[String(e.document.id)] = e.document),
            e instanceof s.Api.MessageMediaWebPage &&
              e.webpage instanceof s.Api.WebPage &&
              e.webpage.document instanceof s.Api.Document &&
              (i.Ay.documents[String(e.webpage.document.id)] =
                e.webpage.document),
            e instanceof s.Api.MessageMediaGame &&
              (e.game.document instanceof s.Api.Document &&
                (i.Ay.documents[String(e.game.document.id)] = e.game.document),
              h(e.game.photo)),
            e instanceof s.Api.MessageMediaInvoice &&
              e.photo &&
              (i.Ay.webDocuments[String(e.photo.url)] = e.photo);
        }
        function g(e, t) {
          if (!(e instanceof s.Api.StoryItem)) return;
          const n = {
            id: e.id,
            peerId: t,
          };
          if (e.media instanceof s.Api.MessageMediaPhoto) {
            const t = e.media.photo;
            (t.storyData = n), h(t);
          }
          if (e.media instanceof s.Api.MessageMediaDocument) {
            if (e.media.document instanceof s.Api.Document) {
              const t = e.media.document;
              (t.storyData = n),
                (i.Ay.documents[String(e.media.document.id)] = t);
            }
            if (e.media.altDocument instanceof s.Api.Document) {
              const t = e.media.altDocument;
              (t.storyData = n),
                (i.Ay.documents[String(e.media.altDocument.id)] = t);
            }
          }
        }
        function h(e) {
          e instanceof s.Api.Photo && (i.Ay.photos[String(e.id)] = e);
        }
        function m(e) {
          const t = (0, a.ol)(e.id, "user"),
            n = i.Ay.users[t];
          (n && !n.min && e.min) || (i.Ay.users[t] = e);
        }
        function y(e) {
          e.forEach((e) => {
            e instanceof s.Api.User
              ? m(e)
              : (e instanceof s.Api.Chat || e instanceof s.Api.Channel) &&
                (function (e) {
                  const t = (0, a.ol)(
                      e.id,
                      e instanceof s.Api.Chat ? "chat" : "channel"
                    ),
                    n = i.Ay.chats[t],
                    o = n && "min" in n && n.min,
                    r = "min" in e && e.min;
                  (n && !o && r) || (i.Ay.chats[t] = e);
                })(e);
          });
        }
        function _(e, t, n) {
          const a = i.Ay.messages[`${e}-${t}`];
          if (a instanceof s.Api.Message && a.media) {
            if (n instanceof s.Api.MessageExtendedMediaPreview) {
              if (!(a.media instanceof s.Api.MessageMediaInvoice)) return;
              a.media.extendedMedia = n;
            }
            n instanceof s.Api.MessageExtendedMedia && (a.media = n.media);
          }
        }
        function b(e) {
          return String.fromCharCode(...e);
        }
        function w(e) {
          return o.from(e, "binary");
        }
        function v(e) {
          const t =
            "UNEXPECTED RESPONSE" === e
              ? console.error
              : "INVOKE ERROR" === e || "UNEXPECTED UPDATE" === e
              ? console.warn
              : console.log;
          for (
            var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            s[a - 1] = arguments[a];
          t(
            `%cGramJS%c${e}`,
            `color: ${c}; background: ${r}; padding: 0.25rem; border-radius: 0.25rem;`,
            `color: ${d[e]}; background: ${r}; padding: 0.25rem; border-radius: 0.25rem; margin-left: 0.25rem;`,
            ...s
          );
        }
        function A(e) {
          return (
            e instanceof s.Api.UpdatesTooLong ||
            e instanceof s.Api.UpdateShortMessage ||
            e instanceof s.Api.UpdateShortChatMessage ||
            e instanceof s.Api.UpdateShort ||
            e instanceof s.Api.UpdatesCombined ||
            e instanceof s.Api.Updates ||
            e instanceof s.Api.UpdateShortSentMessage
          );
        }
      },
      59948: (e, t, n) => {
        "use strict";
        n.d(t, {
          $d: () => _,
          Ay: () => y,
          iB: () => b,
          tp: () => w,
        });
        var s = n(87263),
          a = n.n(s),
          i = n(43355),
          o = n(31481),
          r = n(37836),
          c = n(49567),
          d = n(48287).hp;
        const u = "BroadcastChannel" in self,
          l = u ? new BroadcastChannel(o.rLF) : void 0;
        let p = [];
        const f = (0, r.nF)(() => {
          l.postMessage({
            type: "localDbUpdate",
            batchedUpdates: p,
          }),
            (p = []);
        }, 100);
        function g(e) {
          if (e instanceof Uint8Array) return d.from(e);
          if (
            "object" == typeof e &&
            1 === Object.keys(e).length &&
            "value" === Object.keys(e)[0]
          )
            return a()(e.value);
          if (Array.isArray(e)) return e.map(g);
          if ("object" != typeof e || !("CONSTRUCTOR_ID" in e)) return e;
          const t = e.className
              .split(".")
              .reduce((e, t) => e[t], i.constructors),
            n = (0, c._)(e);
          return new t(
            Object.keys(n).reduce((e, t) => ((e[t] = g(n[t])), e), {})
          );
        }
        function h(e) {
          return [
            "localMessages",
            "chats",
            "users",
            "messages",
            "documents",
            "stickerSets",
            "photos",
            "webDocuments",
            "stories",
            "commonBoxState",
            "channelPtsById",
          ].reduce((t, n) => {
            const s = e?.[n] ?? {},
              a = Object.keys(s).reduce((e, t) => {
                if ("commonBoxState" === n || "channelPtsById" === n) {
                  const n = s;
                  return (e[t] = n[t]), e;
                }
                return (e[t] = g(s[t])), e;
              }, {});
            var i;
            return (
              (t[n] = u
                ? ((i = n),
                  new Proxy(a, {
                    get: (e, t, n) => Reflect.get(e, t, n),
                    set: (e, t, n) => (
                      p.push({
                        name: i,
                        prop: t,
                        value: n,
                      }),
                      f(),
                      Reflect.set(e, t, n)
                    ),
                  }))
                : a),
              t
            );
          }, {});
        }
        const m = h(),
          y = m;
        function _() {
          l &&
            l.postMessage({
              type: "localDbUpdateFull",
              localDb: Object.keys(m).reduce(
                (e, t) => (
                  (e[t] = {
                    ...m[t],
                  }),
                  e
                ),
                {}
              ),
            });
        }
        function b(e) {
          Object.assign(m, h(e));
        }
        function w() {
          Object.assign(m, h());
        }
      },
      47654: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            sendToOrigin: () => Ad,
          });
        var s = {};
        n.r(s),
          n.d(s, {
            abortChatRequests: () => Pt,
            abortRequestGroup: () => Mt,
            acceptBotUrlAuth: () => An,
            acceptCall: () => $n,
            acceptLinkUrlAuth: () => In,
            acceptPhoneCall: () => Sc,
            activateStealthMode: () => Lc,
            addChatMembers: () => Fs,
            allowBotSendMessages: () => Pn,
            answerCallbackButton: () => on,
            applyBoost: () => nd,
            applyGiftCode: () => rd,
            blockUser: () => Go,
            broadcastLocalDbUpdateFull: () => d.$d,
            changeSessionSettings: () => fa,
            changeSessionTtl: () => ga,
            checkChatUsername: () => po,
            checkChatlistInvite: () => ea,
            checkGiftCode: () => od,
            checkPassword: () => Pr,
            checkUsername: () => Uo,
            clearPassword: () => Mr,
            clearRecentReactions: () => Hr,
            clearRecentStickers: () => Wi,
            clickSponsoredMessage: () => ri,
            closePoll: () => za,
            confirmCall: () => Jn,
            confirmPhoneCall: () => Ac,
            createChalistInvite: () => aa,
            createChannel: () => os,
            createGroupCall: () => qn,
            createGroupChat: () => ps,
            createPhoneCallState: () => _c,
            createTopic: () => $s,
            deactivateAllUsernames: () => go,
            decodePhoneCallData: () => vc,
            deleteAccount: () => Wt,
            deleteChannel: () => ls,
            deleteChat: () => ds,
            deleteChatFolder: () => bs,
            deleteChatMember: () => Ns,
            deleteChatUser: () => cs,
            deleteChatlistInvite: () => ia,
            deleteContact: () => Ei,
            deleteExportedChatInvite: () => bo,
            deleteHistory: () => xa,
            deleteMessages: () => Da,
            deleteProfilePhotos: () => qo,
            deleteRevokedExportedChatInvites: () => wo,
            deleteScheduledMessages: () => Ua,
            deleteStory: () => Bc,
            deleteTopic: () => Qs,
            destroy: () => yt,
            destroyPhoneCallState: () => bc,
            discardCall: () => jn,
            discardGroupCall: () => Bn,
            disconnect: () => _t,
            downloadMedia: () => St,
            editChatFolder: () => _s,
            editChatPhoto: () => fs,
            editChatlistInvite: () => oa,
            editExportedChatInvite: () => yo,
            editGroupCallParticipant: () => Dn,
            editGroupCallTitle: () => Un,
            editMessage: () => ka,
            editStoryPrivacy: () => Fc,
            editTopic: () => Xs,
            encodePhoneCallData: () => wc,
            exportChatInvite: () => _o,
            exportGroupCallInvite: () => xn,
            faveSticker: () => Gi,
            fetchAllStories: () => Cc,
            fetchAnimatedEmojiEffects: () => Ji,
            fetchAnimatedEmojis: () => $i,
            fetchAppConfig: () => pr,
            fetchArchiveSticker: () => Ni,
            fetchAuthorizations: () => Wo,
            fetchBlockedUsers: () => Lo,
            fetchBoostsList: () => ad,
            fetchBoostsStatus: () => sd,
            fetchBotApp: () => gn,
            fetchBotCanSendMessage: () => Cn,
            fetchChannelStatistics: () => Qr,
            fetchChat: () => ts,
            fetchChatFolders: () => ms,
            fetchChatInviteImporters: () => vo,
            fetchChatSettings: () => Xn,
            fetchChatlistInvites: () => ra,
            fetchChats: () => Qn,
            fetchCommonChats: () => Ai,
            fetchConfig: () => fr,
            fetchContactList: () => Ci,
            fetchContentSettings: () => ur,
            fetchCountryList: () => mr,
            fetchCurrentUser: () => kt,
            fetchCustomEmoji: () => Ki,
            fetchCustomEmojiSets: () => Vi,
            fetchDefaultStatusEmojis: () => Xi,
            fetchDefaultTopicIcons: () => Yi,
            fetchDeviceHash: () => Kt,
            fetchDiscussionMessage: () => Ha,
            fetchEmojiKeywords: () => ro,
            fetchExportedChatInvites: () => mo,
            fetchExtendedMedia: () => Ja,
            fetchFavoriteStickers: () => Oi,
            fetchFeaturedEmojiStickers: () => Li,
            fetchFeaturedStickers: () => Hi,
            fetchFullChat: () => Yn,
            fetchFullUser: () => vi,
            fetchGenericEmojiEffects: () => Zi,
            fetchGiveawayInfo: () => id,
            fetchGlobalPrivacySettings: () => yr,
            fetchGroupCallParticipants: () => Vn,
            fetchGroupStatistics: () => Yr,
            fetchGroupsForDiscussion: () => Ds,
            fetchInlineBot: () => cn,
            fetchInlineBotResults: () => dn,
            fetchLangPack: () => nr,
            fetchLangStrings: () => ar,
            fetchLanguages: () => tr,
            fetchLeaveChatlistSuggestions: () => na,
            fetchMembers: () => Bs,
            fetchMessage: () => Ia,
            fetchMessagePublicForwards: () => ec,
            fetchMessageReactions: () => Vr,
            fetchMessageReactionsList: () => Fr,
            fetchMessageStatistics: () => Xr,
            fetchMessageViews: () => Oa,
            fetchMessages: () => Sa,
            fetchMyBoosts: () => td,
            fetchNearestCountry: () => Si,
            fetchNotificationExceptions: () => Qo,
            fetchNotificationSettings: () => Yo,
            fetchPeerColors: () => gr,
            fetchPeerPinnedStories: () => Mc,
            fetchPeerStories: () => Pc,
            fetchPeerStoriesByIds: () => Rc,
            fetchPinnedMessages: () => ti,
            fetchPollResult: () => $a,
            fetchPremiumGifts: () => Qi,
            fetchPremiumPromo: () => Xc,
            fetchPrivacySettings: () => ir,
            fetchProfilePhotos: () => Ti,
            fetchRecentEmojiStatuses: () => co,
            fetchRecentReactions: () => Or,
            fetchRecentStickers: () => qi,
            fetchRecommendedChatFolders: () => ys,
            fetchSavedGifs: () => to,
            fetchScheduledHistory: () => Ya,
            fetchSeenBy: () => ni,
            fetchSendAs: () => si,
            fetchSponsoredMessages: () => ii,
            fetchStatisticsAsyncGraph: () => tc,
            fetchStickerSets: () => Fi,
            fetchStickers: () => zi,
            fetchStickersForEmoji: () => oo,
            fetchStoriesArchive: () => kc,
            fetchStoriesMaxIds: () => qc,
            fetchStoryLink: () => xc,
            fetchStoryPublicForwards: () => sc,
            fetchStoryStatistics: () => nc,
            fetchStoryViewList: () => Uc,
            fetchTemporaryPaymentPassword: () => ed,
            fetchTopInlineBots: () => rn,
            fetchTopReactions: () => qr,
            fetchTopUsers: () => Ii,
            fetchTopicById: () => Zs,
            fetchTopics: () => Js,
            fetchUnreadMentions: () => ui,
            fetchUnreadReactions: () => li,
            fetchUsers: () => Pi,
            fetchViewCount: () => mi,
            fetchWallpapers: () => Oo,
            fetchWebAuthorizations: () => $o,
            fetchWebPagePreview: () => ja,
            findFirstMessageIdAfterDate: () => Qa,
            forwardMessages: () => Za,
            getAvailableReactions: () => Ur,
            getChatByPhoneNumber: () => As,
            getChatByUsername: () => Ss,
            getDhConfig: () => Gn,
            getGroupCall: () => Tn,
            getLangPackDifference: () => sr,
            getPasswordInfo: () => Ir,
            getPaymentForm: () => Qc,
            getReceipt: () => Yc,
            hideAllChatJoinRequests: () => So,
            hideChatJoinRequest: () => Ao,
            hideChatReportPanel: () => Io,
            importChatInvite: () => Gs,
            importContact: () => Mi,
            importContactBatch: () => ki,
            installStickerSet: () => so,
            invokeWebViewCustomMethod: () => Mn,
            joinChannel: () => rs,
            joinChatlistInvite: () => ta,
            joinGroupCall: () => Nn,
            joinGroupCallPresentation: () => On,
            leaveChannel: () => us,
            leaveChatlist: () => sa,
            leaveGroupCall: () => Fn,
            leaveGroupCallPresentation: () => Ln,
            loadAttachBot: () => bn,
            loadAttachBots: () => _n,
            loadPollOptionResults: () => Ka,
            markMessageListRead: () => Na,
            markMessagesRead: () => qa,
            markStoryRead: () => Tc,
            migrateChat: () => xs,
            openChatByInvite: () => Vs,
            pinMessage: () => Ta,
            prolongWebView: () => mn,
            provideAuthCode: () => Qt,
            provideAuthPassword: () => Yt,
            provideAuthPhoneNumber: () => Zt,
            provideAuthRegistration: () => Xt,
            provideRecoveryEmailCode: () => Er,
            readAllMentions: () => ci,
            readAllReactions: () => di,
            receivedCall: () => Kn,
            registerDevice: () => or,
            removeRecentSticker: () => ji,
            reorderUsernames: () => wr,
            repairFileReference: () => Rt,
            reportMessages: () => Va,
            reportPeer: () => la,
            reportProfilePhoto: () => pa,
            reportSpam: () => Bi,
            reportStory: () => Vc,
            requestAppWebView: () => hn,
            requestBotUrlAuth: () => vn,
            requestCall: () => Wn,
            requestChannelDifference: () => Dt,
            requestChatUpdate: () => ns,
            requestLinkUrlAuth: () => Sn,
            requestPhoneCall: () => Ic,
            requestSimpleWebView: () => fn,
            requestWebView: () => pn,
            rescheduleMessage: () => Ra,
            resendCode: () => zt,
            resendDeleteAccountCode: () => jt,
            restartAuth: () => en,
            restartAuthWithQr: () => tn,
            saveCloseFriends: () => Ui,
            saveDefaultSendAs: () => ai,
            saveDraft: () => ss,
            saveGif: () => no,
            searchChats: () => es,
            searchGifs: () => io,
            searchMessagesGlobal: () => Ga,
            searchMessagesLocal: () => La,
            searchStickers: () => eo,
            sendDeleteAccountCode: () => Gt,
            sendEmojiInteraction: () => Dr,
            sendInlineBotResult: () => un,
            sendMessage: () => Pa,
            sendMessageAction: () => Fa,
            sendPaymentForm: () => Zc,
            sendPollVote: () => Wa,
            sendReaction: () => xr,
            sendScheduledMessages: () => Xa,
            sendSignalingData: () => Zn,
            sendStoryReaction: () => Hc,
            sendWatchingEmojiInteraction: () => Br,
            sendWebViewData: () => yn,
            setAllowHttpTransport: () => Tt,
            setCallRating: () => zn,
            setChatEnabledReactions: () => js,
            setChatUsername: () => fo,
            setDefaultReaction: () => Nr,
            setDiscussionGroup: () => Us,
            setForceHttpTransport: () => Et,
            setPrivacySettings: () => cr,
            setShouldDebugExportedSenders: () => Bt,
            setViewForumAsMessages: () => da,
            sortChatFolders: () => ws,
            startBot: () => ln,
            terminateAllAuthorizations: () => Ko,
            terminateAllWebAuthorizations: () => Zo,
            terminateAuthorization: () => zo,
            terminateWebAuthorization: () => Jo,
            thirdPartyRequest: () => cd,
            thirdPartyTell: () => dd,
            toggleAttachBot: () => wn,
            toggleChatArchived: () => hs,
            toggleChatPinned: () => gs,
            toggleDialogUnread: () => vs,
            toggleForum: () => Ks,
            toggleGroupCallStartSubscription: () => Hn,
            toggleIsProtected: () => Ws,
            toggleJoinRequest: () => Os,
            toggleJoinToSend: () => qs,
            toggleParticipantsHidden: () => zs,
            togglePeerTranslations: () => ca,
            togglePinnedTopic: () => Ys,
            togglePreHistoryHidden: () => Cs,
            toggleSignatures: () => Ts,
            toggleStoriesHidden: () => Nc,
            toggleStoryPinned: () => Dc,
            toggleUsername: () => br,
            transcribeAudio: () => pi,
            translateText: () => fi,
            unblockUser: () => jo,
            uninstallStickerSet: () => ao,
            unpinAllMessages: () => Ba,
            unregisterDevice: () => rr,
            updateChatAbout: () => Es,
            updateChatAdmin: () => ks,
            updateChatDefaultBannedRights: () => Ps,
            updateChatMemberBannedRights: () => Ms,
            updateChatMutedState: () => as,
            updateChatTitle: () => Rs,
            updateContact: () => Ri,
            updateContactSignUpNotification: () => Xo,
            updateContentSettings: () => lr,
            updateEmojiStatus: () => Di,
            updateGlobalPrivacySettings: () => _r,
            updateIsOnline: () => dr,
            updateNotificationSettings: () => er,
            updatePassword: () => kr,
            updatePrivateLink: () => ho,
            updateProfile: () => Do,
            updateProfilePhoto: () => Vo,
            updateRecoveryEmail: () => Rr,
            updateTopicMutedState: () => is,
            updateUsername: () => xo,
            uploadContactProfilePhoto: () => No,
            uploadProfilePhoto: () => Fo,
            uploadWallpaper: () => Ho,
            validateRequestedInfo: () => Jc,
            viewSponsoredMessage: () => oi,
            viewStory: () => Ec,
          });
        var a = n(31481),
          i = n(61182),
          o = n(37836),
          r = n(71337),
          c = n(77064),
          d = n(59948),
          u = n(45174),
          l = n(87894),
          p = n(80140),
          f = n(62666),
          g = n(98731),
          h = n(69006),
          m = n(49567),
          y = n(57003),
          _ = n(28854);
        function b(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const n = Boolean("min" in e && e.min),
            s = "accessHash" in e && String(e.accessHash),
            a =
              "photo" in e &&
              e.photo &&
              "hasVideo" in e.photo &&
              e.photo.hasVideo,
            i = "photo" in e && e.photo && R(e.photo),
            o = Boolean("signatures" in e && e.signatures),
            r = Boolean("hasLink" in e && e.hasLink),
            c = Boolean("scam" in e && e.scam),
            d = Boolean("fake" in e && e.fake),
            u = Boolean("joinToSend" in e && e.joinToSend),
            l = Boolean("joinRequest" in e && e.joinRequest),
            p = (0, h._h)(e),
            f = Boolean("forum" in e && e.forum),
            g = Boolean("storiesHidden" in e && e.storiesHidden),
            m = "storiesMaxId" in e ? e.storiesMaxId : void 0,
            _ = Boolean("storiesUnavailable" in e && e.storiesUnavailable),
            b = "color" in e && e.color ? (0, y.kD)(e.color) : void 0;
          return {
            isMin: n,
            hasPrivateLink: r,
            isSignaturesShown: o,
            usernames: p,
            ...(s && {
              accessHash: s,
            }),
            hasVideoAvatar: a,
            ...(i && {
              avatarHash: i,
            }),
            ...("verified" in e && {
              isVerified: e.verified,
            }),
            ...("callActive" in e && {
              isCallActive: e.callActive,
            }),
            ...("callNotEmpty" in e && {
              isCallNotEmpty: e.callNotEmpty,
            }),
            ...("date" in e && {
              creationDate: e.date,
            }),
            ...("participantsCount" in e &&
              void 0 !== e.participantsCount && {
                membersCount: e.participantsCount,
              }),
            ...("noforwards" in e && {
              isProtected: Boolean(e.noforwards),
            }),
            ...(t && {
              isSupport: !0,
            }),
            ...v(e),
            ...("creator" in e && {
              isCreator: e.creator,
            }),
            ...A(e),
            ...S(e),
            fakeType: c ? "scam" : d ? "fake" : void 0,
            color: b,
            isJoinToSend: u,
            isJoinRequest: l,
            isForum: f,
            areStoriesHidden: g,
            maxStoryId: m,
            hasStories: Boolean(m) && !_,
          };
        }
        function w(e, t) {
          const {
              peer: n,
              folderId: s,
              unreadMark: a,
              unreadCount: i,
              unreadMentionsCount: o,
              unreadReactionsCount: r,
              notifySettings: { silent: c, muteUntil: d },
              readOutboxMaxId: l,
              readInboxMaxId: f,
              draft: g,
              viewForumAsMessages: h,
            } = e,
            m = c || ("number" == typeof d && (0, p.Fm)() < d);
          return {
            id: (0, y.Zo)(n),
            ...(s && {
              folderId: s,
            }),
            type: C(t),
            title: M(n, t),
            lastReadOutboxMessageId: l,
            lastReadInboxMessageId: f,
            unreadCount: i,
            unreadMentionsCount: o,
            unreadReactionsCount: r,
            isMuted: m,
            muteUntil: d,
            ...(a && {
              hasUnreadMark: !0,
            }),
            ...(g instanceof u.Api.DraftMessage && {
              draftDate: g.date,
            }),
            ...(h && {
              isForumAsMessages: !0,
            }),
            ...b(t),
          };
        }
        function v(e) {
          return e instanceof u.Api.Chat || e instanceof u.Api.Channel
            ? {
                adminRights: e.adminRights ? (0, m._)(e.adminRights) : void 0,
                currentUserBannedRights:
                  "bannedRights" in e && e.bannedRights
                    ? (0, m._)(e.bannedRights)
                    : void 0,
                defaultBannedRights: e.defaultBannedRights
                  ? (0, m._)(e.defaultBannedRights)
                  : void 0,
              }
            : {};
        }
        function A(e) {
          if (e instanceof u.Api.ChatForbidden)
            return {
              isForbidden: !0,
            };
          if (e instanceof u.Api.ChannelForbidden)
            return {
              isRestricted: !0,
            };
          const t = {};
          if ("restricted" in e) {
            const n = e.restricted
              ? (function (e) {
                  if (!e) return;
                  const t = e.find((e) => {
                    let { platform: t } = e;
                    return "all" === t;
                  });
                  return t ? (0, l.Up)(t, ["reason", "text"]) : void 0;
                })(e.restrictionReason)
              : void 0;
            n
              ? Object.assign(t, {
                  isRestricted: !0,
                  restrictionReason: n,
                })
              : Object.assign(t, {
                  isRestricted: !1,
                });
          }
          return (
            e instanceof u.Api.Chat &&
              Object.assign(t, {
                isNotJoined: e.left,
              }),
            e instanceof u.Api.Channel &&
              Object.assign(t, {
                isNotJoined: e.left,
              }),
            t
          );
        }
        function S(e) {
          return !("migratedTo" in e) ||
            !e.migratedTo ||
            e.migratedTo instanceof u.Api.InputChannelEmpty
            ? {}
            : {
                migratedTo: {
                  chatId: (0, y.Zo)(e.migratedTo),
                  ...(e.migratedTo instanceof u.Api.InputChannel && {
                    accessHash: String(e.migratedTo.accessHash),
                  }),
                },
              };
        }
        function I(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!(e instanceof u.Api.ChatEmpty || e instanceof u.Api.UserEmpty))
            return {
              id: (0, y.ol)(
                e.id,
                e instanceof u.Api.User
                  ? "user"
                  : e instanceof u.Api.Chat || e instanceof u.Api.ChatForbidden
                  ? "chat"
                  : "channel"
              ),
              type: C(e),
              title: e instanceof u.Api.User ? k(e) : e.title,
              ...b(e, t),
            };
        }
        function C(e) {
          return e instanceof u.Api.User || e instanceof u.Api.UserEmpty
            ? "chatTypePrivate"
            : e instanceof u.Api.Chat ||
              e instanceof u.Api.ChatForbidden ||
              e instanceof u.Api.ChatEmpty
            ? "chatTypeBasicGroup"
            : e.megagroup
            ? "chatTypeSuperGroup"
            : "chatTypeChannel";
        }
        function P(e) {
          return (0, y.QK)(e)
            ? `user${e.userId}`
            : (0, y.Du)(e)
            ? `chat${e.chatId}`
            : `chat${e.channelId}`;
        }
        function M(e, t) {
          return (0, y.QK)(e) ? k(t) : t.title;
        }
        function k(e) {
          return e.firstName
            ? `${e.firstName}${e.lastName ? ` ${e.lastName}` : ""}`
            : e.lastName || "";
        }
        function R(e) {
          if ("photoId" in e) return String(e.photoId);
        }
        function E(e) {
          return {
            userId:
              e instanceof u.Api.ChannelParticipantBanned ||
              e instanceof u.Api.ChannelParticipantLeft
                ? (0, y.Zo)(e.peer)
                : (0, y.ol)(e.userId, "user"),
            inviterId:
              "inviterId" in e && e.inviterId
                ? (0, y.ol)(e.inviterId, "user")
                : void 0,
            joinedDate: "date" in e ? e.date : void 0,
            kickedByUserId:
              "kickedBy" in e && e.kickedBy
                ? (0, y.ol)(e.kickedBy, "user")
                : void 0,
            promotedByUserId:
              "promotedBy" in e && e.promotedBy
                ? (0, y.ol)(e.promotedBy, "user")
                : void 0,
            bannedRights:
              "bannedRights" in e ? (0, m._)(e.bannedRights) : void 0,
            adminRights: "adminRights" in e ? (0, m._)(e.adminRights) : void 0,
            customTitle: "rank" in e ? e.rank : void 0,
            ...((e instanceof u.Api.ChannelParticipantAdmin ||
              e instanceof u.Api.ChatParticipantAdmin) && {
              isAdmin: !0,
            }),
            ...((e instanceof u.Api.ChannelParticipantCreator ||
              e instanceof u.Api.ChatParticipantCreator) && {
              isOwner: !0,
            }),
          };
        }
        function T(e) {
          return e instanceof u.Api.ChatParticipants ||
            e instanceof u.Api.channels.ChannelParticipants
            ? e.participants.map(E).filter(Boolean)
            : void 0;
        }
        function B(e) {
          let t,
            n = "";
          if (!(e.action instanceof u.Api.SendMessageCancelAction)) {
            if (e.action instanceof u.Api.SendMessageTypingAction) n = "Typing";
            else if (e.action instanceof u.Api.SendMessageRecordVideoAction)
              n = "IsRecordingVideo";
            else if (e.action instanceof u.Api.SendMessageUploadVideoAction)
              n = "IsSendingVideo";
            else if (e.action instanceof u.Api.SendMessageRecordAudioAction)
              n = "IsRecordingAudio";
            else if (e.action instanceof u.Api.SendMessageUploadAudioAction)
              n = "IsSendingAudio";
            else if (e.action instanceof u.Api.SendMessageUploadPhotoAction)
              n = "IsSendingPhoto";
            else if (e.action instanceof u.Api.SendMessageUploadDocumentAction)
              n = "IsSendingFile";
            else if (e.action instanceof u.Api.SendMessageGeoLocationAction)
              n = "IsSelectingLocation";
            else if (e.action instanceof u.Api.SendMessageChooseContactAction)
              n = "IsSelectingContact";
            else if (e.action instanceof u.Api.SendMessageGamePlayAction)
              n = "IsSendingGame";
            else if (e.action instanceof u.Api.SendMessageRecordRoundAction)
              n = "IsRecordingRound";
            else if (e.action instanceof u.Api.SendMessageUploadRoundAction)
              n = "IsSendingVideo";
            else if (e.action instanceof u.Api.SendMessageChooseStickerAction)
              n = "IsChoosingSticker";
            else {
              if (e.action instanceof u.Api.SpeakingInGroupCallAction) return;
              if (e.action instanceof u.Api.SendMessageEmojiInteractionSeen)
                (n = "IsEnjoyngAnimations"), (t = e.action.emoticon);
              else if (e.action instanceof u.Api.SendMessageEmojiInteraction)
                return;
            }
            return {
              action: n,
              ...(t && {
                emoji: t,
              }),
              ...(!(e instanceof u.Api.UpdateUserTyping) && {
                userId: (0, y.Zo)(e.fromId),
              }),
              timestamp: Date.now() + 1e3 * (0, p.SF)(),
            };
          }
        }
        function D(e) {
          return e instanceof u.Api.DialogFilterChatlist
            ? {
                ...(0, l._E)(e, ["id", "title", "emoticon"]),
                excludedChatIds: [],
                includedChatIds: e.includePeers.map(y.Zo).filter(Boolean),
                pinnedChatIds: e.pinnedPeers.map(y.Zo).filter(Boolean),
                hasMyInvites: e.hasMyInvites,
                isChatList: !0,
              }
            : {
                ...(0, l._E)(e, [
                  "id",
                  "title",
                  "emoticon",
                  "contacts",
                  "nonContacts",
                  "groups",
                  "bots",
                  "excludeMuted",
                  "excludeRead",
                  "excludeArchived",
                ]),
                channels: e.broadcasts,
                pinnedChatIds: e.pinnedPeers.map(y.Zo).filter(Boolean),
                includedChatIds: e.includePeers.map(y.Zo).filter(Boolean),
                excludedChatIds: e.excludePeers.map(y.Zo).filter(Boolean),
              };
        }
        function U(e) {
          let { filter: t, description: n } = e;
          if (
            t instanceof u.Api.DialogFilter ||
            t instanceof u.Api.DialogFilterChatlist
          )
            return {
              ...D(t),
              description: n,
            };
        }
        function x(e) {
          return e.reduce((e, t) => {
            const n = (0, y.ol)(t.userId, "user");
            return (
              t.commands &&
                (e = e.concat(
                  t.commands.map((e) => ({
                    botId: n,
                    ...(0, m._)(e),
                  }))
                )),
              e
            );
          }, []);
        }
        function V(e) {
          const {
            revoked: t,
            date: n,
            expireDate: s,
            link: a,
            permanent: i,
            startDate: o,
            usage: r,
            usageLimit: c,
            requested: d,
            requestNeeded: u,
            title: l,
            adminId: p,
          } = e;
          return {
            isRevoked: t,
            date: n,
            expireDate: s,
            link: a,
            isPermanent: i,
            startDate: o,
            usage: r,
            usageLimit: c,
            isRequestNeeded: u,
            requested: d,
            title: l,
            adminId: (0, y.ol)(p, "user"),
          };
        }
        function F(e) {
          let {
            autoarchived: t,
            reportSpam: n,
            addContact: s,
            blockContact: a,
          } = e;
          return {
            isAutoArchived: Boolean(t),
            canReportSpam: Boolean(n),
            canAddContact: Boolean(s),
            canBlockContact: Boolean(a),
          };
        }
        function N(e) {
          return e instanceof u.Api.ChatReactionsAll
            ? {
                type: "all",
                areCustomAllowed: e.allowCustom,
              }
            : e instanceof u.Api.ChatReactionsSome
            ? {
                type: "some",
                allowed: e.reactions.map(_._9).filter(Boolean),
              }
            : void 0;
        }
        function q(e) {
          if (e instanceof u.Api.ForumTopicDeleted) return;
          const {
            id: t,
            my: n,
            closed: s,
            pinned: a,
            hidden: i,
            short: o,
            date: r,
            title: c,
            iconColor: d,
            iconEmojiId: l,
            topMessage: f,
            unreadCount: g,
            unreadMentionsCount: h,
            unreadReactionsCount: m,
            fromId: _,
            notifySettings: { silent: b, muteUntil: w },
          } = e;
          return {
            id: t,
            isClosed: s,
            isPinned: a,
            isHidden: i,
            isOwner: n,
            isMin: o,
            date: r,
            title: c,
            iconColor: d,
            iconEmojiId: l?.toString(),
            lastMessageId: f,
            unreadCount: g,
            unreadMentionsCount: h,
            unreadReactionsCount: m,
            fromId: (0, y.Zo)(_),
            isMuted: b || ("number" == typeof w ? (0, p.Fm)() < w : void 0),
            muteUntil: w,
          };
        }
        function O(e) {
          if (!(e instanceof u.Api.ExportedChatlistInvite)) return;
          const { title: t, url: n, peers: s } = e;
          return {
            title: t,
            url: n,
            peerIds: s.map(y.Zo).filter(Boolean),
          };
        }
        var H = n(15684),
          L = n(760);
        function G(e) {
          const {
              fullUser: {
                about: t,
                commonChatsCount: n,
                pinnedMsgId: s,
                botInfo: a,
                blocked: i,
                profilePhoto: o,
                voiceMessagesForbidden: r,
                premiumGifts: c,
                fallbackPhoto: d,
                personalPhoto: l,
                translationsDisabled: p,
                storiesPinnedAvailable: g,
              },
              users: m,
            } = e,
            _ = (0, y.ol)(m[0].id, "user");
          return {
            bio: t,
            commonChatsCount: n,
            pinnedMessageId: s,
            isBlocked: Boolean(i),
            noVoiceMessages: r,
            hasPinnedStories: Boolean(g),
            isTranslationDisabled: p,
            profilePhoto: o instanceof u.Api.Photo ? (0, h.rk)(o) : void 0,
            fallbackPhoto: d instanceof u.Api.Photo ? (0, h.rk)(d) : void 0,
            personalPhoto: l instanceof u.Api.Photo ? (0, h.rk)(l) : void 0,
            ...(c && {
              premiumGifts: c.map((e) =>
                (function (e) {
                  const { months: t, currency: n, amount: s, botUrl: a } = e;
                  return {
                    months: t,
                    currency: n,
                    amount: s.toJSNumber(),
                    botUrl: a,
                  };
                })(e)
              ),
            }),
            ...(a && {
              botInfo: (0, f.IY)(a, _),
            }),
          };
        }
        function j(e) {
          if (!(e instanceof u.Api.User)) return;
          const {
              id: t,
              firstName: n,
              lastName: s,
              fake: a,
              scam: i,
              support: o,
              closeFriend: r,
              storiesUnavailable: c,
              storiesMaxId: d,
            } = e,
            l =
              e.photo instanceof u.Api.UserProfilePhoto
                ? Boolean(e.photo.hasVideo)
                : void 0,
            p =
              e.photo instanceof u.Api.UserProfilePhoto
                ? String(e.photo.photoId)
                : void 0,
            f = (b = e).bot
              ? "userTypeBot"
              : b.deleted
              ? "userTypeDeleted"
              : b.userType instanceof u.Api.UserTypeNormal
              ? "userTypeRegular"
              : b.userType instanceof u.Api.UserTypeNotify
              ? "userTypeNotify"
              : b.userType instanceof u.Api.UserTypeBusiness
              ? "userTypeBusiness"
              : b.userType instanceof u.Api.UserTypeMxb
              ? "userTypeMxb"
              : b.userType instanceof u.Api.UserTypeUnknown
              ? "userTypeUnknown"
              : "userTypeRegular",
            g = (0, h._h)(e),
            m = e.emojiStatus ? z(e.emojiStatus) : void 0,
            _ =
              e.userType instanceof u.Api.UserTypeMxb
                ? e.userType.imCode
                : void 0;
          var b;
          return {
            id: (0, y.ol)(t, "user"),
            isMin: Boolean(e.min),
            fakeType: i ? "scam" : a ? "fake" : void 0,
            ...(e.self && {
              isSelf: !0,
            }),
            isPremium: Boolean(e.premium),
            ...(e.verified && {
              isVerified: !0,
            }),
            ...(r && {
              isCloseFriend: !0,
            }),
            ...(o && {
              isSupport: !0,
            }),
            ...((e.contact || e.mutualContact) && {
              isContact: !0,
            }),
            type: f,
            firstName: n,
            lastName: s,
            ...("userTypeBot" === f && {
              canBeInvitedToGroup: !e.botNochats,
            }),
            ...(g && {
              usernames: g,
            }),
            phoneNumber: e.phone || "",
            noStatus: !e.status,
            ...(e.accessHash && {
              accessHash: String(e.accessHash),
            }),
            ...(p && {
              avatarHash: p,
            }),
            emojiStatus: m,
            hasVideoAvatar: l,
            areStoriesHidden: Boolean(e.storiesHidden),
            maxStoryId: d,
            hasStories: Boolean(d) && !c,
            ...(e.bot &&
              e.botInlinePlaceholder && {
                botPlaceholder: e.botInlinePlaceholder,
              }),
            ...(e.bot &&
              e.botAttachMenu && {
                isAttachBot: e.botAttachMenu,
              }),
            color: e.color && (0, y.kD)(e.color),
            imCode: _,
          };
        }
        function W(e) {
          return !e || e instanceof u.Api.UserStatusEmpty
            ? {
                type: "userStatusEmpty",
              }
            : e instanceof u.Api.UserStatusOnline
            ? {
                type: "userStatusOnline",
                expires: e.expires,
              }
            : e instanceof u.Api.UserStatusOffline
            ? {
                type: "userStatusOffline",
                wasOnline: e.wasOnline,
              }
            : e instanceof u.Api.UserStatusRecently
            ? {
                type: "userStatusRecently",
              }
            : e instanceof u.Api.UserStatusLastWeek
            ? {
                type: "userStatusLastWeek",
              }
            : {
                type: "userStatusLastMonth",
              };
        }
        function z(e) {
          return e instanceof u.Api.EmojiStatus
            ? {
                documentId: e.documentId.toString(),
              }
            : e instanceof u.Api.EmojiStatusUntil
            ? {
                documentId: e.documentId.toString(),
                until: e.until,
              }
            : void 0;
        }
        function K(e) {
          const t = {},
            n = {};
          return (
            e.forEach((e) => {
              const s = j(e);
              if (!s) return;
              const a = n[s.id];
              (a && !a.isMin) || (n[s.id] = s),
                "status" in e && (t[s.id] = W(e.status));
            }),
            {
              users: Object.values(n),
              userStatusesById: t,
            }
          );
        }
        function $(e) {
          if (e instanceof u.Api.WallPaperNoFile) return;
          const { slug: t } = e,
            n = (0, H.Cc)(e.document);
          return n
            ? {
                slug: t,
                document: n,
              }
            : void 0;
        }
        function J(e) {
          return {
            isCurrent: Boolean(e.current),
            isOfficialApp: Boolean(e.officialApp),
            isPasswordPending: Boolean(e.passwordPending),
            hash: String(e.hash),
            areCallsEnabled: !e.callRequestsDisabled,
            areSecretChatsEnabled: !e.encryptedRequestsDisabled,
            isUnconfirmed: e.unconfirmed,
            ...(0, l.Up)(e, [
              "deviceModel",
              "platform",
              "systemVersion",
              "appName",
              "appVersion",
              "dateCreated",
              "dateActive",
              "ip",
              "country",
              "region",
            ]),
          };
        }
        function Z(e, t) {
          const { hidden: n, iso2: s, defaultName: a, name: i } = e,
            { countryCode: o, prefixes: r, patterns: c } = t || {};
          return {
            isHidden: n,
            iso2: s,
            defaultName: a,
            name: i,
            countryCode: o,
            prefixes: r,
            patterns: c,
          };
        }
        function Q(e) {
          if (!(e instanceof u.Api.JsonNull))
            return e instanceof u.Api.JsonString ||
              e instanceof u.Api.JsonBool ||
              e instanceof u.Api.JsonNumber
              ? e.value
              : e instanceof u.Api.JsonArray
              ? e.value.map(Q)
              : e.value.reduce((e, t) => ((e[t.key] = Q(t.value)), e), {});
        }
        function Y(e) {
          if (e instanceof u.Api.UrlAuthResultRequest) {
            const { bot: t, domain: n, requestWriteAccess: s } = e,
              a = j(t);
            if (!a) return;
            return (
              (0, c.xz)(t),
              {
                type: "request",
                domain: n,
                shouldRequestWriteAccess: s,
                bot: a,
              }
            );
          }
          return e instanceof u.Api.UrlAuthResultAccepted
            ? {
                type: "accepted",
                url: e.url,
              }
            : e instanceof u.Api.UrlAuthResultDefault
            ? {
                type: "default",
              }
            : void 0;
        }
        function X(e) {
          return e.strings.reduce((e, t) => ((e[t.key] = ee(t)), e), {});
        }
        function ee(e) {
          return e instanceof u.Api.LangPackString
            ? e.value
            : e instanceof u.Api.LangPackStringPluralized
            ? (0, l.cJ)((0, m._)(e), ["key"])
            : void 0;
        }
        function te(e, t) {
          if (t instanceof u.Api.StoryItemDeleted)
            return {
              id: t.id,
              peerId: e,
              isDeleted: !0,
            };
          if (t instanceof u.Api.StoryItemSkipped) {
            const { id: n, date: s, expireDate: a, closeFriends: i } = t;
            return {
              id: n,
              peerId: e,
              ...(i && {
                isForCloseFriends: !0,
              }),
              date: s,
              expireDate: a,
            };
          }
          const {
              edited: n,
              pinned: s,
              expireDate: a,
              id: i,
              date: o,
              caption: r,
              entities: c,
              media: d,
              privacy: l,
              views: p,
              public: f,
              noforwards: g,
              closeFriends: m,
              contacts: y,
              selectedContacts: b,
              mediaAreas: w,
              sentReaction: v,
              out: A,
              fwdFrom: S,
            } = t,
            I = {
              ...(0, H.jy)(d),
            };
          return (
            r && (I.text = (0, H.qR)(r, c)),
            {
              id: i,
              peerId: e,
              date: o,
              expireDate: a,
              content: I,
              ...(f && {
                isPublic: f,
              }),
              ...(n && {
                isEdited: !0,
              }),
              ...(s && {
                isPinned: !0,
              }),
              ...(y && {
                isForContacts: !0,
              }),
              ...(b && {
                isForSelectedContacts: !0,
              }),
              ...(m && {
                isForCloseFriends: !0,
              }),
              ...(g && {
                noForwards: !0,
              }),
              ...(p && {
                views: ne(p),
              }),
              ...(A && {
                isOut: !0,
              }),
              ...(l && {
                visibility: (0, h.gR)(l),
              }),
              ...(w && {
                mediaAreas: w.map(ie).filter(Boolean),
              }),
              ...(v && {
                sentReaction: (0, _._9)(v),
              }),
              ...(S && {
                forwardInfo: oe(S),
              }),
            }
          );
        }
        function ne(e) {
          return {
            viewsCount: e.viewsCount,
            forwardsCount: e.forwardsCount,
            reactionsCount: e.reactionsCount,
            ...(e?.reactions && {
              reactions: e.reactions.map(_.pT).filter(Boolean),
            }),
            ...(e?.recentViewers && {
              recentViewerIds: e.recentViewers.map((e) => (0, y.ol)(e, "user")),
            }),
          };
        }
        function se(e) {
          const {
            userId: t,
            date: n,
            reaction: s,
            blockedMyStoriesFrom: a,
            blocked: i,
          } = e;
          return {
            userId: t.toString(),
            date: n,
            ...(s && {
              reaction: (0, _._9)(s),
            }),
            areStoriesBlocked: i || a,
            isUserBlocked: i,
          };
        }
        function ae(e) {
          const { x: t, y: n, w: s, h: a, rotation: i } = e;
          return {
            x: t,
            y: n,
            width: s,
            height: a,
            rotation: i,
          };
        }
        function ie(e) {
          if (e instanceof u.Api.MediaAreaVenue) {
            const { geo: t, title: n, coordinates: s } = e,
              a = (0, H.Of)(t);
            if (!a) return;
            return {
              type: "venue",
              coordinates: ae(s),
              geo: a,
              title: n,
            };
          }
          if (e instanceof u.Api.MediaAreaGeoPoint) {
            const { geo: t, coordinates: n } = e,
              s = (0, H.Of)(t);
            if (!s) return;
            return {
              type: "geoPoint",
              coordinates: ae(n),
              geo: s,
            };
          }
          if (e instanceof u.Api.MediaAreaSuggestedReaction) {
            const { coordinates: t, reaction: n, dark: s, flipped: a } = e,
              i = (0, _._9)(n);
            if (!i) return;
            return {
              type: "suggestedReaction",
              coordinates: ae(t),
              reaction: i,
              ...(s && {
                isDark: !0,
              }),
              ...(a && {
                isFlipped: !0,
              }),
            };
          }
        }
        function oe(e) {
          const { from: t, fromName: n, storyId: s } = e;
          return {
            storyId: s,
            fromPeerId: t && (0, y.Zo)(t),
            fromName: n,
          };
        }
        var re = n(82971),
          ce = n(59510);
        const de = new Map(),
          ue = [],
          le = (e, t) => {
            const n = e.topicId ? `${e.chatId}-${e.topicId}` : e.chatId;
            if (
              (de.has(n) && (clearTimeout(de.get(n)), de.delete(n)),
              e.muteUntil === a.fRl || e.muteUntil <= (0, p.Fm)())
            )
              return;
            if (
              (ue.push(e),
              ue.sort((e, t) => t.muteUntil - e.muteUntil),
              !ue.pop())
            )
              return;
            const s = setTimeout(() => {
              if ((t(), ue.length)) {
                const e = ue.pop();
                e && le(e, t);
              }
            }, 1e3 * (e.muteUntil - (0, p.Fm)()));
            de.set(n, s);
          };
        function pe(e) {
          let t = arguments.length > 2 ? arguments[2] : void 0;
          le(
            {
              chatId: e,
              muteUntil:
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
            },
            () =>
              t({
                "@type": "updateNotifyExceptions",
                chatId: e,
                isMuted: !1,
              })
          );
        }
        const fe = 1e3;
        let ge;
        const he = new Set();
        function me(e) {
          e
            .filter((e) => e instanceof u.Api.User)
            .map(j)
            .forEach((e) => {
              e &&
                ge({
                  "@type": "updateUser",
                  id: e.id,
                  user: e,
                });
            }),
            e
              .filter(
                (e) =>
                  e instanceof u.Api.Chat ||
                  e instanceof u.Api.ChatForbidden ||
                  e instanceof u.Api.Channel ||
                  e instanceof u.Api.ChannelForbidden
              )
              .map((e) => I(e))
              .forEach((e) => {
                e &&
                  ge({
                    "@type": "updateChat",
                    id: e.id,
                    chat: e,
                  });
              });
        }
        function ye(e) {
          const t = (0, l.oE)(e).map(L.I3).filter(Boolean);
          t.length &&
            ge({
              "@type": "updateThreadInfos",
              threadInfoUpdates: t,
            });
        }
        function _e(e) {
          ge(e);
        }
        function be(e) {
          if (e instanceof u.connection.UpdateServerTimeOffset)
            (0, p.SH)(e.timeOffset),
              ge({
                "@type": "updateServerTimeOffset",
                serverTimeOffset: e.timeOffset,
              });
          else if (e instanceof u.connection.UpdateConnectionState) {
            let t;
            switch (e.state) {
              case u.connection.UpdateConnectionState.disconnected:
                t = "connectionStateConnecting";
                break;
              case u.connection.UpdateConnectionState.broken:
                t = "connectionStateBroken";
                break;
              case u.connection.UpdateConnectionState.connected:
              default:
                t = "connectionStateReady";
            }
            ge({
              "@type": "updateConnectionState",
              connectionState: t,
            });
          } else if (
            e instanceof u.Api.UpdateNewMessage ||
            e instanceof u.Api.UpdateNewScheduledMessage ||
            e instanceof u.Api.UpdateNewChannelMessage ||
            e instanceof u.Api.UpdateShortChatMessage ||
            e instanceof u.Api.UpdateShortMessage
          ) {
            let t, n;
            const s = e._entities;
            if (
              (s && ((0, c.JV)(s), me(s)),
              e instanceof u.Api.UpdateShortChatMessage)
            )
              t = (0, L.ch)(e);
            else if (e instanceof u.Api.UpdateShortMessage) t = (0, L._V)(e);
            else {
              if (e.message instanceof u.Api.MessageEmpty)
                return void (
                  a.Oig && console.error("Unexpected update:", e.className, e)
                );
              ((e.message instanceof u.Api.Message && (0, ce.ot)(e.message)) ||
                (e.message instanceof u.Api.MessageService &&
                  e.message.action instanceof
                    u.Api.MessageActionSuggestProfilePhoto)) &&
                (0, c.NZ)(e.message),
                (t = (0, L.Ep)(e.message)),
                ye([e.message]),
                (n =
                  "replyMarkup" in e.message &&
                  e.message?.replyMarkup instanceof
                    u.Api.ReplyKeyboardForceReply &&
                  (!e.message.replyMarkup.selective || t.isMentioned));
            }
            if (e instanceof u.Api.UpdateNewScheduledMessage)
              ge({
                "@type": he.has(t.id)
                  ? "updateScheduledMessage"
                  : "newScheduledMessage",
                id: t.id,
                chatId: t.chatId,
                message: t,
              });
            else {
              const e = he.has(t.id) && !t.viaBotId && !t.content.action;
              ge({
                "@type": e ? "updateMessage" : "newMessage",
                id: t.id,
                chatId: t.chatId,
                message: t,
                shouldForceReply: n,
              });
            }
            if (e.message instanceof u.Api.MessageService) {
              const { action: n } = e.message;
              if (n instanceof u.Api.MessageActionPaymentSent)
                ge({
                  "@type": "updatePaymentStateCompleted",
                  slug: n.invoiceSlug,
                });
              else if (n instanceof u.Api.MessageActionChatEditTitle)
                ge({
                  "@type": "updateChat",
                  id: t.chatId,
                  chat: {
                    title: n.title,
                  },
                });
              else if (n instanceof u.Api.MessageActionChatEditPhoto) {
                const s = (0, ce.xB)(n.photo),
                  a = R(s),
                  i = (0, c.TN)(e.message);
                d.Ay.chats[i] && (d.Ay.chats[i].photo = s),
                  (0, c.Kv)(n.photo),
                  a &&
                    ge({
                      "@type": "updateChat",
                      id: t.chatId,
                      chat: {
                        avatarHash: a,
                      },
                      ...(n.photo instanceof u.Api.Photo && {
                        newProfilePhoto: (0, h.rk)(n.photo),
                      }),
                    });
              } else if (n instanceof u.Api.MessageActionChatDeletePhoto) {
                const n = (0, c.TN)(e.message);
                d.Ay.chats[n] &&
                  (d.Ay.chats[n].photo = new u.Api.ChatPhotoEmpty()),
                  ge({
                    "@type": "updateChat",
                    id: t.chatId,
                    chat: {
                      avatarHash: void 0,
                    },
                  });
              } else if (n instanceof u.Api.MessageActionChatDeleteUser)
                e._entities &&
                  e._entities.some(
                    (e) =>
                      e instanceof u.Api.User &&
                      Boolean(e.self) &&
                      e.id === n.userId
                  ) &&
                  ge({
                    "@type": "updateChat",
                    id: t.chatId,
                    chat: {
                      isForbidden: !0,
                      isNotJoined: !0,
                    },
                  }),
                  ge({
                    "@type": "updateChatMembers",
                    id: t.chatId,
                    deletedMemberId: (0, y.ol)(n.userId, "user"),
                  });
              else if (n instanceof u.Api.MessageActionChatAddUser)
                e._entities &&
                  e._entities.some(
                    (e) =>
                      e instanceof u.Api.User &&
                      Boolean(e.self) &&
                      n.users.includes(e.id)
                  ) &&
                  ge({
                    "@type": "updateChatJoin",
                    id: t.chatId,
                  });
              else if (n instanceof u.Api.MessageActionGroupCall)
                !n.duration &&
                  n.call &&
                  ge({
                    "@type": "updateGroupCallChatId",
                    chatId: t.chatId,
                    call: {
                      id: n.call.id.toString(),
                      accessHash: n.call.accessHash.toString(),
                    },
                  });
              else if (n instanceof u.Api.MessageActionTopicEdit) {
                const t =
                    e.message.replyTo instanceof u.Api.MessageReplyHeader
                      ? e.message.replyTo
                      : void 0,
                  { replyToMsgId: n, replyToTopId: s, forumTopic: i } = t || {},
                  o = (i && (s || n)) || a.HxB;
                ge({
                  "@type": "updateTopic",
                  chatId: (0, y.Zo)(e.message.peerId),
                  topicId: o,
                });
              } else
                n instanceof u.Api.MessageActionTopicCreate &&
                  ge({
                    "@type": "updateTopics",
                    chatId: (0, y.Zo)(e.message.peerId),
                  });
            }
          } else if (
            e instanceof u.Api.UpdateEditMessage ||
            e instanceof u.Api.UpdateEditChannelMessage
          ) {
            if (e.message instanceof u.Api.MessageEmpty)
              return void (
                a.Oig && console.error("Unexpected update:", e.className, e)
              );
            e.message instanceof u.Api.Message &&
              (0, ce.ot)(e.message) &&
              (0, c.NZ)(e.message);
            const t = (0, l.cJ)((0, L.Ep)(e.message), ["isOutgoing"]);
            ye([e.message]),
              ge({
                "@type": "updateMessage",
                id: t.id,
                chatId: t.chatId,
                message: t,
              });
          } else if (e instanceof u.Api.UpdateMessageReactions)
            ge({
              "@type": "updateMessageReactions",
              id: e.msgId,
              chatId: (0, y.Zo)(e.peer),
              reactions: (0, _.uV)(e.reactions),
            });
          else if (e instanceof u.Api.UpdateMessageExtendedMedia) {
            let t, n;
            if (
              (e.extendedMedia instanceof u.Api.MessageExtendedMedia &&
                (t = (0, H.jy)(e.extendedMedia.media)),
              e.extendedMedia instanceof u.Api.MessageExtendedMediaPreview &&
                (n = (0, H.RK)(e.extendedMedia)),
              !t && !n)
            )
              return;
            const s = (0, y.Zo)(e.peer);
            (0, c.KK)(s, e.msgId, e.extendedMedia),
              ge({
                "@type": "updateMessageExtendedMedia",
                id: e.msgId,
                chatId: s,
                media: t,
                preview: n,
              });
          } else if (e instanceof u.Api.UpdateDeleteMessages)
            ge({
              "@type": "deleteMessages",
              ids: e.messages,
            });
          else if (e instanceof u.Api.UpdateDeleteScheduledMessages)
            ge({
              "@type": "deleteScheduledMessages",
              ids: e.messages,
              chatId: (0, y.Zo)(e.peer),
            });
          else if (e instanceof u.Api.UpdateDeleteChannelMessages) {
            const t = (0, y.ol)(e.channelId, "channel"),
              n = e.messages,
              s = n.filter((e) => d.Ay.messages[`${t}-${e}`]),
              a = n.filter((e) => !d.Ay.messages[`${t}-${e}`]),
              i = n
                .map((e) => {
                  const n = d.Ay.messages[`${t}-${e}`];
                  return n &&
                    n instanceof u.Api.MessageService &&
                    "photo" in n.action
                    ? String(n.action.photo.id)
                    : void 0;
                })
                .filter(Boolean);
            s.length &&
              ge({
                "@type": "deleteMessages",
                ids: s,
                chatId: t,
              }),
              i.length &&
                ge({
                  "@type": "deleteProfilePhotos",
                  ids: i,
                  chatId: t,
                }),
              a.length &&
                setTimeout(() => {
                  ge({
                    "@type": "deleteMessages",
                    ids: a,
                    chatId: t,
                  });
                }, fe);
          } else if (e instanceof u.Api.UpdateServiceNotification)
            if (e.popup)
              ge({
                "@type": "error",
                error: {
                  message: e.message,
                },
              });
            else {
              const t = Date.now() / 1e3 + (0, p.SF)(),
                n = (0, L.zQ)(e, t);
              (0, ce.ot)(e) && (0, c.NZ)((0, ce.dd)(n.id, n.chatId, e)),
                ge({
                  "@type": "updateServiceNotification",
                  message: n,
                });
            }
          else if (
            e instanceof u.Api.UpdateMessageID ||
            e instanceof u.Api.UpdateShortSentMessage
          )
            he.add(e.id);
          else if (e instanceof u.Api.UpdateReadMessagesContents)
            ge({
              "@type": "updateCommonBoxMessages",
              ids: e.messages,
              messageUpdate: {
                hasUnreadMention: !1,
                isMediaUnread: !1,
              },
            });
          else if (e instanceof u.Api.UpdateChannelReadMessagesContents)
            ge({
              "@type": "updateChannelMessages",
              channelId: (0, y.ol)(e.channelId, "channel"),
              ids: e.messages,
              messageUpdate: {
                hasUnreadMention: !1,
                isMediaUnread: !1,
              },
            });
          else if (e instanceof u.Api.UpdateMessagePoll) {
            const { pollId: t, poll: n, results: s } = e;
            if (n) {
              const e = (0, H.o8)(n, s);
              ge({
                "@type": "updateMessagePoll",
                pollId: String(t),
                pollUpdate: e,
              });
            } else {
              const e = (0, H.kf)(s);
              ge({
                "@type": "updateMessagePoll",
                pollId: String(t),
                pollUpdate: {
                  results: e,
                },
              });
            }
          } else if (e instanceof u.Api.UpdateMessagePollVote)
            ge({
              "@type": "updateMessagePollVote",
              pollId: String(e.pollId),
              peerId: (0, y.Zo)(e.peer),
              options: e.options.map(c.A9),
            });
          else if (e instanceof u.Api.UpdateChannelMessageViews)
            ge({
              "@type": "updateMessage",
              chatId: (0, y.ol)(e.channelId, "channel"),
              id: e.id,
              message: {
                viewsCount: e.views,
              },
            });
          else if (e instanceof u.Api.UpdateReadHistoryInbox)
            ge({
              "@type": "updateChatInbox",
              id: (0, y.Zo)(e.peer),
              chat: {
                lastReadInboxMessageId: e.maxId,
                unreadCount: e.stillUnreadCount,
              },
            });
          else if (e instanceof u.Api.UpdateReadHistoryOutbox)
            ge({
              "@type": "updateChat",
              id: (0, y.Zo)(e.peer),
              chat: {
                lastReadOutboxMessageId: e.maxId,
              },
            });
          else if (e instanceof u.Api.UpdateReadChannelInbox)
            ge({
              "@type": "updateChat",
              id: (0, y.ol)(e.channelId, "channel"),
              chat: {
                lastReadInboxMessageId: e.maxId,
                unreadCount: e.stillUnreadCount,
              },
            });
          else if (e instanceof u.Api.UpdateReadChannelOutbox)
            ge({
              "@type": "updateChat",
              id: (0, y.ol)(e.channelId, "channel"),
              chat: {
                lastReadOutboxMessageId: e.maxId,
              },
            });
          else if (e instanceof u.Api.UpdateReadChannelDiscussionInbox)
            ge({
              "@type": "updateThreadInfos",
              threadInfoUpdates: [
                {
                  chatId: (0, y.ol)(e.channelId, "channel"),
                  threadId: e.topMsgId,
                  lastReadInboxMessageId: e.readMaxId,
                },
              ],
            });
          else if (e instanceof u.Api.UpdateReadChannelDiscussionOutbox)
            ge({
              "@type": "updateChat",
              id: (0, y.ol)(e.channelId, "channel"),
              chat: {
                lastReadOutboxMessageId: e.readMaxId,
              },
            });
          else if (
            e instanceof u.Api.UpdateDialogPinned &&
            e.peer instanceof u.Api.DialogPeer
          )
            ge({
              "@type": "updateChatPinned",
              id: (0, y.Zo)(e.peer.peer),
              isPinned: e.pinned || !1,
            });
          else if (e instanceof u.Api.UpdatePinnedDialogs) {
            const t = e.order
              ? e.order
                  .filter((e) => e instanceof u.Api.DialogPeer)
                  .map((e) => (0, y.Zo)(e.peer))
              : [];
            ge({
              "@type": "updatePinnedChatIds",
              ids: t,
              folderId: e.folderId || void 0,
            });
          } else if (e instanceof u.Api.UpdateFolderPeers)
            e.folderPeers.forEach((e) => {
              const { folderId: t, peer: n } = e;
              ge({
                "@type": "updateChatListType",
                id: (0, y.Zo)(n),
                folderId: t,
              });
            });
          else if (e instanceof u.Api.UpdateDialogFilter) {
            const { id: t, filter: n } = e,
              s = (0, c.V1)(n) ? D(n) : void 0;
            ge({
              "@type": "updateChatFolder",
              id: t,
              folder: s,
            });
          } else if (e instanceof u.Api.UpdateDialogFilterOrder)
            ge({
              "@type": "updateChatFoldersOrder",
              orderedIds: e.order,
            });
          else if (e instanceof u.Api.UpdateChatParticipants) {
            const t = T(e.participants);
            ge({
              "@type": "updateChatMembers",
              id: (0, y.ol)(e.participants.chatId, "chat"),
              replacedMembers: t,
            });
          } else if (e instanceof u.Api.UpdateChatParticipantAdd) {
            const t = E((0, l.Up)(e, ["userId", "inviterId", "date"]));
            ge({
              "@type": "updateChatMembers",
              id: (0, y.ol)(e.chatId, "chat"),
              addedMember: t,
            });
          } else if (e instanceof u.Api.UpdateChatParticipantDelete)
            ge({
              "@type": "updateChatMembers",
              id: (0, y.ol)(e.chatId, "chat"),
              deletedMemberId: (0, y.ol)(e.userId, "user"),
            });
          else if (
            e instanceof u.Api.UpdatePinnedMessages ||
            e instanceof u.Api.UpdatePinnedChannelMessages
          ) {
            const t =
              e instanceof u.Api.UpdatePinnedMessages
                ? (0, y.Zo)(e.peer)
                : (0, y.ol)(e.channelId, "channel");
            ge({
              "@type": "updatePinnedIds",
              chatId: t,
              messageIds: e.messages,
              isPinned: e.pinned,
            });
          } else if (
            e instanceof u.Api.UpdateNotifySettings &&
            e.peer instanceof u.Api.NotifyPeer
          ) {
            const t = (function (e, t) {
              const {
                  silent: n,
                  muteUntil: s,
                  showPreviews: a,
                  otherSound: i,
                } = e,
                o = Boolean(i && !(i instanceof u.Api.NotificationSoundNone));
              return {
                chatId: (0, y.Zo)(t),
                isMuted: n || ("number" == typeof s && (0, p.Fm)() < s),
                ...(!o && {
                  isSilent: !0,
                }),
                ...(void 0 !== a && {
                  shouldShowPreviews: Boolean(a),
                }),
                muteUntil: s,
              };
            })(e.notifySettings, e.peer.peer);
            pe(t.chatId, t.muteUntil, ge),
              ge({
                "@type": "updateNotifyExceptions",
                ...t,
              });
          } else if (
            e instanceof u.Api.UpdateNotifySettings &&
            e.peer instanceof u.Api.NotifyForumTopic
          ) {
            const t = (function (e, t, n) {
              const {
                  silent: s,
                  muteUntil: a,
                  showPreviews: i,
                  otherSound: o,
                } = e,
                r = Boolean(o && !(o instanceof u.Api.NotificationSoundNone));
              return {
                chatId: (0, y.Zo)(t),
                topicId: n,
                isMuted: s || ("number" == typeof a && (0, p.Fm)() < a),
                ...(!r && {
                  isSilent: !0,
                }),
                ...(void 0 !== i && {
                  shouldShowPreviews: Boolean(i),
                }),
                muteUntil: a,
              };
            })(e.notifySettings, e.peer.peer, e.peer.topMsgId);
            !(function (e, t) {
              let n = arguments.length > 3 ? arguments[3] : void 0;
              le(
                {
                  chatId: e,
                  topicId: t,
                  muteUntil:
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                },
                () =>
                  n({
                    "@type": "updateTopicNotifyExceptions",
                    chatId: e,
                    topicId: t,
                    isMuted: !1,
                  })
              );
            })(t.chatId, t.topicId, t.muteUntil, ge),
              ge({
                "@type": "updateTopicNotifyExceptions",
                ...t,
              });
          } else if (
            e instanceof u.Api.UpdateUserTyping ||
            e instanceof u.Api.UpdateChatUserTyping
          ) {
            const t =
              e instanceof u.Api.UpdateUserTyping
                ? (0, y.ol)(e.userId, "user")
                : (0, y.ol)(e.chatId, "chat");
            e.action instanceof u.Api.SendMessageEmojiInteraction
              ? ge({
                  "@type": "updateStartEmojiInteraction",
                  id: t,
                  emoji: e.action.emoticon,
                  messageId: e.action.msgId,
                  interaction: (0, re.Xg)(
                    JSON.parse(e.action.interaction.data)
                  ),
                })
              : ge({
                  "@type": "updateChatTypingStatus",
                  id: t,
                  typingStatus: B(e),
                });
          } else if (e instanceof u.Api.UpdateChannelUserTyping) {
            const t = (0, y.ol)(e.channelId, "channel");
            ge({
              "@type": "updateChatTypingStatus",
              id: t,
              threadId: e.topMsgId,
              typingStatus: B(e),
            });
          } else if (e instanceof u.Api.UpdateChannel) {
            const { _entities: t } = e;
            if (!t) return;
            const n = t.find(
              (e) =>
                e instanceof u.Api.Channel ||
                e instanceof u.Api.ChannelForbidden
            );
            if (n instanceof u.Api.Channel) {
              const t = I(n);
              t &&
                (ge({
                  "@type": "updateChat",
                  id: t.id,
                  chat: t,
                }),
                ge({
                  "@type": t.isNotJoined ? "updateChatLeave" : "updateChatJoin",
                  id: (0, y.ol)(e.channelId, "channel"),
                }));
            } else if (n instanceof u.Api.ChannelForbidden) {
              const t = (0, y.ol)(e.channelId, "channel");
              ge({
                "@type": "updateChat",
                id: t,
                chat: {
                  isRestricted: !0,
                },
              }),
                ge({
                  "@type": "updateChatLeave",
                  id: t,
                });
            } else
              0 === t.length &&
                ge({
                  "@type": "resetMessages",
                  id: (0, y.ol)(e.channelId, "channel"),
                });
          } else if (
            e instanceof u.Api.UpdateDialogUnreadMark &&
            e.peer instanceof u.Api.DialogPeer
          )
            ge({
              "@type": "updateChat",
              id: (0, y.Zo)(e.peer.peer),
              chat: {
                hasUnreadMark: e.unread,
              },
            });
          else if (e instanceof u.Api.UpdateChatDefaultBannedRights)
            ge({
              "@type": "updateChat",
              id: (0, y.Zo)(e.peer),
              chat: {
                defaultBannedRights: (0, m._)(e.defaultBannedRights),
              },
            });
          else if (e instanceof u.Api.UpdateUserStatus)
            ge({
              "@type": "updateUserStatus",
              userId: (0, y.ol)(e.userId, "user"),
              status: W(e.status),
            });
          else if (e instanceof u.Api.UpdateUser)
            ge({
              "@type": "updateRequestUserUpdate",
              id: (0, y.ol)(e.userId, "user"),
            });
          else if (e instanceof u.Api.UpdateUserEmojiStatus) {
            const t = z(e.emojiStatus);
            ge({
              "@type": "updateUserEmojiStatus",
              userId: (0, y.ol)(e.userId, "user"),
              emojiStatus: t,
            });
          } else if (e instanceof u.Api.UpdateUserName) {
            const t = (0, y.ol)(e.userId, "user"),
              n = d.Ay.users[t],
              s =
                n?.mutualContact && !n.self
                  ? (0, l.Up)(e, [])
                  : (0, l.Up)(e, ["firstName", "lastName"]),
              a = (0, h._h)(e);
            ge({
              "@type": "updateUser",
              id: t,
              user: {
                ...s,
                usernames: a,
              },
            });
          } else if (e instanceof u.Api.UpdateUserPhone) {
            const { userId: t, phone: n } = e;
            ge({
              "@type": "updateUser",
              id: (0, y.ol)(t, "user"),
              user: {
                phoneNumber: n,
              },
            });
          } else if (e instanceof u.Api.UpdatePeerSettings) {
            const { _entities: t, settings: n } = e;
            if (!t) return;
            t?.length &&
              (t
                .filter((e) => e instanceof u.Api.User && !e.contact)
                .forEach((e) => {
                  ge({
                    "@type": "deleteContact",
                    id: (0, y.ol)(e.id, "user"),
                  });
                }),
              t
                .filter((e) => e instanceof u.Api.User && e.contact)
                .map(j)
                .forEach((e) => {
                  e &&
                    ge({
                      "@type": "updateUser",
                      id: e.id,
                      user: {
                        ...e,
                        ...(n && {
                          settings: F(n),
                        }),
                      },
                    });
                }));
          } else if (e instanceof u.Api.UpdateNotifySettings) {
            const {
                notifySettings: { showPreviews: t, silent: n, muteUntil: s },
                peer: { className: a },
              } = e,
              i =
                "NotifyUsers" === a
                  ? "contact"
                  : "NotifyChats" === a
                  ? "group"
                  : "NotifyBroadcasts" === a
                  ? "broadcast"
                  : void 0;
            if (!i) return;
            ge({
              "@type": "updateNotifySettings",
              peerType: i,
              isSilent: Boolean(
                n ||
                  ("number" == typeof s &&
                    Date.now() + 1e3 * (0, p.SF)() < 1e3 * s)
              ),
              shouldShowPreviews: Boolean(t),
            });
          } else if (e instanceof u.Api.UpdatePeerBlocked)
            ge({
              "@type": "updatePeerBlocked",
              id: (0, y.Zo)(e.peerId),
              isBlocked: e.blocked,
              isBlockedFromStories: e.blockedMyStoriesFrom,
            });
          else if (e instanceof u.Api.UpdatePrivacy) {
            const t = (function (e) {
              switch (e.className) {
                case "PrivacyKeyPhoneNumber":
                  return "phoneNumber";
                case "PrivacyKeyAddedByPhone":
                  return "addByPhone";
                case "PrivacyKeyStatusTimestamp":
                  return "lastSeen";
                case "PrivacyKeyProfilePhoto":
                  return "profilePhoto";
                case "PrivacyKeyPhoneCall":
                  return "phoneCall";
                case "PrivacyKeyPhoneP2P":
                  return "phoneP2P";
                case "PrivacyKeyForwards":
                  return "forwards";
                case "PrivacyKeyVoiceMessages":
                  return "voiceMessages";
                case "PrivacyKeyChatInvite":
                  return "chatInvite";
              }
            })(e.key);
            t &&
              ge({
                "@type": "updatePrivacy",
                key: t,
                rules: (0, h.gR)(e.rules),
              });
          } else if (e instanceof u.Api.UpdateDraftMessage)
            ge({
              "@type": "draftMessage",
              chatId: (0, y.Zo)(e.peer),
              threadId: e.topMsgId,
              draft: (0, L.T9)(e.draft),
            });
          else if (e instanceof u.Api.UpdateContactsReset)
            ge({
              "@type": "updateResetContactList",
            });
          else if (e instanceof u.Api.UpdateFavedStickers)
            ge({
              "@type": "updateFavoriteStickers",
            });
          else if (e instanceof u.Api.UpdateRecentStickers)
            ge({
              "@type": "updateRecentStickers",
            });
          else if (e instanceof u.Api.UpdateRecentReactions)
            ge({
              "@type": "updateRecentReactions",
            });
          else if (e instanceof u.Api.UpdateMoveStickerSetToTop)
            e.masks ||
              ge({
                "@type": "updateMoveStickerSetToTop",
                isCustomEmoji: e.emojis,
                id: e.stickerset.toString(),
              });
          else if (e instanceof u.Api.UpdateStickerSets)
            ge({
              "@type": "updateStickerSets",
            });
          else if (e instanceof u.Api.UpdateStickerSetsOrder)
            e.masks ||
              ge({
                "@type": "updateStickerSetsOrder",
                order: e.order.map((e) => e.toString()),
                isCustomEmoji: e.emojis,
              });
          else if (e instanceof u.Api.UpdateNewStickerSet) {
            if (e.stickerset instanceof u.Api.messages.StickerSet) {
              const t = (0, re.uL)(e.stickerset.set);
              ge({
                "@type": "updateStickerSet",
                id: t.id,
                stickerSet: t,
              });
            }
          } else if (e instanceof u.Api.UpdateSavedGifs)
            ge({
              "@type": "updateSavedGifs",
            });
          else if (e instanceof u.Api.UpdateGroupCall) {
            const t = e._entities;
            t && ((0, c.JV)(t), me(t)),
              ge({
                "@type": "updateGroupCall",
                call: (0, g.Av)(e.call),
              });
          } else if (e instanceof u.Api.UpdateGroupCallConnection)
            ge({
              "@type": "updateGroupCallConnection",
              data: JSON.parse(e.params.data),
              presentation: Boolean(e.presentation),
            });
          else if (e instanceof u.Api.UpdateGroupCallParticipants) {
            const t = e._entities;
            t && ((0, c.JV)(t), me(t)),
              ge({
                "@type": "updateGroupCallParticipants",
                groupCallId: (0, g.bY)(e.call),
                participants: e.participants.map(g.ZQ),
              });
          } else if (e instanceof u.Api.UpdatePendingJoinRequests) {
            const t = e._entities;
            t && ((0, c.JV)(t), me(t)),
              ge({
                "@type": "updatePendingJoinRequests",
                chatId: (0, y.Zo)(e.peer),
                recentRequesterIds: e.recentRequesters.map((e) =>
                  (0, y.ol)(e, "user")
                ),
                requestsPending: e.requestsPending,
              });
          } else if (e instanceof u.Api.UpdatePhoneCall) {
            const t = e._entities;
            t && ((0, c.JV)(t), me(t)),
              ge({
                "@type": "updatePhoneCall",
                call: (0, g.lo)(e.phoneCall),
              });
          } else if (e instanceof u.Api.UpdatePhoneCallSignalingData)
            ge({
              "@type": "updatePhoneCallSignalingData",
              callId: e.phoneCallId.toString(),
              data: Array.from(e.data),
            });
          else if (e instanceof u.Api.UpdateWebViewResultSent) {
            const { queryId: t } = e;
            ge({
              "@type": "updateWebViewResultSent",
              queryId: t.toString(),
            });
          } else if (e instanceof u.Api.UpdateBotMenuButton) {
            const { botId: t, button: n } = e,
              s = (0, y.ol)(t, "user");
            ge({
              "@type": "updateBotMenuButton",
              botId: s,
              button: (0, f.zp)(n),
            });
          } else if (e instanceof u.Api.UpdateTranscribedAudio) {
            const t = e._entities;
            t && ((0, c.JV)(t), me(t)),
              ge({
                "@type": "updateTranscribedAudio",
                transcriptionId: e.transcriptionId.toString(),
                text: e.text,
                isPending: e.pending,
              });
          } else if (e instanceof u.Api.UpdateConfig) {
            const t = e._entities;
            t && ((0, c.JV)(t), me(t)),
              ge({
                "@type": "updateConfig",
              });
          } else if (e instanceof u.Api.UpdateChannelPinnedTopic)
            ge({
              "@type": "updatePinnedTopic",
              chatId: (0, y.ol)(e.channelId, "channel"),
              topicId: e.topicId,
              isPinned: Boolean(e.pinned),
            });
          else if (e instanceof u.Api.UpdateChannelPinnedTopics)
            ge({
              "@type": "updatePinnedTopicsOrder",
              chatId: (0, y.ol)(e.channelId, "channel"),
              order: e.order || [],
            });
          else if (e instanceof u.Api.UpdateRecentEmojiStatuses)
            ge({
              "@type": "updateRecentEmojiStatuses",
            });
          else {
            if (e instanceof u.Api.UpdateStory) return;
            if (e instanceof u.Api.UpdateReadStories) return;
            if (e instanceof u.Api.UpdateSentStoryReaction) return;
            if (e instanceof u.Api.UpdateStoriesStealthMode) return;
            if (e instanceof u.Api.UpdateAttachMenuBots)
              ge({
                "@type": "updateAttachMenuBots",
              });
            else if (e instanceof u.Api.UpdateNewAuthorization)
              ge({
                "@type": "updateNewAuthorization",
                hash: e.hash.toString(),
                date: e.date,
                device: e.device,
                location: e.location,
                isUnconfirmed: e.unconfirmed,
              });
            else if (e instanceof u.Api.UpdateChannelViewForumAsMessages)
              ge({
                "@type": "updateViewForumAsMessages",
                chatId: (0, y.ol)(e.channelId, "channel"),
                isEnabled: !!e.enabled || void 0,
              });
            else if (e instanceof u.Api.UpdateLangPackTooLong)
              ge({
                "@type": "updateLangPack",
                langCode: e.langCode,
              });
            else if (e instanceof u.Api.update.ThirdParty)
              ge({
                "@type": "updateThirdParty",
                message: e.message,
              });
            else if (e?.serverSalt)
              ge({
                "@type": "updateServerSalt",
                serverSalt: e.serverSalt,
              });
            else if (
              e instanceof u.Api.UpdateNewStickerSet ||
              e instanceof u.Api.UpdateStickerSets
            )
              ge({
                "@type": "updateStickerSets",
              });
            else if (e instanceof u.Api.UpdateWebPage)
              ge({
                "@type": "updateWebPage",
                webPage: (0, H.EZ)(e),
              });
            else if (a.Oig) {
              const t =
                "object" == typeof e && "className" in e ? e.className : e;
              (0, c.Rm)("UNEXPECTED UPDATE", t);
            }
          }
        }
        var we = n(26462),
          ve = n.n(we),
          Ae = n(4681),
          Se = n(51227);
        class Ie {
          constructor(e) {
            var t, n, s;
            (this.comparator = e),
              (t = this),
              (s = void 0),
              (n = (function (e) {
                var t = (function (e) {
                  if ("object" != typeof e || !e) return e;
                  var t = e[Symbol.toPrimitive];
                  if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != typeof n) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : t + "";
              })((n = "queue"))) in t
                ? Object.defineProperty(t, n, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = s),
              (this.queue = []);
          }
          add(e) {
            const t = this.binarySearch(e);
            this.queue.splice(t, 0, e);
          }
          pop() {
            return this.queue.shift();
          }
          get size() {
            return this.queue.length;
          }
          clear() {
            this.queue = [];
          }
          binarySearch(e) {
            let t = 0,
              n = this.queue.length;
            for (; t < n; ) {
              const s = Math.floor((t + n) / 2),
                a = this.comparator(e, this.queue[s]);
              if (0 === a) return s;
              a > 0 ? (t = s + 1) : (n = s);
            }
            return t;
          }
        }
        const Ce = "0",
          Pe = 1e3,
          Me = 500,
          ke = 30;
        let Re,
          Ee,
          Te = !1;
        const Be = new Map(),
          De = new Ie(function (e, t) {
            return (
              ("seqStart" in e ? e.seqStart : e.seq) -
              ("seqStart" in t ? t.seqStart : t.seq)
            );
          }),
          Ue = new Map();
        function xe(e) {
          (d.Ay.commonBoxState.seq = e.seq),
            (d.Ay.commonBoxState.date = e.date),
            (d.Ay.commonBoxState.pts = e.pts),
            (d.Ay.commonBoxState.qts = e.qts);
        }
        function Ve(e, t, n) {
          if (
            ("users" in e && ((0, c.JV)(e.users), me(e.users)),
            "chats" in e && ((0, c.JV)(e.chats), me(e.chats)),
            e instanceof Se.UpdateConnectionState)
          )
            return (
              e.state === Se.UpdateConnectionState.connected && Te && Le(),
              void be(e)
            );
          if (e instanceof Se.UpdateServerTimeOffset) be(e);
          else if (void 0 !== d.Ay.commonBoxState.seq) {
            if (
              e instanceof u.Api.Updates ||
              e instanceof u.Api.UpdatesCombined
            )
              return (
                t && (e._isFromDifference = !0),
                void (function (e, t) {
                  De.add(e), t || qe();
                })(e, n)
              );
            if (("stillUnreadCount" in e && be(e), "pts" in e))
              return e instanceof u.Api.UpdateChannelTooLong
                ? void We(Ge(e))
                : (t && (e._isFromDifference = !0),
                  void (function (e, t) {
                    const n = Ge(e),
                      s = Ue.get(n) || new Ie(Qe);
                    s.add(e), Ue.set(n, s), t || Oe(n);
                  })(e, n));
            be(e);
          }
        }
        function Fe(e, t) {
          if (!(d.Ay.chats[e] instanceof u.Api.Channel))
            return void (
              a.Oig &&
              console.error(`[UpdateManager] Channel ${e} not found in localDb`)
            );
          const n = d.Ay.channelPtsById[e];
          n && n < t ? He(e) : (d.Ay.channelPtsById[e] = t);
        }
        function Ne(e) {
          if (
            ("seq" in e &&
              e.seq &&
              ((d.Ay.commonBoxState.seq = e.seq),
              (d.Ay.commonBoxState.date = e.date)),
            "qts" in e && (d.Ay.commonBoxState.qts = e.qts),
            "pts" in e)
          ) {
            const t = Ge(e);
            t !== Ce
              ? (d.Ay.channelPtsById[t] = e.pts)
              : (d.Ay.commonBoxState.pts = e.pts);
          }
          if (
            e instanceof u.Api.UpdatesCombined ||
            e instanceof u.Api.Updates
          ) {
            const t = e.users.concat(e.chats);
            e.updates.forEach((e) => {
              t && (e._entities = t), Ve(e);
            });
          } else be(e);
        }
        function qe() {
          if (!De.size) return;
          const e = De.pop(),
            t = d.Ay.commonBoxState.seq,
            n = "seqStart" in e ? e.seqStart : e.seq;
          if (0 === n || (e._isFromDifference && n >= t + 1)) Ne(e);
          else if (n === t + 1) clearTimeout(Ee), (Ee = void 0), Ne(e);
          else if (n > t + 1) return De.add(e), void Le();
          qe();
        }
        function Oe(e) {
          const t = Ue.get(e);
          if (!t?.size) return;
          const n = t.pop(),
            s = e === Ce ? d.Ay.commonBoxState.pts : d.Ay.channelPtsById[e],
            i = n.pts,
            o = Ze(n);
          if (void 0 !== s) {
            if (n._isFromDifference && i >= s + o) Ne(n);
            else if (i === s + o) clearTimeout(Be.get(e)), Be.delete(e), Ne(n);
            else if (i > s + o) return t.add(n), void (e === Ce ? Le() : He(e));
            Oe(e);
          } else
            a.Oig &&
              console.error(
                "[UpdateManager] Got pts update without local state",
                e
              );
        }
        function He(e) {
          if (Be.has(e)) return;
          const t = setTimeout(async () => {
            await We(e), Be.delete(e);
          }, Me);
          Be.set(e, t);
        }
        function Le() {
          Ee ||
            (Ee = setTimeout(async () => {
              await je(), (Ee = void 0), Le();
            }, 1e3 * ke));
        }
        function Ge(e) {
          if ("channelId" in e && "pts" in e)
            return (0, y.ol)(e.channelId, "channel");
          if (
            e instanceof u.Api.UpdateNewChannelMessage ||
            e instanceof u.Api.UpdateEditChannelMessage
          ) {
            const t = e.message.peerId;
            return (0, y.ol)(t.channelId, "channel");
          }
          return Ce;
        }
        async function je() {
          if (
            (Te || console.error("UpdatesManager not initialized"),
            !d.Ay.commonBoxState?.date)
          )
            return void ze();
          _e({
            "@type": "updateFetchingDifference",
            isFetching: !0,
          });
          const e = await Re(
            new u.Api.updates.GetDifference({
              pts: d.Ay.commonBoxState.pts,
              date: d.Ay.commonBoxState.date,
              qts: d.Ay.commonBoxState.qts,
            })
          );
          if (!e || e instanceof u.Api.updates.DifferenceTooLong) ze();
          else {
            if (e instanceof u.Api.updates.DifferenceEmpty)
              return (
                (d.Ay.commonBoxState.seq = e.seq),
                (d.Ay.commonBoxState.date = e.date),
                void _e({
                  "@type": "updateFetchingDifference",
                  isFetching: !1,
                })
              );
            Je(e),
              xe(
                e instanceof u.Api.updates.DifferenceSlice
                  ? e.intermediateState
                  : e.state
              ),
              e instanceof u.Api.updates.DifferenceSlice
                ? je()
                : _e({
                    "@type": "updateFetchingDifference",
                    isFetching: !1,
                  });
          }
        }
        async function We(e) {
          const t = d.Ay.chats[e];
          if (
            !(
              t &&
              t instanceof u.Api.Channel &&
              t.accessHash &&
              d.Ay.channelPtsById[e]
            )
          )
            return void (
              a.Oig &&
              console.error(
                "[UpdateManager] Channel for difference not found",
                e,
                t
              )
            );
          const n = await Re(
            new u.Api.updates.GetChannelDifference({
              channel: (0, ce.yp)(e, t.accessHash.toString()),
              pts: d.Ay.channelPtsById[e],
              filter: new u.Api.ChannelMessagesFilterEmpty(),
              limit: Pe,
            })
          );
          n
            ? n instanceof u.Api.updates.ChannelDifferenceTooLong
              ? ze()
              : ((d.Ay.channelPtsById[e] = n.pts),
                n instanceof u.Api.updates.ChannelDifferenceEmpty
                  ? Oe(e)
                  : (Je(n, e), n.final || We(e)))
            : a.Oig &&
              console.warn(
                "[UpdatesManager] Failed to get ChannelDifference",
                e,
                t
              );
        }
        function ze() {
          Ke(),
            _e({
              "@type": "requestSync",
            }),
            $e();
        }
        function Ke() {
          Ue.clear(),
            De.clear(),
            clearTimeout(Ee),
            (Ee = void 0),
            Be.forEach((e) => {
              clearTimeout(e);
            }),
            Be.clear(),
            (d.Ay.commonBoxState = {}),
            Object.keys(d.Ay.channelPtsById).forEach((e) => {
              d.Ay.channelPtsById[e] = 0;
            }),
            (Te = !1);
        }
        async function $e() {
          const e = await Re(new u.Api.updates.GetState());
          e && (xe(e), (Te = !0));
        }
        function Je(e, t) {
          e.newMessages.forEach((e) => {
            be(
              new u.Api.UpdateNewMessage({
                message: e,
                pts: 0,
                ptsCount: 0,
              })
            );
          }),
            (0, c.JV)(e.users),
            (0, c.JV)(e.chats),
            me(e.users),
            me(e.chats);
          const n = new Set();
          e.otherUpdates.forEach((e) => {
            const t = Ge(e);
            e instanceof u.Api.UpdateChannelTooLong && n.add(Ge(e));
            const s = !n.has(t);
            Ve(e, s, !s);
          }),
            t ? Oe(t) : qe();
        }
        function Ze(e) {
          return "ptsCount" in e ? e.ptsCount : 0;
        }
        function Qe(e, t) {
          const n = e.pts - t.pts;
          return 0 !== n ? n : Ze(t) - Ze(e);
        }
        var Ye = n(94660),
          Xe = n(74824);
        const et = new Set([
            "msg",
            "sticker",
            "gif",
            "wallpaper",
            "photo",
            "webDocument",
            "document",
            "videoAvatar",
          ]),
          tt = new Set(["s", "m", "x", "y", "w", "a", "b", "c", "d"]);
        async function nt(e, t, n) {
          let {
            url: s,
            mediaFormat: i,
            start: o,
            end: r,
            isHtmlAllowed: c,
          } = e;
          const {
            data: l,
            mimeType: p,
            fullSize: f,
          } = (await (async function (e, t, n, s, i, o) {
            const r = at(e);
            if (!r) return;
            const {
              entityType: c,
              entityId: l,
              sizeType: p,
              params: f,
              mediaMatchType: g,
            } = r;
            if ("staticMap" === c) {
              const e = l,
                n = new URLSearchParams(f),
                s = n.get("long"),
                a = n.get("lat"),
                i = n.get("w"),
                o = n.get("h"),
                r = n.get("zoom"),
                c = n.get("scale"),
                d = n.get("accuracy_radius");
              return {
                mimeType: "image/png",
                data: await t.downloadStaticMap(e, s, a, i, o, r, c, d),
              };
            }
            let h;
            switch (c) {
              case "channel":
              case "chat":
                h = d.Ay.chats[l];
                break;
              case "user":
                h = d.Ay.users[l];
                break;
              case "msg":
                h = d.Ay.messages[l];
                break;
              case "sticker":
              case "gif":
              case "wallpaper":
              case "document":
                h = d.Ay.documents[l];
                break;
              case "videoAvatar":
              case "photo":
                h = d.Ay.photos[l];
                break;
              case "stickerSet":
                h = d.Ay.stickerSets[l];
                break;
              case "webDocument":
                h = d.Ay.webDocuments[l];
            }
            if (h) {
              if (et.has(c)) {
                const e = await t.downloadMedia(h, {
                  sizeType: p,
                  start: s,
                  end: i,
                  progressCallback: n,
                  workers: a.fd1,
                });
                let r, d;
                return (
                  h instanceof u.Api.MessageService &&
                  h.action instanceof u.Api.MessageActionSuggestProfilePhoto
                    ? (r = "image/jpeg")
                    : h instanceof u.Api.Message
                    ? ((r = (function (e, t) {
                        if (e && e.media) {
                          if (e.media instanceof u.Api.MessageMediaPhoto)
                            return "image/jpeg";
                          if (
                            e.media instanceof u.Api.MessageMediaGeo ||
                            e.media instanceof u.Api.MessageMediaVenue ||
                            e.media instanceof u.Api.MessageMediaGeoLive
                          )
                            return "image/png";
                          if (e.media instanceof u.Api.MessageMediaDocument) {
                            const n = e.media.document;
                            if (n instanceof u.Api.Document)
                              return t
                                ? n.attributes.some(
                                    (e) =>
                                      e instanceof
                                      u.Api.DocumentAttributeSticker
                                  )
                                  ? "image/webp"
                                  : "image/jpeg"
                                : n.mimeType;
                          }
                          return e.media instanceof u.Api.MessageMediaWebPage &&
                            e.media.webpage instanceof u.Api.WebPage &&
                            e.media.webpage.document instanceof u.Api.Document
                            ? t
                              ? "image/jpeg"
                              : e.media.webpage.document.mimeType
                            : void 0;
                        }
                      })(h, p)),
                      h.media instanceof u.Api.MessageMediaDocument &&
                        h.media.document instanceof u.Api.Document &&
                        (d = h.media.document.size.toJSNumber()),
                      h.media instanceof u.Api.MessageMediaWebPage &&
                        h.media.webpage instanceof u.Api.WebPage &&
                        h.media.webpage.document instanceof u.Api.Document &&
                        (d = h.media.webpage.document.size.toJSNumber()))
                    : h instanceof u.Api.Photo
                    ? (r = "videoAvatar" === c ? "video/mp4" : "image/jpeg")
                    : "sticker" === c && p
                    ? (r = "image/webp")
                    : "webDocument" === c
                    ? ((r = h.mimeType), (d = h.size))
                    : ((r = tt.has(p || "") ? "image/jpeg" : h.mimeType),
                      (d = h.size.toJSNumber())),
                  !o && r && (r = r.replace(/html/gi, "")),
                  {
                    mimeType: r,
                    data: e,
                    fullSize: d,
                  }
                );
              }
              if ("stickerSet" === c) {
                const e = await t.downloadStickerSetThumb(h);
                return {
                  mimeType: st(e),
                  data: e,
                };
              }
              {
                const e = await t.downloadProfilePhoto(h, "profile" === g);
                return {
                  mimeType: st(e),
                  data: e,
                };
              }
            }
          })(s, t, n, o, r, c)) || {};
          if (!l) return;
          const g = await (async function (e, t, n) {
            switch (t) {
              case Ye.qZ.BlobUrl:
                return new Blob([e], {
                  type: n,
                });
              case Ye.qZ.Text:
                return e.toString();
              case Ye.qZ.Progressive:
              case Ye.qZ.DownloadUrl:
                return e.buffer;
            }
          })(l, i, p);
          if (!g) return;
          const h =
            i !== Ye.qZ.Progressive && (i !== Ye.qZ.BlobUrl || g.size <= a.$8L);
          if (!a.xJs && Xe && h) {
            const e = s.startsWith("avatar") ? a.zrf : a.Iz7;
            Xe.save(e, s, g);
          }
          return {
            dataBlob: i === Ye.qZ.Progressive ? "" : g,
            arrayBuffer: i === Ye.qZ.Progressive ? g : void 0,
            mimeType: p,
            fullSize: f,
          };
        }
        function st(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "image/jpeg";
          if (e.length < 4) return t;
          let n = t;
          switch (e.subarray(0, 4).reduce((e, t) => e + t.toString(16), "")) {
            case "89504e47":
              n = "image/png";
              break;
            case "47494638":
              n = "image/gif";
              break;
            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
            case "ffd8ffe3":
            case "ffd8ffe8":
              n = "image/jpeg";
              break;
            case "52494646":
              n = "image/webp";
          }
          return n;
        }
        function at(e) {
          const t = e.startsWith("staticMap")
            ? e.match(/(staticMap):([0-9-]+)(\?.+)/)
            : e.startsWith("webDocument")
            ? e.match(/(webDocument):(.+)/)
            : e.match(
                /(avatar|profile|photo|msg|stickerSet|sticker|wallpaper|gif|document|videoAvatar)([-\d\w./]+)(?::\d+)?(\?size=\w+)?/
              );
          if (!t) return;
          const n = t[1],
            s = t[2];
          let a;
          const i = t[3],
            o = i?.replace("?size=", "") || void 0;
          return (
            (a =
              "avatar" === t[1] || "profile" === t[1] ? (0, ce.Ou)(s) : t[1]),
            {
              mediaMatchType: n,
              entityType: a,
              entityId: s,
              sizeType: o,
              params: i,
            }
          );
        }
        class it extends AbortController {
          constructor() {
            var e, t, n;
            super(...arguments),
              (e = this),
              (t = "threads"),
              (n = new Map()),
              (t = (function (e) {
                var t = (function (e) {
                  if ("object" != typeof e || !e) return e;
                  var t = e[Symbol.toPrimitive];
                  if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != typeof n) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : t + "";
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n);
          }
          getThreadSignal(e) {
            let t = this.threads.get(e);
            return (
              t || ((t = new AbortController()), this.threads.set(e, t)),
              t.signal
            );
          }
          abortThread(e, t) {
            this.threads.get(e)?.abort(t), this.threads.delete(e);
          }
          abort(e) {
            super.abort(e),
              this.threads.forEach((t) => t.abort(e)),
              this.threads.clear();
          }
        }
        const ot = "Unknown UserAgent",
          rt = "Unknown platform";
        Ae.Logger.setLevel(a.PvP ? "debug" : "warn");
        const ct = {
            build: (e) => e,
          },
          dt = new Map(),
          ut = new Map();
        let lt,
          pt,
          ft,
          gt = !1;
        function ht(e) {
          let { isPremium: t } = e;
          pt.setIsPremium(t);
        }
        (0, r.postMessageListenInWorker)("setDebug", (e, t) => {
          gt = Boolean(t.data);
        });
        const mt = 2500;
        async function yt() {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) &&
            pt.isConnected() &&
            (await Promise.race([vt(new u.Api.auth.LogOut()), (0, o.v7)(mt)])),
            e || ((0, d.tp)(), Ke()),
            await pt.destroy();
        }
        async function _t() {
          await pt.disconnect();
        }
        function bt(e) {
          lt({
            "@type": "updateSession",
            sessionData: e,
          });
        }
        function wt(e) {
          "updateResendCode" in e
            ? lt({
                "@type": "updateResendCode",
                timeout: e.timeout,
                phoneCodeHash: e.phoneCodeHash,
              })
            : (Ve(e),
              e instanceof u.Api.UpdatesTooLong
                ? (async function () {
                    try {
                      await vt(
                        new u.Api.users.GetFullUser({
                          id: new u.Api.InputUserSelf(),
                        }),
                        {
                          shouldThrow: !0,
                        }
                      );
                    } catch (e) {
                      ("AUTH_KEY_UNREGISTERED" !== e.message &&
                        "SESSION_REVOKED" !== e.message) ||
                        lt({
                          "@type": "updateConnectionState",
                          connectionState: "connectionStateBroken",
                        });
                    }
                  })()
                : ("updates" in e ? e.updates : [e]).forEach((e) => {
                    if (!(e instanceof u.Api.UpdateConfig)) return;
                    const t = e._entities?.find(
                      (e) =>
                        e instanceof u.Api.User &&
                        (0, y.ol)(e.id, "user") === ft
                    );
                    t instanceof u.Api.User &&
                      ht({
                        isPremium: Boolean(t.premium),
                      });
                  }));
        }
        async function vt(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
              shouldThrow: n,
              shouldIgnoreUpdates: s,
              dcId: i,
              shouldIgnoreErrors: o,
              abortControllerChatId: r,
              abortControllerThreadId: d,
              shouldRetryOnTimeout: l,
              abortControllerGroup: p,
            } = t,
            f = Boolean(t.shouldReturnTrue);
          let g;
          if (r) {
            let e = dt.get(r);
            e || ((e = new it()), dt.set(r, e)),
              (g = d ? e.getThreadSignal(d) : e.signal);
          }
          if (p) {
            let e = ut.get(p);
            e || ((e = new AbortController()), ut.set(p, e)), (g = e.signal);
          }
          try {
            (a.Oig || gt) && (0, c.Rm)("INVOKE", e.className, e);
            const t = await pt.invoke(e, i, g, l);
            return (
              (a.Oig || gt) && (0, c.Rm)("RESPONSE", e.className, t),
              !s && (0, c.RN)(t) && Ve(t),
              f ? t && !0 : t
            );
          } catch (t) {
            if (o) return;
            if (
              ((a.Oig || gt) &&
                ((0, c.Rm)("INVOKE ERROR", e.className),
                console.debug("invokeRequest failed with payload", e),
                console.error(t)),
              n)
            )
              throw t;
            return void (function (e, t) {
              const n =
                  e.message.startsWith("A wait of") &&
                  (t instanceof u.Api.messages.SendMessage ||
                    t instanceof u.Api.messages.SendMedia ||
                    t instanceof u.Api.messages.SendMultiMedia),
                { message: s } = e;
              (t instanceof u.Api.messages.GetMessagesViews &&
                "CHANNEL_PRIVATE" === s) ||
                lt({
                  "@type": "error",
                  error: {
                    message: s,
                    isSlowMode: n,
                    hasErrorKey: !0,
                  },
                });
            })(t, e);
          }
        }
        function At(e, t) {
          a.Oig && (0, c.Rm)("BEACON", e.className), pt.invokeBeacon(e, t);
        }
        async function St(e, t) {
          try {
            return await nt(e, pt, t);
          } catch (n) {
            if (n.message.startsWith("FILE_REFERENCE")) {
              if (
                await Rt({
                  url: e.url,
                })
              )
                return nt(e, pt, t);
              a.Oig && console.error("Failed to repair file reference", e.url);
            }
            throw n;
          }
        }
        function It(e, t) {
          return pt.uploadFile({
            file: e,
            onProgress: t,
            workers: a.URy,
          });
        }
        function Ct(e) {
          return pt.updateTwoFaSettings(e);
        }
        function Pt(e) {
          const { chatId: t, threadId: n } = e,
            s = dt.get(t);
          if (!n) return s?.abort("Chat change"), void dt.delete(t);
          s?.abortThread(n, "Thread change");
        }
        function Mt(e) {
          ut.get(e)?.abort(), ut.delete(e);
        }
        async function kt() {
          const e = await vt(
            new u.Api.users.GetFullUser({
              id: new u.Api.InputUserSelf(),
            })
          );
          if (!(e && e.users[0] instanceof u.Api.User)) return;
          const t = e.users[0];
          t.photo instanceof u.Api.Photo &&
            (d.Ay.photos[t.photo.id.toString()] = t.photo),
            (0, c.xz)(t);
          const n = G(e),
            s = j(t);
          (0, L.QD)(s.id),
            (function (e, t) {
              Vt({
                "@type": "updateCurrentUser",
                currentUser: e,
                currentUserFullInfo: t,
              });
            })(s, n),
            (ft = s.id),
            ht({
              isPremium: Boolean(s.isPremium),
            });
        }
        async function Rt(e) {
          let { url: t } = e;
          const n = at(t);
          if (!n) return;
          const { entityType: s, entityId: a, mediaMatchType: i } = n;
          if ("document" === i || "photo" === i) {
            const e = "document" === i ? d.Ay.documents[a] : d.Ay.photos[a];
            if (!e.storyData) return !1;
            const t = (0, ce.y9)(e.storyData.peerId);
            if (!t) return !1;
            const n = await vt(
              new u.Api.stories.GetStoriesByID({
                peer: t,
                id: [e.storyData.id],
              })
            );
            return (
              !!n &&
              ((0, c.JV)(n.users),
              n.stories.forEach((t) => (0, c.np)(t, e.storyData.peerId)),
              !0)
            );
          }
          if ("msg" === s) {
            const e = d.Ay.messages[a],
              t = e.id,
              n =
                "channelId" in e.peerId
                  ? new u.Api.InputChannel({
                      channelId: e.peerId.channelId,
                      accessHash:
                        d.Ay.chats[(0, y.ol)(e.peerId.channelId, "channel")]
                          .accessHash,
                    })
                  : void 0,
              s = await vt(
                n
                  ? new u.Api.channels.GetMessages({
                      channel: n,
                      id: [
                        new u.Api.InputMessageID({
                          id: t,
                        }),
                      ],
                    })
                  : new u.Api.messages.GetMessages({
                      id: [
                        new u.Api.InputMessageID({
                          id: t,
                        }),
                      ],
                    })
              );
            if (!s || s instanceof u.Api.messages.MessagesNotModified)
              return !1;
            n && "pts" in s && Fe((0, y.ol)(n.channelId, "channel"), s.pts);
            const i = s.messages[0];
            return !(
              i instanceof u.Api.MessageEmpty ||
              ((0, c.JV)(s.users), (0, c.JV)(s.chats), (0, c.NZ)(i), 0)
            );
          }
          return !1;
        }
        function Et(e) {
          pt.setForceHttpTransport(e);
        }
        function Tt(e) {
          pt.setAllowHttpTransport(e);
        }
        function Bt(e) {
          pt.setShouldDebugExportedSenders(e);
        }
        function Dt(e) {
          He(e);
        }
        const Ut = {
            PHONE_NUMBER_INVALID: "Invalid phone number.",
            PHONE_CODE_INVALID: "کد نامعتبر است.",
            PASSWORD_HASH_INVALID: "Incorrect password.",
            PHONE_PASSWORD_FLOOD: "Limit exceeded. Please try again later.",
            PHONE_NUMBER_BANNED: "This phone number is banned.",
            FLOOD_WAIT: "بیش از حد مجاز امتحان کردید، لطفاً بعداً تلاش کنید.",
          },
          xt = {};
        let Vt;
        function Ft() {
          Vt({
            "@type": "updateWebAuthTokenFailed",
          });
        }
        function Nt() {
          return (
            Vt(Jt("authorizationStateWaitPhoneNumber")),
            new Promise((e, t) => {
              (xt.resolve = e), (xt.reject = t);
            })
          );
        }
        function qt() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (
            Vt({
              ...Jt("authorizationStateWaitCode"),
              isCodeViaApp: e,
            }),
            new Promise((e, t) => {
              (xt.resolve = e), (xt.reject = t);
            })
          );
        }
        function Ot(e, t) {
          return (
            Vt({
              ...Jt("authorizationStateWaitPassword"),
              hint: e,
              noReset: t,
            }),
            new Promise((e) => {
              xt.resolve = e;
            })
          );
        }
        function Ht() {
          return (
            Vt(Jt("authorizationStateWaitRegistration")),
            new Promise((e) => {
              xt.resolve = e;
            })
          );
        }
        function Lt(e) {
          return (
            Vt({
              ...Jt("authorizationStateWaitQrCode"),
              qrCode: {
                token: btoa(String.fromCharCode(...e.token))
                  .replace(/\+/g, "-")
                  .replace(/\//g, "_")
                  .replace(/=+$/, ""),
                expires: e.expires,
              },
            }),
            new Promise((e, t) => {
              xt.reject = t;
            })
          );
        }
        async function Gt() {
          const e = await vt(new u.Api.auth.SendDeleteAccountCode());
          if (e)
            return {
              timeout: e.timeout,
              type: e.type,
              length: e.type.length,
            };
        }
        async function jt() {
          const e = await vt(new u.Api.auth.ResendDeleteAccountCode());
          if (e)
            return {
              timeout: e.timeout,
              type: e.type,
              length: e.type.length,
            };
        }
        async function Wt(e) {
          let { code: t } = e;
          return await vt(
            new u.Api.auth.DeleteAccount({
              deleteAccountCode: t,
            })
          );
        }
        async function zt(e) {
          let { phoneNumber: t, phoneCodeHash: n } = e;
          const s = await vt(
            new u.Api.auth.ResendCode({
              phoneNumber: t,
              phoneCodeHash: n,
            })
          );
          return (0, m._)(s);
        }
        async function Kt(e) {
          let {} = e;
          const t = await vt(new u.Api.account.GetAuthorizations({}));
          if (t)
            for (let e = 0; e < t.authorizations.length; e++)
              if (t.authorizations[e].current) return t.authorizations[e].hash;
        }
        function $t(e) {
          let t;
          if (e instanceof u.errors.FloodWaitError) {
            const n = Math.ceil(Number(e.seconds) / 60 / 60);
            t =
              "Too many attempts. Try again in " +
              (n > 1 ? `${n} hours` : "an hour");
          } else
            "PHONE_NUMBER_FLOOD" === e.message
              ? (t = "شما به تازگی حذف حساب کاربری کرده اید")
              : "PHONE_CODE_EXPIRED" === e.message
              ? ((t = "کد منقضی شده است، لطفاً دوباره تلاش کنید."),
                Vt({
                  "@type": "updatePhoneCodeExpired",
                  message: t,
                }))
              : (t = Ut[e.message]);
          t || ((t = "خطای پیش بینی نشده"), a.Oig && console.error(e)),
            Vt({
              "@type": "updateAuthorizationError",
              message: t,
            });
        }
        function Jt(e) {
          return {
            "@type": "updateAuthorizationState",
            authorizationState: e,
          };
        }
        function Zt(e) {
          xt.resolve && xt.resolve(e);
        }
        function Qt(e) {
          xt.resolve && xt.resolve(e);
        }
        function Yt(e) {
          xt.resolve && xt.resolve(e);
        }
        function Xt(e) {
          const { firstName: t, lastName: n } = e;
          xt.resolve && xt.resolve([t, n]);
        }
        function en() {
          xt.reject && xt.reject(new Error("RESTART_AUTH"));
        }
        function tn() {
          xt.reject && xt.reject(new Error("RESTART_AUTH_WITH_QR"));
        }
        var nn = n(87263),
          sn = n.n(nn);
        let an;
        async function on(e) {
          let {
            chatId: t,
            accessHash: n,
            messageId: s,
            data: a,
            isGame: i,
          } = e;
          const o = await vt(
            new u.Api.messages.GetBotCallbackAnswer({
              peer: (0, ce.l2)(t, n),
              msgId: s,
              data: a ? (0, c.rW)(a) : void 0,
              game: i || void 0,
            })
          );
          return o ? (0, m._)(o) : void 0;
        }
        async function rn() {
          const e = await vt(
            new u.Api.contacts.GetTopPeers({
              botsInline: !0,
            })
          );
          if (!(e instanceof u.Api.contacts.TopPeers)) return;
          const t = e.users.map(j).filter(Boolean);
          return {
            ids: t.map((e) => {
              let { id: t } = e;
              return t;
            }),
            users: t,
          };
        }
        async function cn(e) {
          let { username: t } = e;
          const n = await vt(
            new u.Api.contacts.ResolveUsername({
              username: t,
            })
          );
          if (
            n &&
            n.users[0] instanceof u.Api.User &&
            n.users[0].bot &&
            n.users[0].botInlinePlaceholder
          )
            return (
              (0, c.xz)(n.users[0]),
              {
                user: j(n.users[0]),
                chat: I(n.users[0]),
              }
            );
        }
        async function dn(e) {
          let { bot: t, chat: n, query: s, offset: a = "" } = e;
          const i = await vt(
            new u.Api.messages.GetInlineBotResults({
              bot: (0, ce.l2)(t.id, t.accessHash),
              peer: (0, ce.l2)(n.id, n.accessHash),
              query: s,
              offset: a,
            })
          );
          var o, r, l, p;
          if (i)
            return (
              (0, c.JV)(i.users),
              {
                isGallery: Boolean(i.gallery),
                help: t.botPlaceholder,
                nextOffset:
                  ((l = t.usernames[0].username),
                  (p = i.nextOffset),
                  "gif" === l && "0" === p ? "" : p),
                switchPm: (0, f.rG)(i.switchPm),
                switchWebview: (0, f.R9)(i.switchWebview),
                users: i.users.map(j).filter(Boolean),
                results:
                  ((o = String(i.queryId)),
                  (r = i.results),
                  r.map((e) => {
                    return e instanceof u.Api.BotInlineMediaResult
                      ? (e.document instanceof u.Api.Document &&
                          ((t = e.document),
                          (d.Ay.documents[String(t.id)] = t)),
                        e.photo instanceof u.Api.Photo &&
                          ((n = e.photo), (d.Ay.photos[String(n.id)] = n)),
                        (0, f.aO)(e, o))
                      : (e.thumb &&
                          ((s = e.thumb), (d.Ay.webDocuments[s.url] = s)),
                        (0, f.iF)(e, o));
                    var t, n, s;
                  })),
                cacheTime: i.cacheTime,
              }
            );
        }
        async function un(e) {
          let {
            chat: t,
            replyInfo: n,
            resultId: s,
            queryId: a,
            sendAs: i,
            isSilent: o,
            scheduleDate: r,
          } = e;
          const c = (0, ce.I2)();
          await vt(
            new u.Api.messages.SendInlineBotResult({
              clearDraft: !0,
              randomId: c,
              queryId: sn()(a),
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: s,
              scheduleDate: r,
              replyTo: n && (0, ce.mH)(n),
              ...(o && {
                silent: !0,
              }),
              ...(i && {
                sendAs: (0, ce.l2)(i.id, i.accessHash),
              }),
            })
          );
        }
        async function ln(e) {
          let { bot: t, startParam: n } = e;
          const s = (0, ce.I2)();
          await vt(
            new u.Api.messages.StartBot({
              bot: (0, ce.l2)(t.id, t.accessHash),
              peer: (0, ce.l2)(t.id, t.accessHash),
              randomId: s,
              startParam: n,
            })
          );
        }
        async function pn(e) {
          let {
            isSilent: t,
            peer: n,
            bot: s,
            url: i,
            startParam: o,
            replyInfo: r,
            theme: c,
            sendAs: d,
            isFromBotMenu: l,
          } = e;
          const p = await vt(
            new u.Api.messages.RequestWebView({
              silent: t || void 0,
              peer: (0, ce.l2)(n.id, n.accessHash),
              bot: (0, ce.l2)(s.id, s.accessHash),
              url: i,
              startParam: o,
              themeParams: c ? (0, ce.U5)(c) : void 0,
              fromBotMenu: l || void 0,
              platform: a.LX5,
              replyTo: r && (0, ce.mH)(r),
              ...(d && {
                sendAs: (0, ce.l2)(d.id, d.accessHash),
              }),
            })
          );
          if (p instanceof u.Api.WebViewResultUrl)
            return {
              url: p.url,
              queryId: p.queryId.toString(),
            };
        }
        async function fn(e) {
          let {
            bot: t,
            url: n,
            theme: s,
            startParam: i,
            isFromSwitchWebView: o,
            isFromSideMenu: r,
          } = e;
          const c = await vt(
            new u.Api.messages.RequestSimpleWebView({
              url: n,
              bot: (0, ce.l2)(t.id, t.accessHash),
              themeParams: s ? (0, ce.U5)(s) : void 0,
              platform: a.LX5,
              startParam: i,
              fromSwitchWebview: o || void 0,
              fromSideMenu: r || void 0,
            })
          );
          return c?.url;
        }
        async function gn(e) {
          let { bot: t, appName: n } = e;
          const s = await vt(
            new u.Api.messages.GetBotApp({
              app: new u.Api.InputBotAppShortName({
                botId: (0, ce.yp)(t.id, t.accessHash),
                shortName: n,
              }),
            })
          );
          if (s && !(s instanceof u.Api.BotAppNotModified)) return (0, f.pU)(s);
        }
        async function hn(e) {
          let {
            peer: t,
            app: n,
            startParam: s,
            theme: i,
            isWriteAllowed: o,
          } = e;
          const r = await vt(
            new u.Api.messages.RequestAppWebView({
              peer: (0, ce.l2)(t.id, t.accessHash),
              app: (0, ce.xs)(n),
              startParam: s,
              themeParams: i ? (0, ce.U5)(i) : void 0,
              platform: a.LX5,
              writeAllowed: o || void 0,
            })
          );
          return r?.url;
        }
        function mn(e) {
          let {
            isSilent: t,
            peer: n,
            bot: s,
            queryId: a,
            replyInfo: i,
            sendAs: o,
          } = e;
          return vt(
            new u.Api.messages.ProlongWebView({
              silent: t || void 0,
              peer: (0, ce.l2)(n.id, n.accessHash),
              bot: (0, ce.l2)(s.id, s.accessHash),
              queryId: sn()(a),
              replyTo: i && (0, ce.mH)(i),
              ...(o && {
                sendAs: (0, ce.l2)(o.id, o.accessHash),
              }),
            })
          );
        }
        async function yn(e) {
          let { bot: t, buttonText: n, data: s } = e;
          const a = (0, ce.I2)();
          await vt(
            new u.Api.messages.SendWebViewData({
              bot: (0, ce.l2)(t.id, t.accessHash),
              buttonText: n,
              data: s,
              randomId: a,
            })
          );
        }
        async function _n(e) {
          let { hash: t } = e;
        }
        async function bn(e) {
          let { bot: t } = e;
          const n = await vt(
            new u.Api.messages.GetAttachMenuBot({
              bot: (0, ce.l2)(t.id, t.accessHash),
            })
          );
          if (n instanceof u.Api.AttachMenuBotsBot)
            return (
              (0, c.JV)(n.users),
              {
                bot: (0, f.vJ)(n.bot),
                users: n.users.map(j).filter(Boolean),
              }
            );
        }
        function wn(e) {
          let { bot: t, isWriteAllowed: n, isEnabled: s } = e;
          return vt(
            new u.Api.messages.ToggleBotInAttachMenu({
              bot: (0, ce.l2)(t.id, t.accessHash),
              writeAllowed: n || void 0,
              enabled: s,
            })
          );
        }
        async function vn(e) {
          let { chat: t, buttonId: n, messageId: s } = e;
          const a = await vt(
            new u.Api.messages.RequestUrlAuth({
              peer: (0, ce.l2)(t.id, t.accessHash),
              buttonId: n,
              msgId: s,
            })
          );
          if (!a) return;
          const i = Y(a);
          return (
            "request" === i?.type &&
              an({
                "@type": "updateUser",
                id: i.bot.id,
                user: i.bot,
              }),
            i
          );
        }
        async function An(e) {
          let { chat: t, messageId: n, buttonId: s, isWriteAllowed: a } = e;
          const i = await vt(
            new u.Api.messages.AcceptUrlAuth({
              peer: (0, ce.l2)(t.id, t.accessHash),
              msgId: n,
              buttonId: s,
              writeAllowed: a || void 0,
            })
          );
          if (!i) return;
          const o = Y(i);
          return (
            "request" === o?.type &&
              an({
                "@type": "updateUser",
                id: o.bot.id,
                user: o.bot,
              }),
            o
          );
        }
        async function Sn(e) {
          let { url: t } = e;
          const n = await vt(
            new u.Api.messages.RequestUrlAuth({
              url: t,
            })
          );
          if (!n) return;
          const s = Y(n);
          return (
            "request" === s?.type &&
              an({
                "@type": "updateUser",
                id: s.bot.id,
                user: s.bot,
              }),
            s
          );
        }
        async function In(e) {
          let { url: t, isWriteAllowed: n } = e;
          const s = await vt(
            new u.Api.messages.AcceptUrlAuth({
              url: t,
              writeAllowed: n || void 0,
            })
          );
          if (!s) return;
          const a = Y(s);
          return (
            "request" === a?.type &&
              an({
                "@type": "updateUser",
                id: a.bot.id,
                user: a.bot,
              }),
            a
          );
        }
        function Cn(e) {
          let { bot: t } = e;
          return vt(
            new u.Api.bots.CanSendMessage({
              bot: (0, ce.yp)(t.id, t.accessHash),
            })
          );
        }
        function Pn(e) {
          let { bot: t } = e;
          return vt(
            new u.Api.bots.AllowSendMessage({
              bot: (0, ce.yp)(t.id, t.accessHash),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function Mn(e) {
          let { bot: t, customMethod: n, parameters: s } = e;
          try {
            const e = await vt(
              new u.Api.bots.InvokeWebViewCustomMethod({
                bot: (0, ce.l2)(t.id, t.accessHash),
                params: new u.Api.DataJSON({
                  data: s,
                }),
                customMethod: n,
              }),
              {
                shouldThrow: !0,
              }
            );
            return {
              result: JSON.parse(e.data),
            };
          } catch (e) {
            return {
              error: e.message,
            };
          }
        }
        var kn = n(48287).hp;
        let Rn, En;
        async function Tn(e) {
          let { call: t } = e;
          const n = await vt(
            new u.Api.phone.GetGroupCall({
              call: (0, ce.Y5)(t),
            })
          );
          if (!n) return;
          (0, c.JV)(n.users), (0, c.JV)(n.chats);
          const s = n.users.map(j).filter(Boolean),
            a = n.chats.map((e) => I(e)).filter(Boolean);
          return {
            groupCall: (0, g.Av)(n.call),
            users: s,
            chats: a,
          };
        }
        function Bn(e) {
          let { call: t } = e;
          return vt(
            new u.Api.phone.DiscardGroupCall({
              call: (0, ce.Y5)(t),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Dn(e) {
          let {
            call: t,
            participant: n,
            muted: s,
            presentationPaused: a,
            videoStopped: i,
            videoPaused: o,
            volume: r,
            raiseHand: c,
          } = e;
          return vt(
            new u.Api.phone.EditGroupCallParticipant({
              call: (0, ce.Y5)(t),
              participant: (0, ce.l2)(n.id, n.accessHash),
              ...(void 0 !== i && {
                videoStopped: i,
              }),
              ...(void 0 !== o && {
                videoPaused: o,
              }),
              ...(void 0 !== s && {
                muted: s,
              }),
              ...(void 0 !== a && {
                presentationPaused: a,
              }),
              ...(void 0 !== c && {
                raiseHand: c,
              }),
              ...(void 0 !== r && {
                volume: r,
              }),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Un(e) {
          let { groupCall: t, title: n } = e;
          return vt(
            new u.Api.phone.EditGroupCallTitle({
              title: n,
              call: (0, ce.Y5)(t),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function xn(e) {
          let { call: t, canSelfUnmute: n } = e;
          const s = await vt(
            new u.Api.phone.ExportGroupCallInvite({
              canSelfUnmute: n || void 0,
              call: (0, ce.Y5)(t),
            })
          );
          if (s) return s.link;
        }
        async function Vn(e) {
          let { call: t, offset: n } = e;
          const s = await vt(
            new u.Api.phone.GetGroupParticipants({
              call: (0, ce.Y5)(t),
              ids: [],
              sources: [],
              offset: n || "",
              limit: a.Gce,
            })
          );
          if (!s) return;
          (0, c.JV)(s.users), (0, c.JV)(s.chats);
          const i = s.users.map(j).filter(Boolean),
            o = s.chats.map((e) => I(e)).filter(Boolean);
          return (
            Rn({
              "@type": "updateGroupCallParticipants",
              groupCallId: t.id,
              participants: s.participants.map(g.ZQ),
              nextOffset: s.nextOffset,
            }),
            {
              users: i,
              chats: o,
            }
          );
        }
        function Fn(e) {
          let { call: t, isPageUnload: n } = e;
          const s = new u.Api.phone.LeaveGroupCall({
            call: (0, ce.Y5)(t),
          });
          n
            ? At(s)
            : vt(s, {
                shouldReturnTrue: !0,
              });
        }
        async function Nn(e) {
          let { call: t, inviteHash: n, params: s } = e;
          const a = await vt(
            new u.Api.phone.JoinGroupCall({
              call: (0, ce.Y5)(t),
              joinAs: new u.Api.InputPeerSelf(),
              muted: !0,
              videoStopped: !0,
              params: new u.Api.DataJSON({
                data: JSON.stringify(s),
              }),
              inviteHash: n,
            }),
            {
              shouldRetryOnTimeout: !0,
              abortControllerGroup: "call",
            }
          );
          if (a && a instanceof u.Api.Updates) {
            const e = a.updates.find((e) => e instanceof u.Api.UpdateGroupCall);
            if (!(e instanceof u.Api.UpdateGroupCall)) return;
            return (0, g.Av)(e.call);
          }
        }
        async function qn(e) {
          let { peer: t } = e;
          const n = (0, ce.MQ)(),
            s = await vt(
              new u.Api.phone.CreateGroupCall({
                peer: (0, ce.l2)(t.id, t.accessHash),
                randomId: n,
              })
            );
          if (s && s instanceof u.Api.Updates) {
            const e = s.updates[0];
            if (e instanceof u.Api.UpdateGroupCall) return (0, g.Av)(e.call);
          }
        }
        function On(e) {
          let { call: t, params: n } = e;
          return vt(
            new u.Api.phone.JoinGroupCallPresentation({
              call: (0, ce.Y5)(t),
              params: new u.Api.DataJSON({
                data: JSON.stringify(n),
              }),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Hn(e) {
          let { call: t, subscribed: n } = e;
          return vt(
            new u.Api.phone.ToggleGroupCallStartSubscription({
              call: (0, ce.Y5)(t),
              subscribed: n,
            }),
            {
              shouldReturnTrue: !0,
              shouldIgnoreErrors: !0,
            }
          );
        }
        function Ln(e) {
          let { call: t } = e;
          return vt(
            new u.Api.phone.LeaveGroupCallPresentation({
              call: (0, ce.Y5)(t),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function Gn() {
          const e = await vt(new u.Api.messages.GetDhConfig({}));
          if (e && !(e instanceof u.Api.messages.DhConfigNotModified))
            return {
              g: e.g,
              p: Array.from(e.p),
              random: Array.from(e.random),
            };
        }
        function jn(e) {
          let { call: t, isBusy: n, isPageUnload: s } = e;
          const a = new u.Api.phone.DiscardCall({
            peer: (0, ce.FZ)(t),
            reason: n
              ? new u.Api.PhoneCallDiscardReasonBusy()
              : new u.Api.PhoneCallDiscardReasonHangup(),
          });
          s
            ? At(a)
            : vt(a, {
                shouldReturnTrue: !0,
              });
        }
        async function Wn(e) {
          let { user: t, gAHash: n, isVideo: s } = e;
          const a = await vt(
            new u.Api.phone.RequestCall({
              randomId: (0, ce.MQ)(),
              userId: (0, ce.yp)(t.id, t.accessHash),
              gAHash: kn.from(n),
              ...(s && {
                video: !0,
              }),
              protocol: (0, g.ne)(),
            })
          );
          if (!a) return;
          const i = (0, g.lo)(a.phoneCall);
          return (
            Rn({
              "@type": "updatePhoneCall",
              call: i,
            }),
            (0, c.JV)(a.users),
            {
              users: a.users.map(j).filter(Boolean),
            }
          );
        }
        function zn(e) {
          let { call: t, rating: n, comment: s } = e;
          return vt(
            new u.Api.phone.SetCallRating({
              rating: n,
              peer: (0, ce.FZ)(t),
              comment: s,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Kn(e) {
          let { call: t } = e;
          return vt(
            new u.Api.phone.ReceivedCall({
              peer: (0, ce.FZ)(t),
            })
          );
        }
        async function $n(e) {
          let { call: t, gB: n } = e;
          const s = await vt(
            new u.Api.phone.AcceptCall({
              peer: (0, ce.FZ)(t),
              gB: kn.from(n),
              protocol: (0, g.ne)(),
            })
          );
          if (s)
            return (
              (t = (0, g.lo)(s.phoneCall)),
              Rn({
                "@type": "updatePhoneCall",
                call: t,
              }),
              (0, c.JV)(s.users),
              {
                users: s.users.map(j).filter(Boolean),
              }
            );
        }
        async function Jn(e) {
          let { call: t, gA: n, keyFingerprint: s } = e;
          const a = await vt(
            new u.Api.phone.ConfirmCall({
              peer: (0, ce.FZ)(t),
              gA: kn.from(n),
              keyFingerprint: sn()(s),
              protocol: (0, g.ne)(),
            })
          );
          if (a)
            return (
              (t = (0, g.lo)(a.phoneCall)),
              Rn({
                "@type": "updatePhoneCall",
                call: t,
              }),
              (0, c.JV)(a.users),
              {
                users: a.users.map(j).filter(Boolean),
              }
            );
        }
        function Zn(e) {
          let { data: t, call: n } = e;
          return vt(
            new u.Api.phone.SendSignalingData({
              data: kn.from(t),
              peer: (0, ce.FZ)(n),
            })
          );
        }
        async function Qn(e) {
          let {
            limit: t,
            offsetDate: n,
            archived: s,
            withPinned: i,
            lastLocalServiceMessage: o,
          } = e;
          const r = await vt(
              new u.Api.messages.GetDialogs({
                offsetPeer: new u.Api.InputPeerEmpty(),
                limit: t,
                offsetDate: n,
                folderId: s ? a._E9 : void 0,
                ...(i && {
                  excludePinned: !0,
                }),
              })
            ),
            c = i
              ? await vt(
                  new u.Api.messages.GetPinnedDialogs({
                    folderId: s ? a._E9 : void 0,
                  })
                )
              : void 0;
          if (!r || r instanceof u.Api.messages.DialogsNotModified) return;
          c && Ls(c), Ls(r);
          const d = (0, l.dU)(
            (c ? c.messages : []).concat(r.messages).map(L.Ep).filter(Boolean),
            "chatId"
          );
          ye(r.messages);
          const p = Hs(r);
          c && Object.assign(p, Hs(c, p));
          const f = [],
            g = {},
            h = (c ? c.dialogs : []).concat(r.dialogs),
            m = [];
          h.forEach((e) => {
            if (
              !(e instanceof u.Api.Dialog) ||
              (!s && e.folderId === a._E9) ||
              (s && e.folderId !== a._E9)
            )
              return;
            const t = w(e, p[P(e.peer)]);
            if (
              (e.pts && Fe(t.id, e.pts),
              t.id === a.zv8 && o && (!d[t.id] || o.date > d[t.id].date)
                ? (t.lastMessage = o)
                : (t.lastMessage = d[t.id]),
              (t.isListed = !0),
              f.push(t),
              pe(t.id, t.muteUntil, En),
              i && e.pinned && m.push(t.id),
              e.draft)
            ) {
              const n = (0, L.T9)(e.draft);
              n && (g[t.id] = n);
            }
          });
          const y = f.map((e) => e.id),
            { users: _, userStatusesById: b } = K(
              (c?.users || []).concat(r.users)
            );
          let v;
          return (
            (v = r instanceof u.Api.messages.DialogsSlice ? r.count : y.length),
            {
              chatIds: y,
              chats: f,
              users: _,
              userStatusesById: b,
              draftsById: g,
              replyingToById: {},
              orderedPinnedIds: i ? m : void 0,
              totalChatCount: v,
            }
          );
        }
        function Yn(e) {
          const { id: t, accessHash: n, adminRights: s } = e;
          return (0, ce.yp)(t, n) instanceof u.Api.InputChannel
            ? (async function (e, t) {
                const n = await vt(
                  new u.Api.channels.GetFullChannel({
                    channel: (0, ce.yp)(e, t),
                  })
                );
                if (!(n && n.fullChat instanceof u.Api.ChannelFull)) return;
                const {
                  about: s,
                  onlineCount: a,
                  exportedInvite: i,
                  slowmodeSeconds: o,
                  slowmodeNextSendDate: r,
                  migratedFromChatId: c,
                  migratedFromMaxId: p,
                  canViewParticipants: f,
                  canViewStats: g,
                  linkedChatId: m,
                  hiddenPrehistory: _,
                  call: b,
                  botInfo: w,
                  availableReactions: v,
                  defaultSendAs: A,
                  pinnedMsgId: S,
                  requestsPending: C,
                  recentRequesters: P,
                  statsDc: M,
                  participantsCount: k,
                  stickerset: R,
                  chatPhoto: E,
                  participantsHidden: T,
                  translationsDisabled: B,
                  storiesPinnedAvailable: D,
                  viewForumAsMessages: U,
                } = n.fullChat;
                if (
                  (E instanceof u.Api.Photo &&
                    (d.Ay.photos[E.id.toString()] = E),
                  S)
                ) {
                  const t = Array.isArray(S) ? S : [S];
                  En({
                    "@type": "updatePinnedIds",
                    chatId: e,
                    isPinned: !0,
                    messageIds: t,
                    isLocal: !0,
                  });
                }
                const V =
                    i instanceof u.Api.ChatInviteExported ? i.link : void 0,
                  {
                    members: F,
                    users: q,
                    userStatusesById: O,
                  } = (f && (await Bs(e, t))) || {},
                  {
                    members: H,
                    users: L,
                    userStatusesById: G,
                  } = (f && (await Bs(e, t, "kicked"))) || {},
                  {
                    members: j,
                    users: W,
                    userStatusesById: z,
                  } = (f && (await Bs(e, t, "admin"))) || {},
                  K = w ? x(w) : void 0;
                if (n?.chats?.length > 1) {
                  Ls(n);
                  const [, e] = n.chats,
                    t = I(e);
                  t &&
                    En({
                      "@type": "updateChat",
                      id: t.id,
                      chat: t,
                    });
                }
                n.fullChat.pts && Fe(e, n.fullChat.pts);
                const $ = {
                  ...O,
                  ...G,
                  ...z,
                };
                return {
                  fullInfo: {
                    ...(E instanceof u.Api.Photo && {
                      profilePhoto: (0, h.rk)(E),
                    }),
                    about: s,
                    onlineCount: a,
                    inviteLink: V,
                    slowMode: o
                      ? {
                          seconds: o,
                          nextSendDate: r,
                        }
                      : void 0,
                    migratedFrom: c
                      ? {
                          chatId: (0, y.ol)(c, "chat"),
                          maxMessageId: p,
                        }
                      : void 0,
                    canViewMembers: f,
                    canViewStatistics: g,
                    isPreHistoryHidden: _,
                    members: F,
                    kickedMembers: H,
                    adminMembersById: j ? (0, l.dU)(j, "userId") : void 0,
                    groupCallId: b ? String(b.id) : void 0,
                    linkedChatId: m ? (0, y.ol)(m, "channel") : void 0,
                    botCommands: K,
                    enabledReactions: N(v),
                    sendAsId: A ? (0, y.Zo)(A) : void 0,
                    requestsPending: C,
                    recentRequesterIds: P?.map((e) => (0, y.ol)(e, "user")),
                    statisticsDcId: M,
                    stickerSet: R ? (0, re.uL)(R) : void 0,
                    areParticipantsHidden: T,
                    isTranslationDisabled: B,
                    hasPinnedStories: Boolean(D),
                  },
                  users: [...(q || []), ...(L || []), ...(W || [])],
                  userStatusesById: $,
                  groupCall: b
                    ? {
                        chatId: e,
                        isLoaded: !1,
                        id: b.id.toString(),
                        accessHash: b?.accessHash.toString(),
                        participants: {},
                        version: 0,
                        participantsCount: 0,
                        connectionState: "disconnected",
                      }
                    : void 0,
                  membersCount: k,
                  ...(U && {
                    isForumAsMessages: !0,
                  }),
                };
              })(t, n)
            : (async function (e) {
                const t = await vt(
                  new u.Api.messages.GetFullChat({
                    chatId: (0, ce.yp)(e),
                  })
                );
                if (!(t && t.fullChat instanceof u.Api.ChatFull)) return;
                Ls(t);
                const {
                  about: n,
                  participants: s,
                  exportedInvite: a,
                  botInfo: i,
                  call: o,
                  availableReactions: r,
                  recentRequesters: c,
                  requestsPending: p,
                  chatPhoto: f,
                  translationsDisabled: g,
                } = t.fullChat;
                f instanceof u.Api.Photo && (d.Ay.photos[f.id.toString()] = f);
                const m = T(s),
                  _ = m
                    ? m.filter((e) => {
                        let { isAdmin: t, isOwner: n } = e;
                        return t || n;
                      })
                    : void 0,
                  b = i ? x(i) : void 0,
                  w = a instanceof u.Api.ChatInviteExported ? a.link : void 0,
                  { users: v, userStatusesById: A } = K(t.users);
                return {
                  fullInfo: {
                    ...(f instanceof u.Api.Photo && {
                      profilePhoto: (0, h.rk)(f),
                    }),
                    about: n,
                    members: m,
                    adminMembersById: _ ? (0, l.dU)(_, "userId") : void 0,
                    canViewMembers: !0,
                    botCommands: b,
                    inviteLink: w,
                    groupCallId: o?.id.toString(),
                    enabledReactions: N(r),
                    requestsPending: p,
                    recentRequesterIds: c?.map((e) => (0, y.ol)(e, "user")),
                    isTranslationDisabled: g,
                  },
                  users: v,
                  userStatusesById: A,
                  groupCall: o
                    ? {
                        chatId: e,
                        isLoaded: !1,
                        id: o.id.toString(),
                        accessHash: o.accessHash.toString(),
                        connectionState: "disconnected",
                        participantsCount: 0,
                        version: 0,
                        participants: {},
                      }
                    : void 0,
                  membersCount: m?.length,
                };
              })(t);
        }
        async function Xn(e) {
          const { id: t, accessHash: n } = e,
            s = await vt(
              new u.Api.messages.GetPeerSettings({
                peer: (0, ce.l2)(t, n),
              }),
              {
                abortControllerChatId: t,
              }
            );
          if (s)
            return (
              (0, c.JV)(s.users),
              {
                users: s.users.map(j).filter(Boolean),
                settings: F(s.settings),
              }
            );
        }
        async function es(e) {
          let { query: t } = e;
          const n = await vt(
            new u.Api.contacts.Search({
              q: t,
              limit: a.Bej,
            })
          );
          if (!n) return;
          Ls(n);
          const s = n.myResults.map(y.Zo),
            i = n.chats
              .concat(n.users)
              .map((e) => I(e))
              .filter(Boolean),
            o = n.users.map(j).filter((e) => Boolean(e) && !e.isSelf);
          return {
            accountChats: i.filter((e) => s.includes(e.id)),
            accountUsers: o.filter((e) => s.includes(e.id)),
            globalChats: i.filter((e) => !s.includes(e.id)),
            globalUsers: o.filter((e) => !s.includes(e.id)),
          };
        }
        async function ts(e) {
          let t,
            { type: n, user: s } = e;
          if ("self" === n || "user" === n) {
            const e = await vt(
              new u.Api.users.GetUsers({
                id: [
                  "user" === n && s
                    ? (0, ce.yp)(s.id, s.accessHash)
                    : new u.Api.InputUserSelf(),
                ],
              })
            );
            if (!e || !e.length) return;
            [t] = e;
          } else if ("support" === n) {
            const e = await vt(new u.Api.help.GetSupport());
            if (!e || !e.user) return;
            t = e.user;
          }
          const a = I(t, "support" === n);
          if (a)
            return (
              En({
                "@type": "updateChat",
                id: a.id,
                chat: a,
              }),
              {
                chatId: a.id,
              }
            );
        }
        async function ns(e) {
          let { chat: t, lastLocalMessage: n, noLastMessage: s } = e;
          const { id: a, accessHash: i } = t,
            o = await vt(
              new u.Api.messages.GetPeerDialogs({
                peers: [
                  new u.Api.InputDialogPeer({
                    peer: (0, ce.l2)(a, i),
                  }),
                ],
              })
            );
          if (!o) return;
          if (o?.chats?.length) {
            const e = o.chats.map((e) => I(e));
            En({
              "@type": "updatePeerChat",
              chats: e,
            });
          }
          const r = o.dialogs[0];
          if (!(r && r instanceof u.Api.Dialog)) return;
          const c = Hs(o)[P(r.peer)];
          if (!c) return;
          Ls(o);
          const d = (0, L.Ep)(o.messages[0]);
          ye(o.messages);
          const l = n && (!d || n.date > d.date) ? n : d,
            p = {
              ...w(r, c),
              ...(!s && {
                lastMessage: l,
              }),
            };
          En({
            "@type": "updateChat",
            id: a,
            chat: p,
            ...(0 === r.topMessage &&
              c instanceof u.Api.User && {
                noTopChatsRequest: !0,
              }),
          }),
            xe(o.state),
            pe(p.id, p.muteUntil, En);
        }
        function ss(e) {
          let { chat: t, draft: n } = e;
        }
        async function as(e) {
          let { chat: t, isMuted: n, muteUntil: s = 0 } = e;
          n && !s && (s = a.fRl),
            await vt(
              new u.Api.account.UpdateNotifySettings({
                peer: new u.Api.InputNotifyPeer({
                  peer: (0, ce.l2)(t.id, t.accessHash),
                }),
                settings: new u.Api.InputPeerNotifySettings({
                  muteUntil: s,
                }),
              })
            ),
            En({
              "@type": "updateNotifyExceptions",
              chatId: t.id,
              isMuted: n,
            }),
            ns({
              chat: t,
              noLastMessage: !0,
            });
        }
        async function is(e) {
          let { chat: t, topicId: n, isMuted: s, muteUntil: i = 0 } = e;
          s && !i && (i = a.fRl),
            await vt(
              new u.Api.account.UpdateNotifySettings({
                peer: new u.Api.InputNotifyForumTopic({
                  peer: (0, ce.l2)(t.id, t.accessHash),
                  topMsgId: n,
                }),
                settings: new u.Api.InputPeerNotifySettings({
                  muteUntil: i,
                }),
              })
            ),
            En({
              "@type": "updateTopicNotifyExceptions",
              chatId: t.id,
              topicId: n,
              isMuted: s,
            });
        }
        async function os(e) {
          let { title: t, about: n = "", users: s } = e;
          const a = I(
            (
              await vt(
                new u.Api.channels.CreateChannel({
                  broadcast: !0,
                  title: t,
                  about: n,
                }),
                {
                  shouldThrow: !0,
                }
              )
            ).chats[0]
          );
          let i;
          if (s?.length)
            try {
              const e = await vt(
                new u.Api.channels.InviteToChannel({
                  channel: (0, ce.yp)(a.id, a.accessHash),
                  users: s.map((e) => {
                    let { id: t, accessHash: n } = e;
                    return (0, ce.yp)(t, n);
                  }),
                }),
                {
                  shouldIgnoreUpdates: !0,
                  shouldThrow: !0,
                }
              );
              e && (Ve(e), (i = ua(e)));
            } catch (e) {
              "USER_PRIVACY_RESTRICTED" === e.message
                ? (i = s.map((e) => {
                    let { id: t } = e;
                    return t;
                  }))
                : En({
                    "@type": "error",
                    error: {
                      message: e.message,
                    },
                  });
            }
          return {
            channel: a,
            restrictedUserIds: i,
          };
        }
        function rs(e) {
          let { channelId: t, accessHash: n } = e;
          return vt(
            new u.Api.channels.JoinChannel({
              channel: (0, ce.yp)(t, n),
            }),
            {
              shouldReturnTrue: !0,
              shouldThrow: !0,
            }
          );
        }
        function cs(e) {
          let { chat: t, user: n } = e;
          if ("chatTypeBasicGroup" === t.type)
            return vt(
              new u.Api.messages.DeleteChatUser({
                chatId: (0, ce.yp)(t.id, t.accessHash),
                userId: (0, ce.yp)(n.id, n.accessHash),
              }),
              {
                shouldReturnTrue: !0,
              }
            );
        }
        function ds(e) {
          let { chatId: t } = e;
          return vt(
            new u.Api.messages.DeleteChat({
              chatId: (0, ce.yp)(t),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function us(e) {
          let { channelId: t, accessHash: n } = e;
          return vt(
            new u.Api.channels.LeaveChannel({
              channel: (0, ce.yp)(t, n),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function ls(e) {
          let { channelId: t, accessHash: n } = e;
          return vt(
            new u.Api.channels.DeleteChannel({
              channel: (0, ce.yp)(t, n),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function ps(e) {
          let { title: t, users: n } = e;
          const s = await vt(
            new u.Api.messages.CreateChat({
              title: t,
              users: n.map((e) => {
                let { id: t, accessHash: n } = e;
                return (0, ce.yp)(t, n);
              }),
            }),
            {
              shouldIgnoreUpdates: !0,
              shouldThrow: !0,
            }
          );
          Ve(s);
          const a = ua(s);
          return {
            chat: I(s.chats[0]),
            restrictedUserIds: a,
          };
        }
        async function fs(e) {
          let { chatId: t, accessHash: n, photo: s } = e;
          const a = (0, ce.yp)(t, n);
          let i;
          if (s instanceof File) {
            const e = await It(s);
            i = new u.Api.InputChatUploadedPhoto({
              file: e,
            });
          } else if (s) {
            const e = (0, ce.Hk)(s);
            if (!e) return !1;
            i = new u.Api.InputChatPhoto({
              id: e,
            });
          } else i = new u.Api.InputChatPhotoEmpty();
          return vt(
            a instanceof u.Api.InputChannel
              ? new u.Api.channels.EditPhoto({
                  channel: a,
                  photo: i,
                })
              : new u.Api.messages.EditChatPhoto({
                  chatId: a,
                  photo: i,
                }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function gs(e) {
          let { chat: t, shouldBePinned: n } = e;
          const { id: s, accessHash: a } = t;
          (await vt(
            new u.Api.messages.ToggleDialogPin({
              peer: new u.Api.InputDialogPeer({
                peer: (0, ce.l2)(s, a),
              }),
              pinned: n || void 0,
            })
          )) &&
            En({
              "@type": "updateChatPinned",
              id: t.id,
              isPinned: n,
            });
        }
        function hs(e) {
          let { chat: t, folderId: n } = e;
          const { id: s, accessHash: a } = t;
          return vt(
            new u.Api.folders.EditPeerFolders({
              folderPeers: [
                new u.Api.InputFolderPeer({
                  peer: (0, ce.l2)(s, a),
                  folderId: n,
                }),
              ],
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function ms() {
          const e = await vt(new u.Api.messages.GetDialogFilters());
          if (!e) return;
          const t = e.findIndex((e) => e instanceof u.Api.DialogFilterDefault),
            n = e.filter(c.V1),
            s = n.map((e) => {
              let { id: t } = e;
              return t;
            });
          return (
            -1 !== t && s.splice(t, 0, a.DSF),
            {
              byId: (0, l.dU)(n.map(D), "id"),
              orderedIds: s,
            }
          );
        }
        async function ys() {
          const e = await vt(new u.Api.messages.GetSuggestedDialogFilters());
          if (e) return e.map(U).filter(Boolean);
        }
        async function _s(e) {
          let { id: t, folderUpdate: n } = e;
          n.excludedChatIds = n.excludedChatIds.filter(
            (e) => !n.includedChatIds.includes(e)
          );
          const s = (0, ce.XO)(n);
          (await vt(
            new u.Api.messages.UpdateDialogFilter({
              id: t,
              filter: s,
            })
          )) &&
            En({
              "@type": "updateChatFolder",
              id: t,
              folder: n,
            });
        }
        async function bs(e) {
          const t = await vt(
              new u.Api.messages.UpdateDialogFilter({
                id: e,
                filter: void 0,
              })
            ),
            n = await ys();
          t &&
            En({
              "@type": "updateChatFolder",
              id: e,
              folder: void 0,
            }),
            n &&
              En({
                "@type": "updateRecommendedChatFolders",
                folders: n,
              });
        }
        function ws(e) {
          return vt(
            new u.Api.messages.UpdateDialogFiltersOrder({
              order: e,
            })
          );
        }
        async function vs(e) {
          let { chat: t, hasUnreadMark: n } = e;
          const { id: s, accessHash: a } = t;
          (await vt(
            new u.Api.messages.MarkDialogUnread({
              peer: new u.Api.InputDialogPeer({
                peer: (0, ce.l2)(s, a),
              }),
              unread: n || void 0,
            })
          )) &&
            En({
              "@type": "updateChat",
              id: t.id,
              chat: {
                hasUnreadMark: n,
              },
            });
        }
        async function As(e) {
          return Is(
            await vt(
              new u.Api.contacts.ResolvePhone({
                phone: e,
              })
            )
          );
        }
        async function Ss(e) {
          return Is(
            await vt(
              new u.Api.contacts.ResolveUsername({
                username: e,
              })
            )
          );
        }
        function Is(e) {
          if (!e) return;
          const { users: t, chats: n } = e,
            s = n.length ? I(n[0]) : I(t[0]);
          return s
            ? (Ls(e),
              {
                chat: s,
                user: j(t[0]),
              })
            : void 0;
        }
        function Cs(e) {
          let { chat: t, isEnabled: n } = e;
          const { id: s, accessHash: a } = t,
            i = (0, ce.yp)(s, a);
          return vt(
            new u.Api.channels.TogglePreHistoryHidden({
              channel: i,
              enabled: n,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Ps(e) {
          let { chat: t, bannedRights: n } = e;
          const { id: s, accessHash: a } = t,
            i = (0, ce.l2)(s, a);
          return vt(
            new u.Api.messages.EditChatDefaultBannedRights({
              peer: i,
              bannedRights: (0, ce.Gx)(n),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Ms(e) {
          let { chat: t, user: n, bannedRights: s, untilDate: a } = e;
          const i = (0, ce.yp)(t.id, t.accessHash),
            o = (0, ce.l2)(n.id, n.accessHash);
          return vt(
            new u.Api.channels.EditBanned({
              channel: i,
              participant: o,
              bannedRights: (0, ce.Gx)(s, a),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function ks(e) {
          let { chat: t, user: n, adminRights: s, customTitle: a = "" } = e;
          const i = (0, ce.yp)(t.id, t.accessHash),
            o = (0, ce.yp)(n.id, n.accessHash);
          return vt(
            new u.Api.channels.EditAdmin({
              channel: i,
              userId: o,
              adminRights: (0, ce.BJ)(s),
              rank: a,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function Rs(e, t) {
          const n = (0, ce.yp)(e.id, e.accessHash);
          await vt(
            n instanceof u.Api.InputChannel
              ? new u.Api.channels.EditTitle({
                  channel: n,
                  title: t,
                })
              : new u.Api.messages.EditChatTitle({
                  chatId: n,
                  title: t,
                }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function Es(e, t) {
          (await vt(
            new u.Api.messages.EditChatAbout({
              peer: (0, ce.l2)(e.id, e.accessHash),
              about: t,
            })
          )) &&
            En({
              "@type": "updateChatFullInfo",
              id: e.id,
              fullInfo: {
                about: t,
              },
            });
        }
        function Ts(e) {
          let { chat: t, isEnabled: n } = e;
          const { id: s, accessHash: a } = t,
            i = (0, ce.yp)(s, a);
          return vt(
            new u.Api.channels.ToggleSignatures({
              channel: i,
              enabled: n,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function Bs(e, t) {
          let n,
            s = arguments.length > 3 ? arguments[3] : void 0;
          switch (
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "recent"
          ) {
            case "kicked":
              n = new u.Api.ChannelParticipantsKicked({
                q: "",
              });
              break;
            case "admin":
              n = new u.Api.ChannelParticipantsAdmins();
              break;
            default:
              n = new u.Api.ChannelParticipantsRecent();
          }
          if ("user" === (0, ce.Ou)(e)) return;
          const i = await vt(
            new u.Api.channels.GetParticipants({
              channel: (0, ce.yp)(e, t),
              filter: n,
              offset: s,
              limit: a.WG3,
            }),
            {
              abortControllerChatId: e,
            }
          );
          if (!i || i instanceof u.Api.channels.ChannelParticipantsNotModified)
            return;
          Ls(i);
          const { users: o, userStatusesById: r } = K(i.users);
          return {
            members: T(i),
            users: o,
            userStatusesById: r,
          };
        }
        async function Ds() {
          const e = await vt(new u.Api.channels.GetGroupsForDiscussion());
          if (e) return Ls(e), e.chats.map((e) => I(e));
        }
        function Us(e) {
          let { channel: t, chat: n } = e;
          return vt(
            new u.Api.channels.SetDiscussionGroup({
              broadcast: (0, ce.l2)(t.id, t.accessHash),
              group: n
                ? (0, ce.l2)(n.id, n.accessHash)
                : new u.Api.InputChannelEmpty(),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function xs(e) {
          const t = await vt(
            new u.Api.messages.MigrateChat({
              chatId: (0, ce.yp)(e.id),
            }),
            {
              shouldThrow: !0,
            }
          );
          if (!(t && t instanceof u.Api.Updates))
            return void (
              a.Oig && console.error("Unexpected channel creation update", t)
            );
          Ls(t);
          const n = t.updates.find(
            (e) => e instanceof u.Api.UpdateChannel
          ).channelId;
          return I(
            t.chats.find(
              (e) =>
                e instanceof u.Api.Channel && e.id.toString() === n.toString()
            )
          );
        }
        async function Vs(e) {
          const t = await vt(
            new u.Api.messages.CheckChatInvite({
              hash: e,
            })
          );
          if (!t) return;
          let n;
          if (t instanceof u.Api.ChatInvite) {
            const {
              photo: n,
              participantsCount: s,
              title: a,
              channel: i,
              requestNeeded: o,
              about: r,
              megagroup: d,
            } = t;
            n instanceof u.Api.Photo && (0, c.Kv)(t.photo),
              En({
                "@type": "showInvite",
                data: {
                  title: a,
                  about: r,
                  hash: e,
                  participantsCount: s,
                  isChannel: i && !d,
                  isRequestNeeded: o,
                  ...(n instanceof u.Api.Photo && {
                    photo: (0, h.rk)(n),
                  }),
                },
              });
          } else
            (n = I(t.chat)),
              n &&
                En({
                  "@type": "updateChat",
                  id: n.id,
                  chat: n,
                });
          return n
            ? {
                chatId: n.id,
              }
            : void 0;
        }
        async function Fs(e, t) {
          try {
            if ("chatTypeChannel" === e.type || "chatTypeSuperGroup" === e.type)
              try {
                const n = await vt(
                  new u.Api.channels.InviteToChannel({
                    channel: (0, ce.yp)(e.id, e.accessHash),
                    users: t.map((e) => (0, ce.yp)(e.id, e.accessHash)),
                  }),
                  {
                    shouldIgnoreUpdates: !0,
                    shouldThrow: !0,
                  }
                );
                if (n) return Ve(n), ua(n);
              } catch (e) {
                if ("USER_PRIVACY_RESTRICTED" === e.message)
                  return t.map((e) => {
                    let { id: t } = e;
                    return t;
                  });
                throw e;
              }
            const n = await Promise.all(
              t.map(async (t) => {
                try {
                  const n = await vt(
                    new u.Api.messages.AddChatUser({
                      chatId: (0, ce.yp)(e.id),
                      userId: (0, ce.yp)(t.id, t.accessHash),
                    }),
                    {
                      shouldIgnoreUpdates: !0,
                      shouldThrow: !0,
                    }
                  );
                  return n ? (Ve(n), ua(n)) : void 0;
                } catch (e) {
                  if ("USER_PRIVACY_RESTRICTED" === e.message) return [t.id];
                  throw e;
                }
              })
            );
            if (n) return n.flat().filter(Boolean);
          } catch (e) {
            En({
              "@type": "error",
              error: {
                message: e.message,
              },
            });
          }
        }
        function Ns(e, t) {
          return "chatTypeChannel" === e.type || "chatTypeSuperGroup" === e.type
            ? Ms({
                chat: e,
                user: t,
                bannedRights: {
                  viewMessages: !0,
                  sendMessages: !0,
                  sendMedia: !0,
                  sendStickers: !0,
                  sendGifs: !0,
                  sendGames: !0,
                  sendInline: !0,
                  embedLinks: !0,
                  sendPolls: !0,
                  changeInfo: !0,
                  inviteUsers: !0,
                  pinMessages: !0,
                  manageTopics: !0,
                  sendPhotos: !0,
                  sendVideos: !0,
                  sendRoundvideos: !0,
                  sendAudios: !0,
                  sendVoices: !0,
                  sendDocs: !0,
                  sendPlain: !0,
                },
                untilDate: a.fRl,
              })
            : vt(
                new u.Api.messages.DeleteChatUser({
                  chatId: (0, ce.yp)(e.id),
                  userId: (0, ce.yp)(t.id, t.accessHash),
                }),
                {
                  shouldReturnTrue: !0,
                }
              );
        }
        function qs(e, t) {
          return vt(
            new u.Api.channels.ToggleJoinToSend({
              channel: (0, ce.yp)(e.id, e.accessHash),
              enabled: t,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Os(e, t) {
          return vt(
            new u.Api.channels.ToggleJoinRequest({
              channel: (0, ce.yp)(e.id, e.accessHash),
              enabled: t,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Hs(e, t) {
          const n = {};
          return (
            e.chats?.forEach((e) => {
              const s = `chat${e.id}`;
              (t?.[s] && "min" in e && e.min) || (n[s] = e);
            }),
            e.users?.forEach((e) => {
              const s = `user${e.id}`;
              (t?.[s] && "min" in e && e.min) || (n[s] = e);
            }),
            n
          );
        }
        function Ls(e) {
          "users" in e && (0, c.JV)(e.users),
            "chats" in e && (0, c.JV)(e.chats),
            "messages" in e &&
              e.messages.forEach((e) => {
                e instanceof u.Api.Message && (0, ce.ot)(e) && (0, c.NZ)(e);
              });
        }
        async function Gs(e) {
          let { hash: t } = e;
          const n = await vt(
            new u.Api.messages.ImportChatInvite({
              hash: t,
            })
          );
          if (n instanceof u.Api.Updates && n.chats.length)
            return I(n.chats[0]);
        }
        function js(e) {
          let { chat: t, enabledReactions: n } = e;
          return vt(
            new u.Api.messages.SetChatAvailableReactions({
              peer: (0, ce.l2)(t.id, t.accessHash),
              availableReactions: (0, ce.lc)(n),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Ws(e) {
          let { chat: t, isProtected: n } = e;
          const { id: s, accessHash: a } = t;
          return vt(
            new u.Api.messages.ToggleNoForwards({
              peer: (0, ce.l2)(s, a),
              enabled: n,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function zs(e) {
          let { chat: t, isEnabled: n } = e;
          const { id: s, accessHash: a } = t;
          return vt(
            new u.Api.channels.ToggleParticipantsHidden({
              channel: (0, ce.l2)(s, a),
              enabled: n,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Ks(e) {
          let { chat: t, isEnabled: n } = e;
          const { id: s, accessHash: a } = t;
          return vt(
            new u.Api.channels.ToggleForum({
              channel: (0, ce.l2)(s, a),
              enabled: n,
            }),
            {
              shouldReturnTrue: !0,
              shouldThrow: !0,
            }
          );
        }
        async function $s(e) {
          let {
            chat: t,
            title: n,
            iconColor: s,
            iconEmojiId: a,
            sendAs: i,
          } = e;
          const { id: o, accessHash: r } = t,
            c = await vt(
              new u.Api.channels.CreateForumTopic({
                channel: (0, ce.l2)(o, r),
                title: n,
                iconColor: s,
                iconEmojiId: a ? sn()(a) : void 0,
                sendAs: i ? (0, ce.l2)(i.id, i.accessHash) : void 0,
                randomId: (0, ce.I2)(),
              })
            );
          if (c instanceof u.Api.Updates && c.updates.length)
            return c.updates?.find((e) => e instanceof u.Api.UpdateMessageID)
              ?.id;
        }
        async function Js(e) {
          let {
            chat: t,
            query: n,
            offsetTopicId: s,
            offsetId: i,
            offsetDate: o,
            limit: r = a.iIc,
          } = e;
          const { id: c, accessHash: d } = t,
            l = await vt(
              new u.Api.channels.GetForumTopics({
                channel: (0, ce.l2)(c, d),
                limit: r,
                q: n,
                offsetTopic: s,
                offsetId: i,
                offsetDate: o,
              })
            );
          if (!l) return;
          Ls(l);
          const { count: p, orderByCreateDate: f } = l,
            g = l.topics.map(q).filter(Boolean),
            h = l.messages.map(L.Ep).filter(Boolean);
          return (
            ye(l.messages),
            {
              topics: g,
              messages: h,
              users: l.users.map(j).filter(Boolean),
              chats: l.chats.map((e) => I(e)).filter(Boolean),
              count: p + 1,
              shouldOrderByCreateDate: f,
              draftsById: l.topics.reduce(
                (e, t) => (
                  t instanceof u.Api.ForumTopic &&
                    t.draft &&
                    (e[t.id] = (0, L.T9)(t.draft)),
                  e
                ),
                {}
              ),
              readInboxMessageIdByTopicId: l.topics.reduce(
                (e, t) => (
                  t instanceof u.Api.ForumTopic &&
                    t.readInboxMaxId &&
                    (e[t.id] = t.readInboxMaxId),
                  e
                ),
                {}
              ),
            }
          );
        }
        async function Zs(e) {
          let { chat: t, topicId: n } = e;
          const { id: s, accessHash: a } = t,
            i = await vt(
              new u.Api.channels.GetForumTopicsByID({
                channel: (0, ce.l2)(s, a),
                topics: [n],
              })
            );
          if (!(i?.topics.length && i.topics[0] instanceof u.Api.ForumTopic))
            return;
          Ls(i);
          const o = i.messages.map(L.Ep).filter(Boolean);
          ye(i.messages);
          const r = i.users.map(j).filter(Boolean),
            c = i.chats.map((e) => I(e)).filter(Boolean);
          return {
            topic: q(i.topics[0]),
            messages: o,
            users: r,
            chats: c,
          };
        }
        function Qs(e) {
          let { chat: t, topicId: n } = e;
          const { id: s, accessHash: a } = t;
          return vt(
            new u.Api.channels.DeleteTopicHistory({
              channel: (0, ce.l2)(s, a),
              topMsgId: n,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Ys(e) {
          let { chat: t, topicId: n, isPinned: s } = e;
          const { id: a, accessHash: i } = t;
          return vt(
            new u.Api.channels.UpdatePinnedForumTopic({
              channel: (0, ce.l2)(a, i),
              topicId: n,
              pinned: s,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Xs(e) {
          let {
            chat: t,
            topicId: n,
            title: s,
            iconEmojiId: i,
            isClosed: o,
            isHidden: r,
          } = e;
          const { id: c, accessHash: d } = t;
          return vt(
            new u.Api.channels.EditForumTopic({
              channel: (0, ce.l2)(c, d),
              topicId: n,
              title: s,
              iconEmojiId: n !== a.HxB && i ? sn()(i) : void 0,
              closed: o,
              hidden: r,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function ea(e) {
          let { slug: t } = e;
          const n = await vt(
              new u.Api.chatlists.CheckChatlistInvite({
                slug: t,
              })
            ),
            s = (function (e, t) {
              return e instanceof u.Api.chatlists.ChatlistInvite
                ? {
                    slug: t,
                    title: e.title,
                    emoticon: e.emoticon,
                    peerIds: e.peers.map(y.Zo).filter(Boolean),
                  }
                : e instanceof u.Api.chatlists.ChatlistInviteAlready
                ? {
                    slug: t,
                    folderId: e.filterId,
                    missingPeerIds: e.missingPeers.map(y.Zo).filter(Boolean),
                    alreadyPeerIds: e.alreadyPeers.map(y.Zo).filter(Boolean),
                  }
                : void 0;
            })(n, t);
          if (n && s)
            return (
              Ls(n),
              {
                invite: s,
                users: n.users.map(j).filter(Boolean),
                chats: n.chats.map((e) => I(e)).filter(Boolean),
              }
            );
        }
        function ta(e) {
          let { slug: t, peers: n } = e;
          return vt(
            new u.Api.chatlists.JoinChatlistInvite({
              slug: t,
              peers: n.map((e) => (0, ce.l2)(e.id, e.accessHash)),
            }),
            {
              shouldReturnTrue: !0,
              shouldThrow: !0,
            }
          );
        }
        async function na(e) {
          let { folderId: t } = e;
          const n = await vt(
            new u.Api.chatlists.GetLeaveChatlistSuggestions({
              chatlist: new u.Api.InputChatlistDialogFilter({
                filterId: t,
              }),
            })
          );
          if (n) return n.map(y.Zo);
        }
        function sa(e) {
          let { folderId: t, peers: n } = e;
          return vt(
            new u.Api.chatlists.LeaveChatlist({
              chatlist: new u.Api.InputChatlistDialogFilter({
                filterId: t,
              }),
              peers: n.map((e) => (0, ce.l2)(e.id, e.accessHash)),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function aa(e) {
          let { folderId: t, title: n, peers: s } = e;
          const a = await vt(
            new u.Api.chatlists.ExportChatlistInvite({
              chatlist: new u.Api.InputChatlistDialogFilter({
                filterId: t,
              }),
              title: n || "",
              peers: s.map((e) => (0, ce.l2)(e.id, e.accessHash)),
            }),
            {
              shouldThrow: !0,
            }
          );
          if (a && !(a.filter instanceof u.Api.DialogFilterDefault))
            return {
              filter: D(a.filter),
              invite: O(a.invite),
            };
        }
        function ia(e) {
          let { folderId: t, slug: n } = e;
          return vt(
            new u.Api.chatlists.DeleteExportedInvite({
              chatlist: new u.Api.InputChatlistDialogFilter({
                filterId: t,
              }),
              slug: n,
            })
          );
        }
        async function oa(e) {
          let { folderId: t, slug: n, title: s, peers: a } = e;
          const i = await vt(
            new u.Api.chatlists.EditExportedInvite({
              chatlist: new u.Api.InputChatlistDialogFilter({
                filterId: t,
              }),
              slug: n,
              title: s,
              peers: a.map((e) => (0, ce.l2)(e.id, e.accessHash)),
            }),
            {
              shouldThrow: !0,
            }
          );
          if (i) return O(i);
        }
        async function ra(e) {
          let { folderId: t } = e;
          const n = await vt(
            new u.Api.chatlists.GetExportedInvites({
              chatlist: new u.Api.InputChatlistDialogFilter({
                filterId: t,
              }),
            })
          );
          if (n)
            return (
              Ls(n),
              {
                invites: n.invites.map(O).filter(Boolean),
                users: n.users.map(j).filter(Boolean),
                chats: n.chats.map((e) => I(e)).filter(Boolean),
              }
            );
        }
        function ca(e) {
          let { chat: t, isEnabled: n } = e;
          return vt(
            new u.Api.messages.TogglePeerTranslations({
              disabled: !n || void 0,
              peer: (0, ce.l2)(t.id, t.accessHash),
            })
          );
        }
        function da(e) {
          let { chat: t, isEnabled: n } = e;
          const { id: s, accessHash: a } = t,
            i = (0, ce.yp)(s, a);
          return vt(
            new u.Api.channels.ToggleViewForumAsMessages({
              channel: i,
              enabled: Boolean(n),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function ua(e) {
          if (
            !(e instanceof u.Api.Updates || e instanceof u.Api.UpdatesCombined)
          )
            return;
          const t = e.updates.filter(
            (e) => e instanceof u.Api.UpdateGroupInvitePrivacyForbidden
          );
          return 0 !== t.length
            ? t.map((e) => (0, y.ol)(e.userId, "user"))
            : void 0;
        }
        async function la(e) {
          let { peer: t, reason: n, description: s } = e;
          return await vt(
            new u.Api.account.ReportPeer({
              peer: (0, ce.l2)(t.id, t.accessHash),
              reason: (0, ce.z0)(n),
              message: s,
            })
          );
        }
        async function pa(e) {
          let { peer: t, photo: n, reason: s, description: a } = e;
          const i = (0, ce.Hk)(n);
          if (i)
            return await vt(
              new u.Api.account.ReportProfilePhoto({
                peer: (0, ce.l2)(t.id, t.accessHash),
                photoId: i,
                reason: (0, ce.z0)(s),
                message: a,
              })
            );
        }
        async function fa(e) {
          let {
            hash: t,
            areCallsEnabled: n,
            areSecretChatsEnabled: s,
            isConfirmed: a,
          } = e;
        }
        async function ga(e) {
          let { days: t } = e;
          return await vt(
            new u.Api.account.SetAuthorizationTTL({
              authorizationTtlDays: t,
            })
          );
        }
        var ha = n(8172),
          ma = n(87679),
          ya = n(70497),
          _a = n(718),
          ba = n(48287).hp;
        const wa = 1e3,
          va = 63;
        let Aa;
        async function Sa(e) {
          let { chat: t, threadId: n, offsetId: s, ...i } = e;
          const o =
            n === Ye.l3 ? u.Api.messages.GetHistory : u.Api.messages.GetReplies;
          let r;
          try {
            r = await vt(
              new o({
                peer: (0, ce.l2)(t.id, t.accessHash),
                ...(n !== Ye.l3 && {
                  msgId: Number(n),
                }),
                ...(s && {
                  offsetId: Math.min(s, a.fRl),
                }),
                ...i,
              }),
              {
                shouldThrow: !0,
                abortControllerChatId: t.id,
                abortControllerThreadId: n,
              }
            );
          } catch (e) {
            "CHANNEL_PRIVATE" === e.message &&
              Aa({
                "@type": "updateChat",
                id: t.id,
                chat: {
                  isRestricted: !0,
                },
              });
          }
          if (
            !r ||
            r instanceof u.Api.messages.MessagesNotModified ||
            !r.messages
          )
            return;
          ei(r);
          const c = r.messages.map(L.Ep).filter(Boolean),
            d = r.users.map(j).filter(Boolean),
            l = r.chats.map((e) => I(e)).filter(Boolean);
          return (
            ye(r.messages),
            {
              messages: c,
              users: d,
              chats: l,
            }
          );
        }
        async function Ia(e) {
          let { chat: t, messageId: n } = e;
          const s = "channel" === (0, ce.Ou)(t.id);
          let a;
          try {
            a = await vt(
              s
                ? new u.Api.channels.GetMessages({
                    channel: (0, ce.yp)(t.id, t.accessHash),
                    id: [
                      new u.Api.InputMessageID({
                        id: n,
                      }),
                    ],
                  })
                : new u.Api.messages.GetMessages({
                    id: [
                      new u.Api.InputMessageID({
                        id: n,
                      }),
                    ],
                  }),
              {
                shouldThrow: !0,
                abortControllerChatId: t.id,
              }
            );
          } catch (e) {
            const { message: t } = e;
            "CHANNEL_PRIVATE" !== t &&
              Aa({
                "@type": "error",
                error: {
                  message: t,
                  isSlowMode: !1,
                  hasErrorKey: !0,
                },
              });
          }
          if (!a || a instanceof u.Api.messages.MessagesNotModified) return;
          "pts" in a && Fe(t.id, a.pts);
          const i = a.messages[0];
          if (!i) return;
          if (i instanceof u.Api.MessageEmpty) return Ye.K1;
          const o = i && (0, L.Ep)(i);
          return (
            ye([i]),
            o
              ? (i instanceof u.Api.Message && (0, c.NZ)(i),
                {
                  message: o,
                  users: a.users.map(j).filter(Boolean),
                })
              : void 0
          );
        }
        let Ca = Promise.resolve();
        function Pa(e, t) {
          let {
            chat: n,
            text: s,
            entities: i,
            replyInfo: o,
            attachment: r,
            sticker: c,
            story: d,
            gif: l,
            poll: p,
            contact: f,
            isSilent: g,
            scheduledAt: h,
            groupedId: m,
            noWebPage: y,
            sendAs: _,
            shouldUpdateStickerSetOrder: b,
            wasDrafted: w,
            localId: v,
          } = e;
          i && (i = i.filter((e) => e.offset + e.length <= s.length)),
            l && (l.size = l.size.value.toString());
          const A = {
              chat: n,
              text: s,
              entities: i,
              replyInfo: o,
              attachment: r,
              sticker: c,
              gif: l,
              poll: p,
              contact: f,
              isSilent: g,
              scheduledAt: h,
              groupedId: m,
              noWebPage: y,
              sendAs: _,
              localId: v,
              needResend: !1,
            },
            S = (0, L.nD)(n, s, i, o, r, c, l, p, f, m, h, _, d, A);
          Aa({
            "@type": S.isScheduled ? "newScheduledMessage" : "newMessage",
            id: S.id,
            chatId: n.id,
            message: S,
            wasDrafted: w,
          });
          const I = setTimeout(() => {
              Aa({
                "@type": S.isScheduled
                  ? "updateScheduledMessage"
                  : "updateMessage",
                id: S.id,
                chatId: n.id,
                message: {
                  sendingState: "messageSendingStatePending",
                },
              });
            }, wa),
            C = (0, ce.I2)();
          return m
            ? (function (e, t, n, s) {
                let {
                    chat: i,
                    text: o,
                    entities: r,
                    replyInfo: c,
                    attachment: d,
                    groupedId: l,
                    isSilent: p,
                    scheduledAt: f,
                    sendAs: g,
                  } = e,
                  h = -1;
                Ma[l] ||
                  (Ma[l] = {
                    counter: 0,
                    singleMediaByIndex: {},
                    localMessages: {},
                  }),
                  (h = Ma[l].counter++);
                const m = Ca;
                return (
                  (Ca = (async () => {
                    let e;
                    try {
                      e = await Ea(n, d, s);
                    } catch (e) {
                      return (
                        a.Oig && console.warn(e),
                        Ma[l].counter--,
                        void (await m)
                      );
                    }
                    const y = await (async function (e, t) {
                      const n = await vt(
                          new u.Api.messages.UploadMedia({
                            peer: e,
                            media: t,
                          })
                        ),
                        s = t.spoiler;
                      if (
                        n instanceof u.Api.MessageMediaPhoto &&
                        n.photo &&
                        n.photo instanceof u.Api.Photo
                      ) {
                        const {
                          photo: { id: e, accessHash: t, fileReference: a },
                        } = n;
                        return new u.Api.InputMediaPhoto({
                          id: new u.Api.InputPhoto({
                            id: e,
                            accessHash: t,
                            fileReference: a,
                          }),
                          spoiler: s,
                        });
                      }
                      if (
                        n instanceof u.Api.MessageMediaDocument &&
                        n.document &&
                        n.document instanceof u.Api.Document
                      ) {
                        const {
                          document: { id: e, accessHash: t, fileReference: a },
                        } = n;
                        return new u.Api.InputMediaDocument({
                          id: new u.Api.InputDocument({
                            id: e,
                            accessHash: t,
                            fileReference: a,
                          }),
                          spoiler: s,
                        });
                      }
                    })((0, ce.l2)(i.id, i.accessHash), e);
                    if ((await m, !y))
                      return (
                        Ma[l].counter--,
                        void (
                          a.Oig &&
                          console.warn("Failed to upload grouped media")
                        )
                      );
                    if (
                      ((Ma[l].singleMediaByIndex[h] =
                        new u.Api.InputSingleMedia({
                          media: y,
                          randomId: t,
                          message: o || "",
                          entities: r ? r.map(ce.Gr) : void 0,
                        })),
                      (Ma[l].localMessages[t.toString()] = n),
                      Object.keys(Ma[l].singleMediaByIndex).length <
                        Ma[l].counter)
                    )
                      return;
                    const { singleMediaByIndex: _, localMessages: b } = Ma[l];
                    delete Ma[l];
                    const w = {
                      rq_datetime: Date.now(),
                      clearDraft: !0,
                      peer: (0, ce.l2)(i.id, i.accessHash),
                      multiMedia: Object.values(_),
                      replyTo: c && (0, ce.mH)(c),
                      ...(p && {
                        silent: p,
                      }),
                      ...(f && {
                        scheduleDate: f,
                      }),
                      ...(g && {
                        sendAs: (0, ce.l2)(g.id, g.accessHash),
                      }),
                    };
                    try {
                      const e = await vt(
                        new u.Api.messages.SendMultiMedia({
                          clearDraft: !0,
                          peer: (0, ce.l2)(i.id, i.accessHash),
                          multiMedia: Object.values(_),
                          replyTo: c && (0, ce.mH)(c),
                          ...(p && {
                            silent: p,
                          }),
                          ...(f && {
                            scheduleDate: f,
                          }),
                          ...(g && {
                            sendAs: (0, ce.l2)(g.id, g.accessHash),
                          }),
                        }),
                        {
                          shouldIgnoreUpdates: !0,
                        }
                      );
                      e && gi(b, e),
                        (0, _a.indexedDBAddLog)({
                          tl: "messages.SendMultiMedia",
                          rq: w,
                          rs: {
                            rs_datetime: Date.now(),
                            ...e,
                          },
                        });
                    } catch (e) {
                      a.Oig &&
                        console.error("ERROR: messages.SendMultiMedia", {
                          error: e,
                        });
                      for (const t of Object.entries(b).map((e) => {
                        let [t, n] = e;
                        return n;
                      }))
                        Aa({
                          "@type": "updateMessageSendFailed",
                          chatId: i.id,
                          localId: t.id,
                          error: e.message,
                        });
                      (0, _a.indexedDBAddLog)({
                        tl: "messages.SendMultiMedia",
                        rq: w,
                        rs: {
                          rs_datetime: Date.now(),
                          err: e?.toString(),
                        },
                      });
                    }
                  })()),
                  Ca
                );
              })(
                {
                  chat: n,
                  text: s,
                  entities: i,
                  replyInfo: o,
                  attachment: r,
                  groupedId: m,
                  isSilent: g,
                  scheduledAt: h,
                },
                C,
                S,
                t
              )
            : (async () => {
                let e;
                if (r)
                  try {
                    e = await Ea(S, r, t);
                  } catch (e) {
                    return a.Oig && console.warn(e), void (await Ca);
                  }
                else
                  c
                    ? (e = (0, ce.oy)(c))
                    : l
                    ? (e = (0, ce.oy)(l))
                    : p
                    ? (e = (0, ce.Se)(p, C))
                    : d
                    ? (e = (0, ce.en)(d))
                    : f &&
                      (e = new u.Api.InputMediaContact({
                        phoneNumber: f.phoneNumber,
                        firstName: f.firstName,
                        lastName: f.lastName,
                        vcard: "",
                      }));
                const m = e
                    ? u.Api.messages.SendMedia
                    : u.Api.messages.SendMessage,
                  w = {
                    rq_datetime: Date.now(),
                    clearDraft: !0,
                    message: s || "",
                    entities: i ? i.map(ce.Gr) : void 0,
                    peer: (0, ce.l2)(n.id, n.accessHash),
                    randomId: C,
                    replyTo: o && (0, ce.mH)(o),
                    ...(g && {
                      silent: g,
                    }),
                    ...(h && {
                      scheduleDate: h,
                    }),
                    ...(e && {
                      media: e,
                    }),
                    ...(y && {
                      noWebpage: y,
                    }),
                    ...(_ && {
                      sendAs: (0, ce.l2)(_.id, _.accessHash),
                    }),
                    ...(b && {
                      updateStickersetsOrder: b,
                    }),
                  };
                try {
                  const t = await vt(
                    new m({
                      clearDraft: !0,
                      message: s || "",
                      entities: i ? i.map(ce.Gr) : void 0,
                      peer: (0, ce.l2)(n.id, n.accessHash),
                      randomId: C,
                      replyTo: o && (0, ce.mH)(o),
                      ...(g && {
                        silent: g,
                      }),
                      ...(h && {
                        scheduleDate: h,
                      }),
                      ...(e && {
                        media: e,
                      }),
                      ...(y && {
                        noWebpage: y,
                      }),
                      ...(_ && {
                        sendAs: (0, ce.l2)(_.id, _.accessHash),
                      }),
                    }),
                    {
                      shouldThrow: !0,
                      shouldIgnoreUpdates: !0,
                    }
                  );
                  t && hi(S, t),
                    e &&
                      (0, _a.indexedDBAddLog)({
                        tl: "messages.SendMedia",
                        rq: w,
                        rs: {
                          rs_datetime: Date.now(),
                          ...t,
                        },
                      });
                } catch (t) {
                  a.Oig &&
                    console.error("ERROR: " + m.className, {
                      error: t,
                    }),
                    Aa({
                      "@type": "updateMessageSendFailed",
                      chatId: n.id,
                      localId: S.id,
                      error: t.message,
                    }),
                    clearTimeout(I),
                    e &&
                      (0, _a.indexedDBAddLog)({
                        tl: "messages.SendMedia",
                        rq: w,
                        rs: {
                          rs_datetime: Date.now(),
                          err: t?.toString(),
                        },
                      });
                }
              })();
        }
        const Ma = {};
        async function ka(e) {
          let { chat: t, message: n, text: s, entities: a, noWebPage: i } = e;
          const o = 1e3 * n.date > Date.now() + 1e3 * (0, p.SF)();
          let r = {
            content: {
              ...n.content,
              ...(s && {
                text: {
                  text: s,
                  entities: a,
                },
              }),
            },
          };
          const c = (0, ha.e)(r.content, r.groupedId);
          (r = {
            ...r,
            emojiOnlyCount: c,
          }),
            Aa({
              "@type": o ? "updateScheduledMessage" : "updateMessage",
              id: n.id,
              chatId: t.id,
              message: r,
            });
          const d = a && a.map(ce.Gr);
          await vt(
            new u.Api.messages.EditMessage({
              message: s || "",
              entities: d,
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n.id,
              ...(o && {
                scheduleDate: n.date,
              }),
              ...(i && {
                noWebpage: i,
              }),
            })
          );
        }
        async function Ra(e) {
          let { chat: t, message: n, scheduledAt: s } = e;
          await vt(
            new u.Api.messages.EditMessage({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n.id,
              scheduleDate: s,
            })
          );
        }
        async function Ea(e, t, n) {
          const {
              filename: s,
              blobUrl: i,
              mimeType: o,
              quick: r,
              voice: c,
              audio: d,
              previewBlobUrl: p,
              shouldSendAsFile: f,
              shouldSendAsSpoiler: g,
            } = t,
            h = (t) => {
              n.isCanceled ? (h.isCanceled = !0) : n(t, e.id);
            },
            m = a.fNs.has(o),
            [y, _] = await Promise.all(
              (0, l.oE)([
                (async (e, t) => It(await (0, ma.t2)(e, s), t))(i, h),
                !1,
              ])
            ),
            b = [
              new u.Api.DocumentAttributeFilename({
                fileName: s,
              }),
            ];
          if (!f) {
            if (r) {
              if (a.RJA.has(o) && o !== a.Vz3)
                return new u.Api.InputMediaUploadedPhoto({
                  file: y,
                  spoiler: g,
                });
              if (m) {
                const { width: e, height: t, duration: n } = r;
                void 0 !== n &&
                  b.push(
                    new u.Api.DocumentAttributeVideo({
                      duration: n,
                      w: e,
                      h: t,
                      supportsStreaming: !0,
                    })
                  );
              }
            }
            if (c) {
              const { duration: e, waveform: t } = c,
                { data: n } = (0, ya.p)(t, va);
              b.push(
                new u.Api.DocumentAttributeAudio({
                  voice: !0,
                  duration: e,
                  waveform: ba.from(n),
                })
              );
            }
            if (d) {
              const { duration: e, title: t, performer: n } = d;
              b.push(
                new u.Api.DocumentAttributeAudio({
                  duration: e,
                  title: t,
                  performer: n,
                })
              );
            }
          }
          return new u.Api.InputMediaUploadedDocument({
            file: y,
            mimeType: o,
            attributes: b,
            thumb: _,
            forceFile: f,
            spoiler: g,
          });
        }
        async function Ta(e) {
          let {
            chat: t,
            messageId: n,
            isUnpin: s,
            isOneSide: a,
            isSilent: i,
          } = e;
          await vt(
            new u.Api.messages.UpdatePinnedMessage({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
              ...(s && {
                unpin: !0,
              }),
              ...(a && {
                pmOneside: !0,
              }),
              ...(i && {
                silent: !0,
              }),
            })
          );
        }
        async function Ba(e) {
          let { chat: t, threadId: n } = e;
          await vt(
            new u.Api.messages.UnpinAllMessages({
              peer: (0, ce.l2)(t.id, t.accessHash),
              ...(n && {
                topMsgId: n,
              }),
            })
          );
        }
        async function Da(e) {
          let { chat: t, messageIds: n, shouldDeleteForAll: s } = e;
          const a = "channel" === (0, ce.Ou)(t.id);
          (await vt(
            a
              ? new u.Api.channels.DeleteMessages({
                  channel: (0, ce.yp)(t.id, t.accessHash),
                  id: n,
                })
              : new u.Api.messages.DeleteMessages({
                  id: n,
                  ...(s && {
                    revoke: !0,
                  }),
                })
          )) &&
            Aa({
              "@type": "deleteMessages",
              ids: n,
              ...(a && {
                chatId: t.id,
              }),
            });
        }
        function Ua(e) {
          let { chat: t, messageIds: n } = e;
          vt(
            new u.Api.messages.DeleteScheduledMessages({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
            })
          );
        }
        async function xa(e) {
          let { chat: t, shouldDeleteForAll: n, maxId: s } = e;
          const a = "channel" === (0, ce.Ou)(t.id),
            i = await vt(
              a
                ? new u.Api.channels.DeleteHistory({
                    channel: (0, ce.yp)(t.id, t.accessHash),
                    maxId: s,
                  })
                : new u.Api.messages.DeleteHistory({
                    peer: (0, ce.l2)(t.id, t.accessHash),
                    ...(n && {
                      revoke: !0,
                    }),
                    ...(!n && {
                      just_clear: !0,
                    }),
                    maxId: s,
                  })
            );
          i &&
            ("offset" in i && i.offset
              ? await xa({
                  chat: t,
                  shouldDeleteForAll: n,
                  maxId: s,
                })
              : Aa({
                  "@type": "deleteHistory",
                  chatId: t.id,
                }));
        }
        async function Va(e) {
          let { peer: t, messageIds: n, reason: s, description: a } = e;
          return await vt(
            new u.Api.messages.Report({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
              reason: (0, ce.z0)(s),
              message: a,
            })
          );
        }
        async function Fa(e) {
          let { peer: t, threadId: n, action: s } = e;
          const i = (0, ce._T)(s);
          if (i)
            try {
              return await vt(
                new u.Api.messages.SetTyping({
                  peer: (0, ce.l2)(t.id, t.accessHash),
                  topMsgId: n,
                  action: i,
                }),
                {
                  shouldThrow: !0,
                  abortControllerChatId: t.id,
                  abortControllerThreadId: n,
                }
              );
            } catch (e) {}
          else a.Oig && console.warn("Unsupported message action", s);
        }
        async function Na(e) {
          let { chat: t, threadId: n, maxId: s = 0 } = e;
          const i = "channel" === (0, ce.Ou)(t.id),
            o = Math.min(s, a.fRl);
          i && n === Ye.l3
            ? await vt(
                new u.Api.channels.ReadHistory({
                  channel: (0, ce.yp)(t.id, t.accessHash),
                  maxId: o,
                })
              )
            : i
            ? await vt(
                new u.Api.messages.ReadDiscussion({
                  peer: (0, ce.l2)(t.id, t.accessHash),
                  msgId: n,
                  readMaxId: o,
                })
              )
            : await vt(
                new u.Api.messages.ReadHistory({
                  peer: (0, ce.l2)(t.id, t.accessHash),
                  maxId: o,
                })
              ),
            n === Ye.l3 &&
              ns({
                chat: t,
                noLastMessage: !0,
              });
        }
        async function qa(e) {
          let { chat: t, messageIds: n } = e;
          const s = "channel" === (0, ce.Ou)(t.id);
          await vt(
            s
              ? new u.Api.channels.ReadMessageContents({
                  channel: (0, ce.yp)(t.id, t.accessHash),
                  id: n,
                })
              : new u.Api.messages.ReadMessageContents({
                  id: n,
                })
          ),
            Aa({
              ...(s
                ? {
                    "@type": "updateChannelMessages",
                    channelId: t.id,
                  }
                : {
                    "@type": "updateCommonBoxMessages",
                  }),
              ids: n,
              messageUpdate: {
                hasUnreadMention: !1,
                isMediaUnread: !1,
              },
            });
        }
        async function Oa(e) {
          let { chat: t, ids: n, shouldIncrement: s } = e;
          const i = (0, l.lD)(n, a.map),
            o = await Promise.all(
              i.map((e) =>
                vt(
                  new u.Api.messages.GetMessagesViews({
                    peer: (0, ce.l2)(t.id, t.accessHash),
                    id: e,
                    increment: s,
                  })
                )
              )
            );
          if (!o || o.find((e) => !e)) return;
          const r = o.flatMap((e) => e.views),
            c = o.flatMap((e) => e.users),
            d = o.flatMap((e) => e.chats);
          return {
            viewsInfo: n.map((e, n) => {
              const { views: s, forwards: a, replies: i } = r[n];
              return {
                id: e,
                views: s,
                forwards: a,
                threadInfo: i ? (0, L.Pb)(i, e, t.id) : void 0,
              };
            }),
            users: c.map(j).filter(Boolean),
            chats: d.map((e) => I(e)).filter(Boolean),
          };
        }
        async function Ha(e) {
          let { chat: t, messageId: n } = e;
          const [s, a] = await Promise.all([
            vt(
              new u.Api.messages.GetDiscussionMessage({
                peer: (0, ce.l2)(t.id, t.accessHash),
                msgId: n,
              }),
              {
                abortControllerChatId: t.id,
                abortControllerThreadId: n,
              }
            ),
            Sa({
              chat: t,
              threadId: n,
              offsetId: 1,
              addOffset: -1,
              limit: 1,
            }),
          ]);
          if (!s || !a) return;
          ei(s);
          const i = s.chats
              .map((e) => I(e))
              .filter(Boolean)
              .concat(a.chats),
            o = s.users.map(j).filter(Boolean).concat(a.users),
            r = s.messages.map(L.Ep).filter(Boolean),
            c = r.concat(a.messages),
            d = s.messages[s.messages.length - 1]?.id;
          if (!d) return;
          ye(s.messages);
          const l = s.messages.map(L.I3).filter(Boolean),
            {
              unreadCount: p,
              maxId: f,
              readInboxMaxId: g,
              readOutboxMaxId: h,
            } = s;
          return {
            chats: i,
            users: o,
            messages: c,
            topMessages: r,
            unreadCount: p,
            threadId: d,
            lastReadInboxMessageId: g,
            lastReadOutboxMessageId: h,
            lastMessageId: f,
            chatId: r[0]?.chatId,
            firstMessageId: a.messages[0]?.id,
            threadInfoUpdates: l,
          };
        }
        async function La(e) {
          let t,
            {
              chat: n,
              type: s,
              query: a,
              threadId: i,
              minDate: o,
              maxDate: r,
              ...c
            } = e;
          switch (s) {
            case "media":
              t = new u.Api.InputMessagesFilterPhotoVideo();
              break;
            case "documents":
              t = new u.Api.InputMessagesFilterDocument();
              break;
            case "links":
              t = new u.Api.InputMessagesFilterUrl();
              break;
            case "audio":
              t = new u.Api.InputMessagesFilterMusic();
              break;
            case "voice":
              t = new u.Api.InputMessagesFilterRoundVoice();
              break;
            case "profilePhoto":
              t = new u.Api.InputMessagesFilterChatPhotos();
              break;
            case "gif":
              t = new u.Api.InputMessagesFilterGif();
              break;
            default:
              t = new u.Api.InputMessagesFilterEmpty();
          }
          const d = await vt(
            new u.Api.messages.Search({
              peer: (0, ce.l2)(n.id, n.accessHash),
              topMsgId: i === Ye.l3 ? void 0 : i,
              filter: t,
              q: a || "",
              minDate: o,
              maxDate: r,
              ...c,
            }),
            {
              abortControllerChatId: n.id,
              abortControllerThreadId: i,
            }
          );
          if (
            !d ||
            d instanceof u.Api.messages.MessagesNotModified ||
            !d.messages
          )
            return;
          ei(d);
          const l = d.chats.map((e) => I(e)).filter(Boolean),
            p = d.users.map(j).filter(Boolean),
            f = d.messages.map(L.Ep).filter(Boolean);
          ye(d.messages);
          let g,
            h = f.length;
          return (
            (d instanceof u.Api.messages.MessagesSlice ||
              d instanceof u.Api.messages.ChannelMessages) &&
              ((h = d.count), f.length && (g = f[f.length - 1].id)),
            {
              chats: l,
              users: p,
              messages: f,
              totalCount: h,
              nextOffsetId: g,
            }
          );
        }
        async function Ga(e) {
          let t,
            {
              query: n,
              offsetRate: s = 0,
              limit: i,
              type: o = "text",
              minDate: r,
              maxDate: c,
            } = e;
          switch (o) {
            case "media":
              t = new u.Api.InputMessagesFilterPhotoVideo();
              break;
            case "documents":
              t = new u.Api.InputMessagesFilterDocument();
              break;
            case "links":
              t = new u.Api.InputMessagesFilterUrl();
              break;
            case "audio":
              t = new u.Api.InputMessagesFilterMusic();
              break;
            case "voice":
              t = new u.Api.InputMessagesFilterRoundVoice();
              break;
            default:
              if (!(n || (c && r))) return;
              t = new u.Api.InputMessagesFilterEmpty();
          }
          const d = await vt(
            new u.Api.messages.SearchGlobal({
              q: n,
              offsetRate: s,
              offsetPeer: new u.Api.InputPeerEmpty(),
              limit: i,
              filter: t,
              folderId: a.DSF,
              minDate: r,
              maxDate: c,
            })
          );
          if (
            !d ||
            d instanceof u.Api.messages.MessagesNotModified ||
            !d.messages
          )
            return;
          ei({
            chats: d.chats,
            users: d.users,
            messages: d.messages,
          });
          const l = d.chats.map((e) => I(e)).filter(Boolean),
            p = d.users.map(j).filter(Boolean),
            f = d.messages.map(L.Ep).filter(Boolean);
          ye(d.messages);
          let g,
            h = f.length;
          return (
            (d instanceof u.Api.messages.MessagesSlice ||
              d instanceof u.Api.messages.ChannelMessages) &&
              ((h = d.count), f.length && (g = f[f.length - 1].id)),
            {
              messages: f,
              users: p,
              chats: l,
              totalCount: h,
              nextRate: "nextRate" in d && d.nextRate ? d.nextRate : g,
            }
          );
        }
        async function ja(e) {
          let { text: t } = e;
          const n = (0, ce.Vg)(t),
            s = await vt(
              new u.Api.messages.GetWebPagePreview({
                message: n.text,
                entities: n.entities,
              })
            );
          return s && (0, H.EZ)(s);
        }
        async function Wa(e) {
          let { chat: t, messageId: n, options: s } = e;
          const { id: a, accessHash: i } = t;
          await vt(
            new u.Api.messages.SendVote({
              peer: (0, ce.l2)(a, i),
              msgId: n,
              options: s.map(c.rW),
            })
          );
        }
        async function za(e) {
          let { chat: t, messageId: n, poll: s } = e;
          const { id: a, accessHash: i } = t;
          await vt(
            new u.Api.messages.EditMessage({
              peer: (0, ce.l2)(a, i),
              id: n,
              media: (0, ce.bh)(s, !0),
            })
          );
        }
        async function Ka(e) {
          let {
            chat: t,
            messageId: n,
            option: s,
            offset: a,
            limit: i,
            shouldResetVoters: o,
          } = e;
          const { id: r, accessHash: d } = t,
            l = await vt(
              new u.Api.messages.GetPollVotes({
                peer: (0, ce.l2)(r, d),
                id: n,
                ...(s && {
                  option: (0, c.rW)(s),
                }),
                ...(a && {
                  offset: a,
                }),
                ...(i && {
                  limit: i,
                }),
              })
            );
          if (!l) return;
          ei({
            chats: l.chats,
            users: l.users,
            messages: [],
          });
          const p = l.users.map(j).filter(Boolean),
            f = l.chats.map((e) => I(e)).filter(Boolean),
            g = l.votes.map((e) => ({
              peerId: (0, y.Zo)(e.peer),
              date: e.date,
            }));
          return {
            count: l.count,
            votes: g,
            chats: f,
            users: p,
            nextOffset: l.nextOffset,
            shouldResetVoters: o,
          };
        }
        async function $a(e) {
          let { chat: t, messageId: n } = e;
          await vt(
            new u.Api.messages.GetPollResults({
              peer: (0, ce.l2)(t.id, t.accessHash),
              msgId: n,
            })
          );
        }
        async function Ja(e) {
          let { chat: t, ids: n } = e;
          await vt(
            new u.Api.messages.GetExtendedMedia({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
            })
          );
        }
        async function Za(e) {
          let {
            fromChat: t,
            toChat: n,
            toThreadId: s,
            messages: a,
            isSilent: i,
            scheduledAt: o,
            sendAs: r,
            withMyScore: c,
            noAuthors: d,
            noCaptions: l,
            isCurrentUserPremium: p,
            wasDrafted: f,
          } = e;
          const g = a.map((e) => {
              let { id: t } = e;
              return t;
            }),
            h = a.map(ce.I2),
            m = {};
          a.forEach((e, t) => {
            const a = (0, L.jT)({
              toChat: n,
              toThreadId: s,
              message: e,
              scheduledAt: o,
              noAuthors: d,
              noCaptions: l,
              isCurrentUserPremium: p,
            });
            (m[h[t].toString()] = a),
              Aa({
                "@type": a.isScheduled ? "newScheduledMessage" : "newMessage",
                id: a.id,
                chatId: n.id,
                message: a,
                wasDrafted: f,
              });
          });
          try {
            const e = await vt(
              new u.Api.messages.ForwardMessages({
                fromPeer: (0, ce.l2)(t.id, t.accessHash),
                toPeer: (0, ce.l2)(n.id, n.accessHash),
                randomId: h,
                id: g,
                withMyScore: c || void 0,
                silent: i || void 0,
                dropAuthor: d || void 0,
                dropMediaCaptions: l || void 0,
                ...(o && {
                  scheduleDate: o,
                }),
                ...(r && {
                  sendAs: (0, ce.l2)(r.id, r.accessHash),
                }),
              }),
              {
                shouldThrow: !0,
                shouldIgnoreUpdates: !0,
              }
            );
            e && gi(m, e);
          } catch (e) {
            Object.values(m).forEach((t) => {
              Aa({
                "@type": "updateMessageSendFailed",
                chatId: n.id,
                localId: t.id,
                error: e.message,
              });
            });
          }
        }
        async function Qa(e) {
          let { chat: t, timestamp: n } = e;
          const s = await vt(
            new u.Api.messages.GetHistory({
              peer: (0, ce.l2)(t.id, t.accessHash),
              offsetDate: n,
              addOffset: -1,
              limit: 1,
            })
          );
          if (
            s &&
            !(s instanceof u.Api.messages.MessagesNotModified) &&
            s.messages &&
            s.messages.length
          )
            return s.messages[0].id;
        }
        async function Ya(e) {
          let { chat: t } = e;
          const { id: n, accessHash: s } = t,
            a = await vt(
              new u.Api.messages.GetScheduledHistory({
                peer: (0, ce.l2)(n, s),
              }),
              {
                abortControllerChatId: n,
              }
            );
          if (
            !a ||
            a instanceof u.Api.messages.MessagesNotModified ||
            !a.messages
          )
            return;
          ei(a);
          const i = a.messages.map(L.Ep).filter(Boolean);
          return (
            ye(a.messages),
            {
              messages: i,
            }
          );
        }
        async function Xa(e) {
          let { chat: t, ids: n } = e;
          const { id: s, accessHash: a } = t;
          await vt(
            new u.Api.messages.SendScheduledMessages({
              peer: (0, ce.l2)(s, a),
              id: n,
            })
          );
        }
        function ei(e) {
          (0, c.JV)(e.users),
            (0, c.JV)(e.chats),
            e.messages.forEach((e) => {
              ((e instanceof u.Api.Message && (0, ce.ot)(e)) ||
                (e instanceof u.Api.MessageService && (0, ce.$t)(e))) &&
                (0, c.NZ)(e);
            });
        }
        async function ti(e) {
          let { chat: t, threadId: n } = e;
        }
        async function ni(e) {
          let { chat: t, messageId: n } = e;
          const s = await vt(
            new u.Api.messages.GetMessageReadParticipants({
              peer: (0, ce.l2)(t.id, t.accessHash),
              msgId: n,
            })
          );
          return s
            ? s.reduce((e, t) => ((e[t.userId.toString()] = t.date), e), {})
            : void 0;
        }
        async function si(e) {
          let { chat: t } = e;
        }
        function ai(e) {
          let { sendAs: t, chat: n } = e;
          return vt(
            new u.Api.messages.SaveDefaultSendAs({
              peer: (0, ce.l2)(n.id, n.accessHash),
              sendAs: (0, ce.l2)(t.id, t.accessHash),
            })
          );
        }
        async function ii(e) {
          let { chat: t } = e;
          const n = await vt(
            new u.Api.channels.GetSponsoredMessages({
              channel: (0, ce.l2)(t.id, t.accessHash),
            })
          );
          if (
            n &&
            !(n instanceof u.Api.messages.SponsoredMessagesEmpty) &&
            n.messages.length
          )
            return (
              ei(n),
              {
                messages: n.messages.map(L.vs).filter(Boolean),
                users: n.users.map(j).filter(Boolean),
                chats: n.chats.map((e) => I(e)).filter(Boolean),
              }
            );
        }
        async function oi(e) {
          let { chat: t, random: n } = e;
        }
        function ri(e) {
          let { chat: t, random: n } = e;
          return vt(
            new u.Api.channels.ClickSponsoredMessage({
              channel: (0, ce.l2)(t.id, t.accessHash),
              randomId: (0, c.rW)(n),
            })
          );
        }
        function ci(e) {
          let { chat: t } = e;
          return vt(
            new u.Api.messages.ReadMentions({
              peer: (0, ce.l2)(t.id, t.accessHash),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function di(e) {
          let { chat: t } = e;
          return vt(
            new u.Api.messages.ReadReactions({
              peer: (0, ce.l2)(t.id, t.accessHash),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function ui(e) {
          let { chat: t, ...n } = e;
          const s = await vt(
            new u.Api.messages.GetUnreadMentions({
              peer: (0, ce.l2)(t.id, t.accessHash),
              limit: a.on1,
              ...n,
            })
          );
          if (
            !s ||
            s instanceof u.Api.messages.MessagesNotModified ||
            !s.messages
          )
            return;
          ei(s);
          const i = s.messages.map(L.Ep).filter(Boolean);
          return (
            ye(s.messages),
            {
              messages: i,
              users: s.users.map(j).filter(Boolean),
              chats: s.chats.map((e) => I(e)).filter(Boolean),
            }
          );
        }
        async function li(e) {
          let { chat: t, ...n } = e;
          const s = await vt(
            new u.Api.messages.GetUnreadReactions({
              peer: (0, ce.l2)(t.id, t.accessHash),
              limit: a.JcJ,
              ...n,
            })
          );
          if (
            !s ||
            s instanceof u.Api.messages.MessagesNotModified ||
            !s.messages
          )
            return;
          ei(s);
          const i = s.messages.map(L.Ep).filter(Boolean);
          return (
            ye(s.messages),
            {
              messages: i,
              users: s.users.map(j).filter(Boolean),
              chats: s.chats.map((e) => I(e)).filter(Boolean),
            }
          );
        }
        async function pi(e) {
          let { chat: t, messageId: n } = e;
          const s = await vt(
            new u.Api.messages.TranscribeAudio({
              msgId: n,
              peer: (0, ce.l2)(t.id, t.accessHash),
            })
          );
          if (s)
            return (
              Aa({
                "@type": "updateTranscribedAudio",
                isPending: s.pending,
                transcriptionId: s.transcriptionId.toString(),
                text: s.text,
              }),
              s.transcriptionId.toString()
            );
        }
        async function fi(e) {
          let t;
          const n = "chat" in e;
          if (n) {
            const { chat: n, messageIds: s, toLanguageCode: a } = e;
            t = await vt(
              new u.Api.messages.TranslateText({
                peer: (0, ce.l2)(n.id, n.accessHash),
                id: s,
                toLang: a,
              })
            );
          } else {
            const { text: n, toLanguageCode: s } = e;
            t = await vt(
              new u.Api.messages.TranslateText({
                text: n.map((e) => (0, ce.Vg)(e)),
                toLang: s,
              })
            );
          }
          if (!t) return;
          const s = t.result.map((e) => (0, h.k1)(e));
          return (
            n &&
              Aa({
                "@type": "updateMessageTranslations",
                chatId: e.chat.id,
                messageIds: e.messageIds,
                translations: s,
                toLanguageCode: e.toLanguageCode,
              }),
            s
          );
        }
        function gi(e, t) {
          "updates" in t
            ? t.updates.forEach((t) => {
                t instanceof u.Api.UpdateMessageID
                  ? hi(e[t.randomId.toString()], t)
                  : wt(t);
              })
            : wt(t);
        }
        function hi(e, t) {
          let n, s;
          if (
            (t instanceof u.Api.UpdateShortSentMessage ||
            t instanceof u.Api.UpdateMessageID
              ? (n = t)
              : "updates" in t &&
                (n = t.updates.find((e) => e instanceof u.Api.UpdateMessageID)),
            !n)
          )
            return void wt(t);
          if (n instanceof u.Api.UpdateShortSentMessage) {
            e.content.text &&
              n.entities &&
              (s = {
                text: (0, H.qR)(e.content.text.text, n.entities),
              }),
              n.media &&
                (s = {
                  ...s,
                  ...(0, H.jy)(n.media),
                });
            const t = (0, ce.dd)(n.id, e.chatId, n);
            (0, ce.ot)(t) && (0, c.NZ)(t);
          }
          const a =
            "date" in n && 1e3 * n.date < Date.now() + 1e3 * (0, p.SF)();
          Aa({
            "@type":
              e.isScheduled && !a
                ? "updateScheduledMessageSendSucceeded"
                : "updateMessageSendSucceeded",
            chatId: e.chatId,
            localId: e.id,
            message: {
              ...e,
              ...(s && {
                content: {
                  ...e.content,
                  ...s,
                },
              }),
              id: n.id,
              sendingState: void 0,
              ...("date" in n && {
                date: n.date,
              }),
            },
          }),
            wt(t);
        }
        async function mi(e) {
          let t,
            n,
            {
              originChatId: s,
              chat: a,
              accessHash: i,
              fromMessageId: o,
              messageId: r,
              serverTimeOffset: c,
              lastLocalMessage: d,
              increment: l = !0,
            } = e;
          i
            ? ((n = (0, ce.l2)(s, i)),
              (t = await vt(
                new u.Api.messages.GetMessagesViews({
                  peer: n,
                  id: [o],
                  increment: l,
                })
              )))
            : ((n = buildInputPeerFromLocalDb(s)),
              n
                ? (t = await vt(
                    new u.Api.messages.GetMessagesViews({
                      peer: n,
                      id: [o],
                      increment: l,
                    })
                  ))
                : a &&
                  (await ns({
                    chat: a,
                    serverTimeOffset: c,
                    ...(a.id === SERVICE_NOTIFICATIONS_USER_ID && {
                      lastLocalMessage: d,
                    }),
                  }),
                  (n = buildInputPeerFromLocalDb(s)),
                  (t = await vt(
                    new u.Api.messages.GetMessagesViews({
                      peer: n,
                      id: [o],
                      increment: l,
                    })
                  )))),
            t &&
              a &&
              Aa({
                "@type": "updateMessageView",
                views: t.views[0].views,
                chatId: a.id,
                messageId: r,
              });
        }
        let yi, _i, bi, wi;
        async function vi(e) {
          let { id: t, accessHash: n } = e;
          const s = (0, ce.yp)(t, n);
          if (!(s instanceof u.Api.InputUser)) return;
          const a = await vt(
            new u.Api.users.GetFullUser({
              id: s,
            })
          );
          if (!a) return;
          xi(a),
            (0, c.JV)(a.users),
            a.fullUser.profilePhoto instanceof u.Api.Photo &&
              (d.Ay.photos[a.fullUser.profilePhoto.id.toString()] =
                a.fullUser.profilePhoto),
            a.fullUser.personalPhoto instanceof u.Api.Photo &&
              (d.Ay.photos[a.fullUser.personalPhoto.id.toString()] =
                a.fullUser.personalPhoto),
            a.fullUser.fallbackPhoto instanceof u.Api.Photo &&
              (d.Ay.photos[a.fullUser.fallbackPhoto.id.toString()] =
                a.fullUser.fallbackPhoto);
          const i = a.fullUser.botInfo;
          i?.descriptionPhoto instanceof u.Api.Photo &&
            (d.Ay.photos[i.descriptionPhoto.id.toString()] =
              i.descriptionPhoto),
            i?.descriptionDocument instanceof u.Api.Document &&
              (d.Ay.documents[i.descriptionDocument.id.toString()] =
                i.descriptionDocument);
          const o = G(a),
            r = j(a.users[0]);
          return (
            yi({
              "@type": "updateUser",
              id: t,
              user: {
                ...r,
                avatarHash: r?.avatarHash || void 0,
              },
              fullInfo: o,
            }),
            {
              user: r,
              fullInfo: o,
            }
          );
        }
        async function Ai(e, t, n) {
          const s = await vt(
            new u.Api.messages.GetCommonChats({
              userId: (0, ce.yp)(e, t),
              maxId: n ? (0, ce.xZ)(n, (0, ce.Ou)(n)) : void 0,
              limit: a.aGQ,
            })
          );
          if (!s) return;
          xi(s);
          const i = [],
            o = [];
          return (
            s.chats.forEach((e) => {
              const t = I(e);
              t && (o.push(t), i.push(t.id));
            }),
            {
              chats: o,
              chatIds: i,
              isFullyLoaded: i.length < a.aGQ,
            }
          );
        }
        async function Si() {
          const e = await vt(new u.Api.help.GetNearestDc());
          return e?.country;
        }
        async function Ii() {
          const e = await vt(
            new u.Api.contacts.GetTopPeers({
              correspondents: !0,
            })
          );
          if (!(e instanceof u.Api.contacts.TopPeers)) return;
          const t = e.users.map(j).filter((e) => Boolean(e) && !e.isSelf);
          return {
            ids: t.map((e) => {
              let { id: t } = e;
              return t;
            }),
            users: t,
          };
        }
        async function Ci() {
          const e = await vt(
            new u.Api.contacts.GetContacts({
              hash: sn()("0"),
            })
          );
          if (!e || e instanceof u.Api.contacts.ContactsNotModified) return;
          (0, c.JV)(e.users);
          const { users: t, userStatusesById: n } = K(e.users);
          return {
            users: t,
            userStatusesById: n,
            chats: e.users.map((e) => I(e)).filter(Boolean),
          };
        }
        async function Pi(e) {
          let { users: t } = e;
          const n = await vt(
            new u.Api.users.GetUsers({
              id: t.map((e) => {
                let { id: t, accessHash: n } = e;
                return (0, ce.yp)(t, n);
              }),
            })
          );
          if (n && n.length) return (0, c.JV)(n), K(n);
        }
        async function Mi(e) {
          let { phone: t, firstName: n, lastName: s } = e;
          const a = await vt(
            new u.Api.contacts.ImportContacts({
              contacts: [
                (0, ce.J7)({
                  phone: t || "",
                  firstName: n || "",
                  lastName: s || "",
                }),
              ],
            })
          );
          return (
            a instanceof u.Api.contacts.ImportedContacts &&
              a.users.length &&
              (0, c.xz)(a.users[0]),
            a?.imported.length
              ? (0, y.ol)(a.imported[0].userId, "user")
              : void 0
          );
        }
        async function ki(e) {
          let { contacts: t } = e;
          const n = [];
          for (const e of t)
            e.phone &&
              e.phone.toString().length > 0 &&
              n.push(
                (0, ce.J7)({
                  phone: e.phone || "",
                  firstName: e.firstName || e.phone,
                  lastName: e.lastName || "",
                })
              );
          const s = await vt(
            new u.Api.contacts.ImportContacts({
              contacts: n,
            })
          );
          return (
            s instanceof u.Api.contacts.ImportedContacts &&
              s.users.length &&
              (0, c.JV)(s.users),
            s ? s.imported.map((e) => e.userId) : []
          );
        }
        function Ri(e) {
          let {
            id: t,
            accessHash: n,
            phoneNumber: s = "",
            firstName: a = "",
            lastName: i = "",
            shouldSharePhoneNumber: o = !1,
          } = e;
          return vt(
            new u.Api.contacts.AddContact({
              id: (0, ce.yp)(t, n),
              firstName: a,
              lastName: i,
              phone: s,
              ...(o && {
                addPhonePrivacyException: o,
              }),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function Ei(e) {
          let { id: t, accessHash: n } = e;
          const s = (0, ce.yp)(t, n);
          s instanceof u.Api.InputUser &&
            (await vt(
              new u.Api.contacts.DeleteContacts({
                id: [s],
              })
            )) &&
            yi({
              "@type": "deleteContact",
              id: t,
            });
        }
        async function Ti(e, t) {
          if (e) {
            const { id: t, accessHash: n } = e,
              s = await vt(
                new u.Api.photos.GetUserPhotos({
                  userId: (0, ce.yp)(t, n),
                  limit: a.Awd,
                  offset: 0,
                  maxId: sn()("0"),
                })
              );
            if (!s) return;
            return (
              xi(s),
              {
                photos: s.photos
                  .filter((e) => e instanceof u.Api.Photo)
                  .map((e) => (0, h.rk)(e)),
                users: s.users.map(j).filter(Boolean),
              }
            );
          }
          const n = await La({
            chat: t,
            type: "profilePhoto",
            limit: a.Awd,
          });
          if (!n) return;
          const { messages: s, users: i } = n;
          return {
            photos: s.map((e) => e.content.action.photo).filter(Boolean),
            users: i,
          };
        }
        function Bi(e) {
          const { id: t, accessHash: n } = e;
          return vt(
            new u.Api.messages.ReportSpam({
              peer: (0, ce.l2)(t, n),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Di(e, t) {
          return vt(
            new u.Api.account.UpdateEmojiStatus({
              emojiStatus: (0, ce.Rr)(e, t),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Ui(e) {
          const t = e.map((e) => (0, ce.xZ)(e, "user"));
          return vt(
            new u.Api.contacts.EditCloseFriends({
              id: t,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function xi(e) {
          "chats" in e && (0, c.JV)(e.chats),
            "photos" in e && e.photos.forEach(c.Kv),
            "users" in e && (0, c.JV)(e.users);
        }
        async function Vi(e) {
          let { hash: t = "0" } = e;
          const n = await vt(
            new u.Api.messages.GetEmojiStickers({
              hash: sn()(t),
            })
          );
          if (n && !(n instanceof u.Api.messages.AllStickersNotModified))
            return (
              n.sets.forEach((e) => {
                (e.thumbs?.length || e.thumbDocumentId) &&
                  (d.Ay.stickerSets[String(e.id)] = e);
              }),
              {
                hash: String(n.hash),
                sets: n.sets.map(re.uL),
              }
            );
        }
        async function Fi(e) {
          let { hash: t = "0" } = e;
          const n = await vt(
            new u.Api.messages.GetAllStickers({
              hash: sn()(t),
            })
          );
          if (n && !(n instanceof u.Api.messages.AllStickersNotModified))
            return (
              n.sets.forEach((e) => {
                e.thumbs?.length && (d.Ay.stickerSets[String(e.id)] = e);
              }),
              {
                hash: String(n.hash),
                sets: n.sets.map(re.uL),
              }
            );
        }
        async function Ni(e) {
          const t = await vt(
            new u.Api.messages.GetArchivedStickers({
              offsetId: void 0,
              limit: 100,
            })
          );
          if (t)
            return (
              t.sets.forEach((e) => {
                e?.set.thumbs?.length &&
                  (d.Ay.stickerSets[String(e.set.id)] = e.set);
              }),
              {
                hash: String(t.sets.map((e) => e.set.hash).pop()),
                sets: t.sets.map((e) => (0, re.uL)(e.set)),
              }
            );
        }
        async function qi(e) {
          let { hash: t = "0" } = e;
          const n = await vt(
            new u.Api.messages.GetRecentStickers({
              hash: sn()(t),
            })
          );
          if (n && !(n instanceof u.Api.messages.RecentStickersNotModified))
            return {
              hash: String(n.hash),
              stickers: (0, re.OM)(n.stickers.slice(0, a.PSX)),
            };
        }
        async function Oi(e) {
          let { hash: t = "0" } = e;
          const n = await vt(
            new u.Api.messages.GetFavedStickers({
              hash: sn()(t),
            })
          );
          if (n && !(n instanceof u.Api.messages.FavedStickersNotModified))
            return {
              hash: String(n.hash),
              stickers: (0, re.OM)(n.stickers),
            };
        }
        async function Hi(e) {
          let { hash: t = "0" } = e;
          const n = await vt(
            new u.Api.messages.GetFeaturedStickers({
              hash: sn()(t),
            })
          );
          if (n && !(n instanceof u.Api.messages.FeaturedStickersNotModified))
            return {
              hash: String(n.hash),
              isPremium: Boolean(n.premium),
              sets: n.sets.map(re.Mf),
            };
        }
        async function Li() {
          const e = await vt(
            new u.Api.messages.GetFeaturedEmojiStickers({
              hash: sn()(0),
            })
          );
          if (e && !(e instanceof u.Api.messages.FeaturedStickersNotModified))
            return (
              e.sets.forEach((e) => {
                let { set: t } = e;
                t.thumbDocumentId && (d.Ay.stickerSets[String(t.id)] = t);
              }),
              {
                isPremium: Boolean(e.premium),
                sets: e.sets.map(re.Mf),
              }
            );
        }
        async function Gi(e) {
          let { sticker: t, unfave: n } = e;
          const s = new u.Api.messages.FaveSticker({
            id: (0, ce.gB)(t),
            unfave: n,
          });
          (await vt(s)) &&
            _i({
              "@type": "updateFavoriteStickers",
            });
        }
        function ji(e) {
          let { sticker: t } = e;
          return vt(
            new u.Api.messages.SaveRecentSticker({
              id: (0, ce.gB)(t),
              unsave: !0,
            })
          );
        }
        function Wi() {
          return vt(new u.Api.messages.ClearRecentStickers());
        }
        async function zi(e) {
          let { stickerSetInfo: t } = e;
          if ("isMissing" in t) return;
          const n = await vt(
            new u.Api.messages.GetStickerSet({
              stickerset:
                "id" in t
                  ? (0, ce.yC)(t.id, t.accessHash)
                  : (0, ce.Pl)(t.shortName),
            }),
            {
              shouldThrow: !0,
            }
          );
          return n instanceof u.Api.messages.StickerSet
            ? ((d.Ay.stickerSets[String(n.set.id)] = n.set),
              {
                set: (0, re.uL)(n.set),
                stickers: (0, re.OM)(n.documents),
                packs: (0, re.de)(n.packs),
              })
            : void 0;
        }
        async function Ki(e) {
          let { documentId: t } = e;
          if (!t.length) return;
          const n = await vt(
            new u.Api.messages.GetCustomEmojiDocuments({
              documentId: t.map((e) => sn()(e)),
            })
          );
          return n ? (0, re.OM)(n) : void 0;
        }
        async function $i() {}
        async function Ji() {}
        async function Zi() {}
        async function Qi() {}
        async function Yi() {}
        async function Xi() {
          const e = await vt(
            new u.Api.messages.GetStickerSet({
              stickerset: new u.Api.InputStickerSetEmojiDefaultStatuses(),
            })
          );
          if (e instanceof u.Api.messages.StickerSet)
            return {
              set: (0, re.uL)(e.set),
              stickers: (0, re.OM)(e.documents),
            };
        }
        async function eo(e) {
          let { query: t, hash: n = "0" } = e;
          const s = await vt(
            new u.Api.messages.SearchStickerSets({
              q: t,
              hash: sn()(n),
            })
          );
          if (s && !(s instanceof u.Api.messages.FoundStickerSetsNotModified))
            return {
              hash: String(s.hash),
              sets: s.sets.map(re.Mf),
            };
        }
        async function to(e) {
          let { hash: t = "0" } = e;
          const n = await vt(
            new u.Api.messages.GetSavedGifs({
              hash: sn()(t),
            })
          );
          if (n && !(n instanceof u.Api.messages.SavedGifsNotModified))
            return {
              hash: String(n.hash),
              gifs: uo(n.gifs),
            };
        }
        function no(e) {
          let { gif: t, shouldUnsave: n } = e;
          return vt(
            new u.Api.messages.SaveGif({
              id: (0, ce.gB)(t),
              unsave: n,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function so(e) {
          let { stickerSetId: t, accessHash: n } = e;
          (await vt(
            new u.Api.messages.InstallStickerSet({
              stickerset: (0, ce.yC)(t, n),
            })
          )) &&
            _i({
              "@type": "updateStickerSet",
              id: t,
              stickerSet: {
                installedDate: Date.now(),
              },
            });
        }
        async function ao(e) {
          let { stickerSetId: t, accessHash: n } = e;
          (await vt(
            new u.Api.messages.UninstallStickerSet({
              stickerset: (0, ce.yC)(t, n),
            })
          )) &&
            _i({
              "@type": "deleteSetSticker",
              id: t,
              stickerSet: {
                installedDate: void 0,
              },
            });
        }
        async function io(e) {
          let { query: t, offset: n = "", username: s = a.Jf2 } = e;
          if (!bi) {
            const e = await vt(
              new u.Api.contacts.ResolveUsername({
                username: s,
              })
            );
            if (!(e && e.users[0] instanceof u.Api.User)) return;
            bi = new u.Api.InputUser({
              userId: e.peer.userId,
              accessHash: e.users[0].accessHash,
            });
          }
          const i = await vt(
            new u.Api.messages.GetInlineBotResults({
              bot: bi,
              peer: new u.Api.InputPeerEmpty(),
              query: t,
              offset: n,
            })
          );
          if (!i) return;
          const o = i.results
            .map((e) => {
              if (e instanceof u.Api.BotInlineMediaResult) return e.document;
            })
            .filter(Boolean);
          return {
            nextOffset: i.nextOffset,
            gifs: uo(o),
          };
        }
        async function oo(e) {
          let { emoji: t, hash: n = "0" } = e;
          const s = await vt(
            new u.Api.messages.GetStickers({
              emoticon: t,
              hash: sn()(n),
            })
          );
          if (s && !(s instanceof u.Api.messages.StickersNotModified))
            return {
              stickers: (0, re.OM)(s.stickers),
              hash: String(s.hash),
            };
        }
        async function ro(e) {
          let { language: t, fromVersion: n } = e;
          const s = await vt(
            new u.Api.messages.GetEmojiKeywordsDifference({
              langCode: t,
              fromVersion: n,
            })
          );
          if (s)
            return {
              language: s.langCode,
              version: s.version,
              keywords: s.keywords.reduce(
                (e, t) => ((e[t.keyword] = t.emoticons), e),
                {}
              ),
            };
        }
        async function co() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "0";
          const t = await vt(
            new u.Api.account.GetRecentEmojiStatuses({
              hash: sn()(e),
            })
          );
          if (!t || t instanceof u.Api.account.EmojiStatusesNotModified) return;
          const n = t.statuses
              .slice(0, a.Xjp)
              .map(z)
              .filter(Boolean)
              .map((e) => {
                let { documentId: t } = e;
                return t;
              }),
            s = await Ki({
              documentId: n,
            });
          return {
            hash: String(t.hash),
            emojiStatuses: s,
          };
        }
        function uo(e) {
          return e
            .map((e) => {
              if (e instanceof u.Api.Document) {
                const t = (0, H.wi)(e);
                if (t) return (d.Ay.documents[String(e.id)] = e), t;
              }
            })
            .filter(Boolean);
        }
        const lo = new Set([a.Y3M, "USERNAME_INVALID"]);
        async function po(e) {
          let { username: t } = e;
          try {
            return {
              result: await vt(
                new u.Api.channels.CheckUsername({
                  channel: new u.Api.InputChannelEmpty(),
                  username: t,
                }),
                {
                  shouldThrow: !0,
                }
              ),
              error: void 0,
            };
          } catch (e) {
            const t = e.message;
            if (lo.has(t))
              return {
                result: !1,
                error: t,
              };
            throw e;
          }
        }
        async function fo(e) {
          let { chat: t, username: n } = e;
          const s = await vt(
            new u.Api.channels.UpdateUsername({
              channel: (0, ce.yp)(t.id, t.accessHash),
              username: n,
            })
          );
          let a = n
            ? [
                {
                  username: n,
                  isEditable: !0,
                  isActive: !0,
                },
              ]
            : [];
          return (
            t.usernames &&
              (a = a.concat(
                t.usernames.filter((e) => e.username && !e.isEditable)
              )),
            s &&
              wi({
                "@type": "updateChat",
                id: t.id,
                chat: {
                  usernames: a.length ? a : void 0,
                },
              }),
            s
          );
        }
        async function go(e) {
          let { chat: t } = e;
          const n = await vt(
            new u.Api.channels.DeactivateAllUsernames({
              channel: (0, ce.yp)(t.id, t.accessHash),
            })
          );
          if (n) {
            const e = t.usernames
              ? t.usernames
                  .map((e) => ({
                    ...e,
                    isActive: !1,
                  }))
                  .filter((e) => e.username)
              : void 0;
            wi({
              "@type": "updateChat",
              id: t.id,
              chat: {
                usernames: e,
              },
            });
          }
          return n;
        }
        async function ho(e) {
          let { chat: t, usageLimit: n, expireDate: s } = e;
          const a = await vt(
            new u.Api.messages.ExportChatInvite({
              peer: (0, ce.l2)(t.id, t.accessHash),
              usageLimit: n,
              expireDate: s,
              legacyRevokePermanent: !0,
            })
          );
          if (a instanceof u.Api.ChatInviteExported)
            return (
              wi({
                "@type": "updateChatFullInfo",
                id: t.id,
                fullInfo: {
                  inviteLink: a.link,
                },
              }),
              a.link
            );
        }
        async function mo(e) {
          let { peer: t, admin: n, limit: s = 0, isRevoked: a } = e;
          const i = await vt(
            new u.Api.messages.GetExportedChatInvites({
              peer: (0, ce.l2)(t.id, t.accessHash),
              adminId: (0, ce.yp)(n.id, n.accessHash),
              limit: s,
              revoked: a || void 0,
            }),
            {
              abortControllerChatId: t.id,
            }
          );
          if (i)
            return (
              (0, c.JV)(i.users),
              {
                invites: i.invites
                  .filter((e) => e instanceof u.Api.ChatInviteExported)
                  .map(V),
                users: i.users.map(j).filter(Boolean),
              }
            );
        }
        async function yo(e) {
          let {
            peer: t,
            isRevoked: n,
            link: s,
            expireDate: a,
            usageLimit: i,
            isRequestNeeded: o,
            title: r,
          } = e;
          const d = await vt(
            new u.Api.messages.EditExportedChatInvite({
              link: s,
              peer: (0, ce.l2)(t.id, t.accessHash),
              expireDate: a,
              usageLimit: o ? void 0 : i,
              requestNeeded: o,
              title: r,
              revoked: n || void 0,
            })
          );
          if (d) {
            if (
              ((0, c.JV)(d.users),
              d instanceof u.Api.messages.ExportedChatInvite &&
                d.invite instanceof u.Api.ChatInviteExported)
            ) {
              const e = V(d.invite);
              return {
                oldInvite: e,
                newInvite: e,
                users: d.users.map(j).filter(Boolean),
              };
            }
            if (
              d instanceof u.Api.messages.ExportedChatInviteReplaced &&
              d.invite instanceof u.Api.ChatInviteExported &&
              d.newInvite instanceof u.Api.ChatInviteExported
            )
              return {
                oldInvite: V(d.invite),
                newInvite: V(d.newInvite),
                users: d.users.map(j).filter(Boolean),
              };
          }
        }
        async function _o(e) {
          let {
            peer: t,
            expireDate: n,
            usageLimit: s,
            isRequestNeeded: a,
            title: i,
          } = e;
          const o = await vt(
            new u.Api.messages.ExportChatInvite({
              peer: (0, ce.l2)(t.id, t.accessHash),
              expireDate: n,
              usageLimit: a ? void 0 : s,
              requestNeeded: a || void 0,
              title: i,
            })
          );
          if (o instanceof u.Api.ChatInviteExported) return V(o);
        }
        async function bo(e) {
          let { peer: t, link: n } = e;
          return await vt(
            new u.Api.messages.DeleteExportedChatInvite({
              peer: (0, ce.l2)(t.id, t.accessHash),
              link: n,
            })
          );
        }
        async function wo(e) {
          let { peer: t, admin: n } = e;
          return await vt(
            new u.Api.messages.DeleteRevokedExportedChatInvites({
              peer: (0, ce.l2)(t.id, t.accessHash),
              adminId: (0, ce.yp)(n.id, n.accessHash),
            })
          );
        }
        async function vo(e) {
          let {
            peer: t,
            link: n,
            offsetDate: s = 0,
            offsetUser: a,
            limit: i = 0,
            isRequested: o,
          } = e;
        }
        function Ao(e) {
          let { peer: t, user: n, isApproved: s } = e;
          return vt(
            new u.Api.messages.HideChatJoinRequest({
              peer: (0, ce.l2)(t.id, t.accessHash),
              userId: (0, ce.yp)(n.id, n.accessHash),
              approved: s || void 0,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function So(e) {
          let { peer: t, isApproved: n, link: s } = e;
          return vt(
            new u.Api.messages.HideAllChatJoinRequests({
              peer: (0, ce.l2)(t.id, t.accessHash),
              approved: n || void 0,
              link: s,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Io(e) {
          const { id: t, accessHash: n } = e;
          return vt(
            new u.Api.messages.HidePeerSettingsBar({
              peer: (0, ce.l2)(t, n),
            })
          );
        }
        var Co = n(48287).hp;
        function Po(e) {
          const { emojies_sounds: t } = e;
          return t
            ? Object.keys(t).reduce((e, n) => {
                const s = t[n];
                return (
                  (d.Ay.documents[s.id] = new u.Api.Document({
                    id: sn()(s.id),
                    accessHash: sn()(s.access_hash),
                    dcId: 1,
                    mimeType: "audio/ogg",
                    fileReference: Co.alloc(0),
                    size: sn()(0),
                  })),
                  (e[n] = s.id),
                  e
                );
              }, {})
            : {};
        }
        function Mo(e, t, n) {
          return [
            e[`${t}_default`] || a.dR$[n][0],
            e[`${t}_premium`] || a.dR$[n][1],
          ];
        }
        function ko(e) {
          let t;
          try {
            t = 1e3 * +e.ads_config.split(",")[2];
          } catch {
            t = a.Vwl;
          }
          return t;
        }
        function Ro(e, t) {
          const n = Q(e);
          return {
            emojiSounds: Po(n),
            seenByMaxChatMembers: n.chat_read_mark_size_threshold,
            seenByExpiresAt: n.chat_read_mark_expire_period,
            autologinDomains: n.autologin_domains || [],
            urlAuthDomains: n.url_auth_domains || [],
            maxUniqueReactions: n.reactions_uniq_max,
            premiumBotUsername: n.premium_bot_username,
            premiumInvoiceSlug: n.premium_invoice_slug,
            premiumPromoOrder: n.premium_promo_order,
            isPremiumPurchaseBlocked: n.premium_purchase_blocked,
            defaultEmojiStatusesStickerSetId:
              n.default_emoji_statuses_stickerset_id,
            topicsPinnedLimit: n.topics_pinned_limit,
            maxUserReactionsDefault: n.reactions_user_max_default,
            maxUserReactionsPremium: n.reactions_user_max_premium,
            hiddenMembersMinCount: n.hidden_members_group_size_min,
            canDisplayAutoarchiveSetting: n.autoarchive_setting_available,
            limits: {
              uploadMaxFileparts: Mo(
                n,
                "upload_max_fileparts",
                "uploadMaxFileparts"
              ),
              stickersFaved: Mo(n, "stickers_faved_limit", "stickersFaved"),
              savedGifs: Mo(n, "saved_gifs_limit", "savedGifs"),
              dialogFiltersChats: Mo(
                n,
                "dialog_filters_chats_limit",
                "dialogFiltersChats"
              ),
              dialogFilters: Mo(n, "dialog_filters_limit", "dialogFilters"),
              dialogFolderPinned: Mo(
                n,
                "dialogs_pinned_limit",
                "dialogFolderPinned"
              ),
              captionLength: Mo(n, "caption_length_limit", "captionLength"),
              channels: Mo(n, "channels_limit", "channels"),
              channelsPublic: Mo(n, "channels_public_limit", "channelsPublic"),
              aboutLength: Mo(n, "about_length_limit", "aboutLength"),
              chatlistInvites: Mo(
                n,
                "chatlist_invites_limit",
                "chatlistInvites"
              ),
              chatlistJoined: Mo(n, "chatlist_joined_limit", "chatlistJoined"),
            },
            hash: t,
            areStoriesHidden: n.stories_all_hidden,
            storyExpirePeriod: n.story_expire_period ?? a.Cmr,
            storyViewersExpirePeriod: n.story_viewers_expire_period ?? a.CuG,
            storyChangelogUserId:
              n.stories_changelog_user_id?.toString() ?? a.zv8,
            file_upload_maxTotalSize: n.features.file_upload_maxTotalSize,
            file_upload_maxParts: n.upload_max_fileparts_default,
            file_upload_smallMaxTotalSize:
              n.features.file_upload_smallMaxTotalSize,
            get_channel_ads_cache_timeout:
              1e3 * n.get_channel_ads_cache_timeout,
            pinAdsReFetchTimeOut: ko(n),
          };
        }
        var Eo = n(48287).hp;
        const To = ["ar", "fa", "id", "ko", "uz", "en"];
        let Bo;
        function Do(e) {
          let { firstName: t, lastName: n, about: s } = e;
          return vt(
            new u.Api.account.UpdateProfile({
              firstName: t || "",
              lastName: n || "",
              about: s || "",
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function Uo(e) {
          try {
            return {
              result: await vt(
                new u.Api.account.CheckUsername({
                  username: e,
                }),
                {
                  shouldThrow: !0,
                }
              ),
              error: void 0,
            };
          } catch (e) {
            const t = e.message;
            if (lo.has(t))
              return {
                result: !1,
                error: t,
              };
            throw e;
          }
        }
        function xo(e) {
          return vt(
            new u.Api.account.UpdateUsername({
              username: e,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function Vo(e, t) {
          const n = e ? (0, ce.Hk)(e) : new u.Api.InputPhotoEmpty(),
            s = await vt(
              new u.Api.photos.UpdateProfilePhoto({
                id: n,
                ...(t
                  ? {
                      fallback: !0,
                    }
                  : void 0),
              })
            );
          if (s)
            return (
              (0, c.JV)(s.users),
              s.photo instanceof u.Api.Photo
                ? ((0, c.Kv)(s.photo),
                  {
                    users: s.users.map(j).filter(Boolean),
                    photo: (0, h.rk)(s.photo),
                  })
                : void 0
            );
        }
        async function Fo(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0;
          const a = await It(e),
            i = await vt(
              new u.Api.photos.UploadProfilePhoto({
                ...(n
                  ? {
                      video: a,
                      videoStartTs: s,
                    }
                  : {
                      file: a,
                    }),
                ...(t
                  ? {
                      fallback: !0,
                    }
                  : void 0),
              })
            );
          if (i)
            return (
              (0, c.JV)(i.users),
              i.photo instanceof u.Api.Photo
                ? ((0, c.Kv)(i.photo),
                  {
                    users: i.users.map(j).filter(Boolean),
                    photo: (0, h.rk)(i.photo),
                  })
                : void 0
            );
        }
        async function No(e) {
          let { file: t, isSuggest: n, user: s } = e;
          const a = t ? await It(t) : void 0,
            i = await vt(
              new u.Api.photos.UploadContactProfilePhoto({
                userId: (0, ce.yp)(s.id, s.accessHash),
                file: a,
                ...(n
                  ? {
                      suggest: !0,
                    }
                  : {
                      save: !0,
                    }),
              })
            );
          if (!i) return;
          (0, c.JV)(i.users);
          const o = i.users.map(j).filter(Boolean);
          return i.photo instanceof u.Api.Photo
            ? ((0, c.Kv)(i.photo),
              {
                users: o,
                photo: (0, h.rk)(i.photo),
              })
            : {
                users: o,
                photo: void 0,
              };
        }
        async function qo(e) {
          const t = e.map(ce.Hk).filter(Boolean),
            n = await vt(
              new u.Api.photos.DeletePhotos({
                id: t,
              }),
              {
                shouldReturnTrue: !0,
              }
            );
          return (
            n &&
              e.forEach((e) => {
                delete d.Ay.photos[e.id];
              }),
            n
          );
        }
        async function Oo() {
          const e = await vt(
            new u.Api.account.GetWallPapers({
              hash: sn()("0"),
            })
          );
          if (!e || e instanceof u.Api.account.WallPapersNotModified) return;
          const t = e.wallpapers.filter(
            (e) =>
              e instanceof u.Api.WallPaper &&
              e.document instanceof u.Api.Document &&
              !e.pattern &&
              "application/x-tgwallpattern" !== e.document.mimeType
          );
          return (
            t.forEach((e) => {
              d.Ay.documents[String(e.document.id)] = e.document;
            }),
            {
              wallpapers: t.map($).filter(Boolean),
            }
          );
        }
        async function Ho(e) {
          const t = await It(e),
            n = await vt(
              new u.Api.account.UploadWallPaper({
                file: t,
                mimeType: e.type,
                settings: new u.Api.WallPaperSettings(),
              })
            );
          if (!(n && n instanceof u.Api.WallPaper)) return;
          const s = $(n);
          return s
            ? ((d.Ay.documents[String(n.document.id)] = n.document),
              {
                wallpaper: s,
              })
            : void 0;
        }
        async function Lo(e) {
          let { isOnlyStories: t } = e;
          const n = await vt(
            new u.Api.contacts.GetBlocked({
              myStoriesFrom: t,
              limit: a.qm3,
            })
          );
          if (n)
            return (
              hr(n),
              {
                users: n.users.map(j).filter(Boolean),
                chats: n.chats.map((e) => I(e)).filter(Boolean),
                blockedIds: n.blocked.map((e) => (0, y.Zo)(e.peerId)),
                totalCount:
                  n instanceof u.Api.contacts.BlockedSlice
                    ? n.count
                    : n.blocked.length,
              }
            );
        }
        function Go(e) {
          let { user: t, isOnlyStories: n } = e;
          return vt(
            new u.Api.contacts.Block({
              id: (0, ce.l2)(t.id, t.accessHash),
              myStoriesFrom: n,
            })
          );
        }
        function jo(e) {
          let { user: t, isOnlyStories: n } = e;
          return vt(
            new u.Api.contacts.Unblock({
              id: (0, ce.l2)(t.id, t.accessHash),
              myStoriesFrom: n,
            })
          );
        }
        async function Wo() {
          const e = await vt(new u.Api.account.GetAuthorizations());
          if (e)
            return {
              authorizations: (0, l.dU)(e.authorizations.map(J), "hash"),
              ttlDays: e.authorizationTtlDays,
            };
        }
        function zo(e) {
          return vt(
            new u.Api.account.ResetAuthorization({
              hash: sn()(e),
            })
          );
        }
        function Ko() {
          return vt(new u.Api.auth.ResetAuthorizations());
        }
        async function $o() {}
        function Jo(e) {
          return vt(
            new u.Api.account.ResetWebAuthorization({
              hash: sn()(e),
            })
          );
        }
        function Zo() {
          return vt(new u.Api.account.ResetWebAuthorizations());
        }
        async function Qo() {}
        async function Yo() {
          const [e, t, n, s] = await Promise.all([
            vt(new u.Api.account.GetContactSignUpNotification()),
            vt(
              new u.Api.account.GetNotifySettings({
                peer: new u.Api.InputNotifyUsers(),
              })
            ),
            vt(
              new u.Api.account.GetNotifySettings({
                peer: new u.Api.InputNotifyChats(),
              })
            ),
            vt(
              new u.Api.account.GetNotifySettings({
                peer: new u.Api.InputNotifyBroadcasts(),
              })
            ),
          ]);
          if (!t || !n || !s) return !1;
          const { silent: a, muteUntil: i, showPreviews: o } = t,
            { silent: r, muteUntil: c, showPreviews: d } = n,
            { silent: l, muteUntil: f, showPreviews: g } = s;
          return {
            hasContactJoinedNotifications: !e,
            hasPrivateChatsNotifications: !(
              a ||
              ("number" == typeof i && (0, p.Fm)() < i)
            ),
            hasPrivateChatsMessagePreview: o,
            hasGroupNotifications: !(
              r ||
              ("number" == typeof c && (0, p.Fm)() < c)
            ),
            hasGroupMessagePreview: d,
            hasBroadcastNotifications: !(
              l ||
              ("number" == typeof f && (0, p.Fm)() < f)
            ),
            hasBroadcastMessagePreview: g,
          };
        }
        function Xo(e) {
          return vt(
            new u.Api.account.SetContactSignUpNotification({
              silent: e,
            })
          );
        }
        function er(e, t) {
          let n,
            { isSilent: s, shouldShowPreviews: i } = t;
          n =
            "contact" === e
              ? new u.Api.InputNotifyUsers()
              : "group" === e
              ? new u.Api.InputNotifyChats()
              : new u.Api.InputNotifyBroadcasts();
          const o = {
            showPreviews: i,
            silent: s,
            muteUntil: s ? a.fRl : 0,
          };
          return vt(
            new u.Api.account.UpdateNotifySettings({
              peer: n,
              settings: new u.Api.InputPeerNotifySettings(o),
            })
          );
        }
        async function tr() {
          const e = await vt(
            new u.Api.langpack.GetLanguages({
              langPack: a.$d8,
            })
          );
          if (e) return e.map(m._);
        }
        async function nr(e) {
          let { sourceLangPacks: t, langCode: n } = e;
          const s = await Promise.all(
              t.map((e) =>
                vt(
                  new u.Api.langpack.GetLangPack({
                    langPack: e,
                    langCode: n,
                  })
                )
              )
            ),
            a = s.filter(Boolean).map(X);
          if (a.length)
            return {
              langPack: Object.assign({}, ...a.reverse()),
              version: s[0]?.version,
            };
        }
        async function sr(e) {
          let { langCode: t, fromVersion: n } = e;
          const s = await vt(
            new u.Api.langpack.GetDifference({
              langPack: a.$d8,
              langCode: t,
              fromVersion: n,
            })
          );
          if (s) return (0, m._)(s);
        }
        async function ar(e) {
          let { langPack: t, langCode: n, keys: s } = e;
          const a = await vt(
            new u.Api.langpack.GetStrings({
              langPack: t,
              langCode: To.includes(n) ? `${n}-raw` : n,
              keys: s,
            })
          );
          if (a) return a.map(ee);
        }
        async function ir(e) {
          const t = (0, ce.kE)(e),
            n = await vt(
              new u.Api.account.GetPrivacy({
                key: t,
              })
            );
          if (n)
            return (
              hr(n),
              {
                users: n.users.map(j).filter(Boolean),
                rules: (0, h.gR)(n.rules),
              }
            );
        }
        function or(e, t) {
          const n = pt.session.getAuthKey().getKey(),
            s = new Uint8Array(n),
            a = Eo.from(s).toString("base64");
          return (
            Bo({
              "@type": "sendSecret",
              secretCode: a,
            }),
            vt(
              new u.Api.account.RegisterDevice({
                tokenType: t,
                secret: n,
                appSandbox: !1,
                otherUids: [],
                token: e,
              })
            )
          );
        }
        async function rr(e) {}
        async function cr(e, t) {
          const n = (0, ce.kE)(e),
            s = (0, ce.oq)(t),
            a = await vt(
              new u.Api.account.SetPrivacy({
                key: n,
                rules: s,
              })
            );
          if (a)
            return (
              hr(a),
              {
                users: a.users.map(j).filter(Boolean),
                rules: (0, h.gR)(a.rules),
              }
            );
        }
        async function dr(e) {
          await vt(
            new u.Api.account.UpdateStatus({
              offline: !e,
            })
          );
        }
        async function ur() {}
        function lr(e) {
          return vt(
            new u.Api.account.SetContentSettings({
              sensitiveEnabled: e || void 0,
            })
          );
        }
        async function pr(e) {
          const t = await vt(
            new u.Api.help.GetAppConfig({
              hash: e,
            })
          );
          if (!t || t instanceof u.Api.help.AppConfigNotModified) return;
          const { config: n, hash: s } = t;
          return Ro(n, s);
        }
        async function fr() {
          const e = await vt(new u.Api.help.GetConfig());
          if (e)
            return (function (e) {
              const t = e.reactionsDefault && (0, _._9)(e.reactionsDefault);
              return {
                expiresAt: e.expires,
                gifSearchUsername: e.gifSearchUsername,
                defaultReaction: t,
                maxGroupSize: e.chatSizeMax,
                autologinToken: e.autologinToken,
              };
            })(e);
        }
        async function gr(e) {}
        function hr(e) {
          (0, c.JV)(e.users), (0, c.JV)(e.chats);
        }
        async function mr(e) {
          let { langCode: t = "fa" } = e;
          const n = await vt(
            new u.Api.help.GetCountriesList({
              langCode: t,
            })
          );
          if (n instanceof u.Api.help.CountriesList)
            return (function (e) {
              const t = e.filter((e) => {
                let { hidden: t } = e;
                return !t;
              });
              return {
                phoneCodes: t
                  .map((e) => e.countryCodes.map((t) => Z(e, t)))
                  .flat()
                  .sort((e, t) =>
                    e.name
                      ? e.name.localeCompare(t.name)
                      : e.defaultName.localeCompare(t.defaultName)
                  ),
                general: t
                  .map((e) => Z(e, e.countryCodes[0]))
                  .sort((e, t) =>
                    e.name
                      ? e.name.localeCompare(t.name)
                      : e.defaultName.localeCompare(t.defaultName)
                  ),
              };
            })(n.countries);
        }
        async function yr() {
          const e = await vt(new u.Api.account.GetGlobalPrivacySettings());
          if (e)
            return {
              shouldArchiveAndMuteNewNonContact: Boolean(
                e.archiveAndMuteNewNoncontactPeers
              ),
            };
        }
        async function _r(e) {
          let { shouldArchiveAndMuteNewNonContact: t } = e;
          const n = await vt(
            new u.Api.account.SetGlobalPrivacySettings({
              settings: new u.Api.GlobalPrivacySettings({
                ...(t && {
                  archiveAndMuteNewNoncontactPeers: !0,
                }),
              }),
            })
          );
          if (n)
            return {
              shouldArchiveAndMuteNewNonContact: Boolean(
                n.archiveAndMuteNewNoncontactPeers
              ),
            };
        }
        function br(e) {
          let { chatId: t, accessHash: n, username: s, isActive: a } = e;
          return vt(
            t
              ? new u.Api.channels.ToggleUsername({
                  channel: (0, ce.yp)(t, n),
                  username: s,
                  active: a,
                })
              : new u.Api.account.ToggleUsername({
                  username: s,
                  active: a,
                })
          );
        }
        function wr(e) {
          let { chatId: t, accessHash: n, usernames: s } = e;
          return vt(
            t
              ? new u.Api.channels.ReorderUsernames({
                  channel: (0, ce.yp)(t, n),
                  order: s,
                })
              : new u.Api.account.ReorderUsernames({
                  order: s,
                })
          );
        }
        const vr = {
            EMAIL_UNCONFIRMED: "Email unconfirmed",
            EMAIL_HASH_EXPIRED: "Email hash expired",
            NEW_SALT_INVALID: "The new salt is invalid",
            NEW_SETTINGS_INVALID: "The new password settings are invalid",
            CODE_INVALID: "Invalid Code",
            PASSWORD_HASH_INVALID: "Invalid Password",
          },
          Ar = {};
        let Sr;
        async function Ir() {
          const e = await vt(new u.Api.account.GetPassword());
          if (!e) return;
          const { hint: t, hasPassword: n } = e;
          return {
            hint: t,
            hasPassword: n,
          };
        }
        function Cr(e) {
          return (
            Sr({
              "@type": "updateTwoFaStateWaitCode",
              length: e,
            }),
            new Promise((e, t) => {
              (Ar.resolve = e), (Ar.reject = t);
            })
          );
        }
        async function Pr(e) {
          try {
            return (
              await Ct({
                isCheckPassword: !0,
                currentPassword: e,
              }),
              !0
            );
          } catch (e) {
            return Tr(e), !1;
          }
        }
        async function Mr(e) {
          try {
            return (
              await Ct({
                currentPassword: e,
              }),
              !0
            );
          } catch (e) {
            return Tr(e), !1;
          }
        }
        async function kr(e, t, n, s) {
          try {
            return (
              await Ct({
                currentPassword: e,
                newPassword: t,
                hint: n,
                email: s,
                emailCodeCallback: Cr,
                onEmailCodeError: Tr,
              }),
              !0
            );
          } catch (e) {
            return Tr(e), !1;
          }
        }
        async function Rr(e, t) {
          try {
            return (
              await Ct({
                currentPassword: e,
                newPassword: e,
                email: t,
                emailCodeCallback: Cr,
                onEmailCodeError: Tr,
              }),
              !0
            );
          } catch (e) {
            return Tr(e), !1;
          }
        }
        function Er(e) {
          Ar.resolve(e);
        }
        function Tr(e) {
          let t;
          if (e instanceof u.errors.FloodWaitError) {
            const n = Math.ceil(Number(e.seconds) / 60 / 60);
            t =
              "Too many attempts. Try again in " +
              (n > 1 ? `${n} hours` : "an hour");
          } else t = vr[e.message];
          t || ((t = "Unexpected Error"), a.Oig && console.error(e)),
            Sr({
              "@type": "updateTwoFaError",
              message: t,
            });
        }
        function Br(e) {
          let { chat: t, emoticon: n } = e;
          return vt(
            new u.Api.messages.SetTyping({
              peer: (0, ce.l2)(t.id, t.accessHash),
              action: new u.Api.SendMessageEmojiInteractionSeen({
                emoticon: n,
              }),
            }),
            {
              abortControllerChatId: t.id,
            }
          );
        }
        function Dr(e) {
          let { chat: t, emoticon: n, messageId: s, timestamps: a } = e;
          return vt(
            new u.Api.messages.SetTyping({
              peer: (0, ce.l2)(t.id, t.accessHash),
              action: new u.Api.SendMessageEmojiInteraction({
                emoticon: n,
                msgId: s,
                interaction: new u.Api.DataJSON({
                  data: JSON.stringify({
                    v: 1,
                    a: a.map((e) => ({
                      t: e,
                      i: 1,
                    })),
                  }),
                }),
              }),
            }),
            {
              abortControllerChatId: t.id,
            }
          );
        }
        async function Ur() {
          const e = await vt(new u.Api.messages.GetAvailableReactions({}));
          if (e && !(e instanceof u.Api.messages.AvailableReactionsNotModified))
            return (
              e.reactions.forEach((e) => {
                e.staticIcon instanceof u.Api.Document &&
                  (d.Ay.documents[String(e.staticIcon.id)] = e.staticIcon),
                  e.selectAnimation instanceof u.Api.Document &&
                    (d.Ay.documents[String(e.selectAnimation.id)] =
                      e.selectAnimation),
                  e.aroundAnimation instanceof u.Api.Document &&
                    (d.Ay.documents[String(e.aroundAnimation.id)] =
                      e.aroundAnimation),
                  e.appearAnimation instanceof u.Api.Document &&
                    (d.Ay.documents[String(e.appearAnimation.id)] =
                      e.appearAnimation),
                  e.centerIcon instanceof u.Api.Document &&
                    (d.Ay.documents[String(e.centerIcon.id)] = e.centerIcon);
              }),
              e.reactions.map(_.DK)
            );
        }
        function xr(e) {
          let { chat: t, messageId: n, reactions: s, shouldAddToRecent: a } = e;
          return vt(
            new u.Api.messages.SendReaction({
              reaction: s?.map((e) => (0, ce.A8)(e)),
              peer: (0, ce.l2)(t.id, t.accessHash),
              msgId: n,
            }),
            {
              shouldReturnTrue: !0,
              shouldThrow: !0,
            }
          );
        }
        function Vr(e) {
          let { ids: t, chat: n } = e;
          (0, l.lD)(t, a.map).forEach((e) => {
            vt(
              new u.Api.messages.GetMessagesReactions({
                id: e,
                peer: (0, ce.l2)(n.id, n.accessHash),
              }),
              {
                shouldReturnTrue: !0,
                abortControllerChatId: n.id,
              }
            );
          });
        }
        async function Fr(e) {
          let { chat: t, messageId: n, reaction: s, offset: i } = e;
          const o = await vt(
            new u.Api.messages.GetMessageReactionsList({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
              ...(s && {
                reaction: (0, ce.A8)(s),
              }),
              limit: a.Puc,
              ...(i && {
                offset: i,
              }),
            })
          );
          if (!o) return;
          (0, c.JV)(o.users), (0, c.JV)(o.chats);
          const { nextOffset: r, reactions: d, count: l } = o;
          return {
            users: o.users.map(j).filter(Boolean),
            chats: o.chats.map((e) => I(e)).filter(Boolean),
            nextOffset: r,
            reactions: d.map(_.rb).filter(Boolean),
            count: l,
          };
        }
        function Nr(e) {
          let { reaction: t } = e;
          return vt(
            new u.Api.messages.SetDefaultReaction({
              reaction: (0, ce.A8)(t),
            })
          );
        }
        async function qr(e) {
          let { hash: t = "0" } = e;
        }
        async function Or(e) {
          let { hash: t = "0" } = e;
        }
        function Hr() {
          return vt(new u.Api.messages.ClearRecentReactions());
        }
        function Lr(e) {
          return e instanceof u.Api.PostInteractionCountersMessage
            ? {
                msgId: e.msgId,
                forwardsCount: e.forwards,
                viewsCount: e.views,
                reactionsCount: e.reactions,
              }
            : e instanceof u.Api.PostInteractionCountersStory
            ? {
                storyId: e.storyId,
                reactionsCount: e.reactions,
                viewsCount: e.views,
                forwardsCount: e.forwards,
              }
            : void 0;
        }
        function Gr(e) {
          return {
            viewsGraph: zr(e.viewsGraph),
            reactionsGraph: zr(e.reactionsByEmotionGraph),
          };
        }
        function jr(e) {
          if (e && "messages" in e)
            return e.messages.map((t) => Zr(t, e.chats));
        }
        function Wr(e) {
          if (e && "forwards" in e)
            return e.forwards.map((t) => {
              if (t instanceof u.Api.PublicForwardMessage)
                return Zr(t.message, e.chats);
              const { peer: n, story: s } = t;
              return {
                peerId: (0, y.Zo)(n),
                storyId: s.id,
                viewsCount: s.views?.viewsCount || 0,
                reactionsCount: s.views?.reactionsCount || 0,
              };
            });
        }
        function zr(e, t) {
          if (e.error) return;
          const n = JSON.parse(e.json.data),
            [s, ...a] = n.columns,
            i = n.y_scaled;
          return {
            type: t ? "area" : n.types.y0,
            zoomToken: e.zoomToken,
            labelFormatter: n.xTickFormatter,
            tooltipFormatter: n.xTooltipFormatter,
            labels: s.slice(1),
            hideCaption: !n.subchart.show,
            hasSecondYAxis: i,
            isStacked: n.stacked && !i,
            isPercentage: t,
            datasets: a.map((e) => {
              const t = e[0];
              return {
                name: n.names[t],
                color: ((s = n.colors[t]), s.substring(s.indexOf("#"))),
                values: e.slice(1),
              };
              var s;
            }),
            ...Kr(n.subchart.defaultZoom, s.slice(1)),
          };
        }
        function Kr(e, t) {
          const [n, s] = e;
          let a = 0,
            i = t.length - 1;
          return (
            t.forEach((e, t) => {
              !a && e >= n && (a = t), !i && e >= s && (i = t);
            }),
            {
              minimapRange: {
                begin: Math.max(0, a / (t.length - 1)),
                end: Math.min(1, i / (t.length - 1)),
              },
              labelFromIndex: a,
              labelToIndex: i,
            }
          );
        }
        function $r(e) {
          let { current: t, previous: n } = e;
          const s = t - n;
          return {
            current: t,
            change: s,
            ...(n && {
              percentage: (s ? (Math.abs(s) / n) * 100 : 0).toFixed(2),
            }),
          };
        }
        function Jr(e) {
          return {
            part: e.part,
            total: e.total,
            percentage: ((e.part / e.total) * 100).toFixed(2),
          };
        }
        function Zr(e, t) {
          const n = (0, y.Zo)(e.peerId),
            s = t.find((e) => (0, y.ol)(e.id, "channel") === n);
          return {
            messageId: e.id,
            views: e.views,
            title: s.title,
            chat: {
              id: n,
              type: "chatTypeChannel",
              title: s.title,
              usernames: (0, h._h)(s),
              avatarHash: s && "photo" in s ? R(s.photo) : void 0,
            },
          };
        }
        async function Qr(e) {
          let { chat: t, dcId: n } = e;
          const s = await vt(
            new u.Api.stats.GetBroadcastStats({
              channel: (0, ce.yp)(t.id, t.accessHash),
            }),
            {
              dcId: n,
            }
          );
          var a;
          if (s)
            return {
              stats:
                ((a = s),
                {
                  growthGraph: zr(a.growthGraph),
                  followersGraph: zr(a.followersGraph),
                  muteGraph: zr(a.muteGraph),
                  topHoursGraph: zr(a.topHoursGraph),
                  languagesGraph: a.languagesGraph.token,
                  viewsBySourceGraph: a.viewsBySourceGraph.token,
                  newFollowersBySourceGraph: a.newFollowersBySourceGraph.token,
                  interactionsGraph: a.interactionsGraph.token,
                  reactionsByEmotionGraph: a.reactionsByEmotionGraph.token,
                  storyInteractionsGraph: a.storyInteractionsGraph.token,
                  storyReactionsByEmotionGraph:
                    a.storyReactionsByEmotionGraph.token,
                  followers: $r(a.followers),
                  viewsPerPost: $r(a.viewsPerPost),
                  sharesPerPost: $r(a.sharesPerPost),
                  enabledNotifications: Jr(a.enabledNotifications),
                  reactionsPerPost: $r(a.reactionsPerPost),
                  viewsPerStory: $r(a.viewsPerStory),
                  sharesPerStory: $r(a.sharesPerStory),
                  reactionsPerStory: $r(a.reactionsPerStory),
                  recentPosts: a.recentPostsInteractions
                    .map(Lr)
                    .filter(Boolean),
                }),
              users: [],
            };
        }
        async function Yr(e) {
          let { chat: t, dcId: n } = e;
          const s = await vt(
            new u.Api.stats.GetMegagroupStats({
              channel: (0, ce.yp)(t.id, t.accessHash),
            }),
            {
              dcId: n,
            }
          );
          var a, i;
          if (s)
            return (
              (0, c.JV)(s.users),
              {
                users: s.users.map(j).filter(Boolean),
                stats:
                  ((a = s),
                  {
                    growthGraph: zr(a.growthGraph),
                    membersGraph: zr(a.membersGraph),
                    topHoursGraph: zr(a.topHoursGraph),
                    languagesGraph: a.languagesGraph.token,
                    messagesGraph: a.messagesGraph.token,
                    actionsGraph: a.actionsGraph.token,
                    period:
                      ((i = a.period),
                      {
                        maxDate: i.maxDate,
                        minDate: i.minDate,
                      }),
                    members: $r(a.members),
                    viewers: $r(a.viewers),
                    messages: $r(a.messages),
                    posters: $r(a.posters),
                  }),
              }
            );
        }
        async function Xr(e) {
          let { chat: t, messageId: n, dcId: s } = e;
          const a = await vt(
            new u.Api.stats.GetMessageStats({
              channel: (0, ce.yp)(t.id, t.accessHash),
              msgId: n,
            }),
            {
              dcId: s,
            }
          );
          if (a) return Gr(a);
        }
        async function ec(e) {
          let { chat: t, messageId: n, dcId: s, offsetRate: i = 0 } = e;
          const o = await vt(
            new u.Api.stats.GetMessagePublicForwards({
              channel: (0, ce.yp)(t.id, t.accessHash),
              msgId: n,
              offsetPeer: new u.Api.InputPeerEmpty(),
              offsetRate: i,
              limit: a.DRJ,
            }),
            {
              dcId: s,
            }
          );
          if (o)
            return (
              "chats" in o && (0, c.JV)(o.chats),
              {
                forwards: jr(o),
                ...("nextRate" in o
                  ? {
                      count: o.count,
                      nextRate: o.nextRate,
                    }
                  : void 0),
              }
            );
        }
        async function tc(e) {
          let { token: t, x: n, isPercentage: s, dcId: a } = e;
          const i = await vt(
            new u.Api.stats.LoadAsyncGraph({
              token: t,
              ...(n && {
                x: sn()(n),
              }),
            }),
            {
              dcId: a,
            }
          );
          if (i) return zr(i, s);
        }
        async function nc(e) {
          let { chat: t, storyId: n, dcId: s } = e;
          const a = await vt(
            new u.Api.stats.GetStoryStats({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
            }),
            {
              dcId: s,
            }
          );
          if (a) return Gr(a);
        }
        async function sc(e) {
          let { chat: t, storyId: n, dcId: s, offsetId: i = "0" } = e;
          const o = await vt(
            new u.Api.stats.GetStoryPublicForwards({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
              offset: i,
              limit: a.DRJ,
            }),
            {
              dcId: s,
            }
          );
          if (o)
            return (
              (0, c.JV)(o.chats),
              (0, c.JV)(o.users),
              {
                publicForwards: Wr(o),
                users: o.users.map(j).filter(Boolean),
                chats: o.chats.map((e) => I(e)).filter(Boolean),
                count: o.count,
                nextOffsetId: o.nextOffset,
              }
            );
        }
        var ac = n(21051),
          ic = n.n(ac),
          oc = n(51369),
          rc = n.n(oc),
          cc = n(80071),
          dc = n.n(cc),
          uc = n(35897),
          lc = n.n(uc),
          pc = n(48287).hp;
        function fc(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        let gc, hc, mc;
        class yc {
          constructor(e) {
            (this.isOutgoing = e),
              fc(this, "state", void 0),
              fc(this, "seq", 0),
              fc(this, "gA", void 0),
              fc(this, "gB", void 0),
              fc(this, "p", void 0),
              fc(this, "random", void 0),
              fc(this, "waitForState", void 0),
              fc(this, "resolveState", void 0),
              (this.waitForState = new Promise((e) => {
                this.resolveState = e;
              }));
          }
          async requestCall(e) {
            let { p: t, g: n, random: s } = e;
            const a = dc().readBigIntFromBuffer(pc.from(t), !1),
              i = dc().readBigIntFromBuffer(pc.from(s), !1),
              o = dc().modExp(sn()(n), i, a);
            (this.gA = o), (this.p = a), (this.random = i);
            const r = await dc().sha256(dc().getByteArray(o));
            return Array.from(r);
          }
          acceptCall(e) {
            let { p: t, g: n, random: s } = e;
            const a = dc().readBigIntFromBuffer(t, !1),
              i = dc().readBigIntFromBuffer(s, !1),
              o = dc().modExp(sn()(n), i, a);
            return (
              (this.gB = o),
              (this.p = a),
              (this.random = i),
              Array.from(dc().getByteArray(o))
            );
          }
          async confirmCall(e, t, n) {
            this.isOutgoing
              ? (this.gB = dc().readBigIntFromBuffer(pc.from(e), !1))
              : (this.gA = dc().readBigIntFromBuffer(pc.from(e), !1));
            const s = dc().modExp(
                this.isOutgoing ? this.gB : this.gA,
                this.random,
                this.p
              ),
              a = await dc().sha1(dc().getByteArray(s)),
              i = dc().readBigIntFromBuffer(a.slice(-8).reverse(), !1),
              o = await (async function (e, t, n, s) {
                const a = await dc().sha256(
                    pc.concat([new Uint8Array(e), new Uint8Array(t)])
                  ),
                  i = [],
                  o = s.length - 1;
                for (let e = 0; e !== a.byteLength; e += 8) {
                  const t = ((r = a.subarray(e, e + 8)),
                    sn()(r[0])
                      .and(127)
                      .shiftLeft(56)
                      .or(sn()(r[1]).shiftLeft(48))
                      .or(sn()(r[2]).shiftLeft(40))
                      .or(sn()(r[3]).shiftLeft(32))
                      .or(sn()(r[4]).shiftLeft(24))
                      .or(sn()(r[5]).shiftLeft(16))
                      .or(sn()(r[6]).shiftLeft(8))
                      .or(sn()(r[7])))
                      .modPow(1, o)
                      .toJSNumber(),
                    c = s[t],
                    d = s[t + 1] - c;
                  i.push(String.fromCharCode(...n.subarray(c, c + d)));
                }
                var r;
                return i.join("");
              })(dc().getByteArray(s), dc().getByteArray(this.gA), t, n),
              r = new (ic())();
            return (
              await r.setKey(dc().getByteArray(s)),
              (this.state = new (lc())(r, new (rc())(), !0, this.isOutgoing)),
              this.resolveState(),
              {
                gA: Array.from(dc().getByteArray(this.gA)),
                keyFingerprint: i.toString(),
                emojis: o,
              }
            );
          }
          async encode(e) {
            if (!this.state) return;
            const t = new Uint32Array(1);
            t[0] = this.seq++;
            const n = await this.state.encryptMessageData(
              pc.concat([dc().convertToLittle(t), pc.from(e)])
            );
            return Array.from(n);
          }
          async decode(e) {
            if (!this.state)
              return this.waitForState.then(() => this.decode(e));
            const t = await this.state.decryptMessageData(pc.from(e));
            return JSON.parse(t.toString());
          }
        }
        function _c(e) {
          gc = new yc(...e);
        }
        function bc() {
          gc = void 0;
        }
        function wc(e) {
          return gc.encode(...e);
        }
        async function vc(e) {
          if (gc) return await gc.decode(...e);
        }
        function Ac(e) {
          return gc.confirmCall(...e);
        }
        function Sc(e) {
          return gc.acceptCall(...e);
        }
        function Ic(e) {
          return gc.requestCall(...e);
        }
        async function Cc(e) {
          let { stateHash: t, isFirstRequest: n = !1, isHidden: s = !1 } = e;
        }
        async function Pc(e) {
          let { peer: t } = e;
        }
        function Mc(e) {
          let { peer: t, offsetId: n } = e;
          return Oc({
            method: new u.Api.stories.GetPinnedStories({
              peer: (0, ce.l2)(t.id, t.accessHash),
              offsetId: n,
              limit: a.$Eh,
            }),
            peerId: t.id,
          });
        }
        function kc(e) {
          let { peer: t, offsetId: n } = e;
          return Oc({
            method: new u.Api.stories.GetStoriesArchive({
              peer: t && (0, ce.l2)(t.id, t.accessHash),
              offsetId: n,
              limit: a.$Eh,
            }),
            peerId: t.id,
          });
        }
        async function Rc(e) {
          let { peer: t, ids: n } = e;
          const s = await vt(
            new u.Api.stories.GetStoriesByID({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
            })
          );
          if (!s) return;
          (0, c.JV)(s.users),
            (0, c.JV)(s.chats),
            s.stories.forEach((e) => (0, c.np)(e, t.id));
          const a = s.users.map(j).filter(Boolean);
          return {
            chats: s.chats.map((e) => I(e)).filter(Boolean),
            users: a,
            stories: n.reduce((e, n) => {
              const a = s.stories.find((e) => {
                let { id: t } = e;
                return t === n;
              });
              return (
                (e[n] = a
                  ? te(t.id, a)
                  : {
                      id: n,
                      peerId: t.id,
                      isDeleted: !0,
                    }),
                e
              );
            }, {}),
          };
        }
        function Ec(e) {
          let { peer: t, storyId: n } = e;
          return vt(
            new u.Api.stories.IncrementStoryViews({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: [n],
            })
          );
        }
        function Tc(e) {
          let { peer: t, storyId: n } = e;
          return vt(
            new u.Api.stories.ReadStories({
              peer: (0, ce.l2)(t.id, t.accessHash),
              maxId: n,
            })
          );
        }
        function Bc(e) {
          let { peer: t, storyId: n } = e;
          return vt(
            new u.Api.stories.DeleteStories({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: [n],
            })
          );
        }
        function Dc(e) {
          let { peer: t, storyId: n, isPinned: s } = e;
          return vt(
            new u.Api.stories.TogglePinned({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: [n],
              pinned: s,
            })
          );
        }
        async function Uc(e) {
          let {
            peer: t,
            storyId: n,
            areJustContacts: s,
            query: i,
            areReactionsFirst: o,
            limit: r = a.$Eh,
            offset: d = "",
          } = e;
          const l = await vt(
            new u.Api.stories.GetStoryViewsList({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
              justContacts: s,
              q: i,
              reactionsFirst: o,
              limit: r,
              offset: d,
            })
          );
          if (l)
            return (
              (0, c.JV)(l.users),
              {
                users: l.users.map(j).filter(Boolean),
                views: l.views.map(se),
                nextOffset: l.nextOffset,
                reactionsCount: l.reactionsCount,
                viewsCount: l.count,
              }
            );
        }
        async function xc(e) {
          let { peer: t, storyId: n } = e;
          const s = await vt(
            new u.Api.stories.ExportStoryLink({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
            })
          );
          if (s) return s.link;
        }
        function Vc(e) {
          let { peer: t, storyId: n, reason: s, description: a } = e;
          return vt(
            new u.Api.stories.Report({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: [n],
              reason: (0, ce.z0)(s),
              message: a,
            })
          );
        }
        function Fc(e) {
          let { peer: t, id: n, privacy: s } = e;
          return vt(
            new u.Api.stories.EditStory({
              peer: (0, ce.l2)(t.id, t.accessHash),
              id: n,
              privacyRules: (0, ce.oq)(s),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Nc(e) {
          let { peer: t, isHidden: n } = e;
          return vt(
            new u.Api.stories.TogglePeerStoriesHidden({
              peer: (0, ce.l2)(t.id, t.accessHash),
              hidden: n,
            })
          );
        }
        function qc(e) {
          let { peers: t } = e;
          return vt(
            new u.Api.stories.GetPeerMaxIDs({
              id: t.map((e) => (0, ce.l2)(e.id, e.accessHash)),
            })
          );
        }
        async function Oc(e) {
          let { method: t, peerId: n } = e;
          const s = await vt(t);
          if (s)
            return (
              (0, c.JV)(s.users),
              (0, c.JV)(s.chats),
              s.stories.forEach((e) => (0, c.np)(e, n)),
              {
                users: s.users.map(j).filter(Boolean),
                chats: s.chats.map((e) => I(e)).filter(Boolean),
                stories: (0, l.pA)(s.stories, (e) => [e.id, te(n, e)]),
              }
            );
        }
        function Hc(e) {
          let { peer: t, storyId: n, reaction: s, shouldAddToRecent: a } = e;
          return vt(
            new u.Api.stories.SendReaction({
              reaction: s ? (0, ce.A8)(s) : new u.Api.ReactionEmpty(),
              peer: (0, ce.l2)(t.id, t.accessHash),
              storyId: n,
              ...(a && {
                addToRecent: !0,
              }),
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Lc(e) {
          let { isForPast: t, isForFuture: n } = e;
          return vt(
            new u.Api.stories.ActivateStealthMode({
              past: t,
              future: n,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        function Gc(e) {
          if (e)
            return Object.values(e).map((e) => ({
              id: e.id,
              title: e.title,
              amount: e.prices.reduce((e, t) => e + t.amount.toJSNumber(), 0),
              prices: e.prices.map((e) => {
                let { label: t, amount: n } = e;
                return {
                  label: t,
                  amount: n.toJSNumber(),
                };
              }),
            }));
        }
        function jc(e) {
          const {
              invoice: t,
              info: n,
              shipping: s,
              currency: a,
              totalAmount: i,
              credentialsTitle: o,
              tipAmount: r,
            } = e,
            { shippingAddress: c, phone: d, name: u } = n || {},
            { prices: l } = t,
            p = l.map((e) => {
              let { label: t, amount: n } = e;
              return {
                label: t,
                amount: n.toJSNumber(),
              };
            });
          let f, g;
          return (
            s &&
              ((f = s.prices.map((e) => {
                let { label: t, amount: n } = e;
                return {
                  label: t,
                  amount: n.toJSNumber(),
                };
              })),
              (g = s.title)),
            {
              currency: a,
              prices: p,
              info: {
                shippingAddress: c,
                phone: d,
                name: u,
              },
              totalAmount: i.toJSNumber(),
              credentialsTitle: o,
              shippingPrices: f,
              shippingMethod: g,
              tipAmount: r ? r.toJSNumber() : 0,
            }
          );
        }
        function Wc(e) {
          const {
              formId: t,
              canSaveCredentials: n,
              passwordMissing: s,
              providerId: a,
              nativeProvider: i,
              nativeParams: o,
              savedInfo: r,
              invoice: c,
              savedCredentials: d,
            } = e,
            {
              test: u,
              nameRequested: l,
              phoneRequested: p,
              emailRequested: f,
              shippingAddressRequested: g,
              flexible: h,
              phoneToProvider: y,
              emailToProvider: _,
              currency: b,
              prices: w,
            } = c,
            v = w.map((e) => {
              let { label: t, amount: n } = e;
              return {
                label: t,
                amount: n.toJSNumber(),
              };
            }),
            { shippingAddress: A } = r || {},
            S = r ? (0, m._)(r) : void 0;
          S && A && (S.shippingAddress = (0, m._)(A));
          const I = o ? JSON.parse(o.data) : {};
          return {
            canSaveCredentials: n,
            isPasswordMissing: s,
            formId: String(t),
            providerId: String(a),
            nativeProvider: i,
            savedInfo: S,
            invoiceContainer: {
              isTest: u,
              isNameRequested: l,
              isPhoneRequested: p,
              isEmailRequested: f,
              isShippingAddressRequested: g,
              isFlexible: h,
              shouldSendPhoneToProvider: y,
              shouldSendEmailToProvider: _,
              currency: b,
              prices: v,
            },
            nativeParams: {
              needCardholderName: Boolean(I?.need_cardholder_name),
              needCountry: Boolean(I?.need_country),
              needZip: Boolean(I?.need_zip),
              publishableKey: I?.publishable_key,
              publicToken: I?.public_token,
            },
            ...(d && {
              savedCredentials:
                ((C = d),
                C.map((e) => {
                  let { id: t, title: n } = e;
                  return {
                    id: t,
                    title: n,
                  };
                })),
            }),
          };
          var C;
        }
        function zc(e) {
          const { invoice: t, description: n, title: s, photo: a } = e,
            {
              test: i,
              currency: o,
              prices: r,
              recurring: c,
              termsUrl: d,
              maxTipAmount: u,
              suggestedTipAmounts: l,
            } = t,
            p = r.reduce((e, t) => e + t.amount.toJSNumber(), 0);
          return {
            text: n,
            title: s,
            photo: (0, H.C)(a),
            amount: p,
            currency: o,
            isTest: i,
            isRecurring: c,
            termsUrl: d,
            maxTipAmount: u?.toJSNumber(),
            ...(l && {
              suggestedTipAmounts: l.map((e) => e.toJSNumber()),
            }),
          };
        }
        function Kc(e) {
          const {
            date: t,
            expires: n,
            slot: s,
            cooldownUntilDate: a,
            peer: i,
          } = e;
          return {
            date: t,
            expires: n,
            slot: s,
            cooldownUntil: a,
            chatId: i && (0, y.Zo)(i),
          };
        }
        function $c(e) {
          const {
            date: t,
            fromId: n,
            months: s,
            giveawayMsgId: a,
            toId: i,
            usedDate: o,
            viaGiveaway: r,
          } = e;
          return {
            date: t,
            months: s,
            toId: i && (0, y.ol)(i, "user"),
            fromId: n && (0, y.Zo)(n),
            usedAt: o,
            isFromGiveaway: r,
            giveawayMessageId: a,
          };
        }
        async function Jc(e) {
          let { inputInvoice: t, requestInfo: n, shouldSave: s } = e;
          const a = await vt(
            new u.Api.payments.ValidateRequestedInfo({
              invoice: (0, ce.SW)(t),
              save: s || void 0,
              info: (0, ce.zn)(n),
            })
          );
          if (!a) return;
          const { id: i, shippingOptions: o } = a;
          return i
            ? {
                id: i,
                shippingOptions: Gc(o),
              }
            : void 0;
        }
        async function Zc(e) {
          let {
            inputInvoice: t,
            formId: n,
            requestedInfoId: s,
            shippingOptionId: a,
            credentials: i,
            savedCredentialId: o,
            temporaryPassword: r,
            tipAmount: d,
          } = e;
          const l =
              r && o
                ? new u.Api.InputPaymentCredentialsSaved({
                    id: o,
                    tmpPassword: (0, c.rW)(r),
                  })
                : new u.Api.InputPaymentCredentials({
                    save: i.save,
                    data: new u.Api.DataJSON({
                      data: JSON.stringify(i.data),
                    }),
                  }),
            p = await vt(
              new u.Api.payments.SendPaymentForm({
                formId: sn()(n),
                invoice: (0, ce.SW)(t),
                requestedInfoId: s,
                shippingOptionId: a,
                credentials: l,
                ...(d && {
                  tipAmount: sn()(d),
                }),
              })
            );
          if (!(p instanceof u.Api.payments.PaymentVerificationNeeded))
            return Boolean(p);
          hc({
            "@type": "updatePaymentVerificationNeeded",
            url: p.url,
          });
        }
        async function Qc(e) {
          const t = await vt(
            new u.Api.payments.GetPaymentForm({
              invoice: (0, ce.SW)(e),
            })
          );
          if (t)
            return (
              t.photo && (d.Ay.webDocuments[t.photo.url] = t.photo),
              (0, c.JV)(t.users),
              {
                form: Wc(t),
                invoice: zc(t),
                users: t.users.map(j).filter(Boolean),
              }
            );
        }
        async function Yc(e, t) {
          const n = await vt(
            new u.Api.payments.GetPaymentReceipt({
              peer: (0, ce.l2)(e.id, e.accessHash),
              msgId: t,
            })
          );
          if (n)
            return (
              (0, c.JV)(n.users),
              {
                receipt: jc(n),
                users: n.users.map(j).filter(Boolean),
              }
            );
        }
        async function Xc() {}
        async function ed(e) {
          const t = await (function (e, t) {
            return (function (e, t) {
              return pt.getTmpPassword(e, t);
            })(e, t);
          })(e);
          if (t)
            return "error" in t
              ? t
              : {
                  value: (0, c.A9)(t.tmpPassword),
                  validUntil: t.validUntil,
                };
        }
        async function td() {
          const e = await vt(new u.Api.premium.GetMyBoosts());
          if (e)
            return (
              (0, c.JV)(e.users),
              (0, c.JV)(e.chats),
              {
                users: e.users.map(j).filter(Boolean),
                chats: e.chats.map((e) => I(e)).filter(Boolean),
                boosts: e.myBoosts.map(Kc),
              }
            );
        }
        async function nd(e) {
          let { chat: t, slots: n } = e;
          const s = await vt(
            new u.Api.premium.ApplyBoost({
              peer: (0, ce.l2)(t.id, t.accessHash),
              slots: n,
            })
          );
          if (s)
            return (
              (0, c.JV)(s.users),
              (0, c.JV)(s.chats),
              {
                users: s.users.map(j).filter(Boolean),
                chats: s.chats.map((e) => I(e)).filter(Boolean),
                boosts: s.myBoosts.map(Kc),
              }
            );
        }
        async function sd(e) {
          let { chat: t } = e;
          const n = await vt(
            new u.Api.premium.GetBoostsStatus({
              peer: (0, ce.l2)(t.id, t.accessHash),
            })
          );
          if (n)
            return (function (e) {
              const {
                level: t,
                boostUrl: n,
                boosts: s,
                myBoost: a,
                currentLevelBoosts: i,
                nextLevelBoosts: o,
                premiumAudience: r,
              } = e;
              return {
                level: t,
                currentLevelBoosts: i,
                boosts: s,
                hasMyBoost: Boolean(a),
                boostUrl: n,
                nextLevelBoosts: o,
                ...(r && {
                  premiumSubscribers: Jr(r),
                }),
              };
            })(n);
        }
        async function ad(e) {
          let { chat: t, offset: n = "", limit: s } = e;
          const a = await vt(
            new u.Api.premium.GetBoostsList({
              peer: (0, ce.l2)(t.id, t.accessHash),
              offset: n,
              limit: s,
            })
          );
          if (!a) return;
          (0, c.JV)(a.users);
          const i = a.users.map(j).filter(Boolean),
            o = a.boosts.filter((e) => e.userId),
            r = o.map((e) => e.userId.toString()),
            d = (0, l.pA)(o, (e) => [e.userId.toString(), e.expires]);
          return {
            count: a.count,
            users: i,
            boosters: d,
            boosterIds: r,
            nextOffset: a.nextOffset,
          };
        }
        async function id(e) {
          let { peer: t, messageId: n } = e;
          const s = await vt(
            new u.Api.payments.GetGiveawayInfo({
              peer: (0, ce.l2)(t.id, t.accessHash),
              msgId: n,
            })
          );
          if (s)
            return (function (e) {
              if (e instanceof u.Api.payments.GiveawayInfo) {
                const {
                  startDate: t,
                  adminDisallowedChatId: n,
                  disallowedCountry: s,
                  joinedTooEarlyDate: a,
                  participating: i,
                  preparingResults: o,
                } = e;
                return {
                  type: "active",
                  startDate: t,
                  isParticipating: i,
                  adminDisallowedChatId: n?.toString(),
                  disallowedCountry: s,
                  joinedTooEarlyDate: a,
                  isPreparingResults: o,
                };
              }
              {
                const {
                  activatedCount: t,
                  finishDate: n,
                  giftCodeSlug: s,
                  winner: a,
                  refunded: i,
                  startDate: o,
                  winnersCount: r,
                } = e;
                return {
                  type: "results",
                  startDate: o,
                  activatedCount: t,
                  finishDate: n,
                  winnersCount: r,
                  giftCodeSlug: s,
                  isRefunded: i,
                  isWinner: a,
                };
              }
            })(s);
        }
        async function od(e) {
          let { slug: t } = e;
          const n = await vt(
            new u.Api.payments.CheckGiftCode({
              slug: t,
            })
          );
          if (n)
            return (
              (0, c.JV)(n.users),
              (0, c.JV)(n.chats),
              {
                code: $c(n),
                users: n.users.map(j).filter(Boolean),
                chats: n.chats.map((e) => I(e)).filter(Boolean),
              }
            );
        }
        function rd(e) {
          let { slug: t } = e;
          return vt(
            new u.Api.payments.ApplyGiftCode({
              slug: t,
            }),
            {
              shouldReturnTrue: !0,
            }
          );
        }
        async function cd(e) {
          let { thirdPartyId: t, messageType: n, content: s } = e;
          const a = await vt(
            new u.Api.thirdParty.Request({
              message: new u.Api.thirdParty.Message({
                thirdPartyId: t,
                messageType: n,
                content: s,
              }),
            })
          );
          return a instanceof u.Api.thirdParty.Reply ? a : void 0;
        }
        async function dd(e) {
          let { thirdPartyId: t, messageType: n, content: s } = e;
          await vt(
            new u.Api.thirdParty.Tell({
              message: new u.Api.thirdParty.Message({
                thirdPartyId: t,
                messageType: n,
                content: s,
              }),
            })
          );
        }
        function ud(e, t, n) {
          (mc = e),
            (function (e) {
              ge = e;
            })(hd),
            (function (e) {
              Vt = e;
            })(hd),
            (function (e) {
              En = e;
            })(hd),
            (function (e) {
              Aa = e;
            })(hd),
            (function (e) {
              yi = e;
            })(hd),
            (function (e) {
              _i = e;
            })(hd),
            (function (e) {
              wi = e;
            })(hd),
            (function (e) {
              Sr = e;
            })(hd),
            (function (e) {
              an = e;
            })(hd),
            (function (e) {
              Rn = e;
            })(hd),
            (function (e) {
              hc = e;
            })(hd),
            n && (0, d.iB)(n),
            (async function (e, t) {
              (a.Oig || gt) && console.log(">>> START INIT API"), (lt = e);
              const {
                  userAgent: n,
                  platform: s,
                  sessionData: i,
                  isTest: o,
                  isWebmSupported: r,
                  maxBufferSize: d,
                  webAuthToken: l,
                  dcId: p,
                  mockScenario: f,
                  shouldForceHttpTransport: g,
                  shouldAllowHttpTransport: h,
                  shouldDebugExportedSenders: m,
                } = t,
                y = new u.sessions.CallbackSession(i, bt);
              (self.isWebmSupported = r),
                (self.maxBufferSize = d),
                (pt = new (ve())(
                  y,
                  "1030400",
                  "6edb16cf88714a4e9a805e928c39c937",
                  {
                    deviceModel: navigator.userAgent || n || ot,
                    systemVersion: s || rt,
                    appVersion: `2.9.5 ${a.cK8}`,
                    useWSS: !0,
                    additionalDcsDisabled: a.W75,
                    shouldDebugExportedSenders: m,
                    shouldForceHttpTransport: g,
                    shouldAllowHttpTransport: h,
                    testServers: o,
                    dcId: p,
                  }
                )),
                pt.addEventHandler(wt, ct);
              try {
                (a.Oig || gt) &&
                  ((0, c.Rm)("CONNECTING"),
                  (self.invoke = vt),
                  (self.GramJs = u.Api));
                try {
                  pt.setPingCallback(je),
                    await pt.start({
                      phoneNumber: Nt,
                      phoneCode: qt,
                      password: Ot,
                      firstAndLastNames: Ht,
                      qrCode: Lt,
                      onError: $t,
                      initialMethod: "phoneNumber",
                      shouldThrowIfUnauthorized: Boolean(i),
                      webAuthToken: l,
                      webAuthTokenFailed: Ft,
                      mockScenario: f,
                    });
                } catch (e) {
                  if (
                    (console.error(e),
                    "Disconnect" !== e.message &&
                      "Cannot send requests while disconnected" !== e.message)
                  )
                    return void lt({
                      "@type": "updateConnectionState",
                      connectionState: "connectionStateBroken",
                    });
                }
                (a.Oig || gt) &&
                  (console.log(">>> FINISH INIT API"), (0, c.Rm)("CONNECTED")),
                  Vt(Jt("authorizationStateReady")),
                  bt(y.getSessionData()),
                  lt({
                    "@type": "updateApiReady",
                  }),
                  (async function (e) {
                    (Re = e), await $e(), (Te = !0), Le();
                  })(vt),
                  kt();
              } catch (e) {
                throw ((a.Oig || gt) && (0, c.Rm)("CONNECTING ERROR", e), e);
              }
            })(hd, t);
        }
        const ld = (0, o.Fe)(function (e) {
          if (!gd || e !== fd) return;
          const t = gd;
          (gd = void 0), t.forEach(mc);
        });
        let pd, fd, gd;
        function hd(e) {
          gd ? gd.push(e) : (gd = [e]),
            (pd && !a.zBM.has(e["@type"])) ||
              ((pd = (0, o.nF)(ld, a.gkM, !0)), (fd = Math.random())),
            pd(fd);
        }
        let md = a.Oig;
        (0, r.postMessageListenInWorker)("setDebug", (e, t) => {
          md = Boolean(t.data);
        });
        const yd = i.qn.reduce((e, t) => ((e[t] = console[t]), e), {});
        (self.onerror = (e) => {
          console.error(e),
            Ad({
              type: "unhandledError",
              error: {
                message: e.error.message || "Uncaught exception in worker",
              },
            });
        }),
          self.addEventListener("unhandledrejection", (e) => {
            console.error(e),
              Ad({
                type: "unhandledError",
                error: {
                  message: e.reason.message || "Uncaught rejection in worker",
                },
              });
          });
        const _d = new Map();
        (a.Oig || md) && console.log(">>> FINISH LOAD WORKER"),
          (onmessage = async (e) => {
            const { data: t } = e;
            switch (t.type) {
              case "initApi": {
                const { messageId: e, args: n } = t;
                await ud(vd, n[0], n[1]),
                  e &&
                    Ad({
                      type: "methodResponse",
                      messageId: e,
                      response: !0,
                    });
                break;
              }
              case "callMethod": {
                const { messageId: e, name: n, args: i, withCallback: o } = t;
                try {
                  if (e && o) {
                    const t = function () {
                      for (
                        var t = arguments.length, n = new Array(t), s = 0;
                        s < t;
                        s++
                      )
                        n[s] = arguments[s];
                      const a = n[n.length - 1];
                      Ad(
                        {
                          type: "methodCallback",
                          messageId: e,
                          callbackArgs: n,
                        },
                        a instanceof ArrayBuffer ? a : void 0
                      );
                    };
                    _d.set(e, t), i.push(t);
                  }
                  const t = await (function (e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        a = 1;
                      a < t;
                      a++
                    )
                      n[a - 1] = arguments[a];
                    return s[e](...n);
                  })(n, ...i);
                  (a.Oig || md) &&
                    "object" == typeof t &&
                    "CONSTRUCTOR_ID" in t &&
                    (0, c.Rm)("UNEXPECTED RESPONSE", `${n}: ${t.className}`);
                  const { arrayBuffer: r } =
                    ("object" == typeof t && "arrayBuffer" in t && t) || {};
                  e &&
                    Ad(
                      {
                        type: "methodResponse",
                        messageId: e,
                        response: t,
                      },
                      r
                    );
                } catch (t) {
                  (a.Oig || md) && console.error(t),
                    e &&
                      Ad({
                        type: "methodResponse",
                        messageId: e,
                        error: {
                          message: t.message,
                        },
                      });
                }
                e && _d.delete(e);
                break;
              }
              case "cancelProgress": {
                const e = _d.get(t.messageId);
                e && (e.isCanceled = !0);
                break;
              }
              case "ping":
                Ad({
                  type: "methodResponse",
                  messageId: t.messageId,
                });
                break;
              case "toggleDebugMode":
                t.isEnabled
                  ? i.qn.forEach((e) => {
                      console[e] = function () {
                        for (
                          var t = arguments.length, n = new Array(t), s = 0;
                          s < t;
                          s++
                        )
                          n[s] = arguments[s];
                        postMessage({
                          type: "debugLog",
                          level: e,
                          args: JSON.parse(
                            JSON.stringify(n, (e, t) =>
                              "bigint" == typeof t ? t.toString() : t
                            )
                          ),
                        });
                      };
                    })
                  : i.qn.forEach((e) => {
                      console[e] = yd[e];
                    });
            }
          });
        let bd = [];
        const wd = (0, o.Fe)(() => {
          const e = bd;
          (bd = []),
            Ad({
              type: "updates",
              updates: e,
            });
        });
        function vd(e) {
          (a.Oig || md) &&
            "updateUserStatus" !== e["@type"] &&
            "updateServerTimeOffset" !== e["@type"] &&
            (0, c.Rm)("UPDATE", e["@type"], e),
            bd.push(e),
            wd();
        }
        function Ad(e, t) {
          t ? postMessage(e, [t]) : postMessage(e);
        }
      },
      94660: (e, t, n) => {
        "use strict";
        n.d(t, {
          qZ: () => o,
          C7: () => s,
          l3: () => a,
          K1: () => i,
        });
        let s = (function (e) {
          return (
            (e.Bold = "MessageEntityBold"),
            (e.Blockquote = "MessageEntityBlockquote"),
            (e.BotCommand = "MessageEntityBotCommand"),
            (e.Cashtag = "MessageEntityCashtag"),
            (e.Code = "MessageEntityCode"),
            (e.Email = "MessageEntityEmail"),
            (e.Hashtag = "MessageEntityHashtag"),
            (e.Italic = "MessageEntityItalic"),
            (e.MentionName = "MessageEntityMentionName"),
            (e.Mention = "MessageEntityMention"),
            (e.Phone = "MessageEntityPhone"),
            (e.Pre = "MessageEntityPre"),
            (e.Strike = "MessageEntityStrike"),
            (e.TextUrl = "MessageEntityTextUrl"),
            (e.Url = "MessageEntityUrl"),
            (e.Underline = "MessageEntityUnderline"),
            (e.Spoiler = "MessageEntitySpoiler"),
            (e.CustomEmoji = "MessageEntityCustomEmoji"),
            (e.Unknown = "MessageEntityUnknown"),
            e
          );
        })({});
        const a = -1,
          i = "MESSAGE_DELETED";
        n(45174).Api.TypeThirdPartyMessage;
        let o = (function (e) {
          return (
            (e[(e.BlobUrl = 0)] = "BlobUrl"),
            (e[(e.Progressive = 1)] = "Progressive"),
            (e[(e.DownloadUrl = 2)] = "DownloadUrl"),
            (e[(e.Text = 3)] = "Text"),
            e
          );
        })({});
      },
      31481: (e, t, n) => {
        "use strict";
        n.d(t, {
          $8L: () => f,
          $Eh: () => C,
          $Q: () => ue,
          $d8: () => ee,
          Awd: () => A,
          Bej: () => _,
          CIj: () => w,
          Cmr: () => ne,
          CuG: () => se,
          DRJ: () => M,
          DSF: () => Q,
          Gce: () => I,
          HxB: () => te,
          IH3: () => W,
          Iz7: () => u,
          JcJ: () => T,
          Jf2: () => Z,
          K_i: () => de,
          LX5: () => K,
          Oig: () => o,
          PSX: () => N,
          Puc: () => E,
          PvP: () => c,
          RJA: () => G,
          RjC: () => k,
          Rt$: () => i,
          URy: () => y,
          V2q: () => ce,
          VrD: () => oe,
          Vwl: () => fe,
          Vz3: () => L,
          W75: () => a,
          WG3: () => b,
          Xjp: () => q,
          Y3M: () => z,
          Yc: () => U,
          Yi6: () => le,
          Yxk: () => g,
          _E9: () => Y,
          aGQ: () => S,
          bxS: () => J,
          cK8: () => s,
          cLl: () => p,
          dR$: () => ae,
          fNs: () => j,
          fRl: () => x,
          fd1: () => m,
          fvO: () => R,
          gkM: () => V,
          h$y: () => X,
          iIc: () => D,
          map: () => P,
          on1: () => B,
          qm3: () => v,
          rLF: () => h,
          t0A: () => re,
          uyj: () => r,
          wG3: () => ie,
          xJs: () => d,
          xRO: () => pe,
          zBM: () => F,
          zNY: () => O,
          zPn: () => H,
          zrf: () => l,
          zv8: () => $,
        });
        const s = "A",
          a = !1,
          i = !1,
          o = !1,
          r = "https://splus-a-host",
          c = !1,
          d = !1,
          u = "sp-media",
          l = "sp-media-avatars",
          p = "sp-media-progressive",
          f = 52428800,
          g = 26214399,
          h = "sp-global",
          m = 16,
          y = 16,
          _ = ("undefined" != typeof window && window.innerHeight, 20),
          b = 200,
          w = 50,
          v = 100,
          A = 40,
          S = 100,
          I = 100,
          C = 100,
          P = 50,
          M = 50,
          k = 100,
          R = 50,
          E = 100,
          T = 100,
          B = 100,
          D = 20,
          U = 3e5,
          x = 2 ** 31 - 1,
          V = Math.round(450),
          F = new Set([
            "newMessage",
            "newScheduledMessage",
            "deleteMessages",
            "deleteScheduledMessages",
            "deleteHistory",
          ]),
          N = 20,
          q = 20,
          O = "status-default-icon",
          H = "video/webm",
          L = "image/gif",
          G = new Set(["image/png", "image/jpeg", L]),
          j = new Set(["video/mp4", "video/quicktime"]),
          W = new Set([
            "audio/mp3",
            "audio/ogg",
            "audio/wav",
            "audio/mpeg",
            "audio/flac",
            "audio/aac",
            "audio/m4a",
            "audio/mp4",
            "audio/x-m4a",
          ]),
          z = (new Set([...G, ...j]), "USERNAME_PURCHASE_AVAILABLE"),
          K =
            (new Set([
              "splus.ir",
              "web.splus.ir",
              "webzstage13.talkapp.ir",
              "betawebz.splus.ir",
            ]),
            "web"),
          $ =
            (new Set([
              "AU",
              "BD",
              "CA",
              "CO",
              "EG",
              "HN",
              "IE",
              "IN",
              "JO",
              "MX",
              "MY",
              "NI",
              "NZ",
              "PH",
              "PK",
              "SA",
              "SV",
              "US",
            ]),
            "777000"),
          J = 8,
          Z = "gif",
          Q = 0,
          Y = 1,
          X = "-100777",
          ee = "android",
          te = 1,
          ne = 86400,
          se = 86400,
          ae = {
            uploadMaxFileparts: [4e3, 8e3],
            stickersFaved: [5, 10],
            savedGifs: [200, 400],
            dialogFiltersChats: [100, 200],
            dialogFilters: [10, 20],
            dialogFolderPinned: [5, 10],
            captionLength: [4096, 4096],
            channels: [500, 1e3],
            channelsPublic: [100, 100],
            aboutLength: [70, 140],
            chatlistInvites: [3, 100],
            chatlistJoined: [2, 20],
          },
          ie = "customWindowPostMessage",
          oe = !0,
          re = 720,
          ce = "sp-logs-v2",
          de = "logs",
          ue = !0,
          le = "sp-logs-con-v1",
          pe = "con",
          fe = 7e3;
      },
      8172: (e, t, n) => {
        "use strict";
        n.d(t, {
          e: () => i,
        });
        var s = n(94660),
          a = n(52334);
        function i(e, t) {
          if (e.text)
            return (
              (!t &&
                1 === Object.keys(e).length &&
                !e.text.entities?.some((e) => e.type !== s.C7.CustomEmoji) &&
                (0, a.A)(e.text.text)) ||
              void 0
            );
        }
      },
      80071: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(87263),
          i = n(97157);
        function o(e) {
          let t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = s.from(e);
          const o = i.length;
          t && (i = i.reverse());
          let r = a(i.toString("hex"), 16);
          return (
            n &&
              Math.floor(r.toString(2).length / 8) >= o &&
              (r = r.subtract(a(2).pow(a(8 * o)))),
            r
          );
        }
        function r(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
          const n = a(e),
            i = [];
          for (let e = 0; e < t; e++) i[e] = n.shiftRight(8 * e).and(255);
          return s.from(i);
        }
        function c(e, t) {
          let n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const o = (e = a(e)).bitLength().toJSNumber();
          if (t < Math.ceil(o / 8))
            throw new Error("OverflowError: int too big to convert");
          if (!i && e.lesser(a(0)))
            throw new Error("Cannot convert to unsigned");
          let r = !1;
          e.lesser(a(0)) && ((r = !0), (e = e.abs()));
          const c = e.toString(16).padStart(2 * t, "0");
          let d = s.from(c, "hex");
          if (i && r) {
            d[d.length - 1] = 256 - d[d.length - 1];
            for (let e = 0; e < d.length - 1; e++) d[e] = 255 - d[e];
          }
          return n && (d = d.reverse()), d;
        }
        function d(e) {
          return s.from(i.randomBytes(e));
        }
        function u(e) {
          const t = i.createHash("sha1");
          return t.update(e), t.digest();
        }
        let l;
        e.exports = {
          readBigIntFromBuffer: o,
          readBufferFromBigInt: c,
          generateRandomLong: function () {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return o(d(8), !0, e);
          },
          mod: function (e, t) {
            return ((e % t) + t) % t;
          },
          crc32: function (e) {
            l ||
              (l = (function () {
                let e;
                const t = [];
                for (let n = 0; n < 256; n++) {
                  e = n;
                  for (let t = 0; t < 8; t++)
                    e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                  t[n] = e;
                }
                return t;
              })()),
              s.isBuffer(e) || (e = s.from(e));
            let t = -1;
            for (let n = 0; n < e.length; n++) {
              const s = e[n];
              t = l[255 & (t ^ s)] ^ (t >>> 8);
            }
            return ~t >>> 0;
          },
          generateRandomBytes: d,
          generateKeyDataFromNonce: async function (e, t) {
            (e = r(e, 16)), (t = r(t, 32));
            const [n, a, i] = await Promise.all([
              u(s.concat([t, e])),
              u(s.concat([e, t])),
              u(s.concat([t, t])),
            ]);
            return {
              key: s.concat([n, a.slice(0, 12)]),
              iv: s.concat([a.slice(12, 20), i, t.slice(0, 4)]),
            };
          },
          sha1: u,
          sha256: function (e) {
            const t = i.createHash("sha256");
            return t.update(e), t.digest();
          },
          bigIntMod: function (e, t) {
            return e.remainder(t).add(t).remainder(t);
          },
          modExp: function (e, t, n) {
            e = e.remainder(n);
            let s = a.one,
              i = e;
            for (; t.greater(a.zero); ) {
              const e = t.remainder(a(2));
              (t = t.divide(a(2))),
                e.eq(a.one) && ((s = s.multiply(i)), (s = s.remainder(n))),
                (i = i.multiply(i)),
                (i = i.remainder(n));
            }
            return s;
          },
          getRandomInt: function (e, t) {
            return (
              (e = Math.ceil(e)),
              (t = Math.floor(t)),
              Math.floor(Math.random() * (t - e + 1)) + e
            );
          },
          sleep: (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          getByteArray: function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const n = e.toString(2).length,
              s = Math.floor((n + 8 - 1) / 8);
            return c(a(e), s, !1, t);
          },
          toSignedLittleBuffer: r,
          convertToLittle: function (e) {
            const t = s.alloc(4 * e.length);
            for (let n = 0; n < e.length; n++) t.writeUInt32BE(e[n], 4 * n);
            return t;
          },
          bufferXor: function (e, t) {
            const n = [];
            for (let s = 0; s < e.length; s++) n.push(e[s] ^ t[s]);
            return s.from(n);
          },
        };
      },
      61257: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(87263),
          { constructors: i } = n(43355),
          {
            readBigIntFromBuffer: o,
            readBufferFromBigInt: r,
            sha256: c,
            bigIntMod: d,
            modExp: u,
            generateRandomBytes: l,
          } = n(80071),
          p = n(97157);
        function f(e, t) {
          if (
            !s
              .from([
                199, 28, 174, 185, 198, 177, 201, 4, 142, 108, 82, 47, 112, 241,
                63, 115, 152, 13, 64, 35, 142, 62, 33, 193, 73, 52, 208, 55, 86,
                61, 147, 15, 72, 25, 138, 10, 167, 193, 64, 88, 34, 148, 147,
                210, 37, 48, 244, 219, 250, 51, 111, 110, 10, 201, 37, 19, 149,
                67, 174, 212, 76, 206, 124, 55, 32, 253, 81, 246, 148, 88, 112,
                90, 198, 140, 212, 254, 107, 107, 19, 171, 220, 151, 70, 81, 41,
                105, 50, 132, 84, 241, 143, 175, 140, 89, 95, 100, 36, 119, 254,
                150, 187, 42, 148, 29, 91, 205, 29, 74, 200, 204, 73, 136, 7, 8,
                250, 155, 55, 142, 60, 79, 58, 144, 96, 190, 230, 124, 249, 164,
                164, 166, 149, 129, 16, 81, 144, 126, 22, 39, 83, 181, 107, 15,
                107, 65, 13, 186, 116, 216, 168, 75, 42, 20, 179, 20, 78, 14,
                241, 40, 71, 84, 253, 23, 237, 149, 13, 89, 101, 180, 185, 221,
                70, 88, 45, 177, 23, 141, 22, 156, 107, 196, 101, 176, 214, 255,
                156, 163, 146, 143, 239, 91, 154, 228, 228, 24, 252, 21, 232,
                62, 190, 160, 248, 127, 169, 255, 94, 237, 112, 5, 13, 237, 40,
                73, 244, 123, 249, 89, 217, 86, 133, 12, 233, 41, 133, 31, 13,
                129, 21, 246, 53, 177, 5, 238, 46, 78, 21, 208, 75, 36, 84, 191,
                111, 79, 173, 240, 52, 177, 4, 3, 17, 156, 216, 227, 185, 47,
                204, 91,
              ])
              .equals(e) ||
            ![3, 4, 5, 7].includes(t)
          )
            throw new Error("Changing passwords unsupported");
        }
        function g(e) {
          return s.concat([s.alloc(256 - e.length), e]);
        }
        function h(e) {
          return r(e, 256, !1);
        }
        function m(e, t) {
          const n = t.subtract(e);
          return !(
            n.lesser(a(0)) ||
            n.bitLength() < 1984 ||
            e.bitLength() < 1984 ||
            Math.floor((e.bitLength() + 7) / 8) > 256
          );
        }
        function y(e, t) {
          const n = Math.min(e.length, t.length);
          for (let s = 0; s < n; s++) e[s] ^= t[s];
          return e;
        }
        async function _(e, t) {
          const n = await c(s.concat([e.salt1, s.from(t, "utf-8"), e.salt1])),
            a = await c(s.concat([e.salt2, n, e.salt2])),
            i = await (function (e, t) {
              return p.pbkdf2(e, t, 1e5, 64, "sha512");
            })(a, e.salt1);
          return c(s.concat([e.salt2, i, e.salt2]));
        }
        e.exports = {
          computeCheck: async function (e, t) {
            const n = e.currentAlgo;
            if (
              !(
                n instanceof
                i.PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow
              )
            )
              throw new Error(`Unsupported password algorithm ${n.className}`);
            const r = await _(n, t),
              p = o(n.p, !1),
              { g: b } = n,
              w = o(e.srp_B, !1);
            try {
              f(n.p, b);
            } catch (e) {
              throw new Error("bad /g in password");
            }
            if (
              !(function (e, t) {
                return e.greater(a(0)) && t.subtract(e).greater(a(0));
              })(w, p)
            )
              throw new Error("bad b in check");
            const v = o(r, !1),
              A = g(n.p),
              S = h(b),
              I = g(e.srp_B),
              C = u(a(b), v, p),
              P = o(await c(s.concat([A, S])), !1),
              M = d(P.multiply(C), p),
              [k, R, E] = await (async () => {
                for (;;) {
                  const e = l(256),
                    t = o(e, !1),
                    n = u(a(b), t, p);
                  if (m(n, p)) {
                    const e = h(n),
                      i = o(await c(s.concat([e, I])), !1);
                    if (i.greater(a(0))) return [t, e, i];
                  }
                }
              })(),
              T = d(w.subtract(M), p);
            if (!m(T, p)) throw new Error("bad gB");
            const B = E.multiply(v),
              D = k.add(B),
              U = u(T, D, p),
              [x, V, F, N, q] = await Promise.all([
                c(h(U)),
                c(A),
                c(S),
                c(n.salt1),
                c(n.salt2),
              ]),
              O = await c(s.concat([y(V, F), N, q, R, I, x]));
            return new i.InputCheckPasswordSRP({
              srpId: e.srpId,
              A: s.from(R),
              M1: O,
            });
          },
          computeDigest: async function (e, t) {
            try {
              f(e.p, e.g);
            } catch (e) {
              throw new Error("bad p/g in password");
            }
            return h(u(a(e.g), o(await _(e, t), !1), o(e.p, !1)));
          },
        };
      },
      56215: (e, t, n) => {
        var s = n(48287).hp;
        const { constructors: a } = n(43355),
          i = s.from(
            "ffd8ffe000104a46494600010100000100010000ffdb004300281c1e231e19282321232d2b28303c64413c37373c7b585d4964918099968f808c8aa0b4e6c3a0aadaad8a8cc8ffcbdaeef5ffffff9bc1fffffffaffe6fdfff8ffdb0043012b2d2d3c353c76414176f8a58ca5f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8ffc00011080000000003012200021101031101ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffda000c03010002110311003f00",
            "hex"
          ),
          o = s.from("ffd9", "hex");
        function r(e, t) {
          throw new Error(`Cannot cast ${e.className} to any kind of ${t}`);
        }
        e.exports = {
          getMessageId: function (e) {
            if (void 0 !== e) {
              if ("number" == typeof e) return e;
              if (2030045667 === e.SUBCLASS_OF_ID) return e.id;
              throw new Error(`Invalid message type: ${e.constructor.name}`);
            }
          },
          getInputPeer: function e(t) {
            let n =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              s =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
            if (void 0 === t.SUBCLASS_OF_ID) {
              if (n && "inputEntity" in t) return t.inputEntity;
              if ("entity" in t) return e(t.entity);
              r(t, "InputPeer");
            }
            if (3374092470 === t.SUBCLASS_OF_ID) return t;
            if (t instanceof a.User) {
              if (t.isSelf && n) return new a.InputPeerSelf();
              if (void 0 === t.accessHash && s)
                throw new Error(
                  "User without accessHash or min info cannot be input"
                );
              return new a.InputPeerUser({
                userId: t.id,
                accessHash: t.accessHash,
              });
            }
            if (
              t instanceof a.Chat ||
              t instanceof a.ChatEmpty ||
              t instanceof a.ChatForbidden
            )
              return new a.InputPeerChat({
                chatId: t.id,
              });
            if (t instanceof a.Channel) {
              if (void 0 === t.accessHash && s)
                throw new TypeError(
                  "Channel without accessHash or min info cannot be input"
                );
              return new a.InputPeerChannel({
                channelId: t.id,
                accessHash: t.accessHash,
              });
            }
            return t instanceof a.ChannelForbidden
              ? new a.InputPeerChannel({
                  channelId: t.id,
                  accessHash: t.accessHash,
                })
              : t instanceof a.InputUser
              ? new a.InputPeerUser({
                  userId: t.userId,
                  accessHash: t.accessHash,
                })
              : t instanceof a.InputChannel
              ? new a.InputPeerChannel({
                  channelId: t.channelId,
                  accessHash: t.accessHash,
                })
              : t instanceof a.UserEmpty
              ? new a.InputPeerEmpty()
              : t instanceof a.UserFull
              ? e(t.user)
              : t instanceof a.ChatFull
              ? new a.InputPeerChat({
                  chatId: t.id,
                })
              : t instanceof a.PeerChat
              ? new a.InputPeerChat(t.chatId)
              : void r(t, "InputPeer");
          },
          getDisplayName: function (e) {
            return e instanceof a.User
              ? e.lastName && e.firstName
                ? `${e.firstName} ${e.lastName}`
                : e.firstName
                ? e.firstName
                : e.lastName
                ? e.lastName
                : ""
              : e instanceof a.Chat || e instanceof a.Channel
              ? e.title
              : "";
          },
          getDownloadPartSize: function (e) {
            if (e <= 65536) return 64;
            if (e <= 104857600) return 128;
            if (e <= 786432e3) return 256;
            if (e <= 2097152e3) return 512;
            if (e <= 4194304e3) return 1024;
            throw new Error("File size too large");
          },
          getUploadPartSize: function (e) {
            if (e <= 104857600) return 128;
            if (e <= 786432e3) return 256;
            if (e <= 2097152e3) return 512;
            if (e <= 4194304e3) return 512;
            throw new Error("File size too large");
          },
          strippedPhotoToJpg: function (e) {
            if (e.length < 3 || 1 !== e[0]) return e;
            const t = s.from(i);
            return (
              (t[164] = e[1]), (t[166] = e[2]), s.concat([t, e.slice(3), o])
            );
          },
          getDC: function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const n = ".splus.ir";
            switch (e) {
              case 1:
                return {
                  id: 1,
                  ipAddress: `im-server${t ? "-1" : ""}${n}`,
                  port: 443,
                };
              case 2:
                return {
                  id: 2,
                  ipAddress: `im-server${t ? "-1" : ""}${n}`,
                  port: 443,
                };
              case 3:
                return {
                  id: 3,
                  ipAddress: `im-server${t ? "-1" : ""}${n}`,
                  port: 443,
                };
              case 4:
                return {
                  id: 4,
                  ipAddress: `im-server${t ? "-1" : ""}${n}`,
                  port: 443,
                };
              case 5:
                return {
                  id: 5,
                  ipAddress: `im-server${t ? "-1" : ""}${n}`,
                  port: 443,
                };
              case 6:
                return {
                  id: 6,
                  ipAddress: `im-server${t ? "-2" : ""}${n}`,
                  port: 443,
                };
              default:
                throw new Error(`Cannot find the DC with the ID of ${e}`);
            }
          },
        };
      },
      58946: (e) => {
        e.exports = "0.0.2";
      },
      31837: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            getTmpPassword: () => l,
            updateTwoFaSettings: () => u,
          });
        var s = n(9396),
          a = n.n(s),
          i = n(96847),
          o = n.n(i),
          r = n(80071),
          c = n(61257),
          d = n(48287).hp;
        async function u(e, t) {
          let {
            isCheckPassword: n,
            currentPassword: s,
            newPassword: i,
            hint: u = "",
            email: l,
            emailCodeCallback: p,
            onEmailCodeError: f,
          } = t;
          if (!i && !s)
            throw new Error(
              "Neither `currentPassword` nor `newPassword` is present"
            );
          if (l && (!p || !f))
            throw new Error(
              "`email` present without `emailCodeCallback` and `onEmailCodeError`"
            );
          const g = await e.invoke(new (o().account.GetPassword)());
          g.newAlgo instanceof o().PasswordKdfAlgoUnknown ||
            (g.newAlgo.salt1 = d.concat([
              g.newAlgo.salt1,
              (0, r.generateRandomBytes)(32),
            ])),
            !g.hasPassword && s && (s = void 0);
          const h = s
            ? await (0, c.computeCheck)(g, s)
            : new (o().InputCheckPasswordEmpty)();
          if (n)
            await e.invoke(
              new (o().auth.CheckPassword)({
                password: h,
              })
            );
          else
            try {
              await e.invoke(
                new (o().account.UpdatePasswordSettings)({
                  password: h,
                  newSettings: new (o().account.PasswordInputSettings)({
                    newAlgo: g.newAlgo,
                    newPasswordHash: i
                      ? await (0, c.computeDigest)(g.newAlgo, i)
                      : d.alloc(0),
                    hint: u,
                    email: l,
                    newSecureSettings: void 0,
                  }),
                })
              );
            } catch (t) {
              if (!(t instanceof a().EmailUnconfirmedError)) throw t;
              for (;;)
                try {
                  const n = await p(t.codeLength);
                  if (!n) throw new Error("Code is empty");
                  await e.invoke(
                    new (o().account.ConfirmPasswordEmail)({
                      code: n,
                    })
                  );
                  break;
                } catch (e) {
                  f(e);
                }
            }
        }
        async function l(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 60;
          const s = await e.invoke(new (o().account.GetPassword)());
          if (!s) return;
          const a = await (0, c.computeCheck)(s, t);
          try {
            return await e.invoke(
              new (o().account.GetTmpPassword)({
                password: a,
                period: n,
              })
            );
          } catch (e) {
            if ("PASSWORD_HASH_INVALID" === e.message)
              return {
                error: e.message,
              };
            throw e;
          }
        }
      },
      26462: (e, t, n) => {
        n(48287).hp;
        const s = n(51072),
          a = n(51369),
          { sleep: i } = n(80071),
          o = n(9396),
          r = n(90155),
          c = n(80071),
          d = n(56215),
          u = n(79258),
          { LAYER: l } = n(50114),
          { constructors: p, requests: f } = n(43355),
          {
            ConnectionTCPObfuscated: g,
            MTProtoSender: h,
            UpdateConnectionState: m,
            HttpConnection: y,
          } = n(51227),
          { authFlow: _, checkAuthorization: b } = n(53386),
          { downloadFile: w } = n(32538),
          { uploadFile: v } = n(38751),
          { updateTwoFaSettings: A, getTmpPassword: S } = n(31837),
          I = n(83701),
          C = n(9705).A,
          P = ["u", "v", "w", "y", "d", "x", "c", "m", "b", "a", "s", "f"];
        class M {
          constructor(e, t, n) {
            let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : M.DEFAULT_OPTIONS;
            if (!t || !n)
              throw Error(
                'Your API ID or Hash are invalid. Please read "Requirements" on README.md'
              );
            const o = {
              ...M.DEFAULT_OPTIONS,
              ...i,
            };
            if (
              ((this.apiId = t),
              (this.apiHash = n),
              (this.defaultDcId = o.dcId || 2),
              (this._useIPV6 = o.useIPV6),
              (this._shouldForceHttpTransport = o.shouldForceHttpTransport),
              (this._shouldAllowHttpTransport = o.shouldAllowHttpTransport),
              (this._shouldDebugExportedSenders = o.shouldDebugExportedSenders),
              "string" == typeof o.baseLogger
                ? (this._log = new a())
                : (this._log = o.baseLogger),
              "string" != typeof e && e)
            ) {
              if (!(e instanceof u))
                throw new Error(
                  "The given session must be str or a session instance"
                );
            } else
              try {
                throw new Error("not implemented");
              } catch (t) {
                e = new r();
              }
            (this.floodSleepLimit = o.floodSleepLimit),
              (this._eventBuilders = []),
              (this._phoneCodeHash = {}),
              (this.session = e),
              (this.apiId = parseInt(t, 10)),
              (this.apiHash = n),
              (this._requestRetries = o.requestRetries),
              (this._connectionRetries = o.connectionRetries),
              (this._connectionRetriesToFallback =
                o.connectionRetriesToFallback),
              (this._retryDelay = o.retryDelay || 0),
              (this._retryMainConnectionDelay =
                o.retryMainConnectionDelay || 0),
              o.proxy && this._log.warn("proxies are not supported"),
              (this._proxy = o.proxy),
              (this._timeout = o.timeout),
              (this._autoReconnect = o.autoReconnect),
              (this._connection = o.connection),
              (this._fallbackConnection = o.fallbackConnection),
              (this._floodWaitedRequests = {}),
              (this._initWith = (e) =>
                new f.InvokeWithLayer({
                  layer: l,
                  query: new f.InitConnection({
                    apiId: this.apiId,
                    deviceModel:
                      o.deviceModel || s.type().toString() || "Unknown",
                    systemVersion:
                      o.systemVersion || s.release().toString() || "1.0",
                    appVersion: o.appVersion || "1.0",
                    langCode: o.langCode,
                    langPack: "",
                    systemLangCode: o.systemLangCode,
                    query: e,
                    proxy: void 0,
                  }),
                })),
              (this._args = o),
              (this._config = void 0),
              (this.phoneCodeHashes = []),
              (this._exportedSenderPromises = {}),
              (this._exportedSenderRefCounter = {}),
              (this._waitingForAuthKey = {}),
              (this._exportedSenderReleaseTimeouts = {}),
              (this._additionalDcsDisabled = o.additionalDcsDisabled),
              (this._loopStarted = !1),
              (this._isSwitchingDc = !1),
              (this._destroyed = !1),
              (this._connectedDeferred = new C());
          }
          async connect() {
            await this._initSession(),
              void 0 === this._sender &&
                (this._sender = new h(this.session.getAuthKey(), {
                  logger: this._log,
                  dcId: this.session.dcId,
                  retries: this._connectionRetries,
                  retriesToFallback: this._connectionRetriesToFallback,
                  shouldForceHttpTransport: this._shouldForceHttpTransport,
                  shouldAllowHttpTransport: this._shouldAllowHttpTransport,
                  delay: this._retryDelay,
                  retryMainConnectionDelay: this._retryMainConnectionDelay,
                  autoReconnect: this._autoReconnect,
                  connectTimeout: this._timeout,
                  authKeyCallback: this._authKeyCallback.bind(this),
                  updateCallback: this._handleUpdate.bind(this),
                  getShouldDebugExportedSenders:
                    this.getShouldDebugExportedSenders.bind(this),
                  isMainSender: !0,
                })),
              (this._sender.userDisconnected = !1),
              (this._sender._user_connected = !1),
              (this._sender.isReconnecting = !1),
              (this._sender._disconnected = !0);
            const e = new this._connection(
                this.session.serverAddress,
                this.session.port,
                this.session.dcId,
                this._log,
                this._args.testServers
              ),
              t = new this._fallbackConnection(
                this.session.serverAddress,
                this.session.port,
                this.session.dcId,
                this._log,
                this._args.testServers
              );
            (await this._sender.connect(e, void 0, t))
              ? (this.session.setAuthKey(this._sender.authKey),
                await this._sender.send(
                  this._initWith(new f.help.GetConfig({}))
                ),
                this._loopStarted ||
                  (this._updateLoop(), (this._loopStarted = !0)),
                this._connectedDeferred.resolve(),
                (this._isSwitchingDc = !1))
              : this._loopStarted ||
                (this._updateLoop(), (this._loopStarted = !0));
          }
          async _initSession() {
            if (
              (await this.session.load(),
              !this.session.serverAddress ||
                this.session.serverAddress.includes(":") !== this._useIPV6)
            ) {
              const e = d.getDC(this.defaultDcId);
              this.session.setDC(
                this.defaultDcId,
                e.ipAddress,
                this._args.useWSS ? 443 : 80
              );
            }
          }
          setPingCallback(e) {
            this.pingCallback = e;
          }
          async setForceHttpTransport(e) {
            (this._shouldForceHttpTransport = e),
              await this.disconnect(),
              (this._sender = void 0),
              await this.connect();
          }
          async setAllowHttpTransport(e) {
            (this._shouldAllowHttpTransport = e),
              await this.disconnect(),
              (this._sender = void 0),
              await this.connect();
          }
          setShouldDebugExportedSenders(e) {
            this._shouldDebugExportedSenders = e;
          }
          getShouldDebugExportedSenders() {
            return this._shouldDebugExportedSenders;
          }
          async _updateLoop() {
            let e;
            for (; !this._destroyed; )
              if (
                (await c.sleep(3e3),
                this._sender.isReconnecting || this._isSwitchingDc)
              )
                e = void 0;
              else {
                try {
                  const t = () =>
                      this._sender.send(
                        new f.PingDelayDisconnect({
                          pingId: c.getRandomInt(
                            Number.MIN_SAFE_INTEGER,
                            Number.MAX_SAFE_INTEGER
                          ),
                          disconnectDelay: 6e4,
                        })
                      ),
                    n = Date.now(),
                    s = e ? n - e : void 0;
                  if (!s || s < 5e3) await B(() => T(t, 1e4), 3, 100);
                  else {
                    let e = setTimeout(() => {
                      this._handleUpdate(new m(m.disconnected)), (e = void 0);
                    }, 1e3);
                    await T(t, 3e3),
                      e && (clearTimeout(e), (e = void 0)),
                      this._handleUpdate(new m(m.connected));
                  }
                  e = Date.now();
                } catch (t) {
                  if (
                    (console.warn(t),
                    (e = void 0),
                    this._sender.isReconnecting || this._isSwitchingDc)
                  )
                    continue;
                  this._sender.reconnect();
                }
                if (Date.now() - this._lastRequest > 18e5) {
                  try {
                    await this.pingCallback();
                  } catch (e) {}
                  e = void 0;
                }
              }
            await this.disconnect();
          }
          async disconnect() {
            this._sender && (await this._sender.disconnect()),
              await Promise.all(
                Object.values(this._exportedSenderPromises)
                  .map((e) =>
                    Object.values(e).map(
                      (e) =>
                        e &&
                        e.then((e) => {
                          if (e) return e.disconnect();
                        })
                    )
                  )
                  .flat()
              ),
              Object.values(this._exportedSenderReleaseTimeouts).forEach(
                (e) => {
                  Object.values(e).forEach((e) => {
                    clearTimeout(e);
                  });
                }
              ),
              (this._exportedSenderRefCounter = {}),
              (this._exportedSenderPromises = {}),
              (this._waitingForAuthKey = {});
          }
          async destroy() {
            this._destroyed = !0;
            try {
              await this.disconnect(), this._sender.destroy();
            } catch (e) {}
            this.session.delete(), (this._eventBuilders = []);
          }
          async _switchDC(e) {
            this._log.info(`Reconnecting to new data center ${e}`);
            const t = d.getDC(e);
            return (
              this.session.setDC(e, t.ipAddress, t.port),
              await this._sender.authKey.setKey(void 0),
              this.session.setAuthKey(void 0),
              (this._isSwitchingDc = !0),
              await this.disconnect(),
              (this._sender = void 0),
              this.connect()
            );
          }
          _authKeyCallback(e, t) {
            this.session.setAuthKey(e, t);
          }
          async _cleanupExportedSender(e, t) {
            this.session.dcId !== e && this.session.setAuthKey(void 0, e),
              this._shouldDebugExportedSenders &&
                console.log(`🧹 Cleanup idx=${t} dcId=${e}`);
            const n = await this._exportedSenderPromises[e][t];
            delete this._exportedSenderPromises[e][t],
              delete this._exportedSenderRefCounter[e][t],
              await n.disconnect();
          }
          async _cleanupExportedSenders(e) {
            const t = Object.values(this._exportedSenderPromises[e]);
            t.length &&
              (this.session.dcId !== e && this.session.setAuthKey(void 0, e),
              (this._exportedSenderPromises[e] = {}),
              (this._exportedSenderRefCounter[e] = {}),
              await Promise.all(
                t.map(async (e) => {
                  const t = await e;
                  await t.disconnect();
                })
              ));
          }
          async _connectSender(e, t, n) {
            let s,
              a =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              i = Boolean(e.authKey.getKey());
            if (!i)
              if (this._waitingForAuthKey[t]) {
                await this._waitingForAuthKey[t];
                const n = this.session.getAuthKey(t);
                await e.authKey.setKey(n.getKey()),
                  (i = Boolean(e.authKey.getKey()));
              } else
                this._waitingForAuthKey[t] = new Promise((e) => {
                  s = e;
                });
            const o = d.getDC(t, i);
            for (;;)
              try {
                if (
                  (await e.connect(
                    new this._connection(
                      o.ipAddress,
                      o.port,
                      t,
                      this._log,
                      this._args.testServers,
                      !!i && a
                    ),
                    void 0,
                    new this._fallbackConnection(
                      o.ipAddress,
                      o.port,
                      t,
                      this._log,
                      this._args.testServers,
                      !!i && a
                    )
                  ),
                  this.session.dcId !== t && !e._authenticated)
                ) {
                  this._log.info(
                    `Exporting authorization for data center ${o.ipAddress}`
                  );
                  const n = await this.invoke(
                      new f.auth.ExportAuthorization({
                        dcId: t,
                      })
                    ),
                    s = this._initWith(
                      new f.auth.ImportAuthorization({
                        id: n.id,
                        bytes: n.bytes,
                      })
                    );
                  await e.send(s), (e._authenticated = !0);
                }
                return (
                  (e.dcId = t),
                  (e.userDisconnected = !1),
                  s && (s(), delete this._waitingForAuthKey[t]),
                  this._shouldDebugExportedSenders &&
                    console.warn(
                      `✅ Connected to exported sender idx=${n} dc=${t}`
                    ),
                  e
                );
              } catch (s) {
                this._shouldDebugExportedSenders &&
                  console.error(`☠️ ERROR! idx=${n} dcId=${t} ${s.message}`),
                  console.error(s),
                  await c.sleep(1e3),
                  await e.disconnect();
              }
          }
          releaseExportedSender(e) {
            const t = e._dcId,
              n = e._senderIndex;
            this._exportedSenderRefCounter[t] &&
              this._exportedSenderRefCounter[t][n] &&
              ((this._exportedSenderRefCounter[t][n] -= 1),
              this._exportedSenderRefCounter[t][n] <= 0 &&
                (this._exportedSenderReleaseTimeouts[t] ||
                  (this._exportedSenderReleaseTimeouts[t] = {}),
                (this._exportedSenderReleaseTimeouts[t][n] = setTimeout(() => {
                  this._shouldDebugExportedSenders &&
                    console.log(`[CC] [idx=${n} dcId=${t}] 🚪 Release`),
                    e.disconnect(),
                    (this._exportedSenderReleaseTimeouts[t][n] = void 0),
                    (this._exportedSenderPromises[t][n] = void 0);
                }, 3e4))));
          }
          async _borrowExportedSender(e, t, n, s, a) {
            let i =
              arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            if (this._additionalDcsDisabled) return;
            const o = s || 0;
            let r;
            (this._exportedSenderPromises[e] && !i) ||
              (this._exportedSenderPromises[e] = {}),
              (this._exportedSenderRefCounter[e] && !i) ||
                (this._exportedSenderRefCounter[e] = {}),
              (!this._exportedSenderPromises[e][o] || t || i) &&
                (this._shouldDebugExportedSenders &&
                  console.warn(
                    `🕒 Connecting to exported sender idx=${o} dc=${e} ` +
                      (t ? "(reconnect)" : "")
                  ),
                (this._exportedSenderRefCounter[e][o] = 0),
                (this._exportedSenderPromises[e][o] = this._connectSender(
                  n || this._createExportedSender(e, o),
                  e,
                  s,
                  a
                )));
            try {
              if (
                ((r = await this._exportedSenderPromises[e][o]),
                !r.isConnected())
              )
                return r.isConnecting
                  ? (await c.sleep(1e3),
                    this._borrowExportedSender(e, !1, r, o, a, i))
                  : this._borrowExportedSender(e, !0, r, o, a, i);
            } catch (t) {
              return (
                console.error(t),
                this._borrowExportedSender(e, !0, void 0, o, a, i)
              );
            }
            return (
              (this._exportedSenderRefCounter[e][o] += 1),
              this._exportedSenderReleaseTimeouts[e] ||
                (this._exportedSenderReleaseTimeouts[e] = {}),
              this._exportedSenderReleaseTimeouts[e][o] &&
                (clearTimeout(this._exportedSenderReleaseTimeouts[e][o]),
                (this._exportedSenderReleaseTimeouts[e][o] = void 0)),
              r
            );
          }
          _createExportedSender(e, t) {
            return new h(this.session.getAuthKey(e), {
              logger: this._log,
              dcId: e,
              senderIndex: t,
              retries: this._connectionRetries,
              retriesToFallback: this._connectionRetriesToFallback,
              delay: this._retryDelay,
              retryMainConnectionDelay: this._retryMainConnectionDelay,
              shouldForceHttpTransport: this._shouldForceHttpTransport,
              shouldAllowHttpTransport: this._shouldAllowHttpTransport,
              autoReconnect: this._autoReconnect,
              connectTimeout: this._timeout,
              authKeyCallback: this._authKeyCallback.bind(this),
              isMainSender: e === this.session.dcId,
              isExported: !0,
              getShouldDebugExportedSenders:
                this.getShouldDebugExportedSenders.bind(this),
              onConnectionBreak: () => this._cleanupExportedSender(e, t),
            });
          }
          getSender(e, t, n) {
            let s =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return e
              ? this._borrowExportedSender(e, void 0, void 0, t, n, s)
              : Promise.resolve(this._sender);
          }
          downloadFile(e) {
            return w(
              this,
              e,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
              this._shouldDebugExportedSenders
            );
          }
          downloadMedia(e, t) {
            let n;
            if (
              ((n =
                e instanceof p.Message || e instanceof p.StoryItem
                  ? e.media
                  : e instanceof p.MessageService
                  ? e.action.photo
                  : e),
              "string" == typeof n)
            )
              throw new Error("not implemented");
            return (
              n instanceof p.MessageMediaWebPage &&
                n.webpage instanceof p.WebPage &&
                (n = n.webpage.document || n.webpage.photo),
              n instanceof p.MessageMediaPayment && (n = n.multimedia[0]),
              n instanceof p.MessageMediaPhoto || n instanceof p.Photo
                ? this._downloadPhoto(n, t)
                : n instanceof p.MessageMediaDocument || n instanceof p.Document
                ? this._downloadDocument(n, t)
                : n instanceof p.MessageMediaContact
                ? this._downloadContact(n, t)
                : n instanceof p.WebDocument ||
                  n instanceof p.WebDocumentNoProxy
                ? this._downloadWebDocument(n, t)
                : void 0
            );
          }
          downloadProfilePhoto(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const n = t ? "x" : "m";
            let s, a, i;
            if (
              [765557111, 3316604308, 524706233, 3566872215].includes(
                e.SUBCLASS_OF_ID
              )
            ) {
              if (!e.photo) {
                if (!e.chatPhoto) return;
                return this._downloadPhoto(e.chatPhoto, {
                  sizeType: n,
                });
              }
              s = e.photo;
            } else s = e;
            if (s instanceof p.UserProfilePhoto || s instanceof p.ChatPhoto)
              return (
                (a = s.dcId),
                (i = new p.InputPeerPhotoFileLocation({
                  peer: d.getInputPeer(e),
                  photoId: s.photoId,
                  big: t,
                })),
                this.downloadFile(i, {
                  dcId: a,
                })
              );
          }
          downloadStickerSetThumb(e) {
            if (!e.thumbs?.length && !e.thumbDocumentId) return;
            const { thumbVersion: t } = e;
            return e.thumbDocumentId
              ? this.invoke(
                  new p.messages.GetCustomEmojiDocuments({
                    documentId: [e.thumbDocumentId],
                  })
                ).then((e) => {
                  const t = e[0];
                  return this.downloadFile(
                    new p.InputDocumentFileLocation({
                      id: t.id,
                      accessHash: t.accessHash,
                      fileReference: t.fileReference,
                      thumbSize: "",
                    }),
                    {
                      fileSize: t.size.toJSNumber(),
                      dcId: t.dcId,
                    }
                  );
                })
              : this.downloadFile(
                  new p.InputStickerSetThumb({
                    stickerset: new p.InputStickerSetID({
                      id: e.id,
                      accessHash: e.accessHash,
                    }),
                    thumbVersion: t,
                  }),
                  {
                    dcId: e.thumbDcId,
                  }
                );
          }
          _pickFileSize(e, t) {
            if (!t || !e || !e.length) return;
            let n;
            for (let s = P.indexOf(t); s < P.length; s++)
              if (((n = e.find((e) => e.type === P[s])), n)) return n;
          }
          _downloadCachedPhotoSize(e) {
            let t;
            return (
              (t =
                e instanceof p.PhotoStrippedSize
                  ? d.strippedPhotoToJpg(e.bytes)
                  : e.bytes),
              t
            );
          }
          _downloadPhoto(e, t) {
            if (
              (e instanceof p.MessageMediaPhoto && (e = e.photo),
              !(e instanceof p.Photo))
            )
              return;
            const n = "u" === t.sizeType || "v" === t.sizeType,
              s = this._pickFileSize(
                n ? [...e.videoSizes, ...e.sizes] : e.sizes,
                t.sizeType
              );
            return !s || s instanceof p.PhotoSizeEmpty
              ? void 0
              : s instanceof p.PhotoCachedSize ||
                s instanceof p.PhotoStrippedSize
              ? this._downloadCachedPhotoSize(s)
              : this.downloadFile(
                  new p.InputPhotoFileLocation({
                    id: e.id,
                    accessHash: e.accessHash,
                    fileReference: e.fileReference,
                    thumbSize: s.type,
                  }),
                  {
                    dcId: e.dcId,
                    fileSize: s.size || Math.max(...(s.sizes || [])),
                    progressCallback: t.progressCallback,
                  }
                );
          }
          _downloadDocument(e, t) {
            if (
              (e instanceof p.MessageMediaDocument && (e = e.document),
              !(e instanceof p.Document))
            )
              return;
            let n;
            if (t.sizeType) {
              if (
                ((n = e.thumbs
                  ? this._pickFileSize(
                      [...(e.videoThumbs || []), ...e.thumbs],
                      t.sizeType
                    )
                  : void 0),
                !n && e.mimeType.startsWith("video/"))
              )
                return;
              if (
                n &&
                (n instanceof p.PhotoCachedSize ||
                  n instanceof p.PhotoStrippedSize)
              )
                return this._downloadCachedPhotoSize(n);
            }
            return this.downloadFile(
              new p.InputDocumentFileLocation({
                id: e.id,
                accessHash: e.accessHash,
                fileReference: e.fileReference,
                thumbSize: n ? n.type : "",
              }),
              {
                fileSize: n ? n.size : e.size.toJSNumber(),
                progressCallback: t.progressCallback,
                start: t.start,
                end: t.end,
                dcId: e.dcId,
                workers: t.workers,
              }
            );
          }
          _downloadContact(e, t) {
            throw new Error("not implemented");
          }
          async _downloadWebDocument(e) {}
          async downloadStaticMap(e, t, n, s, a, i, o, r) {}
          async invoke(e, t, n) {
            let s =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if ("request" !== e.classType)
              throw new Error("You can only invoke MTProtoRequests");
            const a = void 0 !== t;
            let r = a ? await this.getSender(t) : this._sender;
            (this._lastRequest = Date.now()),
              await this._connectedDeferred.promise;
            const c = new I(e, n);
            let d = 0;
            for (d = 0; d < this._requestRetries; d++) {
              r.addStateToQueue(c);
              try {
                const e = await c.promise;
                return (
                  c.finished.resolve(), a && this.releaseExportedSender(r), e
                );
              } catch (e) {
                if (
                  e instanceof o.ServerError ||
                  "RPC_CALL_FAIL" === e.message ||
                  "RPC_MCGET_FAIL" === e.message
                )
                  this._log.warn(
                    `SPLUS is having internal issues ${e.constructor.name}`
                  ),
                    await i(2e3);
                else if (
                  e instanceof o.FloodWaitError ||
                  e instanceof o.FloodTestPhoneWaitError
                ) {
                  if (!(e.seconds <= this.floodSleepLimit))
                    throw (
                      (c.finished.resolve(),
                      a && this.releaseExportedSender(r),
                      e)
                    );
                  this._log.info(`Sleeping for ${e.seconds}s on flood wait`),
                    await i(1e3 * e.seconds);
                } else if (
                  e instanceof o.PhoneMigrateError ||
                  e instanceof o.NetworkMigrateError ||
                  e instanceof o.UserMigrateError
                ) {
                  if (
                    (this._log.info(`Phone migrated to ${e.newDc}`),
                    (e instanceof o.PhoneMigrateError ||
                      e instanceof o.NetworkMigrateError) &&
                      (await b(this)))
                  )
                    throw (
                      (c.finished.resolve(),
                      a && this.releaseExportedSender(r),
                      e)
                    );
                  await this._switchDC(e.newDc),
                    a && this.releaseExportedSender(r),
                    (r = void 0 === t ? this._sender : await this.getSender(t));
                } else if (e instanceof o.MsgWaitError)
                  await c.isReady(), (c.after = void 0);
                else if ("CONNECTION_NOT_INITED" === e.message)
                  await this.disconnect(), await i(2e3), await this.connect();
                else {
                  if (!(e instanceof o.TimedOutError))
                    throw (
                      (c.finished.resolve(),
                      a && this.releaseExportedSender(r),
                      e)
                    );
                  if (!s)
                    throw (
                      (c.finished.resolve(),
                      a && this.releaseExportedSender(r),
                      e)
                    );
                }
              }
              c.resetPromise();
            }
            throw (
              (a && this.releaseExportedSender(r),
              new Error(`Request was unsuccessful ${d} time(s)`))
            );
          }
          async invokeBeacon(e, t) {
            if ("request" !== e.classType)
              throw new Error("You can only invoke MTProtoRequests");
            const n = void 0 !== t,
              s = n ? await this.getSender(t) : this._sender;
            s.sendBeacon(e), n && this.releaseExportedSender(s);
          }
          setIsPremium(e) {
            this.isPremium = e;
          }
          async getMe() {
            try {
              return (
                await this.invoke(
                  new f.users.GetUsers({
                    id: [new p.InputUserSelf()],
                  })
                )
              )[0];
            } catch (e) {
              this._log.warn("error while getting me"), this._log.warn(e);
            }
          }
          async start(e) {
            if ((this.isConnected() || (await this.connect()), await b(this)))
              return;
            const t = {
              apiId: this.apiId,
              apiHash: this.apiHash,
            };
            await _(this, t, e);
          }
          uploadFile(e) {
            return v(this, e, this._shouldDebugExportedSenders);
          }
          updateTwoFaSettings(e) {
            return A(this, e);
          }
          getTmpPassword(e, t) {
            return S(this, e, t);
          }
          addEventHandler(e, t) {
            this._eventBuilders.push([t, e]);
          }
          _handleUpdate(e) {
            if (e instanceof p.Updates || e instanceof p.UpdatesCombined) {
              const t = [];
              for (const n of [...e.users, ...e.chats]) t.push(n);
              this._processUpdate(e, t);
            } else
              e instanceof p.UpdateShort
                ? this._processUpdate(e.update, void 0)
                : this._processUpdate(e, void 0);
          }
          _processUpdate(e, t) {
            e._entities = t || [];
            const n = {
              update: e,
            };
            this._dispatchUpdate(n);
          }
          async _dispatchUpdate() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    update: void 0,
                  };
            for (const [t, n] of this._eventBuilders) {
              const s = t.build(e.update);
              s && (await n(s));
            }
          }
          isConnected() {
            return !(!this._sender || !this._sender.isConnected());
          }
        }
        var k, R, E;
        function T(e, t) {
          let n = !1;
          return Promise.race([
            e(),
            c
              .sleep(t)
              .then(() => (n ? void 0 : Promise.reject(new Error("TIMEOUT")))),
          ]).finally(() => {
            n = !0;
          });
        }
        async function B(e, t, n) {
          for (let s = 0; s < t; s++)
            try {
              return await e();
            } catch (e) {
              if (s === t - 1) throw e;
              await c.sleep(n);
            }
        }
        (k = M),
          (E = {
            connection: g,
            fallbackConnection: y,
            useIPV6: !1,
            proxy: void 0,
            timeout: 10,
            requestRetries: 5,
            connectionRetries: 1 / 0,
            connectionRetriesToFallback: 1,
            retryDelay: 1e3,
            retryMainConnectionDelay: 1e4,
            autoReconnect: !0,
            sequentialUpdates: !1,
            floodSleepLimit: 60,
            deviceModel: void 0,
            systemVersion: void 0,
            appVersion: void 0,
            langCode: "fa",
            systemLangCode: "fa",
            baseLogger: "gramjs",
            useWSS: !1,
            additionalDcsDisabled: !1,
            testServers: !1,
            dcId: 2,
            shouldAllowHttpTransport: !1,
            shouldForceHttpTransport: !1,
            shouldDebugExportedSenders: !1,
          }),
          (R = (function (e) {
            var t = (function (e) {
              if ("object" != typeof e || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == typeof t ? t : t + "";
          })((R = "DEFAULT_OPTIONS"))) in k
            ? Object.defineProperty(k, R, {
                value: E,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (k[R] = E),
          (e.exports = M);
      },
      53386: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            authFlow: () => l,
            checkAuthorization: () => f,
            signInUserWithPreferredMethod: () => p,
          });
        var s = n(96847),
          a = n.n(s),
          i = n(80071),
          o = n(61257),
          r = n(56215),
          c = n.n(r);
        const d = "phoneNumber",
          u = 3e4;
        async function l(e, t, n) {
          let s;
          (s =
            "botAuthToken" in n
              ? await (async function (e, t, n) {
                  const { apiId: s, apiHash: i } = t,
                    { botAuthToken: o } = n,
                    { user: r } = await e.invoke(
                      new (a().auth.ImportBotAuthorization)({
                        apiId: s,
                        apiHash: i,
                        botAuthToken: o,
                      })
                    );
                  return r;
                })(e, t, n)
              : "webAuthToken" in n && n.webAuthToken
              ? await (async function (e, t, n) {
                  try {
                    const { apiId: s, apiHash: i } = t,
                      o = await e.invoke(
                        new (a().auth.ImportWebTokenAuthorization)({
                          webAuthToken: n.webAuthToken,
                          apiId: s,
                          apiHash: i,
                        })
                      );
                    if (o instanceof a().auth.Authorization) return o.user;
                    throw new Error("SIGN_UP_REQUIRED");
                  } catch (s) {
                    return "SESSION_PASSWORD_NEEDED" === s.message
                      ? y(e, t, n, !0)
                      : (e._log.error(`Failed to login with web token: ${s}`),
                        n.webAuthTokenFailed(),
                        p(e, t, {
                          ...n,
                          webAuthToken: void 0,
                        }));
                  }
                })(e, t, n)
              : await p(e, t, n)),
            e._log.info("Signed in successfully as", c().getDisplayName(s));
        }
        function p(e, t, n) {
          const { initialMethod: s = d } = n;
          return "phoneNumber" === s ? g(e, t, n) : h(e, t, n);
        }
        async function f(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          try {
            return await e.invoke(new (a().updates.GetState)()), !0;
          } catch (e) {
            if ("Disconnect" === e.message || t) throw e;
            return !1;
          }
        }
        async function g(e, t, n) {
          let s,
            i,
            o,
            r,
            c = !1;
          for (;;)
            try {
              if ("function" == typeof n.phoneNumber)
                try {
                  s = await n.phoneNumber();
                } catch (s) {
                  if ("RESTART_AUTH_WITH_QR" === s.message) return h(e, t, n);
                  throw s;
                }
              else s = n.phoneNumber;
              const a = await m(e, t, s, n.forceSMS);
              if (
                ((i = a.phoneCodeHash),
                (c = a.isCodeViaApp),
                (o = a.resentCodeTime),
                "string" != typeof i)
              )
                throw new Error("Failed to retrieve phone code hash");
              break;
            } catch (e) {
              if ("function" != typeof n.phoneNumber) throw e;
              n.onError(e);
            }
          let d,
            u = !1;
          for (;;)
            try {
              try {
                r = await n.phoneCode(c);
              } catch (s) {
                if ("RESTART_AUTH" === s.message) return g(e, t, n);
              }
              if (!r) throw new Error("Code is empty");
              const o = await e.invoke(
                new (a().auth.SignIn)({
                  phoneNumber: s,
                  phoneCodeHash: i,
                  phoneCode: r,
                })
              );
              if (o instanceof a().auth.AuthorizationSignUpRequired) {
                (u = !0), (d = o.termsOfService);
                break;
              }
              return o.user;
            } catch (s) {
              if ("SESSION_PASSWORD_NEEDED" === s.message) return y(e, t, n);
              n.onError(s);
            }
          if (u)
            for (;;)
              try {
                const [t, o] = await n.firstAndLastNames();
                if (!t) throw new Error("First name is required");
                const { user: r } = await e.invoke(
                  new (a().auth.SignUp)({
                    phoneNumber: s,
                    phoneCodeHash: i,
                    firstName: t,
                    lastName: o,
                  })
                );
                return (
                  d &&
                    (await e.invoke(
                      new (a().help.AcceptTermsOfService)({
                        id: d.id,
                      })
                    )),
                  r
                );
              } catch (e) {
                n.onError(e);
              }
          return n.onError(new Error("Auth failed")), g(e, t, n);
        }
        async function h(e, t, n) {
          let s = !1;
          const o = (async () => {
              for (; !s; ) {
                const t = await e.invoke(
                  new (a().auth.ExportLoginToken)({
                    apiId: Number("1030400"),
                    apiHash: "6edb16cf88714a4e9a805e928c39c937",
                    exceptIds: [],
                  })
                );
                if (!(t instanceof a().auth.LoginToken))
                  throw new Error("Unexpected");
                const { token: s, expires: o } = t;
                await Promise.race([
                  n.qrCode({
                    token: s,
                    expires: o,
                  }),
                  (0, i.sleep)(u),
                ]);
              }
            })(),
            r = new Promise((t) => {
              e.addEventHandler(
                (e) => {
                  e instanceof a().UpdateLoginToken && t();
                },
                {
                  build: (e) => e,
                }
              );
            });
          try {
            await Promise.race([r, o]);
          } catch (s) {
            if ("RESTART_AUTH" === s.message) return await g(e, t, n);
            throw s;
          } finally {
            s = !0;
          }
          try {
            const t = await e.invoke(
              new (a().auth.ExportLoginToken)({
                apiId: Number("1030400"),
                apiHash: "6edb16cf88714a4e9a805e928c39c937",
                exceptIds: [],
              })
            );
            if (
              t instanceof a().auth.LoginTokenSuccess &&
              t.authorization instanceof a().auth.Authorization
            )
              return t.authorization.user;
            if (t instanceof a().auth.LoginTokenMigrateTo) {
              await e._switchDC(t.dcId);
              const n = await e.invoke(
                new (a().auth.ImportLoginToken)({
                  token: t.token,
                })
              );
              if (
                n instanceof a().auth.LoginTokenSuccess &&
                n.authorization instanceof a().auth.Authorization
              )
                return n.authorization.user;
            }
          } catch (s) {
            if ("SESSION_PASSWORD_NEEDED" === s.message) return y(e, t, n);
            throw s;
          }
          throw void 0;
        }
        async function m(e, t, n) {
          let s =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          try {
            const { apiId: i, apiHash: o } = t,
              r = await e.invoke(
                new (a().auth.SendCode)({
                  phoneNumber: n,
                  apiId: i,
                  apiHash: o,
                  settings: new (a().CodeSettings)(),
                })
              );
            if (!(r instanceof a().auth.SentCode))
              throw Error("Unexpected SentCodeSuccess");
            if (!s || r.type instanceof a().auth.SentCodeTypeSms)
              return (
                e._processUpdate(
                  {
                    updateResendCode: !0,
                    timeout: r.timeout,
                    phoneCodeHash: r.phoneCodeHash,
                  },
                  void 0
                ),
                {
                  phoneCodeHash: r.phoneCodeHash,
                  isCodeViaApp: r.type instanceof a().auth.SentCodeTypeApp,
                  resentCodeTime: r.timeout,
                }
              );
            const c = await e.invoke(
              new (a().auth.ResendCode)({
                phoneNumber: n,
                phoneCodeHash: r.phoneCodeHash,
              })
            );
            if (!(c instanceof a().auth.SentCode))
              throw Error("Unexpected SentCodeSuccess");
            return {
              phoneCodeHash: c.phoneCodeHash,
              isCodeViaApp: c.type instanceof a().auth.SentCodeTypeApp,
              resentCodeTime: r.timeout,
            };
          } catch (a) {
            if ("AUTH_RESTART" === a.message) return m(e, t, n, s);
            throw a;
          }
        }
        async function y(e, t, n) {
          let s =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          for (;;)
            try {
              const t = await e.invoke(new (a().account.GetPassword)()),
                i = await n.password(t.hint, s);
              if (!i) throw new Error("Password is empty");
              const r = await (0, o.computeCheck)(t, i),
                { user: c } = await e.invoke(
                  new (a().auth.CheckPassword)({
                    password: r,
                  })
                );
              return c;
            } catch (e) {
              n.onError(e);
            }
        }
      },
      32538: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            downloadFile: () => P,
          });
        var s = n(87263),
          a = n.n(s),
          i = n(31481),
          o = n(9705),
          r = n(84846),
          c = n(71337),
          d = n(718),
          u = n(9396),
          l = n.n(u),
          p = n(96847),
          f = n.n(p),
          g = n(80071),
          h = n(56215),
          m = n(48287).hp;
        function y(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const _ = 4096,
          b = 64,
          w = 1048576,
          v = 1e3,
          A = 6e4,
          S = 5;
        let I = !1;
        (0, c.postMessageListenInWorker)("setDebug", (e, t) => {
          I = Boolean(t.data);
        });
        class C {
          constructor(e) {
            y(this, "type", void 0),
              y(this, "size", void 0),
              y(this, "buffer", void 0),
              y(this, "largeFile", void 0),
              y(this, "largeFileAccessHandle", void 0),
              (this.size = e),
              (this.type = e && e > self.maxBufferSize ? "opfs" : "memory");
          }
          async init() {
            if ("opfs" === this.type) {
              if (!FileSystemFileHandle?.prototype.createSyncAccessHandle)
                throw new Error(
                  "`createSyncAccessHandle` is not available. Cannot download files larger than 2GB."
                );
              const e = await navigator.storage.getDirectory(),
                t = await e.getDirectoryHandle("downloads", {
                  create: !0,
                });
              (this.largeFile = await t.getFileHandle(
                Math.random().toString(),
                {
                  create: !0,
                }
              )),
                (this.largeFileAccessHandle =
                  await this.largeFile.createSyncAccessHandle());
            } else this.buffer = this.size ? m.alloc(this.size) : m.alloc(0);
          }
          write(e, t) {
            if ("opfs" === this.type)
              this.largeFileAccessHandle.write(e, {
                at: t,
              });
            else if (this.size)
              for (let n = 0; n < e.length; n++) {
                if (t + n >= this.buffer.length) return;
                this.buffer.writeUInt8(e[n], t + n);
              }
            else this.buffer = m.concat([this.buffer, e]);
          }
          getData() {
            return "opfs" === this.type
              ? this.largeFile.getFile()
              : Promise.resolve(this.buffer);
          }
        }
        async function P(e, t, n, s) {
          const { dcId: a } = n;
          for (let i = 0; i < S; i++)
            try {
              return await B(e, t, n, s);
            } catch (t) {
              if (
                !(
                  (t.message.startsWith("SESSION_REVOKED") ||
                    t.message.startsWith("CONNECTION_NOT_INITED")) &&
                  i < S - 1
                )
              )
                throw t;
              await e._cleanupExportedSenders(a);
            }
        }
        const M = 2,
          k = 2,
          R = 524288,
          E = 3,
          T = Array(k)
            .fill(void 0)
            .map(() => new r.j(10));
        async function B(e, t, n, s) {
          let { partSizeKb: r, end: c } = n;
          const { fileSize: u } = n,
            p = "id" in t ? t.id : void 0,
            m = function () {
              if (s) {
                for (
                  var e = arguments.length, t = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  t[a] = arguments[a];
                console.log(`⬇️ [${p}/${n.dcId}]`, ...t);
              }
            };
          m("Downloading file...");
          const y = Boolean(e.isPremium),
            { dcId: S, progressCallback: P, start: B = 0 } = n;
          (c = c && c < u ? c : u - 1),
            r || (r = u ? (0, h.getDownloadPartSize)(B ? c - B + 1 : u) : b);
          const D = 1024 * r,
            U = c ? Math.ceil((c + 1 - B + 1) / D) : 1,
            x = !c,
            V = u && u >= R && !x;
          let F;
          if (D % _ != 0)
            throw new Error(`The part size must be evenly divisible by ${_}`);
          e._log.info(`Downloading file in chunks of ${D} bytes`);
          const N = new C(c - B + 1),
            q = [];
          let O = B;
          const H = T.map((e) => {
            let { activeWorkers: t } = e;
            return t;
          });
          let L = H.indexOf(Math.min(...H)),
            G = !1,
            j = 0;
          for (P && P(j), await N.init(); ; ) {
            let n = D,
              r = !1;
            Math.floor(O / w) !== Math.floor((O + n - 1) / w) &&
              ((n = w - (O % w)), (r = !0)),
              (O % _ == 0 && n % _ == 0) || (r = !0);
            const u = V ? L % (y ? k : M) : 0;
            if (
              (await T[u].requestWorker(),
              F && (await F.promise),
              x && (F = new o.A()),
              G)
            ) {
              T[u].releaseWorker();
              break;
            }
            const p = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              m(`[${u}/${S}]`, ...t);
            };
            if (
              (q.push(
                (async (o) => {
                  let m = 0;
                  for (;;) {
                    let _;
                    const b = {
                      rq_datetime: Date.now(),
                      location: t,
                      offset: a()(o),
                      limit: n,
                      precise: r || void 0,
                    };
                    try {
                      let l = !1;
                      s &&
                        setTimeout(() => {
                          l || p(`❗️️ getSender took too long ${o}`);
                        }, 8e3),
                        (_ = await e.getSender(S, u, y)),
                        _._connection._ip != (0, h.getDC)(S, !0).ipAddress &&
                          (_ = await e.getSender(S, u, y, !0)),
                        (l = !0);
                      let m = !1;
                      s &&
                        setTimeout(() => {
                          m || p(`❗️️ sender.send took too long ${o}`);
                        }, 6e3),
                        (i.Oig || I) &&
                          console.log("INVOKE REQUEST: upload.GetFile", {
                            location: t,
                            offset: a()(o),
                            limit: n,
                            precise: r || void 0,
                          });
                      const w = await Promise.race([
                        _.send(
                          new (f().upload.GetFile)({
                            location: t,
                            offset: a()(o),
                            limit: n,
                            precise: r || void 0,
                          })
                        ),
                        (0, g.sleep)(A).then(() =>
                          S === e.session.dcId
                            ? (p(`Download timed out ${o}`),
                              Promise.reject(new Error("USER_CANCELED")))
                            : (p(`Download timed out [not main] ${o}`),
                              Promise.reject(new Error("SESSION_REVOKED")))
                        ),
                      ]);
                      if (
                        (e.releaseExportedSender(_),
                        (0, d.indexedDBAddLog)({
                          tl: "upload.GetFile",
                          rq: b,
                          rs: {
                            response_datetime: Date.now(),
                            ...w,
                            bytes: void 0,
                            bytes_length: w.bytes?.length,
                          },
                        }),
                        (i.Oig || I) &&
                          console.log("INVOKE RESPONSE: upload.GetFile", w),
                        (m = !0),
                        P)
                      ) {
                        if (P.isCanceled) throw new Error("USER_CANCELED");
                        (j += 1 / U), p(`⬇️️ ${100 * j}%`), P(j);
                      }
                      return (
                        !c && w.bytes.length < n && (G = !0),
                        T[u].releaseWorker(),
                        F && F.resolve(),
                        void N.write(w.bytes, o - B)
                      );
                    } catch (t) {
                      if (
                        ((0, d.indexedDBAddLog)({
                          tl: "upload.GetFile",
                          rq: b,
                          rs: {
                            rs_datetime: Date.now(),
                            e: t?.toString(),
                          },
                        }),
                        _ && !_.isConnected())
                      ) {
                        await (0, g.sleep)(v);
                        continue;
                      }
                      if (t instanceof l().FloodWaitError) {
                        await (0, g.sleep)(1e3 * t.seconds);
                        continue;
                      }
                      if (t instanceof l().InternalServerError && m < E) {
                        m++, await (0, g.sleep)(100);
                        continue;
                      }
                      throw (
                        (p(`Ended not gracefully ${o}`),
                        T[u].releaseWorker(),
                        F && F.resolve(),
                        (G = !0),
                        e.releaseExportedSender(_),
                        t)
                      );
                    }
                  }
                })(O)
              ),
              (O += n),
              L++,
              c && O > c)
            )
              break;
          }
          return await Promise.all(q), N.getData();
        }
      },
      38751: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            uploadFile: () => w,
          });
        var s = n(31481),
          a = n(84846),
          i = n(71337),
          o = n(718),
          r = n(9396),
          c = n.n(r),
          d = n(96847),
          u = n.n(d),
          l = n(80071),
          p = n(48287).hp;
        const f = {
          file_upload_smallMaxTotalSize: 10485760,
          file_upload_maxTotalSize: 524288e3,
          file_upload_maxParts: 1500,
        };
        (0, i.postMessageListenInWorker)("setAppConfig", (e, t) => {
          (f.file_upload_smallMaxTotalSize =
            t.data.file_upload_smallMaxTotalSize),
            (f.file_upload_maxTotalSize = t.data.file_upload_maxTotalSize),
            (f.file_upload_maxParts = t.data.file_upload_maxParts);
        });
        let g = !1;
        (0, i.postMessageListenInWorker)("setDebug", (e, t) => {
          g = Boolean(t.data);
        });
        const h = 1e3,
          m = 4,
          y = 6,
          _ = 10,
          b = Array(y)
            .fill(void 0)
            .map(() => new a.j(10));
        async function w(e, t, n) {
          const { file: a, onProgress: i } = t,
            r = Boolean(e.isPremium),
            { name: d, size: w } = a,
            v = (0, l.readBigIntFromBuffer)(
              (0, l.generateRandomBytes)(8),
              !0,
              !0
            ),
            A = w > f?.file_upload_smallMaxTotalSize;
          let S = 262144;
          w > 67108864 ? (S = 524288) : w < 102400 && (S = 32768);
          const I = function () {
            if (n) {
              for (
                var e = arguments.length, t = new Array(e), s = 0;
                s < e;
                s++
              )
                t[s] = arguments[s];
              console.log(`⬆️ [${v}]`, ...t);
            }
          };
          I("Uploading file...");
          const C = Math.floor((w + S - 1) / S);
          if (C > f?.file_upload_maxParts || w > f?.file_upload_maxTotalSize)
            return Promise.reject({
              type: "FILE_SIZE_IS_TOO_BIG",
            });
          const P = b.map((e) => {
            let { activeWorkers: t } = e;
            return t;
          });
          let M = P.indexOf(Math.min(...P)),
            k = 0;
          i && i(k);
          const R = [];
          for (let t = 0; t < C; t++) {
            const d = M % (r ? y : m);
            if ((await b[d].requestWorker(), i?.isCanceled)) {
              b[d].releaseWorker();
              break;
            }
            const f = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                I(`[${d}]`, ...t);
              },
              w = a.slice(t * S, (t + 1) * S);
            R.push(
              (async (t, a) => {
                let m = 0;
                for (;;) {
                  let y, w;
                  const S = {
                    rq_datetime: Date.now(),
                    fileId: v,
                    filePart: t,
                    fileTotalParts: C,
                    bytes: void 0,
                  };
                  try {
                    let i = !1;
                    n &&
                      setTimeout(() => {
                        i || f(`❗️️ getSender took too long j=${t}`);
                      }, 8e3),
                      (y = await e.getSender(e.session.dcId, d, r)),
                      (i = !0);
                    let c = !1;
                    const l = await a.arrayBuffer();
                    (w = l.byteLength),
                      n &&
                        setTimeout(() => {
                          c || f(`❗️️ sender.send took too long j=${t}`);
                        }, 6e3),
                      (s.Oig || g) &&
                        A &&
                        console.log("INVOKE REQUEST: upload.SaveBigFilePart", {
                          fileId: v,
                          filePart: t,
                          fileTotalParts: C,
                          bytes: p.from(l),
                        }),
                      (!s.Oig && !g) ||
                        A ||
                        console.log("INVOKE REQUEST: upload.SaveFilePart", {
                          fileId: v,
                          filePart: t,
                          bytes: p.from(l),
                        });
                    const h = await y.send(
                      A
                        ? new (u().upload.SaveBigFilePart)({
                            fileId: v,
                            filePart: t,
                            fileTotalParts: C,
                            bytes: p.from(l),
                          })
                        : new (u().upload.SaveFilePart)({
                            fileId: v,
                            filePart: t,
                            bytes: p.from(l),
                          })
                    );
                    e.releaseExportedSender(y),
                      (c = !0),
                      (0, o.indexedDBAddLog)({
                        tl: A
                          ? "upload.SaveBigFilePart"
                          : "upload.SaveFilePart",
                        rq: {
                          ...S,
                          bytes_length: w,
                        },
                        rs: {
                          rs_datetime: Date.now(),
                          ...h,
                        },
                      });
                  } catch (n) {
                    if (
                      ((s.Oig || g) &&
                        console.error(
                          `ERROR : ${A}`
                            ? "upload.SaveBigFilePart"
                            : "upload.SaveFilePart",
                          {
                            error: n,
                          }
                        ),
                      (0, o.indexedDBAddLog)({
                        tl: A
                          ? "upload.SaveBigFilePart"
                          : "upload.SaveFilePart",
                        rq: {
                          ...S,
                          bytes_length: w,
                        },
                        rs: {
                          rs_datetime: Date.now(),
                          e: n?.toString(),
                        },
                      }),
                      f(`❗️️️Upload part failed ${n?.toString()} j=${t}`),
                      y && !y.isConnected())
                    ) {
                      await (0, l.sleep)(h);
                      continue;
                    }
                    if (n instanceof c().FloodWaitError) {
                      await (0, l.sleep)(1e3 * n.seconds);
                      continue;
                    }
                    if (n instanceof c().InternalServerError && m < _) {
                      m++, await (0, l.sleep)(100);
                      continue;
                    }
                    throw (b[d].releaseWorker(), e.releaseExportedSender(y), n);
                  }
                  if ((b[d].releaseWorker(), i)) {
                    if (i.isCanceled) throw new Error("USER_CANCELED");
                    (k += 1 / C), f(100 * k + "%"), i(k);
                  }
                  break;
                }
              })(t, w)
            ),
              M++;
          }
          return (
            await Promise.all(R),
            A
              ? new (u().InputFileBig)({
                  id: v,
                  parts: C,
                  name: d,
                })
              : new (u().InputFile)({
                  id: v,
                  parts: C,
                  name: d,
                  md5Checksum: "",
                })
          );
        }
      },
      21051: (e, t, n) => {
        var s = n(48287).hp;
        const {
            sha1: a,
            toSignedLittleBuffer: i,
            readBufferFromBigInt: o,
            readBigIntFromBuffer: r,
          } = n(80071),
          c = n(28427),
          { sleep: d } = n(80071);
        class u {
          constructor(e, t) {
            if (!t || !e) return;
            (this._key = e), (this._hash = t);
            const n = new c(t);
            (this.auxHash = n.readLong(!1)),
              n.read(4),
              (this.keyId = n.readLong(!1));
          }
          async setKey(e) {
            if (!e)
              return (
                (this._key = void 0),
                (this.auxHash = void 0),
                (this.keyId = void 0),
                void (this._hash = void 0)
              );
            if (e instanceof u)
              return (
                (this._key = e._key),
                (this.auxHash = e.auxHash),
                (this.keyId = e.keyId),
                void (this._hash = e._hash)
              );
            (this._key = e), (this._hash = await a(this._key));
            const t = new c(this._hash);
            (this.auxHash = t.readLong(!1)),
              t.read(4),
              (this.keyId = t.readLong(!1));
          }
          async waitForKey() {
            for (; !this.keyId; ) await d(20);
          }
          getKey() {
            return this._key;
          }
          async calcNewNonceHash(e, t) {
            e = i(e, 32);
            const n = s.alloc(1);
            n.writeUInt8(t, 0);
            const c = s.concat([e, s.concat([n, o(this.auxHash, 8, !0)])]),
              d = (await a(c)).slice(4, 20);
            return r(d, !0, !0);
          }
          equals(e) {
            return (
              e instanceof this.constructor &&
              this._key &&
              e.getKey() &&
              e.getKey().equals(this._key)
            );
          }
        }
        e.exports = u;
      },
      52637: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(97157);
        e.exports = class {
          constructor(e, t) {
            if (!s.isBuffer(e) || !s.isBuffer(t) || 16 !== t.length)
              throw new Error("Key and iv need to be a buffer");
            this.cipher = a.createCipheriv("AES-256-CTR", e, t);
          }
          encrypt(e) {
            return s.from(this.cipher.update(e));
          }
        };
      },
      25356: (e, t, n) => {
        const s = n(87263),
          { modExp: a } = n(80071);
        class i {
          static gcd(e, t) {
            for (; t.neq(s.zero); ) {
              const n = t;
              (t = e.remainder(t)), (e = n);
            }
            return e;
          }
          static factorize(e) {
            if (e.remainder(2).equals(s.zero))
              return {
                p: s(2),
                q: e.divide(s(2)),
              };
            let t = s.randBetween(s(1), e.minus(1));
            const n = s.randBetween(s(1), e.minus(1)),
              o = s.randBetween(s(1), e.minus(1));
            let r,
              c = s.one,
              d = s.one,
              u = s.one,
              l = s.zero,
              p = s.zero;
            for (; c.eq(s.one); ) {
              l = t;
              for (let i = 0; s(i).lesser(d); i++)
                t = a(t, s(2), e).add(n).remainder(e);
              for (r = s.zero; r.lesser(d) && c.eq(s.one); ) {
                p = t;
                const f = s.min(o, d.minus(r));
                for (let i = 0; s(i).lesser(f); i++)
                  (t = a(t, s(2), e).add(n).remainder(e)),
                    (u = u.multiply(l.minus(t).abs()).remainder(e));
                (c = i.gcd(u, e)), (r = r.add(o));
              }
              d = d.multiply(2);
            }
            if (c.eq(e))
              for (
                ;
                (p = a(p, s(2), e).add(n).remainder(e)),
                  (c = i.gcd(l.minus(p).abs(), e)),
                  !c.greater(1);

              );
            const f = c;
            return (
              (u = e.divide(c)),
              f < u
                ? {
                    p: f,
                    q: u,
                  }
                : {
                    p: u,
                    q: f,
                  }
            );
          }
        }
        e.exports = i;
      },
      72469: (e, t, n) => {
        var s = n(48287).hp;
        const { IGE: a } = n(7692),
          i = n(80071);
        e.exports = class {
          constructor(e, t) {
            this.ige = new a(e, t);
          }
          decryptIge(e) {
            return i.convertToLittle(this.ige.decrypt(e));
          }
          encryptIge(e) {
            const t = e.length % 16;
            return (
              t && (e = s.concat([e, i.generateRandomBytes(16 - t)])),
              i.convertToLittle(this.ige.encrypt(e))
            );
          }
        };
      },
      76611: (e, t, n) => {
        "use strict";
        function s(e) {
          const t = new Uint8Array(4 * e.length);
          let n = 0;
          for (let s = 0; s < e.length; s++) {
            const a = e[s];
            (t[n++] = a >>> 24),
              (t[n++] = (a >> 16) & 255),
              (t[n++] = (a >> 8) & 255),
              (t[n++] = 255 & a);
          }
          return t.buffer;
        }
        function a(e) {
          return e.buffer;
        }
        function i(e) {
          const t = new Uint8Array(e),
            n = new Uint32Array(t.length / 4);
          for (let e = 0; e < t.length; e += 4)
            n[e / 4] =
              (t[e] << 24) ^ (t[e + 1] << 16) ^ (t[e + 2] << 8) ^ t[e + 3];
          return n;
        }
        function o(e) {
          return new Uint32Array(e);
        }
        n.r(t),
          n.d(t, {
            ab2i: () => d,
            ab2iBig: () => o,
            ab2iLow: () => i,
            i2ab: () => c,
            i2abBig: () => a,
            i2abLow: () => s,
            isBigEndian: () => r,
          });
        const r = 1 === new Uint8Array(new Uint32Array([16909060]))[0],
          c = r ? a : s,
          d = r ? o : i;
      },
      97157: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(7692).default,
          { i2ab: i, ab2i: o } = n(76611),
          { getWords: r } = n(86001);
        class c {
          constructor(e) {
            this.setBytes(e);
          }
          setBytes(e) {
            (e = s.from(e)), (this._counter = e);
          }
          increment() {
            for (let e = 15; e >= 0; e--) {
              if (255 !== this._counter[e]) {
                this._counter[e]++;
                break;
              }
              this._counter[e] = 0;
            }
          }
        }
        class d {
          constructor(e, t) {
            t instanceof c || (t = new c(t)),
              (this._counter = t),
              (this._remainingCounter = void 0),
              (this._remainingCounterIndex = 16),
              (this._aes = new a(r(e)));
          }
          update(e) {
            return this.encrypt(e);
          }
          encrypt(e) {
            const t = s.from(e);
            for (let e = 0; e < t.length; e++)
              16 === this._remainingCounterIndex &&
                ((this._remainingCounter = s.from(
                  i(this._aes.encrypt(o(this._counter._counter)))
                )),
                (this._remainingCounterIndex = 0),
                this._counter.increment()),
                (t[e] ^= this._remainingCounter[this._remainingCounterIndex++]);
            return t;
          }
        }
        class u {
          constructor(e) {
            this.algorithm = e;
          }
          update(e) {
            this.data = new Uint8Array(e);
          }
          async digest() {
            return "sha1" === this.algorithm
              ? s.from(await self.crypto.subtle.digest("SHA-1", this.data))
              : "sha256" === this.algorithm
              ? s.from(await self.crypto.subtle.digest("SHA-256", this.data))
              : void 0;
          }
        }
        e.exports = {
          createCipheriv: function (e, t, n) {
            if (e.includes("ECB")) throw new Error("Not supported");
            return new d(t, n);
          },
          createDecipheriv: function (e, t, n) {
            if (e.includes("ECB")) throw new Error("Not supported");
            return new d(t, n);
          },
          randomBytes: function (e) {
            const t = new Uint8Array(e);
            return crypto.getRandomValues(t), t;
          },
          createHash: function (e) {
            return new u(e);
          },
          pbkdf2: async function (e, t, n) {
            const a = await crypto.subtle.importKey(
              "raw",
              e,
              {
                name: "PBKDF2",
              },
              !1,
              ["deriveBits"]
            );
            return s.from(
              await crypto.subtle.deriveBits(
                {
                  name: "PBKDF2",
                  hash: "SHA-512",
                  salt: t,
                  iterations: n,
                },
                a,
                512
              )
            );
          },
        };
      },
      86001: (e, t, n) => {
        "use strict";
        function s(e, t) {
          return (
            (e.charCodeAt(t) << 24) ^
            (e.charCodeAt(t + 1) << 16) ^
            (e.charCodeAt(t + 2) << 8) ^
            e.charCodeAt(t + 3)
          );
        }
        function a(e) {
          if (e instanceof Uint32Array) return e;
          if ("string" == typeof e) {
            if (e.length % 4 != 0)
              for (let t = e.length % 4; t <= 4; t++) e += "\0x00";
            const t = new Uint32Array(e.length / 4);
            for (let n = 0; n < e.length; n += 4) t[n / 4] = s(e, n);
            return t;
          }
          if (e instanceof Uint8Array) {
            const t = new Uint32Array(e.length / 4);
            for (let n = 0; n < e.length; n += 4)
              t[n / 4] =
                (e[n] << 24) ^ (e[n + 1] << 16) ^ (e[n + 2] << 8) ^ e[n + 3];
            return t;
          }
          throw new Error("Unable to create 32-bit words");
        }
        function i(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
          for (let s = 0; s < e.length; s++) n[s] = e[s] ^ t[s];
        }
        n.r(t),
          n.d(t, {
            getWords: () => a,
            s2i: () => s,
            xor: () => i,
          });
      },
      48383: (e) => {
        class t extends Error {
          constructor() {
            super("The read operation was cancelled.");
          }
        }
        class n extends Error {
          constructor(e, t) {
            super(
              `Could not find a matching Constructor ID for the SPObject that was supposed to be\n        read with ID ${e}. Most likely, a SPObject was trying to be read when\n         it should not be read. Remaining bytes: ${t.length}`
            ),
              "undefined" != typeof alert &&
                alert(
                  `Missing MTProto Entity: Please, make sure to add SP definition for ID ${e}`
                ),
              (this.invalidConstructorId = e),
              (this.remaining = t);
          }
        }
        class s extends Error {
          constructor(e, t) {
            super(
              `Invalid checksum (${e} when ${t} was expected). This packet should be skipped.`
            ),
              (this.checksum = e),
              (this.validChecksum = t);
          }
        }
        class a extends Error {
          constructor(e) {
            let t;
            4 === e.length
              ? ((t = -e.readInt32LE(0)),
                super(`Invalid response buffer (HTTP code ${t})`))
              : super(`Invalid response buffer (too short ${e})`),
              (this.code = t),
              (this.payload = e);
          }
        }
        class i extends Error {
          constructor() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            t.length || (t = ["A security check failed."]), super(...t);
          }
        }
        class o extends Error {
          constructor(e, t) {
            let n =
              o.ErrorMessages[t] ||
              `Unknown error code (this should not happen): ${t}.`;
            (n += `  Caused by ${e.className}`),
              super(n),
              (this.message = n),
              (this.code = t);
          }
        }
        var r, c, d;
        (r = o),
          (d = {
            16: "msg_id too low (most likely, client time is wrong it would be worthwhile to synchronize it using msg_id notifications and re-send the original message with the “correct” msg_id or wrap it in a container with a new msg_id if the original message had waited too long on the client to be transmitted).",
            17: "msg_id too high (similar to the previous case, the client time has to be synchronized, and the message re-sent with the correct msg_id).",
            18: "Incorrect two lower order msg_id bits (the server expects client message msg_id to be divisible by 4).",
            19: "Container msg_id is the same as msg_id of a previously received message (this must never happen).",
            20: "Message too old, and it cannot be verified whether the server has received a message with this msg_id or not.",
            32: "msg_seqno too low (the server has already received a message with a lower msg_id but with either a higher or an equal and odd seqno).",
            33: "msg_seqno too high (similarly, there is a message with a higher msg_id but with either a lower or an equal and odd seqno).",
            34: "An even msg_seqno expected (irrelevant message), but odd received.",
            35: "Odd msg_seqno expected (relevant message), but even received.",
            48: "Incorrect server salt (in this case, the bad_server_salt response is received with the correct salt, and the message is to be re-sent with it).",
            64: "Invalid container.",
          }),
          (c = (function (e) {
            var t = (function (e) {
              if ("object" != typeof e || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == typeof t ? t : t + "";
          })((c = "ErrorMessages"))) in r
            ? Object.defineProperty(r, c, {
                value: d,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[c] = d),
          (e.exports = {
            ReadCancelledError: t,
            TypeNotFoundError: n,
            InvalidChecksumError: s,
            InvalidBufferError: a,
            SecurityError: i,
            CdnFileTamperedError: class extends i {
              constructor() {
                super(
                  "The CDN file has been altered and its download cancelled."
                );
              }
            },
            BadMessageError: o,
          });
      },
      74681: (e) => {
        function t(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class n extends Error {
          constructor(e, t) {
            let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : void 0;
            super(
              "RPCError {0}: {1}{2}"
                .replace("{0}", s)
                .replace("{1}", e)
                .replace("{2}", n._fmtRequest(t))
            ),
              (this.code = s),
              (this.message = e);
          }
          static _fmtRequest(e) {
            return e ? ` (caused by ${e.className})` : "";
          }
        }
        e.exports = {
          RPCError: n,
          InvalidDCError: class extends n {
            constructor(e, t, n) {
              super(t, e, n),
                (this.code = n || 303),
                (this.message = t || "ERROR_SEE_OTHER");
            }
          },
          BadRequestError: class extends n {
            constructor() {
              super(...arguments),
                t(this, "code", 400),
                t(this, "message", "BAD_REQUEST");
            }
          },
          UnauthorizedError: class extends n {
            constructor() {
              super(...arguments),
                t(this, "code", 401),
                t(this, "message", "UNAUTHORIZED");
            }
          },
          ForbiddenError: class extends n {
            constructor() {
              super(...arguments),
                t(this, "code", 403),
                t(this, "message", "FORBIDDEN");
            }
          },
          NotFoundError: class extends n {
            constructor() {
              super(...arguments),
                t(this, "code", 404),
                t(this, "message", "NOT_FOUND");
            }
          },
          AuthKeyError: class extends n {
            constructor() {
              super(...arguments),
                t(this, "code", 406),
                t(this, "message", "AUTH_KEY");
            }
          },
          FloodError: class extends n {
            constructor() {
              super(...arguments),
                t(this, "code", 420),
                t(this, "message", "FLOOD");
            }
          },
          ServerError: class extends n {
            constructor() {
              super(...arguments),
                t(this, "code", 500),
                t(this, "message", "INTERNAL");
            }
          },
          TimedOutError: class extends n {
            constructor() {
              super(...arguments),
                t(this, "code", 503),
                t(this, "message", "Timeout");
            }
          },
        };
      },
      77389: (e, t, n) => {
        const {
          RPCError: s,
          InvalidDCError: a,
          FloodError: i,
          BadRequestError: o,
          TimedOutError: r,
          ServerError: c,
        } = n(74681);
        class d extends a {
          constructor(e) {
            const t = Number(e.capture || 0);
            super(
              `The user whose identity is being used to execute queries is associated with DC ${t}${s._fmtRequest(
                e.request
              )}`
            ),
              (this.message = `The user whose identity is being used to execute queries is associated with DC ${t}${s._fmtRequest(
                e.request
              )}`),
              (this.newDc = t);
          }
        }
        class u extends a {
          constructor(e) {
            const t = Number(e.capture || 0);
            super(
              `The phone number a user is trying to use for authorization is associated with DC ${t}${s._fmtRequest(
                e.request
              )}`
            ),
              (this.message = `The phone number a user is trying to use for authorization is associated with DC ${t}${s._fmtRequest(
                e.request
              )}`),
              (this.newDc = t);
          }
        }
        class l extends i {
          constructor(e) {
            const t = Number(e.capture || 0);
            super(
              `A wait of ${t} seconds is required before sending another message in this chat${s._fmtRequest(
                e.request
              )}`
            ),
              (this.message = `A wait of ${t} seconds is required before sending another message in this chat${s._fmtRequest(
                e.request
              )}`),
              (this.seconds = t);
          }
        }
        class p extends i {
          constructor(e) {
            const t = Number(e.capture || 0);
            super(
              `A wait of ${t} seconds is required${s._fmtRequest(e.request)}`
            ),
              (this.message = `A wait of ${t} seconds is required${s._fmtRequest(
                e.request
              )}`),
              (this.seconds = t);
          }
        }
        class f extends i {
          constructor(e) {
            super(`Message failed to be sent.${s._fmtRequest(e.request)}`),
              (this.message = `Message failed to be sent.${s._fmtRequest(
                e.request
              )}`);
          }
        }
        class g extends i {
          constructor(e) {
            const t = Number(e.capture || 0);
            super(
              `A wait of ${t} seconds is required in the test servers${s._fmtRequest(
                e.request
              )}`
            ),
              (this.message = `A wait of ${t} seconds is required in the test servers${s._fmtRequest(
                e.request
              )}`),
              (this.seconds = t);
          }
        }
        class h extends a {
          constructor(e) {
            const t = Number(e.capture || 0);
            super(
              `The file to be accessed is currently stored in DC ${t}${s._fmtRequest(
                e.request
              )}`
            ),
              (this.message = `The file to be accessed is currently stored in DC ${t}${s._fmtRequest(
                e.request
              )}`),
              (this.newDc = t);
          }
        }
        class m extends a {
          constructor(e) {
            const t = Number(e.capture || 0);
            super(
              `The source IP address is associated with DC ${t}${s._fmtRequest(
                e.request
              )}`
            ),
              (this.message = `The source IP address is associated with DC ${t}${s._fmtRequest(
                e.request
              )}`),
              (this.newDc = t);
          }
        }
        class y extends o {
          constructor(e) {
            const t = Number(e.capture || 0);
            super(
              `Email unconfirmed, the length of the code must be ${t}${s._fmtRequest(
                e.request
              )}`
            ),
              (this.message = `Email unconfirmed, the length of the code must be ${t}${s._fmtRequest(
                e.request
              )}`),
              (this.codeLength = t);
          }
        }
        class _ extends c {
          constructor(e) {
            Number(e.capture || 0),
              super(`Internal Server Error ${s._fmtRequest(e.request)}`),
              (this.message = `Internal Server Error ${s._fmtRequest(
                e.request
              )}`);
          }
        }
        const b = [
          [/FILE_MIGRATE_(\d+)/, h],
          [/FLOOD_TEST_PHONE_WAIT_(\d+)/, g],
          [/FLOOD_WAIT_(\d+)/, p],
          [/MSG_WAIT_(.*)/, f],
          [/PHONE_MIGRATE_(\d+)/, u],
          [/SLOWMODE_WAIT_(\d+)/, l],
          [/USER_MIGRATE_(\d+)/, d],
          [/NETWORK_MIGRATE_(\d+)/, m],
          [/EMAIL_UNCONFIRMED_(\d+)/, y],
          [/^INTERNAL_SERVER_ERROR$/, _],
          [/^Timeout$/, r],
        ];
        e.exports = {
          rpcErrorRe: b,
          FileMigrateError: h,
          FloodTestPhoneWaitError: g,
          FloodWaitError: p,
          PhoneMigrateError: u,
          SlowModeWaitError: l,
          UserMigrateError: d,
          NetworkMigrateError: m,
          MsgWaitError: f,
          EmailUnconfirmedError: y,
          InternalServerError: _,
        };
      },
      9396: (e, t, n) => {
        const { RPCError: s } = n(74681),
          { rpcErrorRe: a } = n(77389),
          i = n(48383),
          o = n(74681),
          r = n(77389);
        e.exports = {
          RPCMessageToError: function (e, t) {
            for (const [n, s] of a) {
              const a = e.errorMessage.match(n);
              if (a)
                return new s({
                  request: t,
                  capture: 2 === a.length ? parseInt(a[1], 10) : void 0,
                });
            }
            return new s(e.errorMessage, t);
          },
          ...i,
          ...o,
          ...r,
        };
      },
      55769: () => {},
      73300: (e, t, n) => {
        const { EventBuilder: s } = n(53505);
        e.exports = class extends s {
          constructor() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    types: void 0,
                    func: void 0,
                  };
            super(), e.types ? (this.types = e.types) : (this.types = !0);
          }
          build(e) {
            return e;
          }
        };
      },
      53505: (e) => {
        e.exports = {
          EventBuilder: class {
            constructor() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      chats: void 0,
                      blacklistChats: void 0,
                      func: void 0,
                    };
              (this.chats = e.chats),
                (this.blacklistChats = Boolean(e.blacklistChats)),
                (this.resolved = !1),
                (this.func = e.func);
            }
            build(e) {}
          },
        };
      },
      65230: (e, t, n) => {
        const s = n(55769),
          a = n(73300);
        class i extends Error {}
        e.exports = {
          NewMessage: s,
          StopPropagation: i,
          Raw: a,
        };
      },
      60010: (e) => {
        e.exports = class {
          constructor() {
            (this._queue = []),
              (this.canGet = new Promise((e) => {
                this.resolveGet = e;
              })),
              (this.canPush = !0);
          }
          async push(e) {
            await this.canPush,
              this._queue.push(e),
              this.resolveGet(!0),
              (this.canPush = new Promise((e) => {
                this.resolvePush = e;
              }));
          }
          async pop() {
            await this.canGet;
            const e = this._queue.pop();
            return (
              this.resolvePush(!0),
              (this.canGet = new Promise((e) => {
                this.resolveGet = e;
              })),
              e
            );
          }
        };
      },
      28427: (e, t, n) => {
        const { TypeNotFoundError: s } = n(48383),
          { coreObjects: a } = n(48075),
          { tlobjects: i } = n(50114),
          { readBigIntFromBuffer: o } = n(80071);
        e.exports = class {
          constructor(e) {
            (this.stream = e), (this._last = void 0), (this.offset = 0);
          }
          readByte() {
            return this.read(1)[0];
          }
          readInt() {
            let e;
            return (
              (e =
                arguments.length > 0 && void 0 !== arguments[0] && !arguments[0]
                  ? this.stream.readUInt32LE(this.offset)
                  : this.stream.readInt32LE(this.offset)),
              (this.offset += 4),
              e
            );
          }
          readLong() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return this.readLargeInt(64, e);
          }
          readFloat() {
            return this.read(4).readFloatLE(0);
          }
          readDouble() {
            return this.read(8).readDoubleLE(0);
          }
          readLargeInt(e) {
            let t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            const n = this.read(Math.floor(e / 8));
            return o(n, !0, t);
          }
          read() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : -1;
            -1 === e && (e = this.stream.length - this.offset);
            const t = this.stream.slice(this.offset, this.offset + e);
            if (((this.offset += e), t.length !== e))
              throw Error(
                `No more data left to read (need ${e}, got ${t.length}: ${t}); last read ${this._last}`
              );
            return (this._last = t), t;
          }
          getBuffer() {
            return this.stream;
          }
          tgReadBytes() {
            const e = this.readByte();
            let t, n;
            254 === e
              ? ((n =
                  this.readByte() |
                  (this.readByte() << 8) |
                  (this.readByte() << 16)),
                (t = n % 4))
              : ((n = e), (t = (n + 1) % 4));
            const s = this.read(n);
            return t > 0 && ((t = 4 - t), this.read(t)), s;
          }
          tgReadString() {
            return this.tgReadBytes().toString("utf-8");
          }
          tgReadBool() {
            const e = this.readInt();
            if (2574415285 === e) return true;
            if (3162085175 === e) return false;
            throw new Error(`Invalid boolean code ${e.toString("16")}`);
          }
          tgReadDate() {
            const e = this.readInt();
            return new Date(1e3 * e);
          }
          tgReadObject() {
            const e = this.readInt();
            let t = i[e];
            if (void 0 === t) {
              if (2574415285 === e) return !0;
              if (3162085175 === e) return !1;
              if (481674261 === e) {
                const e = [],
                  t = this.readInt();
                for (let n = 0; n < t; n++) e.push(this.tgReadObject());
                return e;
              }
              if (((t = a[e]), void 0 === t)) {
                this.seek(-4);
                const t = this.tellPosition(),
                  n = new s(e, this.read());
                throw (this.setPosition(t), n);
              }
            }
            return t.fromReader(this);
          }
          tgReadVector() {
            if (481674261 !== this.readInt())
              throw new Error("Invalid constructor code, vector was expected");
            const e = this.readInt(),
              t = [];
            for (let n = 0; n < e; n++) t.push(this.tgReadObject());
            return t;
          }
          close() {
            this.stream = void 0;
          }
          tellPosition() {
            return this.offset;
          }
          setPosition(e) {
            this.offset = e;
          }
          seek(e) {
            this.offset += e;
          }
        };
      },
      70747: (e, t, n) => {
        var s = n(48287).hp;
        e.exports = class {
          constructor(e) {
            this._stream = e;
          }
          write(e) {
            this._stream = s.concat([this._stream, e]);
          }
          getValue() {
            return this._stream;
          }
        };
      },
      93671: (e, t, n) => {
        "use strict";
        n.d(t, {
          A: () => r,
        });
        var s,
          a = n(48287).hp;
        function i(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const o = new Error("HttpStream was closed");
        (s = AbortSignal).timeout ??
          (s.timeout = function (e) {
            const t = new AbortController();
            return setTimeout(() => t.abort(), e), t.signal;
          });
        const r = class {
          constructor(e) {
            i(this, "url", void 0),
              i(this, "isClosed", void 0),
              i(this, "stream", []),
              i(this, "canRead", Promise.resolve()),
              i(this, "resolveRead", void 0),
              i(this, "rejectRead", void 0),
              i(this, "disconnectedCallback", void 0),
              (this.isClosed = !0),
              (this.disconnectedCallback = e);
          }
          async read() {
            await this.canRead;
            const e = this.stream.shift();
            return (
              0 === this.stream.length &&
                (this.canRead = new Promise((e, t) => {
                  (this.resolveRead = e), (this.rejectRead = t);
                })),
              e
            );
          }
          getURL(e, t, n, s) {
            return 443 === t
              ? `https://${e}:${t}/apiw1${n ? "_test" : ""}${
                  s ? "_premium" : ""
                }`
              : `http://${e}:${t}/apiw1${n ? "_test" : ""}${
                  s ? "_premium" : ""
                }`;
          }
          async connect(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              s =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            (this.stream = []),
              (this.canRead = new Promise((e, t) => {
                (this.resolveRead = e), (this.rejectRead = t);
              })),
              (this.url = this.getURL(t, e, n, s)),
              await fetch(this.url, {
                method: "POST",
                body: a.from([]),
                mode: "cors",
                signal: AbortSignal.timeout(1e4),
              }),
              (this.isClosed = !1);
          }
          write(e) {
            if (this.isClosed || !this.url) throw (this.handleDisconnect(), o);
            return fetch(this.url, {
              method: "POST",
              body: e,
              mode: "cors",
              signal: AbortSignal.timeout(1e4),
            })
              .then(async (e) => {
                if (this.isClosed) return void this.handleDisconnect();
                if (200 !== e.status) throw o;
                const t = await e.arrayBuffer();
                (this.stream = this.stream.concat(a.from(t))),
                  this.resolveRead && !this.isClosed && this.resolveRead();
              })
              .catch((e) => {
                throw (this.handleDisconnect(), e);
              });
          }
          handleDisconnect() {
            this.disconnectedCallback?.(), this.rejectRead && this.rejectRead();
          }
          close() {
            (this.isClosed = !0),
              this.handleDisconnect(),
              (this.disconnectedCallback = void 0);
          }
        };
      },
      51369: (e, t, n) => {
        const { postMessageListenInWorker: s } = n(71337);
        let a;
        s("setDebug", (e, t) => {
          a = "2" === t.data ? "debug" : "warn";
        });
        class i {
          constructor(e) {
            a || (a = e || "debug"),
              (this.colors = {
                start: "%c",
                warn: "color : #ff00ff",
                info: "color : #ffff00",
                debug: "color : #00ffff",
                error: "color : #ff0000",
                end: "",
              }),
              (this.messageFormat = "[%t] [%l] - [%m]");
          }
          static setLevel(e) {
            a = e;
          }
          canSend(e) {
            return i.LEVEL_MAP.get(a).has(e);
          }
          warn(e) {
            this._log("warn", e, this.colors.warn);
          }
          info(e) {
            this._log("info", e, this.colors.info);
          }
          debug(e) {
            this._log("debug", e, this.colors.debug);
          }
          error(e) {
            this._log("error", e, this.colors.error);
          }
          format(e, t) {
            return this.messageFormat
              .replace("%t", new Date().toISOString())
              .replace("%l", t.toUpperCase())
              .replace("%m", e);
          }
          _log(e, t, n) {
            a &&
              this.canSend(e) &&
              console.log(this.colors.start + this.format(t, e), n);
          }
        }
        var o, r, c;
        (o = i),
          (r = "LEVEL_MAP"),
          (c = new Map([
            ["error", new Set(["error"])],
            ["warn", new Set(["error", "warn"])],
            ["info", new Set(["error", "warn", "info"])],
            ["debug", new Set(["error", "warn", "info", "debug"])],
          ])),
          (r = (function (e) {
            var t = (function (e) {
              if ("object" != typeof e || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == typeof t ? t : t + "";
          })(r)) in o
            ? Object.defineProperty(o, r, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (o[r] = c),
          (e.exports = i);
      },
      77552: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(30293),
          i = n(61028),
          o = n(70747),
          r = new Set([
            "messages.SendMessage",
            "messages.SendMedia",
            "messages.SendMultiMedia",
            "messages.ForwardMessages",
            "messages.SendInlineBotResult",
          ]);
        e.exports = class {
          constructor(e, t) {
            (this._state = e),
              (this._queue = []),
              (this._pendingStates = []),
              (this._ready = new Promise((e) => {
                this.setReady = e;
              })),
              (this._log = t);
          }
          values() {
            return this._queue;
          }
          clear() {
            (this._queue = []), this.append(void 0);
          }
          append(e) {
            let t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (e && r.has(e.request.className))
              if (n) {
                for (let t = 0; t < this._queue.length; t++)
                  if (r.has(this._queue[t]?.request.className)) {
                    this._queue[t].after = e;
                    break;
                  }
              } else
                for (let t = this._queue.length - 1; t >= 0; t--)
                  if (r.has(this._queue[t]?.request.className)) {
                    e.after = this._queue[t];
                    break;
                  }
            n ? this._queue.unshift(e) : this._queue.push(e),
              t && this.setReady(!0),
              e &&
                1658238041 !== e.request.CONSTRUCTOR_ID &&
                (this._pendingStates.push(e),
                e.promise
                  .catch(() => {})
                  .finally(() => {
                    this._pendingStates = this._pendingStates.filter(
                      (t) => t !== e
                    );
                  }));
          }
          prepend(e) {
            e.reverse().forEach((e) => {
              this.append(e, !1, !0);
            }),
              this.setReady(!0);
          }
          extend(e) {
            e.forEach((e) => {
              this.append(e, !1);
            }),
              this.setReady(!0);
          }
          async getBeacon(e) {
            const t = new o(s.alloc(0));
            if (e.data.length + i.SIZE_OVERHEAD <= a.MAXIMUM_SIZE) {
              let n;
              return (
                e.after && (n = e.after.msgId),
                (e.msgId = await this._state.writeDataAsMessage(
                  t,
                  e.data,
                  "request" === e.request.classType,
                  n
                )),
                this._log.debug(
                  `Assigned msgId = ${e.msgId} to ${
                    e.request.className || e.request.constructor.name
                  }`
                ),
                t.getValue()
              );
            }
            this._log.warn(
              `Message payload for ${
                e.request.className || e.request.constructor.name
              } is too long ${e.data.length} and cannot be sent`
            ),
              e.reject("Request Payload is too big");
          }
          async wait() {
            this._queue.length ||
              ((this._ready = new Promise((e) => {
                this.setReady = e;
              })),
              await this._ready);
          }
          async get() {
            if (!this._queue[this._queue.length - 1])
              return void (this._queue = this._queue.filter(Boolean));
            let e,
              t = new o(s.alloc(0));
            const n = [];
            let r = 0;
            for (; this._queue.length && n.length <= a.MAXIMUM_LENGTH; ) {
              const e = this._queue.shift();
              if (e)
                if (e.abortSignal?.aborted)
                  e.reject(new Error("Request aborted"));
                else if (
                  ((r += e.data.length + i.SIZE_OVERHEAD), r <= a.MAXIMUM_SIZE)
                ) {
                  let s;
                  e.after && (s = e.after.msgId),
                    (e.msgId = await this._state.writeDataAsMessage(
                      t,
                      e.data,
                      "request" === e.request.classType,
                      s
                    )),
                    this._log.debug(
                      `Assigned msgId = ${e.msgId} to ${
                        e.request.className || e.request.constructor.name
                      }`
                    ),
                    n.push(e);
                } else {
                  if (n.length) {
                    this._queue.unshift(e);
                    break;
                  }
                  this._log.warn(
                    `Message payload for ${
                      e.request.className || e.request.constructor.name
                    } is too long ${e.data.length} and cannot be sent`
                  ),
                    e.reject("Request Payload is too big"),
                    (r = 0);
                }
            }
            if (n.length) {
              if (n.length > 1) {
                const i = s.alloc(8);
                i.writeUInt32LE(a.CONSTRUCTOR_ID, 0),
                  i.writeInt32LE(n.length, 4),
                  (e = s.concat([i, t.getValue()])),
                  (t = new o(s.alloc(0)));
                const r = await this._state.writeDataAsMessage(t, e, !1);
                for (const e of n) e.containerId = r;
              }
              return (
                (e = t.getValue()),
                {
                  batch: n,
                  data: e,
                }
              );
            }
          }
        };
      },
      40041: (e) => {
        e.exports = class {
          constructor() {
            this._pending = new Map();
          }
          set(e, t) {
            this._pending.set(e.toString(), t);
          }
          get(e) {
            return this._pending.get(e.toString());
          }
          getAndDelete(e) {
            const t = this.get(e);
            return this.delete(e), t;
          }
          values() {
            return Array.from(this._pending.values());
          }
          delete(e) {
            this._pending.delete(e.toString());
          }
          clear() {
            this._pending.clear();
          }
        };
      },
      68338: (e, t, n) => {
        var s = n(48287).hp;
        const { Mutex: a } = n(56693),
          { indexedDBAddLog: i } = n(718),
          o = new a(),
          r = new Error("WebSocket was closed");
        e.exports = class {
          constructor(e) {
            (this.client = void 0),
              (this.closed = !0),
              (this.disconnectedCallback = e),
              (this.timeout = 1e4);
          }
          async readExactly(e) {
            let t = s.alloc(0);
            for (;;) {
              const n = await this.read(e);
              if (((t = s.concat([t, n])), !(e -= n.length))) return t;
            }
          }
          async read(e) {
            if (this.closed) throw r;
            if ((await this.canRead, this.closed)) throw r;
            const t = this.stream.slice(0, e);
            return (
              (this.stream = this.stream.slice(e)),
              0 === this.stream.length &&
                (this.canRead = new Promise((e) => {
                  this.resolveRead = e;
                })),
              t
            );
          }
          async readAll() {
            if (this.closed || !(await this.canRead)) throw r;
            const e = this.stream;
            return (
              (this.stream = s.alloc(0)),
              (this.canRead = new Promise((e) => {
                this.resolveRead = e;
              })),
              e
            );
          }
          getWebSocketLink(e, t, n, s) {
            return 443 === t
              ? `wss://${e}:${t}/apiws${n ? "_test" : ""}${s ? "_premium" : ""}`
              : `ws://${e}:${t}/apiws${n ? "_test" : ""}${s ? "_premium" : ""}`;
          }
          connect(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return (
              (this.stream = s.alloc(0)),
              (this.canRead = new Promise((e) => {
                this.resolveRead = e;
              })),
              (this.closed = !1),
              (this.website = this.getWebSocketLink(t, e, n, a)),
              (this.client = new WebSocket(this.website, "binary")),
              new Promise((e, n) => {
                let s,
                  a = !1;
                (this.client.onopen = () => {
                  this.receive(), e(this), (a = !0), s && clearTimeout(s);
                }),
                  (this.client.onerror = (e) => {
                    console.error("WebSocket error", e),
                      n(e),
                      (a = !0),
                      s && clearTimeout(s);
                  }),
                  (this.client.onclose = (e) => {
                    const { code: n, reason: o, wasClean: r } = e;
                    1e3 !== n &&
                      (console.error(
                        `Socket ${t} closed. Code: ${n}, reason: ${o}, was clean: ${r}`
                      ),
                      (e.target?.url?.includes("im-server-1") ||
                        e.target?.url?.includes("im-server-2")) &&
                        1006 === n &&
                        i({
                          socket: "closed",
                          url: e.target?.url,
                          code: n,
                          reason: o,
                          wasClean: r,
                          timeout: this.timeout,
                          time: Date.now(),
                        })),
                      this.resolveRead(!1),
                      (this.closed = !0),
                      this.disconnectedCallback && this.disconnectedCallback(),
                      (a = !0),
                      s && clearTimeout(s);
                  }),
                  (s = setTimeout(() => {
                    a ||
                      (n(new Error("WebSocket connection timeout")),
                      this.resolveRead(!1),
                      (this.closed = !0),
                      this.disconnectedCallback && this.disconnectedCallback(),
                      this.client.close(),
                      (this.timeout *= 2),
                      (this.timeout = Math.min(this.timeout, 3e4)),
                      (s = void 0));
                  }, this.timeout)),
                  self.addEventListener("offline", async () => {
                    await this.close(), this.resolveRead(!1);
                  });
              })
            );
          }
          write(e) {
            if (this.closed) throw r;
            this.client.send(e);
          }
          async close() {
            await this.client.close(), (this.closed = !0);
          }
          receive() {
            this.client.onmessage = async (e) => {
              await o.runExclusive(async () => {
                const t =
                  e.data instanceof ArrayBuffer
                    ? s.from(e.data)
                    : s.from(await new Response(e.data).arrayBuffer());
                (this.stream = s.concat([this.stream, t])),
                  this.resolveRead(!0);
              });
            };
          }
        };
      },
      4681: (e, t, n) => {
        const s = n(51369),
          a = n(70747),
          i = n(28427),
          o = n(68338),
          r = n(77552),
          c = n(60010);
        e.exports = {
          BinaryWriter: a,
          BinaryReader: i,
          MessagePacker: r,
          AsyncQueue: c,
          Logger: s,
          PromisedWebSockets: o,
        };
      },
      45174: (e, t, n) => {
        const s = n(96847),
          a = n(26462),
          i = n(51227),
          o = n(43355),
          r = n(58946),
          c = n(65230),
          d = n(56215),
          u = n(9396),
          l = n(47306),
          p = n(4681),
          f = n(80071);
        e.exports = {
          Api: s,
          TelegramClient: a,
          sessions: l,
          connection: i,
          extensions: p,
          tl: o,
          version: r,
          events: c,
          utils: d,
          errors: u,
          helpers: f,
        };
      },
      83620: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            doAuthentication: () => y,
          });
        var s = n(87263),
          a = n.n(s);
        n(80071), n(48287).hp;
        const i = [
          {
            fingerprint: a()("1756106365847508527"),
            n: a()(
              "24238017039406324398818211100017460853877925248782649032256867755810335814127124174152552731142554114852422558645777814390854384939307234864895464642798398028371542228969164000877103469497598660814243455942166911962275149243241136966793567305207921915048350204489516378689905194216789741874810118898414872745651826381529051462943943060849600549855155618459538046759513047741178572508028156727115094924075836133814760736535296653732158626606889032969597095552163452422289022952141357954550600757285098604619618920582009763141301625135222696080861958446437367103385485660067248268161547714346218480166799291098838822637"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("4512654018935143700"),
            n: a()(
              "24235260037890616169120794235062262674316024975077366890198797443331519080732755901363433156102098672541115756594495998709831497291855317743857599933614215433431882467805644923653595607403240513727541136547826962095235110116337427731828103883948424780929997236931407307169894268539301307119160296066712383693459066029441762074173759747793039174943183613832584177865789542225605910018410709652462430479960297418110622242830949114847276874797307530921524192744012016471098946454164482843546804965228364603315089956692139144290446684470924997647106858968233924279740471552020606031234618000396222660365264833969144099689"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("3954552239731554950"),
            n: a()(
              "24232829137928731863019490002272733547385109287748297178609100006065549257095568082915937431578124587337794419409505050329102232313883718364639325401969651389116552838463132089986552293089568181366809408321934732862413729055496124940315094723812534661640494201559990530556774916900223297896209016669206232920888207341821205210891303083904139661142906408868611981611963687788770378695879011402303937435839797563703645760891960964101470680979117200293634538267916988134218179357404908420594084400131979794539094631619249407376814557856095132297201658918486640887798052272377986351953478094540165680281771116997441734993"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("3840879616129353640"),
            n: a()(
              "24226740003845387526122420383215813313160481817646534954349406594626036763275434691654700873685207371364562560617513084485551764162313690591806956872846659907830643797349274445997728236041847050770194661202868608462800289923910952988537320887544165103060997775840429356973390565265381070029205138105237970981099188549518140588436045472449701138095349921239316849430956077286762827767297232718282160587331191873355577824832392331680272547948467113172934998437902856416395533425838596802424433387992920842347995664806751296809332290342152475668988401357419279530258635231544972387436349151853117346156473906307508757549"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("9721673155303707927"),
            n: a()(
              "24235887198671065183055559947724015202901578705257391127883023207130325404209944274441623365774400996125245803826674984630558065530801346509332483039911631199004349799404280051072462526587571180814264659704919975908481860485392697091312975059521505252243307029981562770551539328732454274175686423286372017171706172687007694344562256482111767528076194851300510416590635106402450593729914970198599025438375131735218828188369140906636454128309358530468585125463089729781282854480794582223826120006365903044441770824989674440663577903688826372961995342818099867691669681672230707247497372041028959094232101600968274415909"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("7327245710266107682"),
            n: a()(
              "24233564129976052525074557234863243932690922138106909359656144523154213183753506814850645168001577563855229772321433282956411845640925035870968972803136480518327839574672220874857257522033398020724503795612522966253226642346178003829500572676012295974220897791590693412410598927265125769563882185124360261103470929664258060261189680335028461109077433213486615371932159709849345808113812001115072270346716870722377262463616658269378937324271848255503453424157667443329122247165267772229992577323167042062228644298199963610119085504374702555387623787457423479408655064120078431039033708876830736678360594495005894285717"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("7311641324696334512"),
            n: a()(
              "24238904092765623654541951735864997636805739769868168409716631959515469207569320832435968810337769651850580018414508646205665007373580374454395606146597849315923870670127753544137087350549900254610551324524604571915228715018530629778298064618268998531793173214036172363025839131060339130881375219446465668205779446789649992083429162676455112627392603665592101688014918149206881529578523272334726996711735101572984859875549951905127125799205155064098291930887529833481849200040487496164143132362127196384113142372423142258452585061291011491812576430380789840081128126636524048534242489396825475946269701146582317743657"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("5524002727329132702"),
            n: a()(
              "24240840390944090341507953931793624151763744285563544030910416784236727462750689550882282684085969155875993563675744852648552717349026668910077199849073601728876305909329013402215915886356001505563731538867739529640235766477773878514285912876193140368688382252273204355188089098846601780006831681303843231908846120924758803643829705110820216506673657502707864484421619874710577778393813357430704906944216680999917516195329215472962777640129203129770439225116577891002812853189041960585299399249968153372691725885820340316511845659627253451466115694977127425555862186933193218394320394258694625575382100116288975340549"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("2155561823286592012"),
            n: a()(
              "24243204744019316140571390393410731044654264209980898428670746497205291386024859137646251159342861816150128941773691765890192527564620428158169785622636505535629877349480617450560211048944399739063850448630948066199276397698436674230327767005624782137249362550473395158990527076392726209697596675639019343431160273964306938051977616487039715401404799862526727477302181083747478624994178928979351838016002623078026537816937662621346331619607922153654990755682564560671138040298018060956367906310050176108465773963874560935962712092372009916305687613610568043052253976511360748800839532555791190958981455525068313616897"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("17531275267172558227"),
            n: a()(
              "24255139658927753013873254536141189189753237402252128733006540963901927076142349649954801019467156677718322370092675980874397265945177264702598929380544295193481322378721816476070729371813229094364350010101862393838172088864447803332092418041246949084178401713364385838881375015827144945794095153786964846571030388355787508753531991993961555254969042717605460196000799545102877923469722288616794557923288888983011269037240565601793493311068493308734157084807580786404284886544532698648917545300042554928459645078414300497757390122490443598743777136771649253346883604382743910194553040289048690026107067641101240869757"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("4575657650171602427"),
            n: a()(
              "24241748716979944158438708449394223653204961060765827143973368617884492447942261505523443187257601236103340265615559639527180630229197439866502776378686835096407353804066949909701285818617975495760522238490671487712029011986651201719536090542896321467265696201328659954098773412180034421153101058632557542704289472001536987018842653632943335838465498174097963939308591427024890952308345708116210029583441063643004077552629178414709522805324640781966790694937052743127193386201247420273918072292131700727741792837690434676101793120971404158497279036295245865400265894452436582085456827818149587723815498705423505525321"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("3567622298816760148"),
            n: a()(
              "24241973069830180936382486136851951013243348105350204138487124818017867602625899293258552187838336184674670049713933766933757351489570820842327703265958170901615264973187032752096701011614110157776312764845302570082529385495470140920146051878730342948396344845297689539640313824769114338228755143118971304481173971615303964077469979652053857783729373752576433365489059477702349286208930722931204796741218051283105702556757466403365671339510414300696164894372274177945557949148910985421194213163965384331982024228279179527914200131998654289345727195757973563789660861631701724424526652398311923904246625005126377592521"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("17553063345690371958"),
            n: a()(
              "24241351281279299145481747591583493078714093870975713145334774261321717014781399628806087038848831852485223813136532926712665125270156627916952445277417726147982780684777659771520097728759904421321965854937862064740047454279621386406085143534690226076281213842173610596031643343879891078193115303418753930218318027953591820866890833986120632305938339616731461135194085454784667673649470129245909222026882631141387315757782391400515676373846987208768872585135598971809900399024770733365259205359339785306556181974113602739399615870858743653524190023863576735524226166101143210526674060026402436659365308688510078690497"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("9277528552786967144"),
            n: a()(
              "24238883792812457903440955355642945950073022904970495801657093251869089713665121911149481234050853934233122064092523442293485485973465562612462219587481815730600402639326960136165554757892118468323726552797797164131902401769109455064629623949487693529716691024261405998062219772670890185173102183412411788189060292277688538193979326171472099753319325396308639069346901555802056221461406051787468350371495259148993101781275112408866779921537695676863740570738579953904002087945727029190297738095608918499336688211985497328456484829874330588018880380000963974882409830117909102404397518375709893711959298913212944063661"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("6568519800617090630"),
            n: a()(
              "24239588619862180508360098040512418478680581611170711472883928025686825099356249917712225099148223711077059432200028063463093865372091311205580643550051338386984879877676235105123154065518600959875711395451795757738760134829594597167255271693432072928388818915612111091816614607170457231661478416252209722562831276455953742376708783408890398220602426478965073031487055861137035030458199714371038052587482387852918218274226889973351746476739523268586850465610743992484692267611070713846948961575290727414876842104679461061769756369084968039212031985243195756288727866220885995292271051896140306080831566727722276074957"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("15281512440970464298"),
            n: a()(
              "24239599512582931255427359431270572618952258131975769988260722303793575773752906274343700600720098035285579177975758854783208633709515855105374263407538462905252408613429494890312418721520791650769366216794922936974747169144475850347680874367281918740311749178059811810094869294916305229616949847003803916684366149987503343184025245931779539066699101382363380634723870546611475521905446162854714187876049892459528476639455612521723735146705760038501370073301822766125048910027686879641453113850638808677316725452385146298771974291225307327761780054966757171689178074696096619801471350533150098368772709207148837901569"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("5249484155803885630"),
            n: a()(
              "24241265362203342369326328988460290759229617577623644619423503233932740075020161659571459870131599238665537387406219165949998870768595835314138560518720219669643365406220763480511872529480745144790239904422851448607682345196590211016662588012961680376371675762676332978139225933779099960536287742756092033539932302005664752819588590041459954217936610254734136991222417370010309428640594262604322713225993786279478042930507895472883113560516617327048112388283614781108894590930969640925430277232319453256199767091017235183579120241841848123248729513184343705728200298718504847249596611130093167582769393799885361028241"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("13541485698777891424"),
            n: a()(
              "24250582346038918253489590685273447797501021440754250552376556841251766168493300467201436977700810867213865077002754295254311264997981306507395212023425442763995925057937373861855081818382878597813104903647701486401235514293882661190390724306994977405565333072540104439523086038432800600883214234200236263214845445582364913787344216841610255185049453059347714444482989937073942074055145452916055812809467822364750111177789684519275729574001771486570693691791685231682148674414389652792950646465738793767111954048363986885331827825877145559966247324980948121305820656101676302232547121578841113489085078177977779644273"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("16862300725120269413"),
            n: a()(
              "24254000742908910780642772836620313045262355961163729937569619383555249902029716060200419148391019170804222412071963596191785861586891063699072641162488871066133046961090009396955121728733384027955976513502449787476821410788951310882648123274289437430318341855536075267235356097809280385965583038417386084366145339901748119758697655135929934549969707460599883140539174983072516221417031945054555985803873960199525313057600306925514544833040037018227697686306101849187175034825584965708811367071337597817211252921279005367930151150461576976714469449048972877200165293128214220683948771740718174833101709208764642734009"
            ),
            e: 65537,
          },
          {
            fingerprint: a()("146161090623767708"),
            n: a()(
              "24253495355592939862541792106837927970578028684159052648663928248811410107333457728279277109502147340136333426729884744926183857264572402670419957082851015100418465126428222680133281570470371040523800642216862572710828580502430077960118583163279583538688255309017584970719200470208489986071618868024733969564549249389837986957516912955145904703360486166231033108413849041302009270425608550404235410771038637642469917472911594357670299410706994996555343504517052658790568611125226416060186111837634873507795341827902708071697966649511858963499400578689407839770254246385600914558793037831000053896621164798032464177741"
            ),
            e: 65537,
          },
        ].reduce((e, t) => {
          let { fingerprint: n, ...s } = t;
          return e.set(n.toString(), s), e;
        }, new Map());
        var o = n(9396),
          r = n(96847),
          c = n.n(r),
          d = n(48287).hp;
        const u = n(87263),
          l = n(72469),
          p = n(21051),
          f = n(25356),
          g = n(80071),
          h = n(28427),
          m = 20;
        async function y(e, t) {
          let n = g.generateRandomBytes(16);
          const s = g.readBigIntFromBuffer(n, !1, !0),
            a = await e.send(
              new (c().ReqPqMulti)({
                nonce: s,
              })
            );
          if (
            (t.debug("Starting authKey generation step 1"),
            !(a instanceof c().ResPQ))
          )
            throw new o.SecurityError(`Step 1 answer was ${a}`);
          if (a.nonce.neq(s))
            throw new o.SecurityError("Step 1 invalid nonce from server");
          const r = g.readBigIntFromBuffer(a.pq, !1, !0);
          t.debug("Finished authKey generation step 1");
          const { p: y, q: _ } = f.factorize(r),
            b = g.getByteArray(y),
            w = g.getByteArray(_);
          n = g.generateRandomBytes(32);
          const v = g.readBigIntFromBuffer(n, !0, !0),
            A = new (c().PQInnerData)({
              pq: g.getByteArray(r),
              p: b,
              q: w,
              nonce: a.nonce,
              serverNonce: a.serverNonce,
              newNonce: v,
            }).getBytes();
          if (A.length > 144)
            throw new o.SecurityError("Step 1 invalid nonce from server");
          let S, I;
          for (const e of a.serverPublicKeyFingerprints)
            if (((I = i.get(e.toString())), void 0 !== I)) {
              S = e;
              break;
            }
          if (void 0 === S || void 0 === I)
            throw new o.SecurityError(
              "Step 2 could not find a valid key for fingerprints"
            );
          const C = g.generateRandomBytes(192 - A.length),
            P = d.concat([A, C]),
            M = d.from(P).reverse();
          let k;
          for (let e = 0; e < m; e++) {
            const e = g.generateRandomBytes(32),
              n = await g.sha256(d.concat([e, P])),
              s = d.concat([M, n]),
              a = new l(e, d.alloc(32)).encryptIge(s),
              i = g.bufferXor(e, await g.sha256(a)),
              o = d.concat([i, a]),
              r = g.readBigIntFromBuffer(o, !1, !1);
            if (r.greaterOrEquals(I.n)) {
              t.debug("Aes key greater than RSA. retrying");
              continue;
            }
            const c = g.modExp(r, u(I.e), I.n);
            k = g.readBufferFromBigInt(c, 256, !1, !1);
            break;
          }
          if (void 0 === k)
            throw new o.SecurityError(
              "Step 2 could create a secure encrypted key"
            );
          t.debug("Step 2 : Generated a secure aes encrypted data");
          const R = await e.send(
            new (c().ReqDHParams)({
              nonce: a.nonce,
              serverNonce: a.serverNonce,
              p: b,
              q: w,
              publicKeyFingerprint: S,
              encryptedData: k,
            })
          );
          if (
            !(
              R instanceof c().ServerDHParamsOk ||
              R instanceof c().ServerDHParamsFail
            )
          )
            throw new Error(`Step 2.1 answer was ${R}`);
          if (R.nonce.neq(a.nonce))
            throw new o.SecurityError("Step 2 invalid nonce from server");
          if (R.serverNonce.neq(a.serverNonce))
            throw new o.SecurityError(
              "Step 2 invalid server nonce from server"
            );
          if (R instanceof c().ServerDHParamsFail) {
            const e = await g.sha1(g.toSignedLittleBuffer(v, 32).slice(4, 20)),
              t = g.readBigIntFromBuffer(e, !0, !0);
            if (R.newNonceHash.neq(t))
              throw new o.SecurityError(
                "Step 2 invalid DH fail nonce from server"
              );
          }
          if (!(R instanceof c().ServerDHParamsOk))
            throw new Error(`Step 2.2 answer was ${R}`);
          t.debug("Finished authKey generation step 2"),
            t.debug("Starting authKey generation step 3");
          const { key: E, iv: T } = await g.generateKeyDataFromNonce(
            a.serverNonce,
            v
          );
          if (R.encryptedAnswer.length % 16 != 0)
            throw new o.SecurityError("Step 3 AES block size mismatch");
          const B = new l(E, T),
            D = B.decryptIge(R.encryptedAnswer),
            U = new h(D),
            x = U.read(20),
            V = U.tgReadObject();
          if (!(V instanceof c().ServerDHInnerData))
            throw new Error(`Step 3 answer was ${V}`);
          const F = await g.sha1(V.getBytes());
          if (!x.equals(F))
            throw new o.SecurityError("Step 3 Invalid hash answer");
          if (V.nonce.neq(a.nonce))
            throw new o.SecurityError(
              "Step 3 Invalid nonce in encrypted answer"
            );
          if (V.serverNonce.neq(a.serverNonce))
            throw new o.SecurityError(
              "Step 3 Invalid server nonce in encrypted answer"
            );
          const N = g.readBigIntFromBuffer(V.dhPrime, !1, !1),
            q = g.readBigIntFromBuffer(V.gA, !1, !1),
            O = V.serverTime - Math.floor(Date.now() / 1e3),
            H = g.readBigIntFromBuffer(g.generateRandomBytes(256), !1, !1),
            L = g.modExp(u(V.g), H, N),
            G = g.modExp(q, H, N);
          if (q.lesserOrEquals(1))
            throw new o.SecurityError("Step 3 failed ga > 1 check");
          if (L.lesserOrEquals(1))
            throw new o.SecurityError("Step 3 failed gb > 1 check");
          if (q.greater(N.minus(1)))
            throw new o.SecurityError("Step 3 failed ga > dh_prime - 1 check");
          const j = u(2).pow(1984);
          if (!q.greaterOrEquals(j) || !q.lesserOrEquals(N.minus(j)))
            throw new o.SecurityError(
              "Step 3 failed dh_prime - 2^{2048-64} < ga < 2^{2048-64} check"
            );
          if (!L.greaterOrEquals(j) || !L.lesserOrEquals(N.minus(j)))
            throw new o.SecurityError(
              "Step 3 failed dh_prime - 2^{2048-64} < gb < 2^{2048-64} check"
            );
          const W = new (c().ClientDHInnerData)({
              nonce: a.nonce,
              serverNonce: a.serverNonce,
              retryId: u.zero,
              gB: g.getByteArray(L, !1),
            }).getBytes(),
            z = d.concat([await g.sha1(W), W]),
            K = B.encryptIge(z),
            $ = await e.send(
              new (c().SetClientDHParams)({
                nonce: a.nonce,
                serverNonce: a.serverNonce,
                encryptedData: K,
              })
            ),
            J = [c().DhGenOk, c().DhGenRetry, c().DhGenFail];
          if (!($ instanceof J[0] || $ instanceof J[1] || $ instanceof J[2]))
            throw new Error(`Step 3.1 answer was ${$}`);
          const { name: Z } = $.constructor;
          if ($.nonce.neq(a.nonce))
            throw new o.SecurityError(`Step 3 invalid ${Z} nonce from server`);
          if ($.serverNonce.neq(a.serverNonce))
            throw new o.SecurityError(
              `Step 3 invalid ${Z} server nonce from server`
            );
          const Q = new p();
          await Q.setKey(g.getByteArray(G));
          const Y =
              1 + ["DhGenOk", "DhGenRetry", "DhGenFail"].indexOf($.className),
            X = await Q.calcNewNonceHash(v, Y);
          if ($[`newNonceHash${Y}`].neq(X))
            throw new o.SecurityError("Step 3 invalid new nonce hash");
          if (!($ instanceof c().DhGenOk))
            throw new Error(`Step 3.2 answer was ${$}`);
          return (
            t.debug("Finished authKey generation step 3"),
            {
              authKey: Q,
              timeOffset: O,
            }
          );
        }
      },
      83821: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(87263),
          i = n(35897),
          o = n(28427),
          { InvalidBufferError: r } = n(48383),
          { toSignedLittleBuffer: c } = n(80071);
        e.exports = class {
          constructor(e, t) {
            (this._state = new i(e, t)), (this._connection = e);
          }
          async send(e) {
            let t = e.getBytes(),
              n = this._state._getNewMsgId();
            const i = c(n, 8),
              d = s.alloc(4);
            d.writeInt32LE(t.length, 0);
            const u = s.concat([s.concat([s.alloc(8), i, d]), t]);
            if (
              (await this._connection.send(u),
              (t = await this._connection.recv()),
              t.length < 8)
            )
              throw new r(t);
            const l = new o(t);
            if (l.readLong().neq(a(0))) throw new Error("Bad authKeyId");
            if (((n = l.readLong()), n.eq(a(0)))) throw new Error("Bad msgId");
            if (l.readInt() <= 0) throw new Error("Bad length");
            return l.tgReadObject();
          }
        };
      },
      11523: (e, t, n) => {
        function s(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const { RPCError: a } = n(9396),
          i = n(83821),
          o = n(35897),
          r = n(80071),
          c = n(21051),
          { doAuthentication: d } = n(83620),
          u = n(9309),
          l = n(30293),
          p = n(31187),
          f = n(83701),
          {
            MsgsAck: g,
            upload: h,
            MsgsStateInfo: m,
            Pong: y,
          } = n(43355).constructors,
          _ = n(77552),
          b = n(28427),
          w = n(40041),
          {
            UpdateConnectionState: v,
            UpdateServerTimeOffset: A,
            UpdateServerSalt: S,
          } = n(44337),
          { BadMessageError: I } = n(48383),
          {
            BadServerSalt: C,
            BadMsgNotification: P,
            MsgDetailedInfo: M,
            MsgNewDetailedInfo: k,
            NewSessionCreated: R,
            FutureSalts: E,
            MsgsStateReq: T,
            MsgResendReq: B,
            MsgsAllInfo: D,
            HttpWait: U,
          } = n(43355).constructors,
          { SecurityError: x } = n(48383),
          { InvalidBufferError: V } = n(48383),
          { RPCMessageToError: F } = n(9396),
          { TypeNotFoundError: N } = n(48383),
          { sendToOrigin: q } = n(47654),
          { requests: O } = n(43355);
        class H {
          constructor(e, t) {
            s(this, "logWithIndex", {
              debug: this.logWithIndexCallback("debug"),
              log: this.logWithIndexCallback("log"),
              warn: this.logWithIndexCallback("warn"),
              error: this.logWithIndexCallback("error"),
            });
            const n = {
              ...H.DEFAULT_OPTIONS,
              ...t,
            };
            (this._connection = void 0),
              (this._fallbackConnection = void 0),
              (this._shouldForceHttpTransport = n.shouldForceHttpTransport),
              (this._shouldAllowHttpTransport = n.shouldAllowHttpTransport),
              (this._log = n.logger),
              (this._dcId = n.dcId),
              (this._senderIndex = n.senderIndex),
              (this._retries = n.retries),
              (this._retriesToFallback = n.retriesToFallback),
              (this._delay = n.delay),
              (this._retryMainConnectionDelay = n.retryMainConnectionDelay),
              (this._autoReconnect = n.autoReconnect),
              (this._connectTimeout = n.connectTimeout),
              (this._authKeyCallback = n.authKeyCallback),
              (this._updateCallback = n.updateCallback),
              (this._autoReconnectCallback = n.autoReconnectCallback),
              (this._isMainSender = n.isMainSender),
              (this._isExported = n.isExported),
              (this._onConnectionBreak = n.onConnectionBreak),
              (this._isFallback = !1),
              (this._getShouldDebugExportedSenders =
                n.getShouldDebugExportedSenders),
              (this.userDisconnected = !1),
              (this._user_connected = !1),
              (this.isReconnecting = !1),
              (this._disconnected = !0),
              (this._send_loop_handle = void 0),
              (this._long_poll_loop_handle = void 0),
              (this._recv_loop_handle = void 0),
              (this.authKey = e || new c()),
              (this._state = new o(this.authKey, this._log)),
              (this._send_queue = new _(this._state, this._log)),
              (this._send_queue_long_poll = new _(this._state, this._log)),
              (this._pending_state = new w()),
              (this._pending_ack = new Set()),
              (this._last_acks = []),
              (this._handlers = {
                [u.CONSTRUCTOR_ID]: this._handleRPCResult.bind(this),
                [l.CONSTRUCTOR_ID]: this._handleContainer.bind(this),
                [p.CONSTRUCTOR_ID]: this._handleGzipPacked.bind(this),
                [y.CONSTRUCTOR_ID]: this._handlePong.bind(this),
                [C.CONSTRUCTOR_ID]: this._handleBadServerSalt.bind(this),
                [P.CONSTRUCTOR_ID]: this._handleBadNotification.bind(this),
                [M.CONSTRUCTOR_ID]: this._handleDetailedInfo.bind(this),
                [k.CONSTRUCTOR_ID]: this._handleNewDetailedInfo.bind(this),
                [R.CONSTRUCTOR_ID]: this._handleNewSessionCreated.bind(this),
                [g.CONSTRUCTOR_ID]: this._handleAck.bind(this),
                [E.CONSTRUCTOR_ID]: this._handleFutureSalts.bind(this),
                [T.CONSTRUCTOR_ID]: this._handleStateForgotten.bind(this),
                [B.CONSTRUCTOR_ID]: this._handleStateForgotten.bind(this),
                [D.CONSTRUCTOR_ID]: this._handleMsgAll.bind(this),
              });
          }
          logWithIndexCallback(e) {
            var t = this;
            return function () {
              if (
                t._getShouldDebugExportedSenders &&
                t._getShouldDebugExportedSenders()
              ) {
                for (
                  var n = arguments.length, s = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  s[a] = arguments[a];
                console[e](
                  `[${t._isExported ? `idx=${t._senderIndex} ` : "M "}dcId=${
                    t._dcId
                  }]`,
                  ...s
                );
              }
            };
          }
          getConnection() {
            return this._isFallback
              ? this._fallbackConnection
              : this._connection;
          }
          async connect(e, t, n) {
            if (((this.userDisconnected = !1), this._user_connected && !t))
              return this._log.info("User is already connected!"), !1;
            (this.isConnecting = !0),
              (this._isFallback =
                this._shouldForceHttpTransport &&
                this._shouldAllowHttpTransport),
              (this._connection = e),
              (this._fallbackConnection = n);
            for (let e = 0; e < this._retries + this._retriesToFallback; e++)
              try {
                e >= this._retriesToFallback &&
                  this._shouldAllowHttpTransport &&
                  ((this._isFallback = !0),
                  this.logWithIndex.warn("Using fallback connection"),
                  this._log.warn("Using fallback connection")),
                  this.logWithIndex.warn("Connecting..."),
                  await this._connect(this.getConnection()),
                  this.logWithIndex.warn("Connected!"),
                  this._updateCallback &&
                    this._updateCallback(new v(v.connected));
                break;
              } catch (t) {
                this._updateCallback &&
                  0 === e &&
                  this._updateCallback(new v(v.disconnected)),
                  this._log.error(
                    `${
                      this._isFallback ? "HTTP" : "WebSocket"
                    } connection failed attempt: ${e + 1}`
                  ),
                  console.error(t),
                  await r.sleep(this._delay);
              }
            return (
              (this.isConnecting = !1),
              this._isFallback &&
                !this._shouldForceHttpTransport &&
                this.tryReconnectToMain(),
              !0
            );
          }
          async tryReconnectToMain() {
            if (
              this.isConnecting ||
              !this._isFallback ||
              this._isReconnectingToMain ||
              this.isReconnecting ||
              this._shouldForceHttpTransport ||
              this._isExported
            )
              await r.sleep(this._retryMainConnectionDelay);
            else {
              this._log.debug("Trying to reconnect to main connection"),
                (this._isReconnectingToMain = !0);
              try {
                await this._connection.connect(),
                  this._log.info("Reconnected to main connection"),
                  this.logWithIndex.warn("Reconnected to main connection"),
                  (this.isReconnecting = !0),
                  await this._disconnect(this._fallbackConnection),
                  await this.connect(
                    this._connection,
                    !0,
                    this._fallbackConnection
                  ),
                  (this.isReconnecting = !1),
                  (this._isReconnectingToMain = !1);
              } catch (e) {
                (this.isReconnecting = !1),
                  (this._isReconnectingToMain = !1),
                  this._log.error(
                    `Failed to reconnect to main connection, retrying in ${this._retryMainConnectionDelay}ms`
                  ),
                  await r.sleep(this._retryMainConnectionDelay),
                  this.tryReconnectToMain();
              }
            }
          }
          isConnected() {
            return this._user_connected;
          }
          async disconnect() {
            (this.userDisconnected = !0),
              this.logWithIndex.warn("Disconnecting..."),
              await this._disconnect(this.getConnection());
          }
          destroy() {
            this._send_queue.clear();
          }
          send(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const s = new f(e, t);
            return (
              n
                ? this._send_queue_long_poll.append(s)
                : (this.logWithIndex.debug(`Send ${e.className}`),
                  this._send_queue.append(s)),
              s.promise
            );
          }
          addStateToQueue(e) {
            this._send_queue.append(e);
          }
          async sendBeacon(e) {
            if (!this._user_connected)
              throw new Error("Cannot send requests while disconnected");
            const t = new f(e, void 0),
              n = await this._send_queue.getBeacon(t),
              s = await this._state.encryptMessageData(n);
            q({
              type: "sendBeacon",
              data: s,
              url: this._fallbackConnection.socket.website,
            });
          }
          async _connect(e) {
            if (
              (e.isConnected() ||
                (this._log.info("Connecting to {0}...".replace("{0}", e)),
                await e.connect(),
                this._log.debug("Connection success!")),
              this.authKey.getKey())
            )
              (this._authenticated = !0),
                this._log.debug("Already have an auth key ...");
            else {
              const t = new i(e, this._log);
              this._log.debug("New auth_key attempt ...");
              const n = await d(t, this._log);
              this._log.debug("Generated new auth_key successfully"),
                await this.authKey.setKey(n.authKey),
                (this._state.timeOffset = n.timeOffset),
                this._updateCallback &&
                  this._updateCallback(new A(this._state.timeOffset)),
                this._authKeyCallback &&
                  (await this._authKeyCallback(this.authKey, this._dcId));
            }
            (this._user_connected = !0),
              (this.isReconnecting = !1),
              this._send_loop_handle ||
                (this._log.debug("Starting send loop"),
                (this._send_loop_handle = this._sendLoop())),
              this._recv_loop_handle ||
                (this._log.debug("Starting receive loop"),
                (this._recv_loop_handle = this._recvLoop())),
              !this._long_poll_loop_handle &&
                e.shouldLongPoll &&
                (this._log.debug("Starting long-poll loop"),
                (this._long_poll_loop_handle = this._longPollLoop())),
              this._log.info(
                "Connection to %s complete!".replace("%s", e.toString())
              );
          }
          async _disconnect(e) {
            this._updateCallback && this._updateCallback(new v(v.disconnected)),
              void 0 !== e
                ? (this._log.info(
                    "Disconnecting from %s...".replace("%s", e.toString())
                  ),
                  (this._user_connected = !1),
                  this._log.debug("Closing current connection..."),
                  this.logWithIndex.warn("Disconnecting"),
                  await e.disconnect())
                : this._log.info(
                    "Not disconnecting (already have no connection)"
                  );
          }
          async _longPollLoop() {
            for (
              ;
              this._user_connected &&
              !this.isReconnecting &&
              this._isFallback &&
              this.getConnection().shouldLongPoll;

            ) {
              await this._send_queue_long_poll.wait();
              const e = await this._send_queue_long_poll.get();
              if (this.isReconnecting || !this._isFallback)
                return void (this._long_poll_loop_handle = void 0);
              if (!e) continue;
              let { data: t } = e;
              const { batch: n } = e;
              this._log.debug(
                `Encrypting ${n.length} message(s) in ${t.length} bytes for sending`
              ),
                (t = await this._state.encryptMessageData(t));
              try {
                await this._fallbackConnection.send(t);
              } catch (e) {
                return (
                  this._log.error(e),
                  this._log.info("Connection closed while sending data"),
                  (this._long_poll_loop_handle = void 0),
                  (this.isSendingLongPoll = !1),
                  void (this.userDisconnected || this.reconnect())
                );
              }
              (this.isSendingLongPoll = !1), this.checkLongPoll();
            }
            this._long_poll_loop_handle = void 0;
          }
          async _sendLoop() {
            for (
              this._send_queue.prepend(this._pending_state.values()),
                this._pending_state.clear();
              this._user_connected && !this.isReconnecting;

            ) {
              const e = () => {
                if (this._pending_ack.size) {
                  const e = new f(
                    new g({
                      msgIds: Array(...this._pending_ack),
                    })
                  );
                  this._send_queue.append(e),
                    this._last_acks.push(e),
                    this._last_acks.length >= 10 && this._last_acks.shift(),
                    this._pending_ack.clear();
                }
              };
              e(),
                this.logWithIndex.debug(
                  `Waiting for messages to send... ${this.isReconnecting}`
                ),
                this._log.debug(
                  `Waiting for messages to send... ${this.isReconnecting}`
                ),
                await this._send_queue.wait(),
                this._isFallback &&
                  this.send(
                    new U({
                      maxDelay: 0,
                      waitAfter: 0,
                      maxWait: 0,
                    })
                  ),
                e();
              const t = await this._send_queue.get();
              if (
                (this.logWithIndex.debug(
                  `Got ${t?.batch.length} message(s) to send`
                ),
                !t)
              )
                continue;
              let { data: n } = t;
              const { batch: s } = t;
              for (const e of s)
                if (Array.isArray(e))
                  for (const t of e)
                    "request" === t.request.classType &&
                      "HttpWait" !== t.request.className &&
                      this._pending_state.set(t.msgId, t);
                else
                  e.request instanceof O.PingDelayDisconnect
                    ? this._pending_state.set(e.request.pingId, e)
                    : "request" === e.request.classType &&
                      "HttpWait" !== e.request.className &&
                      this._pending_state.set(e.msgId, e);
              if (this.isReconnecting)
                return (
                  this.logWithIndex.debug("Reconnecting :("),
                  void (this._send_loop_handle = void 0)
                );
              this._log.debug(
                `Encrypting ${s.length} message(s) in ${n.length} bytes for sending`
              ),
                this.logWithIndex.debug(
                  "Sending",
                  s.map((e) => e.request.className)
                ),
                (n = await this._state.encryptMessageData(n));
              try {
                await this.getConnection().send(n);
              } catch (e) {
                return (
                  this.logWithIndex.debug(
                    `Connection closed while sending data ${e}`
                  ),
                  this._log.error(e),
                  this._log.info("Connection closed while sending data"),
                  (this._send_loop_handle = void 0),
                  void (this.userDisconnected || this.reconnect())
                );
              } finally {
                for (const e of s)
                  if (Array.isArray(e))
                    for (const t of e)
                      "HttpWait" === t.request.className && e.resolve();
                  else "HttpWait" === e.request.className && e.resolve();
                this.logWithIndex.debug(
                  "Encrypted messages put in a queue to be sent"
                ),
                  this._log.debug(
                    "Encrypted messages put in a queue to be sent"
                  );
              }
            }
            this._send_loop_handle = void 0;
          }
          async _recvLoop() {
            let e, t;
            for (; this._user_connected && !this.isReconnecting; ) {
              this._log.debug("Receiving items from the network..."),
                this.logWithIndex.debug("Receiving items from the network...");
              try {
                e = await this.getConnection().recv();
              } catch (e) {
                return (
                  this.userDisconnected ||
                    (this._log.error(e),
                    this._log.warn("Connection closed while receiving data"),
                    this.reconnect()),
                  void (this._recv_loop_handle = void 0)
                );
              }
              try {
                t = await this._state.decryptMessageData(e);
              } catch (e) {
                if (
                  (this.logWithIndex.debug(
                    `Error while receiving items from the network ${e.toString()}`
                  ),
                  e instanceof N)
                ) {
                  this._log.info(
                    `Type ${e.invalidConstructorId} not found, remaining data ${e.remaining}`
                  );
                  continue;
                }
                if (e instanceof x) {
                  this._log.warn(
                    `Security error while unpacking a received message: ${e}`
                  );
                  continue;
                }
                return e instanceof V
                  ? (404 === e.code
                      ? this._handleBadAuthKey()
                      : (this._log.warn(
                          `Invalid buffer ${e.code} for dc ${this._dcId}`
                        ),
                        this.reconnect()),
                    void (this._recv_loop_handle = void 0))
                  : (this._log.error("Unhandled error while receiving data"),
                    this._log.error(e),
                    this.reconnect(),
                    void (this._recv_loop_handle = void 0));
              }
              try {
                await this._processMessage(t);
              } catch (e) {
                e instanceof a
                  ? ("AUTH_KEY_UNREGISTERED" !== e.message &&
                      "SESSION_REVOKED" !== e.message) ||
                    this._handleBadAuthKey(!0)
                  : (this._log.error("Unhandled error while receiving data"),
                    this._log.error(e));
              }
              this.checkLongPoll();
            }
            this._recv_loop_handle = void 0;
          }
          checkLongPoll() {
            !this.isSendingLongPoll &&
              this._isFallback &&
              ((this.isSendingLongPoll = !0),
              this.send(
                new U({
                  maxDelay: 500,
                  waitAfter: 150,
                  maxWait: 3e3,
                }),
                void 0,
                !0
              ));
          }
          _handleBadAuthKey(e) {
            (e && this._isMainSender) ||
              (this._log.warn(
                `Broken authorization key for dc ${this._dcId}, resetting...`
              ),
              this._isMainSender && this._updateCallback
                ? this._updateCallback(new v(v.broken))
                : !this._isMainSender &&
                  this._onConnectionBreak &&
                  this._onConnectionBreak(this._dcId));
          }
          async _processMessage(e) {
            if ("MsgsAck" === e.obj.className) return;
            this.logWithIndex.debug(`Process message ${e.obj.className}`),
              this._pending_ack.add(e.msgId),
              this.getConnection().shouldLongPoll &&
                this._send_queue.setReady(!0),
              (e.obj = await e.obj);
            let t = this._handlers[e.obj.CONSTRUCTOR_ID];
            t || (t = this._handleUpdate.bind(this)), await t(e);
          }
          _popStates(e) {
            const t = this._pending_state.getAndDelete(e);
            if (t) return [t];
            const n = [];
            for (const t of this._pending_state.values())
              t.containerId?.equals(e) && n.push(t.msgId);
            if (n.length) {
              const e = [];
              for (const t of n) e.push(this._pending_state.getAndDelete(t));
              return e;
            }
            for (const t of this._last_acks) if (t.msgId === e) return [t];
            return [];
          }
          _handleRPCResult(e) {
            const t = e.obj,
              n = this._pending_state.getAndDelete(t.reqMsgId);
            if (
              (this._log.debug(`Handling RPC result for message ${t.reqMsgId}`),
              n)
            ) {
              if (t.error) {
                const e = F(t.error, n.request);
                throw (
                  (this._send_queue.append(
                    new f(
                      new g({
                        msgIds: [n.msgId],
                      })
                    )
                  ),
                  n.reject(e),
                  e)
                );
              }
              try {
                const e = new b(t.body),
                  s = n.request.readResult(e);
                this.logWithIndex.debug("Handling RPC result", s), n.resolve(s);
              } catch (e) {
                throw (n.reject(e), e);
              }
            } else
              try {
                if (!(new b(t.body).tgReadObject() instanceof h.File))
                  throw new N("Not an upload.File");
              } catch (e) {
                if (e instanceof N)
                  return void this._log.info(
                    `Received response without parent request: ${t.body}`
                  );
                if (this._isFallback) return;
                throw e;
              }
          }
          async _handleContainer(e) {
            this._log.debug("Handling container");
            for (const t of e.obj.messages) await this._processMessage(t);
          }
          async _handleGzipPacked(e) {
            this._log.debug("Handling gzipped data");
            const t = new b(e.obj.data);
            (e.obj = t.tgReadObject()), await this._processMessage(e);
          }
          _handleUpdate(e) {
            2331323052 === e.obj.SUBCLASS_OF_ID
              ? (this._log.debug(`Handling update ${e.obj.className}`),
                this._updateCallback && this._updateCallback(e.obj))
              : this._log.warn(
                  `Note: ${e.obj.className} is not an update, not dispatching it`
                );
          }
          _handlePong(e) {
            const t = e.obj,
              n = this._state.updateTimeOffset(e.msgId);
            this._updateCallback && this._updateCallback(new A(n)),
              this._log.debug(`Handling pong for message ${t.pingId}`);
            const s = this._pending_state.getAndDelete(t.pingId);
            s && s.resolve(t);
          }
          _handleBadServerSalt(e) {
            const t = e.obj;
            this._log.debug(`Handling bad salt for message ${t.badMsgId}`),
              (this._state.salt = t.newServerSalt),
              this._updateCallback &&
                this._updateCallback(new S(t.newServerSalt));
            const n = this._popStates(t.badMsgId);
            this._send_queue.extend(n),
              this._log.debug(`${n.length} message(s) will be resent`);
          }
          _handleBadNotification(e) {
            const t = e.obj,
              n = this._popStates(t.badMsgId);
            if (
              (this._log.debug(`Handling bad msg ${JSON.stringify(t)}`),
              [16, 17, 64].includes(t.errorCode))
            ) {
              const t = this._state.updateTimeOffset(e.msgId);
              this._updateCallback && this._updateCallback(new A(t)),
                this._log.info(
                  `System clock is wrong, set time offset to ${t}s`
                );
            } else if (32 === t.errorCode) this._state._sequence += 64;
            else {
              if (33 !== t.errorCode) {
                for (const e of n) e.reject(new I(e.request, t.errorCode));
                return;
              }
              this._state._sequence -= 16;
            }
            this._send_queue.extend(n),
              this._log.debug(
                `${n.length} messages will be resent due to bad msg`
              );
          }
          _handleDetailedInfo(e) {
            const t = e.obj.answerMsgId;
            this._log.debug(`Handling detailed info for message ${t}`),
              this._pending_ack.add(t);
          }
          _handleNewDetailedInfo(e) {
            const t = e.obj.answerMsgId;
            this._log.debug(`Handling new detailed info for message ${t}`),
              this._pending_ack.add(t);
          }
          _handleNewSessionCreated(e) {
            this._log.debug("Handling new session created"),
              (this._state.salt = e.obj.serverSalt),
              this._updateCallback &&
                this._updateCallback(new S(e.obj.serverSalt));
          }
          _handleAck() {}
          _handleFutureSalts(e) {
            this._log.debug(`Handling future salts for message ${e.msgId}`);
            const t = this._pending_state.getAndDelete(e.msgId);
            t && t.resolve(e.obj);
          }
          _handleStateForgotten(e) {
            this._send_queue.append(
              new f(
                new m({
                  msgId: e.msgId,
                  query: String.fromCharCode(1).repeat(e.obj.msgIds),
                })
              )
            );
          }
          _handleMsgAll(e) {}
          reconnect() {
            this._user_connected &&
              !this.isReconnecting &&
              ((this.isReconnecting = !0),
              r.sleep(1e3).then(() => {
                this.logWithIndex.log("Reconnecting..."),
                  this._log.info("Started reconnecting"),
                  this._reconnect();
              }));
          }
          async _reconnect() {
            this._log.debug("Closing current connection...");
            try {
              this.logWithIndex.warn(
                "[Reconnect] Closing current connection..."
              ),
                await this._disconnect(this.getConnection());
            } catch (e) {
              this._log.warn(e);
            }
            this._send_queue.append(void 0), this._state.reset();
            const e = new this._connection.constructor(
                this._connection._ip,
                this._connection._port,
                this._connection._dcId,
                this._connection._log,
                this._connection._testServers
              ),
              t = new this._fallbackConnection.constructor(
                this._connection._ip,
                this._connection._port,
                this._connection._dcId,
                this._connection._log,
                this._connection._testServers
              );
            await this.connect(e, !0, t),
              (this.isReconnecting = !1),
              this._send_queue.prepend(this._pending_state.values()),
              this._pending_state.clear(),
              this._autoReconnectCallback &&
                (await this._autoReconnectCallback());
          }
        }
        s(H, "DEFAULT_OPTIONS", {
          logger: void 0,
          retries: 1 / 0,
          retriesToFallback: 1,
          delay: 2e3,
          retryMainConnectionDelay: 1e4,
          shouldForceHttpTransport: !1,
          shouldAllowHttpTransport: !1,
          autoReconnect: !0,
          connectTimeout: void 0,
          authKeyCallback: void 0,
          updateCallback: void 0,
          autoReconnectCallback: void 0,
          isMainSender: void 0,
          onConnectionBreak: void 0,
          isExported: void 0,
          getShouldDebugExportedSenders: void 0,
        }),
          (e.exports = H);
      },
      35897: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(87263),
          i = n(7692),
          o = n(80071),
          r = n(72469),
          c = n(28427),
          d = n(31187),
          { TLMessage: u } = n(48075),
          { SecurityError: l, InvalidBufferError: p } = n(48383),
          { InvokeAfterMsg: f } = n(43355).requests,
          { toSignedLittleBuffer: g } = n(80071),
          { postMessageListenInWorker: h } = n(71337);
        let m = 0;
        h("setServerSalt", (e, t) => {
          m = a(t.data);
        }),
          (e.exports = class {
            constructor(e, t) {
              let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                s =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
              (this.authKey = e),
                (this._log = t),
                (this._isCall = n),
                (this._isOutgoing = s),
                (this.timeOffset = 0),
                (this.salt = 0),
                (this.id = void 0),
                (this._sequence = void 0),
                (this._lastMsgId = void 0),
                (this.msgIds = []),
                this.reset();
            }
            reset() {
              (this.id = o.generateRandomLong(!0)),
                (this._sequence = 0),
                (this._lastMsgId = a(0)),
                (this.msgIds = []);
            }
            updateMessageId(e) {
              e.msgId = this._getNewMsgId();
            }
            async _calcKey(e, t, n) {
              const a = this._isCall
                  ? 128 + (this._isOutgoing ^ n ? 8 : 0)
                  : !0 === n
                  ? 0
                  : 8,
                [i, r] = await Promise.all([
                  o.sha256(s.concat([t, e.slice(a, a + 36)])),
                  o.sha256(s.concat([e.slice(a + 40, a + 76), t])),
                ]),
                c = s.concat([i.slice(0, 8), r.slice(8, 24), i.slice(24, 32)]);
              return this._isCall
                ? {
                    key: c,
                    iv: s.concat([
                      r.slice(0, 4),
                      i.slice(8, 16),
                      r.slice(24, 28),
                    ]),
                  }
                : {
                    key: c,
                    iv: s.concat([
                      r.slice(0, 8),
                      i.slice(8, 24),
                      r.slice(24, 32),
                    ]),
                  };
            }
            async writeDataAsMessage(e, t, n, a) {
              const i = this._getNewMsgId(),
                o = this._getSeqNo(n);
              let r;
              r = a
                ? await d.gzipIfSmaller(
                    n,
                    new f({
                      msgId: a,
                      query: {
                        getBytes: () => t,
                      },
                    }).getBytes()
                  )
                : await d.gzipIfSmaller(n, t);
              const c = s.alloc(4);
              c.writeInt32LE(o, 0);
              const u = s.alloc(4);
              u.writeInt32LE(r.length, 0);
              const l = g(i, 8);
              return e.write(s.concat([l, c, u])), e.write(r), i;
            }
            async encryptMessageData(e) {
              if ((await this.authKey.waitForKey(), this._isCall)) {
                const t = 128 + (this._isOutgoing ? 0 : 8),
                  n = e.length;
                (e = s.from(e)),
                  n % 4 != 0 &&
                    (e = s.concat([
                      e,
                      s.from(new Array(4 - (n % 4)).fill(32)),
                    ]));
                const a = (
                    await o.sha256(
                      s.concat([
                        this.authKey.getKey().slice(88 + t, 88 + t + 32),
                        s.from(e),
                      ])
                    )
                  ).slice(8, 24),
                  { iv: r, key: c } = await this._calcKey(
                    this.authKey.getKey(),
                    a,
                    !0
                  );
                return (
                  (e = o.convertToLittle(new i.CTR(c, r).encrypt(e))),
                  s.concat([a, e])
                );
              }
              {
                const t =
                    (this.salt && 0 != this.salt) || 0 == m
                      ? g(this.salt, 8)
                      : g(m, 8),
                  n = g(this.id, 8);
                e = s.concat([s.concat([t, n]), e]);
                const a = o.generateRandomBytes(
                    o.mod(-(e.length + 12), 16) + 12
                  ),
                  i = (
                    await o.sha256(
                      s.concat([this.authKey.getKey().slice(88, 120), e, a])
                    )
                  ).slice(8, 24),
                  { iv: c, key: d } = await this._calcKey(
                    this.authKey.getKey(),
                    i,
                    !0
                  ),
                  u = o.readBufferFromBigInt(this.authKey.keyId, 8);
                return s.concat([
                  u,
                  i,
                  new r(d, c).encryptIge(s.concat([e, a])),
                ]);
              }
            }
            async decryptMessageData(e) {
              if (e.length < 8) throw new p(e);
              if (e.length < 0)
                throw new l("Server replied with negative length");
              if (e.length % 4 != 0 && !this._isCall)
                throw new l("Server replied with length not divisible by 4");
              if (
                !this._isCall &&
                o.readBigIntFromBuffer(e.slice(0, 8)).neq(this.authKey.keyId)
              )
                throw new l("Server replied with an invalid auth key");
              const t = this._isCall ? e.slice(0, 16) : e.slice(8, 24),
                n = this._isCall ? 128 + (this.isOutgoing ? 8 : 0) : void 0,
                { iv: a, key: d } = await this._calcKey(
                  this.authKey.getKey(),
                  t,
                  !1
                );
              if (this._isCall) {
                const t = (e = e.slice(16)).length;
                (e = s.concat([e, s.from(new Array(4 - (t % 4)).fill(0))])),
                  (e = (e = o.convertToLittle(
                    new i.CTR(d, a).decrypt(e)
                  )).slice(0, t));
              } else
                e = new r(d, a).decryptIge(
                  this._isCall ? e.slice(16) : e.slice(24)
                );
              const f = this._isCall
                ? await o.sha256(
                    s.concat([
                      this.authKey.getKey().slice(88 + n, 88 + n + 32),
                      e,
                    ])
                  )
                : await o.sha256(
                    s.concat([this.authKey.getKey().slice(96, 128), e])
                  );
              if (!this._isCall && !t.equals(f.slice(8, 24)))
                throw new l("Received msg_key doesn't match with expected one");
              const g = new c(e);
              if (this._isCall) return g.readInt(!1), g.read(e.length - 4);
              {
                if ((g.readLong(), !g.readLong().eq(this.id)))
                  throw new l("Server replied with a wrong session ID");
                const t = g.readLong();
                if (this.msgIds.includes(t.toString()))
                  throw new l("Duplicate msgIds");
                this.msgIds.length > 500 && this.msgIds.shift();
                const n = g.readInt(),
                  s = g.readInt(),
                  a = e.length - s;
                if (a < 12 || a > 1024)
                  throw new l("Server replied with the wrong message padding");
                const i = await g.tgReadObject();
                if (i?.className?.startsWith("Update")) {
                  const e = Math.floor(Date.now() / 1e3),
                    n = this.getMsgIdTimeLocal(t);
                  if (n && (n - e > 30 || e - n > 300))
                    throw new l("The message time is incorrect.");
                }
                return (
                  i && !("errorCode" in i) && this.msgIds.push(t.toString()),
                  new u(t, n, i)
                );
              }
            }
            _getNewMsgId() {
              const e = Date.now() / 1e3 + this.timeOffset,
                t = Math.floor(1e9 * (e - Math.floor(e)));
              let n = a(Math.floor(e))
                .shiftLeft(a(32))
                .or(a(t).shiftLeft(a(2)));
              return (
                this._lastMsgId.greaterOrEquals(n) &&
                  (n = this._lastMsgId.add(a(4))),
                (this._lastMsgId = n),
                n
              );
            }
            getMsgIdTimeLocal(e) {
              return (
                !this._lastMsgId.eq(0) &&
                e.shiftRight(a(32)).toJSNumber() - this.timeOffset
              );
            }
            updateTimeOffset(e) {
              const t = this._getNewMsgId(),
                n = this.timeOffset,
                s = Math.floor(Date.now() / 1e3),
                i = e.shiftRight(a(32));
              return (
                (this.timeOffset = i - s),
                this.timeOffset !== n &&
                  ((this._lastMsgId = a(0)),
                  this._log.debug(
                    `Updated time offset (old offset ${n}, bad ${t}, good ${e}, new ${this.timeOffset})`
                  )),
                this.timeOffset
              );
            }
            _getSeqNo(e) {
              if (e) {
                const e = 2 * this._sequence + 1;
                return (this._sequence += 1), e;
              }
              return 2 * this._sequence;
            }
          });
      },
      83701: (e, t, n) => {
        const s = n(9705).A;
        e.exports = class {
          constructor(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : void 0;
            (this.containerId = void 0),
              (this.msgId = void 0),
              (this.request = e),
              (this.data = e.getBytes()),
              (this.after = void 0),
              (this.result = void 0),
              (this.abortSignal = t),
              (this.finished = new s()),
              this.resetPromise();
          }
          isReady() {
            return !this.after || this.after.finished.promise;
          }
          resetPromise() {
            this.reject?.(),
              (this.promise = new Promise((e, t) => {
                (this.resolve = e), (this.reject = t);
              }));
          }
        };
      },
      46026: (e, t, n) => {
        function s(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const a = n(68338),
          i = n(93671).A,
          o = n(60010);
        class r {
          constructor(e, t, n, i, r, c) {
            s(this, "PacketCodecClass", void 0),
              (this._ip = e),
              (this._port = t),
              (this._dcId = n),
              (this._log = i),
              (this._testServers = r),
              (this._isPremium = c),
              (this._connected = !1),
              (this._sendTask = void 0),
              (this._recvTask = void 0),
              (this._codec = void 0),
              (this._obfuscation = void 0),
              (this._sendArray = new o()),
              (this._recvArray = new o()),
              (this.shouldLongPoll = !1),
              (this.socket = new a(this.disconnectCallback.bind(this)));
          }
          isConnected() {
            return this._connected;
          }
          async disconnectCallback() {
            await this.disconnect(!0);
          }
          async _connect() {
            this._log.debug("Connecting"),
              (this._codec = new this.PacketCodecClass(this)),
              await this.socket.connect(
                this._port,
                this._ip,
                this._testServers,
                this._isPremium
              ),
              this._log.debug("Finished connecting"),
              await this._initConn();
          }
          async connect() {
            await this._connect(),
              (this._connected = !0),
              this._sendTask || (this._sendTask = this._sendLoop()),
              (this._recvTask = this._recvLoop());
          }
          async disconnect() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._connected &&
              ((this._connected = !1),
              this._recvArray.push(void 0),
              e || (await this.socket.close()));
          }
          async send(e) {
            if (!this._connected) throw new Error("Not connected");
            await this._sendArray.push(e);
          }
          async recv() {
            for (; this._connected; ) {
              const e = await this._recvArray.pop();
              if (e) return e;
            }
            throw new Error("Not connected");
          }
          async _sendLoop() {
            try {
              for (; this._connected; ) {
                const e = await this._sendArray.pop();
                if (!e) return void (this._sendTask = void 0);
                await this._send(e);
              }
            } catch (e) {
              this._log.info("The server closed the connection while sending");
            }
          }
          async _recvLoop() {
            let e;
            for (; this._connected; ) {
              try {
                if (((e = await this._recv()), !e))
                  throw new Error("no data received");
              } catch (e) {
                return (
                  this._log.info("connection closed"), void this.disconnect()
                );
              }
              await this._recvArray.push(e);
            }
          }
          async _initConn() {
            this._codec.tag && (await this.socket.write(this._codec.tag));
          }
          _send(e) {
            const t = this._codec.encodePacket(e);
            this.socket.write(t);
          }
          _recv() {
            return this._codec.readPacket(this.socket);
          }
          toString() {
            return `${this._ip}:${this._port}/${this.constructor.name.replace(
              "Connection",
              ""
            )}`;
          }
        }
        e.exports = {
          Connection: r,
          PacketCodec: class {
            constructor(e) {
              this._conn = e;
            }
            encodePacket(e) {
              throw new Error("Not Implemented");
            }
            readPacket(e) {
              throw new Error("Not Implemented");
            }
          },
          ObfuscatedConnection: class extends r {
            constructor() {
              super(...arguments), s(this, "ObfuscatedIO", void 0);
            }
            _initConn() {
              (this._obfuscation = new this.ObfuscatedIO(this)),
                this.socket.write(this._obfuscation.header);
            }
            _send(e) {
              this._obfuscation.write(this._codec.encodePacket(e));
            }
            _recv() {
              return this._codec.readPacket(this._obfuscation);
            }
          },
          HttpConnection: class extends r {
            constructor(e, t, n, s, a, o) {
              super(e, t, n, s, a, o),
                (this.shouldLongPoll = !0),
                (this.socket = new i(this.disconnectCallback.bind(this)));
            }
            send(e) {
              return this.socket.write(e);
            }
            recv() {
              return this.socket.read();
            }
            async _connect() {
              this._log.debug("Connecting"),
                await this.socket.connect(
                  this._port,
                  this._ip,
                  this._testServers,
                  this._isPremium
                ),
                this._log.debug("Finished connecting");
            }
            async connect() {
              await this._connect(), (this._connected = !0);
            }
          },
        };
      },
      47677: (e, t, n) => {
        var s = n(48287).hp;
        function a(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const i = n(87263),
          { readBufferFromBigInt: o } = n(80071),
          { Connection: r, PacketCodec: c } = n(46026);
        class d extends c {
          constructor(e) {
            super(e), (this.tag = d.tag), (this.obfuscateTag = d.obfuscateTag);
          }
          encodePacket(e) {
            let t = e.length >> 2;
            if (t < 127) {
              const e = s.alloc(1);
              e.writeUInt8(t, 0), (t = e);
            } else t = s.concat([s.from("7f", "hex"), o(i(t), 3)]);
            return s.concat([t, e]);
          }
          async readPacket(e) {
            let t = (await e.read(1))[0];
            return (
              t >= 127 &&
                (t = s.concat([await e.read(3), s.alloc(1)]).readInt32LE(0)),
              e.read(t << 2)
            );
          }
        }
        a(d, "tag", s.from("ef", "hex")),
          a(d, "obfuscateTag", s.from("efefefef", "hex")),
          (e.exports = {
            ConnectionTCPAbridged: class extends r {
              constructor() {
                super(...arguments), a(this, "PacketCodecClass", d);
              }
            },
            AbridgedPacketCodec: d,
          });
      },
      34886: () => {},
      7433: (e, t, n) => {
        var s = n(48287).hp;
        function a(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const { generateRandomBytes: i } = n(80071),
          { ObfuscatedConnection: o } = n(46026),
          { AbridgedPacketCodec: r } = n(47677),
          c = n(52637);
        class d {
          constructor(e) {
            a(this, "header", void 0), (this.connection = e.socket);
            const t = this.initHeader(e.PacketCodecClass);
            (this.header = t.random),
              (this._encrypt = t.encryptor),
              (this._decrypt = t.decryptor);
          }
          initHeader(e) {
            const t = [
              s.from("50567247", "hex"),
              s.from("474554", "hex"),
              s.from("504f5354", "hex"),
              s.from("eeeeeeee", "hex"),
            ];
            let n;
            for (;;)
              if (
                ((n = i(64)), 239 !== n[0] && !n.slice(4, 8).equals(s.alloc(4)))
              ) {
                let e = !0;
                for (const s of t)
                  if (s.equals(n.slice(0, 4))) {
                    e = !1;
                    break;
                  }
                if (e) break;
              }
            n = n.toJSON().data;
            const a = s.from(n.slice(8, 56)).reverse(),
              o = s.from(n.slice(8, 40)),
              r = s.from(n.slice(40, 56)),
              d = s.from(a.slice(0, 32)),
              u = s.from(a.slice(32, 48)),
              l = new c(o, r),
              p = new c(d, u);
            return (
              (n = s.concat([
                s.from(n.slice(0, 56)),
                e.obfuscateTag,
                s.from(n.slice(60)),
              ])),
              (n = s.concat([
                s.from(n.slice(0, 56)),
                s.from(l.encrypt(n).slice(56, 64)),
                s.from(n.slice(64)),
              ])),
              {
                random: n,
                encryptor: l,
                decryptor: p,
              }
            );
          }
          async read(e) {
            const t = await this.connection.readExactly(e);
            return this._decrypt.encrypt(t);
          }
          write(e) {
            this.connection.write(this._encrypt.encrypt(e));
          }
        }
        e.exports = {
          ConnectionTCPObfuscated: class extends o {
            constructor() {
              super(...arguments),
                a(this, "ObfuscatedIO", d),
                a(this, "PacketCodecClass", r);
            }
          },
        };
      },
      99200: (e, t, n) => {
        const { Connection: s, HttpConnection: a } = n(46026),
          { ConnectionTCPFull: i } = n(34886),
          { ConnectionTCPAbridged: o } = n(47677),
          { ConnectionTCPObfuscated: r } = n(7433);
        e.exports = {
          Connection: s,
          HttpConnection: a,
          ConnectionTCPFull: i,
          ConnectionTCPAbridged: o,
          ConnectionTCPObfuscated: r,
        };
      },
      51227: (e, t, n) => {
        const s = n(83821),
          a = n(11523),
          {
            Connection: i,
            ConnectionTCPFull: o,
            ConnectionTCPAbridged: r,
            ConnectionTCPObfuscated: c,
            HttpConnection: d,
          } = n(99200),
          { UpdateConnectionState: u, UpdateServerTimeOffset: l } = n(44337);
        e.exports = {
          Connection: i,
          HttpConnection: d,
          ConnectionTCPFull: o,
          ConnectionTCPAbridged: r,
          ConnectionTCPObfuscated: c,
          MTProtoPlainSender: s,
          MTProtoSender: a,
          UpdateConnectionState: u,
          UpdateServerTimeOffset: l,
        };
      },
      44337: (e) => {
        function t(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class n {
          constructor(e, t) {
            (this.state = e), (this.origin = t);
          }
        }
        t(n, "disconnected", -1),
          t(n, "connected", 1),
          t(n, "broken", 0),
          (e.exports = {
            UpdateConnectionState: n,
            UpdateServerTimeOffset: class {
              constructor(e) {
                this.timeOffset = e;
              }
            },
            UpdateServerSalt: class {
              constructor(e) {
                this.serverSalt = e;
              }
            },
          });
      },
      79258: (e) => {
        e.exports = class {
          get dcId() {
            throw new Error("Not Implemented");
          }
          get serverAddress() {
            throw new Error("Not Implemented");
          }
          get port() {
            throw new Error("Not Implemented");
          }
          get authKey() {
            throw new Error("Not Implemented");
          }
          set authKey(e) {
            throw new Error("Not Implemented");
          }
          setDC(e, t, n) {
            throw new Error("Not implemented");
          }
          save() {
            throw new Error("Not Implemented");
          }
          delete() {
            throw new Error("Not Implemented");
          }
        };
      },
      25340: (e, t, n) => {
        const s = n(75139),
          a = "GramJs";
        e.exports = class extends s {
          async _delete() {
            const e = new Request(this._storageKey);
            return (await self.caches.open(a)).delete(e);
          }
          async _fetchFromCache() {
            const e = new Request(this._storageKey),
              t = await self.caches.open(a),
              n = await t.match(e);
            return n ? n.text() : void 0;
          }
          async _saveToCache(e) {
            const t = new Request(this._storageKey),
              n = new Response(e);
            return (await self.caches.open(a)).put(t, n);
          }
        };
      },
      70095: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(90155),
          i = n(21051),
          o = n(56215);
        e.exports = class extends a {
          constructor(e, t) {
            super(),
              (this._sessionData = e),
              (this._callback = t),
              (this._authKeys = {});
          }
          get authKey() {
            throw new Error("Not supported");
          }
          set authKey(e) {
            throw new Error("Not supported");
          }
          async load() {
            if (!this._sessionData) return;
            const { mainDcId: e, keys: t, hashes: n } = this._sessionData,
              { ipAddress: a, port: r } = o.getDC(e);
            this.setDC(e, a, r, !0),
              await Promise.all(
                Object.keys(t).map(async (e) => {
                  const a =
                    "string" == typeof t[e]
                      ? s.from(t[e], "hex")
                      : s.from(t[e]);
                  if (n[e]) {
                    const t =
                      "string" == typeof n[e]
                        ? s.from(n[e], "hex")
                        : s.from(n[e]);
                    this._authKeys[e] = new i(a, t);
                  } else
                    (this._authKeys[e] = new i()),
                      await this._authKeys[e].setKey(a, !0);
                })
              );
          }
          setDC(e, t, n) {
            let s =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            (this._dcId = e),
              (this._serverAddress = t),
              (this._port = n),
              delete this._authKeys[e],
              s || this._onUpdate();
          }
          getAuthKey() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this._dcId;
            return this._authKeys[e];
          }
          setAuthKey(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this._dcId;
            (this._authKeys[t] = e), this._onUpdate();
          }
          getSessionData() {
            const e = {
              mainDcId: this._dcId,
              keys: {},
              hashes: {},
            };
            return (
              Object.keys(this._authKeys).forEach((t) => {
                const n = this._authKeys[t];
                n &&
                  n._key &&
                  ((e.keys[t] = n._key.toString("hex")),
                  (e.hashes[t] = n._hash.toString("hex")));
              }),
              e
            );
          }
          _onUpdate() {
            this._callback(this.getSessionData());
          }
          delete() {
            this._callback(void 0);
          }
        };
      },
      89127: (e, t, n) => {
        const s = n(77783),
          a = n(75139),
          i = "GramJs";
        e.exports = class extends a {
          _delete() {
            return s.del(`${i}:${this._storageKey}`);
          }
          _fetchFromCache() {
            return s.get(`${i}:${this._storageKey}`);
          }
          _saveToCache(e) {
            return s.set(`${i}:${this._storageKey}`, e);
          }
        };
      },
      86074: (e, t, n) => {
        const s = n(75139);
        e.exports = class extends s {
          _delete() {
            return localStorage.removeItem(this._storageKey);
          }
          _fetchFromCache() {
            return localStorage.getItem(this._storageKey);
          }
          _saveToCache(e) {
            return localStorage.setItem(this._storageKey, e);
          }
        };
      },
      90155: (e, t, n) => {
        const s = n(79258);
        e.exports = class extends s {
          constructor() {
            super(),
              (this._serverAddress = void 0),
              (this._dcId = 0),
              (this._port = void 0),
              (this._takeoutId = void 0),
              (this._entities = new Set()),
              (this._updateStates = {});
          }
          get dcId() {
            return this._dcId;
          }
          get serverAddress() {
            return this._serverAddress;
          }
          get port() {
            return this._port;
          }
          get authKey() {
            return this._authKey;
          }
          set authKey(e) {
            this._authKey = e;
          }
          setDC(e, t, n) {
            (this._dcId = 0 | e), (this._serverAddress = t), (this._port = n);
          }
        };
      },
      75139: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(90155),
          i = n(21051),
          o = n(56215);
        e.exports = class extends a {
          constructor(e) {
            super(),
              (this._authKeys = {}),
              e && e.startsWith("session:")
                ? (this._sessionString = e)
                : e && (this._storageKey = e);
          }
          get authKey() {
            throw new Error("Not supported");
          }
          set authKey(e) {
            throw new Error("Not supported");
          }
          async load() {
            if (this._sessionString) await this._loadFromSessionString();
            else if (this._storageKey)
              try {
                const e = await this._fetchFromCache(),
                  { mainDcId: t, keys: n, hashes: a } = JSON.parse(e),
                  { ipAddress: r, port: c } = o.getDC(t);
                this.setDC(t, r, c, !0),
                  Object.keys(n).forEach((e) => {
                    n[e] &&
                      a[e] &&
                      (this._authKeys[e] = new i(
                        s.from(n[e].data),
                        s.from(a[e].data)
                      ));
                  });
              } catch (e) {
                console.warn(
                  "Failed to retrieve or parse session from storage"
                ),
                  console.warn(e);
              }
          }
          setDC(e, t, n) {
            let s =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            (this._dcId = e),
              (this._serverAddress = t),
              (this._port = n),
              delete this._authKeys[e],
              s || this._updateStorage();
          }
          async save() {
            return (
              this._storageKey ||
                (this._storageKey = `GramJs-session-${Date.now()}`),
              await this._updateStorage(),
              this._storageKey
            );
          }
          getAuthKey() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this._dcId;
            return this._authKeys[e];
          }
          setAuthKey(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this._dcId;
            (this._authKeys[t] = e), this._updateStorage();
          }
          getSessionData(e) {
            const t = {
              mainDcId: this._dcId,
              keys: {},
              hashes: {},
            };
            return (
              Object.keys(this._authKeys).forEach((n) => {
                const s = this._authKeys[n];
                s._key &&
                  ((t.keys[n] = e ? s._key.toString("hex") : s._key),
                  (t.hashes[n] = e ? s._hash.toString("hex") : s._hash));
              }),
              t
            );
          }
          async _loadFromSessionString() {
            const [, e, t] = this._sessionString.split(":"),
              n = Number(e),
              { ipAddress: a, port: r } = o.getDC(n);
            this.setDC(n, a, r);
            const c = new i();
            await c.setKey(s.from(t, "hex"), !0), this.setAuthKey(c, n);
          }
          async _updateStorage() {
            if (this._storageKey)
              try {
                await this._saveToCache(JSON.stringify(this.getSessionData()));
              } catch (e) {
                console.warn("Failed to update session in storage"),
                  console.warn(e);
              }
          }
          async delete() {
            try {
              return await this._delete();
            } catch (e) {
              console.warn("Failed to delete session from storage"),
                console.warn(e);
            }
          }
          _delete() {
            throw new Error("Not Implemented");
          }
          _fetchFromCache() {
            throw new Error("Not Implemented");
          }
          _saveToCache(e) {
            throw new Error("Not Implemented");
          }
        };
      },
      10909: (e, t, n) => {
        var s = n(48287).hp;
        const a = n(90155),
          i = n(21051),
          o = n(28427);
        class r extends a {
          constructor() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : void 0;
            if ((super(), e)) {
              if ("1" !== e[0]) throw new Error("Not a valid string");
              e = e.slice(1);
              const t = r.decode(e),
                n = new o(t);
              this._dcId = n.read(1).readUInt8(0);
              const s = n.read(2).readInt16BE(0);
              (this._serverAddress = String(n.read(s))),
                (this._port = n.read(2).readInt16BE(0)),
                (this._key = n.read(-1));
            }
          }
          static encode(e) {
            return e.toString("base64");
          }
          static decode(e) {
            return s.from(e, "base64");
          }
          async load() {
            this._key &&
              ((this._authKey = new i()),
              await this._authKey.setKey(this._key));
          }
          save() {
            if (!this.authKey) return "";
            const e = s.from([this.dcId]),
              t = s.from(this.serverAddress),
              n = s.alloc(2);
            n.writeInt16BE(t.length, 0);
            const a = s.alloc(2);
            return (
              a.writeInt16BE(this.port, 0),
              "1" + r.encode(s.concat([e, n, t, a, this.authKey.getKey()]))
            );
          }
          getAuthKey(e) {
            if (!e || e === this.dcId) return this.authKey;
          }
          setAuthKey(e, t) {
            (t && t !== this.dcId) || (this.authKey = e);
          }
        }
        e.exports = r;
      },
      47306: (e, t, n) => {
        const s = n(90155),
          a = n(10909),
          i = n(25340),
          o = n(86074),
          r = n(89127),
          c = n(70095);
        e.exports = {
          Memory: s,
          StringSession: a,
          CacheApiSession: i,
          LocalStorageSession: o,
          IdbSession: r,
          CallbackSession: c,
        };
      },
      50114: (e, t, n) => {
        const s = n(96847),
          a = {};
        for (const e of Object.values(s))
          if (e.CONSTRUCTOR_ID) a[e.CONSTRUCTOR_ID] = e;
          else for (const t of Object.values(e)) a[t.CONSTRUCTOR_ID] = t;
        e.exports = {
          LAYER: 167,
          tlobjects: a,
        };
      },
      96847: (e, t, n) => {
        var s = n(48287).hp;
        function a(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const { parseTl: i, serializeBytes: o, serializeDate: r } = n(73192),
          { toSignedLittleBuffer: c } = n(80071),
          d = n(59759),
          u = n(68656),
          l = "undefined" != typeof self && void 0 !== self.localStorage;
        function p(e) {
          const t = i(e),
            n = [],
            s = [];
          for (const e of t) e.isFunction ? s.push(e) : n.push(e);
          return [n, s];
        }
        function f(e, t) {
          switch (t) {
            case "int": {
              const t = s.alloc(4);
              return t.writeInt32LE(e, 0), t;
            }
            case "long":
              return c(e, 8);
            case "int128":
              return c(e, 16);
            case "int256":
              return c(e, 32);
            case "double": {
              const t = s.alloc(8);
              return t.writeDoubleLE(e, 0), t;
            }
            case "string":
            case "bytes":
              return o(e);
            case "Bool":
              return e ? s.from("b5757299", "hex") : s.from("379779bc", "hex");
            case "true":
              return s.alloc(0);
            case "date":
              return r(e);
            default:
              return e.getBytes();
          }
        }
        function g(e, t) {
          if (t.isVector) {
            t.useVectorId && e.readInt();
            const n = [],
              s = e.readInt();
            t.isVector = !1;
            for (let a = 0; a < s; a++) n.push(g(e, t));
            return (t.isVector = !0), n;
          }
          if (t.flagIndicator) return e.readInt();
          switch (t.type) {
            case "int":
              return e.readInt();
            case "long":
              return e.readLong();
            case "int128":
              return e.readLargeInt(128);
            case "int256":
              return e.readLargeInt(256);
            case "double":
              return e.readDouble();
            case "string":
              return e.tgReadString();
            case "Bool":
              return e.tgReadBool();
            case "true":
              return !0;
            case "bytes":
              return e.tgReadBytes();
            case "date":
              return e.tgReadDate();
            default:
              if (t.skipConstructorId) throw new Error(`Unknown type ${t}`);
              return e.tgReadObject();
          }
        }
        function h(e, t) {
          const n = {};
          for (const i of t) {
            const {
                name: t,
                constructorId: o,
                subclassOfId: r,
                argsConfig: c,
                namespace: d,
                result: u,
              } = i,
              l = [d, t].join(".").replace(/^\./, "");
            class p {
              constructor(t) {
                a(this, "CONSTRUCTOR_ID", o),
                  a(this, "SUBCLASS_OF_ID", r),
                  a(this, "className", l),
                  a(this, "classType", e),
                  (t = t || {}),
                  Object.keys(t).forEach((e) => {
                    this[e] = t[e];
                  });
              }
              static fromReader(e) {
                const t = {};
                for (const n in c)
                  if (c.hasOwnProperty(n)) {
                    const s = c[n];
                    if (s.isFlag) {
                      const a =
                        t[`flags${s.flagGroup > 1 ? s.flagGroup : ""}`] &
                        (1 << s.flagIndex);
                      if ("true" === s.type) {
                        t[n] = Boolean(a);
                        continue;
                      }
                      t[n] = a ? g(e, s) : void 0;
                    } else t[n] = g(e, s);
                  }
                return new p(t);
              }
              getBytes() {
                const e = this.CONSTRUCTOR_ID,
                  t = s.alloc(4);
                t.writeUInt32LE(e, 0);
                const n = [t];
                for (const e in c)
                  if (c.hasOwnProperty(e)) {
                    if (
                      c[e].isFlag &&
                      ((!1 === this[e] && "true" === c[e].type) ||
                        void 0 === this[e])
                    )
                      continue;
                    if (c[e].isVector) {
                      c[e].useVectorId && n.push(s.from("15c4b51c", "hex"));
                      const t = s.alloc(4);
                      t.writeInt32LE(this[e].length, 0),
                        n.push(
                          t,
                          s.concat(this[e].map((t) => f(t, c[e].type)))
                        );
                    } else if (c[e].flagIndicator)
                      if (Object.values(c).some((e) => e.isFlag)) {
                        let e = 0;
                        for (const t in c)
                          c[t].isFlag &&
                            ((!1 === this[t] && "true" === c[t].type) ||
                            void 0 === this[t]
                              ? (e |= 0)
                              : (e |= 1 << c[t].flagIndex));
                        const t = s.alloc(4);
                        t.writeUInt32LE(e, 0), n.push(t);
                      } else n.push(s.alloc(4));
                    else if (
                      (n.push(f(this[e], c[e].type)),
                      this[e] && "function" == typeof this[e].getBytes)
                    ) {
                      let t = c[e].type.charAt(c[e].type.indexOf(".") + 1);
                      (t = t === t.toUpperCase()), t || n.shift();
                    }
                  }
                return s.concat(n);
              }
              readResult(t) {
                if ("request" !== e)
                  throw new Error(
                    "`readResult()` called for non-request instance"
                  );
                const n = u.match(/Vector<(int|long)>/);
                if (n) {
                  t.readInt();
                  const e = [],
                    s = t.readInt();
                  if ("int" === n[1])
                    for (let n = 0; n < s; n++) e.push(t.readInt());
                  else for (let n = 0; n < s; n++) e.push(t.readLong());
                  return e;
                }
                return t.tgReadObject();
              }
            }
            a(p, "CONSTRUCTOR_ID", o),
              a(p, "SUBCLASS_OF_ID", r),
              a(p, "className", l),
              a(p, "classType", e),
              d ? (n[d] || (n[d] = {}), (n[d][t] = p)) : (n[t] = p);
          }
          return n;
        }
        e.exports = (function () {
          let e;
          return (
            (e =
              (l &&
                (function () {
                  const e = localStorage.getItem("GramJs:apiCache");
                  return e && JSON.parse(e);
                })()) ||
              (function () {
                const [e, t] = p(d),
                  [n, s] = p(u);
                return {
                  constructors: [].concat(e, n),
                  requests: [].concat(t, s),
                };
              })()),
            (function (e, t) {
              const n = {
                ...e,
              };
              return (
                Object.keys(t).forEach((e) => {
                  "function" != typeof t[e] && n[e]
                    ? Object.assign(n[e], t[e])
                    : (n[e] = t[e]);
                }),
                n
              );
            })(h("constructor", e.constructors), h("request", e.requests))
          );
        })();
      },
      59759: (e) => {
        e.exports =
          "boolFalse#bc799737 = Bool;\nboolTrue#997275b5 = Bool;\ntrue#3fedd339 = True;\nvector#1cb5c415 {t:Type} # [ t ] = Vector t;\nerror#c4b9f9bb code:int text:string = Error;\nnull#56730bcc = Null;\ninputPeerEmpty#7f3b18ea = InputPeer;\ninputPeerSelf#7da07ec9 = InputPeer;\ninputPeerChat#35a95cb9 chat_id:long = InputPeer;\ninputPeerUser#dde8a54c user_id:long access_hash:long = InputPeer;\ninputPeerChannel#27bcbbfc channel_id:long access_hash:long = InputPeer;\ninputPeerUserFromMessage#a87b0a1c peer:InputPeer msg_id:int user_id:long = InputPeer;\ninputPeerChannelFromMessage#bd2a0840 peer:InputPeer msg_id:int channel_id:long = InputPeer;\ninputUserEmpty#b98886cf = InputUser;\ninputUserSelf#f7c1b13f = InputUser;\ninputUser#f21158c6 user_id:long access_hash:long = InputUser;\ninputUserFromMessage#1da448e2 peer:InputPeer msg_id:int user_id:long = InputUser;\ninputPhoneContact#f392b7f4 client_id:long phone:string first_name:string last_name:string = InputContact;\ninputFile#f52ff27f id:long parts:int name:string md5_checksum:string = InputFile;\ninputFileBig#fa4f0bb5 id:long parts:int name:string = InputFile;\ninputMediaEmpty#9664f57f = InputMedia;\ninputMediaUploadedPhoto#1e287d04 flags:# spoiler:flags.2?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int = InputMedia;\ninputMediaPhoto#b3ba0635 flags:# spoiler:flags.1?true id:InputPhoto ttl_seconds:flags.0?int = InputMedia;\ninputMediaGeoPoint#f9c44144 geo_point:InputGeoPoint = InputMedia;\ninputMediaContact#f8ab7dfb phone_number:string first_name:string last_name:string vcard:string = InputMedia;\ninputMediaUploadedDocument#5b38c6c1 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int = InputMedia;\ninputMediaDocument#33473058 flags:# spoiler:flags.2?true id:InputDocument ttl_seconds:flags.0?int query:flags.1?string = InputMedia;\ninputMediaVenue#c13d1c11 geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string = InputMedia;\ninputMediaPhotoExternal#e5bbfe1a flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int = InputMedia;\ninputMediaDocumentExternal#fb52dc99 flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int = InputMedia;\ninputMediaGame#d33f43f3 id:InputGame = InputMedia;\ninputMediaInvoice#8eb5a6d5 flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:string provider_data:DataJSON start_param:flags.1?string extended_media:flags.2?InputMedia = InputMedia;\ninputMediaGeoLive#971fa843 flags:# stopped:flags.0?true geo_point:InputGeoPoint heading:flags.2?int period:flags.1?int proximity_notification_radius:flags.3?int = InputMedia;\ninputMediaPoll#f94e5f1 flags:# poll:Poll correct_answers:flags.0?Vector<bytes> solution:flags.1?string solution_entities:flags.1?Vector<MessageEntity> = InputMedia;\ninputMediaDice#e66fbf7b emoticon:string = InputMedia;\ninputMediaStory#89fdd778 peer:InputPeer id:int = InputMedia;\ninputMediaWebPage#c21b8849 flags:# force_large_media:flags.0?true force_small_media:flags.1?true optional:flags.2?true url:string = InputMedia;\ninputMediaPayment#84da7526 prices:Vector<LabeledPrice> multimedia:Vector<InputMedia> = InputMedia;\ninputChatPhotoEmpty#1ca48f57 = InputChatPhoto;\ninputChatUploadedPhoto#bdcdaec0 flags:# file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.3?VideoSize = InputChatPhoto;\ninputChatPhoto#8953ad37 id:InputPhoto = InputChatPhoto;\ninputGeoPointEmpty#e4c123d6 = InputGeoPoint;\ninputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;\ninputPhotoEmpty#1cd7bf0d = InputPhoto;\ninputPhoto#3bb3b94a id:long access_hash:long file_reference:bytes = InputPhoto;\ninputFileLocation#dfdaabe1 volume_id:long local_id:int secret:long file_reference:bytes = InputFileLocation;\ninputEncryptedFileLocation#f5235d55 id:long access_hash:long = InputFileLocation;\ninputDocumentFileLocation#bad07584 id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;\ninputSecureFileLocation#cbc7ee28 id:long access_hash:long = InputFileLocation;\ninputTakeoutFileLocation#29be5899 = InputFileLocation;\ninputPhotoFileLocation#40181ffe id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;\ninputPhotoLegacyFileLocation#d83466f3 id:long access_hash:long file_reference:bytes volume_id:long local_id:int secret:long = InputFileLocation;\ninputPeerPhotoFileLocation#37257e99 flags:# big:flags.0?true peer:InputPeer photo_id:long = InputFileLocation;\ninputStickerSetThumb#9d84f3db stickerset:InputStickerSet thumb_version:int = InputFileLocation;\ninputGroupCallStream#598a92a flags:# call:InputGroupCall time_ms:long scale:int video_channel:flags.0?int video_quality:flags.0?int = InputFileLocation;\npeerUser#59511722 user_id:long = Peer;\npeerChat#36c6019a chat_id:long = Peer;\npeerChannel#a2a5371e channel_id:long = Peer;\nstorage.fileUnknown#aa963b05 = storage.FileType;\nstorage.filePartial#40bc6f52 = storage.FileType;\nstorage.fileJpeg#7efe0e = storage.FileType;\nstorage.fileGif#cae1aadf = storage.FileType;\nstorage.filePng#a4f63c0 = storage.FileType;\nstorage.filePdf#ae1e508d = storage.FileType;\nstorage.fileMp3#528a0677 = storage.FileType;\nstorage.fileMov#4b09ebbc = storage.FileType;\nstorage.fileMp4#b3cea0e4 = storage.FileType;\nstorage.fileWebp#1081464c = storage.FileType;\nuserTypeNormal#ec35854d = UserType;\nuserTypeNotify#3eab4210 = UserType;\nuserTypeBusiness#bb40bf2e = UserType;\nuserTypeMxb#35168d6a im_code:string = UserType;\nuserTypeUnknown#d4d0613d = UserType;\nuserEmpty#d3bc4b7a id:long = User;\nuser#274db727 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?int color:flags2.8?PeerColor profile_color:flags2.9?PeerColor user_type:UserType = User;\nuserProfilePhotoEmpty#4f11bae1 = UserProfilePhoto;\nuserProfilePhoto#82d1f706 flags:# has_video:flags.0?true personal:flags.2?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = UserProfilePhoto;\nuserStatusEmpty#9d05049 = UserStatus;\nuserStatusOnline#edb93949 expires:int = UserStatus;\nuserStatusOffline#8c703f was_online:int = UserStatus;\nuserStatusRecently#e26f42f1 = UserStatus;\nuserStatusLastWeek#7bf09fc = UserStatus;\nuserStatusLastMonth#77ebc742 = UserStatus;\nchatEmpty#29562865 id:long = Chat;\nchat#41cbf256 flags:# creator:flags.0?true left:flags.2?true deactivated:flags.5?true call_active:flags.23?true call_not_empty:flags.24?true noforwards:flags.25?true id:long title:string photo:ChatPhoto participants_count:int date:int version:int migrated_to:flags.6?InputChannel admin_rights:flags.14?ChatAdminRights default_banned_rights:flags.18?ChatBannedRights = Chat;\nchatForbidden#6592a1a7 id:long title:string = Chat;\nchannel#8e87ccd8 flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?int color:flags2.7?PeerColor = Chat;\nchannelForbidden#17d493d5 flags:# broadcast:flags.5?true megagroup:flags.8?true id:long access_hash:long title:string until_date:flags.16?int = Chat;\nchatFull#c9d31138 flags:# can_set_username:flags.7?true has_scheduled:flags.8?true translations_disabled:flags.19?true id:long about:string participants:ChatParticipants chat_photo:flags.2?Photo notify_settings:PeerNotifySettings exported_invite:flags.13?ExportedChatInvite bot_info:flags.3?Vector<BotInfo> pinned_msg_id:flags.6?int folder_id:flags.11?int call:flags.12?InputGroupCall ttl_period:flags.14?int groupcall_default_join_as:flags.15?Peer theme_emoticon:flags.16?string requests_pending:flags.17?int recent_requesters:flags.17?Vector<long> available_reactions:flags.18?ChatReactions = ChatFull;\nchannelFull#723027bd flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions stories:flags2.4?PeerStories = ChatFull;\nchatParticipant#c02d4007 user_id:long inviter_id:long date:int = ChatParticipant;\nchatParticipantCreator#e46bcee4 user_id:long = ChatParticipant;\nchatParticipantAdmin#a0933f5b user_id:long inviter_id:long date:int = ChatParticipant;\nchatParticipantsForbidden#8763d3e1 flags:# chat_id:long self_participant:flags.0?ChatParticipant = ChatParticipants;\nchatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;\nchatPhotoEmpty#37c1011c = ChatPhoto;\nchatPhoto#1c6e1c11 flags:# has_video:flags.0?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = ChatPhoto;\nmessageEmpty#90a6ca84 flags:# id:int peer_id:flags.0?Peer = Message;\nmessage#38116ee0 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true id:int from_id:flags.8?Peer peer_id:Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int = Message;\nmessageService#2b085862 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction ttl_period:flags.25?int = Message;\nmessageMediaEmpty#3ded6320 = MessageMedia;\nmessageMediaPhoto#695150d7 flags:# spoiler:flags.3?true photo:flags.0?Photo ttl_seconds:flags.2?int = MessageMedia;\nmessageMediaGeo#56e0d474 geo:GeoPoint = MessageMedia;\nmessageMediaContact#70322949 phone_number:string first_name:string last_name:string vcard:string user_id:long = MessageMedia;\nmessageMediaUnsupported#9f84f49e = MessageMedia;\nmessageMediaDocument#4cf4d72d flags:# nopremium:flags.3?true spoiler:flags.4?true document:flags.0?Document alt_document:flags.5?Document ttl_seconds:flags.2?int = MessageMedia;\nmessageMediaWebPage#ddf10c3b flags:# force_large_media:flags.0?true force_small_media:flags.1?true manual:flags.3?true safe:flags.4?true webpage:WebPage = MessageMedia;\nmessageMediaVenue#2ec0533f geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MessageMedia;\nmessageMediaGame#fdb19008 game:Game = MessageMedia;\nmessageMediaInvoice#f6a548d3 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument receipt_msg_id:flags.2?int currency:string total_amount:long start_param:string extended_media:flags.4?MessageExtendedMedia = MessageMedia;\nmessageMediaGeoLive#b940c666 flags:# geo:GeoPoint heading:flags.0?int period:int proximity_notification_radius:flags.1?int = MessageMedia;\nmessageMediaPoll#4bd6e798 poll:Poll results:PollResults = MessageMedia;\nmessageMediaDice#3f7ee58b value:int emoticon:string = MessageMedia;\nmessageMediaStory#68cb6283 flags:# via_mention:flags.1?true peer:Peer id:int story:flags.0?StoryItem = MessageMedia;\nmessageMediaGiveaway#58260664 flags:# only_new_subscribers:flags.0?true channels:Vector<long> countries_iso2:flags.1?Vector<string> quantity:int months:int until_date:int = MessageMedia;\nmessageMediaPayment#02dfaf58 payment_id:long multimedia:Vector<MessageMedia> = MessageMedia;\nmessageActionEmpty#b6aef7b0 = MessageAction;\nmessageActionChatCreate#bd47cbad title:string users:Vector<long> = MessageAction;\nmessageActionChatEditTitle#b5a1ce5a title:string = MessageAction;\nmessageActionChatEditPhoto#7fcb13a8 photo:Photo = MessageAction;\nmessageActionChatDeletePhoto#95e3fbef = MessageAction;\nmessageActionChatAddUser#15cefd00 users:Vector<long> = MessageAction;\nmessageActionChatDeleteUser#a43f30cc user_id:long = MessageAction;\nmessageActionChatJoinedByLink#31224c3 inviter_id:long = MessageAction;\nmessageActionChannelCreate#95d2ac92 title:string = MessageAction;\nmessageActionChatMigrateTo#e1037f92 channel_id:long = MessageAction;\nmessageActionChannelMigrateFrom#ea3948e9 title:string chat_id:long = MessageAction;\nmessageActionPinMessage#94bd38ed = MessageAction;\nmessageActionHistoryClear#9fbab604 = MessageAction;\nmessageActionGameScore#92a72876 game_id:long score:int = MessageAction;\nmessageActionPaymentSentMe#8f31b327 flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string charge:PaymentCharge = MessageAction;\nmessageActionPaymentSent#96163f56 flags:# recurring_init:flags.2?true recurring_used:flags.3?true currency:string total_amount:long invoice_slug:flags.0?string = MessageAction;\nmessageActionPhoneCall#80e11a7f flags:# video:flags.2?true call_id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = MessageAction;\nmessageActionScreenshotTaken#4792929b = MessageAction;\nmessageActionCustomAction#fae69f56 message:string = MessageAction;\nmessageActionBotAllowed#c516d679 flags:# attach_menu:flags.1?true from_request:flags.3?true domain:flags.0?string app:flags.2?BotApp = MessageAction;\nmessageActionSecureValuesSentMe#1b287353 values:Vector<SecureValue> credentials:SecureCredentialsEncrypted = MessageAction;\nmessageActionSecureValuesSent#d95c6154 types:Vector<SecureValueType> = MessageAction;\nmessageActionContactSignUp#f3f25f76 = MessageAction;\nmessageActionGeoProximityReached#98e0d697 from_id:Peer to_id:Peer distance:int = MessageAction;\nmessageActionGroupCall#7a0d7f42 flags:# call:InputGroupCall duration:flags.0?int = MessageAction;\nmessageActionInviteToGroupCall#502f92f7 call:InputGroupCall users:Vector<long> = MessageAction;\nmessageActionSetMessagesTTL#3c134d7b flags:# period:int auto_setting_from:flags.0?long = MessageAction;\nmessageActionGroupCallScheduled#b3a07661 call:InputGroupCall schedule_date:int = MessageAction;\nmessageActionSetChatTheme#aa786345 emoticon:string = MessageAction;\nmessageActionChatJoinedByRequest#ebbca3cb = MessageAction;\nmessageActionWebViewDataSentMe#47dd8079 text:string data:string = MessageAction;\nmessageActionWebViewDataSent#b4c38cb5 text:string = MessageAction;\nmessageActionGiftPremium#c83d6aec flags:# currency:string amount:long months:int crypto_currency:flags.0?string crypto_amount:flags.0?long = MessageAction;\nmessageActionTopicCreate#d999256 flags:# title:string icon_color:int icon_emoji_id:flags.0?long = MessageAction;\nmessageActionTopicEdit#c0944820 flags:# title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = MessageAction;\nmessageActionSuggestProfilePhoto#57de635e photo:Photo = MessageAction;\nmessageActionRequestedPeer#fe77345d button_id:int peer:Peer = MessageAction;\nmessageActionSetChatWallPaper#5060a3f4 flags:# same:flags.0?true for_both:flags.1?true wallpaper:WallPaper = MessageAction;\nmessageActionGiftCode#d2cfdb0e flags:# via_giveaway:flags.0?true unclaimed:flags.2?true boost_peer:flags.1?Peer months:int slug:string = MessageAction;\nmessageActionGiveawayLaunch#332ba9ed = MessageAction;\nmessageActionGiveawayResults#2a9fadc5 winners_count:int unclaimed_count:int = MessageAction;\nmessageActionContactReturned#1e47f27a = MessageAction;\ndialog#d58a08c6 flags:# pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int notify_settings:PeerNotifySettings pts:flags.0?int draft:flags.1?DraftMessage folder_id:flags.4?int ttl_period:flags.5?int = Dialog;\ndialogFolder#71bd134c flags:# pinned:flags.2?true folder:Folder peer:Peer top_message:int unread_muted_peers_count:int unread_unmuted_peers_count:int unread_muted_messages_count:int unread_unmuted_messages_count:int = Dialog;\nphotoEmpty#2331b22d id:long = Photo;\nphoto#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;\nphotoSizeEmpty#e17e23c type:string = PhotoSize;\nphotoSize#75c78e60 type:string w:int h:int size:int = PhotoSize;\nphotoCachedSize#21e1ad6 type:string w:int h:int bytes:bytes = PhotoSize;\nphotoStrippedSize#e0b0bc2e type:string bytes:bytes = PhotoSize;\nphotoSizeProgressive#fa3efb95 type:string w:int h:int sizes:Vector<int> = PhotoSize;\nphotoPathSize#d8214d41 type:string bytes:bytes = PhotoSize;\ngeoPointEmpty#1117dd5f = GeoPoint;\ngeoPoint#b2a2f663 flags:# long:double lat:double access_hash:long accuracy_radius:flags.0?int = GeoPoint;\nauth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;\nauth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;\nauth.sentDeleteAccountCode#92eadf91 type:auth.SentCodeType timeout:int = auth.sentDeleteAccountCode;\nauth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;\nauth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;\nauth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;\ninputNotifyPeer#b8bc5b0c peer:InputPeer = InputNotifyPeer;\ninputNotifyUsers#193b4417 = InputNotifyPeer;\ninputNotifyChats#4a95e84e = InputNotifyPeer;\ninputNotifyBroadcasts#b1db7c7e = InputNotifyPeer;\ninputNotifyForumTopic#5c467992 peer:InputPeer top_msg_id:int = InputNotifyPeer;\ninputPeerNotifySettings#cacb6ae2 flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int sound:flags.3?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_sound:flags.8?NotificationSound = InputPeerNotifySettings;\npeerNotifySettings#99622c0c flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int ios_sound:flags.3?NotificationSound android_sound:flags.4?NotificationSound other_sound:flags.5?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_ios_sound:flags.8?NotificationSound stories_android_sound:flags.9?NotificationSound stories_other_sound:flags.10?NotificationSound = PeerNotifySettings;\npeerSettings#a518110d flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int = PeerSettings;\nwallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;\nwallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;\ninputReportReasonSpam#58dbcab8 = ReportReason;\ninputReportReasonViolence#1e22c78d = ReportReason;\ninputReportReasonPornography#2e59d922 = ReportReason;\ninputReportReasonChildAbuse#adf44ee3 = ReportReason;\ninputReportReasonOther#c1e4a2b1 = ReportReason;\ninputReportReasonCopyright#9b89f93a = ReportReason;\ninputReportReasonGeoIrrelevant#dbd4feed = ReportReason;\ninputReportReasonFake#f5ddd6e7 = ReportReason;\ninputReportReasonIllegalDrugs#a8eb2be = ReportReason;\ninputReportReasonPersonalDetails#9ec7863d = ReportReason;\nuserFull#b9b12c6c flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights premium_gifts:flags.19?Vector<PremiumGiftOption> wallpaper:flags.24?WallPaper stories:flags.25?PeerStories = UserFull;\ncontact#145ade0b user_id:long mutual:Bool = Contact;\nimportedContact#c13e3c50 user_id:long client_id:long = ImportedContact;\ncontactStatus#16d9703b user_id:long status:UserStatus = ContactStatus;\ncontacts.contactsNotModified#b74ba9d2 = contacts.Contacts;\ncontacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;\ncontacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;\ncontacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;\ncontacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;\nmessages.dialogs#15ba6c40 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;\nmessages.dialogsSlice#71e094f3 count:int dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;\nmessages.dialogsNotModified#f0e3e596 count:int = messages.Dialogs;\nmessages.messages#8c718e87 messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;\nmessages.messagesSlice#3a54685e flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;\nmessages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;\nmessages.messagesNotModified#74535f21 count:int = messages.Messages;\nmessages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;\nmessages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;\nmessages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;\nmessages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;\ninputMessagesFilterEmpty#57e2f66c = MessagesFilter;\ninputMessagesFilterPhotos#9609a51c = MessagesFilter;\ninputMessagesFilterVideo#9fc00e65 = MessagesFilter;\ninputMessagesFilterPhotoVideo#56e9f0e4 = MessagesFilter;\ninputMessagesFilterDocument#9eddf188 = MessagesFilter;\ninputMessagesFilterUrl#7ef0dd87 = MessagesFilter;\ninputMessagesFilterGif#ffc86587 = MessagesFilter;\ninputMessagesFilterVoice#50f5c392 = MessagesFilter;\ninputMessagesFilterMusic#3751b49e = MessagesFilter;\ninputMessagesFilterChatPhotos#3a20ecb8 = MessagesFilter;\ninputMessagesFilterPhoneCalls#80c99768 flags:# missed:flags.0?true = MessagesFilter;\ninputMessagesFilterRoundVoice#7a7c17a4 = MessagesFilter;\ninputMessagesFilterRoundVideo#b549da53 = MessagesFilter;\ninputMessagesFilterMyMentions#c1f8e69a = MessagesFilter;\ninputMessagesFilterGeo#e7026d0d = MessagesFilter;\ninputMessagesFilterContacts#e062db83 = MessagesFilter;\ninputMessagesFilterPinned#1bb00451 = MessagesFilter;\nupdateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;\nupdateMessageID#4e90bfd6 id:int random_id:long = Update;\nupdateDeleteMessages#a20db0e5 messages:Vector<int> pts:int pts_count:int = Update;\nupdateUserTyping#c01e857f user_id:long action:SendMessageAction = Update;\nupdateChatUserTyping#83487af0 chat_id:long from_id:Peer action:SendMessageAction = Update;\nupdateChatParticipants#7761198 participants:ChatParticipants = Update;\nupdateUserStatus#e5bdf8de user_id:long status:UserStatus = Update;\nupdateUserName#a7848924 user_id:long first_name:string last_name:string usernames:Vector<Username> = Update;\nupdateNewAuthorization#8951abef flags:# unconfirmed:flags.0?true hash:long date:flags.0?int device:flags.0?string location:flags.0?string = Update;\nupdateNewEncryptedMessage#12bcbd9a message:EncryptedMessage qts:int = Update;\nupdateEncryptedChatTyping#1710f156 chat_id:int = Update;\nupdateEncryption#b4a2e88d chat:EncryptedChat date:int = Update;\nupdateEncryptedMessagesRead#38fe25b7 chat_id:int max_date:int date:int = Update;\nupdateChatParticipantAdd#3dda5451 chat_id:long user_id:long inviter_id:long date:int version:int = Update;\nupdateChatParticipantDelete#e32f3d77 chat_id:long user_id:long version:int = Update;\nupdateDcOptions#8e5e9873 dc_options:Vector<DcOption> = Update;\nupdateNotifySettings#bec268ef peer:NotifyPeer notify_settings:PeerNotifySettings = Update;\nupdateServiceNotification#ebe46819 flags:# popup:flags.0?true invert_media:flags.2?true inbox_date:flags.1?int type:string message:string media:MessageMedia entities:Vector<MessageEntity> = Update;\nupdatePrivacy#ee3b272a key:PrivacyKey rules:Vector<PrivacyRule> = Update;\nupdateUserPhone#5492a13 user_id:long phone:string = Update;\nupdateReadHistoryInbox#9c974fdf flags:# folder_id:flags.0?int peer:Peer max_id:int still_unread_count:int pts:int pts_count:int = Update;\nupdateReadHistoryOutbox#2f2f21bf peer:Peer max_id:int pts:int pts_count:int = Update;\nupdateWebPage#7f891213 webpage:WebPage pts:int pts_count:int = Update;\nupdateReadMessagesContents#f8227181 flags:# messages:Vector<int> pts:int pts_count:int date:flags.0?int = Update;\nupdateChannelTooLong#108d941f flags:# channel_id:long pts:flags.0?int = Update;\nupdateChannel#635b4c09 channel_id:long = Update;\nupdateNewChannelMessage#62ba04d9 message:Message pts:int pts_count:int = Update;\nupdateReadChannelInbox#922e6e10 flags:# folder_id:flags.0?int channel_id:long max_id:int still_unread_count:int pts:int = Update;\nupdateDeleteChannelMessages#c32d5b12 channel_id:long messages:Vector<int> pts:int pts_count:int = Update;\nupdateChannelMessageViews#f226ac08 channel_id:long id:int views:int = Update;\nupdateChatParticipantAdmin#d7ca61a2 chat_id:long user_id:long is_admin:Bool version:int = Update;\nupdateNewStickerSet#688a30aa stickerset:messages.StickerSet = Update;\nupdateStickerSetsOrder#bb2d201 flags:# masks:flags.0?true emojis:flags.1?true order:Vector<long> = Update;\nupdateStickerSets#31c24808 flags:# masks:flags.0?true emojis:flags.1?true = Update;\nupdateSavedGifs#9375341e = Update;\nupdateBotInlineQuery#496f379c flags:# query_id:long user_id:long query:string geo:flags.0?GeoPoint peer_type:flags.1?InlineQueryPeerType offset:string = Update;\nupdateBotInlineSend#12f12a07 flags:# user_id:long query:string geo:flags.0?GeoPoint id:string msg_id:flags.1?InputBotInlineMessageID = Update;\nupdateEditChannelMessage#1b3f4df7 message:Message pts:int pts_count:int = Update;\nupdateBotCallbackQuery#b9cfc48d flags:# query_id:long user_id:long peer:Peer msg_id:int chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;\nupdateEditMessage#e40370a3 message:Message pts:int pts_count:int = Update;\nupdateInlineBotCallbackQuery#691e9052 flags:# query_id:long user_id:long msg_id:InputBotInlineMessageID chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;\nupdateReadChannelOutbox#b75f99a9 channel_id:long max_id:int = Update;\nupdateDraftMessage#1b49ec6d flags:# peer:Peer top_msg_id:flags.0?int draft:DraftMessage = Update;\nupdateReadFeaturedStickers#571d2742 = Update;\nupdateRecentStickers#9a422c20 = Update;\nupdateConfig#a229dd06 = Update;\nupdatePtsChanged#3354678f = Update;\nupdateChannelWebPage#2f2ba99f channel_id:long webpage:WebPage pts:int pts_count:int = Update;\nupdateDialogPinned#6e6fe51c flags:# pinned:flags.0?true folder_id:flags.1?int peer:DialogPeer = Update;\nupdatePinnedDialogs#fa0f3ca2 flags:# folder_id:flags.1?int order:flags.0?Vector<DialogPeer> = Update;\nupdateBotWebhookJSON#8317c0c3 data:DataJSON = Update;\nupdateBotWebhookJSONQuery#9b9240a6 query_id:long data:DataJSON timeout:int = Update;\nupdateBotShippingQuery#b5aefd7d query_id:long user_id:long payload:bytes shipping_address:PostAddress = Update;\nupdateBotPrecheckoutQuery#8caa9a96 flags:# query_id:long user_id:long payload:bytes info:flags.0?PaymentRequestedInfo shipping_option_id:flags.1?string currency:string total_amount:long = Update;\nupdatePhoneCall#ab0f6b1e phone_call:PhoneCall = Update;\nupdateLangPackTooLong#46560264 lang_code:string = Update;\nupdateLangPack#56022f4d difference:LangPackDifference = Update;\nupdateFavedStickers#e511996d = Update;\nupdateChannelReadMessagesContents#ea29055d flags:# channel_id:long top_msg_id:flags.0?int messages:Vector<int> = Update;\nupdateContactsReset#7084a7be = Update;\nupdateChannelAvailableMessages#b23fc698 channel_id:long available_min_id:int = Update;\nupdateDialogUnreadMark#e16459c3 flags:# unread:flags.0?true peer:DialogPeer = Update;\nupdateMessagePoll#aca1657b flags:# poll_id:long poll:flags.0?Poll results:PollResults = Update;\nupdateChatDefaultBannedRights#54c01850 peer:Peer default_banned_rights:ChatBannedRights version:int = Update;\nupdateFolderPeers#19360dc0 folder_peers:Vector<FolderPeer> pts:int pts_count:int = Update;\nupdatePeerSettings#6a7e7366 peer:Peer settings:PeerSettings = Update;\nupdatePeerLocated#b4afcfb0 peers:Vector<PeerLocated> = Update;\nupdateNewScheduledMessage#39a51dfb message:Message = Update;\nupdateDeleteScheduledMessages#90866cee peer:Peer messages:Vector<int> = Update;\nupdateTheme#8216fba3 theme:Theme = Update;\nupdateGeoLiveViewed#871fb939 peer:Peer msg_id:int = Update;\nupdateLoginToken#564fe691 = Update;\nupdateMessagePollVote#24f40e77 poll_id:long peer:Peer options:Vector<bytes> qts:int = Update;\nupdateDialogFilter#26ffde7d flags:# id:int filter:flags.0?DialogFilter = Update;\nupdateDialogFilterOrder#a5d72105 order:Vector<int> = Update;\nupdateDialogFilters#3504914f = Update;\nupdatePhoneCallSignalingData#2661bf09 phone_call_id:long data:bytes = Update;\nupdateChannelMessageForwards#d29a27f4 channel_id:long id:int forwards:int = Update;\nupdateReadChannelDiscussionInbox#d6b19546 flags:# channel_id:long top_msg_id:int read_max_id:int broadcast_id:flags.0?long broadcast_post:flags.0?int = Update;\nupdateReadChannelDiscussionOutbox#695c9e7c channel_id:long top_msg_id:int read_max_id:int = Update;\nupdatePeerBlocked#ebe07752 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer = Update;\nupdateChannelUserTyping#8c88c923 flags:# channel_id:long top_msg_id:flags.0?int from_id:Peer action:SendMessageAction = Update;\nupdatePinnedMessages#ed85eab5 flags:# pinned:flags.0?true peer:Peer messages:Vector<int> pts:int pts_count:int = Update;\nupdatePinnedChannelMessages#5bb98608 flags:# pinned:flags.0?true channel_id:long messages:Vector<int> pts:int pts_count:int = Update;\nupdateChat#f89a6a4e chat_id:long = Update;\nupdateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;\nupdateGroupCall#14b24500 chat_id:long call:GroupCall = Update;\nupdatePeerHistoryTTL#bb9bb9a5 flags:# peer:Peer ttl_period:flags.0?int = Update;\nupdateChatParticipant#d087663a flags:# chat_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChatParticipant new_participant:flags.1?ChatParticipant invite:flags.2?ExportedChatInvite qts:int = Update;\nupdateChannelParticipant#985d3abb flags:# via_chatlist:flags.3?true channel_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChannelParticipant new_participant:flags.1?ChannelParticipant invite:flags.2?ExportedChatInvite qts:int = Update;\nupdateBotStopped#c4870a49 user_id:long date:int stopped:Bool qts:int = Update;\nupdateGroupCallConnection#b783982 flags:# presentation:flags.0?true params:DataJSON = Update;\nupdateBotCommands#4d712f2e peer:Peer bot_id:long commands:Vector<BotCommand> = Update;\nupdatePendingJoinRequests#7063c3db peer:Peer requests_pending:int recent_requesters:Vector<long> = Update;\nupdateBotChatInviteRequester#11dfa986 peer:Peer date:int user_id:long about:string invite:ExportedChatInvite qts:int = Update;\nupdateMessageReactions#5e1b3cb8 flags:# peer:Peer msg_id:int top_msg_id:flags.0?int reactions:MessageReactions = Update;\nupdateAttachMenuBots#17b7a20b = Update;\nupdateWebViewResultSent#1592b79d query_id:long = Update;\nupdateBotMenuButton#14b85813 bot_id:long button:BotMenuButton = Update;\nupdateSavedRingtones#74d8be99 = Update;\nupdateTranscribedAudio#84cd5a flags:# pending:flags.0?true peer:Peer msg_id:int transcription_id:long text:string = Update;\nupdateReadFeaturedEmojiStickers#fb4c496c = Update;\nupdateUserEmojiStatus#28373599 user_id:long emoji_status:EmojiStatus = Update;\nupdateRecentEmojiStatuses#30f443db = Update;\nupdateRecentReactions#6f7863f4 = Update;\nupdateMoveStickerSetToTop#86fccf85 flags:# masks:flags.0?true emojis:flags.1?true stickerset:long = Update;\nupdateMessageExtendedMedia#5a73a98c peer:Peer msg_id:int extended_media:MessageExtendedMedia = Update;\nupdateChannelPinnedTopic#192efbe3 flags:# pinned:flags.0?true channel_id:long topic_id:int = Update;\nupdateChannelPinnedTopics#fe198602 flags:# channel_id:long order:flags.0?Vector<int> = Update;\nupdateUser#20529438 user_id:long = Update;\nupdateAutoSaveSettings#ec05b097 = Update;\nupdateGroupInvitePrivacyForbidden#ccf08ad6 user_id:long = Update;\nupdateStory#75b3b798 peer:Peer story:StoryItem = Update;\nupdateReadStories#f74e932b peer:Peer max_id:int = Update;\nupdateStoryID#1bf335b9 id:int random_id:long = Update;\nupdateStoriesStealthMode#2c084dc1 stealth_mode:StoriesStealthMode = Update;\nupdateSentStoryReaction#7d627683 peer:Peer story_id:int reaction:Reaction = Update;\nupdateBotChatBoost#904dd49c peer:Peer boost:Boost qts:int = Update;\nupdateChannelViewForumAsMessages#7b68920 channel_id:long enabled:Bool = Update;\nupdatePeerWallpaper#ae3f101d flags:# wallpaper_overridden:flags.1?true peer:Peer wallpaper:flags.0?WallPaper = Update;\nupdates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;\nupdates.differenceEmpty#5d75a138 date:int seq:int = updates.Difference;\nupdates.difference#f49ca0 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> state:updates.State = updates.Difference;\nupdates.differenceSlice#a8fb1981 new_messages:Vector<Message> new_encrypted_messages:Vector<EncryptedMessage> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> intermediate_state:updates.State = updates.Difference;\nupdates.differenceTooLong#4afe8f6d pts:int = updates.Difference;\nupdatesTooLong#e317af7e = Updates;\nupdateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;\nupdateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;\nupdateShort#78d4dec1 update:Update date:int = Updates;\nupdatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;\nupdates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;\nupdateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;\nphotos.photos#8dca6aa5 photos:Vector<Photo> users:Vector<User> = photos.Photos;\nphotos.photosSlice#15051f54 count:int photos:Vector<Photo> users:Vector<User> = photos.Photos;\nphotos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;\nupload.file#96a18d5 type:storage.FileType mtime:int bytes:bytes = upload.File;\nupload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;\ndcOption#18b7a10d flags:# ipv6:flags.0?true media_only:flags.1?true tcpo_only:flags.2?true cdn:flags.3?true static:flags.4?true this_port_only:flags.5?true id:int ip_address:string port:int secret:flags.10?bytes = DcOption;\nconfig#cc1a241e flags:# default_p2p_contacts:flags.3?true preload_featured_stickers:flags.4?true revoke_pm_inbox:flags.6?true blocked_mode:flags.8?true force_try_ipv6:flags.14?true date:int expires:int test_mode:Bool this_dc:int dc_options:Vector<DcOption> dc_txt_domain_name:string chat_size_max:int megagroup_size_max:int forwarded_count_max:int online_update_period_ms:int offline_blur_timeout_ms:int offline_idle_timeout_ms:int online_cloud_timeout_ms:int notify_cloud_delay_ms:int notify_default_delay_ms:int push_chat_period_ms:int push_chat_limit:int edit_time_limit:int revoke_time_limit:int revoke_pm_time_limit:int rating_e_decay:int stickers_recent_limit:int channels_read_media_period:int tmp_sessions:flags.0?int call_receive_timeout_ms:int call_ring_timeout_ms:int call_connect_timeout_ms:int call_packet_timeout_ms:int me_url_prefix:string autoupdate_url_prefix:flags.7?string gif_search_username:flags.9?string venue_search_username:flags.10?string img_search_username:flags.11?string static_maps_provider:flags.12?string caption_length_max:int message_length_max:int webfile_dc_id:int suggested_lang_code:flags.2?string lang_pack_version:flags.2?int base_lang_pack_version:flags.2?int reactions_default:flags.15?Reaction autologin_token:flags.16?string = Config;\nnearestDc#8e1a1775 country:string this_dc:int nearest_dc:int = NearestDc;\nhelp.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;\nhelp.noAppUpdate#c45a6536 = help.AppUpdate;\nhelp.inviteText#18cb9f78 message:string = help.InviteText;\nencryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;\nencryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;\nencryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;\nencryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;\nencryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;\ninputEncryptedChat#f141b5e1 chat_id:int access_hash:long = InputEncryptedChat;\nencryptedFileEmpty#c21f497e = EncryptedFile;\nencryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;\ninputEncryptedFileEmpty#1837c364 = InputEncryptedFile;\ninputEncryptedFileUploaded#64bd0306 id:long parts:int md5_checksum:string key_fingerprint:int = InputEncryptedFile;\ninputEncryptedFile#5a17b5e5 id:long access_hash:long = InputEncryptedFile;\ninputEncryptedFileBigUploaded#2dc173c8 id:long parts:int key_fingerprint:int = InputEncryptedFile;\nencryptedMessage#ed18c118 random_id:long chat_id:int date:int bytes:bytes file:EncryptedFile = EncryptedMessage;\nencryptedMessageService#23734b06 random_id:long chat_id:int date:int bytes:bytes = EncryptedMessage;\nmessages.dhConfigNotModified#c0e24635 random:bytes = messages.DhConfig;\nmessages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;\nmessages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;\nmessages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;\ninputDocumentEmpty#72f0eaae = InputDocument;\ninputDocument#1abfb575 id:long access_hash:long file_reference:bytes = InputDocument;\ndocumentEmpty#36f8c871 id:long = Document;\ndocument#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;\nhelp.support#17c6b5f6 phone_number:string user:User = help.Support;\nnotifyPeer#9fd40bd8 peer:Peer = NotifyPeer;\nnotifyUsers#b4c83b4c = NotifyPeer;\nnotifyChats#c007cec3 = NotifyPeer;\nnotifyBroadcasts#d612e8ef = NotifyPeer;\nnotifyForumTopic#226e6308 peer:Peer top_msg_id:int = NotifyPeer;\nsendMessageTypingAction#16bf744e = SendMessageAction;\nsendMessageCancelAction#fd5ec8f5 = SendMessageAction;\nsendMessageRecordVideoAction#a187d66f = SendMessageAction;\nsendMessageUploadVideoAction#e9763aec progress:int = SendMessageAction;\nsendMessageRecordAudioAction#d52f73f7 = SendMessageAction;\nsendMessageUploadAudioAction#f351d7ab progress:int = SendMessageAction;\nsendMessageUploadPhotoAction#d1d34a26 progress:int = SendMessageAction;\nsendMessageUploadDocumentAction#aa0cd9e4 progress:int = SendMessageAction;\nsendMessageGeoLocationAction#176f8ba1 = SendMessageAction;\nsendMessageChooseContactAction#628cbc6f = SendMessageAction;\nsendMessageGamePlayAction#dd6a8f48 = SendMessageAction;\nsendMessageRecordRoundAction#88f27fbc = SendMessageAction;\nsendMessageUploadRoundAction#243e1c66 progress:int = SendMessageAction;\nspeakingInGroupCallAction#d92c2285 = SendMessageAction;\nsendMessageHistoryImportAction#dbda9246 progress:int = SendMessageAction;\nsendMessageChooseStickerAction#b05ac6b1 = SendMessageAction;\nsendMessageEmojiInteraction#25972bcb emoticon:string msg_id:int interaction:DataJSON = SendMessageAction;\nsendMessageEmojiInteractionSeen#b665902e emoticon:string = SendMessageAction;\ncontacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;\ninputPrivacyKeyStatusTimestamp#4f96cb18 = InputPrivacyKey;\ninputPrivacyKeyChatInvite#bdfb0426 = InputPrivacyKey;\ninputPrivacyKeyPhoneCall#fabadc5f = InputPrivacyKey;\ninputPrivacyKeyPhoneP2P#db9e70d2 = InputPrivacyKey;\ninputPrivacyKeyForwards#a4dd4c08 = InputPrivacyKey;\ninputPrivacyKeyProfilePhoto#5719bacc = InputPrivacyKey;\ninputPrivacyKeyPhoneNumber#352dafa = InputPrivacyKey;\ninputPrivacyKeyAddedByPhone#d1219bdd = InputPrivacyKey;\ninputPrivacyKeyVoiceMessages#aee69d68 = InputPrivacyKey;\ninputPrivacyKeyAbout#3823cc40 = InputPrivacyKey;\nprivacyKeyStatusTimestamp#bc2eab30 = PrivacyKey;\nprivacyKeyChatInvite#500e6dfa = PrivacyKey;\nprivacyKeyPhoneCall#3d662b7b = PrivacyKey;\nprivacyKeyPhoneP2P#39491cc8 = PrivacyKey;\nprivacyKeyForwards#69ec56a3 = PrivacyKey;\nprivacyKeyProfilePhoto#96151fed = PrivacyKey;\nprivacyKeyPhoneNumber#d19ae46d = PrivacyKey;\nprivacyKeyAddedByPhone#42ffd42b = PrivacyKey;\nprivacyKeyVoiceMessages#697f414 = PrivacyKey;\nprivacyKeyAbout#a486b761 = PrivacyKey;\ninputPrivacyValueAllowContacts#d09e07b = InputPrivacyRule;\ninputPrivacyValueAllowAll#184b35ce = InputPrivacyRule;\ninputPrivacyValueAllowUsers#131cc67f users:Vector<InputUser> = InputPrivacyRule;\ninputPrivacyValueDisallowContacts#ba52007 = InputPrivacyRule;\ninputPrivacyValueDisallowAll#d66b66c9 = InputPrivacyRule;\ninputPrivacyValueDisallowUsers#90110467 users:Vector<InputUser> = InputPrivacyRule;\ninputPrivacyValueAllowChatParticipants#840649cf chats:Vector<long> = InputPrivacyRule;\ninputPrivacyValueDisallowChatParticipants#e94f0f86 chats:Vector<long> = InputPrivacyRule;\ninputPrivacyValueAllowCloseFriends#2f453e49 = InputPrivacyRule;\nprivacyValueAllowContacts#fffe1bac = PrivacyRule;\nprivacyValueAllowAll#65427b82 = PrivacyRule;\nprivacyValueAllowUsers#b8905fb2 users:Vector<long> = PrivacyRule;\nprivacyValueDisallowContacts#f888fa1a = PrivacyRule;\nprivacyValueDisallowAll#8b73e763 = PrivacyRule;\nprivacyValueDisallowUsers#e4621141 users:Vector<long> = PrivacyRule;\nprivacyValueAllowChatParticipants#6b134e8e chats:Vector<long> = PrivacyRule;\nprivacyValueDisallowChatParticipants#41c87565 chats:Vector<long> = PrivacyRule;\nprivacyValueAllowCloseFriends#f7e8d89b = PrivacyRule;\naccount.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;\naccountDaysTTL#b8d0afdf days:int = AccountDaysTTL;\ndocumentAttributeImageSize#6c37c15c w:int h:int = DocumentAttribute;\ndocumentAttributeAnimated#11b58939 = DocumentAttribute;\ndocumentAttributeSticker#6319d612 flags:# mask:flags.1?true alt:string stickerset:InputStickerSet mask_coords:flags.0?MaskCoords = DocumentAttribute;\ndocumentAttributeVideo#d38ff1c2 flags:# round_message:flags.0?true supports_streaming:flags.1?true nosound:flags.3?true duration:double w:int h:int preload_prefix_size:flags.2?int = DocumentAttribute;\ndocumentAttributeAudio#9852f9c6 flags:# voice:flags.10?true duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;\ndocumentAttributeFilename#15590068 file_name:string = DocumentAttribute;\ndocumentAttributeHasStickers#9801d2f7 = DocumentAttribute;\ndocumentAttributeCustomEmoji#fd149899 flags:# free:flags.0?true text_color:flags.1?true alt:string stickerset:InputStickerSet = DocumentAttribute;\nmessages.stickersNotModified#f1749a22 = messages.Stickers;\nmessages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;\nstickerPack#12b299d4 emoticon:string documents:Vector<long> = StickerPack;\nmessages.allStickersNotModified#e86602c3 = messages.AllStickers;\nmessages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;\nmessages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;\nwebPageEmpty#211a1788 flags:# id:long url:flags.0?string = WebPage;\nwebPagePending#b0d13e47 flags:# id:long url:flags.0?string date:int = WebPage;\nwebPage#e89c45b2 flags:# has_large_media:flags.13?true id:long url:string display_url:string hash:int type:flags.0?string site_name:flags.1?string title:flags.2?string description:flags.3?string photo:flags.4?Photo embed_url:flags.5?string embed_type:flags.5?string embed_width:flags.6?int embed_height:flags.6?int duration:flags.7?int author:flags.8?string document:flags.9?Document cached_page:flags.10?Page attributes:flags.12?Vector<WebPageAttribute> = WebPage;\nwebPageNotModified#7311ca11 flags:# cached_page_views:flags.0?int = WebPage;\nauthorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;\naccount.authorizations#4bff8ea0 authorization_ttl_days:int authorizations:Vector<Authorization> = account.Authorizations;\naccount.password#957b50fb flags:# has_recovery:flags.0?true has_secure_values:flags.1?true has_password:flags.2?true current_algo:flags.2?PasswordKdfAlgo srp_B:flags.2?bytes srp_id:flags.2?long hint:flags.3?string email_unconfirmed_pattern:flags.4?string new_algo:PasswordKdfAlgo new_secure_algo:SecurePasswordKdfAlgo secure_random:bytes pending_reset_date:flags.5?int login_email_pattern:flags.6?string = account.Password;\naccount.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;\naccount.passwordInputSettings#c23727c9 flags:# new_algo:flags.0?PasswordKdfAlgo new_password_hash:flags.0?bytes hint:flags.0?string email:flags.1?string new_secure_settings:flags.2?SecureSecretSettings = account.PasswordInputSettings;\nauth.passwordRecovery#137948a5 email_pattern:string = auth.PasswordRecovery;\nreceivedNotifyMessage#a384b779 id:int flags:int = ReceivedNotifyMessage;\nchatInviteExported#ab4a819 flags:# revoked:flags.0?true permanent:flags.5?true request_needed:flags.6?true link:string admin_id:long date:int start_date:flags.4?int expire_date:flags.1?int usage_limit:flags.2?int usage:flags.3?int requested:flags.7?int title:flags.8?string = ExportedChatInvite;\nchatInvitePublicJoinRequests#ed107ab7 = ExportedChatInvite;\nchatInviteAlready#5a686d7c chat:Chat = ChatInvite;\nchatInvite#cde0ec40 flags:# channel:flags.0?true broadcast:flags.1?true public:flags.2?true megagroup:flags.3?true request_needed:flags.6?true verified:flags.7?true scam:flags.8?true fake:flags.9?true title:string about:flags.5?string photo:Photo participants_count:int participants:flags.4?Vector<User> color:int = ChatInvite;\nchatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;\ninputStickerSetEmpty#ffb62b95 = InputStickerSet;\ninputStickerSetID#9de7a269 id:long access_hash:long = InputStickerSet;\ninputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;\ninputStickerSetAnimatedEmoji#28703c8 = InputStickerSet;\ninputStickerSetDice#e67f520e emoticon:string = InputStickerSet;\ninputStickerSetAnimatedEmojiAnimations#cde3739 = InputStickerSet;\ninputStickerSetPremiumGifts#c88b3b02 = InputStickerSet;\ninputStickerSetEmojiGenericAnimations#4c4d4ce = InputStickerSet;\ninputStickerSetEmojiDefaultStatuses#29d0f5ee = InputStickerSet;\ninputStickerSetEmojiDefaultTopicIcons#44c1f8e9 = InputStickerSet;\nstickerSet#2dd14edc flags:# archived:flags.1?true official:flags.2?true masks:flags.3?true animated:flags.5?true videos:flags.6?true emojis:flags.7?true text_color:flags.9?true installed_date:flags.0?int id:long access_hash:long title:string short_name:string thumbs:flags.4?Vector<PhotoSize> thumb_dc_id:flags.4?int thumb_version:flags.4?int thumb_document_id:flags.8?long count:int hash:int = StickerSet;\nmessages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;\nmessages.stickerSetNotModified#d3f924eb = messages.StickerSet;\nbotCommand#c27ac8c7 command:string description:string = BotCommand;\nbotInfo#8f300b57 flags:# user_id:flags.0?long description:flags.1?string description_photo:flags.4?Photo description_document:flags.5?Document commands:flags.2?Vector<BotCommand> menu_button:flags.3?BotMenuButton = BotInfo;\nkeyboardButton#a2fa4880 text:string = KeyboardButton;\nkeyboardButtonUrl#258aff05 text:string url:string = KeyboardButton;\nkeyboardButtonCallback#35bbdb6b flags:# requires_password:flags.0?true text:string data:bytes = KeyboardButton;\nkeyboardButtonRequestPhone#b16a6c29 text:string = KeyboardButton;\nkeyboardButtonRequestGeoLocation#fc796b3f text:string = KeyboardButton;\nkeyboardButtonSwitchInline#93b9fbb5 flags:# same_peer:flags.0?true text:string query:string peer_types:flags.1?Vector<InlineQueryPeerType> = KeyboardButton;\nkeyboardButtonGame#50f41ccf text:string = KeyboardButton;\nkeyboardButtonBuy#afd93fbb text:string = KeyboardButton;\nkeyboardButtonUrlAuth#10b78d29 flags:# text:string fwd_text:flags.0?string url:string button_id:int = KeyboardButton;\ninputKeyboardButtonUrlAuth#d02e7fd4 flags:# request_write_access:flags.0?true text:string fwd_text:flags.1?string url:string bot:InputUser = KeyboardButton;\nkeyboardButtonRequestPoll#bbc7515d flags:# quiz:flags.0?Bool text:string = KeyboardButton;\ninputKeyboardButtonUserProfile#e988037b text:string user_id:InputUser = KeyboardButton;\nkeyboardButtonUserProfile#308660c1 text:string user_id:long = KeyboardButton;\nkeyboardButtonWebView#13767230 text:string url:string = KeyboardButton;\nkeyboardButtonSimpleWebView#a0c0505c text:string url:string = KeyboardButton;\nkeyboardButtonRequestPeer#d0b468c text:string button_id:int peer_type:RequestPeerType = KeyboardButton;\nkeyboardButtonRow#77608b83 buttons:Vector<KeyboardButton> = KeyboardButtonRow;\nreplyKeyboardHide#a03e5b85 flags:# selective:flags.2?true = ReplyMarkup;\nreplyKeyboardForceReply#86b40b08 flags:# single_use:flags.1?true selective:flags.2?true placeholder:flags.3?string = ReplyMarkup;\nreplyKeyboardMarkup#85dd99d1 flags:# resize:flags.0?true single_use:flags.1?true selective:flags.2?true persistent:flags.4?true rows:Vector<KeyboardButtonRow> placeholder:flags.3?string = ReplyMarkup;\nreplyInlineMarkup#48a30254 rows:Vector<KeyboardButtonRow> = ReplyMarkup;\nmessageEntityUnknown#bb92ba95 offset:int length:int = MessageEntity;\nmessageEntityMention#fa04579d offset:int length:int = MessageEntity;\nmessageEntityHashtag#6f635b0d offset:int length:int = MessageEntity;\nmessageEntityBotCommand#6cef8ac7 offset:int length:int = MessageEntity;\nmessageEntityUrl#6ed02538 offset:int length:int = MessageEntity;\nmessageEntityEmail#64e475c2 offset:int length:int = MessageEntity;\nmessageEntityBold#bd610bc9 offset:int length:int = MessageEntity;\nmessageEntityItalic#826f8b60 offset:int length:int = MessageEntity;\nmessageEntityCode#28a20571 offset:int length:int = MessageEntity;\nmessageEntityPre#73924be0 offset:int length:int language:string = MessageEntity;\nmessageEntityTextUrl#76a6d327 offset:int length:int url:string = MessageEntity;\nmessageEntityMentionName#dc7b1140 offset:int length:int user_id:long = MessageEntity;\ninputMessageEntityMentionName#208e68c9 offset:int length:int user_id:InputUser = MessageEntity;\nmessageEntityPhone#9b69e34b offset:int length:int = MessageEntity;\nmessageEntityCashtag#4c4e743f offset:int length:int = MessageEntity;\nmessageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity;\nmessageEntityStrike#bf0693d4 offset:int length:int = MessageEntity;\nmessageEntityBankCard#761e6af4 offset:int length:int = MessageEntity;\nmessageEntitySpoiler#32ca960f offset:int length:int = MessageEntity;\nmessageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;\nmessageEntityBlockquote#20df5d0 offset:int length:int = MessageEntity;\ninputChannelEmpty#ee8c1e86 = InputChannel;\ninputChannel#f35aec28 channel_id:long access_hash:long = InputChannel;\ninputChannelFromMessage#5b934f9d peer:InputPeer msg_id:int channel_id:long = InputChannel;\ncontacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;\nmessageRange#ae30253 min_id:int max_id:int = MessageRange;\nupdates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;\nupdates.channelDifferenceTooLong#a4bcc6fe flags:# final:flags.0?true timeout:flags.1?int dialog:Dialog messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;\nupdates.channelDifference#2064674e flags:# final:flags.0?true pts:int timeout:flags.1?int new_messages:Vector<Message> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;\nchannelMessagesFilterEmpty#94d42ee7 = ChannelMessagesFilter;\nchannelMessagesFilter#cd77d957 flags:# exclude_new_messages:flags.1?true ranges:Vector<MessageRange> = ChannelMessagesFilter;\nchannelParticipant#c00c07c0 user_id:long date:int = ChannelParticipant;\nchannelParticipantSelf#35a8bfa7 flags:# via_request:flags.0?true user_id:long inviter_id:long date:int = ChannelParticipant;\nchannelParticipantCreator#2fe601d3 flags:# user_id:long admin_rights:ChatAdminRights rank:flags.0?string = ChannelParticipant;\nchannelParticipantAdmin#34c3bb53 flags:# can_edit:flags.0?true self:flags.1?true user_id:long inviter_id:flags.1?long promoted_by:long date:int admin_rights:ChatAdminRights rank:flags.2?string = ChannelParticipant;\nchannelParticipantBanned#6df8014e flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights = ChannelParticipant;\nchannelParticipantLeft#1b03f006 peer:Peer = ChannelParticipant;\nchannelParticipantsRecent#de3f3c79 = ChannelParticipantsFilter;\nchannelParticipantsAdmins#b4608969 = ChannelParticipantsFilter;\nchannelParticipantsKicked#a3b54985 q:string = ChannelParticipantsFilter;\nchannelParticipantsBots#b0d1865b = ChannelParticipantsFilter;\nchannelParticipantsBanned#1427a5e1 q:string = ChannelParticipantsFilter;\nchannelParticipantsSearch#656ac4b q:string = ChannelParticipantsFilter;\nchannelParticipantsContacts#bb6ae88d q:string = ChannelParticipantsFilter;\nchannelParticipantsMentions#e04b5ceb flags:# q:flags.0?string top_msg_id:flags.1?int = ChannelParticipantsFilter;\nchannels.channelParticipants#9ab0feaf count:int participants:Vector<ChannelParticipant> chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipants;\nchannels.channelParticipantsNotModified#f0173fe9 = channels.ChannelParticipants;\nchannels.channelParticipant#dfb80317 participant:ChannelParticipant chats:Vector<Chat> users:Vector<User> = channels.ChannelParticipant;\nhelp.termsOfService#780a0310 flags:# popup:flags.0?true id:DataJSON text:string entities:Vector<MessageEntity> min_age_confirm:flags.1?int = help.TermsOfService;\nmessages.savedGifsNotModified#e8025ca2 = messages.SavedGifs;\nmessages.savedGifs#84a02a0d hash:long gifs:Vector<Document> = messages.SavedGifs;\ninputBotInlineMessageMediaAuto#3380c786 flags:# invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageText#3dcd7a87 flags:# no_webpage:flags.0?true invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaGeo#96929a85 flags:# geo_point:InputGeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaVenue#417bbf11 flags:# geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaContact#a6edbffd flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageGame#4b425864 flags:# reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaInvoice#d7e78225 flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:string provider_data:DataJSON reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineMessageMediaWebPage#bddcc510 flags:# invert_media:flags.3?true force_large_media:flags.4?true force_small_media:flags.5?true optional:flags.6?true message:string entities:flags.1?Vector<MessageEntity> url:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;\ninputBotInlineResult#88bf9319 flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?InputWebDocument content:flags.5?InputWebDocument send_message:InputBotInlineMessage = InputBotInlineResult;\ninputBotInlineResultPhoto#a8d864a7 id:string type:string photo:InputPhoto send_message:InputBotInlineMessage = InputBotInlineResult;\ninputBotInlineResultDocument#fff8fdc4 flags:# id:string type:string title:flags.1?string description:flags.2?string document:InputDocument send_message:InputBotInlineMessage = InputBotInlineResult;\ninputBotInlineResultGame#4fa417f2 id:string short_name:string send_message:InputBotInlineMessage = InputBotInlineResult;\nbotInlineMessageMediaAuto#764cf810 flags:# invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageText#8c7f65e2 flags:# no_webpage:flags.0?true invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaGeo#51846fd flags:# geo:GeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaVenue#8a86659c flags:# geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaContact#18d1cdc2 flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaInvoice#354a9b09 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument currency:string total_amount:long reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineMessageMediaWebPage#809ad9a6 flags:# invert_media:flags.3?true force_large_media:flags.4?true force_small_media:flags.5?true manual:flags.7?true safe:flags.8?true message:string entities:flags.1?Vector<MessageEntity> url:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;\nbotInlineResult#11965f3a flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?WebDocument content:flags.5?WebDocument send_message:BotInlineMessage = BotInlineResult;\nbotInlineMediaResult#17db940b flags:# id:string type:string photo:flags.0?Photo document:flags.1?Document title:flags.2?string description:flags.3?string send_message:BotInlineMessage = BotInlineResult;\nmessages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;\nexportedMessageLink#5dab1af4 link:string html:string = ExportedMessageLink;\nmessageFwdHeader#5f777dce flags:# imported:flags.7?true from_id:flags.0?Peer from_name:flags.5?string date:int channel_post:flags.2?int post_author:flags.3?string saved_from_peer:flags.4?Peer saved_from_msg_id:flags.4?int psa_type:flags.6?string = MessageFwdHeader;\nauth.codeTypeSms#72a3158c = auth.CodeType;\nauth.codeTypeCall#741cd3e3 = auth.CodeType;\nauth.codeTypeFlashCall#226ccefb = auth.CodeType;\nauth.codeTypeMissedCall#d61ad6ee = auth.CodeType;\nauth.codeTypeFragmentSms#6ed998c = auth.CodeType;\nauth.sentCodeTypeApp#3dbb5986 length:int = auth.SentCodeType;\nauth.sentCodeTypeSms#c000bba2 length:int = auth.SentCodeType;\nauth.sentCodeTypeCall#5353e5a7 length:int = auth.SentCodeType;\nauth.sentCodeTypeFlashCall#ab03c6d9 pattern:string = auth.SentCodeType;\nauth.sentCodeTypeMissedCall#82006484 prefix:string length:int = auth.SentCodeType;\nauth.sentCodeTypeEmailCode#f450f59b flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true email_pattern:string length:int reset_available_period:flags.3?int reset_pending_date:flags.4?int = auth.SentCodeType;\nauth.sentCodeTypeSetUpEmailRequired#a5491dea flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true = auth.SentCodeType;\nauth.sentCodeTypeFragmentSms#d9565c39 url:string length:int = auth.SentCodeType;\nauth.sentCodeTypeFirebaseSms#e57b1432 flags:# nonce:flags.0?bytes receipt:flags.1?string push_timeout:flags.1?int length:int = auth.SentCodeType;\nmessages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;\nmessages.messageEditData#26b5dde6 flags:# caption:flags.0?true = messages.MessageEditData;\ninputBotInlineMessageID#890c3d89 dc_id:int id:long access_hash:long = InputBotInlineMessageID;\ninputBotInlineMessageID64#b6d915d7 dc_id:int owner_id:long id:int access_hash:long = InputBotInlineMessageID;\ninlineBotSwitchPM#3c20629f text:string start_param:string = InlineBotSwitchPM;\nmessages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;\ntopPeer#edcdc05b peer:Peer rating:double = TopPeer;\ntopPeerCategoryBotsPM#ab661b5b = TopPeerCategory;\ntopPeerCategoryBotsInline#148677e2 = TopPeerCategory;\ntopPeerCategoryCorrespondents#637b7ed = TopPeerCategory;\ntopPeerCategoryGroups#bd17a14a = TopPeerCategory;\ntopPeerCategoryChannels#161d9628 = TopPeerCategory;\ntopPeerCategoryPhoneCalls#1e76a78c = TopPeerCategory;\ntopPeerCategoryForwardUsers#a8406ca9 = TopPeerCategory;\ntopPeerCategoryForwardChats#fbeec0f0 = TopPeerCategory;\ntopPeerCategoryPeers#fb834291 category:TopPeerCategory count:int peers:Vector<TopPeer> = TopPeerCategoryPeers;\ncontacts.topPeersNotModified#de266ef5 = contacts.TopPeers;\ncontacts.topPeers#70b772a8 categories:Vector<TopPeerCategoryPeers> chats:Vector<Chat> users:Vector<User> = contacts.TopPeers;\ncontacts.topPeersDisabled#b52c939d = contacts.TopPeers;\ndraftMessageEmpty#1b0c841a flags:# date:flags.0?int = DraftMessage;\ndraftMessage#3fccf7ef flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int = DraftMessage;\nmessages.featuredStickersNotModified#c6dc0c66 count:int = messages.FeaturedStickers;\nmessages.featuredStickers#be382906 flags:# premium:flags.0?true hash:long count:int sets:Vector<StickerSetCovered> unread:Vector<long> = messages.FeaturedStickers;\nmessages.recentStickersNotModified#b17f890 = messages.RecentStickers;\nmessages.recentStickers#88d37c56 hash:long packs:Vector<StickerPack> stickers:Vector<Document> dates:Vector<int> = messages.RecentStickers;\nmessages.archivedStickers#4fcba9c8 count:int sets:Vector<StickerSetCovered> = messages.ArchivedStickers;\nmessages.stickerSetInstallResultSuccess#38641628 = messages.StickerSetInstallResult;\nmessages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;\nstickerSetCovered#6410a5d2 set:StickerSet cover:Document = StickerSetCovered;\nstickerSetMultiCovered#3407e51b set:StickerSet covers:Vector<Document> = StickerSetCovered;\nstickerSetFullCovered#40d13c0e set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = StickerSetCovered;\nstickerSetNoCovered#77b15d1c set:StickerSet = StickerSetCovered;\nmaskCoords#aed6dbb2 n:int x:double y:double zoom:double = MaskCoords;\ninputStickeredMediaPhoto#4a992157 id:InputPhoto = InputStickeredMedia;\ninputStickeredMediaDocument#438865b id:InputDocument = InputStickeredMedia;\ngame#bdf9653b flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document = Game;\ninputGameID#32c3e77 id:long access_hash:long = InputGame;\ninputGameShortName#c331e80a bot_id:InputUser short_name:string = InputGame;\nhighScore#73a379eb pos:int user_id:long score:int = HighScore;\nmessages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;\ntextEmpty#dc3d824f = RichText;\ntextPlain#744694e0 text:string = RichText;\ntextBold#6724abc4 text:RichText = RichText;\ntextItalic#d912a59c text:RichText = RichText;\ntextUnderline#c12622c4 text:RichText = RichText;\ntextStrike#9bf8bb95 text:RichText = RichText;\ntextFixed#6c3f19b9 text:RichText = RichText;\ntextUrl#3c2884c1 text:RichText url:string webpage_id:long = RichText;\ntextEmail#de5a0dd6 text:RichText email:string = RichText;\ntextConcat#7e6260d7 texts:Vector<RichText> = RichText;\ntextSubscript#ed6a8504 text:RichText = RichText;\ntextSuperscript#c7fb5e01 text:RichText = RichText;\ntextMarked#34b8621 text:RichText = RichText;\ntextPhone#1ccb966a text:RichText phone:string = RichText;\ntextImage#81ccf4f document_id:long w:int h:int = RichText;\ntextAnchor#35553762 text:RichText name:string = RichText;\npageBlockUnsupported#13567e8a = PageBlock;\npageBlockTitle#70abc3fd text:RichText = PageBlock;\npageBlockSubtitle#8ffa9a1f text:RichText = PageBlock;\npageBlockAuthorDate#baafe5e0 author:RichText published_date:int = PageBlock;\npageBlockHeader#bfd064ec text:RichText = PageBlock;\npageBlockSubheader#f12bb6e1 text:RichText = PageBlock;\npageBlockParagraph#467a0766 text:RichText = PageBlock;\npageBlockPreformatted#c070d93e text:RichText language:string = PageBlock;\npageBlockFooter#48870999 text:RichText = PageBlock;\npageBlockDivider#db20b188 = PageBlock;\npageBlockAnchor#ce0d37b0 name:string = PageBlock;\npageBlockList#e4e88011 items:Vector<PageListItem> = PageBlock;\npageBlockBlockquote#263d7c26 text:RichText caption:RichText = PageBlock;\npageBlockPullquote#4f4456d3 text:RichText caption:RichText = PageBlock;\npageBlockPhoto#1759c560 flags:# photo_id:long caption:PageCaption url:flags.0?string webpage_id:flags.0?long = PageBlock;\npageBlockVideo#7c8fe7b6 flags:# autoplay:flags.0?true loop:flags.1?true video_id:long caption:PageCaption = PageBlock;\npageBlockCover#39f23300 cover:PageBlock = PageBlock;\npageBlockEmbed#a8718dc5 flags:# full_width:flags.0?true allow_scrolling:flags.3?true url:flags.1?string html:flags.2?string poster_photo_id:flags.4?long w:flags.5?int h:flags.5?int caption:PageCaption = PageBlock;\npageBlockEmbedPost#f259a80b url:string webpage_id:long author_photo_id:long author:string date:int blocks:Vector<PageBlock> caption:PageCaption = PageBlock;\npageBlockCollage#65a0fa4d items:Vector<PageBlock> caption:PageCaption = PageBlock;\npageBlockSlideshow#31f9590 items:Vector<PageBlock> caption:PageCaption = PageBlock;\npageBlockChannel#ef1751b5 channel:Chat = PageBlock;\npageBlockAudio#804361ea audio_id:long caption:PageCaption = PageBlock;\npageBlockKicker#1e148390 text:RichText = PageBlock;\npageBlockTable#bf4dea82 flags:# bordered:flags.0?true striped:flags.1?true title:RichText rows:Vector<PageTableRow> = PageBlock;\npageBlockOrderedList#9a8ae1e1 items:Vector<PageListOrderedItem> = PageBlock;\npageBlockDetails#76768bed flags:# open:flags.0?true blocks:Vector<PageBlock> title:RichText = PageBlock;\npageBlockRelatedArticles#16115a96 title:RichText articles:Vector<PageRelatedArticle> = PageBlock;\npageBlockMap#a44f3ef6 geo:GeoPoint zoom:int w:int h:int caption:PageCaption = PageBlock;\nphoneCallDiscardReasonMissed#85e42301 = PhoneCallDiscardReason;\nphoneCallDiscardReasonDisconnect#e095c1a0 = PhoneCallDiscardReason;\nphoneCallDiscardReasonHangup#57adc690 = PhoneCallDiscardReason;\nphoneCallDiscardReasonBusy#faf7e8c9 = PhoneCallDiscardReason;\ndataJSON#7d748d04 data:string = DataJSON;\nlabeledPrice#cb296bf8 label:string amount:long = LabeledPrice;\ninvoice#5db95a15 flags:# test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:string prices:Vector<LabeledPrice> max_tip_amount:flags.8?long suggested_tip_amounts:flags.8?Vector<long> terms_url:flags.10?string = Invoice;\npaymentCharge#ea02c27e id:string provider_charge_id:string = PaymentCharge;\npostAddress#1e8caaeb street_line1:string street_line2:string city:string state:string country_iso2:string post_code:string = PostAddress;\npaymentRequestedInfo#909c3f94 flags:# name:flags.0?string phone:flags.1?string email:flags.2?string shipping_address:flags.3?PostAddress = PaymentRequestedInfo;\npaymentSavedCredentialsCard#cdc27a1f id:string title:string = PaymentSavedCredentials;\nwebDocument#1c570ed1 url:string access_hash:long size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;\nwebDocumentNoProxy#f9c8bcc6 url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;\ninputWebDocument#9bed434d url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = InputWebDocument;\ninputWebFileLocation#c239d686 url:string access_hash:long = InputWebFileLocation;\ninputWebFileGeoPointLocation#9f2221c9 geo_point:InputGeoPoint access_hash:long w:int h:int zoom:int scale:int = InputWebFileLocation;\ninputWebFileAudioAlbumThumbLocation#f46fe924 flags:# small:flags.2?true document:flags.0?InputDocument title:flags.1?string performer:flags.1?string = InputWebFileLocation;\nupload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;\npayments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;\npayments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;\npayments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;\npayments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;\npayments.paymentReceipt#70c4fe03 flags:# date:int bot_id:long provider_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice info:flags.0?PaymentRequestedInfo shipping:flags.1?ShippingOption tip_amount:flags.3?long currency:string total_amount:long credentials_title:string users:Vector<User> = payments.PaymentReceipt;\npayments.savedInfo#fb8fe43c flags:# has_saved_credentials:flags.1?true saved_info:flags.0?PaymentRequestedInfo = payments.SavedInfo;\ninputPaymentCredentialsSaved#c10eb2cf id:string tmp_password:bytes = InputPaymentCredentials;\ninputPaymentCredentials#3417d728 flags:# save:flags.0?true data:DataJSON = InputPaymentCredentials;\ninputPaymentCredentialsApplePay#aa1c39f payment_data:DataJSON = InputPaymentCredentials;\ninputPaymentCredentialsGooglePay#8ac32801 payment_token:DataJSON = InputPaymentCredentials;\naccount.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;\nshippingOption#b6213cdf id:string title:string prices:Vector<LabeledPrice> = ShippingOption;\ninputStickerSetItem#32da9e9c flags:# document:InputDocument emoji:string mask_coords:flags.0?MaskCoords keywords:flags.1?string = InputStickerSetItem;\ninputPhoneCall#1e36fded id:long access_hash:long = InputPhoneCall;\nphoneCallEmpty#5366c915 id:long = PhoneCall;\nphoneCallWaiting#c5226f17 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long protocol:PhoneCallProtocol receive_date:flags.0?int = PhoneCall;\nphoneCallRequested#14b0ed0c flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_hash:bytes protocol:PhoneCallProtocol = PhoneCall;\nphoneCallAccepted#3660c311 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_b:bytes protocol:PhoneCallProtocol = PhoneCall;\nphoneCall#967f7c67 flags:# p2p_allowed:flags.5?true video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long protocol:PhoneCallProtocol connections:Vector<PhoneConnection> start_date:int = PhoneCall;\nphoneCallDiscarded#50ca4de1 flags:# need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = PhoneCall;\nphoneConnection#9cc123c7 flags:# tcp:flags.0?true id:long ip:string ipv6:string port:int peer_tag:bytes = PhoneConnection;\nphoneConnectionWebrtc#635fe375 flags:# turn:flags.0?true stun:flags.1?true id:long ip:string ipv6:string port:int username:string password:string = PhoneConnection;\nphoneCallProtocol#fc878fc8 flags:# udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:int max_layer:int library_versions:Vector<string> = PhoneCallProtocol;\nphone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;\nupload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;\nupload.cdnFile#a99fca4f bytes:bytes = upload.CdnFile;\ncdnPublicKey#c982eaba dc_id:int public_key:string = CdnPublicKey;\ncdnConfig#5725e40a public_keys:Vector<CdnPublicKey> = CdnConfig;\nlangPackString#cad181f6 key:string value:string = LangPackString;\nlangPackStringPluralized#6c47ac9f flags:# key:string zero_value:flags.0?string one_value:flags.1?string two_value:flags.2?string few_value:flags.3?string many_value:flags.4?string other_value:string = LangPackString;\nlangPackStringDeleted#2979eeb2 key:string = LangPackString;\nlangPackDifference#f385c1f6 lang_code:string from_version:int version:int strings:Vector<LangPackString> = LangPackDifference;\nlangPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;\nchannelAdminLogEventActionChangeTitle#e6dfb825 prev_value:string new_value:string = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeAbout#55188a2e prev_value:string new_value:string = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeUsername#6a4afc38 prev_value:string new_value:string = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangePhoto#434bd2af prev_photo:Photo new_photo:Photo = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleInvites#1b7907ae new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleSignatures#26ae0971 new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionUpdatePinned#e9e82c18 message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionEditMessage#709b2405 prev_message:Message new_message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionDeleteMessage#42e047bb message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantJoin#183040d3 = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantLeave#f89777f2 = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantInvite#e31c34d8 participant:ChannelParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantToggleBan#e6d83d7e prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantToggleAdmin#d5676710 prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeStickerSet#b1c3caa7 prev_stickerset:InputStickerSet new_stickerset:InputStickerSet = ChannelAdminLogEventAction;\nchannelAdminLogEventActionTogglePreHistoryHidden#5f5c95f1 new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionDefaultBannedRights#2df5fc0a prev_banned_rights:ChatBannedRights new_banned_rights:ChatBannedRights = ChannelAdminLogEventAction;\nchannelAdminLogEventActionStopPoll#8f079643 message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeLinkedChat#50c7ac8 prev_value:long new_value:long = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeLocation#e6b76ae prev_value:ChannelLocation new_value:ChannelLocation = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleSlowMode#53909779 prev_value:int new_value:int = ChannelAdminLogEventAction;\nchannelAdminLogEventActionStartGroupCall#23209745 call:InputGroupCall = ChannelAdminLogEventAction;\nchannelAdminLogEventActionDiscardGroupCall#db9f9140 call:InputGroupCall = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantMute#f92424d2 participant:GroupCallParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantUnmute#e64429c0 participant:GroupCallParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleGroupCallSetting#56d6a247 join_muted:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantJoinByInvite#fe9fc158 flags:# via_chatlist:flags.0?true invite:ExportedChatInvite = ChannelAdminLogEventAction;\nchannelAdminLogEventActionExportedInviteDelete#5a50fca4 invite:ExportedChatInvite = ChannelAdminLogEventAction;\nchannelAdminLogEventActionExportedInviteRevoke#410a134e invite:ExportedChatInvite = ChannelAdminLogEventAction;\nchannelAdminLogEventActionExportedInviteEdit#e90ebb59 prev_invite:ExportedChatInvite new_invite:ExportedChatInvite = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantVolume#3e7f6847 participant:GroupCallParticipant = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeHistoryTTL#6e941a38 prev_value:int new_value:int = ChannelAdminLogEventAction;\nchannelAdminLogEventActionParticipantJoinByRequest#afb6144a invite:ExportedChatInvite approved_by:long = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleNoForwards#cb2ac766 new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionSendMessage#278f2868 message:Message = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeAvailableReactions#be4e0ef8 prev_value:ChatReactions new_value:ChatReactions = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeUsernames#f04fb3a9 prev_value:Vector<string> new_value:Vector<string> = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleForum#2cc6383 new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionCreateTopic#58707d28 topic:ForumTopic = ChannelAdminLogEventAction;\nchannelAdminLogEventActionEditTopic#f06fe208 prev_topic:ForumTopic new_topic:ForumTopic = ChannelAdminLogEventAction;\nchannelAdminLogEventActionDeleteTopic#ae168909 topic:ForumTopic = ChannelAdminLogEventAction;\nchannelAdminLogEventActionPinTopic#5d8d353b flags:# prev_topic:flags.0?ForumTopic new_topic:flags.1?ForumTopic = ChannelAdminLogEventAction;\nchannelAdminLogEventActionToggleAntiSpam#64f36dfc new_value:Bool = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeColor#3c2b247b prev_value:int new_value:int = ChannelAdminLogEventAction;\nchannelAdminLogEventActionChangeBackgroundEmoji#445fc434 prev_value:long new_value:long = ChannelAdminLogEventAction;\nchannelAdminLogEvent#1fad68cd id:long date:int user_id:long action:ChannelAdminLogEventAction = ChannelAdminLogEvent;\nchannels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;\nchannelAdminLogEventsFilter#ea107ae4 flags:# join:flags.0?true leave:flags.1?true invite:flags.2?true ban:flags.3?true unban:flags.4?true kick:flags.5?true unkick:flags.6?true promote:flags.7?true demote:flags.8?true info:flags.9?true settings:flags.10?true pinned:flags.11?true edit:flags.12?true delete:flags.13?true group_call:flags.14?true invites:flags.15?true send:flags.16?true forums:flags.17?true = ChannelAdminLogEventsFilter;\npopularContact#5ce14175 client_id:long importers:int = PopularContact;\nmessages.favedStickersNotModified#9e8fa6d3 = messages.FavedStickers;\nmessages.favedStickers#2cb51097 hash:long packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;\nrecentMeUrlUnknown#46e1d13d url:string = RecentMeUrl;\nrecentMeUrlUser#b92c09e2 url:string user_id:long = RecentMeUrl;\nrecentMeUrlChat#b2da71d2 url:string chat_id:long = RecentMeUrl;\nrecentMeUrlChatInvite#eb49081d url:string chat_invite:ChatInvite = RecentMeUrl;\nrecentMeUrlStickerSet#bc0a57dc url:string set:StickerSetCovered = RecentMeUrl;\nhelp.recentMeUrls#e0310d7 urls:Vector<RecentMeUrl> chats:Vector<Chat> users:Vector<User> = help.RecentMeUrls;\ninputSingleMedia#1cc6e91f flags:# media:InputMedia random_id:long message:string entities:flags.0?Vector<MessageEntity> = InputSingleMedia;\nwebAuthorization#a6f8f452 hash:long bot_id:long domain:string browser:string platform:string date_created:int date_active:int ip:string region:string = WebAuthorization;\naccount.webAuthorizations#ed56c9fc authorizations:Vector<WebAuthorization> users:Vector<User> = account.WebAuthorizations;\ninputMessageID#a676a322 id:int = InputMessage;\ninputMessageReplyTo#bad88395 id:int = InputMessage;\ninputMessagePinned#86872538 = InputMessage;\ninputMessageCallbackQuery#acfa1a7e id:int query_id:long = InputMessage;\ninputDialogPeer#fcaafeb7 peer:InputPeer = InputDialogPeer;\ninputDialogPeerFolder#64600527 folder_id:int = InputDialogPeer;\ndialogPeer#e56dbf05 peer:Peer = DialogPeer;\ndialogPeerFolder#514519e2 folder_id:int = DialogPeer;\nmessages.foundStickerSetsNotModified#d54b65d = messages.FoundStickerSets;\nmessages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;\nfileHash#f39b035c offset:long limit:int hash:bytes = FileHash;\ninputClientProxy#75588b3f address:string port:int = InputClientProxy;\nhelp.termsOfServiceUpdateEmpty#e3309f7f expires:int = help.TermsOfServiceUpdate;\nhelp.termsOfServiceUpdate#28ecf961 expires:int terms_of_service:help.TermsOfService = help.TermsOfServiceUpdate;\ninputSecureFileUploaded#3334b0f0 id:long parts:int md5_checksum:string file_hash:bytes secret:bytes = InputSecureFile;\ninputSecureFile#5367e5be id:long access_hash:long = InputSecureFile;\nsecureFileEmpty#64199744 = SecureFile;\nsecureFile#7d09c27e id:long access_hash:long size:long dc_id:int date:int file_hash:bytes secret:bytes = SecureFile;\nsecureData#8aeabec3 data:bytes data_hash:bytes secret:bytes = SecureData;\nsecurePlainPhone#7d6099dd phone:string = SecurePlainData;\nsecurePlainEmail#21ec5a5f email:string = SecurePlainData;\nsecureValueTypePersonalDetails#9d2a81e3 = SecureValueType;\nsecureValueTypePassport#3dac6a00 = SecureValueType;\nsecureValueTypeDriverLicense#6e425c4 = SecureValueType;\nsecureValueTypeIdentityCard#a0d0744b = SecureValueType;\nsecureValueTypeInternalPassport#99a48f23 = SecureValueType;\nsecureValueTypeAddress#cbe31e26 = SecureValueType;\nsecureValueTypeUtilityBill#fc36954e = SecureValueType;\nsecureValueTypeBankStatement#89137c0d = SecureValueType;\nsecureValueTypeRentalAgreement#8b883488 = SecureValueType;\nsecureValueTypePassportRegistration#99e3806a = SecureValueType;\nsecureValueTypeTemporaryRegistration#ea02ec33 = SecureValueType;\nsecureValueTypePhone#b320aadb = SecureValueType;\nsecureValueTypeEmail#8e3ca7ee = SecureValueType;\nsecureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;\ninputSecureValue#db21d0a7 flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?InputSecureFile reverse_side:flags.2?InputSecureFile selfie:flags.3?InputSecureFile translation:flags.6?Vector<InputSecureFile> files:flags.4?Vector<InputSecureFile> plain_data:flags.5?SecurePlainData = InputSecureValue;\nsecureValueHash#ed1ecdb0 type:SecureValueType hash:bytes = SecureValueHash;\nsecureValueErrorData#e8a40bd9 type:SecureValueType data_hash:bytes field:string text:string = SecureValueError;\nsecureValueErrorFrontSide#be3dfa type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorReverseSide#868a2aa5 type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorSelfie#e537ced6 type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorFile#7a700873 type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorFiles#666220e9 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;\nsecureValueError#869d758f type:SecureValueType hash:bytes text:string = SecureValueError;\nsecureValueErrorTranslationFile#a1144770 type:SecureValueType file_hash:bytes text:string = SecureValueError;\nsecureValueErrorTranslationFiles#34636dd8 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;\nsecureCredentialsEncrypted#33f0ea47 data:bytes hash:bytes secret:bytes = SecureCredentialsEncrypted;\naccount.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;\naccount.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;\nhelp.deepLinkInfoEmpty#66afa166 = help.DeepLinkInfo;\nhelp.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;\nsavedPhoneContact#1142bd56 phone:string first_name:string last_name:string date:int = SavedContact;\naccount.takeout#4dba4501 id:long = account.Takeout;\npasswordKdfAlgoUnknown#d45ab096 = PasswordKdfAlgo;\npasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow#3a912d4a salt1:bytes salt2:bytes g:int p:bytes = PasswordKdfAlgo;\nsecurePasswordKdfAlgoUnknown#4a8537 = SecurePasswordKdfAlgo;\nsecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000#bbf2dda0 salt:bytes = SecurePasswordKdfAlgo;\nsecurePasswordKdfAlgoSHA512#86471d92 salt:bytes = SecurePasswordKdfAlgo;\nsecureSecretSettings#1527bcac secure_algo:SecurePasswordKdfAlgo secure_secret:bytes secure_secret_id:long = SecureSecretSettings;\ninputCheckPasswordEmpty#9880f658 = InputCheckPasswordSRP;\ninputCheckPasswordSRP#d27ff082 srp_id:long A:bytes M1:bytes = InputCheckPasswordSRP;\nsecureRequiredType#829d99da flags:# native_names:flags.0?true selfie_required:flags.1?true translation_required:flags.2?true type:SecureValueType = SecureRequiredType;\nsecureRequiredTypeOneOf#27477b4 types:Vector<SecureRequiredType> = SecureRequiredType;\nhelp.passportConfigNotModified#bfb9f457 = help.PassportConfig;\nhelp.passportConfig#a098d6af hash:int countries_langs:DataJSON = help.PassportConfig;\ninputAppEvent#1d1b1245 time:double type:string peer:long data:JSONValue = InputAppEvent;\njsonObjectValue#c0de1bd9 key:string value:JSONValue = JSONObjectValue;\njsonNull#3f6d7b68 = JSONValue;\njsonBool#c7345e6a value:Bool = JSONValue;\njsonNumber#2be0dfa4 value:double = JSONValue;\njsonString#b71e767a value:string = JSONValue;\njsonArray#f7444763 value:Vector<JSONValue> = JSONValue;\njsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;\npageTableCell#34566b6a flags:# header:flags.0?true align_center:flags.3?true align_right:flags.4?true valign_middle:flags.5?true valign_bottom:flags.6?true text:flags.7?RichText colspan:flags.1?int rowspan:flags.2?int = PageTableCell;\npageTableRow#e0c0c5e5 cells:Vector<PageTableCell> = PageTableRow;\npageCaption#6f747657 text:RichText credit:RichText = PageCaption;\npageListItemText#b92fb6cd text:RichText = PageListItem;\npageListItemBlocks#25e073fc blocks:Vector<PageBlock> = PageListItem;\npageListOrderedItemText#5e068047 num:string text:RichText = PageListOrderedItem;\npageListOrderedItemBlocks#98dd8936 num:string blocks:Vector<PageBlock> = PageListOrderedItem;\npageRelatedArticle#b390dc08 flags:# url:string webpage_id:long title:flags.0?string description:flags.1?string photo_id:flags.2?long author:flags.3?string published_date:flags.4?int = PageRelatedArticle;\npage#98657f0d flags:# part:flags.0?true rtl:flags.1?true v2:flags.2?true url:string blocks:Vector<PageBlock> photos:Vector<Photo> documents:Vector<Document> views:flags.3?int = Page;\nhelp.supportName#8c05f1c9 name:string = help.SupportName;\nhelp.userInfoEmpty#f3ae2eed = help.UserInfo;\nhelp.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;\npollAnswer#6ca9c2e9 text:string option:bytes = PollAnswer;\npoll#86e18161 id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true question:string answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int = Poll;\npollAnswerVoters#3b6ddad2 flags:# chosen:flags.0?true correct:flags.1?true option:bytes voters:int = PollAnswerVoters;\npollResults#7adf2420 flags:# min:flags.0?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> = PollResults;\nchatOnlines#f041e250 onlines:int = ChatOnlines;\nstatsURL#47a971e0 url:string = StatsURL;\nchatAdminRights#5fb224d5 flags:# change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true = ChatAdminRights;\nchatBannedRights#9f120418 flags:# view_messages:flags.0?true send_messages:flags.1?true send_media:flags.2?true send_stickers:flags.3?true send_gifs:flags.4?true send_games:flags.5?true send_inline:flags.6?true embed_links:flags.7?true send_polls:flags.8?true change_info:flags.10?true invite_users:flags.15?true pin_messages:flags.17?true manage_topics:flags.18?true send_photos:flags.19?true send_videos:flags.20?true send_roundvideos:flags.21?true send_audios:flags.22?true send_voices:flags.23?true send_docs:flags.24?true send_plain:flags.25?true until_date:int = ChatBannedRights;\ninputWallPaper#e630b979 id:long access_hash:long = InputWallPaper;\ninputWallPaperSlug#72091c80 slug:string = InputWallPaper;\ninputWallPaperNoFile#967a462e id:long = InputWallPaper;\naccount.wallPapersNotModified#1c199183 = account.WallPapers;\naccount.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;\ncodeSettings#ad253d78 flags:# allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true logout_tokens:flags.6?Vector<bytes> token:flags.8?string app_sandbox:flags.8?Bool = CodeSettings;\nwallPaperSettings#1dc1bca4 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int = WallPaperSettings;\nautoDownloadSettings#baa57628 flags:# disabled:flags.0?true video_preload_large:flags.1?true audio_preload_next:flags.2?true phonecalls_less_data:flags.3?true stories_preload:flags.4?true photo_size_max:int video_size_max:long file_size_max:long video_upload_maxbitrate:int small_queue_active_operations_max:int large_queue_active_operations_max:int = AutoDownloadSettings;\naccount.autoDownloadSettings#63cacf26 low:AutoDownloadSettings medium:AutoDownloadSettings high:AutoDownloadSettings = account.AutoDownloadSettings;\nemojiKeyword#d5b3b9f9 keyword:string emoticons:Vector<string> = EmojiKeyword;\nemojiKeywordDeleted#236df622 keyword:string emoticons:Vector<string> = EmojiKeyword;\nemojiKeywordsDifference#5cc761bd lang_code:string from_version:int version:int keywords:Vector<EmojiKeyword> = EmojiKeywordsDifference;\nemojiURL#a575739d url:string = EmojiURL;\nemojiLanguage#b3fb5361 lang_code:string = EmojiLanguage;\nfolder#ff544e65 flags:# autofill_new_broadcasts:flags.0?true autofill_public_groups:flags.1?true autofill_new_correspondents:flags.2?true id:int title:string photo:flags.3?ChatPhoto = Folder;\ninputFolderPeer#fbd2c296 peer:InputPeer folder_id:int = InputFolderPeer;\nfolderPeer#e9baa668 peer:Peer folder_id:int = FolderPeer;\nmessages.searchCounter#e844ebff flags:# inexact:flags.1?true filter:MessagesFilter count:int = messages.SearchCounter;\nurlAuthResultRequest#92d33a0e flags:# request_write_access:flags.0?true bot:User domain:string = UrlAuthResult;\nurlAuthResultAccepted#8f8c0e4e url:string = UrlAuthResult;\nurlAuthResultDefault#a9d6db1f = UrlAuthResult;\nchannelLocationEmpty#bfb5ad8b = ChannelLocation;\nchannelLocation#209b82db geo_point:GeoPoint address:string = ChannelLocation;\npeerLocated#ca461b5d peer:Peer expires:int distance:int = PeerLocated;\npeerSelfLocated#f8ec284b expires:int = PeerLocated;\nrestrictionReason#d072acb4 platform:string reason:string text:string = RestrictionReason;\ninputTheme#3c5693e9 id:long access_hash:long = InputTheme;\ninputThemeSlug#f5890df1 slug:string = InputTheme;\ntheme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;\naccount.themesNotModified#f41eb622 = account.Themes;\naccount.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;\nauth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;\nauth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;\nauth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;\naccount.contentSettings#57e28221 flags:# sensitive_enabled:flags.0?true sensitive_can_change:flags.1?true = account.ContentSettings;\nmessages.inactiveChats#a927fec5 dates:Vector<int> chats:Vector<Chat> users:Vector<User> = messages.InactiveChats;\nbaseThemeClassic#c3a12462 = BaseTheme;\nbaseThemeDay#fbd81688 = BaseTheme;\nbaseThemeNight#b7b31ea8 = BaseTheme;\nbaseThemeTinted#6d5f77ee = BaseTheme;\nbaseThemeArctic#5b11125a = BaseTheme;\ninputThemeSettings#8fde504f flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?InputWallPaper wallpaper_settings:flags.1?WallPaperSettings = InputThemeSettings;\nthemeSettings#fa58b6d4 flags:# message_colors_animated:flags.2?true base_theme:BaseTheme accent_color:int outbox_accent_color:flags.3?int message_colors:flags.0?Vector<int> wallpaper:flags.1?WallPaper = ThemeSettings;\nwebPageAttributeTheme#54b56617 flags:# documents:flags.0?Vector<Document> settings:flags.1?ThemeSettings = WebPageAttribute;\nwebPageAttributeStory#2e94c3e7 flags:# peer:Peer id:int story:flags.0?StoryItem = WebPageAttribute;\nmessages.votesList#4899484e flags:# count:int votes:Vector<MessagePeerVote> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.VotesList;\nbankCardOpenUrl#f568028a url:string name:string = BankCardOpenUrl;\npayments.bankCardData#3e24e573 title:string open_urls:Vector<BankCardOpenUrl> = payments.BankCardData;\ndialogFilter#7438f7e8 flags:# contacts:flags.0?true non_contacts:flags.1?true groups:flags.2?true broadcasts:flags.3?true bots:flags.4?true exclude_muted:flags.11?true exclude_read:flags.12?true exclude_archived:flags.13?true id:int title:string emoticon:flags.25?string pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> exclude_peers:Vector<InputPeer> = DialogFilter;\ndialogFilterDefault#363293ae = DialogFilter;\ndialogFilterChatlist#d64a04a8 flags:# has_my_invites:flags.26?true id:int title:string emoticon:flags.25?string pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> = DialogFilter;\ndialogFilterSuggested#77744d4a filter:DialogFilter description:string = DialogFilterSuggested;\nstatsDateRangeDays#b637edaf min_date:int max_date:int = StatsDateRangeDays;\nstatsAbsValueAndPrev#cb43acde current:double previous:double = StatsAbsValueAndPrev;\nstatsPercentValue#cbce2fe0 part:double total:double = StatsPercentValue;\nstatsGraphAsync#4a27eb2d token:string = StatsGraph;\nstatsGraphError#bedc9822 error:string = StatsGraph;\nstatsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;\nstats.broadcastStats#396ca5fc period:StatsDateRangeDays followers:StatsAbsValueAndPrev views_per_post:StatsAbsValueAndPrev shares_per_post:StatsAbsValueAndPrev reactions_per_post:StatsAbsValueAndPrev views_per_story:StatsAbsValueAndPrev shares_per_story:StatsAbsValueAndPrev reactions_per_story:StatsAbsValueAndPrev enabled_notifications:StatsPercentValue growth_graph:StatsGraph followers_graph:StatsGraph mute_graph:StatsGraph top_hours_graph:StatsGraph interactions_graph:StatsGraph iv_interactions_graph:StatsGraph views_by_source_graph:StatsGraph new_followers_by_source_graph:StatsGraph languages_graph:StatsGraph reactions_by_emotion_graph:StatsGraph story_interactions_graph:StatsGraph story_reactions_by_emotion_graph:StatsGraph recent_posts_interactions:Vector<PostInteractionCounters> = stats.BroadcastStats;\nhelp.promoDataEmpty#98f6ac75 expires:int = help.PromoData;\nhelp.promoData#8c39793f flags:# proxy:flags.0?true expires:int peer:Peer chats:Vector<Chat> users:Vector<User> psa_type:flags.1?string psa_message:flags.2?string = help.PromoData;\nvideoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;\nvideoSizeEmojiMarkup#f85c413c emoji_id:long background_colors:Vector<int> = VideoSize;\nvideoSizeStickerMarkup#da082fe stickerset:InputStickerSet sticker_id:long background_colors:Vector<int> = VideoSize;\nstatsGroupTopPoster#9d04af9b user_id:long messages:int avg_chars:int = StatsGroupTopPoster;\nstatsGroupTopAdmin#d7584c87 user_id:long deleted:int kicked:int banned:int = StatsGroupTopAdmin;\nstatsGroupTopInviter#535f779d user_id:long invitations:int = StatsGroupTopInviter;\nstats.megagroupStats#ef7ff916 period:StatsDateRangeDays members:StatsAbsValueAndPrev messages:StatsAbsValueAndPrev viewers:StatsAbsValueAndPrev posters:StatsAbsValueAndPrev growth_graph:StatsGraph members_graph:StatsGraph new_members_by_source_graph:StatsGraph languages_graph:StatsGraph messages_graph:StatsGraph actions_graph:StatsGraph top_hours_graph:StatsGraph weekdays_graph:StatsGraph top_posters:Vector<StatsGroupTopPoster> top_admins:Vector<StatsGroupTopAdmin> top_inviters:Vector<StatsGroupTopInviter> users:Vector<User> = stats.MegagroupStats;\nglobalPrivacySettings#734c4ccb flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true = GlobalPrivacySettings;\nhelp.countryCode#4203c5ef flags:# country_code:string prefixes:flags.0?Vector<string> patterns:flags.1?Vector<string> = help.CountryCode;\nhelp.country#c3878e23 flags:# hidden:flags.0?true iso2:string default_name:string name:flags.1?string country_codes:Vector<help.CountryCode> = help.Country;\nhelp.countriesListNotModified#93cc1f32 = help.CountriesList;\nhelp.countriesList#87d0759e countries:Vector<help.Country> hash:int = help.CountriesList;\nmessageViews#455b853d flags:# views:flags.0?int forwards:flags.1?int replies:flags.2?MessageReplies = MessageViews;\nmessages.messageViews#b6c4f543 views:Vector<MessageViews> chats:Vector<Chat> users:Vector<User> = messages.MessageViews;\nmessages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;\nmessageReplyHeader#afbc09db flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int = MessageReplyHeader;\nmessageReplyStoryHeader#9c98bfc1 user_id:long story_id:int = MessageReplyHeader;\nmessageReplies#83d60fc2 flags:# comments:flags.0?true replies:int replies_pts:int recent_repliers:flags.1?Vector<Peer> channel_id:flags.0?long max_id:flags.2?int read_max_id:flags.3?int = MessageReplies;\npeerBlocked#e8fd8014 peer_id:Peer date:int = PeerBlocked;\nstats.messageStats#7fe91c14 views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.MessageStats;\ngroupCallDiscarded#7780bcb4 id:long access_hash:long duration:int = GroupCall;\ngroupCall#d597650c flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int = GroupCall;\ninputGroupCall#d8aa840f id:long access_hash:long = InputGroupCall;\ngroupCallParticipant#eba636fe flags:# muted:flags.0?true left:flags.1?true can_self_unmute:flags.2?true just_joined:flags.4?true versioned:flags.5?true min:flags.8?true muted_by_you:flags.9?true volume_by_admin:flags.10?true self:flags.12?true video_joined:flags.15?true peer:Peer date:int active_date:flags.3?int source:int volume:flags.7?int about:flags.11?string raise_hand_rating:flags.13?long video:flags.6?GroupCallParticipantVideo presentation:flags.14?GroupCallParticipantVideo = GroupCallParticipant;\nphone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;\nphone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;\ninlineQueryPeerTypeSameBotPM#3081ed9d = InlineQueryPeerType;\ninlineQueryPeerTypePM#833c0fac = InlineQueryPeerType;\ninlineQueryPeerTypeChat#d766c50a = InlineQueryPeerType;\ninlineQueryPeerTypeMegagroup#5ec4be43 = InlineQueryPeerType;\ninlineQueryPeerTypeBroadcast#6334ee9a = InlineQueryPeerType;\ninlineQueryPeerTypeBotPM#e3b2d0c = InlineQueryPeerType;\nmessages.historyImport#1662af0b id:long = messages.HistoryImport;\nmessages.historyImportParsed#5e0fb7b9 flags:# pm:flags.0?true group:flags.1?true title:flags.2?string = messages.HistoryImportParsed;\nmessages.affectedFoundMessages#ef8d3e6c pts:int pts_count:int offset:int messages:Vector<int> = messages.AffectedFoundMessages;\nchatInviteImporter#8c5adfd9 flags:# requested:flags.0?true via_chatlist:flags.3?true user_id:long date:int about:flags.2?string approved_by:flags.1?long = ChatInviteImporter;\nmessages.exportedChatInvites#bdc62dcc count:int invites:Vector<ExportedChatInvite> users:Vector<User> = messages.ExportedChatInvites;\nmessages.exportedChatInvite#1871be50 invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;\nmessages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;\nmessages.chatInviteImporters#81b6b00a count:int importers:Vector<ChatInviteImporter> users:Vector<User> = messages.ChatInviteImporters;\nchatAdminWithInvites#f2ecef23 admin_id:long invites_count:int revoked_invites_count:int = ChatAdminWithInvites;\nmessages.chatAdminsWithInvites#b69b72d7 admins:Vector<ChatAdminWithInvites> users:Vector<User> = messages.ChatAdminsWithInvites;\nmessages.checkedHistoryImportPeer#a24de717 confirm_text:string = messages.CheckedHistoryImportPeer;\nphone.joinAsPeers#afe5623f peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = phone.JoinAsPeers;\nphone.exportedGroupCallInvite#204bd158 link:string = phone.ExportedGroupCallInvite;\ngroupCallParticipantVideoSourceGroup#dcb118b7 semantics:string sources:Vector<int> = GroupCallParticipantVideoSourceGroup;\ngroupCallParticipantVideo#67753ac8 flags:# paused:flags.0?true endpoint:string source_groups:Vector<GroupCallParticipantVideoSourceGroup> audio_source:flags.1?int = GroupCallParticipantVideo;\nstickers.suggestedShortName#85fea03f short_name:string = stickers.SuggestedShortName;\nbotCommandScopeDefault#2f6cb2ab = BotCommandScope;\nbotCommandScopeUsers#3c4f04d8 = BotCommandScope;\nbotCommandScopeChats#6fe1a881 = BotCommandScope;\nbotCommandScopeChatAdmins#b9aa606a = BotCommandScope;\nbotCommandScopePeer#db9d897d peer:InputPeer = BotCommandScope;\nbotCommandScopePeerAdmins#3fd863d1 peer:InputPeer = BotCommandScope;\nbotCommandScopePeerUser#a1321f3 peer:InputPeer user_id:InputUser = BotCommandScope;\naccount.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;\naccount.resetPasswordRequestedWait#e9effc7d until_date:int = account.ResetPasswordResult;\naccount.resetPasswordOk#e926d63e = account.ResetPasswordResult;\nsponsoredMessage#ed5383f7 flags:# recommended:flags.5?true show_peer_photo:flags.6?true random_id:bytes from_id:flags.3?Peer chat_invite:flags.4?ChatInvite chat_invite_hash:flags.4?string channel_post:flags.2?int start_param:flags.0?string webpage:flags.9?SponsoredWebPage app:flags.10?BotApp message:string entities:flags.1?Vector<MessageEntity> button_text:flags.11?string sponsor_info:flags.7?string additional_info:flags.8?string = SponsoredMessage;\nmessages.sponsoredMessages#c9ee1d87 flags:# posts_between:flags.0?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;\nmessages.sponsoredMessagesEmpty#1839490f = messages.SponsoredMessages;\nsearchResultsCalendarPeriod#c9b0539f date:int min_msg_id:int max_msg_id:int count:int = SearchResultsCalendarPeriod;\nmessages.searchResultsCalendar#147ee23c flags:# inexact:flags.0?true count:int min_date:int min_msg_id:int offset_id_offset:flags.1?int periods:Vector<SearchResultsCalendarPeriod> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SearchResultsCalendar;\nsearchResultPosition#7f648b67 msg_id:int date:int offset:int = SearchResultsPosition;\nmessages.searchResultsPositions#53b22baf count:int positions:Vector<SearchResultsPosition> = messages.SearchResultsPositions;\nchannels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;\nusers.userFull#3b6d152e full_user:UserFull chats:Vector<Chat> users:Vector<User> = users.UserFull;\nmessages.peerSettings#6880b94d settings:PeerSettings chats:Vector<Chat> users:Vector<User> = messages.PeerSettings;\nauth.loggedOut#c3a2835f flags:# future_auth_token:flags.0?bytes = auth.LoggedOut;\nreactionCount#a3d1cb80 flags:# chosen_order:flags.0?int reaction:Reaction count:int = ReactionCount;\nmessageReactions#4f2b9479 flags:# min:flags.0?true can_see_list:flags.2?true results:Vector<ReactionCount> recent_reactions:flags.1?Vector<MessagePeerReaction> = MessageReactions;\nmessages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;\navailableReaction#c077ec01 flags:# inactive:flags.0?true premium:flags.2?true reaction:string title:string static_icon:Document appear_animation:Document select_animation:Document activate_animation:Document effect_animation:Document around_animation:flags.1?Document center_icon:flags.1?Document = AvailableReaction;\nmessages.availableReactionsNotModified#9f071957 = messages.AvailableReactions;\nmessages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;\nmessagePeerReaction#8c79b63c flags:# big:flags.0?true unread:flags.1?true my:flags.2?true peer_id:Peer date:int reaction:Reaction = MessagePeerReaction;\ngroupCallStreamChannel#80eb48af channel:int scale:int last_timestamp_ms:long = GroupCallStreamChannel;\nphone.groupCallStreamChannels#d0e482b2 channels:Vector<GroupCallStreamChannel> = phone.GroupCallStreamChannels;\nphone.groupCallStreamRtmpUrl#2dbf3432 url:string key:string = phone.GroupCallStreamRtmpUrl;\nattachMenuBotIconColor#4576f3f0 name:string color:int = AttachMenuBotIconColor;\nattachMenuBotIcon#b2a7386b flags:# name:string icon:Document colors:flags.0?Vector<AttachMenuBotIconColor> = AttachMenuBotIcon;\nattachMenuBot#d90d8dfe flags:# inactive:flags.0?true has_settings:flags.1?true request_write_access:flags.2?true show_in_attach_menu:flags.3?true show_in_side_menu:flags.4?true side_menu_disclaimer_needed:flags.5?true bot_id:long short_name:string peer_types:flags.3?Vector<AttachMenuPeerType> icons:Vector<AttachMenuBotIcon> = AttachMenuBot;\nattachMenuBotsNotModified#f1d88a5c = AttachMenuBots;\nattachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;\nattachMenuBotsBot#93bf667f bot:AttachMenuBot users:Vector<User> = AttachMenuBotsBot;\nwebViewResultUrl#c14557c query_id:long url:string = WebViewResult;\nsimpleWebViewResultUrl#882f76bb url:string = SimpleWebViewResult;\nwebViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;\nbotMenuButtonDefault#7533a588 = BotMenuButton;\nbotMenuButtonCommands#4258c205 = BotMenuButton;\nbotMenuButton#c7b57ce6 text:string url:string = BotMenuButton;\naccount.savedRingtonesNotModified#fbf6e8b1 = account.SavedRingtones;\naccount.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;\nnotificationSoundDefault#97e8bebe = NotificationSound;\nnotificationSoundNone#6f0c34df = NotificationSound;\nnotificationSoundLocal#830b9ae4 title:string data:string = NotificationSound;\nnotificationSoundRingtone#ff6c8049 id:long = NotificationSound;\naccount.savedRingtone#b7263f6d = account.SavedRingtone;\naccount.savedRingtoneConverted#1f307eb7 document:Document = account.SavedRingtone;\nattachMenuPeerTypeSameBotPM#7d6be90e = AttachMenuPeerType;\nattachMenuPeerTypeBotPM#c32bfa1a = AttachMenuPeerType;\nattachMenuPeerTypePM#f146d31f = AttachMenuPeerType;\nattachMenuPeerTypeChat#509113f = AttachMenuPeerType;\nattachMenuPeerTypeBroadcast#7bfbdefc = AttachMenuPeerType;\ninputInvoiceMessage#c5b56859 peer:InputPeer msg_id:int = InputInvoice;\ninputInvoiceSlug#c326caef slug:string = InputInvoice;\ninputInvoicePremiumGiftCode#98986c0d purpose:InputStorePaymentPurpose option:PremiumGiftCodeOption = InputInvoice;\npayments.exportedInvoice#aed0cbd9 url:string = payments.ExportedInvoice;\nmessages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;\nhelp.premiumPromo#5334759c status_text:string status_entities:Vector<MessageEntity> video_sections:Vector<string> videos:Vector<Document> period_options:Vector<PremiumSubscriptionOption> users:Vector<User> = help.PremiumPromo;\ninputStorePaymentPremiumSubscription#a6751e66 flags:# restore:flags.0?true upgrade:flags.1?true = InputStorePaymentPurpose;\ninputStorePaymentGiftPremium#616f7fe8 user_id:InputUser currency:string amount:long = InputStorePaymentPurpose;\ninputStorePaymentPremiumGiftCode#a3805f3f flags:# users:Vector<InputUser> boost_peer:flags.0?InputPeer currency:string amount:long = InputStorePaymentPurpose;\ninputStorePaymentPremiumGiveaway#7c9375e6 flags:# only_new_subscribers:flags.0?true boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> random_id:long until_date:int currency:string amount:long = InputStorePaymentPurpose;\npremiumGiftOption#74c34319 flags:# months:int currency:string amount:long bot_url:string store_product:flags.0?string = PremiumGiftOption;\npaymentFormMethod#88f8f21b url:string title:string = PaymentFormMethod;\nemojiStatusEmpty#2de11aae = EmojiStatus;\nemojiStatus#929b619d document_id:long = EmojiStatus;\nemojiStatusUntil#fa30a8c7 document_id:long until:int = EmojiStatus;\naccount.emojiStatusesNotModified#d08ce645 = account.EmojiStatuses;\naccount.emojiStatuses#90c467d1 hash:long statuses:Vector<EmojiStatus> = account.EmojiStatuses;\nreactionEmpty#79f5d419 = Reaction;\nreactionEmoji#1b2286b8 emoticon:string = Reaction;\nreactionCustomEmoji#8935fc73 document_id:long = Reaction;\nchatReactionsNone#eafc32bc = ChatReactions;\nchatReactionsAll#52928bca flags:# allow_custom:flags.0?true = ChatReactions;\nchatReactionsSome#661d4037 reactions:Vector<Reaction> = ChatReactions;\nmessages.reactionsNotModified#b06fdbdf = messages.Reactions;\nmessages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;\nemailVerifyPurposeLoginSetup#4345be73 phone_number:string phone_code_hash:string = EmailVerifyPurpose;\nemailVerifyPurposeLoginChange#527d22eb = EmailVerifyPurpose;\nemailVerifyPurposePassport#bbf51685 = EmailVerifyPurpose;\nemailVerificationCode#922e55a9 code:string = EmailVerification;\nemailVerificationGoogle#db909ec2 token:string = EmailVerification;\nemailVerificationApple#96d074fd token:string = EmailVerification;\naccount.emailVerified#2b96cd1b email:string = account.EmailVerified;\naccount.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;\npremiumSubscriptionOption#5f2d1df2 flags:# current:flags.1?true can_purchase_upgrade:flags.2?true transaction:flags.3?string months:int currency:string amount:long bot_url:string store_product:flags.0?string = PremiumSubscriptionOption;\nsendAsPeer#b81c7034 flags:# premium_required:flags.0?true peer:Peer = SendAsPeer;\nmessageExtendedMediaPreview#ad628cc8 flags:# w:flags.0?int h:flags.0?int thumb:flags.1?PhotoSize video_duration:flags.2?int = MessageExtendedMedia;\nmessageExtendedMedia#ee479c64 media:MessageMedia = MessageExtendedMedia;\nstickerKeyword#fcfeb29c document_id:long keyword:Vector<string> = StickerKeyword;\nusername#b4073647 flags:# editable:flags.0?true active:flags.1?true username:string = Username;\nforumTopicDeleted#23f109b id:int = ForumTopic;\nforumTopic#71701da9 flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true id:int date:int title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;\nmessages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;\ndefaultHistoryTTL#43b46b20 period:int = DefaultHistoryTTL;\nexportedContactToken#41bf109b url:string expires:int = ExportedContactToken;\nrequestPeerTypeUser#5f3b8a00 flags:# bot:flags.0?Bool premium:flags.1?Bool = RequestPeerType;\nrequestPeerTypeChat#c9f06e1b flags:# creator:flags.0?true bot_participant:flags.5?true has_username:flags.3?Bool forum:flags.4?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;\nrequestPeerTypeBroadcast#339bef6c flags:# creator:flags.0?true has_username:flags.3?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;\nemojiListNotModified#481eadfa = EmojiList;\nemojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;\nemojiGroup#7a9abda9 title:string icon_emoji_id:long emoticons:Vector<string> = EmojiGroup;\nmessages.emojiGroupsNotModified#6fb4ad87 = messages.EmojiGroups;\nmessages.emojiGroups#881fb94b hash:int groups:Vector<EmojiGroup> = messages.EmojiGroups;\ntextWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;\nmessages.translateResult#33db32f8 result:Vector<TextWithEntities> = messages.TranslatedText;\nautoSaveSettings#c84834ce flags:# photos:flags.0?true videos:flags.1?true video_max_size:flags.2?long = AutoSaveSettings;\nautoSaveException#81602d47 peer:Peer settings:AutoSaveSettings = AutoSaveException;\naccount.autoSaveSettings#4c3e069d users_settings:AutoSaveSettings chats_settings:AutoSaveSettings broadcasts_settings:AutoSaveSettings exceptions:Vector<AutoSaveException> chats:Vector<Chat> users:Vector<User> = account.AutoSaveSettings;\nhelp.appConfigNotModified#7cde641d = help.AppConfig;\nhelp.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;\ninputBotAppID#a920bd7a id:long access_hash:long = InputBotApp;\ninputBotAppShortName#908c0407 bot_id:InputUser short_name:string = InputBotApp;\nbotAppNotModified#5da674b7 = BotApp;\nbotApp#95fcd1d6 flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document hash:long = BotApp;\nmessages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;\nappWebViewResultUrl#3c1b4f0d url:string = AppWebViewResult;\ninlineBotWebView#b57295d5 text:string url:string = InlineBotWebView;\nreadParticipantDate#4a4ff172 user_id:long date:int = ReadParticipantDate;\ninputChatlistDialogFilter#f3e0da33 filter_id:int = InputChatlist;\nexportedChatlistInvite#c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;\nchatlists.exportedChatlistInvite#10e6e3a6 filter:DialogFilter invite:ExportedChatlistInvite = chatlists.ExportedChatlistInvite;\nchatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;\nchatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;\nchatlists.chatlistInvite#1dcd839d flags:# title:string emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;\nchatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;\nbots.botInfo#e8a775b0 name:string about:string description:string = bots.BotInfo;\nmessagePeerVote#b6cc2d5c peer:Peer option:bytes date:int = MessagePeerVote;\nmessagePeerVoteInputOption#74cda504 peer:Peer date:int = MessagePeerVote;\nmessagePeerVoteMultiple#4628f6e6 peer:Peer options:Vector<bytes> date:int = MessagePeerVote;\nsponsoredWebPage#3db8ec63 flags:# url:string site_name:string photo:flags.0?Photo = SponsoredWebPage;\nstoryViews#8d595cd6 flags:# has_viewers:flags.1?true views_count:int forwards_count:flags.2?int reactions:flags.3?Vector<ReactionCount> reactions_count:flags.4?int recent_viewers:flags.0?Vector<long> = StoryViews;\nstoryItemDeleted#51e6ee4f id:int = StoryItem;\nstoryItemSkipped#ffadc913 flags:# close_friends:flags.8?true id:int date:int expire_date:int = StoryItem;\nstoryItem#af6365a1 flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction = StoryItem;\nstories.allStoriesNotModified#1158fe3e flags:# state:string stealth_mode:StoriesStealthMode = stories.AllStories;\nstories.allStories#6efc5e81 flags:# has_more:flags.0?true count:int state:string peer_stories:Vector<PeerStories> chats:Vector<Chat> users:Vector<User> stealth_mode:StoriesStealthMode = stories.AllStories;\nstories.stories#5dd8c3c8 count:int stories:Vector<StoryItem> chats:Vector<Chat> users:Vector<User> = stories.Stories;\nstoryView#b0bdeac5 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:long date:int reaction:flags.2?Reaction = StoryView;\nstories.storyViewsList#46e9b9ec flags:# count:int reactions_count:int views:Vector<StoryView> users:Vector<User> next_offset:flags.0?string = stories.StoryViewsList;\nstories.storyViews#de9eed1d views:Vector<StoryViews> users:Vector<User> = stories.StoryViews;\ninputReplyToMessage#22c0f6d5 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int = InputReplyTo;\ninputReplyToStory#15b0f283 user_id:InputUser story_id:int = InputReplyTo;\nexportedStoryLink#3fc9053b link:string = ExportedStoryLink;\nstoriesStealthMode#712e27fd flags:# active_until_date:flags.0?int cooldown_until_date:flags.1?int = StoriesStealthMode;\nmediaAreaCoordinates#3d1ea4e x:double y:double w:double h:double rotation:double = MediaAreaCoordinates;\nmediaAreaVenue#be82db9c coordinates:MediaAreaCoordinates geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MediaArea;\ninputMediaAreaVenue#b282217f coordinates:MediaAreaCoordinates query_id:long result_id:string = MediaArea;\nmediaAreaGeoPoint#df8b3b22 coordinates:MediaAreaCoordinates geo:GeoPoint = MediaArea;\nmediaAreaSuggestedReaction#14455871 flags:# dark:flags.0?true flipped:flags.1?true coordinates:MediaAreaCoordinates reaction:Reaction = MediaArea;\npeerStories#9a35e999 flags:# peer:Peer max_read_id:flags.0?int stories:Vector<StoryItem> = PeerStories;\nstories.peerStories#cae68768 stories:PeerStories chats:Vector<Chat> users:Vector<User> = stories.PeerStories;\nmessages.webPage#fd5e12bd webpage:WebPage chats:Vector<Chat> users:Vector<User> = messages.WebPage;\npremiumGiftCodeOption#257e962b flags:# users:int months:int store_product:flags.0?string store_quantity:flags.1?int currency:string amount:long = PremiumGiftCodeOption;\npayments.checkedGiftCode#b722f158 flags:# via_giveaway:flags.2?true from_id:Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int months:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;\npayments.giveawayInfo#4367daa0 flags:# participating:flags.0?true preparing_results:flags.3?true start_date:int joined_too_early_date:flags.1?int admin_disallowed_chat_id:flags.2?long disallowed_country:flags.4?string = payments.GiveawayInfo;\npayments.giveawayInfoResults#cd5570 flags:# winner:flags.0?true refunded:flags.1?true start_date:int gift_code_slug:flags.0?string finish_date:int winners_count:int activated_count:int = payments.GiveawayInfo;\nprepaidGiveaway#b2539d54 id:long months:int quantity:int date:int = PrepaidGiveaway;\nboost#2a1c8c71 flags:# gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:string user_id:flags.0?long giveaway_msg_id:flags.2?int date:int expires:int used_gift_slug:flags.4?string multiplier:flags.5?int = Boost;\npremium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;\nmyBoost#c448415c flags:# slot:int peer:flags.0?Peer date:int expires:int cooldown_until_date:flags.1?int = MyBoost;\npremium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;\npremium.boostsStatus#4959427a flags:# my_boost:flags.2?true level:int current_level_boosts:int boosts:int gift_boosts:flags.4?int next_level_boosts:flags.0?int premium_audience:flags.1?StatsPercentValue boost_url:string prepaid_giveaways:flags.3?Vector<PrepaidGiveaway> my_boost_slots:flags.2?Vector<int> = premium.BoostsStatus;\nstoryFwdHeader#b826e150 flags:# modified:flags.3?true from:flags.0?Peer from_name:flags.1?string story_id:flags.2?int = StoryFwdHeader;\npostInteractionCountersMessage#e7058e7f msg_id:int views:int forwards:int reactions:int = PostInteractionCounters;\npostInteractionCountersStory#8a480e27 story_id:int views:int forwards:int reactions:int = PostInteractionCounters;\nstats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;\npublicForwardMessage#1f2bf4a message:Message = PublicForward;\npublicForwardStory#edf3add0 peer:Peer story:StoryItem = PublicForward;\nstats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;\npeerColor#b54b5acf flags:# color:flags.0?int background_emoji_id:flags.1?long = PeerColor;\nhelp.peerColorSet#26219a58 colors:Vector<int> = help.PeerColorSet;\nhelp.peerColorProfileSet#767d61eb palette_colors:Vector<int> bg_colors:Vector<int> story_colors:Vector<int> = help.PeerColorSet;\nhelp.peerColorOption#135bd42f flags:# hidden:flags.0?true color_id:int colors:flags.1?help.PeerColorSet dark_colors:flags.2?help.PeerColorSet = help.PeerColorOption;\nhelp.peerColorsNotModified#2ba1f5ce = help.PeerColors;\nhelp.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;\nthirdParty.message#d630e7f7 third_party_id:string message_type:string content:bytes = ThirdPartyMessage;\nthirdParty.reply#214899ac message:ThirdPartyMessage chats:Vector<Chat> users:Vector<User> = ThirdPartyReply;\nupdate.thirdParty#7d2bba1f message:ThirdPartyMessage = Update;\n---functions---\ninvokeAfterMsg#cb9f372d {X:Type} msg_id:long query:!X = X;\ninitConnection#c1cd5ea9 {X:Type} flags:# api_id:int device_model:string system_version:string app_version:string system_lang_code:string lang_pack:string lang_code:string proxy:flags.0?InputClientProxy params:flags.1?JSONValue query:!X = X;\ninvokeWithLayer#da9b0d0d {X:Type} layer:int query:!X = X;\nauth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;\nauth.signUp#80eee427 phone_number:string phone_code_hash:string first_name:string last_name:string = auth.Authorization;\nauth.signIn#8d52a951 flags:# phone_number:string phone_code_hash:string phone_code:flags.0?string email_verification:flags.1?EmailVerification = auth.Authorization;\nauth.logOut#3e72ba19 = auth.LoggedOut;\nauth.resetAuthorizations#9fab0d1a = Bool;\nauth.exportAuthorization#e5bfffcd dc_id:int = auth.ExportedAuthorization;\nauth.importAuthorization#a57a7dad id:long bytes:bytes = auth.Authorization;\nauth.bindTempAuthKey#cdd42a05 perm_auth_key_id:long nonce:long expires_at:int encrypted_message:bytes = Bool;\nauth.checkPassword#d18b4d16 password:InputCheckPasswordSRP = auth.Authorization;\nauth.requestPasswordRecovery#d897bc66 = auth.PasswordRecovery;\nauth.resendCode#3ef1a9bf phone_number:string phone_code_hash:string = auth.SentCode;\nauth.cancelCode#1f040578 phone_number:string phone_code_hash:string = Bool;\nauth.dropTempAuthKeys#8e48a188 except_auth_keys:Vector<long> = Bool;\nauth.exportLoginToken#b7e085fe api_id:int api_hash:string except_ids:Vector<long> = auth.LoginToken;\nauth.importLoginToken#95ac5ce4 token:bytes = auth.LoginToken;\nauth.importWebTokenAuthorization#2db873a9 api_id:int api_hash:string web_auth_token:string = auth.Authorization;\nauth.sendDeleteAccountCode#7fb3ddc0 = auth.sentDeleteAccountCode;\nauth.resendDeleteAccountCode#633a65a0 = auth.sentDeleteAccountCode;\nauth.deleteAccount#441a1ec2 delete_account_code:string = Bool;\naccount.registerDevice#ec86017a flags:# no_muted:flags.0?true token_type:int token:string app_sandbox:Bool secret:bytes other_uids:Vector<long> = Bool;\naccount.unregisterDevice#6a0d3206 token_type:int token:string other_uids:Vector<long> = Bool;\naccount.updateNotifySettings#84be5b93 peer:InputNotifyPeer settings:InputPeerNotifySettings = Bool;\naccount.getNotifySettings#12b3ad31 peer:InputNotifyPeer = PeerNotifySettings;\naccount.updateProfile#78515775 flags:# first_name:flags.0?string last_name:flags.1?string about:flags.2?string = User;\naccount.updateStatus#6628562c offline:Bool = Bool;\naccount.getWallPapers#7967d36 hash:long = account.WallPapers;\naccount.reportPeer#c5ba3d86 peer:InputPeer reason:ReportReason message:string = Bool;\naccount.checkUsername#2714d86c username:string = Bool;\naccount.updateUsername#3e0bdd7c username:string = User;\naccount.getPrivacy#dadbc950 key:InputPrivacyKey = account.PrivacyRules;\naccount.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;\naccount.getAuthorizations#e320c158 = account.Authorizations;\naccount.resetAuthorization#df77f3bc hash:long = Bool;\naccount.getPassword#548a30f5 = account.Password;\naccount.getPasswordSettings#9cd4eaf9 password:InputCheckPasswordSRP = account.PasswordSettings;\naccount.updatePasswordSettings#a59b102f password:InputCheckPasswordSRP new_settings:account.PasswordInputSettings = Bool;\naccount.sendConfirmPhoneCode#1b3faa88 hash:string settings:CodeSettings = auth.SentCode;\naccount.confirmPhone#5f2178c3 phone_code_hash:string phone_code:string = Bool;\naccount.getTmpPassword#449e0b51 password:InputCheckPasswordSRP period:int = account.TmpPassword;\naccount.getWebAuthorizations#182e6d6f = account.WebAuthorizations;\naccount.resetWebAuthorization#2d01b9ef hash:long = Bool;\naccount.resetWebAuthorizations#682d2594 = Bool;\naccount.sendVerifyPhoneCode#a5a356f9 phone_number:string settings:CodeSettings = auth.SentCode;\naccount.confirmPasswordEmail#8fdf1920 code:string = Bool;\naccount.getContactSignUpNotification#9f07c728 = Bool;\naccount.setContactSignUpNotification#cff43f61 silent:Bool = Bool;\naccount.getNotifyExceptions#53577479 flags:# compare_sound:flags.1?true compare_stories:flags.2?true peer:flags.0?InputNotifyPeer = Updates;\naccount.uploadWallPaper#e39a8f03 flags:# for_chat:flags.0?true file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;\naccount.setContentSettings#b574b16b flags:# sensitive_enabled:flags.0?true = Bool;\naccount.getContentSettings#8b9b4dae = account.ContentSettings;\naccount.getGlobalPrivacySettings#eb2b4cf6 = GlobalPrivacySettings;\naccount.setGlobalPrivacySettings#1edaaac2 settings:GlobalPrivacySettings = GlobalPrivacySettings;\naccount.reportProfilePhoto#fa8cc6f5 peer:InputPeer photo_id:InputPhoto reason:ReportReason message:string = Bool;\naccount.setAuthorizationTTL#bf899aa0 authorization_ttl_days:int = Bool;\naccount.changeAuthorizationSettings#40f48462 flags:# confirmed:flags.3?true hash:long encrypted_requests_disabled:flags.0?Bool call_requests_disabled:flags.1?Bool = Bool;\naccount.updateEmojiStatus#fbd3de6b emoji_status:EmojiStatus = Bool;\naccount.getRecentEmojiStatuses#f578105 hash:long = account.EmojiStatuses;\naccount.reorderUsernames#ef500eab order:Vector<string> = Bool;\naccount.toggleUsername#58d6b376 username:string active:Bool = Bool;\nusers.getUsers#d91a548 id:Vector<InputUser> = Vector<User>;\nusers.getFullUser#b60f5918 id:InputUser = users.UserFull;\ncontacts.getContacts#5dd69e12 hash:long = contacts.Contacts;\ncontacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;\ncontacts.deleteContacts#96a0e00 id:Vector<InputUser> = Updates;\ncontacts.block#2e2e8734 flags:# my_stories_from:flags.0?true id:InputPeer = Bool;\ncontacts.unblock#b550d328 flags:# my_stories_from:flags.0?true id:InputPeer = Bool;\ncontacts.getBlocked#9a868f80 flags:# my_stories_from:flags.0?true offset:int limit:int = contacts.Blocked;\ncontacts.search#11f812d8 q:string limit:int = contacts.Found;\ncontacts.resolveUsername#f93ccba3 username:string = contacts.ResolvedPeer;\ncontacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true offset:int limit:int hash:long = contacts.TopPeers;\ncontacts.addContact#e8f463d0 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string = Updates;\ncontacts.resolvePhone#8af94344 phone:string = contacts.ResolvedPeer;\ncontacts.editCloseFriends#ba6705f0 id:Vector<long> = Bool;\nmessages.getMessages#63c66506 id:Vector<InputMessage> = messages.Messages;\nmessages.getDialogs#a0f4cb4f flags:# exclude_pinned:flags.0?true folder_id:flags.1?int offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.Dialogs;\nmessages.getHistory#4423e6c5 peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;\nmessages.search#a0fda762 flags:# peer:InputPeer q:string from_id:flags.0?InputPeer top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;\nmessages.readHistory#e306d3a peer:InputPeer max_id:int = messages.AffectedMessages;\nmessages.deleteHistory#b08f922a flags:# just_clear:flags.0?true revoke:flags.1?true peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;\nmessages.deleteMessages#e58e95d2 flags:# revoke:flags.0?true id:Vector<int> = messages.AffectedMessages;\nmessages.receivedMessages#5a954c0 max_id:int = Vector<ReceivedNotifyMessage>;\nmessages.setTyping#58943ee2 flags:# peer:InputPeer top_msg_id:flags.0?int action:SendMessageAction = Bool;\nmessages.sendMessage#280d096f flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer = Updates;\nmessages.sendMedia#72ccc23d flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer = Updates;\nmessages.forwardMessages#c661bbc4 flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int schedule_date:flags.10?int send_as:flags.13?InputPeer = Updates;\nmessages.reportSpam#cf1592db peer:InputPeer = Bool;\nmessages.getPeerSettings#efd9a6a2 peer:InputPeer = messages.PeerSettings;\nmessages.report#8953ab4e peer:InputPeer id:Vector<int> reason:ReportReason message:string = Bool;\nmessages.getChats#49e9528f id:Vector<long> = messages.Chats;\nmessages.getFullChat#aeb00b34 chat_id:long = messages.ChatFull;\nmessages.editChatTitle#73783ffd chat_id:long title:string = Updates;\nmessages.editChatPhoto#35ddd674 chat_id:long photo:InputChatPhoto = Updates;\nmessages.addChatUser#f24753e3 chat_id:long user_id:InputUser fwd_limit:int = Updates;\nmessages.deleteChatUser#a2185cab flags:# revoke_history:flags.0?true chat_id:long user_id:InputUser = Updates;\nmessages.createChat#34a818 flags:# users:Vector<InputUser> title:string ttl_period:flags.0?int = Updates;\nmessages.getDhConfig#26cf8950 version:int random_length:int = messages.DhConfig;\nmessages.readMessageContents#36a73f77 id:Vector<int> = messages.AffectedMessages;\nmessages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;\nmessages.getAllStickers#b8a0a1a8 hash:long = messages.AllStickers;\nmessages.getWebPagePreview#8b68b0cc flags:# message:string entities:flags.3?Vector<MessageEntity> = MessageMedia;\nmessages.exportChatInvite#a02ce5d5 flags:# legacy_revoke_permanent:flags.2?true request_needed:flags.3?true peer:InputPeer expire_date:flags.0?int usage_limit:flags.1?int title:flags.4?string = ExportedChatInvite;\nmessages.checkChatInvite#3eadb1bb hash:string = ChatInvite;\nmessages.importChatInvite#6c50051c hash:string = Updates;\nmessages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;\nmessages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;\nmessages.uninstallStickerSet#f96e55de stickerset:InputStickerSet = Bool;\nmessages.startBot#e6df7378 bot:InputUser peer:InputPeer random_id:long start_param:string = Updates;\nmessages.getMessagesViews#5784d3e1 peer:InputPeer id:Vector<int> increment:Bool = messages.MessageViews;\nmessages.migrateChat#a2875319 chat_id:long = Updates;\nmessages.searchGlobal#4bc6589a flags:# folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;\nmessages.getDocumentByHash#b1f2061f sha256:bytes size:long mime_type:string = Document;\nmessages.getSavedGifs#5cf09635 hash:long = messages.SavedGifs;\nmessages.saveGif#327a30cb id:InputDocument unsave:Bool = Bool;\nmessages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;\nmessages.sendInlineBotResult#f7bc68ba flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer = Updates;\nmessages.editMessage#48f71778 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int = Updates;\nmessages.getBotCallbackAnswer#9342ca07 flags:# game:flags.1?true peer:InputPeer msg_id:int data:flags.0?bytes password:flags.2?InputCheckPasswordSRP = messages.BotCallbackAnswer;\nmessages.getPeerDialogs#e470bcfd peers:Vector<InputDialogPeer> = messages.PeerDialogs;\nmessages.saveDraft#7ff3b806 flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo peer:InputPeer message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia = Bool;\nmessages.getFeaturedStickers#64780b14 hash:long = messages.FeaturedStickers;\nmessages.readFeaturedStickers#5b118126 id:Vector<long> = Bool;\nmessages.getRecentStickers#9da9403b flags:# attached:flags.0?true hash:long = messages.RecentStickers;\nmessages.saveRecentSticker#392718f8 flags:# attached:flags.0?true id:InputDocument unsave:Bool = Bool;\nmessages.clearRecentStickers#8999602d flags:# attached:flags.0?true = Bool;\nmessages.getArchivedStickers#57f17692 flags:# masks:flags.0?true emojis:flags.1?true offset_id:long limit:int = messages.ArchivedStickers;\nmessages.getCommonChats#e40ca104 user_id:InputUser max_id:long limit:int = messages.Chats;\nmessages.getWebPage#8d9692a3 url:string hash:int = messages.WebPage;\nmessages.toggleDialogPin#a731e257 flags:# pinned:flags.0?true peer:InputDialogPeer = Bool;\nmessages.getPinnedDialogs#d6b94df2 folder_id:int = messages.PeerDialogs;\nmessages.uploadMedia#519bc2b1 peer:InputPeer media:InputMedia = MessageMedia;\nmessages.getFavedStickers#4f1aaa9 hash:long = messages.FavedStickers;\nmessages.faveSticker#b9ffc55b id:InputDocument unfave:Bool = Bool;\nmessages.getUnreadMentions#f107e790 flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;\nmessages.readMentions#36e5bf4d flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;\nmessages.sendMultiMedia#456e8987 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer = Updates;\nmessages.searchStickerSets#35705b8a flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;\nmessages.markDialogUnread#c286d98f flags:# unread:flags.0?true peer:InputDialogPeer = Bool;\nmessages.updatePinnedMessage#d2aaf7ec flags:# silent:flags.0?true unpin:flags.1?true pm_oneside:flags.2?true peer:InputPeer id:int = Updates;\nmessages.sendVote#10ea6184 peer:InputPeer msg_id:int options:Vector<bytes> = Updates;\nmessages.getPollResults#73bb643b peer:InputPeer msg_id:int = Updates;\nmessages.getOnlines#6e2be050 peer:InputPeer = ChatOnlines;\nmessages.editChatAbout#def60797 peer:InputPeer about:string = Bool;\nmessages.editChatDefaultBannedRights#a5866b41 peer:InputPeer banned_rights:ChatBannedRights = Updates;\nmessages.getEmojiKeywordsDifference#1508b6af lang_code:string from_version:int = EmojiKeywordsDifference;\nmessages.requestUrlAuth#198fb446 flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string = UrlAuthResult;\nmessages.acceptUrlAuth#b12c7125 flags:# write_allowed:flags.0?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string = UrlAuthResult;\nmessages.hidePeerSettingsBar#4facb138 peer:InputPeer = Bool;\nmessages.getScheduledHistory#f516760b peer:InputPeer hash:long = messages.Messages;\nmessages.sendScheduledMessages#bd38850a peer:InputPeer id:Vector<int> = Updates;\nmessages.deleteScheduledMessages#59ae2b16 peer:InputPeer id:Vector<int> = Updates;\nmessages.getPollVotes#b86e380e flags:# peer:InputPeer id:int option:flags.0?bytes offset:flags.1?string limit:int = messages.VotesList;\nmessages.getDialogFilters#f19ed96d = Vector<DialogFilter>;\nmessages.getSuggestedDialogFilters#a29cd42c = Vector<DialogFilterSuggested>;\nmessages.updateDialogFilter#1ad4a04a flags:# id:int filter:flags.0?DialogFilter = Bool;\nmessages.updateDialogFiltersOrder#c563c1e4 order:Vector<int> = Bool;\nmessages.getReplies#22ddd30c peer:InputPeer msg_id:int offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;\nmessages.getDiscussionMessage#446972fd peer:InputPeer msg_id:int = messages.DiscussionMessage;\nmessages.readDiscussion#f731a9f4 peer:InputPeer msg_id:int read_max_id:int = Bool;\nmessages.unpinAllMessages#ee22b9a8 flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;\nmessages.deleteChat#5bd0ee50 chat_id:long = Bool;\nmessages.getExportedChatInvites#a2b5a3f6 flags:# revoked:flags.3?true peer:InputPeer admin_id:InputUser offset_date:flags.2?int offset_link:flags.2?string limit:int = messages.ExportedChatInvites;\nmessages.editExportedChatInvite#bdca2f75 flags:# revoked:flags.2?true peer:InputPeer link:string expire_date:flags.0?int usage_limit:flags.1?int request_needed:flags.3?Bool title:flags.4?string = messages.ExportedChatInvite;\nmessages.deleteRevokedExportedChatInvites#56987bd5 peer:InputPeer admin_id:InputUser = Bool;\nmessages.deleteExportedChatInvite#d464a42b peer:InputPeer link:string = Bool;\nmessages.getChatInviteImporters#df04dd4e flags:# requested:flags.0?true peer:InputPeer link:flags.1?string q:flags.2?string offset_date:int offset_user:InputUser limit:int = messages.ChatInviteImporters;\nmessages.getMessageReadParticipants#31c1c44f peer:InputPeer msg_id:int = Vector<ReadParticipantDate>;\nmessages.hideChatJoinRequest#7fe7e815 flags:# approved:flags.0?true peer:InputPeer user_id:InputUser = Updates;\nmessages.hideAllChatJoinRequests#e085f4ea flags:# approved:flags.0?true peer:InputPeer link:flags.1?string = Updates;\nmessages.toggleNoForwards#b11eafa2 peer:InputPeer enabled:Bool = Updates;\nmessages.saveDefaultSendAs#ccfddf96 peer:InputPeer send_as:InputPeer = Bool;\nmessages.sendReaction#d30d78d4 flags:# big:flags.1?true add_to_recent:flags.2?true peer:InputPeer msg_id:int reaction:flags.0?Vector<Reaction> = Updates;\nmessages.getMessagesReactions#8bba90e6 peer:InputPeer id:Vector<int> = Updates;\nmessages.getMessageReactionsList#461b3f48 flags:# peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = messages.MessageReactionsList;\nmessages.setChatAvailableReactions#feb16771 peer:InputPeer available_reactions:ChatReactions = Updates;\nmessages.getAvailableReactions#18dea0ac hash:int = messages.AvailableReactions;\nmessages.setDefaultReaction#4f47a016 reaction:Reaction = Bool;\nmessages.translateText#63183030 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string = messages.TranslatedText;\nmessages.getUnreadReactions#3223495b flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;\nmessages.readReactions#54aa7f8e flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;\nmessages.getAttachMenuBots#16fcc2cb hash:long = AttachMenuBots;\nmessages.getAttachMenuBot#77216192 bot:InputUser = AttachMenuBotsBot;\nmessages.toggleBotInAttachMenu#69f59d69 flags:# write_allowed:flags.0?true bot:InputUser enabled:Bool = Bool;\nmessages.requestWebView#269dc2c1 flags:# from_bot_menu:flags.4?true silent:flags.5?true peer:InputPeer bot:InputUser url:flags.1?string start_param:flags.3?string theme_params:flags.2?DataJSON platform:string reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = WebViewResult;\nmessages.prolongWebView#b0d81a83 flags:# silent:flags.5?true peer:InputPeer bot:InputUser query_id:long reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = Bool;\nmessages.requestSimpleWebView#1a46500a flags:# from_switch_webview:flags.1?true from_side_menu:flags.2?true bot:InputUser url:flags.3?string start_param:flags.4?string theme_params:flags.0?DataJSON platform:string = SimpleWebViewResult;\nmessages.sendWebViewResultMessage#a4314f5 bot_query_id:string result:InputBotInlineResult = WebViewMessageSent;\nmessages.sendWebViewData#dc0242c8 bot:InputUser random_id:long button_text:string data:string = Updates;\nmessages.transcribeAudio#269e9a49 peer:InputPeer msg_id:int = messages.TranscribedAudio;\nmessages.getCustomEmojiDocuments#d9ab0f54 document_id:Vector<long> = Vector<Document>;\nmessages.getEmojiStickers#fbfca18f hash:long = messages.AllStickers;\nmessages.getFeaturedEmojiStickers#ecf6736 hash:long = messages.FeaturedStickers;\nmessages.getTopReactions#bb8125ba limit:int hash:long = messages.Reactions;\nmessages.getRecentReactions#39461db2 limit:int hash:long = messages.Reactions;\nmessages.clearRecentReactions#9dfeefb4 = Bool;\nmessages.getExtendedMedia#84f80814 peer:InputPeer id:Vector<int> = Updates;\nmessages.togglePeerTranslations#e47cb579 flags:# disabled:flags.0?true peer:InputPeer = Bool;\nmessages.getBotApp#34fdc5c3 app:InputBotApp hash:long = messages.BotApp;\nmessages.requestAppWebView#8c5a3b3c flags:# write_allowed:flags.0?true peer:InputPeer app:InputBotApp start_param:flags.1?string theme_params:flags.2?DataJSON platform:string = AppWebViewResult;\nupdates.getState#edd4882a = updates.State;\nupdates.getDifference#19c2f763 flags:# pts:int pts_limit:flags.1?int pts_total_limit:flags.0?int date:int qts:int qts_limit:flags.2?int = updates.Difference;\nupdates.getChannelDifference#3173d78 flags:# force:flags.0?true channel:InputChannel filter:ChannelMessagesFilter pts:int limit:int = updates.ChannelDifference;\nphotos.updateProfilePhoto#9e82039 flags:# fallback:flags.0?true bot:flags.1?InputUser id:InputPhoto = photos.Photo;\nphotos.uploadProfilePhoto#388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;\nphotos.deletePhotos#87cf7f2f id:Vector<InputPhoto> = Vector<long>;\nphotos.getUserPhotos#91cd32a8 user_id:InputUser offset:int max_id:long limit:int = photos.Photos;\nphotos.uploadContactProfilePhoto#e14c4a71 flags:# suggest:flags.3?true save:flags.4?true user_id:InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.5?VideoSize = photos.Photo;\nupload.saveFilePart#b304a621 file_id:long file_part:int bytes:bytes = Bool;\nupload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;\nupload.saveBigFilePart#de7b673d file_id:long file_part:int file_total_parts:int bytes:bytes = Bool;\nupload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;\nhelp.getConfig#c4f9186b = Config;\nhelp.getNearestDc#1fb33026 = NearestDc;\nhelp.getSupport#9cdf08cd = help.Support;\nhelp.acceptTermsOfService#ee72f79a id:DataJSON = Bool;\nhelp.getAppConfig#61e3f854 hash:int = help.AppConfig;\nhelp.getCountriesList#735787a8 lang_code:string hash:int = help.CountriesList;\nhelp.getPremiumPromo#b81b93d4 = help.PremiumPromo;\nhelp.getPeerColors#da80f42f hash:int = help.PeerColors;\nchannels.readHistory#cc104937 channel:InputChannel max_id:int = Bool;\nchannels.deleteMessages#84c1fd4e channel:InputChannel id:Vector<int> = messages.AffectedMessages;\nchannels.getMessages#ad8c9a23 channel:InputChannel id:Vector<InputMessage> = messages.Messages;\nchannels.getParticipants#77ced9d0 channel:InputChannel filter:ChannelParticipantsFilter offset:int limit:int hash:long = channels.ChannelParticipants;\nchannels.getParticipant#a0ab6cc6 channel:InputChannel participant:InputPeer = channels.ChannelParticipant;\nchannels.getChannels#a7f6bbb id:Vector<InputChannel> = messages.Chats;\nchannels.getFullChannel#8736a09 channel:InputChannel = messages.ChatFull;\nchannels.createChannel#91006707 flags:# broadcast:flags.0?true megagroup:flags.1?true for_import:flags.3?true forum:flags.5?true title:string about:string geo_point:flags.2?InputGeoPoint address:flags.2?string ttl_period:flags.4?int = Updates;\nchannels.editAdmin#d33c8902 channel:InputChannel user_id:InputUser admin_rights:ChatAdminRights rank:string = Updates;\nchannels.editTitle#566decd0 channel:InputChannel title:string = Updates;\nchannels.editPhoto#f12e57c9 channel:InputChannel photo:InputChatPhoto = Updates;\nchannels.checkUsername#10e6bd2c channel:InputChannel username:string = Bool;\nchannels.updateUsername#3514b3de channel:InputChannel username:string = Bool;\nchannels.joinChannel#24b524c5 channel:InputChannel = Updates;\nchannels.leaveChannel#f836aa95 channel:InputChannel = Updates;\nchannels.inviteToChannel#199f3a6c channel:InputChannel users:Vector<InputUser> = Updates;\nchannels.deleteChannel#c0111fe3 channel:InputChannel = Updates;\nchannels.toggleSignatures#1f69b606 channel:InputChannel enabled:Bool = Updates;\nchannels.editBanned#96e6cd81 channel:InputChannel participant:InputPeer banned_rights:ChatBannedRights = Updates;\nchannels.readMessageContents#eab5dc38 channel:InputChannel id:Vector<int> = Bool;\nchannels.togglePreHistoryHidden#eabbb94c channel:InputChannel enabled:Bool = Updates;\nchannels.getGroupsForDiscussion#f5dad378 = messages.Chats;\nchannels.setDiscussionGroup#40582bb2 broadcast:InputChannel group:InputChannel = Bool;\nchannels.viewSponsoredMessage#beaedb94 channel:InputChannel random_id:bytes = Bool;\nchannels.getSponsoredMessages#ec210fbf channel:InputChannel = messages.SponsoredMessages;\nchannels.getSendAs#dc770ee peer:InputPeer = channels.SendAsPeers;\nchannels.toggleJoinToSend#e4cb9580 channel:InputChannel enabled:Bool = Updates;\nchannels.toggleJoinRequest#4c2985b6 channel:InputChannel enabled:Bool = Updates;\nchannels.reorderUsernames#b45ced1d channel:InputChannel order:Vector<string> = Bool;\nchannels.toggleUsername#50f24105 channel:InputChannel username:string active:Bool = Bool;\nchannels.deactivateAllUsernames#a245dd3 channel:InputChannel = Bool;\nchannels.toggleForum#a4298b29 channel:InputChannel enabled:Bool = Updates;\nchannels.createForumTopic#f40c0224 flags:# channel:InputChannel title:string icon_color:flags.0?int icon_emoji_id:flags.3?long random_id:long send_as:flags.2?InputPeer = Updates;\nchannels.getForumTopics#de560d1 flags:# channel:InputChannel q:flags.0?string offset_date:int offset_id:int offset_topic:int limit:int = messages.ForumTopics;\nchannels.getForumTopicsByID#b0831eb9 channel:InputChannel topics:Vector<int> = messages.ForumTopics;\nchannels.editForumTopic#f4dfa185 flags:# channel:InputChannel topic_id:int title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = Updates;\nchannels.updatePinnedForumTopic#6c2d9026 channel:InputChannel topic_id:int pinned:Bool = Updates;\nchannels.deleteTopicHistory#34435f2d channel:InputChannel top_msg_id:int = messages.AffectedHistory;\nchannels.toggleParticipantsHidden#6a6e7854 channel:InputChannel enabled:Bool = Updates;\nchannels.clickSponsoredMessage#18afbc93 channel:InputChannel random_id:bytes = Bool;\nchannels.toggleViewForumAsMessages#9738bb15 channel:InputChannel enabled:Bool = Updates;\nbots.canSendMessage#1359f4e6 bot:InputUser = Bool;\nbots.allowSendMessage#f132e3ef bot:InputUser = Updates;\nbots.invokeWebViewCustomMethod#87fc5e7 bot:InputUser custom_method:string params:DataJSON = DataJSON;\npayments.getPaymentForm#37148dbb flags:# invoice:InputInvoice theme_params:flags.0?DataJSON = payments.PaymentForm;\npayments.getPaymentReceipt#2478d1cc peer:InputPeer msg_id:int = payments.PaymentReceipt;\npayments.validateRequestedInfo#b6c8f12b flags:# save:flags.0?true invoice:InputInvoice info:PaymentRequestedInfo = payments.ValidatedRequestedInfo;\npayments.sendPaymentForm#2d03522f flags:# form_id:long invoice:InputInvoice requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials tip_amount:flags.2?long = payments.PaymentResult;\npayments.getSavedInfo#227d824b = payments.SavedInfo;\npayments.checkGiftCode#8e51b4c1 slug:string = payments.CheckedGiftCode;\npayments.applyGiftCode#f6e26854 slug:string = Updates;\npayments.getGiveawayInfo#f4239425 peer:InputPeer msg_id:int = payments.GiveawayInfo;\nphone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;\nphone.acceptCall#3bd2b4a0 peer:InputPhoneCall g_b:bytes protocol:PhoneCallProtocol = phone.PhoneCall;\nphone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;\nphone.receivedCall#17d54f61 peer:InputPhoneCall = Bool;\nphone.discardCall#b2cbc1c0 flags:# video:flags.0?true peer:InputPhoneCall duration:int reason:PhoneCallDiscardReason connection_id:long = Updates;\nphone.setCallRating#59ead627 flags:# user_initiative:flags.0?true peer:InputPhoneCall rating:int comment:string = Updates;\nphone.saveCallDebug#277add7e peer:InputPhoneCall debug:DataJSON = Bool;\nphone.sendSignalingData#ff7a9383 peer:InputPhoneCall data:bytes = Bool;\nphone.createGroupCall#48cdc6d8 flags:# rtmp_stream:flags.2?true peer:InputPeer random_id:int title:flags.0?string schedule_date:flags.1?int = Updates;\nphone.joinGroupCall#b132ff7b flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string params:DataJSON = Updates;\nphone.leaveGroupCall#500377f9 call:InputGroupCall source:int = Updates;\nphone.discardGroupCall#7a777135 call:InputGroupCall = Updates;\nphone.getGroupCall#41845db call:InputGroupCall limit:int = phone.GroupCall;\nphone.getGroupParticipants#c558d8ab call:InputGroupCall ids:Vector<InputPeer> sources:Vector<int> offset:string limit:int = phone.GroupParticipants;\nphone.editGroupCallParticipant#a5273abf flags:# call:InputGroupCall participant:InputPeer muted:flags.0?Bool volume:flags.1?int raise_hand:flags.2?Bool video_stopped:flags.3?Bool video_paused:flags.4?Bool presentation_paused:flags.5?Bool = Updates;\nphone.exportGroupCallInvite#e6aa647f flags:# can_self_unmute:flags.0?true call:InputGroupCall = phone.ExportedGroupCallInvite;\nphone.toggleGroupCallStartSubscription#219c34e6 call:InputGroupCall subscribed:Bool = Updates;\nphone.joinGroupCallPresentation#cbea6bc4 call:InputGroupCall params:DataJSON = Updates;\nphone.leaveGroupCallPresentation#1c50d144 call:InputGroupCall = Updates;\nlangpack.getLangPack#f2f2330a lang_pack:string lang_code:string = LangPackDifference;\nlangpack.getStrings#efea3803 lang_pack:string lang_code:string keys:Vector<string> = Vector<LangPackString>;\nlangpack.getDifference#cd984aa5 lang_pack:string lang_code:string from_version:int = LangPackDifference;\nlangpack.getLanguages#42c6978f lang_pack:string = Vector<LangPackLanguage>;\nfolders.editPeerFolders#6847d0ab folder_peers:Vector<InputFolderPeer> = Updates;\nstats.getBroadcastStats#ab42441a flags:# dark:flags.0?true channel:InputChannel = stats.BroadcastStats;\nstats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;\nstats.getMegagroupStats#dcdf8607 flags:# dark:flags.0?true channel:InputChannel = stats.MegagroupStats;\nstats.getMessagePublicForwards#5630281b channel:InputChannel msg_id:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;\nstats.getMessageStats#b6e0a3f5 flags:# dark:flags.0?true channel:InputChannel msg_id:int = stats.MessageStats;\nstats.getStoryStats#374fef40 flags:# dark:flags.0?true peer:InputPeer id:int = stats.StoryStats;\nstats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;\nchatlists.exportChatlistInvite#8472478e chatlist:InputChatlist title:string peers:Vector<InputPeer> = chatlists.ExportedChatlistInvite;\nchatlists.deleteExportedInvite#719c5c5e chatlist:InputChatlist slug:string = Bool;\nchatlists.editExportedInvite#653db63d flags:# chatlist:InputChatlist slug:string title:flags.1?string peers:flags.2?Vector<InputPeer> = ExportedChatlistInvite;\nchatlists.getExportedInvites#ce03da83 chatlist:InputChatlist = chatlists.ExportedInvites;\nchatlists.checkChatlistInvite#41c10fff slug:string = chatlists.ChatlistInvite;\nchatlists.joinChatlistInvite#a6b1e39a slug:string peers:Vector<InputPeer> = Updates;\nchatlists.getLeaveChatlistSuggestions#fdbcd714 chatlist:InputChatlist = Vector<Peer>;\nchatlists.leaveChatlist#74fae13a chatlist:InputChatlist peers:Vector<InputPeer> = Updates;\nstories.editStory#b583ba46 flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> = Updates;\nstories.deleteStories#ae59db5f peer:InputPeer id:Vector<int> = Vector<int>;\nstories.togglePinned#9a75a1ef peer:InputPeer id:Vector<int> pinned:Bool = Vector<int>;\nstories.getAllStories#eeb0d625 flags:# next:flags.1?true hidden:flags.2?true state:flags.0?string = stories.AllStories;\nstories.getPinnedStories#5821a5dc peer:InputPeer offset_id:int limit:int = stories.Stories;\nstories.getStoriesArchive#b4352016 peer:InputPeer offset_id:int limit:int = stories.Stories;\nstories.getStoriesByID#5774ca74 peer:InputPeer id:Vector<int> = stories.Stories;\nstories.readStories#a556dac8 peer:InputPeer max_id:int = Vector<int>;\nstories.incrementStoryViews#b2028afb peer:InputPeer id:Vector<int> = Bool;\nstories.getStoryViewsList#7ed23c57 flags:# just_contacts:flags.0?true reactions_first:flags.2?true peer:InputPeer q:flags.1?string id:int offset:string limit:int = stories.StoryViewsList;\nstories.exportStoryLink#7b8def20 peer:InputPeer id:int = ExportedStoryLink;\nstories.report#1923fa8c peer:InputPeer id:Vector<int> reason:ReportReason message:string = Bool;\nstories.activateStealthMode#57bbd166 flags:# past:flags.0?true future:flags.1?true = Updates;\nstories.sendReaction#7fd736b2 flags:# add_to_recent:flags.0?true peer:InputPeer story_id:int reaction:Reaction = Updates;\nstories.getPeerStories#2c4ada50 peer:InputPeer = stories.PeerStories;\nstories.getPeerMaxIDs#535983c3 id:Vector<InputPeer> = Vector<int>;\nstories.togglePeerStoriesHidden#bd0415c4 peer:InputPeer hidden:Bool = Bool;\npremium.getBoostsList#60f67660 flags:# gifts:flags.0?true peer:InputPeer offset:string limit:int = premium.BoostsList;\npremium.getMyBoosts#be77b4a = premium.MyBoosts;\npremium.applyBoost#6b7da746 flags:# slots:flags.0?Vector<int> peer:InputPeer = premium.MyBoosts;\npremium.getBoostsStatus#42f1f61 peer:InputPeer = premium.BoostsStatus;\nthirdParty.request#c8520739 message:ThirdPartyMessage = ThirdPartyReply;\nthirdParty.tell#a7ebdf75 message:ThirdPartyMessage = Bool;";
      },
      73009: (e) => {
        function t(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class n {
          constructor(e, t) {
            (this.CONSTRUCTOR_ID = 3300522427),
              (this.code = e),
              (this.text = t),
              (this.classType = "constructor");
          }
          static async fromReader(e) {
            const t = e.readInt(),
              s = e.read(-1).toString("utf-8");
            return new n(t, s);
          }
        }
        t(n, "CONSTRUCTOR_ID", 3300522427),
          t(n, "classType", "constructor"),
          (e.exports = n);
      },
      31187: (e, t, n) => {
        var s = n(48287).hp;
        function a(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const { inflate: i } = n(87784),
          { serializeBytes: o } = n(43355);
        class r {
          constructor(e) {
            (this.data = e),
              (this.CONSTRUCTOR_ID = 812830625),
              (this.classType = "constructor");
          }
          static async gzipIfSmaller(e, t) {
            if (e && t.length > 512) {
              const e = await new r(t).toBytes();
              if (e.length < t.length) return e;
            }
            return t;
          }
          static gzip(e) {
            return s.from(e);
          }
          static ungzip(e) {
            return s.from(i(e));
          }
          static read(e) {
            if (e.readInt(!1) !== r.CONSTRUCTOR_ID)
              throw new Error("not equal");
            return r.gzip(e.tgReadBytes());
          }
          static async fromReader(e) {
            return new r(await r.ungzip(e.tgReadBytes()));
          }
          async toBytes() {
            const e = s.alloc(4);
            return (
              e.writeUInt32LE(r.CONSTRUCTOR_ID, 0),
              s.concat([e, o(await r.gzip(this.data))])
            );
          }
        }
        a(r, "CONSTRUCTOR_ID", 812830625),
          a(r, "classType", "constructor"),
          (e.exports = r);
      },
      30293: (e, t, n) => {
        function s(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const a = n(61028);
        class i {
          constructor(e) {
            (this.CONSTRUCTOR_ID = 1945237724),
              (this.messages = e),
              (this.classType = "constructor");
          }
          static fromReader(e) {
            const t = [],
              n = e.readInt();
            for (let s = 0; s < n; s++) {
              const n = e.readLong(),
                s = e.readInt(),
                i = e.readInt(),
                o = e.tellPosition(),
                r = e.tgReadObject();
              e.setPosition(o + i);
              const c = new a(n, s, r);
              t.push(c);
            }
            return new i(t);
          }
        }
        s(i, "CONSTRUCTOR_ID", 1945237724),
          s(i, "classType", "constructor"),
          s(i, "MAXIMUM_SIZE", 1044448),
          s(i, "MAXIMUM_LENGTH", 100),
          (e.exports = i);
      },
      9309: (e, t, n) => {
        function s(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const { RpcError: a } = n(43355).constructors,
          i = n(31187);
        class o {
          constructor(e, t, n) {
            (this.CONSTRUCTOR_ID = 4082920705),
              (this.reqMsgId = e),
              (this.body = t),
              (this.error = n),
              (this.classType = "constructor");
          }
          static async fromReader(e) {
            const t = e.readLong(),
              n = e.readInt(!1);
            return n === a.CONSTRUCTOR_ID
              ? new o(t, void 0, a.fromReader(e))
              : n === i.CONSTRUCTOR_ID
              ? new o(t, (await i.fromReader(e)).data)
              : (e.seek(-4), new o(t, e.read(), void 0));
          }
        }
        s(o, "CONSTRUCTOR_ID", 4082920705),
          s(o, "classType", "constructor"),
          (e.exports = o);
      },
      61028: (e) => {
        function t(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class n {
          constructor(e, t, n) {
            (this.msgId = e),
              (this.seqNo = t),
              (this.obj = n),
              (this.classType = "constructor");
          }
        }
        t(n, "SIZE_OVERHEAD", 12),
          t(n, "classType", "constructor"),
          (e.exports = n);
      },
      48075: (e, t, n) => {
        const s = n(61028),
          a = n(9309),
          i = n(73009),
          o = n(30293),
          r = n(31187),
          c = {
            [a.CONSTRUCTOR_ID]: a,
            [i.CONSTRUCTOR_ID]: i,
            [r.CONSTRUCTOR_ID]: r,
            [o.CONSTRUCTOR_ID]: o,
          };
        e.exports = {
          TLMessage: s,
          RPCResult: a,
          Error: i,
          MessageContainer: o,
          GZIPPacked: r,
          coreObjects: c,
        };
      },
      73192: (e, t, n) => {
        var s = n(48287).hp;
        const a = (e) =>
            e
              .replace(/(?:^|_)([a-z])/g, (e, t) => t.toUpperCase())
              .replace(/_/g, ""),
          i = (e) =>
            e.replace(/([-_][a-z])/g, (e) =>
              e.toUpperCase().replace("-", "").replace("_", "")
            ),
          o = new Set([
            3162085175, 2574415285, 1072550713, 3300522427, 1450380236,
          ]),
          r = new Set([
            85337187, 2211011308, 2851430293, 1013613780, 1459478408,
            3504867164, 3045658042, 1715713620, 3608339646, 4110704415,
            812830625,
          ]);
        let c;
        function d(e) {
          c ||
            (c = (function () {
              let e;
              const t = [];
              for (let n = 0; n < 256; n++) {
                e = n;
                for (let t = 0; t < 8; t++)
                  e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                t[n] = e;
              }
              return t;
            })()),
            s.isBuffer(e) || (e = s.from(e));
          let t = -1;
          for (let n = 0; n < e.length; n++) {
            const s = e[n];
            t = c[255 & (t ^ s)] ^ (t >>> 8);
          }
          return ~t >>> 0;
        }
        const u = function (e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
            e.flags.includes("g") || (e = new RegExp(e.source, "g"));
            const s = e.exec(t);
            return s && (n.push(s.slice(1)), u(e, t, n)), n;
          },
          l = (e, t) => {
            const n = e.match(
              /([\w.]+)(?:#([0-9a-fA-F]+))?(?:\s{?\w+:[\w\d<>#.?!]+}?)*\s=\s([\w\d<>#.?]+);$/
            );
            if (!n) throw new Error(`Cannot parse SPObject ${e}`);
            const o = u(/({)?(\w+):([\w\d<>#.?!]+)}?/, e),
              r = {
                name: n[1],
                constructorId: parseInt(n[2], 16),
                argsConfig: {},
                subclassOfId: d(n[3]),
                result: n[3],
                isFunction: t,
                namespace: void 0,
              };
            if (!r.constructorId) {
              const e = "";
              let t;
              t = Object.values(r.argsConfig).length
                ? ` ${Object.keys(r.argsConfig)
                    .map((e) => e.toString())
                    .join(" ")}`
                : "";
              const n = `${r.name}${e}${t} = ${r.result}`
                .replace(/(:|\?)bytes /g, "$1string ")
                .replace(/</g, " ")
                .replace(/>|{|}/g, "")
                .replace(/ \w+:flags\d*\.\d+\?true/g, "");
              "inputMediaInvoice" === r.name && r.name,
                (r.constructorId = d(s.from(n, "utf8")));
            }
            for (const [e, t, n] of o)
              void 0 === e && (r.argsConfig[i(t)] = p(t, n));
            return (
              r.name.includes(".") &&
                ([r.namespace, r.name] = r.name.split(/\.(.+)/)),
              (r.name = a(r.name)),
              r
            );
          };
        function p(e, t) {
          e = "self" === e ? "is_self" : e;
          const n = {
            isVector: !1,
            isFlag: !1,
            skipConstructorId: !1,
            flagGroup: 0,
            flagIndex: -1,
            flagIndicator: !0,
            type: void 0,
            useVectorId: void 0,
          };
          if ("#" !== t) {
            (n.flagIndicator = !1), (n.type = t.replace(/^!+/, ""));
            const e = n.type.match(/flags(\d*)\.(\d+)\?([\w<>.]+)/);
            e &&
              ((n.isFlag = !0),
              (n.flagGroup = Number(e[1] || 1)),
              (n.flagIndex = Number(e[2])),
              ([, , , n.type] = e));
            const s = n.type.match(/[Vv]ector<([\w\d.]+)>/);
            s &&
              ((n.isVector = !0),
              (n.useVectorId = "V" === n.type.charAt(0)),
              ([, n.type] = s)),
              /^[a-z]$/.test(n.type.split(".").pop().charAt(0)) &&
                (n.skipConstructorId = !0);
          }
          return n;
        }
        e.exports = {
          findAll: u,
          parseTl: function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : o;
            return (function* () {
              (t || []).reduce(
                (e, t) => ({
                  ...e,
                  [t.name]: t,
                }),
                {}
              );
              const s = [],
                a = {},
                i = {},
                o = e;
              let c = !1;
              for (let e of o.split("\n")) {
                const t = e.indexOf("//");
                if ((-1 !== t && (e = e.slice(0, t)), (e = e.trim()), !e))
                  continue;
                const o = e.match(/---(\w+)---/);
                if (o) {
                  const [, e] = o;
                  c = "functions" === e;
                } else
                  try {
                    const t = l(e, c);
                    if (n.has(t.constructorId)) continue;
                    s.push(t),
                      t.isFunction ||
                        (i[t.result] || (i[t.result] = []),
                        (a[t.name] = t),
                        i[t.result].push(t));
                  } catch (e) {
                    if (!e.toString().includes("vector#1cb5c415")) throw e;
                  }
              }
              for (const e of s)
                if (r.has(e.constructorId))
                  for (const t in e.argsConfig)
                    "string" === e.argsConfig[t].type &&
                      (e.argsConfig[t].type = "bytes");
              for (const e of s) yield e;
            })();
          },
          buildArgConfig: p,
          fromLine: l,
          CORE_TYPES: o,
          serializeDate: function (e) {
            if (!e) return s.alloc(4).fill(0);
            if (
              (e instanceof Date &&
                (e = Math.floor((Date.now() - e.getTime()) / 1e3)),
              "number" == typeof e)
            ) {
              const t = s.alloc(4);
              return t.writeInt32LE(e, 0), t;
            }
            throw Error(`Cannot interpret "${e}" as a date`);
          },
          serializeBytes: function (e) {
            if (!(e instanceof s)) {
              if ("string" != typeof e)
                throw Error(`Bytes or str expected, not ${e.constructor.name}`);
              e = s.from(e);
            }
            const t = [];
            let n;
            return (
              e.length < 254
                ? ((n = (e.length + 1) % 4),
                  0 !== n && (n = 4 - n),
                  t.push(s.from([e.length])),
                  t.push(e))
                : ((n = e.length % 4),
                  0 !== n && (n = 4 - n),
                  t.push(
                    s.from([
                      254,
                      e.length % 256,
                      (e.length >> 8) % 256,
                      (e.length >> 16) % 256,
                    ])
                  ),
                  t.push(e)),
              t.push(s.alloc(n).fill(0)),
              s.concat(t)
            );
          },
          snakeToCamelCase: a,
          variableSnakeToCamelCase: i,
        };
      },
      43355: (e, t, n) => {
        const s = n(96847),
          { serializeBytes: a, serializeDate: i } = n(73192);
        e.exports = {
          constructors: s,
          requests: s,
          serializeBytes: a,
          serializeDate: i,
        };
      },
      68656: (e) => {
        e.exports =
          "resPQ#05162463 nonce:int128 server_nonce:int128 pq:string server_public_key_fingerprints:Vector<long> = ResPQ;\np_q_inner_data#83c95aec pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 = P_Q_inner_data;\np_q_inner_data_dc#a9f55f95 pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 dc:int = P_Q_inner_data;\np_q_inner_data_temp#3c6a84d4 pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 expires_in:int = P_Q_inner_data;\np_q_inner_data_temp_dc#56fddf88 pq:string p:string q:string nonce:int128 server_nonce:int128 new_nonce:int256 dc:int expires_in:int = P_Q_inner_data;\nserver_DH_params_fail#79cb045d nonce:int128 server_nonce:int128 new_nonce_hash:int128 = Server_DH_Params;\nserver_DH_params_ok#d0e8075c nonce:int128 server_nonce:int128 encrypted_answer:string = Server_DH_Params;\nserver_DH_inner_data#b5890dba nonce:int128 server_nonce:int128 g:int dh_prime:string g_a:string server_time:int = Server_DH_inner_data;\nclient_DH_inner_data#6643b654 nonce:int128 server_nonce:int128 retry_id:long g_b:string = Client_DH_Inner_Data;\ndh_gen_ok#3bcbf734 nonce:int128 server_nonce:int128 new_nonce_hash1:int128 = Set_client_DH_params_answer;\ndh_gen_retry#46dc1fb9 nonce:int128 server_nonce:int128 new_nonce_hash2:int128 = Set_client_DH_params_answer;\ndh_gen_fail#a69dae02 nonce:int128 server_nonce:int128 new_nonce_hash3:int128 = Set_client_DH_params_answer;\ndestroy_auth_key_ok#f660e1d4 = DestroyAuthKeyRes;\ndestroy_auth_key_none#0a9f2259 = DestroyAuthKeyRes;\ndestroy_auth_key_fail#ea109b13 = DestroyAuthKeyRes;\n---functions---\nreq_pq#60469778 nonce:int128 = ResPQ;\nreq_pq_multi#be7e8ef1 nonce:int128 = ResPQ;\nreq_pq_multi_new#51b410fd nonce:int128 = ResPQ;\nreq_DH_params#d712e4be nonce:int128 server_nonce:int128 p:string q:string public_key_fingerprint:long encrypted_data:string = Server_DH_Params;\nset_client_DH_params#f5045f1f nonce:int128 server_nonce:int128 encrypted_data:string = Set_client_DH_params_answer;\ndestroy_auth_key#d1435160 = DestroyAuthKeyRes;\n---types---\nmsgs_ack#62d6b459 msg_ids:Vector<long> = MsgsAck;\nbad_msg_notification#a7eff811 bad_msg_id:long bad_msg_seqno:int error_code:int = BadMsgNotification;\nbad_server_salt#edab447b bad_msg_id:long bad_msg_seqno:int error_code:int new_server_salt:long = BadMsgNotification;\nmsgs_state_req#da69fb52 msg_ids:Vector<long> = MsgsStateReq;\nmsgs_state_info#04deb57d req_msg_id:long info:string = MsgsStateInfo;\nmsgs_all_info#8cc0d131 msg_ids:Vector<long> info:string = MsgsAllInfo;\nmsg_detailed_info#276d3ec6 msg_id:long answer_msg_id:long bytes:int status:int = MsgDetailedInfo;\nmsg_new_detailed_info#809db6df answer_msg_id:long bytes:int status:int = MsgDetailedInfo;\nmsg_resend_req#7d861a08 msg_ids:Vector<long> = MsgResendReq;\nrpc_error#2144ca19 error_code:int error_message:string = RpcError;\nrpc_answer_unknown#5e2ad36e = RpcDropAnswer;\nrpc_answer_dropped_running#cd78e586 = RpcDropAnswer;\nrpc_answer_dropped#a43ad8b7 msg_id:long seq_no:int bytes:int = RpcDropAnswer;\nfuture_salt#0949d9dc valid_since:int valid_until:int salt:long = FutureSalt;\nfuture_salts#ae500895 req_msg_id:long now:int salts:vector<FutureSalt> = FutureSalts;\npong#347773c5 msg_id:long ping_id:long = Pong;\ndestroy_session_ok#e22045fc session_id:long = DestroySessionRes;\ndestroy_session_none#62d350c9 session_id:long = DestroySessionRes;\nnew_session_created#9ec20908 first_msg_id:long unique_id:long server_salt:long = NewSession;\nhttp_wait#9299359f max_delay:int wait_after:int max_wait:int = HttpWait;\nipPort#d433ad73 ipv4:int port:int = IpPort;\nipPortSecret#37982646 ipv4:int port:int secret:bytes = IpPort;\naccessPointRule#4679b65f phone_prefix_rules:string dc_id:int ips:vector<IpPort> = AccessPointRule;\nhelp.configSimple#5a592a6c date:int expires:int rules:vector<AccessPointRule> = help.ConfigSimple;\ntlsClientHello blocks:vector<TlsBlock> = TlsClientHello;\ntlsBlockString data:string = TlsBlock;\ntlsBlockRandom length:int = TlsBlock;\ntlsBlockZero length:int = TlsBlock;\ntlsBlockDomain = TlsBlock;\ntlsBlockGrease seed:int = TlsBlock;\ntlsBlockScope entries:Vector<TlsBlock> = TlsBlock;\n---functions---\nping#7abe77ec ping_id:long = Pong;\nping_delay_disconnect#f3427b8c ping_id:long disconnect_delay:int = Pong;";
      },
      98221: (e, t, n) => {
        "use strict";
        n.d(t, {
          A: () => s,
        }),
          String.fromCharCode(8205);
        const s =
          /(?:\ud83c[\udd70\udd71\udd7e\udd7f]\ufe0f)|(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b|\ud83d\udc26\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef8]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedc-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude7c\ude80-\ude88\ude90-\udebd\udebf-\udec2\udece-\udedb\udee0-\udee8]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;
      },
      718: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            indexedDBAddConnectionLog: () => u,
            indexedDBAddLog: () => d,
            indexedDBConnectionLogsClear: () => h,
            indexedDBGetConnectionLogs: () => f,
            indexedDBGetLogs: () => p,
            indexedDBLogsClear: () => g,
            indexedDBRotateLogs: () => l,
            initIndexedDbLogs: () => c,
          });
        var s = n(77783),
          a = n(31481);
        function i(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          const a = indexedDB.open(e);
          a.onupgradeneeded = () => {
            const e = a.result.createObjectStore(t);
            for (const t of n)
              e.createIndex(t, t, {
                unique: !1,
              });
          };
          const i = (0, s.promisifyRequest)(a);
          return (e, n) => i.then((s) => n(s.transaction(t, e).objectStore(t)));
        }
        function o() {
          return i(a.V2q, a.K_i, ["date"]);
        }
        function r() {
          return i(a.Yi6, a.xRO);
        }
        function c() {
          return a.VrD
            ? new Promise((e, t) => {
                e([o(), r()]);
              })
            : Promise.resolve(void 0);
        }
        async function d(e) {
          if (a.VrD)
            try {
              const t = i(a.V2q, a.K_i);
              (0, s.set)(
                Date.now() + Math.random(),
                {
                  id: Date.now() + Math.random(),
                  date: m(),
                  logs: e,
                },
                t
              );
            } catch (e) {}
        }
        async function u(e) {
          if (a.$Q)
            try {
              const t = r();
              (0, s.set)(Date.now() + Math.random(), e, t);
            } catch (e) {}
        }
        async function l() {
          if (!a.VrD) return;
          const e = o(),
            t = m() - 60 * a.t0A,
            n = IDBKeyRange.upperBound(t, !0);
          return e("readwrite", (e) => {
            try {
              e.index("date").openCursor(n).onsuccess = function () {
                this.result && (this.result.delete(), this.result.continue());
              };
            } catch (e) {
              console.error("indexedDBRotateLogs error");
            }
            return (0, s.promisifyRequest)(e.transaction);
          });
        }
        function p() {
          return a.VrD
            ? new Promise((e, t) => {
                try {
                  const n = o();
                  (0, s.values)(n)
                    .then((t) => {
                      (t = t.map((e) => e.logs)), e(t);
                    })
                    .catch((e) => t(e));
                } catch (e) {
                  t(e);
                }
              })
            : Promise.resolve([]);
        }
        function f() {
          return a.$Q
            ? new Promise((e, t) => {
                try {
                  const n = r();
                  (0, s.values)(n)
                    .then((t) => {
                      e(t);
                    })
                    .catch((e) => t(e));
                } catch (e) {
                  t(e);
                }
              })
            : Promise.resolve([]);
        }
        function g() {
          return (0, s.clear)(o());
        }
        function h() {
          return (0, s.clear)(r());
        }
        function m() {
          return Date.now() / 1e3;
        }
      },
      9705: (e, t, n) => {
        "use strict";
        function s(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        n.d(t, {
          A: () => a,
        });
        class a {
          constructor() {
            s(this, "promise", void 0),
              s(this, "reject", void 0),
              s(this, "resolve", void 0),
              (this.promise = new Promise((e, t) => {
                (this.reject = t), (this.resolve = e);
              }));
          }
          static resolved(e) {
            const t = new a();
            return t.resolve(e), t;
          }
        }
      },
      71337: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            default: () => o,
            postMessageListenInWorker: () => r,
          });
        var s = n(14235),
          a = n(31481);
        function i(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class o {
          constructor(e) {
            (this.worker = e),
              i(this, "requestStates", new Map()),
              i(this, "requestStatesByCallback", new Map()),
              this.subscribe();
          }
          request(e) {
            const {
                worker: t,
                requestStates: n,
                requestStatesByCallback: a,
              } = this,
              i = (0, s.A)(n),
              o = {
                type: "callMethod",
                messageId: i,
                ...e,
              },
              r = {
                messageId: i,
              },
              c = new Promise((e, t) => {
                Object.assign(r, {
                  resolve: e,
                  reject: t,
                });
              });
            if ("function" == typeof o.args[o.args.length - 1]) {
              o.withCallback = !0;
              const e = o.args.pop();
              (r.callback = e), a.set(e, r);
            }
            return (
              n.set(i, r),
              c
                .catch(() => {})
                .finally(() => {
                  n.delete(i), r.callback && a.delete(r.callback);
                }),
              t.postMessage(o),
              c
            );
          }
          cancelCallback(e) {
            e.isCanceled = !0;
            const { messageId: t } = this.requestStatesByCallback.get(e) || {};
            t &&
              this.worker.postMessage({
                type: "cancelProgress",
                messageId: t,
              });
          }
          subscribe() {
            const { worker: e, requestStates: t } = this;
            e.addEventListener("message", (e) => {
              let { data: n } = e;
              if ("methodResponse" === n.type) {
                const e = t.get(n.messageId);
                e && (n.error ? e.reject(n.error) : e.resolve(n.response));
              } else if ("methodCallback" === n.type) {
                const e = t.get(n.messageId);
                e?.callback?.(...n.callbackArgs);
              } else if ("unhandledError" === n.type)
                throw new Error(n.error?.message);
            });
          }
        }
        function r(e, t) {
          self.addEventListener("message", (n) => {
            "message" === n.type &&
              "type" in n.data &&
              n.data.type === a.wG3 &&
              n.data.data.type === e &&
              t(n, n.data.data);
          });
        }
      },
      74824: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            Type: () => r,
            clear: () => l,
            deleteCacheApi: () => p,
            fetch: () => c,
            getVideoBufferRangesFromCache: () => g,
            isCacheApiSupported: () => o,
            remove: () => u,
            rotateCacheApi: () => f,
            save: () => d,
          });
        var s = n(31481);
        const a = self.caches;
        let i;
        async function o() {
          return (
            !!a &&
            ((i =
              i ??
              (await a
                .has("test")
                .then(() => !0)
                .catch(() => !1))),
            i)
          );
        }
        let r = (function (e) {
          return (
            (e[(e.Text = 0)] = "Text"),
            (e[(e.Blob = 1)] = "Blob"),
            (e[(e.Json = 2)] = "Json"),
            (e[(e.ArrayBuffer = 3)] = "ArrayBuffer"),
            e
          );
        })({});
        async function c(e, t, n) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (a)
            try {
              const o = s.Rt$
                  ? `${s.uyj}/${t.replace(/:/g, "_")}`
                  : new Request(t.replace(/:/g, "_")),
                c = await a.open(e),
                d = await c.match(o);
              if (!d) return;
              const u = d.headers.get("Content-Type");
              switch (n) {
                case r.Text:
                  return await d.text();
                case r.Blob: {
                  if (t.startsWith("avatar") && u && u.startsWith("text"))
                    return;
                  const e = await d.blob(),
                    n = !e.type || (!i && e.type.includes("html"));
                  let s = e.type || u;
                  return n && s
                    ? (i || (s = s.replace(/html/gi, "")),
                      new Blob([e], {
                        type: s,
                      }))
                    : e;
                }
                case r.Json:
                  return await d.json();
                case r.ArrayBuffer:
                  return await d.arrayBuffer();
                default:
                  return;
              }
            } catch (e) {
              return void console.warn(e);
            }
        }
        async function d(e, t, n) {
          if (!a) return !1;
          try {
            const i =
                "string" == typeof n ||
                n instanceof Blob ||
                n instanceof ArrayBuffer
                  ? n
                  : JSON.stringify(n),
              o = s.Rt$
                ? `${s.uyj}/${t.replace(/:/g, "_")}`
                : new Request(t.replace(/:/g, "_")),
              r = new Response(i),
              c = await a.open(e);
            return await c.put(o, r), !0;
          } catch (e) {
            return console.warn(e), !1;
          }
        }
        async function u(e, t) {
          try {
            if (!a) return;
            const n = await a.open(e);
            return await n.delete(t);
          } catch (e) {
            return void console.warn(e);
          }
        }
        async function l(e) {
          try {
            if (!a) return;
            return await a.delete(e);
          } catch (e) {
            return void console.warn(e);
          }
        }
        async function p(e) {
          return caches.delete(e);
        }
        async function f(e, t) {
          return caches.open(e).then((e) => {
            e.keys().then((n) => {
              n.length > t &&
                n.slice(0, n.length - t).map(async (t) => {
                  await e.delete(t);
                });
            });
          });
        }
        async function g(e, t, n) {
          const a = await caches.open(s.cLl),
            i = [];
          for (let e = 0; e < n; e += 524288) {
            const o = e,
              r = e + 524288 - 1,
              c = +(o / n).toFixed(3),
              d = +((r + 1) / n).toFixed(3),
              u = `/progressive/${t}?start=${o}&end=${r}&type=`,
              l = !!(await a.match(`${u}arrayBuffer`)),
              p = !!(await a.match(`${u}headers`));
            if (
              (l &&
                p &&
                i.push({
                  start: c,
                  end: d <= 1 ? d : 1,
                }),
              r > s.Yxk)
            )
              break;
          }
          const o = (function (e) {
            const t = [];
            return (
              e.forEach((e, n) => {
                if (!t.length)
                  return void t.push({
                    ...e,
                  });
                const s = t[t.length - 1];
                s.end === e.start
                  ? (s.end = e.end)
                  : t.push({
                      ...e,
                    });
              }),
              t
            );
          })(i);
          return n > s.Yxk
            ? (function (e, t) {
                let n = [...e];
                const s = n.at(-1),
                  a = t.findIndex((e) => e.end > s?.end);
                if (a < 0 || !s) return [...e];
                const i = t[a];
                let o;
                if (s.start < i.start) {
                  if (i.start > s.end) return [...e, ...t.slice(a)];
                  o = {
                    start: s.start,
                    end: i.end,
                  };
                } else
                  s.start >= i.start &&
                    s.end < i.end &&
                    (o = {
                      start: i.start,
                      end: i.end,
                    });
                for (let e = 0; e < n.length; e++)
                  n[e].start > o?.start && delete n[e],
                    n[e]?.start < o?.start &&
                      n[e]?.end > o?.start &&
                      (e > 0
                        ? (n[e - 1].end = o?.start)
                        : 0 === e && (o.start = n[e]?.start),
                      delete n[e]);
                return [
                  ...n.slice(0, n.length - 1),
                  o,
                  ...t.slice(a + 1),
                ].filter((e) => void 0 !== e);
              })(o, e)
            : o;
        }
      },
      61182: (e, t, n) => {
        "use strict";
        n.d(t, {
          qn: () => s,
        });
        const s = ["log", "error", "warn", "info", "debug"];
        s.reduce((e, t) => ((e[t] = console[t]), e), {});
      },
      87679: (e, t, n) => {
        "use strict";
        function s(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        async function a(e, t) {
          const n = await (async function (e) {
            return (await fetch(e)).blob();
          })(e);
          return (function (e, t) {
            return new File([e], t, {
              lastModified: Date.now(),
              type: e.type,
            });
          })(n, t);
        }
        n.d(t, {
          t2: () => a,
        }),
          n(31481),
          "undefined" == typeof File &&
            (self.File = class extends Blob {
              constructor(e, t, n) {
                if (n) {
                  const { type: t, ...a } = n;
                  super(e, {
                    type: t,
                  }),
                    s(this, "name", void 0),
                    Object.assign(this, a);
                } else super(e), s(this, "name", void 0);
                this.name = t;
              }
            });
      },
      84846: (e, t, n) => {
        "use strict";
        n.d(t, {
          j: () => i,
        });
        var s = n(9705);
        function a(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != typeof e || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == typeof t ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class i {
          constructor(e) {
            (this.maxWorkers = e),
              a(this, "deferreds", []),
              a(this, "activeWorkers", 0);
          }
          requestWorker() {
            if (this.activeWorkers === this.maxWorkers) {
              const e = new s.A();
              return this.deferreds.push(e), e.promise;
            }
            return this.activeWorkers++, Promise.resolve();
          }
          releaseWorker() {
            this.deferreds.length && this.activeWorkers === this.maxWorkers
              ? this.deferreds.shift().resolve()
              : this.activeWorkers--;
          }
        }
      },
      14235: (e, t, n) => {
        "use strict";
        function s() {
          return Date.now().toString(36) + Math.random().toString(36).slice(2);
        }
        n.d(t, {
          A: () => s,
        });
      },
      87894: (e, t, n) => {
        "use strict";
        function s(e, t) {
          return e.reduce((e, n) => ((e[n[t]] = n), e), {});
        }
        function a(e, t) {
          return e.reduce((e, n) => {
            const [s, a] = t(n);
            return (e[s] = a), e;
          }, {});
        }
        function i(e, t) {
          return t.reduce((t, n) => ((t[n] = e[n]), t), {});
        }
        function o(e, t) {
          return t.reduce((t, n) => (e[n] && (t[n] = e[n]), t), {});
        }
        function r(e, t) {
          const n = new Set(t.map(String));
          return i(
            e,
            Object.keys(e).filter((e) => !n.has(e))
          );
        }
        function c(e) {
          return Object.keys(e).reduce((t, n) => {
            const s = n;
            return void 0 !== e[s] && (t[s] = e[s]), t;
          }, {});
        }
        function d(e) {
          return e.filter(Boolean);
        }
        function u(e, t) {
          const n = [];
          for (let s = 0; s < e.length; s += t) n.push(e.slice(s, s + t));
          return n;
        }
        n.d(t, {
          Oy: () => c,
          Up: () => i,
          _E: () => o,
          cJ: () => r,
          dU: () => s,
          lD: () => u,
          oE: () => d,
          pA: () => a,
        });
      },
      52334: (e, t, n) => {
        "use strict";
        n.d(t, {
          A: () => i,
        });
        var s = n(98221);
        const a = new RegExp(`^(?:${s.A.source})+$`, ""),
          i = (e) => {
            const t = e.split("\n"),
              n = t.join("");
            if (n.length > 800) return !1;
            if (!Boolean(n.match(a))) return !1;
            const i = t.map((e) => {
              let t = 0;
              for (; s.A.exec(e); )
                if ((t++, t > 100)) return (s.A.lastIndex = 0), -1;
              return t;
            });
            let o = t.length;
            for (let e = 0; e < i.length; e++) {
              if (-1 === i[e]) return !1;
              i[e] > o && (o = i[e]);
            }
            return o;
          };
      },
      37836: (e, t, n) => {
        "use strict";
        function s(e, t) {
          let n,
            s,
            a,
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          return function () {
            s = !0;
            for (var o = arguments.length, r = new Array(o), c = 0; c < o; c++)
              r[c] = arguments[c];
            (a = r),
              n ||
                (i && ((s = !1), e(...a)),
                (n = self.setInterval(() => {
                  if (!s) return self.clearInterval(n), void (n = void 0);
                  (s = !1), e(...a);
                }, t)));
          };
        }
        function a(e) {
          return (function (e, t) {
            let n,
              s = !1;
            return function () {
              for (
                var a = arguments.length, i = new Array(a), o = 0;
                o < a;
                o++
              )
                i[o] = arguments[o];
              (n = i),
                s ||
                  ((s = !0),
                  e(() => {
                    (s = !1), t(...n);
                  }));
            };
          })(r, e);
        }
        n.d(t, {
          Fe: () => a,
          nF: () => s,
          v7: () => i,
        });
        const i = (e) =>
          new Promise((t) => {
            setTimeout(() => t(), e);
          });
        let o;
        function r(e) {
          o
            ? o.push(e)
            : ((o = [e]),
              Promise.resolve().then(() => {
                const e = o;
                (o = void 0), e.forEach((e) => e());
              }));
        }
      },
      80140: (e, t, n) => {
        "use strict";
        n.d(t, {
          Fm: () => o,
          SF: () => i,
          SH: () => a,
        });
        let s = 0;
        function a(e) {
          s = e;
        }
        function i() {
          return s;
        }
        function o() {
          return Math.floor(Date.now() / 1e3) + s;
        }
      },
      70497: (e, t, n) => {
        "use strict";
        function s(e, t) {
          let n = 0;
          const s = new Array(t),
            a = e.length / t,
            i = e[0],
            o = e[e.length - 1];
          for (let r = 0; r < t; r++) {
            const t = Math.floor(r * a),
              c = ((e[t - 1] ?? i) + (e[t] ?? i) + (e[t + 1] ?? o)) / 3;
            (s[r] = c), n < c && (n = c);
          }
          return {
            data: s,
            peak: n,
          };
        }
        n.d(t, {
          p: () => s,
        });
      },
      87263: (e, t, n) => {
        var s;
        e = n.nmd(e);
        var a = (function (e) {
          "use strict";
          var t = 1e7,
            n = 7,
            s = 9007199254740992,
            i = f(s),
            o = "0123456789abcdefghijklmnopqrstuvwxyz",
            r = "function" == typeof BigInt;
          function c(e, t, n, s) {
            return void 0 === e
              ? c[0]
              : void 0 === t || (10 == +t && !n)
              ? Q(e)
              : z(e, t, n, s);
          }
          function d(e, t) {
            (this.value = e), (this.sign = t), (this.isSmall = !1);
          }
          function u(e) {
            (this.value = e), (this.sign = e < 0), (this.isSmall = !0);
          }
          function l(e) {
            this.value = e;
          }
          function p(e) {
            return -s < e && e < s;
          }
          function f(e) {
            return e < 1e7
              ? [e]
              : e < 1e14
              ? [e % 1e7, Math.floor(e / 1e7)]
              : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
          }
          function g(e) {
            h(e);
            var n = e.length;
            if (n < 4 && T(e, i) < 0)
              switch (n) {
                case 0:
                  return 0;
                case 1:
                  return e[0];
                case 2:
                  return e[0] + e[1] * t;
                default:
                  return e[0] + (e[1] + e[2] * t) * t;
              }
            return e;
          }
          function h(e) {
            for (var t = e.length; 0 === e[--t]; );
            e.length = t + 1;
          }
          function m(e) {
            for (var t = new Array(e), n = -1; ++n < e; ) t[n] = 0;
            return t;
          }
          function y(e) {
            return e > 0 ? Math.floor(e) : Math.ceil(e);
          }
          function _(e, n) {
            var s,
              a,
              i = e.length,
              o = n.length,
              r = new Array(i),
              c = 0,
              d = t;
            for (a = 0; a < o; a++)
              (c = (s = e[a] + n[a] + c) >= d ? 1 : 0), (r[a] = s - c * d);
            for (; a < i; )
              (c = (s = e[a] + c) === d ? 1 : 0), (r[a++] = s - c * d);
            return c > 0 && r.push(c), r;
          }
          function b(e, t) {
            return e.length >= t.length ? _(e, t) : _(t, e);
          }
          function w(e, n) {
            var s,
              a,
              i = e.length,
              o = new Array(i),
              r = t;
            for (a = 0; a < i; a++)
              (s = e[a] - r + n),
                (n = Math.floor(s / r)),
                (o[a] = s - n * r),
                (n += 1);
            for (; n > 0; ) (o[a++] = n % r), (n = Math.floor(n / r));
            return o;
          }
          function v(e, n) {
            var s,
              a,
              i = e.length,
              o = n.length,
              r = new Array(i),
              c = 0,
              d = t;
            for (s = 0; s < o; s++)
              (a = e[s] - c - n[s]) < 0 ? ((a += d), (c = 1)) : (c = 0),
                (r[s] = a);
            for (s = o; s < i; s++) {
              if (!((a = e[s] - c) < 0)) {
                r[s++] = a;
                break;
              }
              (a += d), (r[s] = a);
            }
            for (; s < i; s++) r[s] = e[s];
            return h(r), r;
          }
          function A(e, n, s) {
            var a,
              i,
              o = e.length,
              r = new Array(o),
              c = -n,
              l = t;
            for (a = 0; a < o; a++)
              (i = e[a] + c),
                (c = Math.floor(i / l)),
                (i %= l),
                (r[a] = i < 0 ? i + l : i);
            return "number" == typeof (r = g(r))
              ? (s && (r = -r), new u(r))
              : new d(r, s);
          }
          function S(e, n) {
            var s,
              a,
              i,
              o,
              r = e.length,
              c = n.length,
              d = m(r + c),
              u = t;
            for (i = 0; i < r; ++i) {
              o = e[i];
              for (var l = 0; l < c; ++l)
                (s = o * n[l] + d[i + l]),
                  (a = Math.floor(s / u)),
                  (d[i + l] = s - a * u),
                  (d[i + l + 1] += a);
            }
            return h(d), d;
          }
          function I(e, n) {
            var s,
              a,
              i = e.length,
              o = new Array(i),
              r = t,
              c = 0;
            for (a = 0; a < i; a++)
              (s = e[a] * n + c), (c = Math.floor(s / r)), (o[a] = s - c * r);
            for (; c > 0; ) (o[a++] = c % r), (c = Math.floor(c / r));
            return o;
          }
          function C(e, t) {
            for (var n = []; t-- > 0; ) n.push(0);
            return n.concat(e);
          }
          function P(e, t) {
            var n = Math.max(e.length, t.length);
            if (n <= 30) return S(e, t);
            n = Math.ceil(n / 2);
            var s = e.slice(n),
              a = e.slice(0, n),
              i = t.slice(n),
              o = t.slice(0, n),
              r = P(a, o),
              c = P(s, i),
              d = P(b(a, s), b(o, i)),
              u = b(b(r, C(v(v(d, r), c), n)), C(c, 2 * n));
            return h(u), u;
          }
          function M(e, n, s) {
            return new d(e < t ? I(n, e) : S(n, f(e)), s);
          }
          function k(e) {
            var n,
              s,
              a,
              i,
              o = e.length,
              r = m(o + o),
              c = t;
            for (a = 0; a < o; a++) {
              s = 0 - (i = e[a]) * i;
              for (var d = a; d < o; d++)
                (n = i * e[d] * 2 + r[a + d] + s),
                  (s = Math.floor(n / c)),
                  (r[a + d] = n - s * c);
              r[a + o] = s;
            }
            return h(r), r;
          }
          function R(e, n) {
            var s,
              a,
              i,
              o,
              r = e.length,
              c = m(r),
              d = t;
            for (i = 0, s = r - 1; s >= 0; --s)
              (i = (o = i * d + e[s]) - (a = y(o / n)) * n), (c[s] = 0 | a);
            return [c, 0 | i];
          }
          function E(e, n) {
            var s,
              a = Q(n);
            if (r) return [new l(e.value / a.value), new l(e.value % a.value)];
            var i,
              o = e.value,
              p = a.value;
            if (0 === p) throw new Error("Cannot divide by zero");
            if (e.isSmall)
              return a.isSmall ? [new u(y(o / p)), new u(o % p)] : [c[0], e];
            if (a.isSmall) {
              if (1 === p) return [e, c[0]];
              if (-1 == p) return [e.negate(), c[0]];
              var _ = Math.abs(p);
              if (_ < t) {
                i = g((s = R(o, _))[0]);
                var b = s[1];
                return (
                  e.sign && (b = -b),
                  "number" == typeof i
                    ? (e.sign !== a.sign && (i = -i), [new u(i), new u(b)])
                    : [new d(i, e.sign !== a.sign), new u(b)]
                );
              }
              p = f(_);
            }
            var w = T(o, p);
            if (-1 === w) return [c[0], e];
            if (0 === w) return [c[e.sign === a.sign ? 1 : -1], c[0]];
            (s =
              o.length + p.length <= 200
                ? (function (e, n) {
                    var s,
                      a,
                      i,
                      o,
                      r,
                      c,
                      d,
                      u = e.length,
                      l = n.length,
                      p = t,
                      f = m(n.length),
                      h = n[l - 1],
                      y = Math.ceil(p / (2 * h)),
                      _ = I(e, y),
                      b = I(n, y);
                    for (
                      _.length <= u && _.push(0),
                        b.push(0),
                        h = b[l - 1],
                        a = u - l;
                      a >= 0;
                      a--
                    ) {
                      for (
                        s = p - 1,
                          _[a + l] !== h &&
                            (s = Math.floor((_[a + l] * p + _[a + l - 1]) / h)),
                          i = 0,
                          o = 0,
                          c = b.length,
                          r = 0;
                        r < c;
                        r++
                      )
                        (i += s * b[r]),
                          (d = Math.floor(i / p)),
                          (o += _[a + r] - (i - d * p)),
                          (i = d),
                          o < 0
                            ? ((_[a + r] = o + p), (o = -1))
                            : ((_[a + r] = o), (o = 0));
                      for (; 0 !== o; ) {
                        for (s -= 1, i = 0, r = 0; r < c; r++)
                          (i += _[a + r] - p + b[r]) < 0
                            ? ((_[a + r] = i + p), (i = 0))
                            : ((_[a + r] = i), (i = 1));
                        o += i;
                      }
                      f[a] = s;
                    }
                    return (_ = R(_, y)[0]), [g(f), g(_)];
                  })(o, p)
                : (function (e, n) {
                    for (
                      var s,
                        a,
                        i,
                        o,
                        r,
                        c = e.length,
                        d = n.length,
                        u = [],
                        l = [],
                        p = t;
                      c;

                    )
                      if ((l.unshift(e[--c]), h(l), T(l, n) < 0)) u.push(0);
                      else {
                        (i = l[(a = l.length) - 1] * p + l[a - 2]),
                          (o = n[d - 1] * p + n[d - 2]),
                          a > d && (i = (i + 1) * p),
                          (s = Math.ceil(i / o));
                        do {
                          if (T((r = I(n, s)), l) <= 0) break;
                          s--;
                        } while (s);
                        u.push(s), (l = v(l, r));
                      }
                    return u.reverse(), [g(u), g(l)];
                  })(o, p)),
              (i = s[0]);
            var A = e.sign !== a.sign,
              S = s[1],
              C = e.sign;
            return (
              "number" == typeof i
                ? (A && (i = -i), (i = new u(i)))
                : (i = new d(i, A)),
              "number" == typeof S
                ? (C && (S = -S), (S = new u(S)))
                : (S = new d(S, C)),
              [i, S]
            );
          }
          function T(e, t) {
            if (e.length !== t.length) return e.length > t.length ? 1 : -1;
            for (var n = e.length - 1; n >= 0; n--)
              if (e[n] !== t[n]) return e[n] > t[n] ? 1 : -1;
            return 0;
          }
          function B(e) {
            var t = e.abs();
            return (
              !t.isUnit() &&
              (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) &&
                  (!!t.lesser(49) || void 0)))
            );
          }
          function D(e, t) {
            for (var n, s, i, o = e.prev(), r = o, c = 0; r.isEven(); )
              (r = r.divide(2)), c++;
            e: for (s = 0; s < t.length; s++)
              if (
                !e.lesser(t[s]) &&
                !(i = a(t[s]).modPow(r, e)).isUnit() &&
                !i.equals(o)
              ) {
                for (n = c - 1; 0 != n; n--) {
                  if ((i = i.square().mod(e)).isUnit()) return !1;
                  if (i.equals(o)) continue e;
                }
                return !1;
              }
            return !0;
          }
          (d.prototype = Object.create(c.prototype)),
            (u.prototype = Object.create(c.prototype)),
            (l.prototype = Object.create(c.prototype)),
            (d.prototype.add = function (e) {
              var t = Q(e);
              if (this.sign !== t.sign) return this.subtract(t.negate());
              var n = this.value,
                s = t.value;
              return t.isSmall
                ? new d(w(n, Math.abs(s)), this.sign)
                : new d(b(n, s), this.sign);
            }),
            (d.prototype.plus = d.prototype.add),
            (u.prototype.add = function (e) {
              var t = Q(e),
                n = this.value;
              if (n < 0 !== t.sign) return this.subtract(t.negate());
              var s = t.value;
              if (t.isSmall) {
                if (p(n + s)) return new u(n + s);
                s = f(Math.abs(s));
              }
              return new d(w(s, Math.abs(n)), n < 0);
            }),
            (u.prototype.plus = u.prototype.add),
            (l.prototype.add = function (e) {
              return new l(this.value + Q(e).value);
            }),
            (l.prototype.plus = l.prototype.add),
            (d.prototype.subtract = function (e) {
              var t = Q(e);
              if (this.sign !== t.sign) return this.add(t.negate());
              var n = this.value,
                s = t.value;
              return t.isSmall
                ? A(n, Math.abs(s), this.sign)
                : (function (e, t, n) {
                    var s;
                    return (
                      T(e, t) >= 0 ? (s = v(e, t)) : ((s = v(t, e)), (n = !n)),
                      "number" == typeof (s = g(s))
                        ? (n && (s = -s), new u(s))
                        : new d(s, n)
                    );
                  })(n, s, this.sign);
            }),
            (d.prototype.minus = d.prototype.subtract),
            (u.prototype.subtract = function (e) {
              var t = Q(e),
                n = this.value;
              if (n < 0 !== t.sign) return this.add(t.negate());
              var s = t.value;
              return t.isSmall ? new u(n - s) : A(s, Math.abs(n), n >= 0);
            }),
            (u.prototype.minus = u.prototype.subtract),
            (l.prototype.subtract = function (e) {
              return new l(this.value - Q(e).value);
            }),
            (l.prototype.minus = l.prototype.subtract),
            (d.prototype.negate = function () {
              return new d(this.value, !this.sign);
            }),
            (u.prototype.negate = function () {
              var e = this.sign,
                t = new u(-this.value);
              return (t.sign = !e), t;
            }),
            (l.prototype.negate = function () {
              return new l(-this.value);
            }),
            (d.prototype.abs = function () {
              return new d(this.value, !1);
            }),
            (u.prototype.abs = function () {
              return new u(Math.abs(this.value));
            }),
            (l.prototype.abs = function () {
              return new l(this.value >= 0 ? this.value : -this.value);
            }),
            (d.prototype.multiply = function (e) {
              var n,
                s,
                a,
                i = Q(e),
                o = this.value,
                r = i.value,
                u = this.sign !== i.sign;
              if (i.isSmall) {
                if (0 === r) return c[0];
                if (1 === r) return this;
                if (-1 === r) return this.negate();
                if ((n = Math.abs(r)) < t) return new d(I(o, n), u);
                r = f(n);
              }
              return new d(
                -0.012 * (s = o.length) -
                  0.012 * (a = r.length) +
                  15e-6 * s * a >
                0
                  ? P(o, r)
                  : S(o, r),
                u
              );
            }),
            (d.prototype.times = d.prototype.multiply),
            (u.prototype._multiplyBySmall = function (e) {
              return p(e.value * this.value)
                ? new u(e.value * this.value)
                : M(
                    Math.abs(e.value),
                    f(Math.abs(this.value)),
                    this.sign !== e.sign
                  );
            }),
            (d.prototype._multiplyBySmall = function (e) {
              return 0 === e.value
                ? c[0]
                : 1 === e.value
                ? this
                : -1 === e.value
                ? this.negate()
                : M(Math.abs(e.value), this.value, this.sign !== e.sign);
            }),
            (u.prototype.multiply = function (e) {
              return Q(e)._multiplyBySmall(this);
            }),
            (u.prototype.times = u.prototype.multiply),
            (l.prototype.multiply = function (e) {
              return new l(this.value * Q(e).value);
            }),
            (l.prototype.times = l.prototype.multiply),
            (d.prototype.square = function () {
              return new d(k(this.value), !1);
            }),
            (u.prototype.square = function () {
              var e = this.value * this.value;
              return p(e) ? new u(e) : new d(k(f(Math.abs(this.value))), !1);
            }),
            (l.prototype.square = function (e) {
              return new l(this.value * this.value);
            }),
            (d.prototype.divmod = function (e) {
              var t = E(this, e);
              return {
                quotient: t[0],
                remainder: t[1],
              };
            }),
            (l.prototype.divmod = u.prototype.divmod = d.prototype.divmod),
            (d.prototype.divide = function (e) {
              return E(this, e)[0];
            }),
            (l.prototype.over = l.prototype.divide =
              function (e) {
                return new l(this.value / Q(e).value);
              }),
            (u.prototype.over =
              u.prototype.divide =
              d.prototype.over =
                d.prototype.divide),
            (d.prototype.mod = function (e) {
              return E(this, e)[1];
            }),
            (l.prototype.mod = l.prototype.remainder =
              function (e) {
                return new l(this.value % Q(e).value);
              }),
            (u.prototype.remainder =
              u.prototype.mod =
              d.prototype.remainder =
                d.prototype.mod),
            (d.prototype.pow = function (e) {
              var t,
                n,
                s,
                a = Q(e),
                i = this.value,
                o = a.value;
              if (0 === o) return c[1];
              if (0 === i) return c[0];
              if (1 === i) return c[1];
              if (-1 === i) return a.isEven() ? c[1] : c[-1];
              if (a.sign) return c[0];
              if (!a.isSmall)
                throw new Error(
                  "The exponent " + a.toString() + " is too large."
                );
              if (this.isSmall && p((t = Math.pow(i, o)))) return new u(y(t));
              for (
                n = this, s = c[1];
                !0 & o && ((s = s.times(n)), --o), 0 !== o;

              )
                (o /= 2), (n = n.square());
              return s;
            }),
            (u.prototype.pow = d.prototype.pow),
            (l.prototype.pow = function (e) {
              var t = Q(e),
                n = this.value,
                s = t.value,
                a = BigInt(0),
                i = BigInt(1),
                o = BigInt(2);
              if (s === a) return c[1];
              if (n === a) return c[0];
              if (n === i) return c[1];
              if (n === BigInt(-1)) return t.isEven() ? c[1] : c[-1];
              if (t.isNegative()) return new l(a);
              for (
                var r = this, d = c[1];
                (s & i) === i && ((d = d.times(r)), --s), s !== a;

              )
                (s /= o), (r = r.square());
              return d;
            }),
            (d.prototype.modPow = function (e, t) {
              if (((e = Q(e)), (t = Q(t)).isZero()))
                throw new Error("Cannot take modPow with modulus 0");
              var n = c[1],
                s = this.mod(t);
              for (
                e.isNegative() && ((e = e.multiply(c[-1])), (s = s.modInv(t)));
                e.isPositive();

              ) {
                if (s.isZero()) return c[0];
                e.isOdd() && (n = n.multiply(s).mod(t)),
                  (e = e.divide(2)),
                  (s = s.square().mod(t));
              }
              return n;
            }),
            (l.prototype.modPow = u.prototype.modPow = d.prototype.modPow),
            (d.prototype.compareAbs = function (e) {
              var t = Q(e),
                n = this.value,
                s = t.value;
              return t.isSmall ? 1 : T(n, s);
            }),
            (u.prototype.compareAbs = function (e) {
              var t = Q(e),
                n = Math.abs(this.value),
                s = t.value;
              return t.isSmall
                ? n === (s = Math.abs(s))
                  ? 0
                  : n > s
                  ? 1
                  : -1
                : -1;
            }),
            (l.prototype.compareAbs = function (e) {
              var t = this.value,
                n = Q(e).value;
              return (t = t >= 0 ? t : -t) === (n = n >= 0 ? n : -n)
                ? 0
                : t > n
                ? 1
                : -1;
            }),
            (d.prototype.compare = function (e) {
              if (e === 1 / 0) return -1;
              if (e === -1 / 0) return 1;
              var t = Q(e),
                n = this.value,
                s = t.value;
              return this.sign !== t.sign
                ? t.sign
                  ? 1
                  : -1
                : t.isSmall
                ? this.sign
                  ? -1
                  : 1
                : T(n, s) * (this.sign ? -1 : 1);
            }),
            (d.prototype.compareTo = d.prototype.compare),
            (u.prototype.compare = function (e) {
              if (e === 1 / 0) return -1;
              if (e === -1 / 0) return 1;
              var t = Q(e),
                n = this.value,
                s = t.value;
              return t.isSmall
                ? n == s
                  ? 0
                  : n > s
                  ? 1
                  : -1
                : n < 0 !== t.sign
                ? n < 0
                  ? -1
                  : 1
                : n < 0
                ? 1
                : -1;
            }),
            (u.prototype.compareTo = u.prototype.compare),
            (l.prototype.compare = function (e) {
              if (e === 1 / 0) return -1;
              if (e === -1 / 0) return 1;
              var t = this.value,
                n = Q(e).value;
              return t === n ? 0 : t > n ? 1 : -1;
            }),
            (l.prototype.compareTo = l.prototype.compare),
            (d.prototype.equals = function (e) {
              return 0 === this.compare(e);
            }),
            (l.prototype.eq =
              l.prototype.equals =
              u.prototype.eq =
              u.prototype.equals =
              d.prototype.eq =
                d.prototype.equals),
            (d.prototype.notEquals = function (e) {
              return 0 !== this.compare(e);
            }),
            (l.prototype.neq =
              l.prototype.notEquals =
              u.prototype.neq =
              u.prototype.notEquals =
              d.prototype.neq =
                d.prototype.notEquals),
            (d.prototype.greater = function (e) {
              return this.compare(e) > 0;
            }),
            (l.prototype.gt =
              l.prototype.greater =
              u.prototype.gt =
              u.prototype.greater =
              d.prototype.gt =
                d.prototype.greater),
            (d.prototype.lesser = function (e) {
              return this.compare(e) < 0;
            }),
            (l.prototype.lt =
              l.prototype.lesser =
              u.prototype.lt =
              u.prototype.lesser =
              d.prototype.lt =
                d.prototype.lesser),
            (d.prototype.greaterOrEquals = function (e) {
              return this.compare(e) >= 0;
            }),
            (l.prototype.geq =
              l.prototype.greaterOrEquals =
              u.prototype.geq =
              u.prototype.greaterOrEquals =
              d.prototype.geq =
                d.prototype.greaterOrEquals),
            (d.prototype.lesserOrEquals = function (e) {
              return this.compare(e) <= 0;
            }),
            (l.prototype.leq =
              l.prototype.lesserOrEquals =
              u.prototype.leq =
              u.prototype.lesserOrEquals =
              d.prototype.leq =
                d.prototype.lesserOrEquals),
            (d.prototype.isEven = function () {
              return !(1 & this.value[0]);
            }),
            (u.prototype.isEven = function () {
              return !(1 & this.value);
            }),
            (l.prototype.isEven = function () {
              return (this.value & BigInt(1)) === BigInt(0);
            }),
            (d.prototype.isOdd = function () {
              return !(1 & ~this.value[0]);
            }),
            (u.prototype.isOdd = function () {
              return !(1 & ~this.value);
            }),
            (l.prototype.isOdd = function () {
              return (this.value & BigInt(1)) === BigInt(1);
            }),
            (d.prototype.isPositive = function () {
              return !this.sign;
            }),
            (u.prototype.isPositive = function () {
              return this.value > 0;
            }),
            (l.prototype.isPositive = u.prototype.isPositive),
            (d.prototype.isNegative = function () {
              return this.sign;
            }),
            (u.prototype.isNegative = function () {
              return this.value < 0;
            }),
            (l.prototype.isNegative = u.prototype.isNegative),
            (d.prototype.isUnit = function () {
              return !1;
            }),
            (u.prototype.isUnit = function () {
              return 1 === Math.abs(this.value);
            }),
            (l.prototype.isUnit = function () {
              return this.abs().value === BigInt(1);
            }),
            (d.prototype.isZero = function () {
              return !1;
            }),
            (u.prototype.isZero = function () {
              return 0 === this.value;
            }),
            (l.prototype.isZero = function () {
              return this.value === BigInt(0);
            }),
            (d.prototype.isDivisibleBy = function (e) {
              var t = Q(e);
              return (
                !t.isZero() &&
                (!!t.isUnit() ||
                  (0 === t.compareAbs(2)
                    ? this.isEven()
                    : this.mod(t).isZero()))
              );
            }),
            (l.prototype.isDivisibleBy = u.prototype.isDivisibleBy =
              d.prototype.isDivisibleBy),
            (d.prototype.isPrime = function (t) {
              var n = B(this);
              if (n !== e) return n;
              var s = this.abs(),
                i = s.bitLength();
              if (i <= 64)
                return D(s, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
              for (
                var o = Math.log(2) * i.toJSNumber(),
                  r = Math.ceil(!0 === t ? 2 * Math.pow(o, 2) : o),
                  c = [],
                  d = 0;
                d < r;
                d++
              )
                c.push(a(d + 2));
              return D(s, c);
            }),
            (l.prototype.isPrime = u.prototype.isPrime = d.prototype.isPrime),
            (d.prototype.isProbablePrime = function (t, n) {
              var s = B(this);
              if (s !== e) return s;
              for (
                var i = this.abs(), o = t === e ? 5 : t, r = [], c = 0;
                c < o;
                c++
              )
                r.push(a.randBetween(2, i.minus(2), n));
              return D(i, r);
            }),
            (l.prototype.isProbablePrime = u.prototype.isProbablePrime =
              d.prototype.isProbablePrime),
            (d.prototype.modInv = function (e) {
              for (
                var t, n, s, i = a.zero, o = a.one, r = Q(e), c = this.abs();
                !c.isZero();

              )
                (t = r.divide(c)),
                  (n = i),
                  (s = r),
                  (i = o),
                  (r = c),
                  (o = n.subtract(t.multiply(o))),
                  (c = s.subtract(t.multiply(c)));
              if (!r.isUnit())
                throw new Error(
                  this.toString() + " and " + e.toString() + " are not co-prime"
                );
              return (
                -1 === i.compare(0) && (i = i.add(e)),
                this.isNegative() ? i.negate() : i
              );
            }),
            (l.prototype.modInv = u.prototype.modInv = d.prototype.modInv),
            (d.prototype.next = function () {
              var e = this.value;
              return this.sign ? A(e, 1, this.sign) : new d(w(e, 1), this.sign);
            }),
            (u.prototype.next = function () {
              var e = this.value;
              return e + 1 < s ? new u(e + 1) : new d(i, !1);
            }),
            (l.prototype.next = function () {
              return new l(this.value + BigInt(1));
            }),
            (d.prototype.prev = function () {
              var e = this.value;
              return this.sign ? new d(w(e, 1), !0) : A(e, 1, this.sign);
            }),
            (u.prototype.prev = function () {
              var e = this.value;
              return e - 1 > -s ? new u(e - 1) : new d(i, !0);
            }),
            (l.prototype.prev = function () {
              return new l(this.value - BigInt(1));
            });
          for (var U = [1]; 2 * U[U.length - 1] <= t; )
            U.push(2 * U[U.length - 1]);
          var x = U.length,
            V = U[x - 1];
          function F(e) {
            return Math.abs(e) <= t;
          }
          function N(e, t, n) {
            t = Q(t);
            for (
              var s = e.isNegative(),
                i = t.isNegative(),
                o = s ? e.not() : e,
                r = i ? t.not() : t,
                c = 0,
                d = 0,
                u = null,
                l = null,
                p = [];
              !o.isZero() || !r.isZero();

            )
              (c = (u = E(o, V))[1].toJSNumber()),
                s && (c = V - 1 - c),
                (d = (l = E(r, V))[1].toJSNumber()),
                i && (d = V - 1 - d),
                (o = u[0]),
                (r = l[0]),
                p.push(n(c, d));
            for (
              var f = 0 !== n(s ? 1 : 0, i ? 1 : 0) ? a(-1) : a(0),
                g = p.length - 1;
              g >= 0;
              g -= 1
            )
              f = f.multiply(V).add(a(p[g]));
            return f;
          }
          (d.prototype.shiftLeft = function (e) {
            var t = Q(e).toJSNumber();
            if (!F(t))
              throw new Error(String(t) + " is too large for shifting.");
            if (t < 0) return this.shiftRight(-t);
            var n = this;
            if (n.isZero()) return n;
            for (; t >= x; ) (n = n.multiply(V)), (t -= x - 1);
            return n.multiply(U[t]);
          }),
            (l.prototype.shiftLeft = function (e) {
              return (e = Q(e)), new l(this.value << e.value);
            }),
            (u.prototype.shiftLeft = d.prototype.shiftLeft),
            (d.prototype.shiftRight = function (e) {
              var t,
                n = Q(e).toJSNumber();
              if (!F(n))
                throw new Error(String(n) + " is too large for shifting.");
              if (n < 0) return this.shiftLeft(-n);
              for (var s = this; n >= x; ) {
                if (s.isZero() || (s.isNegative() && s.isUnit())) return s;
                (s = (t = E(s, V))[1].isNegative() ? t[0].prev() : t[0]),
                  (n -= x - 1);
              }
              return (t = E(s, U[n]))[1].isNegative() ? t[0].prev() : t[0];
            }),
            (l.prototype.shiftRight = function (e) {
              return (e = Q(e)), new l(this.value >> e.value);
            }),
            (u.prototype.shiftRight = d.prototype.shiftRight),
            (d.prototype.not = function () {
              return this.negate().prev();
            }),
            (l.prototype.not = u.prototype.not = d.prototype.not),
            (d.prototype.and = function (e) {
              return N(this, e, function (e, t) {
                return e & t;
              });
            }),
            (l.prototype.and = u.prototype.and = d.prototype.and),
            (d.prototype.or = function (e) {
              return N(this, e, function (e, t) {
                return e | t;
              });
            }),
            (l.prototype.or = u.prototype.or = d.prototype.or),
            (d.prototype.xor = function (e) {
              return N(this, e, function (e, t) {
                return e ^ t;
              });
            }),
            (l.prototype.xor = u.prototype.xor = d.prototype.xor);
          var q = 1 << 30,
            O = ((t & -t) * (t & -t)) | q;
          function H(e) {
            var n = e.value,
              s =
                "number" == typeof n
                  ? n | q
                  : "bigint" == typeof n
                  ? n | BigInt(q)
                  : (n[0] + n[1] * t) | O;
            return s & -s;
          }
          function L(e, t) {
            if (t.compareTo(e) <= 0) {
              var n = L(e, t.square(t)),
                s = n.p,
                i = n.e,
                o = s.multiply(t);
              return o.compareTo(e) <= 0
                ? {
                    p: o,
                    e: 2 * i + 1,
                  }
                : {
                    p: s,
                    e: 2 * i,
                  };
            }
            return {
              p: a(1),
              e: 0,
            };
          }
          function G(e, t) {
            return (e = Q(e)), (t = Q(t)), e.greater(t) ? e : t;
          }
          function j(e, t) {
            return (e = Q(e)), (t = Q(t)), e.lesser(t) ? e : t;
          }
          function W(e, t) {
            if (((e = Q(e).abs()), (t = Q(t).abs()), e.equals(t))) return e;
            if (e.isZero()) return t;
            if (t.isZero()) return e;
            for (var n, s, a = c[1]; e.isEven() && t.isEven(); )
              (n = j(H(e), H(t))),
                (e = e.divide(n)),
                (t = t.divide(n)),
                (a = a.multiply(n));
            for (; e.isEven(); ) e = e.divide(H(e));
            do {
              for (; t.isEven(); ) t = t.divide(H(t));
              e.greater(t) && ((s = t), (t = e), (e = s)), (t = t.subtract(e));
            } while (!t.isZero());
            return a.isUnit() ? e : e.multiply(a);
          }
          (d.prototype.bitLength = function () {
            var e = this;
            return (
              e.compareTo(a(0)) < 0 && (e = e.negate().subtract(a(1))),
              0 === e.compareTo(a(0)) ? a(0) : a(L(e, a(2)).e).add(a(1))
            );
          }),
            (l.prototype.bitLength = u.prototype.bitLength =
              d.prototype.bitLength);
          var z = function (e, t, n, s) {
            (n = n || o),
              (e = String(e)),
              s || ((e = e.toLowerCase()), (n = n.toLowerCase()));
            var a,
              i = e.length,
              r = Math.abs(t),
              c = {};
            for (a = 0; a < n.length; a++) c[n[a]] = a;
            for (a = 0; a < i; a++)
              if ("-" !== (l = e[a]) && l in c && c[l] >= r) {
                if ("1" === l && 1 === r) continue;
                throw new Error(l + " is not a valid digit in base " + t + ".");
              }
            t = Q(t);
            var d = [],
              u = "-" === e[0];
            for (a = u ? 1 : 0; a < e.length; a++) {
              var l;
              if ((l = e[a]) in c) d.push(Q(c[l]));
              else {
                if ("<" !== l) throw new Error(l + " is not a valid character");
                var p = a;
                do {
                  a++;
                } while (">" !== e[a] && a < e.length);
                d.push(Q(e.slice(p + 1, a)));
              }
            }
            return K(d, t, u);
          };
          function K(e, t, n) {
            var s,
              a = c[0],
              i = c[1];
            for (s = e.length - 1; s >= 0; s--)
              (a = a.add(e[s].times(i))), (i = i.times(t));
            return n ? a.negate() : a;
          }
          function $(e, t) {
            if ((t = a(t)).isZero()) {
              if (e.isZero())
                return {
                  value: [0],
                  isNegative: !1,
                };
              throw new Error("Cannot convert nonzero numbers to base 0.");
            }
            if (t.equals(-1)) {
              if (e.isZero())
                return {
                  value: [0],
                  isNegative: !1,
                };
              if (e.isNegative())
                return {
                  value: [].concat.apply(
                    [],
                    Array.apply(null, Array(-e.toJSNumber())).map(
                      Array.prototype.valueOf,
                      [1, 0]
                    )
                  ),
                  isNegative: !1,
                };
              var n = Array.apply(null, Array(e.toJSNumber() - 1)).map(
                Array.prototype.valueOf,
                [0, 1]
              );
              return (
                n.unshift([1]),
                {
                  value: [].concat.apply([], n),
                  isNegative: !1,
                }
              );
            }
            var s = !1;
            if (
              (e.isNegative() && t.isPositive() && ((s = !0), (e = e.abs())),
              t.isUnit())
            )
              return e.isZero()
                ? {
                    value: [0],
                    isNegative: !1,
                  }
                : {
                    value: Array.apply(null, Array(e.toJSNumber())).map(
                      Number.prototype.valueOf,
                      1
                    ),
                    isNegative: s,
                  };
            for (
              var i, o = [], r = e;
              r.isNegative() || r.compareAbs(t) >= 0;

            ) {
              (i = r.divmod(t)), (r = i.quotient);
              var c = i.remainder;
              c.isNegative() && ((c = t.minus(c).abs()), (r = r.next())),
                o.push(c.toJSNumber());
            }
            return (
              o.push(r.toJSNumber()),
              {
                value: o.reverse(),
                isNegative: s,
              }
            );
          }
          function J(e, t, n) {
            var s = $(e, t);
            return (
              (s.isNegative ? "-" : "") +
              s.value
                .map(function (e) {
                  return (function (e, t) {
                    return e < (t = t || o).length ? t[e] : "<" + e + ">";
                  })(e, n);
                })
                .join("")
            );
          }
          function Z(e) {
            if (p(+e)) {
              var t = +e;
              if (t === y(t)) return r ? new l(BigInt(t)) : new u(t);
              throw new Error("Invalid integer: " + e);
            }
            var s = "-" === e[0];
            s && (e = e.slice(1));
            var a = e.split(/e/i);
            if (a.length > 2)
              throw new Error("Invalid integer: " + a.join("e"));
            if (2 === a.length) {
              var i = a[1];
              if (
                ("+" === i[0] && (i = i.slice(1)), (i = +i) !== y(i) || !p(i))
              )
                throw new Error(
                  "Invalid integer: " + i + " is not a valid exponent."
                );
              var o = a[0],
                c = o.indexOf(".");
              if (
                (c >= 0 &&
                  ((i -= o.length - c - 1),
                  (o = o.slice(0, c) + o.slice(c + 1))),
                i < 0)
              )
                throw new Error(
                  "Cannot include negative exponent part for integers"
                );
              e = o += new Array(i + 1).join("0");
            }
            if (!/^([0-9][0-9]*)$/.test(e))
              throw new Error("Invalid integer: " + e);
            if (r) return new l(BigInt(s ? "-" + e : e));
            for (var f = [], g = e.length, m = n, _ = g - m; g > 0; )
              f.push(+e.slice(_, g)), (_ -= m) < 0 && (_ = 0), (g -= m);
            return h(f), new d(f, s);
          }
          function Q(e) {
            return "number" == typeof e
              ? (function (e) {
                  if (r) return new l(BigInt(e));
                  if (p(e)) {
                    if (e !== y(e)) throw new Error(e + " is not an integer.");
                    return new u(e);
                  }
                  return Z(e.toString());
                })(e)
              : "string" == typeof e
              ? Z(e)
              : "bigint" == typeof e
              ? new l(e)
              : e;
          }
          (d.prototype.toArray = function (e) {
            return $(this, e);
          }),
            (u.prototype.toArray = function (e) {
              return $(this, e);
            }),
            (l.prototype.toArray = function (e) {
              return $(this, e);
            }),
            (d.prototype.toString = function (t, n) {
              if ((t === e && (t = 10), 10 !== t)) return J(this, t, n);
              for (
                var s, a = this.value, i = a.length, o = String(a[--i]);
                --i >= 0;

              )
                (s = String(a[i])), (o += "0000000".slice(s.length) + s);
              return (this.sign ? "-" : "") + o;
            }),
            (u.prototype.toString = function (t, n) {
              return (
                t === e && (t = 10),
                10 != t ? J(this, t, n) : String(this.value)
              );
            }),
            (l.prototype.toString = u.prototype.toString),
            (l.prototype.toJSON =
              d.prototype.toJSON =
              u.prototype.toJSON =
                function () {
                  return this.toString();
                }),
            (d.prototype.valueOf = function () {
              return parseInt(this.toString(), 10);
            }),
            (d.prototype.toJSNumber = d.prototype.valueOf),
            (u.prototype.valueOf = function () {
              return this.value;
            }),
            (u.prototype.toJSNumber = u.prototype.valueOf),
            (l.prototype.valueOf = l.prototype.toJSNumber =
              function () {
                return parseInt(this.toString(), 10);
              });
          for (var Y = 0; Y < 1e3; Y++) (c[Y] = Q(Y)), Y > 0 && (c[-Y] = Q(-Y));
          return (
            (c.one = c[1]),
            (c.zero = c[0]),
            (c.minusOne = c[-1]),
            (c.max = G),
            (c.min = j),
            (c.gcd = W),
            (c.lcm = function (e, t) {
              return (
                (e = Q(e).abs()),
                (t = Q(t).abs()),
                e.divide(W(e, t)).multiply(t)
              );
            }),
            (c.isInstance = function (e) {
              return e instanceof d || e instanceof u || e instanceof l;
            }),
            (c.randBetween = function (e, n, s) {
              (e = Q(e)), (n = Q(n));
              var a = s || Math.random,
                i = j(e, n),
                o = G(e, n).subtract(i).add(1);
              if (o.isSmall) return i.add(Math.floor(a() * o));
              for (
                var r = $(o, t).value, d = [], u = !0, l = 0;
                l < r.length;
                l++
              ) {
                var p = u ? r[l] : t,
                  f = y(a() * p);
                d.push(f), f < p && (u = !1);
              }
              return i.add(c.fromArray(d, t, !1));
            }),
            (c.fromArray = function (e, t, n) {
              return K(e.map(Q), Q(t || 10), n);
            }),
            c
          );
        })();
        e.hasOwnProperty("exports") && (e.exports = a),
          void 0 ===
            (s = function () {
              return a;
            }.call(t, n, t, e)) || (e.exports = s);
      },
    },
    s = {};
  function a(e) {
    var t = s[e];
    if (void 0 !== t) return t.exports;
    var i = (s[e] = {
      id: e,
      loaded: !1,
      exports: {},
    });
    return n[e].call(i.exports, i, i.exports, a), (i.loaded = !0), i.exports;
  }
  (a.m = n),
    (a.x = () => {
      var e = a.O(void 0, [7784, 8287, 8231], () => a(47654));
      return a.O(e);
    }),
    (e = []),
    (a.O = (t, n, s, i) => {
      if (!n) {
        var o = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, s, i] = e[u], r = !0, c = 0; c < n.length; c++)
            (!1 & i || o >= i) && Object.keys(a.O).every((e) => a.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((r = !1), i < o && (o = i));
          if (r) {
            e.splice(u--, 1);
            var d = s();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [n, s, i];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (
        a.d(t, {
          a: t,
        }),
        t
      );
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n],
          });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
    (a.u = (e) =>
      e +
      "." +
      {
        7784: "8e6530f10c472c1fb3d5",
        8231: "19c5ec0437ba386593b9",
        8287: "08fd21454791d4b9c852",
      }[e] +
      ".js"),
    (a.miniCssF = (e) => {}),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (a.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
          for (var s = n.length - 1; s > -1 && (!e || !/^http(s?):/.test(e)); )
            e = n[s--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e);
    })(),
    (() => {
      var e = {
        5174: 1,
      };
      a.f.i = (t, n) => {
        e[t] || importScripts(a.p + a.u(t));
      };
      var t = (self.webpackChunkSoroushPlus =
          self.webpackChunkSoroushPlus || []),
        n = t.push.bind(t);
      t.push = (t) => {
        var [s, i, o] = t;
        for (var r in i) a.o(i, r) && (a.m[r] = i[r]);
        for (o && o(a); s.length; ) e[s.pop()] = 1;
        n(t);
      };
    })(),
    (t = a.x),
    (a.x = () => Promise.all([7784, 8287, 8231].map(a.e, a)).then(t)),
    a.x();
})();
//# sourceMappingURL=5174.6f9f691bf8b5780e1072.js.map
