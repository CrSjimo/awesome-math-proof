var {mathProof} = require('../');
var test1 = '∴ ∴ ∴ ∴ ∴ ∴ ∴ ∴ ∴ ∴ ∴ ∴ ∴ ∴ ∴  ∴  ∴ ∴ ∴  ∴djkxnxks ∴ ∴ ∴  ∴ ∴ ∴jsjdbxb≥≪≧≧≦≧≦≧≦≫<≫≫≤≦∼-∼∼-≧∃∴∴∴∟∩∥∟';
var test2 = `
∵AB = AC,
∴ ∠ABC = ∠ADC,
∵AD ⊥ BC,
∴D为BC中点.
`;
console.log(mathProof(test1));
console.log(mathProof(test2));
