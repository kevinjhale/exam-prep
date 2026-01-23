/**
 * Exam Prep App - Multi-exam support with questions and glossaries
 */

// Storage keys
const STORAGE_KEYS = {
  EXAMS: 'exam_prep_exams',
  CURRENT: 'exam_prep_current_exam',
  PROGRESS: 'exam_prep_progress'
};

// Default exam packages (embedded for offline use)
const DEFAULT_EXAMS = {
  'journeyman-electrical': {
    id: 'journeyman-electrical',
    name: 'Journeyman Electrician',
    description: 'NEC 2023 based practice questions for the journeyman electrician license exam.',
    version: '1.0',
    passingScore: 70,
    timeLimit: 3600,
    questions: [
      {
        "id": "je-001",
        "question": "What is the minimum burial depth for direct burial UF cable without additional protection?",
        "options": ["6 inches", "12 inches", "18 inches", "24 inches"],
        "correct": 3,
        "source": { "name": "NEC 2023 Table 300.5", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC Table 300.5, direct burial cables must be buried at least 24 inches when installed without additional protection such as concrete or RMC."
      },
      {
        "id": "je-002",
        "question": "What is the maximum number of #12 AWG THHN conductors allowed in a 1/2\" EMT conduit?",
        "options": ["5", "7", "9", "12"],
        "correct": 2,
        "source": { "name": "NEC 2023 Chapter 9, Table C1", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "According to NEC Chapter 9, Table C1, a 1/2\" EMT can contain a maximum of 9 #12 AWG THHN conductors based on 40% fill capacity."
      },
      {
        "id": "je-003",
        "question": "What is the ampacity of a #6 AWG copper conductor with THWN insulation at 75°C?",
        "options": ["40 amps", "55 amps", "65 amps", "75 amps"],
        "correct": 2,
        "source": { "name": "NEC 2023 Table 310.16", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC Table 310.16, #6 AWG copper with THWN insulation (75°C column) has an ampacity of 65 amps."
      },
      {
        "id": "je-004",
        "question": "What is the minimum working space depth in front of a 480V electrical panel?",
        "options": ["2 feet", "3 feet", "3.5 feet", "4 feet"],
        "correct": 2,
        "source": { "name": "NEC 2023 Article 110.26(A)(1)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 110.26(A)(1), Table 110.26(A)(1), for 301-600V (Condition 1), the minimum depth of clear working space is 3.5 feet (1.0m)."
      },
      {
        "id": "je-005",
        "question": "What color must the grounded conductor (neutral) be?",
        "options": ["Green", "White or gray", "Red", "Any color with white tape"],
        "correct": 1,
        "source": { "name": "NEC 2023 Article 200.6", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 200.6, the grounded conductor must be identified by white or gray color, or three continuous white or gray stripes on other than green insulation."
      },
      {
        "id": "je-006",
        "question": "What is the maximum voltage drop recommended for branch circuits?",
        "options": ["2%", "3%", "5%", "8%"],
        "correct": 1,
        "source": { "name": "NEC 2023 Article 210.19(A) Informational Note", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 210.19(A) Informational Note No. 4, branch circuit conductors should be sized to prevent voltage drop exceeding 3% at the farthest outlet."
      },
      {
        "id": "je-007",
        "question": "A 120V circuit has a load of 1800 watts. What is the current draw?",
        "options": ["12 amps", "15 amps", "18 amps", "20 amps"],
        "correct": 1,
        "source": { "name": "Ohm's Law / Power Formula", "url": "" },
        "explanation": "Using P = V × I, we get I = P/V = 1800W / 120V = 15 amps."
      },
      {
        "id": "je-008",
        "question": "What is the minimum height for receptacles in a dwelling unit?",
        "options": ["No minimum", "6 inches", "12 inches", "15 inches"],
        "correct": 0,
        "source": { "name": "NEC 2023 Article 210.52", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "The NEC does not specify a minimum mounting height for receptacles in dwelling units. However, local codes may have requirements, and ADA guidelines suggest 15 inches minimum for accessibility."
      },
      {
        "id": "je-009",
        "question": "What is the maximum length of a flexible cord used as a fixed wiring method?",
        "options": ["Not permitted", "6 feet", "10 feet", "25 feet"],
        "correct": 0,
        "source": { "name": "NEC 2023 Article 400.12", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 400.12, flexible cords shall not be used as a substitute for fixed wiring of a structure. They are only permitted for specific uses listed in 400.10."
      },
      {
        "id": "je-010",
        "question": "What size ground wire is required for a 60-amp circuit?",
        "options": ["#14 AWG", "#12 AWG", "#10 AWG", "#8 AWG"],
        "correct": 2,
        "source": { "name": "NEC 2023 Table 250.122", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC Table 250.122, a circuit protected by a 60-amp overcurrent device requires a minimum #10 AWG copper equipment grounding conductor."
      },
      {
        "id": "je-011",
        "question": "What is the maximum distance between receptacle outlets along a wall in a dwelling unit?",
        "options": ["6 feet", "8 feet", "10 feet", "12 feet"],
        "correct": 3,
        "source": { "name": "NEC 2023 Article 210.52(A)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 210.52(A), receptacles must be installed so that no point along the floor line is more than 6 feet from an outlet, meaning outlets can be up to 12 feet apart."
      },
      {
        "id": "je-012",
        "question": "What is the standard voltage for a single-phase, three-wire residential service?",
        "options": ["120V", "208V", "240V", "120/240V"],
        "correct": 3,
        "source": { "name": "NEC 2023 Article 220", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "A standard single-phase, three-wire residential service provides 120/240V - 120V between each hot leg and neutral, and 240V between the two hot legs."
      },
      {
        "id": "je-013",
        "question": "GFCI protection is required for 125V, 15 and 20-amp receptacles in which location?",
        "options": ["Bedrooms", "Living rooms", "Kitchens serving countertop surfaces", "Hallways"],
        "correct": 2,
        "source": { "name": "NEC 2023 Article 210.8(A)(6)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 210.8(A)(6), GFCI protection is required for all 125V, 15 and 20-amp receptacles in kitchens that serve countertop surfaces."
      },
      {
        "id": "je-014",
        "question": "What is the total resistance of three 30-ohm resistors connected in parallel?",
        "options": ["10 ohms", "30 ohms", "60 ohms", "90 ohms"],
        "correct": 0,
        "source": { "name": "Electrical Theory - Parallel Circuits", "url": "" },
        "explanation": "For parallel resistors: 1/Rt = 1/R1 + 1/R2 + 1/R3 = 1/30 + 1/30 + 1/30 = 3/30 = 1/10, so Rt = 10 ohms."
      },
      {
        "id": "je-015",
        "question": "What type of circuit breaker is required for a spa or hot tub?",
        "options": ["Standard breaker", "GFCI breaker", "AFCI breaker", "Dual function AFCI/GFCI breaker"],
        "correct": 1,
        "source": { "name": "NEC 2023 Article 680.44", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 680.44, all outlets supplying a spa or hot tub must be protected by a Class A GFCI."
      },
      {
        "id": "je-016",
        "question": "What is the ampacity of #10 AWG copper THWN at 75°C?",
        "options": ["25 amps", "30 amps", "35 amps", "40 amps"],
        "correct": 2,
        "source": { "name": "NEC 2023 Table 310.16", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC Table 310.16, #10 AWG copper with 75°C rated insulation (THWN) has an ampacity of 35 amps."
      },
      {
        "id": "je-017",
        "question": "What is the minimum size copper grounding electrode conductor for a 200-amp service?",
        "options": ["#8 AWG", "#6 AWG", "#4 AWG", "#2 AWG"],
        "correct": 2,
        "source": { "name": "NEC 2023 Table 250.66", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC Table 250.66, for service entrance conductors up to 2/0 AWG copper (typically used for 200A service), the minimum copper grounding electrode conductor is #4 AWG."
      },
      {
        "id": "je-018",
        "question": "AFCI protection is required in which area of a dwelling unit?",
        "options": ["Bathrooms", "Garages", "Bedrooms", "Kitchens"],
        "correct": 2,
        "source": { "name": "NEC 2023 Article 210.12(A)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 210.12(A), AFCI protection is required for 120V, 15 and 20-amp branch circuits supplying outlets in bedrooms, living rooms, dining rooms, and other dwelling areas."
      },
      {
        "id": "je-019",
        "question": "What is the maximum overcurrent protection for #14 AWG copper conductors?",
        "options": ["10 amps", "15 amps", "20 amps", "25 amps"],
        "correct": 1,
        "source": { "name": "NEC 2023 Table 240.4(D)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 240.4(D), #14 AWG copper conductors shall be protected at not more than 15 amps."
      },
      {
        "id": "je-020",
        "question": "A 4-inch square metal box is how many cubic inches?",
        "options": ["18 cu in", "21 cu in", "30.3 cu in", "42 cu in"],
        "correct": 1,
        "source": { "name": "NEC 2023 Table 314.16(A)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC Table 314.16(A), a 4-inch square metal box with 1-1/2 inch depth has a volume of 21 cubic inches."
      },
      {
        "id": "je-021",
        "question": "What is the volume allowance for each #12 AWG conductor in box fill calculations?",
        "options": ["1.75 cu in", "2.00 cu in", "2.25 cu in", "2.50 cu in"],
        "correct": 2,
        "source": { "name": "NEC 2023 Table 314.16(B)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC Table 314.16(B), each #12 AWG conductor requires 2.25 cubic inches of box volume."
      },
      {
        "id": "je-022",
        "question": "What is the minimum service size for a single-family dwelling?",
        "options": ["60 amps", "100 amps", "150 amps", "200 amps"],
        "correct": 1,
        "source": { "name": "NEC 2023 Article 230.79(C)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 230.79(C), the minimum service for a single-family dwelling is 100 amps, 3-wire."
      },
      {
        "id": "je-023",
        "question": "What is the general lighting load in VA per square foot for dwelling units?",
        "options": ["1 VA", "2 VA", "3 VA", "5 VA"],
        "correct": 2,
        "source": { "name": "NEC 2023 Table 220.12", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC Table 220.12, dwelling units require 3 VA per square foot for general lighting load calculations."
      },
      {
        "id": "je-024",
        "question": "What is the power factor of a purely resistive circuit?",
        "options": ["0", "0.5", "0.8", "1.0"],
        "correct": 3,
        "source": { "name": "Electrical Theory - Power Factor", "url": "" },
        "explanation": "In a purely resistive circuit, voltage and current are in phase, resulting in a power factor of 1.0 (unity)."
      },
      {
        "id": "je-025",
        "question": "A motor with a 40-amp full load current requires what minimum branch circuit conductor ampacity?",
        "options": ["40 amps", "45 amps", "50 amps", "60 amps"],
        "correct": 2,
        "source": { "name": "NEC 2023 Article 430.22", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 430.22, motor branch circuit conductors must have an ampacity of not less than 125% of the motor FLC. 40A × 1.25 = 50 amps."
      },
      {
        "id": "je-026",
        "question": "What color identifies an equipment grounding conductor?",
        "options": ["White", "Gray", "Green or bare", "Blue"],
        "correct": 2,
        "source": { "name": "NEC 2023 Article 250.119", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 250.119, equipment grounding conductors shall be identified by green color, green with yellow stripes, or bare conductor."
      },
      {
        "id": "je-027",
        "question": "What is the maximum height for a circuit breaker operating handle in a panelboard?",
        "options": ["5 feet 6 inches", "6 feet", "6 feet 7 inches", "7 feet"],
        "correct": 2,
        "source": { "name": "NEC 2023 Article 240.24(A)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 240.24(A), overcurrent devices shall be readily accessible and installed so the center of the grip of the operating handle is not more than 6 feet 7 inches above the floor."
      },
      {
        "id": "je-028",
        "question": "How many small appliance circuits are required in a dwelling kitchen?",
        "options": ["1", "2", "3", "4"],
        "correct": 1,
        "source": { "name": "NEC 2023 Article 210.52(B)(1)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 210.52(B)(1), a minimum of two 20-amp small appliance branch circuits are required to serve receptacle outlets in the kitchen, pantry, dining room, and breakfast room."
      },
      {
        "id": "je-029",
        "question": "What is the resistance of a circuit with 120V applied and 10A of current flow?",
        "options": ["10 ohms", "12 ohms", "120 ohms", "1200 ohms"],
        "correct": 1,
        "source": { "name": "Ohm's Law", "url": "" },
        "explanation": "Using Ohm's Law: R = V/I = 120V / 10A = 12 ohms."
      },
      {
        "id": "je-030",
        "question": "What is the minimum headroom required in working spaces around electrical equipment?",
        "options": ["6 feet", "6 feet 3 inches", "6 feet 6 inches", "7 feet"],
        "correct": 2,
        "source": { "name": "NEC 2023 Article 110.26(A)(3)", "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
        "explanation": "Per NEC 110.26(A)(3), the minimum headroom of working spaces about service equipment, switchboards, panelboards, or motor control centers shall be 6 feet 6 inches."
      }
    ],
    glossary: {
      "ampacity": {
        term: "Ampacity",
        definition: "The maximum current, in amperes, that a conductor can carry continuously under conditions of use without exceeding its temperature rating.",
        reference: "NEC Article 100",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "branch circuit": {
        term: "Branch Circuit",
        definition: "The circuit conductors between the final overcurrent device protecting the circuit and the outlet(s). It distributes power from the panelboard to utilization equipment.",
        reference: "NEC Article 100, Article 210",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "circuit breaker": {
        term: "Circuit Breaker",
        definition: "A device designed to open and close a circuit by nonautomatic means and to open the circuit automatically on a predetermined overcurrent without damage to itself when properly applied within its rating.",
        reference: "NEC Article 100",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "conductor": {
        term: "Conductor",
        definition: "A material, usually in the form of a wire, cable, or bus bar, suitable for carrying an electric current. Copper and aluminum are the most common conductor materials.",
        reference: "NEC Article 100",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "conduit": {
        term: "Conduit",
        definition: "A raceway of circular cross section, such as EMT (Electrical Metallic Tubing), RMC (Rigid Metal Conduit), or PVC, used to protect and route electrical wiring.",
        reference: "NEC Chapter 3",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "dwelling unit": {
        term: "Dwelling Unit",
        definition: "A single unit providing complete and independent living facilities for one or more persons, including permanent provisions for living, sleeping, cooking, and sanitation.",
        reference: "NEC Article 100",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "emt": {
        term: "EMT (Electrical Metallic Tubing)",
        definition: "A thin-walled, unthreaded steel raceway used to protect and route electrical conductors. Also called thin-wall conduit. Connected using compression or set-screw fittings.",
        reference: "NEC Article 358",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "equipment grounding conductor": {
        term: "Equipment Grounding Conductor (EGC)",
        definition: "The conductive path that connects normally non-current-carrying metal parts of equipment to the system grounded conductor, the grounding electrode conductor, or both.",
        reference: "NEC Article 100, Article 250.118",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "feeder": {
        term: "Feeder",
        definition: "All circuit conductors between the service equipment, the source of a separately derived system, or other power supply source and the final branch-circuit overcurrent device.",
        reference: "NEC Article 100, Article 215",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "gfci": {
        term: "GFCI (Ground-Fault Circuit Interrupter)",
        definition: "A device intended for the protection of personnel that de-energizes a circuit when the current to ground exceeds a predetermined value (typically 5mA). Required in wet locations, bathrooms, kitchens, etc.",
        reference: "NEC Article 100, Article 210.8",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "afci": {
        term: "AFCI (Arc-Fault Circuit Interrupter)",
        definition: "A device intended to provide protection from the effects of arc faults by recognizing characteristics unique to arcing and de-energizing the circuit when an arc fault is detected.",
        reference: "NEC Article 100, Article 210.12",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "grounded conductor": {
        term: "Grounded Conductor (Neutral)",
        definition: "A system or circuit conductor that is intentionally grounded. In a typical residential system, this is the neutral conductor, identified by white or gray insulation.",
        reference: "NEC Article 100, Article 200",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "grounding electrode conductor": {
        term: "Grounding Electrode Conductor (GEC)",
        definition: "A conductor used to connect the system grounded conductor or the equipment to a grounding electrode or to a point on the grounding electrode system.",
        reference: "NEC Article 100, Article 250.62",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "overcurrent protection": {
        term: "Overcurrent Protection",
        definition: "A device such as a fuse or circuit breaker that opens a circuit when current exceeds a predetermined value, protecting conductors and equipment from damage.",
        reference: "NEC Article 240",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "panelboard": {
        term: "Panelboard",
        definition: "A single panel or group of panel units designed for assembly in the form of a single panel, including buses and automatic overcurrent devices.",
        reference: "NEC Article 100, Article 408",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "receptacle": {
        term: "Receptacle",
        definition: "A contact device installed at the outlet for the connection of an attachment plug. A single receptacle is a single contact device; a duplex receptacle has two contact devices.",
        reference: "NEC Article 100, Article 406",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "service": {
        term: "Service",
        definition: "The conductors and equipment for delivering electric energy from the serving utility to the wiring system of the premises served.",
        reference: "NEC Article 100, Article 230",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "voltage drop": {
        term: "Voltage Drop",
        definition: "The reduction in voltage in an electrical circuit between the source and load. NEC recommends no more than 3% drop for branch circuits and 5% total for feeders plus branch circuits.",
        reference: "NEC Article 210.19(A) Informational Note",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "working space": {
        term: "Working Space",
        definition: "Clear space required around electrical equipment for safe operation and maintenance. Minimum depth varies by voltage: 3 feet for 0-150V, 3.5 feet for 151-600V.",
        reference: "NEC Article 110.26",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "bonding": {
        term: "Bonding",
        definition: "The permanent joining of metallic parts to form an electrically conductive path that ensures electrical continuity and the capacity to conduct safely any current likely to be imposed.",
        reference: "NEC Article 100, Article 250.90",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "box fill": {
        term: "Box Fill",
        definition: "The calculation to determine if an electrical box has adequate volume for the conductors, devices, and fittings it contains. Each conductor size has a specified volume allowance.",
        reference: "NEC Article 314.16",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "full load current": {
        term: "Full Load Current (FLC)",
        definition: "The current required to produce full-load torque at the motor's rated speed. Used for sizing motor branch circuit conductors and overcurrent protection.",
        reference: "NEC Article 430, Tables 430.248-430.250",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "power factor": {
        term: "Power Factor",
        definition: "The ratio of real power (watts) to apparent power (volt-amperes) in an AC circuit. A power factor of 1.0 means voltage and current are in phase (purely resistive load).",
        reference: "Electrical Theory",
        url: ""
      },
      "resistance": {
        term: "Resistance",
        definition: "Opposition to current flow in a circuit, measured in ohms. Determined by conductor material, length, and cross-sectional area. Causes voltage drop and power dissipation as heat.",
        reference: "Electrical Theory (Ohm's Law)",
        url: ""
      },
      "small appliance circuit": {
        term: "Small Appliance Circuit",
        definition: "A 20-amp branch circuit required in kitchens, dining rooms, and similar areas to serve receptacle outlets for portable appliances. Minimum of two required per dwelling.",
        reference: "NEC Article 210.52(B)",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      },
      "awg": {
        term: "AWG (American Wire Gauge)",
        definition: "The standard system for measuring wire diameter in North America. Lower numbers indicate larger wire sizes. Common sizes: #14 (15A), #12 (20A), #10 (30A).",
        reference: "NEC Chapter 9",
        url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
      }
    }
  }
};

// ============================================================================
// Exam Management
// ============================================================================

const ExamManager = {
  // Get all exams (from localStorage with defaults)
  getAll() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXAMS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading exams:', e);
    }
    // Return defaults
    return { ...DEFAULT_EXAMS };
  },

  // Save all exams
  saveAll(exams) {
    try {
      localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(exams));
    } catch (e) {
      console.error('Error saving exams:', e);
    }
  },

  // Get single exam by ID
  get(examId) {
    const exams = this.getAll();
    return exams[examId] || null;
  },

  // Save single exam
  save(exam) {
    const exams = this.getAll();
    exams[exam.id] = exam;
    this.saveAll(exams);
  },

  // Delete exam
  delete(examId) {
    const exams = this.getAll();
    delete exams[examId];
    this.saveAll(exams);

    // If deleted current exam, clear selection
    if (this.getCurrentId() === examId) {
      localStorage.removeItem(STORAGE_KEYS.CURRENT);
    }
  },

  // Get current exam ID
  getCurrentId() {
    return localStorage.getItem(STORAGE_KEYS.CURRENT) || 'journeyman-electrical';
  },

  // Set current exam ID
  setCurrentId(examId) {
    localStorage.setItem(STORAGE_KEYS.CURRENT, examId);
  },

  // Get current exam data
  getCurrent() {
    return this.get(this.getCurrentId());
  },

  // Create new exam
  create(name, description = '') {
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const exam = {
      id,
      name,
      description,
      version: '1.0',
      passingScore: 70,
      timeLimit: 3600,
      questions: [],
      glossary: {}
    };
    this.save(exam);
    return exam;
  },

  // Reset exam to default (if exists in defaults)
  reset(examId) {
    if (DEFAULT_EXAMS[examId]) {
      this.save({ ...DEFAULT_EXAMS[examId] });
      return true;
    }
    return false;
  },

  // Export exam as JSON
  export(examId) {
    const exam = this.get(examId);
    if (!exam) return null;
    return JSON.stringify(exam, null, 2);
  },

  // Import exam from JSON
  import(jsonData) {
    try {
      const exam = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;

      // Validate required fields
      if (!exam.name) throw new Error('Missing exam name');
      if (!exam.id) {
        exam.id = exam.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
      if (!Array.isArray(exam.questions)) exam.questions = [];
      if (!exam.glossary || typeof exam.glossary !== 'object') exam.glossary = {};

      // Set defaults
      exam.passingScore = exam.passingScore || 70;
      exam.timeLimit = exam.timeLimit || 3600;
      exam.version = exam.version || '1.0';

      this.save(exam);
      return exam;
    } catch (e) {
      console.error('Import error:', e);
      throw new Error('Invalid exam data: ' + e.message);
    }
  },

  // Get list of all exam IDs and names
  list() {
    const exams = this.getAll();
    return Object.values(exams).map(e => ({
      id: e.id,
      name: e.name,
      description: e.description,
      questionCount: e.questions?.length || 0,
      glossaryCount: Object.keys(e.glossary || {}).length
    }));
  }
};

// ============================================================================
// App Object (for backward compatibility)
// ============================================================================

const App = {
  examData: null,
  currentExamId: null,

  async loadExamData(examId = null) {
    if (!examId) {
      examId = ExamManager.getCurrentId();
    }
    this.examData = ExamManager.get(examId);
    this.currentExamId = examId;
    ExamManager.setCurrentId(examId);
    return this.examData;
  },

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  },

  getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  },

  setUrlParam(name, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }
};

// ============================================================================
// Vocabulary/Glossary Functions
// ============================================================================

// Get current exam's glossary
function getCurrentGlossary() {
  const exam = ExamManager.getCurrent();
  return exam?.glossary || {};
}

// Get sorted glossary terms for matching (longest first)
function getGlossaryTerms() {
  const glossary = getCurrentGlossary();
  return Object.keys(glossary).sort((a, b) => b.length - a.length);
}

// Highlight vocabulary terms in text
function highlightVocabTerms(text) {
  const glossary = getCurrentGlossary();
  const terms = getGlossaryTerms();

  if (terms.length === 0) return text;

  let result = text;
  const matched = new Set();

  for (const termKey of terms) {
    const regex = new RegExp(`\\b(${termKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
    result = result.replace(regex, (match) => {
      const lowerMatch = match.toLowerCase();
      if (matched.has(lowerMatch)) return match;
      matched.add(lowerMatch);
      return `<span class="vocab-term" data-term="${termKey}" tabindex="0">${match}</span>`;
    });
  }

  return result;
}

// Show vocabulary definition panel
function showVocabDefinition(termKey) {
  const glossary = getCurrentGlossary();
  const term = glossary[termKey];
  if (!term) return;

  hideVocabDefinition();

  document.querySelectorAll('.vocab-term').forEach(el => el.classList.remove('active'));
  const activeTerm = document.querySelector(`.vocab-term[data-term="${termKey}"]`);
  if (activeTerm) activeTerm.classList.add('active');

  const panel = document.createElement('div');
  panel.className = 'vocab-panel show';
  panel.id = 'vocab-panel';

  const refLink = term.url
    ? `<a href="${term.url}" target="_blank" rel="noopener">${term.reference}</a>`
    : term.reference;

  panel.innerHTML = `
    <div class="vocab-panel-header">
      <span class="vocab-panel-term">${term.term}</span>
      <button class="vocab-panel-close" aria-label="Close definition">&times;</button>
    </div>
    <p class="vocab-panel-definition">${term.definition}</p>
    <p class="vocab-panel-reference">Reference: ${refLink}</p>
  `;

  const feedback = document.getElementById('feedback');
  const questionText = document.querySelector('.question-text');
  const insertAfter = (feedback && feedback.classList.contains('show')) ? feedback : questionText;

  if (insertAfter) {
    insertAfter.parentNode.insertBefore(panel, insertAfter.nextSibling);
  }

  panel.querySelector('.vocab-panel-close').addEventListener('click', hideVocabDefinition);
}

// Hide vocabulary definition panel
function hideVocabDefinition() {
  const panel = document.getElementById('vocab-panel');
  if (panel) panel.remove();
  document.querySelectorAll('.vocab-term.active').forEach(el => el.classList.remove('active'));
}

// Initialize vocab term click handlers
function initVocabHandlers() {
  document.addEventListener('click', (e) => {
    const term = e.target.closest('.vocab-term');
    if (term) {
      e.preventDefault();
      e.stopPropagation();
      showVocabDefinition(term.dataset.term);
    } else if (!e.target.closest('.vocab-panel')) {
      hideVocabDefinition();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('vocab-term')) {
      e.preventDefault();
      showVocabDefinition(e.target.dataset.term);
    } else if (e.key === 'Escape') {
      hideVocabDefinition();
    }
  });
}

// ============================================================================
// Question Rendering
// ============================================================================

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function renderQuestion(question, questionIndex, totalQuestions, containerId = 'question-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const highlightedQuestion = highlightVocabTerms(question.question);
  const highlightedOptions = question.options.map(opt => highlightVocabTerms(opt));

  container.innerHTML = `
    <div class="question-header">
      <span class="question-number">Question ${questionIndex + 1} of ${totalQuestions}</span>
      <span class="question-id">${question.id}</span>
    </div>
    <p class="question-text">${highlightedQuestion}</p>
    <div class="options" role="radiogroup" aria-label="Answer options">
      ${highlightedOptions.map((option, i) => `
        <button class="option" data-index="${i}" role="radio" aria-checked="false" tabindex="0">
          <span class="option-letter">${LETTERS[i]}</span>
          <span class="option-text">${option}</span>
        </button>
      `).join('')}
    </div>
    <div class="feedback" id="feedback"></div>
  `;

  hideVocabDefinition();
}

function showFeedback(isCorrect, question, selectedIndex) {
  const feedback = document.getElementById('feedback');
  if (!feedback) return;

  hideVocabDefinition();

  feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;

  const sourceLink = question.source?.url
    ? `<a href="${question.source.url}" target="_blank" rel="noopener">${question.source.name}</a>`
    : question.source?.name || 'General knowledge';

  const highlightedExplanation = highlightVocabTerms(question.explanation);

  feedback.innerHTML = `
    <div class="feedback-header">${isCorrect ? 'Correct!' : 'Incorrect'}</div>
    <p class="feedback-explanation">${highlightedExplanation}</p>
    <p class="feedback-source">Source: ${sourceLink}</p>
  `;

  const options = document.querySelectorAll('.option');
  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    opt.setAttribute('aria-disabled', 'true');
    if (i === question.correct) {
      opt.classList.add('correct');
    } else if (i === selectedIndex && !isCorrect) {
      opt.classList.add('incorrect');
    }
  });
}

function initOptionKeyboardNav(onSelect) {
  document.addEventListener('keydown', (e) => {
    const options = document.querySelectorAll('.option:not(.disabled)');
    if (options.length === 0) return;

    const key = e.key.toUpperCase();
    const letterIndex = LETTERS.indexOf(key);
    if (letterIndex !== -1 && letterIndex < options.length) {
      e.preventDefault();
      onSelect(letterIndex);
    }
  });
}
