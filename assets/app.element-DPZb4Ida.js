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
var _t2, _Dt_instances, e_fn, _se_instances, t_fn, e_fn2, s_fn, i_fn, o_fn, r_fn, _t3, _t4, _e, _re_instances, t_fn2, _t5, _e2, _s, _ne_instances, i_fn2, _t6, _e3, _s2, _ae_instances, i_fn3, _o, _t7, _e4, _s3, _i, _t8, _e5, _s4, _i2, _o2, _r, _t9, _e6, _s5, _de_instances, i_fn4, o_fn2, _t10, _e7, _s6, _t11, _e8, _s7, _i3, _o3, _t12, _e9, _s8, _i4, _o4, _r2, _n, _a, _ye_instances, h_fn, c_fn, _t13, _e10, _s9, _i5, _o5, _r3, _n2, _fe_instances, a_fn, h_fn2, c_fn2, l_fn, d_fn, u_fn, _t14, _t15, _e11, _s10, _i6, _be_instances, o_fn3, r_fn2, n_fn, a_fn2;
import { E as rt, C as nt, M as at, Q as ht, V as ct, G as lt, a as Q, R as dt, A as ut, D as pt, P as mt, b as gt, T as yt, c as l, d as L, e as ft, f as M, g as wt, h as bt, i as xt, j as _, k as vt, l as Pt, u as b, m as Rt, I as St, n as Wt, o as Ft, H as Mt, S as kt, p as Lt, q as Tt, r as Ct, s as Vt, t as It, v as At, w as Bt } from "./index-C1Yza3uZ.js";
class jt extends rt {
  constructor(t, e = {}) {
    const s = e.font;
    if (s === void 0) super();
    else {
      const o = s.generateShapes(t, e.size);
      e.depth === void 0 && (e.depth = 50), e.bevelThickness === void 0 && (e.bevelThickness = 10), e.bevelSize === void 0 && (e.bevelSize = 8), e.bevelEnabled === void 0 && (e.bevelEnabled = false), super(o, e);
    }
    this.type = "TextGeometry";
  }
}
const Et = (a) => Promise.all(a);
class Dt extends Set {
  constructor() {
    super(...arguments);
    __privateAdd(this, _Dt_instances);
    __privateAdd(this, _t2, []);
  }
  get items() {
    return __privateGet(this, _t2);
  }
  add(t) {
    return super.add(t), __privateMethod(this, _Dt_instances, e_fn).call(this), this;
  }
  delete(t) {
    const e = super.delete(t);
    return __privateMethod(this, _Dt_instances, e_fn).call(this), e;
  }
  remove(t) {
    return super.delete(t), __privateMethod(this, _Dt_instances, e_fn).call(this), this;
  }
  clear() {
    super.clear(), __privateMethod(this, _Dt_instances, e_fn).call(this);
  }
}
_t2 = new WeakMap();
_Dt_instances = new WeakSet();
e_fn = function() {
  __privateSet(this, _t2, Array.from(this));
};
class T extends nt {
}
class C extends jt {
}
class Ot extends at {
}
class k extends ht {
  static fromCannon(t) {
    return new k().copy(t);
  }
}
class x extends ct {
  static fromCannon(t) {
    return new x().copy(t);
  }
}
function Gt(a, t, e) {
  return Math.max(t, Math.min(e, a));
}
function Z(a, t, e) {
  return (1 - e) * a + e * t;
}
class qt extends lt {
}
class J extends Q {
}
class X extends dt {
}
class Ht extends ut {
}
class zt extends pt {
}
class Kt extends mt {
}
class $t extends gt {
  constructor(t, e, s = {}) {
    super(t, e, s);
  }
}
const Nt = (a) => {
  if (!a.geometry.index) throw "A geometria precisa de \xEDndices";
  const t = [...a.geometry.attributes.position.array];
  for (let s = 0; s < t.length; s += 3) t[s] *= a.scale.x, t[s + 1] *= a.scale.y, t[s + 2] *= a.scale.z;
  const e = [...a.geometry.index.array];
  return new yt(t, e);
}, V = new l(), I = new l(), A = new l();
function Ut(a, t, e, s, o) {
  if (o.lengthSquared() > 1.1) return 0;
  a.getVelocityAtWorldPoint(t, V), e.getVelocityAtWorldPoint(s, I), V.vsub(I, A);
  const i = o.dot(A), r = 1 / (a.invMass + e.invMass);
  return -0.2 * i * r;
}
const F = new l(), B = new l(), j = new l(), E = new l();
function D(a, t, e) {
  return t.vsub(a.position, F), F.cross(e, B), a.invInertiaWorld.vmult(B, E), E.cross(F, j), a.invMass + e.dot(j);
}
const O = new l(), G = new l(), q = new l();
function Qt(a, t, e, s, o) {
  let n = 0;
  const i = e;
  a.getVelocityAtWorldPoint(i, O), t.getVelocityAtWorldPoint(i, G), O.vsub(G, q);
  const r = s.dot(q), h = D(a, e, s), c = D(t, e, s), u = 1 / (h + c);
  return n = -r * u, o < n && (n = o), n < -o && (n = -o), n;
}
const H = { resolveSingleBilateral: Ut, determineRollingFriction: Qt }, _t = new l(), Zt = new l(), Jt = new l(), z = new l(), K = new l(), Xt = [new l(1, 0, 0), new l(0, 1, 0), new l(0, 0, 1)], Yt = new l(), te = [], v = [], ee = 1;
class se {
  constructor(t) {
    __privateAdd(this, _se_instances);
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
      __privateMethod(this, _se_instances, e_fn2).call(this, t.dt);
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
    const e = _t, s = Zt, o = Jt, n = this.wheels[t];
    this.updateWheelTransformWorld(n), n.directionLocal.scale(-1, e), s.copy(n.axleLocal), e.cross(s, o), o.normalize(), s.normalize();
    const i = new L();
    i.setFromAxisAngle(e, n.steering);
    const r = new L();
    r.setFromAxisAngle(s, n.rotation), this.body.quaternion.mult(i, n.worldTransform.quaternion), n.worldTransform.quaternion.mult(r, n.worldTransform.quaternion), n.worldTransform.quaternion.normalize(), n.worldTransform.position.copy(n.directionWorld), n.worldTransform.position.scale(n.suspensionLength, n.worldTransform.position), n.worldTransform.position.vadd(n.connectionWorld, n.worldTransform.position);
  }
}
_se_instances = new WeakSet();
t_fn = function(t, e) {
  e.set(t === 0 ? 1 : 0, t === 1 ? 1 : 0, t === 2 ? 1 : 0), this.body.vectorToWorldFrame(e, e);
};
e_fn2 = function(t) {
  for (let h = 0; h < this.wheels.length; h++) this.updateWheelTransform(h);
  this.currentVehicleSpeedKmHour = 3.6 * this.body.velocity.length();
  const e = new l();
  __privateMethod(this, _se_instances, t_fn).call(this, this.indexForwardAxis, e), e.dot(this.body.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1);
  for (let h = 0; h < this.wheels.length; h++) __privateMethod(this, _se_instances, r_fn).call(this, this.wheels[h]);
  __privateMethod(this, _se_instances, i_fn).call(this);
  const s = new l(), o = new l();
  for (let h = 0; h < this.wheels.length; h++) {
    let c = this.wheels[h].suspensionForce;
    c > this.wheels[h].maxSuspensionForce && (c = this.wheels[h].maxSuspensionForce), this.wheels[h].raycastResult.hitNormalWorld.scale(c * t, s), this.wheels[h].raycastResult.hitPointWorld.vsub(this.body.position, o), this.body.applyImpulse(s, o);
  }
  __privateMethod(this, _se_instances, s_fn).call(this, t);
  const n = new l(), i = new l(), r = new l();
  for (let h = 0; h < this.wheels.length; h++) {
    const c = this.wheels[h];
    c.connectionWorld.vsub(this.body.position, o), this.body.getVelocityAtWorldPoint(c.connectionWorld, r);
    let m = 1;
    switch (this.indexUpAxis) {
      case 1:
        m = -1;
        break;
    }
    if (c.isInContact) {
      __privateMethod(this, _se_instances, t_fn).call(this, this.indexForwardAxis, i);
      const u = i.dot(c.raycastResult.hitNormalWorld);
      c.raycastResult.hitNormalWorld.scale(u, n), i.vsub(n, i);
      const g = i.dot(r);
      c.deltaRotation = m * g * t / c.radius;
    }
    (c.sliding || !c.isInContact) && c.engineForce !== 0 && (c.deltaRotation = (c.engineForce > 0 ? 1 : -1) * c.customSlidingRotationalSpeed * t), Math.abs(c.brake) > Math.abs(c.engineForce) && (c.deltaRotation = 0), c.rotation += c.deltaRotation, c.deltaRotation *= 0.99;
  }
};
s_fn = function(t) {
  const e = Yt, s = te;
  this.numWheelsOnGround = 0;
  for (let i = 0; i < this.wheels.length; i++) this.wheels[i].raycastResult.body && this.numWheelsOnGround++, this.wheels[i].sideImpulse = 0, this.wheels[i].forwardImpulse = 0, v[i] || (v[i] = new l()), s[i] || (s[i] = new l());
  for (let i = 0; i < this.wheels.length; i++) {
    const r = this.wheels[i].raycastResult.body;
    if (r) {
      const h = s[i];
      __privateMethod(this, _se_instances, o_fn).call(this, i).vectorToWorldFrame(Xt[this.indexRightAxis], h);
      const m = this.wheels[i].raycastResult.hitNormalWorld, u = h.dot(m);
      m.scale(u, e), h.vsub(e, h), h.normalize(), m.cross(h, v[i]), v[i].normalize(), this.wheels[i].sideImpulse = H.resolveSingleBilateral(this.body, this.wheels[i].raycastResult.hitPointWorld, r, this.wheels[i].raycastResult.hitPointWorld, h), this.wheels[i].sideImpulse *= ee;
    }
  }
  const o = 1, n = 0.5;
  this.sliding = false;
  for (let i = 0; i < this.wheels.length; i++) {
    const r = this.wheels[i];
    let h = 0;
    if (r.slipInfo = 1, r.raycastResult.body) {
      const m = r.brake ? r.brake : 0;
      h = H.determineRollingFriction(this.body, r.raycastResult.body, r.raycastResult.hitPointWorld, v[i], m), h += r.engineForce * t;
      const u = m / h;
      r.slipInfo *= u;
    }
    if (r.forwardImpulse = 0, r.skidInfo = 1, r.raycastResult.body) {
      r.skidInfo = 1;
      const c = r.suspensionForce * t * r.frictionSlip, u = c * c;
      r.forwardImpulse = h;
      const g = r.forwardImpulse * n / r.forwardAcceleration, y = r.sideImpulse * o / r.sideAcceleration, d = g * g + y * y;
      if (r.sliding = false, d > u) {
        this.sliding = true, r.sliding = true;
        const p = c / Math.sqrt(d);
        r.skidInfo *= p;
      }
    }
  }
  if (this.sliding) for (let i = 0; i < this.wheels.length; i++) {
    const r = this.wheels[i];
    r.sideImpulse !== 0 && r.skidInfo < 1 && (r.forwardImpulse *= r.skidInfo, r.sideImpulse *= r.skidInfo);
  }
  for (let i = 0; i < this.wheels.length; i++) {
    const r = this.wheels[i], h = new l();
    if (r.raycastResult.hitPointWorld.vsub(this.body.position, h), r.forwardImpulse !== 0) {
      const c = new l();
      v[i].scale(r.forwardImpulse, c), this.body.applyImpulse(c, h);
    }
    if (r.sideImpulse !== 0) {
      const c = r.raycastResult.body;
      if (c) {
        const m = new l();
        r.raycastResult.hitPointWorld.vsub(c.position, m);
        const u = new l();
        s[i].scale(r.sideImpulse, u), this.body.vectorToLocalFrame(h, h), h["xyz"[this.indexUpAxis]] *= r.rollInfluence, this.body.vectorToWorldFrame(h, h), this.body.applyImpulse(u, h), u.scale(-1, u), c.applyImpulse(u, m);
      }
    }
  }
};
i_fn = function() {
  for (let t = 0; t < this.wheels.length; t++) {
    const e = this.wheels[t];
    if (e.isInContact) {
      let s;
      const o = e.suspensionRestLength - e.suspensionLength;
      s = e.suspensionStiffness * o * e.clippedInvContactDotSuspension;
      const n = e.suspensionRelativeVelocity;
      let i;
      n < 0 ? i = e.dampingCompression : i = e.dampingRelaxation, s -= i * n, e.suspensionForce = s * this.body.mass, e.suspensionForce < 0 && (e.suspensionForce = 0);
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
  t.directionWorld.scale(s, z);
  const o = t.connectionWorld;
  o.vadd(z, K);
  const n = t.raycastResult;
  n.reset();
  const i = this.body.collisionResponse;
  if (this.body.collisionResponse = false, this.world && this.world.rayTest(o, K, n), this.body.collisionResponse = i, t.raycastResult.groundObject = 0, n.body) {
    e = n.distance, t.raycastResult.hitNormalWorld = n.hitNormalWorld, t.isInContact = true;
    const r = n.distance;
    t.suspensionLength = r - t.radius;
    const h = t.suspensionRestLength - t.maxSuspensionTravel, c = t.suspensionRestLength + t.maxSuspensionTravel;
    t.suspensionLength < h && (t.suspensionLength = h), t.suspensionLength > c && (t.suspensionLength = c, t.raycastResult.reset());
    const m = t.raycastResult.hitNormalWorld.dot(t.directionWorld), u = new l();
    this.body.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld, u);
    const g = t.raycastResult.hitNormalWorld.dot(u);
    if (m >= -0.1) t.suspensionRelativeVelocity = 0, t.clippedInvContactDotSuspension = 1 / 0.1;
    else {
      const y = -1 / m;
      t.suspensionRelativeVelocity = g * y, t.clippedInvContactDotSuspension = y;
    }
  } else t.suspensionLength = t.suspensionRestLength + 0 * t.maxSuspensionTravel, t.suspensionRelativeVelocity = 0, t.directionWorld.scale(-1, t.raycastResult.hitNormalWorld), t.clippedInvContactDotSuspension = 1;
  return e;
};
class ie extends J {
  constructor(t, e, s, o = 0) {
    const n = { font: e, size: s, depth: o, bevelEnabled: !!o };
    super(new C("", n), new Ot({ color: t }));
    __privateAdd(this, _t3);
    __privateSet(this, _t3, n);
  }
  setText(t) {
    this.geometry.dispose(), this.geometry = new C(String(t), __privateGet(this, _t3));
  }
  getCenterOfMass() {
    this.geometry.computeBoundingBox();
    const t = this.geometry.boundingBox;
    if (!t) throw "GraphicTextMesh bounding box error";
    return t.getCenter(new x());
  }
}
_t3 = new WeakMap();
class oe {
  constructor(t, e) {
    __publicField(this, "arrows");
    __publicField(this, "points");
    __publicField(this, "visited");
    __publicField(this, "totalPoints");
    __publicField(this, "maxDistance", 16);
    __privateAdd(this, _t4);
    __privateAdd(this, _e);
    __privateSet(this, _t4, 16765195), __privateSet(this, _e, 65294), this.points = e.idealLine.map((s) => new x(...s.position)), this.totalPoints = this.points.length, this.arrows = [];
    for (let s = 0; s < this.points.length; s += 10) {
      const o = this.points[s], i = this.points[s + 1].clone().sub(o).normalize(), r = new k().setFromUnitVectors(new x(0, 0, 1), i);
      o.y -= 0.2;
      const h = t.clone();
      h.material = h.material.clone(), h.position.copy(o), h.quaternion.copy(r), this.arrows.push(h);
    }
    this.visited = new Array(this.arrows.length).fill(false);
  }
  reset() {
    this.arrows.forEach((t, e) => {
      t.material.color.set(__privateGet(this, _t4)), this.visited[e] = false;
    });
  }
  update(t) {
    for (let e = 0, s = this.arrows.length; e < s; e++) {
      if (this.visited[e]) continue;
      const o = this.arrows[e], n = o.position.distanceTo(t);
      if (n < this.maxDistance) {
        const i = 1 - n / this.maxDistance, r = new T().lerpColors(o.material.color, new T(__privateGet(this, _e)), i);
        o.material.color.copy(r), i >= 0.99 && (this.visited[e] = true);
      }
    }
  }
}
_t4 = new WeakMap();
_e = new WeakMap();
class re {
  constructor() {
    __privateAdd(this, _re_instances);
    __publicField(this, "sun");
    __publicField(this, "ambient");
    __publicField(this, "poles");
    __publicField(this, "tunnel");
    this.sun = new zt(16770244, 4), this.sun.position.set(-20, 10, -40), this.sun.castShadow = true, this.sun.shadow.mapSize.set(2048, 2048), this.sun.shadow.bias = -1e-4, this.sun.shadow.camera.left = -150, this.sun.shadow.camera.right = 150, this.sun.shadow.camera.top = 150, this.sun.shadow.camera.bottom = -150, this.ambient = new Ht(11583173, 3), this.poles = [], this.tunnel = [], this.tunnel.push(__privateMethod(this, _re_instances, t_fn2).call(this, 594.438, 505.998, -9.62166), __privateMethod(this, _re_instances, t_fn2).call(this, 554.285, 359.46, -9.72915), __privateMethod(this, _re_instances, t_fn2).call(this, 485.645, 236.015, -9.72866), __privateMethod(this, _re_instances, t_fn2).call(this, 379.198, 166.914, -9.96135));
  }
}
_re_instances = new WeakSet();
t_fn2 = function(t, e, s) {
  const o = new Kt(16773344, 50, 0);
  return o.add(new ft(20)), o.position.set(t, e, s), o;
};
class ne extends M {
  constructor(t) {
    super(t);
    __privateAdd(this, _ne_instances);
    __privateAdd(this, _t5);
    __privateAdd(this, _e2);
    __privateAdd(this, _s);
    __publicField(this, "cooldownMs", 400);
    __publicField(this, "lastBarrierImpulseTime", 0);
    __publicField(this, "maxDistance", 10);
    __privateSet(this, _e2, t), __privateSet(this, _s, new x(-1, 0, 0)), __privateSet(this, _t5, new X()), __privateGet(this, _t5).far = 0.5;
  }
  update(t) {
    const e = performance.now(), s = __privateMethod(this, _ne_instances, i_fn2).call(this, t.object);
    if (s.length && s[0].distance < this.maxDistance && e - this.lastBarrierImpulseTime > this.cooldownMs) {
      t.sound.crash.play();
      const o = t.direction.clone().negate().scale(t.speed * 100);
      t.chassis.body.applyImpulse(o), t.chassis.body.velocity.x = t.chassis.body.velocity.x * 0.2, this.lastBarrierImpulseTime = e;
    }
  }
}
_t5 = new WeakMap();
_e2 = new WeakMap();
_s = new WeakMap();
_ne_instances = new WeakSet();
i_fn2 = function(t) {
  const e = __privateGet(this, _s).applyQuaternion(t.quaternion).normalize();
  return __privateGet(this, _t5).set(t.position, e), __privateGet(this, _t5).intersectObject(__privateGet(this, _e2), false);
};
class ae extends wt {
  constructor(t) {
    super();
    __privateAdd(this, _ae_instances);
    __privateAdd(this, _t6);
    __publicField(this, "checkpoints");
    __privateAdd(this, _e3);
    __privateAdd(this, _s2);
    __privateAdd(this, _o, (t) => !!t.userData.shape && typeof t.userData.order == "number");
    __privateSet(this, _s2, []), __privateSet(this, _t6, /* @__PURE__ */ new Map()), this.checkpoints = t.children.filter(__privateGet(this, _o)).map(__privateMethod(this, _ae_instances, i_fn3)), __privateSet(this, _e3, this.checkpoints.length);
  }
  get positions() {
    return __privateGet(this, _s2);
  }
  add(t) {
    __privateGet(this, _t6).set(t, { vehicleID: t, lastCheckpoint: -1, bestLapTime: 1 / 0, checkpointHistory: /* @__PURE__ */ new Set(), lapTimes: [], lapStartTime: performance.now(), currentLap: 0 });
  }
  remove(t) {
    __privateGet(this, _t6).delete(t);
  }
  getState(t) {
    const e = __privateGet(this, _t6).get(t);
    if (!e) throw `Vehicle ${t} not found`;
    return e;
  }
  refresh() {
    const e = Array.from(__privateGet(this, _t6).values()).sort((s, o) => s.currentLap !== o.currentLap ? o.currentLap - s.currentLap : o.checkpointHistory.size - s.checkpointHistory.size);
    __privateSet(this, _s2, e.map((s) => s.vehicleID));
  }
  update(t) {
    const e = __privateGet(this, _t6).get(t.id);
    if (!e) return;
    const s = (e.lastCheckpoint + 1) % __privateGet(this, _e3);
    if (e.checkpointHistory.has(s)) return;
    const o = this.checkpoints[s];
    if (t.object.position.distanceTo(o.position) < o.radius && (e.checkpointHistory.add(s), e.lastCheckpoint = s, e.checkpointHistory.size === __privateGet(this, _e3))) {
      const i = performance.now(), r = i - e.lapStartTime;
      e.lapTimes.push(r), r < e.bestLapTime && (e.bestLapTime = r), e.currentLap += 1, e.lapStartTime = i, e.checkpointHistory.clear(), this.emit("lap", e);
    }
  }
}
_t6 = new WeakMap();
_e3 = new WeakMap();
_s2 = new WeakMap();
_ae_instances = new WeakSet();
i_fn3 = function(t) {
  const { radius: e } = bt(t.geometry);
  return { position: t.position, order: t.userData.order, radius: e };
};
_o = new WeakMap();
class he {
  constructor(t) {
    __privateAdd(this, _t7);
    __privateAdd(this, _e4, ({ position: t, quaternion: e }) => ({ position: t.toArray(), quaternion: e.toArray() }));
    __privateAdd(this, _s3, (t, e) => t.userData.index - e.userData.index ? 1 : -1);
    __privateAdd(this, _i, (t) => t.userData.key === "START" && typeof t.userData.index == "number");
    __privateSet(this, _t7, t.children.filter(__privateGet(this, _i)).sort(__privateGet(this, _s3)).map(__privateGet(this, _e4)));
  }
  get starts() {
    return __privateGet(this, _t7);
  }
  apply(t) {
    t.forEach((e) => {
      const s = this.starts.shift();
      if (s) {
        const { position: o, quaternion: n } = s;
        e.reset(o, n);
      }
    });
  }
}
_t7 = new WeakMap();
_e4 = new WeakMap();
_s3 = new WeakMap();
_i = new WeakMap();
class ce extends M {
  constructor(t, e) {
    super(t);
    __privateAdd(this, _t8, 0);
    __privateAdd(this, _e5);
    __privateAdd(this, _s4);
    __privateAdd(this, _i2);
    __privateAdd(this, _o2);
    __privateAdd(this, _r);
    this.object = t, __privateSet(this, _e5, e.rotationRange), __privateSet(this, _s4, e.speedFactor ?? 0), __privateSet(this, _i2, e.autoCenter ?? false), __privateSet(this, _r, e.progressive ?? false), __privateSet(this, _o2, e.autoCenterFactor ?? 0);
  }
  get steering() {
    return __privateGet(this, _t8);
  }
  handleSteering(t, e) {
    const s = t * __privateGet(this, _e5);
    if (__privateGet(this, _r) || !__privateGet(this, _s4)) __privateSet(this, _t8, t);
    else if (__privateGet(this, _i2)) {
      const o = e * (t ? __privateGet(this, _s4) : __privateGet(this, _o2));
      __privateSet(this, _t8, Z(__privateGet(this, _t8), s, o));
    }
    this.object.rotation.z = -this.steering * 4;
  }
}
_t8 = new WeakMap();
_e5 = new WeakMap();
_s4 = new WeakMap();
_i2 = new WeakMap();
_o2 = new WeakMap();
_r = new WeakMap();
class le {
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
    this.maxRPM = e, this.maxSpeed = s, this.speedThreshold = 60, this.turboThreshold = 80, this.refKerbSpeed = 16.67, t.engine.setLoop(true), t.engine.setRefDistance(5), t.engine.setVolume(0.3), this.engine = t.engine, this.work = t.work, this.turbo = t.turbo, this.wind = t.wind, this.crash = t.crash, this.traction = t.traction;
    const o = t.kerb, n = o.clone();
    this.kerbs = [o, n];
    const i = t.skid;
    i.setPlaybackRate(0.8);
    const r = i.clone();
    this.skids = [i, r], this.work.setRefDistance(4), this.work.setVolume(0.08), this.work.setLoop(true), this.traction.setRefDistance(4), this.traction.setVolume(0.3), this.traction.setLoop(true), this.crash.setRefDistance(10), this.crash.setVolume(0.4);
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
      const o = Gt(t / this.refKerbSpeed, 0.5, 1.3);
      this.kerbs[e].setPlaybackRate(o), this.kerbs[e].setVolume(t > 40 ? 0.3 : 0);
    } else this.kerbs[e].getVolume() && this.kerbs[e].setVolume(0);
  }
  handleTurbo(t) {
    t > this.turboThreshold ? this.turbo.isPlaying || (this.turbo.setVolume(1), this.turbo.play()) : this.turbo.isPlaying && this.turbo.setVolume(0);
  }
  handleWind(t) {
    if (t > this.speedThreshold) {
      this.wind.isPlaying || this.wind.play();
      const e = Math.min(t / this.maxSpeed, 1);
      this.wind.setVolume(0.4 + e * 0.9), this.wind.setPlaybackRate(0.7 + e * 0.6);
    } else this.wind.isPlaying && this.wind.setVolume(0);
  }
  handleEngine(t) {
    const e = Math.min(t / this.maxRPM, 1);
    this.engine.setPlaybackRate(0.4 + e * 0.6), this.engine.setVolume(Math.min(0.6 + e * 0.2, 1));
  }
  update(t, e) {
    this.handleEngine(t), this.handleWind(e), this.handleTurbo(e);
  }
}
class de extends ce {
  constructor(t, e, s, o) {
    super(t, o);
    __privateAdd(this, _de_instances);
    __publicField(this, "battery");
    __publicField(this, "textGear");
    __publicField(this, "textLAP");
    __publicField(this, "textPOS");
    __publicField(this, "textBEST");
    __publicField(this, "textKPH");
    __publicField(this, "textRPM");
    __privateAdd(this, _t9, []);
    __privateAdd(this, _e6, []);
    __privateAdd(this, _s5);
    __privateSet(this, _s5, o.maxRPM), this.battery = e;
    const n = this.object.getObjectByName("SteeringWheelTextGEAR");
    this.textGear = __privateMethod(this, _de_instances, o_fn2).call(this, s, 0.01, 16777215, 0, n), this.object.add(this.textGear);
    const i = this.object.getObjectByName("SteeringWheelTextLAP");
    this.textLAP = __privateMethod(this, _de_instances, o_fn2).call(this, s, 6e-3, 6155007, 0, i), this.object.add(this.textLAP);
    const r = this.object.getObjectByName("SteeringWheelTextPOS");
    this.textPOS = __privateMethod(this, _de_instances, o_fn2).call(this, s, 6e-3, 6155007, 0, r), this.object.add(this.textPOS);
    const h = this.object.getObjectByName("SteeringWheelTextBEST");
    this.textBEST = __privateMethod(this, _de_instances, o_fn2).call(this, s, 4e-3, 16777215, 0, h), this.textBEST.position.x += 8e-3, this.object.add(this.textBEST);
    const c = this.object.getObjectByName("SteeringWheelTextKPH");
    this.textKPH = __privateMethod(this, _de_instances, o_fn2).call(this, s, 6e-3, 16777215, 0, c), this.textKPH.position.x += 2e-3, this.object.add(this.textKPH);
    const m = this.object.getObjectByName("SteeringWheelTextRPM");
    this.textRPM = __privateMethod(this, _de_instances, o_fn2).call(this, s, 5e-3, 16777215, 0, m), this.textRPM.position.x += 2e-3, this.object.add(this.textRPM);
    const u = this.getPart("SteeringWheelLedGreen");
    {
      const [d, p] = __privateMethod(this, _de_instances, i_fn4).call(this, u, 6);
      d.forEach((w) => {
        w.material.transparent = true, w.material.opacity = 0.2;
      }), p.forEach((w) => {
        w.material.emissiveIntensity = 0.1, w.material.transparent = true, w.material.opacity = 0.2;
      });
    }
    const g = this.getPart("SteeringWheelLedRed"), y = this.getPart("SteeringWheelLedBlue");
    {
      const [d, p] = __privateMethod(this, _de_instances, i_fn4).call(this, g, 6);
      __privateGet(this, _e6).push([p[0].material, d[0].material]), __privateGet(this, _e6).push([p[1].material, d[1].material]), __privateGet(this, _e6).push([p[2].material, d[2].material]), __privateGet(this, _e6).push([p[3].material, d[3].material]), __privateGet(this, _e6).push([p[4].material, d[4].material]), __privateGet(this, _e6).push([p[5].material, d[5].material]);
    }
    {
      const [d, p] = __privateMethod(this, _de_instances, i_fn4).call(this, y, 5);
      __privateGet(this, _t9).push([p[0].material, d[0].material]), __privateGet(this, _t9).push([p[1].material, d[1].material]), __privateGet(this, _t9).push([p[2].material, d[2].material]), __privateGet(this, _t9).push([p[3].material, d[3].material]), __privateGet(this, _t9).push([p[4].material, d[4].material]);
    }
    __privateGet(this, _t9).forEach(([d, p]) => {
      d.transparent = true, d.opacity = 0, p.emissiveIntensity = 0;
    }), __privateGet(this, _e6).forEach(([d, p]) => {
      d.transparent = true, d.opacity = 0, p.emissiveIntensity = 0;
    });
  }
  update(t, e, s) {
    this.handleSteering(t, e), this.battery.update(s, e), this.updateRpmLights(s);
  }
  updateRpmLights(t) {
    const e = Math.min(1, Math.max(0, t / __privateGet(this, _s5)));
    let s = 0;
    e < 0.5 ? s = Math.floor(Math.pow(e * 2, 3) * 3) : e < 0.8 ? s = 3 + Math.floor((e - 0.5) / 0.3 * 3) : s = 6 + Math.floor((e - 0.8) / 0.2 * 3), s = Math.min(9, s), this.updateLightGroup(__privateGet(this, _e6), s < 2 ? 0 : s + 1);
    const o = s - 5 ? 0 : 4;
    this.updateLightGroup(__privateGet(this, _t9), Math.max(0, o));
  }
  updateLightGroup(t, e) {
    for (let s = 0, o = t.length; s < o; s++) {
      const n = s < e;
      t[s][0].opacity = n ? 1 : 0, t[s][0].needsUpdate = true, t[s][1].emissiveIntensity = n ? 10 : 0, t[s][1].needsUpdate = true;
    }
  }
}
_t9 = new WeakMap();
_e6 = new WeakMap();
_s5 = new WeakMap();
_de_instances = new WeakSet();
i_fn4 = function(t, e) {
  const s = t.children.slice(0, e), o = t.children.slice(e);
  return [s, o];
};
o_fn2 = function(t, e, s, o, n) {
  const i = new ie(s, t, e, 0);
  i.rotation.y = -Math.PI, i.setText(o), n && (i.position.copy(n.position), n.removeFromParent());
  const r = i.getCenterOfMass();
  return i.position.x += r.x, i.position.y -= r.y, i.position.z += r.z, i;
};
const ue = 0.2;
class pe {
  constructor(t = 12, e = 100) {
    __privateAdd(this, _t10);
    __privateAdd(this, _e7);
    __privateAdd(this, _s6);
    __privateSet(this, _t10, e), __privateSet(this, _s6, false), __privateSet(this, _e7, t);
  }
  get level() {
    return __privateGet(this, _t10);
  }
  get volts() {
    return __privateGet(this, _e7);
  }
  get voltage() {
    return __privateGet(this, _e7) * (__privateGet(this, _t10) / 100);
  }
  update(t, e) {
    __privateSet(this, _s6, t > 1e4), __privateGet(this, _s6) ? __privateSet(this, _t10, __privateGet(this, _t10) + 0.05 * e) : __privateSet(this, _t10, __privateGet(this, _t10) - ue * e), __privateSet(this, _t10, Math.max(0, Math.min(100, __privateGet(this, _t10))));
  }
}
_t10 = new WeakMap();
_e7 = new WeakMap();
_s6 = new WeakMap();
class me extends se {
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
class ge {
  constructor(t) {
    __privateAdd(this, _t11, 0);
    __privateAdd(this, _e8, 0);
    __privateAdd(this, _s7);
    __privateAdd(this, _i3);
    __privateAdd(this, _o3);
    __privateSet(this, _i3, t.powerCurve.slice().sort((e, s) => e[0] - s[0])), console.log(__privateGet(this, _i3)), __privateSet(this, _o3, t), __privateSet(this, _s7, 1);
  }
  get rpm() {
    return __privateGet(this, _e8);
  }
  get power() {
    return __privateGet(this, _t11);
  }
  get clutch() {
    return __privateGet(this, _s7);
  }
  set clutch(t) {
    __privateSet(this, _s7, Math.min(1, Math.max(0, t)));
  }
  reset() {
    __privateSet(this, _t11, 0), __privateSet(this, _e8, 0);
  }
  update(t, e) {
    const s = __privateGet(this, _e8) + (e * t * 6 - __privateGet(this, _e8)) * __privateGet(this, _s7);
    __privateSet(this, _e8, Math.abs(s)), __privateSet(this, _t11, __privateGet(this, _o3).power * e);
  }
}
_t11 = new WeakMap();
_e8 = new WeakMap();
_s7 = new WeakMap();
_i3 = new WeakMap();
_o3 = new WeakMap();
class ye {
  constructor(t) {
    __privateAdd(this, _ye_instances);
    __privateAdd(this, _t12);
    __privateAdd(this, _e9);
    __privateAdd(this, _s8);
    __privateAdd(this, _i4);
    __privateAdd(this, _o4);
    __privateAdd(this, _r2);
    __privateAdd(this, _n);
    __privateAdd(this, _a);
    __publicField(this, "shift$");
    __privateSet(this, _n, Object.freeze(t)), __privateSet(this, _t12, t.autoShift), __privateSet(this, _r2, t.gears.length), __privateSet(this, _o4, t.maxRPM), __privateSet(this, _e9, t.gears), __privateSet(this, _s8, 0), __privateSet(this, _i4, 0), __privateSet(this, _a, new xt()), this.shift$ = __privateGet(this, _a).asObserver();
  }
  get autoShift() {
    return __privateGet(this, _t12);
  }
  get gear() {
    return __privateGet(this, _s8);
  }
  get ratio() {
    return __privateGet(this, _e9)[__privateGet(this, _s8)];
  }
  get torque() {
    return __privateGet(this, _i4);
  }
  reset() {
    __privateSet(this, _t12, __privateGet(this, _n).autoShift), __privateSet(this, _r2, __privateGet(this, _n).gears.length - 1), __privateSet(this, _e9, __privateGet(this, _n).gears), __privateSet(this, _s8, 0), __privateSet(this, _i4, 0);
  }
  update(t) {
    if ((!isFinite(t) || t < 0) && (t = 0), this.autoShift) {
      const e = __privateMethod(this, _ye_instances, c_fn).call(this, t);
      e && (this.shift(e), __privateGet(this, _a).emit(e));
    }
  }
  shift(t) {
    const e = __privateGet(this, _s8) + t;
    __privateMethod(this, _ye_instances, h_fn).call(this, e) && __privateSet(this, _s8, e);
  }
}
_t12 = new WeakMap();
_e9 = new WeakMap();
_s8 = new WeakMap();
_i4 = new WeakMap();
_o4 = new WeakMap();
_r2 = new WeakMap();
_n = new WeakMap();
_a = new WeakMap();
_ye_instances = new WeakSet();
h_fn = function(t) {
  return t >= 0 && t < __privateGet(this, _r2);
};
c_fn = function(t) {
  if (t < 0) return 0;
  const e = t / __privateGet(this, _o4);
  return e > 0.86 && __privateGet(this, _s8) < __privateGet(this, _r2) ? 1 : e < 0.63 && __privateGet(this, _s8) > 0 ? -1 : 0;
};
const $ = [[0, 0], [580, 13.0060215396118], [1e3, 23.5604323757565], [1160, 28.2864869839221], [1305, 32.8895788321188], [1500, 39.6382842845279], [1740, 47.4250708425936], [2e3, 56.8299322742528], [2175, 64.181389983154], [2320, 70.8494504360881], [2500, 79.9695002227479], [2610, 86.1907006817735], [2755, 95.0981930735709], [2900, 104.900235195471], [3e3, 112.236978173889], [3200, 129.171738252815], [3335, 142.032348446473], [3625, 172.80910317321], [4060, 223.661024547093], [4785, 323.062319717673], [5e3, 357.335514583025], [5220, 387.224662284407], [5365, 408.903821321368], [5500, 430.661883643152], [5800, 472.827428482247], [6e3, 504.210793456098], [6380, 551.304693200133], [6500, 567.432736626172], [7e3, 626.304801670147], [7500, 679.98807038473], [8500, 775.723232925738], [9e3, 815.985684461676], [9750, 872.35311661199], [1e4, 888.756337608112], [10250, 898.74739039666], [10295, 899.045493587832], [10440, 899.789132120489], [10500, 900], [10585, 899.343018192663], [10730, 897.927873546078], [10750, 897.703549060544], [10875, 895.168505815687], [11e3, 892.335222189084], [11165, 885.940918580376], [11310, 879.83906949001], [11500, 871.160155084998], [11890, 839.853146436028], [12325, 800.224425887265], [12500, 782.881002087683], [13500, 660.304205189383], [14e3, 576.200417536534], [14500, 510.289293170296]], N = [[0, 151.688043969153], [290, 155.367449656772], [435, 157.4177474891], [580, 159.672239128674], [725, 162.175078377098], [870, 164.970572230684], [1e3, 167.763004918538], [1160, 173.633678064081], [1305, 179.457139401983], [1500, 188.163996747652], [1595, 190.322674727229], [1740, 194.075931911226], [1885, 198.424823106667], [2e3, 202.329907524448], [2030, 203.586805207898], [2175, 210.117776965366], [2320, 217.451016010386], [2500, 227.770415164482], [2610, 235.143427441804], [2755, 245.789656233683], [2900, 257.567702587172], [3e3, 266.39597017474], [3200, 287.428921801932], [3335, 303.252486096619], [3500, 324.533735032506], [3625, 339.446664595429], [3770, 358.193858639006], [4060, 392.262883624218], [4500, 449.131021987678], [4640, 463.897935242766], [4785, 480.747799735099], [4930, 499.291539763727], [5e3, 508.884376436538], [5075, 515.125559102838], [5220, 528.208574470989], [5365, 542.705700148419], [5500, 557.553679611329], [5655, 568.840072009616], [5800, 580.480464354719], [6e3, 598.375533984936], [6090, 601.98307606494], [6235, 608.308185507502], [6380, 615.295800678374], [6500, 621.604244499287], [6670, 626.423998253295], [6815, 630.889186290787], [7e3, 637.089784670445], [7500, 645.584315132717], [8500, 649.831580363853], [9e3, 645.584315132717], [9500, 639.213417286012], [9750, 637.089784670445], [1e4, 632.842519439309], [10250, 624.347988977036], [10500, 610.332013714286], [10750, 594.617132359082], [11e3, 577.628071434536], [11500, 539.40268435431], [12500, 445.962849269311], [13e3, 394.995666495676], [13500, 348.275748953176], [14e3, 293.061300948405], [14500, 250.588648637041]];
class fe extends _ {
  constructor(t, e, s, o) {
    super(t);
    __privateAdd(this, _fe_instances);
    __publicField(this, "id");
    __publicField(this, "steeringWheel");
    __publicField(this, "cameras");
    __publicField(this, "helmet");
    __publicField(this, "chassis");
    __publicField(this, "transmission");
    __publicField(this, "engine");
    __publicField(this, "sound");
    __publicField(this, "input");
    __privateAdd(this, _t13);
    __privateAdd(this, _e10);
    __privateAdd(this, _s9, new l());
    __publicField(this, "options");
    __publicField(this, "headRotation");
    __publicField(this, "maxRPM");
    __publicField(this, "resetRequested");
    __privateAdd(this, _i5);
    __privateAdd(this, _o5);
    __privateAdd(this, _r3);
    __privateAdd(this, _n2);
    __publicField(this, "lastCallTime", 0);
    this.id = crypto.randomUUID(), __privateSet(this, _i5, new l(0, 0, -1)), __privateSet(this, _o5, new l()), __privateSet(this, _r3, new l(0, 1, 0)), __privateSet(this, _n2, new l(0, 0, 0)), this.resetRequested = false, this.input = s, __privateSet(this, _t13, []), __privateSet(this, _e10, []), this.headRotation = 0;
    const n = $.map(([, f]) => f), i = Math.max(...n) * 1.2, r = N.map(([f]) => f);
    this.maxRPM = Math.max(...r);
    const h = 420;
    this.sound = e, this.options = { mass: 780, brake: 520, downforceFactor: 1.9 };
    const c = { autoShift: true, torqueCurve: N, gears: [12.6854, 10.5019, 9.2765, 7.8192, 6.912, 5.4398, 4.6541, 4.1045], maxRPM: this.maxRPM };
    this.transmission = new ye(c);
    const m = { powerCurve: $, maxRPM: this.maxRPM, topSpeed: h, power: i };
    this.engine = new ge(m);
    const u = { rotationRange: 0.28, autoCenterFactor: 12, autoCenter: true, speedFactor: 1.9, maxRPM: this.maxRPM }, g = this.getPart("SteeringWheel"), y = new pe();
    this.steeringWheel = new de(g, y, o, u), this.steeringWheel.textBEST.setText("--:--.---"), this.steeringWheel.textPOS.setText("P1");
    const d = this.getPart("BodyEngine");
    d.add(e.engine, e.turbo, e.crash), this.helmet = this.getPart("Helmet"), this.helmet.add(e.wind), this.object.add(this.helmet), this.cameras = [this.getPart("BodyCamera"), this.getPart("HelmetCamera")], this.cameras[1].position.y += 0.04, this.cameras[1].position.z -= 0.03;
    const p = this.getPart("ColliderBody");
    e.work.position.copy(p.position), p.removeFromParent(), this.object.traverse((f) => {
      f instanceof J && (f.receiveShadow = true);
    });
    const w = this.createChassisBody(p, { mass: this.options.mass });
    this.chassis = new me(w), this.chassis.body.shapes.forEach((f) => {
      f.collisionFilterGroup = 4, f.collisionFilterMask = -5;
    }), this.chassis.addWheel(this.createWheel(this.getPart("ColliderWheelFtL"), this.getPart("WheelFtL"), 1.34)), this.chassis.addWheel(this.createWheel(this.getPart("ColliderWheelFtR"), this.getPart("WheelFtR"), 1.34)), this.chassis.addWheel(this.createWheel(this.getPart("ColliderWheelBkL"), this.getPart("WheelBkL"), 1.34)), this.chassis.addWheel(this.createWheel(this.getPart("ColliderWheelBkR"), this.getPart("WheelBkR"), 1.34)), __privateGet(this, _t13).push(this.getPart("WheelFtLHub"), this.getPart("WheelFtRHub"));
    const Y = this.getPart("SuspensionFtL"), tt = this.getPart("SuspensionFtR");
    __privateGet(this, _e10).push(Y, tt), this.object.add(d);
    const [et, st, it, ot] = this.chassis.wheels, P = e.kerbs[0];
    et.object.add(P), P.setRefDistance(2), P.setLoop(true), P.setVolume(0), P.play();
    const R = e.kerbs[1];
    st.object.add(R), R.setRefDistance(2), R.setLoop(true), R.setVolume(0), R.play();
    const S = e.skids[0];
    it.object.add(S), S.setRefDistance(2), S.setLoop(true), S.setVolume(0), S.play();
    const W = e.skids[1];
    ot.object.add(W), W.setRefDistance(2), W.setLoop(true), W.setVolume(0), W.play();
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
    this.steeringWheel.textLAP.setText(`L${t.currentLap}`), this.steeringWheel.textBEST.setText(__privateMethod(this, _fe_instances, u_fn).call(this, t.bestLapTime));
  }
  get speed() {
    return this.chassis.body.velocity.length();
  }
  canSkid(t) {
    return t < 100 && !this.input.clutch && this.input.throttle;
  }
  isUpsideDown() {
    return this.chassis.body.quaternion.vmult(__privateGet(this, _r3), __privateGet(this, _n2)), __privateGet(this, _n2).y < 0.1;
  }
  downforce(t) {
    const s = this.options.downforceFactor;
    return 0.5 * 1.12 * Math.pow(t, 2) * s * 1.5;
  }
  update(t) {
    this.isUpsideDown() && __privateMethod(this, _fe_instances, d_fn).call(this), this.transmission.update(this.engine.rpm), this.engine.update(this.chassis.speed, this.transmission.ratio), this.steeringWheel.update(this.input.steering, t, this.engine.rpm), __privateMethod(this, _fe_instances, c_fn2).call(this, t), __privateMethod(this, _fe_instances, l_fn).call(this, false), __privateMethod(this, _fe_instances, h_fn2).call(this, this.speed), this.sound.update(this.engine.rpm, this.input.throttle);
  }
}
_t13 = new WeakMap();
_e10 = new WeakMap();
_s9 = new WeakMap();
_i5 = new WeakMap();
_o5 = new WeakMap();
_r3 = new WeakMap();
_n2 = new WeakMap();
_fe_instances = new WeakSet();
a_fn = function(t, e) {
  e.position.y = t.connectionWorld.y - 0.67 - t.position.y;
};
h_fn2 = function(t) {
  __privateGet(this, _s9).set(0, -this.downforce(t), 0), this.chassis.body.applyForce(__privateGet(this, _s9), l.ZERO), this.object.position.copy(this.chassis.body.position), this.object.quaternion.copy(this.chassis.body.quaternion);
  for (let e = 0; e < this.chassis.wheels.length; e++) this.chassis.updateWheelTransform(e), this.chassis.wheels[e].update();
  __privateMethod(this, _fe_instances, a_fn).call(this, this.chassis.wheels[0], __privateGet(this, _t13)[0]), __privateMethod(this, _fe_instances, a_fn).call(this, this.chassis.wheels[1], __privateGet(this, _t13)[1]);
};
c_fn2 = function(t) {
  this.steeringWheel.textGear.setText(this.transmission.gear + 1), this.steeringWheel.textKPH.setText(Math.abs(this.chassis.currentVehicleSpeedKmHour * 0.7).toFixed()), this.steeringWheel.textRPM.setText(this.engine.rpm.toFixed());
  const e = this.steeringWheel.steering;
  this.chassis.setSteering(e, 0), this.chassis.setSteering(e, 1), this.headRotation = Z(this.headRotation, e, t * 1.4), this.helmet.rotation.y = this.headRotation, this.helmet.rotation.z = -this.headRotation * 0.2, __privateGet(this, _t13)[0].rotation.y = e, __privateGet(this, _t13)[1].rotation.y = e;
};
l_fn = function(t) {
  const e = t ? 8800 : this.input.throttle, s = this.engine.power * e;
  this.chassis.applyEngineForce(-s, 2), this.chassis.applyEngineForce(-s, 3);
  const o = this.options.brake * this.input.brake;
  this.chassis.setBrake(o, 2), this.chassis.setBrake(o, 3);
};
d_fn = function() {
  this.resetRequested || (this.resetRequested = true, this.emit("reset", true));
};
u_fn = function(t) {
  const e = t / 1e3, s = Math.floor(e / 60), o = Math.floor(e % 60).toString(), n = Math.floor(t % 1e3).toString();
  return `${s}:${o.padStart(2, "0")}.${n.padStart(3, "0")}`;
};
class we extends M {
  constructor() {
    super(...arguments);
    __privateAdd(this, _t14, false);
  }
  get started() {
    return __privateGet(this, _t14);
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
    if (__privateGet(this, _t14)) throw "Unable to add vehicles after starting";
    this.object.add(t.object), t.chassis.wheels.forEach((e) => {
      this.object.add(e.object);
    }), this.vehicles.add(t), this.vehicleById.set(t.id, t), this.race.add(t.id);
  }
  removeVehicle(t) {
    this.vehicles.delete(t), this.race.remove(t.id), this.vehicleById.delete(t.id);
  }
  start() {
    __privateSet(this, _t14, true);
  }
  stop() {
    this.vehicles.forEach((t) => t.stop());
  }
  createPhysicBody(t, e) {
    const s = Nt(t);
    return new vt({ shape: s, material: e, mass: 0 });
  }
  createPhysicSurface(t) {
    const e = this.createPhysicMaterial(t.name);
    return { body: this.createPhysicBody(t, e), contact: this.createPhysicContactMaterial(e, t.material.userData) };
  }
  createPhysicMaterial(t) {
    return new Pt(t);
  }
  createPhysicContactMaterial(t, e) {
    return new $t(_.material, t, e);
  }
  isCircuitMesh(t) {
    return t instanceof Q;
  }
}
_t14 = new WeakMap();
class be extends we {
  constructor(t, e) {
    super(t);
    __privateAdd(this, _be_instances);
    __publicField(this, "surfaces");
    __privateAdd(this, _t15);
    __privateAdd(this, _e11);
    __privateAdd(this, _s10);
    __publicField(this, "positions");
    __publicField(this, "race");
    __publicField(this, "light");
    __publicField(this, "idealLine");
    __publicField(this, "vehicles");
    __publicField(this, "vehicleById");
    __privateAdd(this, _i6);
    __privateSet(this, _i6, []), this.surfaces = [], this.vehicleById = /* @__PURE__ */ new Map(), this.vehicles = new Dt(), __privateSet(this, _t15, new x(0, -1, 0)), __privateSet(this, _e11, new X()), this.getPart("FastLane").removeFromParent(), this.idealLine = new oe(this.getPart("Arrow"), e), console.log(this.idealLine.arrows), this.object.add(...this.idealLine.arrows);
    const s = this.getPart("Start");
    s.visible = false, this.positions = new he(s), this.light = new re(), t.traverse((h) => {
      this.isCircuitMesh(h) && (h.castShadow = true, h.receiveShadow = true, __privateMethod(this, _be_instances, n_fn).call(this, h) && this.surfaces.push(this.createPhysicSurface(h)), __privateMethod(this, _be_instances, a_fn2).call(this, h) && __privateGet(this, _i6).push(h));
    });
    const o = this.getPart("Physics"), n = this.getPart("PhysicsBarrier"), i = this.createPhysicMaterial("barrier");
    n.removeFromParent(), this.surfaces.push({ body: this.createPhysicBody(n, i), contact: this.createPhysicContactMaterial(i, { friction: 0.99, restitution: 0.01 }) }), __privateSet(this, _s10, new ne(n)), o.removeFromParent();
    const r = this.getPart("Checkpoints");
    r.visible = false, this.race = new ae(r), this.race.on("lap", (h) => {
      this.getVehicle(h.vehicleID).updateState(h), this.idealLine.reset();
    });
  }
  reset() {
    this.idealLine.reset(), this.vehicles.items.forEach((t, e) => {
      this.race.remove(t.id), this.race.add(t.id);
      const s = this.race.getState(t.id);
      t.updateState({ ...s, bestLapTime: 0 });
      const o = this.positions.starts[e];
      t.reset(o.position, o.quaternion);
    });
  }
  update(t) {
    this.started && __privateMethod(this, _be_instances, o_fn3).call(this, t);
  }
}
_t15 = new WeakMap();
_e11 = new WeakMap();
_s10 = new WeakMap();
_i6 = new WeakMap();
_be_instances = new WeakSet();
o_fn3 = function(t) {
  for (let e = 0; e < this.vehicles.size; e++) {
    const s = this.vehicles.items[e];
    s.update(t), this.race.update(s), this.idealLine.update(s.position), __privateGet(this, _s10).update(s);
    const o = s.chassis.wheels[0], n = __privateMethod(this, _be_instances, r_fn2).call(this, o.object.position);
    s.sound.handleKerb(s.speed, 0, n);
    const i = s.chassis.wheels[1], r = __privateMethod(this, _be_instances, r_fn2).call(this, i.object.position);
    s.sound.handleKerb(s.speed, 1, r);
  }
};
r_fn2 = function(t) {
  return __privateGet(this, _e11).set(t, __privateGet(this, _t15)), __privateGet(this, _e11).intersectObjects(__privateGet(this, _i6), false).length > 0;
};
n_fn = function(t) {
  return t.material.userData.friction;
};
a_fn2 = function(t) {
  return t.material.userData.key && t.material.userData.key === "KERB";
};
var xe = Object.getOwnPropertyDescriptor, ve = (a, t, e, s) => {
  for (var o = s > 1 ? void 0 : s ? xe(t, e) : t, n = a.length - 1, i; n >= 0; n--) (i = a[n]) && (o = i(o) || o);
  return o;
};
let U = class extends HTMLElement {
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
    __publicField(this, "http");
    __publicField(this, "ounah");
    __publicField(this, "redbull");
    __publicField(this, "start", () => {
      if (!this.circuit || !this.vehicle || !this.history) return;
      const a = this.circuit, t = this.vehicle;
      t.start(), a.reset(), t.quaternion.setFromEuler(0, -Math.PI, 0), a.start(), this.shortcut.on("ShiftLeft + KeyR", () => {
        this.history.isReplaying() ? this.history.clear() : this.history.startReplay();
      });
      const e = () => {
        requestAnimationFrame(e);
        const s = this.composer.clock.getDelta();
        this.world.fixedStep(1 / 100), a.update(s), this.composer.render(s);
      };
      e();
    });
    this.http = b(Mt), this.shortcut = b(kt), this.loader = b(Lt), this.history = b(Tt), this.composer = b(Ct), this.strategy = b(Vt), this.audioListener = b(It), this.world = b(At), this.ounah = new Audio("sounds/effects/ounah.mp3"), this.ounah.load(), this.redbull = new Audio("sounds/effects/red-bull-racing.wav"), this.redbull.load(), this.circuit = null, this.vehicle = null;
  }
  async connectedCallback() {
    const a = new Rt("S to start", 420), t = new St("images/cockpit.webp", 1e4, 1e3);
    this.appendChild(t), this.appendChild(a), console.log(this.strategy), this.strategy.enable();
    const e = () => {
      removeEventListener("mousemove", e), a.pulse();
    };
    addEventListener("mousemove", e);
    const s = this.shortcut.on("KeyS", async () => {
      s(), t.remove(), a.remove();
      const o = Wt("div", { id: "loader" });
      this.loader.progress.subscribe((h) => {
        o.appendChild(h);
      }), document.body.prepend(o), this.ounah.play(), await this.loadEnv("golden-gate-hills", "2k");
      const n = ["surfaces", "environment", "ads", "light", "checkpoint", "marshal", "start", "physics", "ai"], i = await this.loadCircuit("formula", "monaco", n);
      i.surfaces.forEach(({ body: h, contact: c }) => {
        this.world.addBody(h), this.world.addContactMaterial(c);
      }), this.composer.scene.add(i.object), this.circuit = i;
      const r = await this.loadVehicle("formula", "rb-20", this.strategy);
      this.shortcut.on("Digit1", () => {
        this.switchCamera(r.getCamera(0));
      }), this.shortcut.on("Digit2", () => {
        this.switchCamera(r.getCamera(1));
      }), this.switchCamera(r.getCamera(0)), i.addVehicle(r), r.chassis.addToWorld(this.world), this.vehicle = r, this.prepend(this.composer.renderer.domElement), this.start(), this.composer.resize(), this.addEventListener("resize", () => this.composer.resize()), r.on("reset", () => {
        i && i.reset(), r.quaternion.setFromEuler(0, -Math.PI, 0);
      }), this.shortcut.on("KeyR", () => {
        i && i.reset(), r.quaternion.setFromEuler(0, -Math.PI, 0);
      });
    });
    this.shortcut.enable();
  }
  switchCamera(a) {
    this.composer.camera !== a && (this.audioListener.removeFromParent(), a.add(this.audioListener), this.composer.setCamera(a));
  }
  async loadVehicle(a, t, e) {
    const s = await this.loader.loadModel(`vehicles/${a}/${t}.glb`), o = await this.loader.loadPositionalAudio(`sounds/${a}/high-on.wav`), n = await this.loader.loadPositionalAudio(`sounds/${a}/turbo.wav`), i = await this.loader.loadPositionalAudio(`sounds/${a}/wind.wav`), r = await this.loader.loadPositionalAudio(`sounds/${a}/skid.wav`), h = await this.loader.loadPositionalAudio(`sounds/${a}/kerb.wav`), c = await this.loader.loadPositionalAudio(`sounds/${a}/work.wav`), m = await this.loader.loadPositionalAudio(`sounds/${a}/crash.wav`), u = await this.loader.loadPositionalAudio(`sounds/${a}/traction.wav`), g = new le({ engine: o, crash: m, traction: u, turbo: n, wind: i, work: c, skid: r, kerb: h }, 12500, 420), y = await this.loader.loadFont("fonts/righteous-regular.json");
    return new fe(s.scene, g, e, y);
  }
  async loadCircuit(a, t, e) {
    const s = e.map((h) => `circuits/${a}/${t}/${h}.glb`), o = () => Et(s.map((h) => this.loader.loadModel(h))), n = new qt(), i = await o();
    n.add(...i.map((h) => h.scene));
    const r = await this.http.get(`circuits/${a}/${t}/ai-line.json`);
    return new be(n, r);
  }
  async loadEnv(a, t) {
    const e = `envs/${a}/${t}.hdr`, s = await this.loader.loadEnv(e);
    s.mapping = Ft, this.composer.scene.background = s, this.composer.scene.environment = s, this.composer.scene.environmentIntensity = 1.1;
  }
};
U = ve([Bt("app-root")], U);
export {
  U as AppElement
};
