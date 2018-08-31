import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TemperatureData } from './temp_data';

/**
 * Simulate a server (https://github.com/angular/in-memory-web-api)
 */
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = [
      // Generated data for testing purposes.

      // HACK: Sample data because of https://github.com/angular/in-memory-web-api/issues/181
      // tslint:disable-next-line:max-line-length
      { timestamp: 1535621754, sensor: 39.173927307128906, cpu: 51.5, room: 25.0869870867048, id: 1 }, { timestamp: 1535621785, sensor: 39.051761627197266, cpu: 51.5, room: 24.825203486851283, id: 2 }, { timestamp: 1535621816, sensor: 39.0168571472168, cpu: 51.5, room: 24.750408172607422, id: 3 }, { timestamp: 1535621846, sensor: 39.22628402709961, cpu: 51.5, room: 25.199180058070592, id: 4 }, { timestamp: 1535621876, sensor: 39.208831787109375, cpu: 51.5, room: 25.16178240094866, id: 5 }, { timestamp: 1535621906, sensor: 39.208831787109375, cpu: 51.5, room: 25.16178240094866, id: 6 }, { timestamp: 1535621936, sensor: 39.26118850708008, cpu: 51.5, room: 25.273975372314453, id: 7 }, { timestamp: 1535621968, sensor: 39.47061538696289, cpu: 51.5, room: 25.722747257777623, id: 8 }, { timestamp: 1535621998, sensor: 39.40080642700195, cpu: 51.5, room: 25.573156629289898, id: 9 }, { timestamp: 1535622028, sensor: 39.330997467041016, cpu: 51.5, room: 25.423566000802175, id: 10 }, { timestamp: 1535622058, sensor: 39.50551986694336, cpu: 50.5, room: 26.940399714878627, id: 11 }, { timestamp: 1535622088, sensor: 39.208831787109375, cpu: 51.5, room: 25.16178240094866, id: 12 }, { timestamp: 1535622119, sensor: 39.47061538696289, cpu: 51.5, room: 25.722747257777623, id: 13 }, { timestamp: 1535622149, sensor: 39.243736267089844, cpu: 51.5, room: 25.236577715192524, id: 14 }, { timestamp: 1535622179, sensor: 39.051761627197266, cpu: 51.5, room: 24.825203486851283, id: 15 }, { timestamp: 1535622209, sensor: 39.29609298706055, cpu: 51.5, room: 25.348770686558314, id: 16 }, { timestamp: 1535622240, sensor: 39.086666107177734, cpu: 51, room: 25.471427372523717, id: 17 }, { timestamp: 1535622270, sensor: 39.10411834716797, cpu: 50.5, room: 26.08025360107422, id: 18 }, { timestamp: 1535622301, sensor: 39.173927307128906, cpu: 51, room: 25.65841565813337, id: 19 }, { timestamp: 1535622331, sensor: 39.38335418701172, cpu: 51.5, room: 25.53575897216797, id: 20 }, { timestamp: 1535622361, sensor: 39.208831787109375, cpu: 51.5, room: 25.16178240094866, id: 21 }, { timestamp: 1535622391, sensor: 39.208831787109375, cpu: 50.5, room: 26.304639543805806, id: 22 }, { timestamp: 1535622421, sensor: 39.173927307128906, cpu: 51, room: 25.65841565813337, id: 23 }, { timestamp: 1535622452, sensor: 39.365901947021484, cpu: 51.5, room: 25.49836131504604, id: 24 }, { timestamp: 1535622482, sensor: 39.22628402709961, cpu: 51.5, room: 25.199180058070592, id: 25 }, { timestamp: 1535622512, sensor: 39.243736267089844, cpu: 51.5, room: 25.236577715192524, id: 26 }, { timestamp: 1535622542, sensor: 39.243736267089844, cpu: 50.5, room: 26.379434858049663, id: 27 }, { timestamp: 1535622572, sensor: 39.365901947021484, cpu: 51.5, room: 25.49836131504604, id: 28 }, { timestamp: 1535622602, sensor: 39.522972106933594, cpu: 51.5, room: 25.834940229143413, id: 29 }, { timestamp: 1535622633, sensor: 39.41825866699219, cpu: 51.5, room: 25.61055428641183, id: 30 }, { timestamp: 1535622663, sensor: 39.40080642700195, cpu: 50.5, room: 26.716013772147043, id: 31 }, { timestamp: 1535622693, sensor: 39.34844970703125, cpu: 51.5, room: 25.460963657924108, id: 32 }, { timestamp: 1535622723, sensor: 39.29609298706055, cpu: 51.5, room: 25.348770686558314, id: 33 }, { timestamp: 1535622753, sensor: 39.31354522705078, cpu: 51, room: 25.957596915108816, id: 34 }, { timestamp: 1535622784, sensor: 39.55787658691406, cpu: 51.5, room: 25.909735543387278, id: 35 }, { timestamp: 1535622814, sensor: 39.47061538696289, cpu: 51.5, room: 25.722747257777623, id: 36 }, { timestamp: 1535622844, sensor: 39.47061538696289, cpu: 51.5, room: 25.722747257777623, id: 37 }, { timestamp: 1535622874, sensor: 39.34844970703125, cpu: 51.5, room: 25.460963657924108, id: 38 }, { timestamp: 1535622904, sensor: 39.34844970703125, cpu: 51.5, room: 25.460963657924108, id: 39 }, { timestamp: 1535622934, sensor: 39.13902282714844, cpu: 51.5, room: 25.012191772460938, id: 40 }, { timestamp: 1535622964, sensor: 39.173927307128906, cpu: 51.5, room: 25.0869870867048, id: 41 }, { timestamp: 1535622994, sensor: 39.13902282714844, cpu: 50.5, room: 26.15504891531808, id: 42 }, { timestamp: 1535623025, sensor: 39.13902282714844, cpu: 51, room: 25.583620343889507, id: 43 }, { timestamp: 1535623055, sensor: 39.173927307128906, cpu: 50.5, room: 26.22984422956194, id: 44 }, { timestamp: 1535623085, sensor: 39.27864074707031, cpu: 51, room: 25.882801600864955, id: 45 }, { timestamp: 1535623115, sensor: 39.26118850708008, cpu: 50.5, room: 26.416832515171595, id: 46 }, { timestamp: 1535623145, sensor: 39.26118850708008, cpu: 50.5, room: 26.416832515171595, id: 47 }, { timestamp: 1535623175, sensor: 39.365901947021484, cpu: 51, room: 26.06978988647461, id: 48 }, { timestamp: 1535623205, sensor: 39.27864074707031, cpu: 51.5, room: 25.311373029436382, id: 49 }, { timestamp: 1535623236, sensor: 39.330997467041016, cpu: 51.5, room: 25.423566000802175, id: 50 }, { timestamp: 1535623266, sensor: 39.27864074707031, cpu: 50.5, room: 26.454230172293528, id: 51 }, { timestamp: 1535623296, sensor: 39.173927307128906, cpu: 51, room: 25.65841565813337, id: 52 }, { timestamp: 1535623327, sensor: 39.27864074707031, cpu: 51.5, room: 25.311373029436382, id: 53 }, { timestamp: 1535623357, sensor: 39.243736267089844, cpu: 51.5, room: 25.236577715192524, id: 54 }, { timestamp: 1535623387, sensor: 39.22628402709961, cpu: 51, room: 25.770608629499165, id: 55 }, { timestamp: 1535623417, sensor: 39.208831787109375, cpu: 51.5, room: 25.16178240094866, id: 56 }, { timestamp: 1535623447, sensor: 39.10411834716797, cpu: 51.5, room: 24.937396458217076, id: 57 }, { timestamp: 1535623477, sensor: 38.964500427246094, cpu: 51.5, room: 24.63821520124163, id: 58 }, { timestamp: 1535623507, sensor: 39.10411834716797, cpu: 51, room: 25.50882502964565, id: 59 }, { timestamp: 1535623537, sensor: 39.173927307128906, cpu: 51.5, room: 25.0869870867048, id: 60 }, { timestamp: 1535623568, sensor: 39.208831787109375, cpu: 50.5, room: 26.304639543805806, id: 61 }, { timestamp: 1535623598, sensor: 39.15647506713867, cpu: 50.5, room: 26.192446572440012, id: 62 }, { timestamp: 1535623628, sensor: 39.086666107177734, cpu: 50.5, room: 26.04285594395229, id: 63 }, { timestamp: 1535623658, sensor: 39.10411834716797, cpu: 50.5, room: 26.08025360107422, id: 64 }, { timestamp: 1535623688, sensor: 39.31354522705078, cpu: 50.5, room: 26.52902548653739, id: 65 }, { timestamp: 1535623718, sensor: 39.34844970703125, cpu: 49.9, room: 27.289535086495537, id: 66 }, { timestamp: 1535623748, sensor: 39.31354522705078, cpu: 50.5, room: 26.52902548653739, id: 67 }, { timestamp: 1535623779, sensor: 39.208831787109375, cpu: 49.9, room: 26.99035382952009, id: 68 }, { timestamp: 1535623809, sensor: 39.15647506713867, cpu: 49.4, room: 27.449589429582872, id: 69 }, { timestamp: 1535623839, sensor: 39.0692138671875, cpu: 49.9, room: 26.691172572544644, id: 70 }, { timestamp: 1535623869, sensor: 38.912139892578125, cpu: 50.5, room: 25.668871198381694, id: 71 }, { timestamp: 1535623899, sensor: 38.85978698730469, cpu: 49.9, room: 26.242400687081474, id: 72 }, { timestamp: 1535623929, sensor: 38.929595947265625, cpu: 49.4, room: 26.96341988699777, id: 73 }, { timestamp: 1535623959, sensor: 38.75507354736328, cpu: 49.4, room: 26.58944331577846, id: 74 }, { timestamp: 1535623990, sensor: 38.94704818725586, cpu: 49.4, room: 27.0008175441197, id: 75 }, { timestamp: 1535624020, sensor: 38.99940490722656, cpu: 49.9, room: 26.541581944056922, id: 76 }, { timestamp: 1535624050, sensor: 39.051761627197266, cpu: 49.4, room: 27.225203486851285, id: 77 }, { timestamp: 1535624080, sensor: 39.0692138671875, cpu: 49.4, room: 27.262601143973214, id: 78 }, { timestamp: 1535624110, sensor: 38.99940490722656, cpu: 49.4, room: 27.11301051548549, id: 79 }, { timestamp: 1535624140, sensor: 38.94704818725586, cpu: 49.4, room: 27.0008175441197, id: 80 }, { timestamp: 1535624171, sensor: 39.0168571472168, cpu: 49.9, room: 26.57897960117885, id: 81 }, { timestamp: 1535624172, cpu: 50.73190137658662, sensor: 37.55110961305503, room: 28.73405251035649, id: 82 }, { timestamp: 1535624202, cpu: 52.36771618861547, sensor: 35.815102284582, room: 22.627569365248142, id: 83 }, { timestamp: 1535624232, cpu: 49.698283048949776, sensor: 39.455778241292734, room: 24.34932325956147, id: 84 }, { timestamp: 1535624262, cpu: 53.08063807180827, sensor: 42.60169596419005, room: 28.529668671351388, id: 85 }, { timestamp: 1535624292, cpu: 48.84660061473155, sensor: 38.54223401141555, room: 31.44372337569098, id: 86 }, { timestamp: 1535624322, cpu: 45.130159111851, sensor: 34.38801523697087, room: 27.38300638332221, id: 87 }, { timestamp: 1535624352, cpu: 44.9375742512345, sensor: 34.71989674322381, room: 24.748517708191525, id: 88 }, { timestamp: 1535624382, cpu: 47.63938296976776, sensor: 37.81458446263787, room: 23.49496759582786, id: 89 }, { timestamp: 1535624412, cpu: 45.98406344081705, sensor: 43.86879226083398, room: 25.921216659831607, id: 90 }, { timestamp: 1535624442, cpu: 49.577999162005874, sensor: 41.348276548042705, room: 29.947069886530294, id: 91 }, { timestamp: 1535624472, cpu: 50.13585669286175, sensor: 43.491555204291956, room: 22.20047441994057, id: 92 }, { timestamp: 1535624502, cpu: 45.40296211040406, sensor: 36.57563661390564, room: 22.33099491347988, id: 93 }, { timestamp: 1535624532, cpu: 48.003044636879146, sensor: 38.43893608280106, room: 21.810518783815283, id: 94 }, { timestamp: 1535624562, cpu: 49.58272349205832, sensor: 37.49566007170334, room: 29.430688910169167, id: 95 }, { timestamp: 1535624592, cpu: 45.95226268478694, sensor: 39.839840247855946, room: 24.202168965824196, id: 96 }, { timestamp: 1535624622, cpu: 49.629958457327774, sensor: 35.36901940055151, room: 31.4484033181012, id: 97 }, { timestamp: 1535624652, cpu: 46.779254242973174, sensor: 38.12922144000088, room: 26.596040429630342, id: 98 }, { timestamp: 1535624682, cpu: 49.52662769420252, sensor: 40.08610651672156, room: 24.539050027577535, id: 99 }, { timestamp: 1535624712, cpu: 50.62576417840487, sensor: 43.64440134256338, room: 30.22626823201889, id: 100 }, { timestamp: 1535624713, cpu: 50.34313734001234, sensor: 47.21998948595499, room: 33.01351061283677, id: 101 }, { timestamp: 1535624743, cpu: 53.549624281289894, sensor: 38.92365387262396, room: 30.67858020777743, id: 102 }, { timestamp: 1535624773, cpu: 53.27880951643226, sensor: 48.01107786346749, room: 35.05419118041267, id: 103 }, { timestamp: 1535624803, cpu: 50.06001546832673, sensor: 39.20016272589105, room: 30.783555000320632, id: 104 }, { timestamp: 1535624833, cpu: 48.31781314062507, sensor: 40.29754710812602, room: 34.06772560007484, id: 105 }, { timestamp: 1535624863, cpu: 50.97803824458626, sensor: 43.026623249807606, room: 30.94878663601518, id: 106 }, { timestamp: 1535624893, cpu: 45.86966862368418, sensor: 48.54604469881812, room: 29.773590752740475, id: 107 }, { timestamp: 1535624923, cpu: 54.11347828322609, sensor: 45.03779434027632, room: 26.52633788640324, id: 108 }, { timestamp: 1535624953, cpu: 48.352811119267095, sensor: 42.79051864869368, room: 28.343372199444588, id: 109 }, { timestamp: 1535624983, cpu: 46.508343520446125, sensor: 47.54656987572534, room: 29.759661424520033, id: 110 }, { timestamp: 1535625013, cpu: 54.087909336757185, sensor: 48.51663607371709, room: 28.039912497546915, id: 111 }, { timestamp: 1535625043, cpu: 47.14489716306188, sensor: 43.97770793689348, room: 28.73957460060273, id: 112 }, { timestamp: 1535625073, cpu: 51.992015812718684, sensor: 45.42821758685105, room: 34.56170399069622, id: 113 }, { timestamp: 1535625103, cpu: 48.456717753675015, sensor: 43.50085174662072, room: 32.11127644641557, id: 114 }, { timestamp: 1535625133, cpu: 50.683566156977854, sensor: 46.56260210844338, room: 29.720391647049468, id: 115 }, { timestamp: 1535625163, cpu: 49.992117695195006, sensor: 45.394369519229286, room: 28.828980541960206, id: 116 }, { timestamp: 1535625193, cpu: 54.66393141873107, sensor: 42.981954260607296, room: 27.269777971135177, id: 117 }, { timestamp: 1535625223, cpu: 53.077327042286754, sensor: 46.5477605516972, room: 27.239434442742954, id: 118 }, { timestamp: 1535625253, cpu: 53.5238375641851, sensor: 42.219412633523014, room: 34.75604787256577, id: 119 }, { timestamp: 1535625283, cpu: 51.74063809544706, sensor: 46.66607682146841, room: 33.27403595514545, id: 120 }, { timestamp: 1535625313, cpu: 51.4130623156674, sensor: 40.174983789132284, room: 28.32732177062838, id: 121 }, { timestamp: 1535625343, cpu: 51.03977966929688, sensor: 43.580144836232336, room: 28.74537484144598, id: 122 }, { timestamp: 1535625373, cpu: 51.33795783267497, sensor: 47.81866327612359, room: 34.48479623431631, id: 123 }, { timestamp: 1535625403, cpu: 53.097796797154686, sensor: 42.49318108026858, room: 29.447243619135726, id: 124 }, { timestamp: 1535625433, cpu: 55.18001196254017, sensor: 46.85142485480336, room: 29.68798296432348, id: 125 }, { timestamp: 1535625463, cpu: 52.5872589823779, sensor: 38.81533452742924, room: 31.98409242214327, id: 126 }, { timestamp: 1535625493, cpu: 53.494785634643996, sensor: 45.73742734337564, room: 30.257868898768237, id: 127 }, { timestamp: 1535625523, cpu: 51.68874887176045, sensor: 41.40197990995267, room: 30.17119781261546, id: 128 }, { timestamp: 1535625553, cpu: 47.49829300108469, sensor: 41.67542490432515, room: 31.088067211694685, id: 129 }, { timestamp: 1535625583, cpu: 47.922401401653225, sensor: 41.46083152131399, room: 27.53108233536404, id: 130 }, { timestamp: 1535625613, cpu: 49.49834836639732, sensor: 44.1411731146299, room: 32.96595918655581, id: 131 }, { timestamp: 1535625643, cpu: 50.478178596519356, sensor: 46.56336349962123, room: 33.563891716870366, id: 132 }, { timestamp: 1535625673, cpu: 46.032042518673364, sensor: 41.033591393967065, room: 30.74321651137197, id: 133 }, { timestamp: 1535625703, cpu: 48.89708404163783, sensor: 39.916577082199936, room: 29.540386395373517, id: 134 }, { timestamp: 1535625733, cpu: 49.440028172085334, sensor: 46.078241566541195, room: 29.316905130039636, id: 135 }, { timestamp: 1535625763, cpu: 53.09034362732207, sensor: 46.63727397553992, room: 28.676704634725446, id: 136 }, { timestamp: 1535625793, cpu: 50.06697053011886, sensor: 41.782642853081875, room: 31.401026605540586, id: 137 }, { timestamp: 1535625823, cpu: 51.22878288544835, sensor: 39.88182617015438, room: 32.36788705636099, id: 138 }, { timestamp: 1535625853, cpu: 55.59648925916045, sensor: 39.70374419898831, room: 28.846479398872518, id: 139 }, { timestamp: 1535625883, cpu: 46.11180416753896, sensor: 41.384762520360276, room: 32.26536046841824, id: 140 }, { timestamp: 1535625913, cpu: 51.978468577874594, sensor: 44.588592088147976, room: 25.702156591100803, id: 141 }, { timestamp: 1535625943, cpu: 51.57386440389214, sensor: 40.55962811827518, room: 31.983885413905178, id: 142 }, { timestamp: 1535625973, cpu: 54.76601839066388, sensor: 44.40982552376505, room: 32.92203595417365, id: 143 }, { timestamp: 1535626003, cpu: 49.58560091340536, sensor: 40.191934061877824, room: 26.13440337177998, id: 144 }, { timestamp: 1535626033, cpu: 54.22098928296509, sensor: 43.351426289998265, room: 32.02211301302572, id: 145 }, { timestamp: 1535626063, cpu: 52.34929379124151, sensor: 41.74752477002946, room: 27.0740498945205, id: 146 }, { timestamp: 1535626093, cpu: 48.17713708242198, sensor: 43.10379443526163, room: 30.833412585763725, id: 147 }, { timestamp: 1535626123, cpu: 47.116056690221846, sensor: 42.04648274437021, room: 26.278337787310345, id: 148 }, { timestamp: 1535626153, cpu: 53.19987394610353, sensor: 40.5869398979757, room: 35.06212368286448, id: 149 }, { timestamp: 1535626183, cpu: 46.77039114388213, sensor: 41.489306733537916, room: 25.900115042405144, id: 150 }, { timestamp: 1535626213, cpu: 52.85826710912933, sensor: 42.235022326044124, room: 30.70215368129903, id: 151 }, { timestamp: 1535626243, cpu: 51.5150745937176, sensor: 47.031362887782066, room: 33.18176872818158, id: 152 }, { timestamp: 1535626273, cpu: 52.86783314805842, sensor: 43.0343758270001, room: 34.48972969184763, id: 153 }, { timestamp: 1535626303, cpu: 54.308017968195585, sensor: 40.78441033832247, room: 26.15024599375249, id: 154 }, { timestamp: 1535626333, cpu: 51.92422304418043, sensor: 45.90103652259556, room: 25.541433896415835, id: 155 }, { timestamp: 1535626363, cpu: 46.68708904690432, sensor: 39.30846145321001, room: 31.17756117169243, id: 156 }, { timestamp: 1535626393, cpu: 52.905065987183036, sensor: 40.50249273842773, room: 31.817102003723882, id: 157 }, { timestamp: 1535626423, cpu: 51.45633102585701, sensor: 45.30111388827457, room: 29.5281039922207, id: 158 }, { timestamp: 1535626453, cpu: 46.30912764904441, sensor: 46.70260737616, room: 25.500346575819552, id: 159 }, { timestamp: 1535626483, cpu: 52.3443240313631, sensor: 46.29869022526983, room: 26.775817418165236, id: 160 }, { timestamp: 1535626513, cpu: 46.01760706747785, sensor: 46.15415250653046, room: 25.991701138234788, id: 161 }, { timestamp: 1535626543, cpu: 49.5861325875629, sensor: 41.168070710199714, room: 25.412183870665785, id: 162 }, { timestamp: 1535626573, cpu: 53.81068953463621, sensor: 47.90991935819612, room: 26.421151692401693, id: 163 }, { timestamp: 1535626603, cpu: 50.76602305635481, sensor: 39.08766246084511, room: 34.05149597200796, id: 164 }, { timestamp: 1535626633, cpu: 48.599298589395076, sensor: 48.370077573432724, room: 28.578272982501367, id: 165 }, { timestamp: 1535626663, cpu: 49.11811713854569, sensor: 44.815001806900455, room: 27.19563531764001, id: 166 }, { timestamp: 1535626693, cpu: 52.592536702563756, sensor: 44.103569686818155, room: 29.830894440624604, id: 167 }, { timestamp: 1535626723, cpu: 54.98214697511522, sensor: 44.584759705985185, room: 31.339465959406567, id: 168 }, { timestamp: 1535626753, cpu: 45.79890497067403, sensor: 43.748543674614325, room: 30.72516737066782, id: 169 }, { timestamp: 1535626783, cpu: 53.7454447530296, sensor: 47.65227740986663, room: 34.91305308731151, id: 170 }, { timestamp: 1535626813, cpu: 51.59875820342645, sensor: 46.03010784947368, room: 32.983769658174126, id: 171 }, { timestamp: 1535626843, cpu: 49.940357154169746, sensor: 42.07763864550216, room: 32.89987494091676, id: 172 }, { timestamp: 1535626873, cpu: 51.947074389354256, sensor: 45.712571633797204, room: 27.646000372686515, id: 173 }, { timestamp: 1535626903, cpu: 48.86086130942933, sensor: 40.17377448967724, room: 33.66959524133887, id: 174 }, { timestamp: 1535626933, cpu: 53.49831121856547, sensor: 46.74461485932469, room: 28.260960384780574, id: 175 }, { timestamp: 1535626963, cpu: 53.35757533770267, sensor: 48.511122363092554, room: 28.91552373570515, id: 176 }, { timestamp: 1535626993, cpu: 47.80579382219104, sensor: 40.73579687435159, room: 27.91680321079302, id: 177 }, { timestamp: 1535627023, cpu: 54.934452346175334, sensor: 46.40116269245216, room: 29.435033794325825, id: 178 }, { timestamp: 1535627053, cpu: 53.23234101898314, sensor: 43.59667394574658, room: 31.711655454687644, id: 179 }, { timestamp: 1535627083, cpu: 47.684279965248535, sensor: 41.76275513430865, room: 32.54014632003283, id: 180 }, { timestamp: 1535627113, cpu: 54.02004073967395, sensor: 44.07745477155534, room: 28.244642261734562, id: 181 }, { timestamp: 1535627143, cpu: 51.43295272332262, sensor: 47.79476885167122, room: 33.11618343056578, id: 182 }, { timestamp: 1535627173, cpu: 55.61425615697283, sensor: 41.593931099877125, room: 34.2507658363219, id: 183 }, { timestamp: 1535627203, cpu: 46.10063496128802, sensor: 43.08609155799267, room: 33.118640398121855, id: 184 }, { timestamp: 1535627233, cpu: 54.833988452199776, sensor: 40.449563850697615, room: 32.325306500133436, id: 185 }, { timestamp: 1535627263, cpu: 49.48059487626501, sensor: 44.626100320053176, room: 28.34165864446981, id: 186 }, { timestamp: 1535627293, cpu: 46.96753201467293, sensor: 45.54906522426891, room: 28.295352786797814, id: 187 }, { timestamp: 1535627323, cpu: 52.832820646897034, sensor: 45.255196653057766, room: 32.51046927669371, id: 188 }, { timestamp: 1535627353, cpu: 54.67588917841292, sensor: 38.67035952513763, room: 33.90415759731616, id: 189 }, { timestamp: 1535627383, cpu: 45.80509469843976, sensor: 47.9174669973516, room: 30.54716817360955, id: 190 }, { timestamp: 1535627413, cpu: 50.3293635699058, sensor: 43.51050021045101, room: 33.95848120368997, id: 191 }, { timestamp: 1535627443, cpu: 49.92656106168511, sensor: 44.36045410155321, room: 33.880180309352305, id: 192 }, { timestamp: 1535627473, cpu: 51.000238405347766, sensor: 42.18182532281567, room: 34.71490226536882, id: 193 }, { timestamp: 1535627503, cpu: 52.25289565315473, sensor: 43.82534023141211, room: 26.18870290254467, id: 194 }, { timestamp: 1535627533, cpu: 47.2504373126994, sensor: 38.79808592714481, room: 32.01040608028825, id: 195 }, { timestamp: 1535627563, cpu: 49.45594884692512, sensor: 40.49690358626966, room: 32.478648134628784, id: 196 }, { timestamp: 1535627593, cpu: 53.3994893393118, sensor: 41.95860711672912, room: 28.75230834563918, id: 197 }, { timestamp: 1535627623, cpu: 48.401967633701226, sensor: 40.997226947027215, room: 28.166031454035668, id: 198 }, { timestamp: 1535627653, cpu: 45.76434127748023, sensor: 44.25490801005005, room: 29.4258742656109, id: 199 }, { timestamp: 1535627683, cpu: 53.500682089459936, sensor: 44.2289985912165, room: 25.552015094269834, id: 200 }, { timestamp: 1535627684, cpu: 53.83439651993561, sensor: 41.96041634796971, room: 22.51046285138696, id: 201 }, { timestamp: 1535627714, cpu: 54.36276086287194, sensor: 47.120388415080434, room: 20.995773565359777, id: 202 }, { timestamp: 1535627744, cpu: 53.556881818043934, sensor: 49.14129574911185, room: 23.291131285750065, id: 203 }, { timestamp: 1535627774, cpu: 54.73171364937362, sensor: 48.46980998376749, room: 29.058728670145584, id: 204 }, { timestamp: 1535627804, cpu: 52.697411176204824, sensor: 46.83250320297404, room: 29.745540843139786, id: 205 }, { timestamp: 1535627834, cpu: 56.29103016531636, sensor: 47.87414804103936, room: 23.217327442546498, id: 206 }, { timestamp: 1535627864, cpu: 49.403789972767505, sensor: 44.13224851109062, room: 28.571398760302692, id: 207 }, { timestamp: 1535627894, cpu: 49.75941037980724, sensor: 48.40773678155049, room: 28.192704693925947, id: 208 }, { timestamp: 1535627924, cpu: 54.614241965678765, sensor: 43.69900678033162, room: 21.884402195433342, id: 209 }, { timestamp: 1535627954, cpu: 49.61215111891049, sensor: 39.54836382790339, room: 26.33531957851841, id: 210 }, { timestamp: 1535627984, cpu: 49.494685577763, sensor: 40.36083992160263, room: 25.635286935690637, id: 211 }, { timestamp: 1535628014, cpu: 57.761251333063555, sensor: 39.613640904098, room: 27.140045456845534, id: 212 }, { timestamp: 1535628044, cpu: 53.30310563947158, sensor: 41.20878905446293, room: 28.68104014301221, id: 213 }, { timestamp: 1535628074, cpu: 57.231557144542165, sensor: 41.82665457965911, room: 24.799111887111923, id: 214 }, { timestamp: 1535628104, cpu: 52.20080286545318, sensor: 44.441593668897724, room: 30.260424802682564, id: 215 }, { timestamp: 1535628134, cpu: 57.68175418565454, sensor: 45.14295614824784, room: 24.84444807488544, id: 216 }, { timestamp: 1535628164, cpu: 50.79878998958856, sensor: 46.55407556029323, room: 25.93649606516882, id: 217 }, { timestamp: 1535628194, cpu: 55.46718013784986, sensor: 39.7392046193401, room: 27.351024889111407, id: 218 }, { timestamp: 1535628224, cpu: 58.20923968207288, sensor: 45.18177367222965, room: 27.482882431264187, id: 219 }, { timestamp: 1535628254, cpu: 55.94706616596291, sensor: 41.925497542155284, room: 24.42475160922511, id: 220 }, { timestamp: 1535628284, cpu: 57.45221019980493, sensor: 39.75176865453368, room: 21.592106647429222, id: 221 }, { timestamp: 1535628314, cpu: 53.39052027747249, sensor: 47.645309760719186, room: 22.80077836711107, id: 222 }, { timestamp: 1535628344, cpu: 51.69022787553224, sensor: 48.3963464992893, room: 20.76470312687235, id: 223 }, { timestamp: 1535628374, cpu: 48.63769898290048, sensor: 42.38052108338243, room: 21.515812921262096, id: 224 }, { timestamp: 1535628404, cpu: 57.286931371081025, sensor: 42.671441219601014, room: 28.292465521595005, id: 225 }, { timestamp: 1535628434, cpu: 50.71803008119585, sensor: 39.99151590707544, room: 21.640597086315402, id: 226 }, { timestamp: 1535628464, cpu: 53.7754660833707, sensor: 47.230627265604284, room: 28.047954702484283, id: 227 }, { timestamp: 1535628494, cpu: 58.453163407691235, sensor: 43.321713212943386, room: 29.22190133946019, id: 228 }, { timestamp: 1535628524, cpu: 49.107371122954746, sensor: 45.84437092382298, room: 29.302793191281275, id: 229 }, { timestamp: 1535628554, cpu: 56.29347948208502, sensor: 42.46301015617927, room: 21.60062268771528, id: 230 }, { timestamp: 1535628584, cpu: 51.725351232063964, sensor: 42.36236427585576, room: 22.807636983019574, id: 231 }, { timestamp: 1535628614, cpu: 56.96590788089956, sensor: 39.635171526773256, room: 21.973603070111977, id: 232 }, { timestamp: 1535628644, cpu: 53.86757080810528, sensor: 43.4574796769442, room: 29.814536403666338, id: 233 }, { timestamp: 1535628674, cpu: 51.708578973503364, sensor: 40.159981657201726, room: 27.823787798841117, id: 234 }, { timestamp: 1535628704, cpu: 57.52082422671822, sensor: 45.00634883191004, room: 29.358985590079115, id: 235 }, { timestamp: 1535628734, cpu: 56.546719643139056, sensor: 40.08661198980196, room: 28.076615602467193, id: 236 }, { timestamp: 1535628764, cpu: 53.96210980728928, sensor: 41.68119142152614, room: 25.94397482517636, id: 237 }, { timestamp: 1535628794, cpu: 53.15788125692288, sensor: 43.46748309742012, room: 21.842947774498935, id: 238 }, { timestamp: 1535628824, cpu: 56.32610873381927, sensor: 43.36605526174355, room: 22.230704177066062, id: 239 }, { timestamp: 1535628854, cpu: 55.39924848452875, sensor: 43.33079468210384, room: 25.525624886075647, id: 240 }, { timestamp: 1535628884, cpu: 53.98465817241117, sensor: 41.20495545553843, room: 23.02787941100399, id: 241 }, { timestamp: 1535628914, cpu: 51.684794713210295, sensor: 42.830955094047134, room: 29.95371310316156, id: 242 }, { timestamp: 1535628944, cpu: 55.29912217483332, sensor: 47.823195501928396, room: 27.760794767791623, id: 243 }, { timestamp: 1535628974, cpu: 52.462497219937504, sensor: 45.13237034671231, room: 28.851301768164305, id: 244 }, { timestamp: 1535629004, cpu: 51.18009343299707, sensor: 39.60653749163781, room: 27.67942757084576, id: 245 }, { timestamp: 1535629034, cpu: 52.33085365782395, sensor: 41.36395319439375, room: 24.9271116356432, id: 246 }, { timestamp: 1535629064, cpu: 51.55389535990725, sensor: 48.70832123416141, room: 27.039445453321335, id: 247 }, { timestamp: 1535629094, cpu: 55.386612386463575, sensor: 43.37597967635621, room: 25.511863906767935, id: 248 }, { timestamp: 1535629124, cpu: 49.781531126996335, sensor: 45.528032982510766, room: 30.24093669445871, id: 249 }, { timestamp: 1535629154, cpu: 56.3547497254198, sensor: 47.300718777189786, room: 20.964031708106145, id: 250 }
    ];

    return { data };
  }
}
