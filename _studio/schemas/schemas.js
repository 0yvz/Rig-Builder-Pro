import cpu from "./cpu.js"
import memory from "./memory.js"
import motherboard from "./motherboard.js"
import gpu from "./gpu.js"
import harddrive from "./harddrive.js"
import psu from "./psu.js"
import cabinet from "./cabinet.js"
import cooling from "./cooling.js"
import soundcard from "./soundcard.js"
import network from "./network.js"

import build from "./build.js"

export default [
	motherboard,
	cpu,
	gpu,
	memory,
	harddrive,
	psu,
	cabinet,
	cooling,
	soundcard,
	network,
	build
]
