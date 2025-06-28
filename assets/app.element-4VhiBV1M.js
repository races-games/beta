var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _t2, _Ft_instances, e_fn, _Ut_instances, t_fn, e_fn2, s_fn, i_fn, o_fn, r_fn, _t3, _Qt_instances, t_fn2, _t4, _e, _s, _Zt_instances, i_fn2, _t5, _e2, _s2, _Jt_instances, i_fn3, _o, _t6, _e3, _s3, _i, _t7, _e4, _s4, _i2, _o2, _r, _t8, _e5, _s5, _ee_instances, i_fn4, o_fn2, _t9, _e6, _s6, _t10, _e7, _s7, _i3, _o3, _t11, _e8, _s8, _i4, _o4, _r2, _n, _a, _ne_instances, h_fn, c_fn, _t12, _e9, _s9, _i5, _o5, _r3, _n2, _ce_instances, a_fn, h_fn2, c_fn2, l_fn, d_fn, u_fn, _t13, _t14, _e10, _s10, _i6, _de_instances, o_fn3, r_fn2, n_fn, a_fn2;
import { E as Y, M as tt, V as et, G as st, a as K, R as it, A as ot, D as rt, P as nt, C as at, T as ht, b as l, c as M, d as ct, e as k, f as lt, g as dt, h as ut, i as $, j as pt, k as mt, u as w, l as gt, I as yt, m as ft, n as wt, S as bt, o as xt, p as Rt, q as vt, r as Pt, s as St, t as Wt, v as Tt } from "./index-DBqac-47.js";
class kt extends Y {
  constructor(t, e = {}) {
    const s = e.font;
    if (s === void 0) super();
    else {
      const r = s.generateShapes(t, e.size);
      e.depth === void 0 && (e.depth = 50), e.bevelThickness === void 0 && (e.bevelThickness = 10), e.bevelSize === void 0 && (e.bevelSize = 8), e.bevelEnabled === void 0 && (e.bevelEnabled = false), super(r, e);
    }
    this.type = "TextGeometry";
  }
}
const Mt = (n) => Promise.all(n);
class Ft extends Set {
  constructor() {
    super(...arguments);
    __privateAdd(this, _Ft_instances);
    __privateAdd(this, _t2, []);
  }
  get items() {
    return __privateGet(this, _t2);
  }
  add(t) {
    return super.add(t), __privateMethod(this, _Ft_instances, e_fn).call(this), this;
  }
  delete(t) {
    const e = super.delete(t);
    return __privateMethod(this, _Ft_instances, e_fn).call(this), e;
  }
  remove(t) {
    return super.delete(t), __privateMethod(this, _Ft_instances, e_fn).call(this), this;
  }
  clear() {
    super.clear(), __privateMethod(this, _Ft_instances, e_fn).call(this);
  }
}
_t2 = new WeakMap();
_Ft_instances = new WeakSet();
e_fn = function() {
  __privateSet(this, _t2, Array.from(this));
};
class F extends kt {
}
class Lt extends tt {
}
class W extends et {
  static fromCannon(t) {
    return new W().copy(t);
  }
}
function Ct(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function N(n, t, e) {
  return (1 - e) * n + e * t;
}
class Vt extends st {
}
class U extends K {
}
class _ extends it {
}
class It extends ot {
}
class At extends rt {
}
class Bt extends nt {
}
class Et extends at {
  constructor(t, e, s = {}) {
    super(t, e, s);
  }
}
const jt = (n) => {
  if (!n.geometry.index) throw "A geometria precisa de \xEDndices";
  const t = [...n.geometry.attributes.position.array];
  for (let s = 0; s < t.length; s += 3) t[s] *= n.scale.x, t[s + 1] *= n.scale.y, t[s + 2] *= n.scale.z;
  const e = [...n.geometry.index.array];
  return new ht(t, e);
}, L = new l(), C = new l(), V = new l();
function Ot(n, t, e, s, r) {
  if (r.lengthSquared() > 1.1) return 0;
  n.getVelocityAtWorldPoint(t, L), e.getVelocityAtWorldPoint(s, C), L.vsub(C, V);
  const o = r.dot(V), i = 1 / (n.invMass + e.invMass);
  return -0.2 * o * i;
}
const T = new l(), I = new l(), A = new l(), B = new l();
function E(n, t, e) {
  return t.vsub(n.position, T), T.cross(e, I), n.invInertiaWorld.vmult(I, B), B.cross(T, A), n.invMass + e.dot(A);
}
const j = new l(), O = new l(), D = new l();
function Dt(n, t, e, s, r) {
  let a = 0;
  const o = e;
  n.getVelocityAtWorldPoint(o, j), t.getVelocityAtWorldPoint(o, O), j.vsub(O, D);
  const i = s.dot(D), h = E(n, e, s), c = E(t, e, s), u = 1 / (h + c);
  return a = -i * u, r < a && (a = r), a < -r && (a = -r), a;
}
const G = { resolveSingleBilateral: Ot, determineRollingFriction: Dt }, Gt = new l(), qt = new l(), Ht = new l(), q = new l(), H = new l(), zt = [new l(1, 0, 0), new l(0, 1, 0), new l(0, 0, 1)], Kt = new l(), $t = [], b = [], Nt = 1;
class Ut {
  constructor(t) {
    __privateAdd(this, _Ut_instances);
    __publicField(this, "body");
    __publicField(this, "wheels");
    __publicField(this, "sliding");
    __publicField(this, "world");
    __publicField(this, "indexRightAxis");
    __publicField(this, "indexForwardAxis");
    __publicField(this, "indexUpAxis");
    __publicField(this, "constraints");
    __publicField(this, "currentVehicleSpeedKmHour");
    __publicField(this, "numWheelsOnGround");
    __publicField(this, "preStepCallback");
    this.body = t.body, this.indexRightAxis = t.indexRightAxis ?? 2, this.indexForwardAxis = t.indexForwardAxis ?? 0, this.indexUpAxis = t.indexUpAxis ?? 1, this.constraints = [], this.wheels = [], this.sliding = false, this.world = null, this.currentVehicleSpeedKmHour = 0, this.numWheelsOnGround = 0, this.preStepCallback = () => {
    };
  }
  addWheel(t) {
    const e = this.wheels.length;
    return this.wheels.push(t), e;
  }
  setSteering(t, e) {
    this.wheels[e].steering = t;
  }
  applyEngineForce(t, e) {
    this.wheels[e].engineForce = t;
  }
  setBrake(t, e) {
    this.wheels[e].brake = t;
  }
  addToWorld(t) {
    t.addBody(this.body), this.preStepCallback = () => {
      __privateMethod(this, _Ut_instances, e_fn2).call(this, t.dt);
    }, t.addEventListener("preStep", this.preStepCallback), this.world = t;
  }
  removeFromWorld(t) {
    t.removeBody(this.body), t.removeEventListener("preStep", this.preStepCallback), this.world = null;
  }
  updateWheelTransformWorld(t) {
    t.isInContact = false, this.body.pointToWorldFrame(t.connectionLocal, t.connectionWorld), this.body.vectorToWorldFrame(t.directionLocal, t.directionWorld), this.body.vectorToWorldFrame(t.axleLocal, t.axleWorld);
  }
  getWheelPosition(t) {
    return this.wheels[t].position;
  }
  getWheelQuaternion(t) {
    return this.wheels[t].quaternion;
  }
  updateWheelTransform(t) {
    const e = Gt, s = qt, r = Ht, a = this.wheels[t];
    this.updateWheelTransformWorld(a), a.directionLocal.scale(-1, e), s.copy(a.axleLocal), e.cross(s, r), r.normalize(), s.normalize();
    const o = new M();
    o.setFromAxisAngle(e, a.steering);
    const i = new M();
    i.setFromAxisAngle(s, a.rotation), this.body.quaternion.mult(o, a.worldTransform.quaternion), a.worldTransform.quaternion.mult(i, a.worldTransform.quaternion), a.worldTransform.quaternion.normalize(), a.worldTransform.position.copy(a.directionWorld), a.worldTransform.position.scale(a.suspensionLength, a.worldTransform.position), a.worldTransform.position.vadd(a.connectionWorld, a.worldTransform.position);
  }
}
_Ut_instances = new WeakSet();
t_fn = function(t, e) {
  e.set(t === 0 ? 1 : 0, t === 1 ? 1 : 0, t === 2 ? 1 : 0), this.body.vectorToWorldFrame(e, e);
};
e_fn2 = function(t) {
  for (let h = 0; h < this.wheels.length; h++) this.updateWheelTransform(h);
  this.currentVehicleSpeedKmHour = 3.6 * this.body.velocity.length();
  const e = new l();
  __privateMethod(this, _Ut_instances, t_fn).call(this, this.indexForwardAxis, e), e.dot(this.body.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1);
  for (let h = 0; h < this.wheels.length; h++) __privateMethod(this, _Ut_instances, r_fn).call(this, this.wheels[h]);
  __privateMethod(this, _Ut_instances, i_fn).call(this);
  const s = new l(), r = new l();
  for (let h = 0; h < this.wheels.length; h++) {
    let c = this.wheels[h].suspensionForce;
    c > this.wheels[h].maxSuspensionForce && (c = this.wheels[h].maxSuspensionForce), this.wheels[h].raycastResult.hitNormalWorld.scale(c * t, s), this.wheels[h].raycastResult.hitPointWorld.vsub(this.body.position, r), this.body.applyImpulse(s, r);
  }
  __privateMethod(this, _Ut_instances, s_fn).call(this, t);
  const a = new l(), o = new l(), i = new l();
  for (let h = 0; h < this.wheels.length; h++) {
    const c = this.wheels[h];
    c.connectionWorld.vsub(this.body.position, r), this.body.getVelocityAtWorldPoint(c.connectionWorld, i);
    let p = 1;
    switch (this.indexUpAxis) {
      case 1:
        p = -1;
        break;
    }
    if (c.isInContact) {
      __privateMethod(this, _Ut_instances, t_fn).call(this, this.indexForwardAxis, o);
      const u = o.dot(c.raycastResult.hitNormalWorld);
      c.raycastResult.hitNormalWorld.scale(u, a), o.vsub(a, o);
      const g = o.dot(i);
      c.deltaRotation = p * g * t / c.radius;
    }
    (c.sliding || !c.isInContact) && c.engineForce !== 0 && (c.deltaRotation = (c.engineForce > 0 ? 1 : -1) * c.customSlidingRotationalSpeed * t), Math.abs(c.brake) > Math.abs(c.engineForce) && (c.deltaRotation = 0), c.rotation += c.deltaRotation, c.deltaRotation *= 0.99;
  }
};
s_fn = function(t) {
  const e = Kt, s = $t;
  this.numWheelsOnGround = 0;
  for (let o = 0; o < this.wheels.length; o++) this.wheels[o].raycastResult.body && this.numWheelsOnGround++, this.wheels[o].sideImpulse = 0, this.wheels[o].forwardImpulse = 0, b[o] || (b[o] = new l()), s[o] || (s[o] = new l());
  for (let o = 0; o < this.wheels.length; o++) {
    const i = this.wheels[o].raycastResult.body;
    if (i) {
      const h = s[o];
      __privateMethod(this, _Ut_instances, o_fn).call(this, o).vectorToWorldFrame(zt[this.indexRightAxis], h);
      const p = this.wheels[o].raycastResult.hitNormalWorld, u = h.dot(p);
      p.scale(u, e), h.vsub(e, h), h.normalize(), p.cross(h, b[o]), b[o].normalize(), this.wheels[o].sideImpulse = G.resolveSingleBilateral(this.body, this.wheels[o].raycastResult.hitPointWorld, i, this.wheels[o].raycastResult.hitPointWorld, h), this.wheels[o].sideImpulse *= Nt;
    }
  }
  const r = 1, a = 0.5;
  this.sliding = false;
  for (let o = 0; o < this.wheels.length; o++) {
    const i = this.wheels[o];
    let h = 0;
    if (i.slipInfo = 1, i.raycastResult.body) {
      const p = i.brake ? i.brake : 0;
      h = G.determineRollingFriction(this.body, i.raycastResult.body, i.raycastResult.hitPointWorld, b[o], p), h += i.engineForce * t;
      const u = p / h;
      i.slipInfo *= u;
    }
    if (i.forwardImpulse = 0, i.skidInfo = 1, i.raycastResult.body) {
      i.skidInfo = 1;
      const c = i.suspensionForce * t * i.frictionSlip, u = c * c;
      i.forwardImpulse = h;
      const g = i.forwardImpulse * a / i.forwardAcceleration, y = i.sideImpulse * r / i.sideAcceleration, d = g * g + y * y;
      if (i.sliding = false, d > u) {
        this.sliding = true, i.sliding = true;
        const m = c / Math.sqrt(d);
        i.skidInfo *= m;
      }
    }
  }
  if (this.sliding) for (let o = 0; o < this.wheels.length; o++) {
    const i = this.wheels[o];
    i.sideImpulse !== 0 && i.skidInfo < 1 && (i.forwardImpulse *= i.skidInfo, i.sideImpulse *= i.skidInfo);
  }
  for (let o = 0; o < this.wheels.length; o++) {
    const i = this.wheels[o], h = new l();
    if (i.raycastResult.hitPointWorld.vsub(this.body.position, h), i.forwardImpulse !== 0) {
      const c = new l();
      b[o].scale(i.forwardImpulse, c), this.body.applyImpulse(c, h);
    }
    if (i.sideImpulse !== 0) {
      const c = i.raycastResult.body;
      if (c) {
        const p = new l();
        i.raycastResult.hitPointWorld.vsub(c.position, p);
        const u = new l();
        s[o].scale(i.sideImpulse, u), this.body.vectorToLocalFrame(h, h), h["xyz"[this.indexUpAxis]] *= i.rollInfluence, this.body.vectorToWorldFrame(h, h), this.body.applyImpulse(u, h), u.scale(-1, u), c.applyImpulse(u, p);
      }
    }
  }
};
i_fn = function() {
  for (let t = 0; t < this.wheels.length; t++) {
    const e = this.wheels[t];
    if (e.isInContact) {
      let s;
      const r = e.suspensionRestLength - e.suspensionLength;
      s = e.suspensionStiffness * r * e.clippedInvContactDotSuspension;
      const a = e.suspensionRelativeVelocity;
      let o;
      a < 0 ? o = e.dampingCompression : o = e.dampingRelaxation, s -= o * a, e.suspensionForce = s * this.body.mass, e.suspensionForce < 0 && (e.suspensionForce = 0);
    } else e.suspensionForce = 0;
  }
};
o_fn = function(t) {
  return this.wheels[t].worldTransform;
};
r_fn = function(t) {
  this.updateWheelTransformWorld(t);
  let e = -1;
  const s = t.suspensionRestLength + t.radius;
  t.directionWorld.scale(s, q);
  const r = t.connectionWorld;
  r.vadd(q, H);
  const a = t.raycastResult;
  a.reset();
  const o = this.body.collisionResponse;
  if (this.body.collisionResponse = false, this.world && this.world.rayTest(r, H, a), this.body.collisionResponse = o, t.raycastResult.groundObject = 0, a.body) {
    e = a.distance, t.raycastResult.hitNormalWorld = a.hitNormalWorld, t.isInContact = true;
    const i = a.distance;
    t.suspensionLength = i - t.radius;
    const h = t.suspensionRestLength - t.maxSuspensionTravel, c = t.suspensionRestLength + t.maxSuspensionTravel;
    t.suspensionLength < h && (t.suspensionLength = h), t.suspensionLength > c && (t.suspensionLength = c, t.raycastResult.reset());
    const p = t.raycastResult.hitNormalWorld.dot(t.directionWorld), u = new l();
    this.body.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld, u);
    const g = t.raycastResult.hitNormalWorld.dot(u);
    if (p >= -0.1) t.suspensionRelativeVelocity = 0, t.clippedInvContactDotSuspension = 1 / 0.1;
    else {
      const y = -1 / p;
      t.suspensionRelativeVelocity = g * y, t.clippedInvContactDotSuspension = y;
    }
  } else t.suspensionLength = t.suspensionRestLength + 0 * t.maxSuspensionTravel, t.suspensionRelativeVelocity = 0, t.directionWorld.scale(-1, t.raycastResult.hitNormalWorld), t.clippedInvContactDotSuspension = 1;
  return e;
};
class _t extends U {
  constructor(t, e, s, r = 0) {
    const a = { font: e, size: s, depth: r, bevelEnabled: !!r };
    super(new F("", a), new Lt({ color: t }));
    __privateAdd(this, _t3);
    __privateSet(this, _t3, a);
  }
  setText(t) {
    this.geometry.dispose(), this.geometry = new F(String(t), __privateGet(this, _t3));
  }
  getCenterOfMass() {
    this.geometry.computeBoundingBox();
    const t = this.geometry.boundingBox;
    if (!t) throw "GraphicTextMesh bounding box error";
    return t.getCenter(new W());
  }
}
_t3 = new WeakMap();
class Qt {
  constructor() {
    __privateAdd(this, _Qt_instances);
    __publicField(this, "sun");
    __publicField(this, "ambient");
    __publicField(this, "poles");
    __publicField(this, "tunnel");
    this.sun = new At(16770244, 4), this.sun.position.set(-20, 10, -40), this.sun.castShadow = true, this.sun.shadow.mapSize.set(2048, 2048), this.sun.shadow.bias = -1e-4, this.sun.shadow.camera.left = -150, this.sun.shadow.camera.right = 150, this.sun.shadow.camera.top = 150, this.sun.shadow.camera.bottom = -150, this.ambient = new It(11583173, 3), this.poles = [], this.tunnel = [], this.tunnel.push(__privateMethod(this, _Qt_instances, t_fn2).call(this, 594.438, 505.998, -9.62166), __privateMethod(this, _Qt_instances, t_fn2).call(this, 554.285, 359.46, -9.72915), __privateMethod(this, _Qt_instances, t_fn2).call(this, 485.645, 236.015, -9.72866), __privateMethod(this, _Qt_instances, t_fn2).call(this, 379.198, 166.914, -9.96135));
  }
}
_Qt_instances = new WeakSet();
t_fn2 = function(t, e, s) {
  const r = new Bt(16773344, 50, 0);
  return r.add(new ct(20)), r.position.set(t, e, s), r;
};
class Zt extends k {
  constructor(t) {
    super(t);
    __privateAdd(this, _Zt_instances);
    __privateAdd(this, _t4);
    __privateAdd(this, _e);
    __privateAdd(this, _s);
    __publicField(this, "cooldownMs", 400);
    __publicField(this, "lastBarrierImpulseTime", 0);
    __publicField(this, "maxDistance", 10);
    __privateSet(this, _e, t), __privateSet(this, _s, new W(-1, 0, 0)), __privateSet(this, _t4, new _()), __privateGet(this, _t4).far = 0.5;
  }
  update(t) {
    const e = performance.now(), s = __privateMethod(this, _Zt_instances, i_fn2).call(this, t.object);
    if (s.length && s[0].distance < this.maxDistance && e - this.lastBarrierImpulseTime > this.cooldownMs) {
      t.sound.crash.play();
      const r = t.direction.clone().negate().scale(t.speed * 100);
      t.chassis.body.applyImpulse(r), t.chassis.body.velocity.x = t.chassis.body.velocity.x * 0.2, this.lastBarrierImpulseTime = e;
    }
  }
}
_t4 = new WeakMap();
_e = new WeakMap();
_s = new WeakMap();
_Zt_instances = new WeakSet();
i_fn2 = function(t) {
  const e = __privateGet(this, _s).applyQuaternion(t.quaternion).normalize();
  return __privateGet(this, _t4).set(t.position, e), __privateGet(this, _t4).intersectObject(__privateGet(this, _e), false);
};
class Jt extends lt {
  constructor(t) {
    super();
    __privateAdd(this, _Jt_instances);
    __privateAdd(this, _t5);
    __publicField(this, "checkpoints");
    __privateAdd(this, _e2);
    __privateAdd(this, _s2);
    __privateAdd(this, _o, (t) => !!t.userData.shape && typeof t.userData.order == "number");
    __privateSet(this, _s2, []), __privateSet(this, _t5, /* @__PURE__ */ new Map()), this.checkpoints = t.children.filter(__privateGet(this, _o)).map(__privateMethod(this, _Jt_instances, i_fn3)), __privateSet(this, _e2, this.checkpoints.length);
  }
  get positions() {
    return __privateGet(this, _s2);
  }
  add(t) {
    __privateGet(this, _t5).set(t, { vehicleID: t, lastCheckpoint: -1, bestLapTime: 1 / 0, checkpointHistory: /* @__PURE__ */ new Set(), lapTimes: [], lapStartTime: performance.now(), currentLap: 0 });
  }
  remove(t) {
    __privateGet(this, _t5).delete(t);
  }
  getState(t) {
    const e = __privateGet(this, _t5).get(t);
    if (!e) throw `Vehicle ${t} not found`;
    return e;
  }
  refresh() {
    const e = Array.from(__privateGet(this, _t5).values()).sort((s, r) => s.currentLap !== r.currentLap ? r.currentLap - s.currentLap : r.checkpointHistory.size - s.checkpointHistory.size);
    __privateSet(this, _s2, e.map((s) => s.vehicleID));
  }
  update(t) {
    const e = __privateGet(this, _t5).get(t.id);
    if (!e) return;
    const s = (e.lastCheckpoint + 1) % __privateGet(this, _e2);
    if (e.checkpointHistory.has(s)) return;
    const r = this.checkpoints[s];
    if (t.object.position.distanceTo(r.position) < r.radius && (e.checkpointHistory.add(s), e.lastCheckpoint = s, e.checkpointHistory.size === __privateGet(this, _e2))) {
      const o = performance.now(), i = o - e.lapStartTime;
      e.lapTimes.push(i), i < e.bestLapTime && (e.bestLapTime = i), e.currentLap += 1, e.lapStartTime = o, e.checkpointHistory.clear(), this.emit("lap", e);
    }
  }
}
_t5 = new WeakMap();
_e2 = new WeakMap();
_s2 = new WeakMap();
_Jt_instances = new WeakSet();
i_fn3 = function(t) {
  const { radius: e } = dt(t.geometry);
  return { position: t.position, order: t.userData.order, radius: e };
};
_o = new WeakMap();
class Xt {
  constructor(t) {
    __privateAdd(this, _t6);
    __privateAdd(this, _e3, ({ position: t, quaternion: e }) => ({ position: t.toArray(), quaternion: e.toArray() }));
    __privateAdd(this, _s3, (t, e) => t.userData.index - e.userData.index ? 1 : -1);
    __privateAdd(this, _i, (t) => t.userData.key === "START" && typeof t.userData.index == "number");
    __privateSet(this, _t6, t.children.filter(__privateGet(this, _i)).sort(__privateGet(this, _s3)).map(__privateGet(this, _e3)));
  }
  get starts() {
    return __privateGet(this, _t6);
  }
  apply(t) {
    t.forEach((e) => {
      const s = this.starts.shift();
      if (s) {
        const { position: r, quaternion: a } = s;
        e.reset(r, a);
      }
    });
  }
}
_t6 = new WeakMap();
_e3 = new WeakMap();
_s3 = new WeakMap();
_i = new WeakMap();
class Yt extends k {
  constructor(t, e) {
    super(t);
    __privateAdd(this, _t7, 0);
    __privateAdd(this, _e4);
    __privateAdd(this, _s4);
    __privateAdd(this, _i2);
    __privateAdd(this, _o2);
    __privateAdd(this, _r);
    this.object = t, __privateSet(this, _e4, e.rotationRange), __privateSet(this, _s4, e.speedFactor ?? 0), __privateSet(this, _i2, e.autoCenter ?? false), __privateSet(this, _r, e.progressive ?? false), __privateSet(this, _o2, e.autoCenterFactor ?? 0);
  }
  get steering() {
    return __privateGet(this, _t7);
  }
  handleSteering(t, e) {
    const s = t * __privateGet(this, _e4);
    if (__privateGet(this, _r) || !__privateGet(this, _s4)) __privateSet(this, _t7, t);
    else if (__privateGet(this, _i2)) {
      const r = e * (t ? __privateGet(this, _s4) : __privateGet(this, _o2));
      __privateSet(this, _t7, N(__privateGet(this, _t7), s, r));
    }
    this.object.rotation.z = -this.steering * 4;
  }
}
_t7 = new WeakMap();
_e4 = new WeakMap();
_s4 = new WeakMap();
_i2 = new WeakMap();
_o2 = new WeakMap();
_r = new WeakMap();
class te {
  constructor(t, e, s) {
    __publicField(this, "maxRPM");
    __publicField(this, "maxSpeed");
    __publicField(this, "speedThreshold");
    __publicField(this, "turboThreshold");
    __publicField(this, "refKerbSpeed");
    __publicField(this, "engine");
    __publicField(this, "kerbs");
    __publicField(this, "skids");
    __publicField(this, "work");
    __publicField(this, "turbo");
    __publicField(this, "wind");
    __publicField(this, "crash");
    __publicField(this, "traction");
    this.maxRPM = e, this.maxSpeed = s, this.speedThreshold = 60, this.turboThreshold = 80, this.refKerbSpeed = 16.67, t.engine.setLoop(true), t.engine.setRefDistance(20), t.engine.setVolume(0.4), this.engine = t.engine, this.work = t.work, this.turbo = t.turbo, this.wind = t.wind, this.crash = t.crash, this.traction = t.traction;
    const r = t.kerb, a = r.clone();
    this.kerbs = [r, a];
    const o = t.skid;
    o.setPlaybackRate(0.8);
    const i = o.clone();
    this.skids = [o, i], this.work.setRefDistance(4), this.work.setVolume(0.08), this.work.setLoop(true), this.traction.setRefDistance(4), this.traction.setVolume(0.1), this.traction.setLoop(true), this.crash.setRefDistance(10), this.crash.setVolume(0.4);
  }
  start() {
    this.engine.play(), this.work.play(), this.traction.play();
  }
  stop() {
    this.engine.stop(), this.work.stop(), this.traction.stop();
  }
  mute() {
    this.engine.setVolume(0), this.traction.setVolume(0), this.work.setVolume(0);
  }
  handleKerb(t, e, s) {
    if (s) {
      const r = Ct(t / this.refKerbSpeed, 0.5, 1.3);
      this.kerbs[e].setPlaybackRate(r), this.kerbs[e].setVolume(t > 40 ? 0.3 : 0);
    } else this.kerbs[e].getVolume() && this.kerbs[e].setVolume(0);
  }
  handleTurbo(t) {
    t > this.turboThreshold ? this.turbo.isPlaying || (this.turbo.setVolume(1), this.turbo.play()) : this.turbo.isPlaying && this.turbo.setVolume(0);
  }
  handleWind(t) {
    if (t > this.speedThreshold) {
      this.wind.isPlaying || this.wind.play();
      const e = Math.min(t / this.maxSpeed, 1);
      this.wind.setVolume(0.1 + e * 0.9), this.wind.setPlaybackRate(0.7 + e * 0.6);
    } else this.wind.isPlaying && this.wind.setVolume(0);
  }
  handleEngine(t) {
    const e = Math.min(t / this.maxRPM, 1);
    this.engine.setPlaybackRate(0.6 + e), this.engine.setVolume(Math.min(0.4 + e * 0.4, 1));
  }
  update(t, e) {
    this.handleEngine(t), this.handleWind(e), this.handleTurbo(e);
  }
}
class ee extends Yt {
  constructor(t, e, s, r) {
    super(t, r);
    __privateAdd(this, _ee_instances);
    __publicField(this, "battery");
    __publicField(this, "textGear");
    __publicField(this, "textLAP");
    __publicField(this, "textPOS");
    __publicField(this, "textBEST");
    __publicField(this, "textKPH");
    __publicField(this, "textRPM");
    __privateAdd(this, _t8, []);
    __privateAdd(this, _e5, []);
    __privateAdd(this, _s5);
    __privateSet(this, _s5, r.maxRPM), this.battery = e;
    const a = this.object.getObjectByName("SteeringWheelTextGEAR");
    this.textGear = __privateMethod(this, _ee_instances, o_fn2).call(this, s, 0.01, 16777215, 0, a), this.object.add(this.textGear);
    const o = this.object.getObjectByName("SteeringWheelTextLAP");
    this.textLAP = __privateMethod(this, _ee_instances, o_fn2).call(this, s, 6e-3, 6155007, 0, o), this.object.add(this.textLAP);
    const i = this.object.getObjectByName("SteeringWheelTextPOS");
    this.textPOS = __privateMethod(this, _ee_instances, o_fn2).call(this, s, 6e-3, 6155007, 0, i), this.object.add(this.textPOS);
    const h = this.object.getObjectByName("SteeringWheelTextBEST");
    this.textBEST = __privateMethod(this, _ee_instances, o_fn2).call(this, s, 4e-3, 16777215, 0, h), this.textBEST.position.x += 8e-3, this.object.add(this.textBEST);
    const c = this.object.getObjectByName("SteeringWheelTextKPH");
    this.textKPH = __privateMethod(this, _ee_instances, o_fn2).call(this, s, 6e-3, 16777215, 0, c), this.textKPH.position.x += 2e-3, this.object.add(this.textKPH);
    const p = this.object.getObjectByName("SteeringWheelTextRPM");
    this.textRPM = __privateMethod(this, _ee_instances, o_fn2).call(this, s, 5e-3, 16777215, 0, p), this.textRPM.position.x += 2e-3, this.object.add(this.textRPM);
    const u = this.getPart("SteeringWheelLedGreen");
    {
      const [d, m] = __privateMethod(this, _ee_instances, i_fn4).call(this, u, 6);
      d.forEach((f) => {
        f.material.transparent = true, f.material.opacity = 0.2;
      }), m.forEach((f) => {
        f.material.emissiveIntensity = 0.1, f.material.transparent = true, f.material.opacity = 0.2;
      });
    }
    const g = this.getPart("SteeringWheelLedRed"), y = this.getPart("SteeringWheelLedBlue");
    {
      const [d, m] = __privateMethod(this, _ee_instances, i_fn4).call(this, g, 6);
      __privateGet(this, _e5).push([m[0].material, d[0].material]), __privateGet(this, _e5).push([m[1].material, d[1].material]), __privateGet(this, _e5).push([m[2].material, d[2].material]), __privateGet(this, _e5).push([m[3].material, d[3].material]), __privateGet(this, _e5).push([m[4].material, d[4].material]), __privateGet(this, _e5).push([m[5].material, d[5].material]);
    }
    {
      const [d, m] = __privateMethod(this, _ee_instances, i_fn4).call(this, y, 5);
      __privateGet(this, _t8).push([m[0].material, d[0].material]), __privateGet(this, _t8).push([m[1].material, d[1].material]), __privateGet(this, _t8).push([m[2].material, d[2].material]), __privateGet(this, _t8).push([m[3].material, d[3].material]), __privateGet(this, _t8).push([m[4].material, d[4].material]);
    }
    __privateGet(this, _t8).forEach(([d, m]) => {
      d.transparent = true, d.opacity = 0, m.emissiveIntensity = 0;
    }), __privateGet(this, _e5).forEach(([d, m]) => {
      d.transparent = true, d.opacity = 0, m.emissiveIntensity = 0;
    });
  }
  update(t, e, s) {
    this.handleSteering(t, e), this.battery.update(s, e), this.updateRpmLights(s);
  }
  updateRpmLights(t) {
    const e = Math.min(1, Math.max(0, t / __privateGet(this, _s5)));
    let s = 0;
    e < 0.5 ? s = Math.floor(Math.pow(e * 2, 3) * 3) : e < 0.8 ? s = 3 + Math.floor((e - 0.5) / 0.3 * 3) : s = 6 + Math.floor((e - 0.8) / 0.2 * 3), s = Math.min(9, s), this.updateLightGroup(__privateGet(this, _e5), s < 2 ? 0 : s + 1);
    const r = s - 5 ? 0 : 4;
    this.updateLightGroup(__privateGet(this, _t8), Math.max(0, r));
  }
  updateLightGroup(t, e) {
    for (let s = 0, r = t.length; s < r; s++) {
      const a = s < e;
      t[s][0].opacity = a ? 1 : 0, t[s][0].needsUpdate = true, t[s][1].emissiveIntensity = a ? 10 : 0, t[s][1].needsUpdate = true;
    }
  }
}
_t8 = new WeakMap();
_e5 = new WeakMap();
_s5 = new WeakMap();
_ee_instances = new WeakSet();
i_fn4 = function(t, e) {
  const s = t.children.slice(0, e), r = t.children.slice(e);
  return [s, r];
};
o_fn2 = function(t, e, s, r, a) {
  const o = new _t(s, t, e, 0);
  o.rotation.y = -Math.PI, o.setText(r), a && (o.position.copy(a.position), a.removeFromParent());
  const i = o.getCenterOfMass();
  return o.position.x += i.x, o.position.y -= i.y, o.position.z += i.z, o;
};
const se = 0.2;
class ie {
  constructor(t = 12, e = 100) {
    __privateAdd(this, _t9);
    __privateAdd(this, _e6);
    __privateAdd(this, _s6);
    __privateSet(this, _t9, e), __privateSet(this, _s6, false), __privateSet(this, _e6, t);
  }
  get level() {
    return __privateGet(this, _t9);
  }
  get volts() {
    return __privateGet(this, _e6);
  }
  get voltage() {
    return __privateGet(this, _e6) * (__privateGet(this, _t9) / 100);
  }
  update(t, e) {
    __privateSet(this, _s6, t > 1e4), __privateGet(this, _s6) ? __privateSet(this, _t9, __privateGet(this, _t9) + 0.05 * e) : __privateSet(this, _t9, __privateGet(this, _t9) - se * e), __privateSet(this, _t9, Math.max(0, Math.min(100, __privateGet(this, _t9))));
  }
}
_t9 = new WeakMap();
_e6 = new WeakMap();
_s6 = new WeakMap();
class oe extends Ut {
  constructor(t) {
    super({ indexForwardAxis: 2, indexRightAxis: 0, indexUpAxis: 1, body: t });
    __publicField(this, "wheels");
    this.wheels = [];
  }
  get speed() {
    return this.currentVehicleSpeedKmHour;
  }
  get inertia() {
    return this.body.inertia.length();
  }
  get position() {
    return this.body.position;
  }
  get quaternion() {
    return this.body.quaternion;
  }
}
class re {
  constructor(t) {
    __privateAdd(this, _t10, 0);
    __privateAdd(this, _e7, 0);
    __privateAdd(this, _s7);
    __privateAdd(this, _i3);
    __privateAdd(this, _o3);
    __privateSet(this, _i3, t.powerCurve.slice().sort((e, s) => e[0] - s[0])), console.log(__privateGet(this, _i3)), __privateSet(this, _o3, t), __privateSet(this, _s7, 1);
  }
  get rpm() {
    return __privateGet(this, _e7);
  }
  get power() {
    return __privateGet(this, _t10);
  }
  get clutch() {
    return __privateGet(this, _s7);
  }
  set clutch(t) {
    __privateSet(this, _s7, Math.min(1, Math.max(0, t)));
  }
  reset() {
    __privateSet(this, _t10, 0), __privateSet(this, _e7, 0);
  }
  update(t, e) {
    const s = __privateGet(this, _e7) + (e * t * 6 - __privateGet(this, _e7)) * __privateGet(this, _s7);
    __privateSet(this, _e7, Math.abs(s)), __privateSet(this, _t10, __privateGet(this, _o3).power * e);
  }
}
_t10 = new WeakMap();
_e7 = new WeakMap();
_s7 = new WeakMap();
_i3 = new WeakMap();
_o3 = new WeakMap();
class ne {
  constructor(t) {
    __privateAdd(this, _ne_instances);
    __privateAdd(this, _t11);
    __privateAdd(this, _e8);
    __privateAdd(this, _s8);
    __privateAdd(this, _i4);
    __privateAdd(this, _o4);
    __privateAdd(this, _r2);
    __privateAdd(this, _n);
    __privateAdd(this, _a);
    __publicField(this, "shift$");
    __privateSet(this, _n, Object.freeze(t)), __privateSet(this, _t11, t.autoShift), __privateSet(this, _r2, t.gears.length), __privateSet(this, _o4, t.maxRPM), __privateSet(this, _e8, t.gears), __privateSet(this, _s8, 0), __privateSet(this, _i4, 0), __privateSet(this, _a, new ut()), this.shift$ = __privateGet(this, _a).asObserver();
  }
  get autoShift() {
    return __privateGet(this, _t11);
  }
  get gear() {
    return __privateGet(this, _s8);
  }
  get ratio() {
    return __privateGet(this, _e8)[__privateGet(this, _s8)];
  }
  get torque() {
    return __privateGet(this, _i4);
  }
  reset() {
    __privateSet(this, _t11, __privateGet(this, _n).autoShift), __privateSet(this, _r2, __privateGet(this, _n).gears.length - 1), __privateSet(this, _e8, __privateGet(this, _n).gears), __privateSet(this, _s8, 0), __privateSet(this, _i4, 0);
  }
  update(t) {
    if ((!isFinite(t) || t < 0) && (t = 0), this.autoShift) {
      const e = __privateMethod(this, _ne_instances, c_fn).call(this, t);
      e && (this.shift(e), __privateGet(this, _a).emit(e));
    }
  }
  shift(t) {
    const e = __privateGet(this, _s8) + t;
    __privateMethod(this, _ne_instances, h_fn).call(this, e) && __privateSet(this, _s8, e);
  }
}
_t11 = new WeakMap();
_e8 = new WeakMap();
_s8 = new WeakMap();
_i4 = new WeakMap();
_o4 = new WeakMap();
_r2 = new WeakMap();
_n = new WeakMap();
_a = new WeakMap();
_ne_instances = new WeakSet();
h_fn = function(t) {
  return t >= 0 && t < __privateGet(this, _r2);
};
c_fn = function(t) {
  if (t < 0) return 0;
  const e = t / __privateGet(this, _o4);
  return e > 0.86 && __privateGet(this, _s8) < __privateGet(this, _r2) ? 1 : e < 0.63 && __privateGet(this, _s8) > 0 ? -1 : 0;
};
const ae = [[0, 0], [580, 13.0060215396118], [1e3, 23.5604323757565], [1160, 28.2864869839221], [1305, 32.8895788321188], [1500, 39.6382842845279], [1740, 47.4250708425936], [2e3, 56.8299322742528], [2175, 64.181389983154], [2320, 70.8494504360881], [2500, 79.9695002227479], [2610, 86.1907006817735], [2755, 95.0981930735709], [2900, 104.900235195471], [3e3, 112.236978173889], [3200, 129.171738252815], [3335, 142.032348446473], [3625, 172.80910317321], [4060, 223.661024547093], [4785, 323.062319717673], [5e3, 357.335514583025], [5220, 387.224662284407], [5365, 408.903821321368], [5500, 430.661883643152], [5800, 472.827428482247], [6e3, 504.210793456098], [6380, 551.304693200133], [6500, 567.432736626172], [7e3, 626.304801670147], [7500, 679.98807038473], [8500, 775.723232925738], [9e3, 815.985684461676], [9750, 872.35311661199], [1e4, 888.756337608112], [10250, 898.74739039666], [10295, 899.045493587832], [10440, 899.789132120489], [10500, 900], [10585, 899.343018192663], [10730, 897.927873546078], [10750, 897.703549060544], [10875, 895.168505815687], [11e3, 892.335222189084], [11165, 885.940918580376], [11310, 879.83906949001], [11500, 871.160155084998], [11890, 839.853146436028], [12325, 800.224425887265], [12500, 782.881002087683], [13500, 660.304205189383], [14e3, 576.200417536534], [14500, 510.289293170296]], he = [[0, 151.688043969153], [290, 155.367449656772], [435, 157.4177474891], [580, 159.672239128674], [725, 162.175078377098], [870, 164.970572230684], [1e3, 167.763004918538], [1160, 173.633678064081], [1305, 179.457139401983], [1500, 188.163996747652], [1595, 190.322674727229], [1740, 194.075931911226], [1885, 198.424823106667], [2e3, 202.329907524448], [2030, 203.586805207898], [2175, 210.117776965366], [2320, 217.451016010386], [2500, 227.770415164482], [2610, 235.143427441804], [2755, 245.789656233683], [2900, 257.567702587172], [3e3, 266.39597017474], [3200, 287.428921801932], [3335, 303.252486096619], [3500, 324.533735032506], [3625, 339.446664595429], [3770, 358.193858639006], [4060, 392.262883624218], [4500, 449.131021987678], [4640, 463.897935242766], [4785, 480.747799735099], [4930, 499.291539763727], [5e3, 508.884376436538], [5075, 515.125559102838], [5220, 528.208574470989], [5365, 542.705700148419], [5500, 557.553679611329], [5655, 568.840072009616], [5800, 580.480464354719], [6e3, 598.375533984936], [6090, 601.98307606494], [6235, 608.308185507502], [6380, 615.295800678374], [6500, 621.604244499287], [6670, 626.423998253295], [6815, 630.889186290787], [7e3, 637.089784670445], [7500, 645.584315132717], [8500, 649.831580363853], [9e3, 645.584315132717], [9500, 639.213417286012], [9750, 637.089784670445], [1e4, 632.842519439309], [10250, 624.347988977036], [10500, 610.332013714286], [10750, 594.617132359082], [11e3, 577.628071434536], [11500, 539.40268435431], [12500, 445.962849269311], [13e3, 394.995666495676], [13500, 348.275748953176], [14e3, 293.061300948405], [14500, 250.588648637041]];
class ce extends $ {
  constructor(t, e, s, r) {
    super(t);
    __privateAdd(this, _ce_instances);
    __publicField(this, "id");
    __publicField(this, "steeringWheel");
    __publicField(this, "cameras");
    __publicField(this, "helmet");
    __publicField(this, "chassis");
    __publicField(this, "transmission");
    __publicField(this, "engine");
    __publicField(this, "sound");
    __publicField(this, "input");
    __privateAdd(this, _t12);
    __privateAdd(this, _e9);
    __privateAdd(this, _s9, new l());
    __publicField(this, "options");
    __publicField(this, "headRotation");
    __publicField(this, "maxRPM");
    __publicField(this, "resetRequested");
    __privateAdd(this, _i5);
    __privateAdd(this, _o5);
    __privateAdd(this, _r3);
    __privateAdd(this, _n2);
    __publicField(this, "lastGroundTime");
    __publicField(this, "lastCallTime", 0);
    this.id = crypto.randomUUID(), __privateSet(this, _i5, new l(0, 0, -1)), __privateSet(this, _o5, new l()), __privateSet(this, _r3, new l(0, 1, 0)), __privateSet(this, _n2, new l(0, 0, 0)), this.resetRequested = false, this.lastGroundTime = performance.now(), this.input = s, __privateSet(this, _t12, []), __privateSet(this, _e9, []), this.headRotation = 0;
    const a = 1400;
    this.maxRPM = 12500;
    const o = 420;
    this.sound = e, this.options = { mass: 780, brake: 520, downforceFactor: 1.9 };
    const i = { autoShift: true, torqueCurve: he, gears: [12.6854, 10.5019, 9.2765, 7.8192, 6.912, 5.4398, 4.6541, 4.1045], maxRPM: this.maxRPM };
    this.transmission = new ne(i);
    const h = { powerCurve: ae, maxRPM: this.maxRPM, topSpeed: o, power: a };
    this.engine = new re(h);
    const c = { rotationRange: 0.28, autoCenterFactor: 12, autoCenter: true, speedFactor: 1.9, maxRPM: this.maxRPM }, p = this.getPart("SteeringWheel"), u = new ie();
    this.steeringWheel = new ee(p, u, r, c), this.steeringWheel.textBEST.setText("--:--.---"), this.steeringWheel.textPOS.setText("P1");
    const g = this.getPart("BodyEngine");
    g.add(e.engine, e.turbo, e.crash), this.helmet = this.getPart("Helmet"), this.helmet.add(e.wind), this.object.add(this.helmet), this.cameras = [this.getPart("BodyCamera"), this.getPart("HelmetCamera")], this.cameras[1].position.y += 0.04, this.cameras[1].position.z -= 0.03;
    const y = this.getPart("ColliderBody");
    e.work.position.copy(y.position), y.removeFromParent(), this.object.traverse((S) => {
      S instanceof U && (S.receiveShadow = true);
    });
    const d = this.createChassisBody(y, { mass: this.options.mass });
    this.chassis = new oe(d), this.chassis.body.shapes.forEach((S) => {
      S.collisionFilterGroup = 4, S.collisionFilterMask = -5;
    }), this.chassis.addWheel(this.createWheel(this.getPart("ColliderWheelFtL"), this.getPart("WheelFtL"), 1.34)), this.chassis.addWheel(this.createWheel(this.getPart("ColliderWheelFtR"), this.getPart("WheelFtR"), 1.34)), this.chassis.addWheel(this.createWheel(this.getPart("ColliderWheelBkL"), this.getPart("WheelBkL"), 1.34)), this.chassis.addWheel(this.createWheel(this.getPart("ColliderWheelBkR"), this.getPart("WheelBkR"), 1.34)), __privateGet(this, _t12).push(this.getPart("WheelFtLHub"), this.getPart("WheelFtRHub"));
    const m = this.getPart("SuspensionFtL"), f = this.getPart("SuspensionFtR");
    __privateGet(this, _e9).push(m, f), this.object.add(g);
    const [Q, Z, J, X] = this.chassis.wheels, x = e.kerbs[0];
    Q.object.add(x), x.setRefDistance(2), x.setLoop(true), x.setVolume(0), x.play();
    const R = e.kerbs[1];
    Z.object.add(R), R.setRefDistance(2), R.setLoop(true), R.setVolume(0), R.play();
    const v = e.skids[0];
    J.object.add(v), v.setRefDistance(2), v.setLoop(true), v.setVolume(0), v.play();
    const P = e.skids[1];
    X.object.add(P), P.setRefDistance(2), P.setLoop(true), P.setVolume(0), P.play();
  }
  get direction() {
    return this.chassis.body.vectorToWorldFrame(__privateGet(this, _i5), __privateGet(this, _o5));
  }
  start() {
    this.sound.start(), this.input.enable();
  }
  stop() {
    this.sound.stop(), this.input.disable();
  }
  getCamera(t) {
    return t ? this.object.remove(this.helmet) : this.object.add(this.helmet), this.cameras[t];
  }
  reset(t, e) {
    return super.reset(t, e), this.resetRequested = false, this;
  }
  updateState(t) {
    this.steeringWheel.textLAP.setText(`L${t.currentLap}`), this.steeringWheel.textBEST.setText(__privateMethod(this, _ce_instances, u_fn).call(this, t.bestLapTime));
  }
  get speed() {
    return this.chassis.body.velocity.length();
  }
  canSkid(t) {
    return t < 100 && !this.input.clutch && this.input.throttle;
  }
  isUpsideDown() {
    return this.chassis.body.quaternion.vmult(__privateGet(this, _r3), __privateGet(this, _n2)), __privateGet(this, _n2).y < 0.4;
  }
  downforce(t) {
    const s = this.options.downforceFactor;
    return 0.5 * 1.12 * Math.pow(t, 2) * s * 1.5;
  }
  update(t) {
    this.isUpsideDown() && __privateMethod(this, _ce_instances, d_fn).call(this), this.transmission.update(this.engine.rpm), this.engine.update(this.chassis.speed, this.transmission.ratio), this.steeringWheel.update(this.input.steering, t, this.engine.rpm), __privateMethod(this, _ce_instances, c_fn2).call(this, t), __privateMethod(this, _ce_instances, l_fn).call(this, false), __privateMethod(this, _ce_instances, h_fn2).call(this, this.speed), this.chassis.numWheelsOnGround > 3 ? (this.sound.update(this.engine.rpm, this.input.throttle), this.lastGroundTime = performance.now()) : performance.now() - this.lastGroundTime > 2e3;
  }
}
_t12 = new WeakMap();
_e9 = new WeakMap();
_s9 = new WeakMap();
_i5 = new WeakMap();
_o5 = new WeakMap();
_r3 = new WeakMap();
_n2 = new WeakMap();
_ce_instances = new WeakSet();
a_fn = function(t, e) {
  e.position.y = t.connectionWorld.y - 0.67 - t.position.y;
};
h_fn2 = function(t) {
  __privateGet(this, _s9).set(0, -this.downforce(t), 0), this.chassis.body.applyForce(__privateGet(this, _s9), l.ZERO), this.object.position.copy(this.chassis.body.position), this.object.quaternion.copy(this.chassis.body.quaternion);
  for (let e = 0; e < this.chassis.wheels.length; e++) this.chassis.updateWheelTransform(e), this.chassis.wheels[e].update();
  __privateMethod(this, _ce_instances, a_fn).call(this, this.chassis.wheels[0], __privateGet(this, _t12)[0]), __privateMethod(this, _ce_instances, a_fn).call(this, this.chassis.wheels[1], __privateGet(this, _t12)[1]);
};
c_fn2 = function(t) {
  this.steeringWheel.textGear.setText(this.transmission.gear + 1), this.steeringWheel.textKPH.setText(Math.abs(this.chassis.currentVehicleSpeedKmHour * 0.7).toFixed()), this.steeringWheel.textRPM.setText(this.engine.rpm.toFixed());
  const e = this.steeringWheel.steering;
  this.chassis.setSteering(e, 0), this.chassis.setSteering(e, 1), this.headRotation = N(this.headRotation, e, t * 1.4), this.helmet.rotation.y = this.headRotation, this.helmet.rotation.z = -this.headRotation * 0.2, __privateGet(this, _t12)[0].rotation.y = e, __privateGet(this, _t12)[1].rotation.y = e;
};
l_fn = function(t) {
  const e = t ? 8800 : this.input.throttle, s = this.engine.power * e;
  this.chassis.applyEngineForce(-s, 2), this.chassis.applyEngineForce(-s, 3);
  const r = this.options.brake * this.input.brake;
  this.chassis.setBrake(r, 2), this.chassis.setBrake(r, 3);
};
d_fn = function() {
  this.resetRequested || (this.resetRequested = true, this.emit("reset", true));
};
u_fn = function(t) {
  const e = t / 1e3, s = Math.floor(e / 60), r = Math.floor(e % 60).toString(), a = Math.floor(t % 1e3).toString();
  return `${s}:${r.padStart(2, "0")}.${a.padStart(3, "0")}`;
};
class le extends k {
  constructor() {
    super(...arguments);
    __privateAdd(this, _t13, false);
  }
  get started() {
    return __privateGet(this, _t13);
  }
  reset(t, e) {
    this.vehicles.forEach((s) => s.reset(t, e));
  }
  getVehicle(t) {
    const e = this.vehicleById.get(t);
    if (!e) throw `Vehicle ${t} not found`;
    return e;
  }
  addVehicle(t) {
    if (__privateGet(this, _t13)) throw "Unable to add vehicles after starting";
    this.object.add(t.object), t.chassis.wheels.forEach((e) => {
      this.object.add(e.object);
    }), this.vehicles.add(t), this.vehicleById.set(t.id, t), this.race.add(t.id);
  }
  removeVehicle(t) {
    this.vehicles.delete(t), this.race.remove(t.id), this.vehicleById.delete(t.id);
  }
  start() {
    __privateSet(this, _t13, true);
  }
  stop() {
    this.vehicles.forEach((t) => t.stop());
  }
  createPhysicBody(t, e) {
    const s = jt(t);
    return new pt({ shape: s, material: e, mass: 0 });
  }
  createPhysicSurface(t) {
    const e = this.createPhysicMaterial(t.name);
    return { body: this.createPhysicBody(t, e), contact: this.createPhysicContactMaterial(e, t.material.userData) };
  }
  createPhysicMaterial(t) {
    return new mt(t);
  }
  createPhysicContactMaterial(t, e) {
    return new Et($.material, t, e);
  }
  isCircuitMesh(t) {
    return t instanceof K;
  }
}
_t13 = new WeakMap();
class de extends le {
  constructor(t) {
    super(t);
    __privateAdd(this, _de_instances);
    __publicField(this, "surfaces");
    __privateAdd(this, _t14);
    __privateAdd(this, _e10);
    __privateAdd(this, _s10);
    __publicField(this, "positions");
    __publicField(this, "race");
    __publicField(this, "light");
    __publicField(this, "vehicles");
    __publicField(this, "vehicleById");
    __privateAdd(this, _i6);
    __privateSet(this, _i6, []), this.surfaces = [], this.vehicleById = /* @__PURE__ */ new Map(), this.vehicles = new Ft(), __privateSet(this, _t14, new W(0, -1, 0)), __privateSet(this, _e10, new _());
    const e = this.getPart("Start");
    e.visible = false, this.positions = new Xt(e), this.light = new Qt(), t.traverse((i) => {
      this.isCircuitMesh(i) && (i.castShadow = true, i.receiveShadow = true, __privateMethod(this, _de_instances, n_fn).call(this, i) && this.surfaces.push(this.createPhysicSurface(i)), __privateMethod(this, _de_instances, a_fn2).call(this, i) && __privateGet(this, _i6).push(i));
    });
    const s = this.getPart("Physics"), r = this.getPart("PhysicsBarrier"), a = this.createPhysicMaterial("barrier");
    r.removeFromParent(), this.surfaces.push({ body: this.createPhysicBody(r, a), contact: this.createPhysicContactMaterial(a, { friction: 0.99, restitution: 0.01 }) }), __privateSet(this, _s10, new Zt(r)), s.removeFromParent();
    const o = this.getPart("Checkpoints");
    o.visible = false, this.race = new Jt(o), this.race.on("lap", (i) => {
      this.getVehicle(i.vehicleID).updateState(i);
    });
  }
  reset() {
    this.vehicles.items.forEach((t, e) => {
      this.race.remove(t.id), this.race.add(t.id);
      const s = this.race.getState(t.id);
      t.updateState({ ...s, bestLapTime: 0 });
      const r = this.positions.starts[e];
      t.reset(r.position, r.quaternion);
    });
  }
  update(t) {
    this.started && __privateMethod(this, _de_instances, o_fn3).call(this, t);
  }
}
_t14 = new WeakMap();
_e10 = new WeakMap();
_s10 = new WeakMap();
_i6 = new WeakMap();
_de_instances = new WeakSet();
o_fn3 = function(t) {
  for (let e = 0; e < this.vehicles.size; e++) {
    const s = this.vehicles.items[e];
    s.update(t), this.race.update(s), __privateGet(this, _s10).update(s);
    const r = s.chassis.wheels[0], a = __privateMethod(this, _de_instances, r_fn2).call(this, r.object.position);
    s.sound.handleKerb(s.speed, 0, a);
    const o = s.chassis.wheels[1], i = __privateMethod(this, _de_instances, r_fn2).call(this, o.object.position);
    s.sound.handleKerb(s.speed, 1, i);
  }
};
r_fn2 = function(t) {
  return __privateGet(this, _e10).set(t, __privateGet(this, _t14)), __privateGet(this, _e10).intersectObjects(__privateGet(this, _i6), false).length > 0;
};
n_fn = function(t) {
  return t.material.userData.friction;
};
a_fn2 = function(t) {
  return t.material.userData.key && t.material.userData.key === "KERB";
};
var ue = Object.getOwnPropertyDescriptor, pe = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? ue(t, e) : t, a = n.length - 1, o; a >= 0; a--) (o = n[a]) && (r = o(r) || r);
  return r;
};
let z = class extends HTMLElement {
  constructor() {
    super();
    __publicField(this, "audioListener");
    __publicField(this, "strategy");
    __publicField(this, "history");
    __publicField(this, "composer");
    __publicField(this, "loader");
    __publicField(this, "world");
    __publicField(this, "circuit");
    __publicField(this, "vehicle");
    __publicField(this, "shortcut");
    __publicField(this, "ounah");
    __publicField(this, "redbull");
    __publicField(this, "start", () => {
      if (!this.circuit || !this.vehicle || !this.history) return;
      const n = this.circuit, t = this.vehicle;
      t.start(), n.reset(), t.quaternion.setFromEuler(0, -Math.PI, 0), n.start(), this.shortcut.on("ShiftLeft + KeyR", () => {
        this.history.isReplaying() ? this.history.clear() : this.history.startReplay();
      });
      const e = () => {
        requestAnimationFrame(e);
        const s = this.composer.clock.getDelta();
        this.world.fixedStep(1 / 60), n.update(s), this.composer.render(s);
      };
      e();
    });
    this.shortcut = w(bt), this.loader = w(xt), this.history = w(Rt), this.composer = w(vt), this.strategy = w(Pt), this.audioListener = w(St), this.world = w(Wt), this.ounah = new Audio("sounds/effects/ounah.mp3"), this.ounah.load(), this.redbull = new Audio("sounds/effects/red-bull-racing.wav"), this.redbull.load(), this.circuit = null, this.vehicle = null;
  }
  async connectedCallback() {
    const n = new gt("S to start", 420), t = new yt("images/cockpit.webp", 1e4, 1e3);
    this.appendChild(t), this.appendChild(n), console.log(this.strategy), this.strategy.enable();
    const e = () => {
      removeEventListener("mousemove", e), n.pulse();
    };
    addEventListener("mousemove", e);
    const s = this.shortcut.on("KeyS", async () => {
      s(), t.remove(), n.remove();
      const r = ft("div", { id: "loader" });
      this.loader.progress.subscribe((h) => {
        r.appendChild(h);
      }), document.body.prepend(r), this.ounah.play(), await this.loadEnv("golden-gate-hills", "2k");
      const a = ["surfaces", "environment", "ads", "light", "checkpoint", "marshal", "start", "physics"], o = await this.loadCircuit("formula", "monaco", a);
      o.surfaces.forEach(({ body: h, contact: c }) => {
        this.world.addBody(h), this.world.addContactMaterial(c);
      }), this.composer.scene.add(o.object), this.circuit = o;
      const i = await this.loadVehicle("formula", "rb-20", this.strategy);
      this.shortcut.on("Digit1", () => {
        this.switchCamera(i.getCamera(0));
      }), this.shortcut.on("Digit2", () => {
        this.switchCamera(i.getCamera(1));
      }), this.switchCamera(i.getCamera(0)), o.addVehicle(i), i.chassis.addToWorld(this.world), this.vehicle = i, this.prepend(this.composer.renderer.domElement), this.start(), this.composer.resize(), this.addEventListener("resize", () => this.composer.resize()), i.on("reset", () => {
        o && o.reset(), i.quaternion.setFromEuler(0, -Math.PI, 0);
      }), this.shortcut.on("KeyR", () => {
        o && o.reset(), i.quaternion.setFromEuler(0, -Math.PI, 0);
      });
    });
    this.shortcut.enable();
  }
  switchCamera(n) {
    this.composer.camera !== n && (this.audioListener.removeFromParent(), n.add(this.audioListener), this.composer.setCamera(n));
  }
  async loadVehicle(n, t, e) {
    const s = await this.loader.loadModel(`vehicles/${n}/${t}.glb`), r = await this.loader.loadPositionalAudio(`sounds/${n}/engine.wav`), a = await this.loader.loadPositionalAudio(`sounds/${n}/turbo.wav`), o = await this.loader.loadPositionalAudio(`sounds/${n}/wind.wav`), i = await this.loader.loadPositionalAudio(`sounds/${n}/skid.wav`), h = await this.loader.loadPositionalAudio(`sounds/${n}/kerb.wav`), c = await this.loader.loadPositionalAudio(`sounds/${n}/work.wav`), p = await this.loader.loadPositionalAudio(`sounds/${n}/crash.wav`), u = await this.loader.loadPositionalAudio(`sounds/${n}/traction.wav`), g = new te({ engine: r, crash: p, traction: u, turbo: a, wind: o, work: c, skid: i, kerb: h }, 12500, 420), y = await this.loader.loadFont("fonts/righteous-regular.json");
    return new ce(s.scene, g, e, y);
  }
  async loadCircuit(n, t, e) {
    const s = e.map((i) => `circuits/${n}/${t}/${i}.glb`), r = () => Mt(s.map((i) => this.loader.loadModel(i))), a = new Vt(), o = await r();
    return a.add(...o.map((i) => i.scene)), new de(a);
  }
  async loadEnv(n, t) {
    const e = `envs/${n}/${t}.hdr`, s = await this.loader.loadEnv(e);
    s.mapping = wt, this.composer.scene.background = s, this.composer.scene.environment = s, this.composer.scene.environmentIntensity = 0.8;
  }
};
z = pe([Tt("app-root")], z);
export {
  z as AppElement
};
