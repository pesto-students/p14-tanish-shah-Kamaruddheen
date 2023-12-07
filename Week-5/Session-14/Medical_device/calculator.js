// Add click event listener to radio buttons
document.querySelectorAll('input[type="radio"]').forEach((input) => {
  input.addEventListener("click", updateScore);
});

// Get base score value from matrices
function getBaseValue(value, matrix) {
  // Define position matrix
  let position = [
    ["NN", "NL", "NH"],
    ["LN", "LL", "LH"],
    ["HN", "HL", "HH"],
  ];

  // Loop through matrix to find match and return base value
  for (let i = 0; i < position.length; i++) {
    for (let j = 0; j < position.length; j++) {
      // If match found, return base value
      if (value === position[i][j]) {
        return matrix[i][j];
      }
    }
  }

  // If no match, return 0
  return 0;
}

// Calculate score when radio input clicked
function updateScore() {
  // Storing all radio properties
  const property = new Object();

  // Stores all radio buttons have a checked
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    if (input.checked) {
      property[input.name] = 1;
    } else {
      // Stores 0 if field has not checked any value
      if (property[input.name] !== 1) {
        property[input.name] = 0;
      }
    }
  });

  // Checks if all the field has been entered
  for (const value of Object.values(property)) {
    if (!value) {
      // Show warning
      return console.log("Select all the radio button to calculate score");
    }
  }
  // Hide warning since all checked
  document.getElementById("warning").classList = "none";

  // * Calculate score
  let selectedInputs = []; // storing all selected options from user
  // Get all selected radio buttons
  document.querySelectorAll('input[type="radio"]').forEach((conf) => {
    if (conf.checked) selectedInputs.push(conf);
  });

  // Display list of all selected input fields for debugging
  console.log(selectedInputs);

  // Initialize score variable
  let score = 0.0;

  // Initialize score for sub-variables
  let score_exploitability = 1.1;
  let score_base = 3.326258289;
  let score_status = 0;

  // Initialize Base score values
  let baseConfidentialityMatrix = [
    [0.0, 0.22, 0.56],
    [0.0, 0.65, 0.75],
    [0.0, 0.85, 0.95],
  ];

  let baseIntegrityMatrix = [
    [0.0, 0.22, 0.56],
    [0.55, 0.6, 0.75],
    [0.85, 0.9, 0.95],
  ];

  let baseAvailabilityMatrix = [
    [0.0, 0.22, 0.56],
    [0.55, 0.65, 0.65],
    [0.85, 0.9, 0.95],
  ];

  // Initialize Exploitability Weight Constants
  const EXP_WEIGHTS = {
    ATTACK_VECTOR: {
      NETWORK: 0.85,
      ADJACENT: 0.62,
      LOCAL: 0.55,
      PHYSICAL: 0.2,
    },
    ATTACK_COMPLEXITY: {
      LOW: 0.77,
      HIGH: 0.44,
    },
    PRIVILEGE_REQUIRED: {
      NONE: 0.85,
      LOW: 0.62,
      HIGH: 0.27,
    },
    USER_INTERACTION: {
      NONE: 0.85,
      REQUIRED: 0.62,
    },
  };

  // * Calculate exploitability sub-score
  // Attack Vector
  if (selectedInputs[0].id == "AV_N")
    score_exploitability *= EXP_WEIGHTS.ATTACK_VECTOR.NETWORK;
  else if (selectedInputs[0].id == "AV_A")
    score_exploitability *= EXP_WEIGHTS.ATTACK_VECTOR.ADJACENT;
  else if (selectedInputs[0].id == "AV_L")
    score_exploitability *= EXP_WEIGHTS.ATTACK_VECTOR.LOCAL;
  else if (selectedInputs[0].id == "AV_P")
    score_exploitability *= EXP_WEIGHTS.ATTACK_VECTOR.PHYSICAL;

  // Attack Complexity
  if (selectedInputs[1].id == "AC_L")
    score_exploitability *= EXP_WEIGHTS.ATTACK_COMPLEXITY.LOW;
  else if (selectedInputs[1].id == "AC_H")
    score_exploitability *= EXP_WEIGHTS.ATTACK_COMPLEXITY.HIGH;

  // Privilege Required
  if (selectedInputs[2].id == "PR_N")
    score_exploitability *= EXP_WEIGHTS.PRIVILEGE_REQUIRED.NONE;
  else if (selectedInputs[2].id == "PR_L")
    score_exploitability *= EXP_WEIGHTS.PRIVILEGE_REQUIRED.LOW;
  else if (selectedInputs[2].id == "PR_H")
    score_exploitability *= EXP_WEIGHTS.PRIVILEGE_REQUIRED.HIGH;

  // User Interaction
  if (selectedInputs[3].id == "UI_N")
    score_exploitability *= EXP_WEIGHTS.USER_INTERACTION.NONE;
  else if (selectedInputs[3].id == "UI_R")
    score_exploitability *= EXP_WEIGHTS.USER_INTERACTION.REQUIRED;

  // * Calculate Scope Status multiplier
  if (selectedInputs[4].id == "scope_U") score_status = 1.0;
  else if (selectedInputs[4].id == "scope_C") score_status = 1.08;

  // * Score Base
  // Sensitivity & Confidentiality Impact
  let sensitivity = selectedInputs[9].id;
  let confidentialityImpact = selectedInputs[5].id;

  // Get base confidentiality scores from matrix
  let baseConfidentiality = getBaseValue(
    sensitivity[sensitivity.length - 1] +
      confidentialityImpact[confidentialityImpact.length - 1],
    baseConfidentialityMatrix
  );

  // Health Impact & Integrity Impact
  let healthImpact = selectedInputs[8].id;
  let integrityImpact = selectedInputs[6].id;

  // Get base integrity scores from matrix
  let baseIntegrity = getBaseValue(
    healthImpact[healthImpact.length - 1] +
      integrityImpact[integrityImpact.length - 1],
    baseIntegrityMatrix
  );

  // Health Impact & Availability Impact
  let availabilityImpact = selectedInputs[7].id;

  // Get base availability scores from matrix
  let baseAvailability = getBaseValue(
    healthImpact[healthImpact.length - 1] +
      availabilityImpact[availabilityImpact.length - 1],
    baseAvailabilityMatrix
  );

  // Calculate base score
  score_base *= baseConfidentiality + baseIntegrity + baseAvailability;
  // Display score for debugging
  console.log(score_status, score_base, score_exploitability);

  // * Calculate total score and display score *
  score = score_status * (score_base + score_exploitability);
  score = Math.max(0, Math.min(10, score)); // Limit 0-10
  // Making it have one decimal point
  document.getElementById("score").innerHTML = score.toFixed(1);
}
