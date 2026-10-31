/*
  Honors & trials data for the VII Legion browser (index.html).

  To add an entry, append an object to HONORS:
    id           unique, lowercase-with-dashes; also the shareable link (index.html#id)
    type         "trial" (rank progression) or "ordeal" (honor earned in battle)
    branch       id from BRANCHES
    name         display name
    order        trials only: position on the progression path (lower = earlier)
    equivalent   optional rank equivalent shown as a badge
    motto        optional quote
    summary      one or two sentences for new players, or null if not yet written
    requirements list of { group, items }; each item is either
                   "plain text", or
                   { anyOf: ["id-a", "id-b"] } meaning "complete one of these entries"
    source       where the text comes from
  "Accepted for" links on ordeals are worked out automatically from anyOf references.
*/
window.CODEX_DATA = {
  updated: "2026-10-31",

  BRANCHES: [
    { id: "chapter", name: "Chapter-wide" },
    { id: "librarium", name: "Librarium" }
  ],

  HONORS: [
    {
      id: "lexicanum",
      type: "trial",
      branch: "librarium",
      name: "Lexicanum",
      order: 1,
      equivalent: "Veteran / Battle Brother equivalent",
      motto: "The Witnesses of the Legion. Those who stand to remember.",
      summary: "Entry rank of the Librarium. Lexicanum write Battle Sagas, keep minor logs and learn the Chapter's lore under senior guidance.",
      requirements: [
        { group: "Time and service", items: ["Hold the role of Battle Brother for at least 7 days"] },
        { group: "Battlefield proficiency", items: [
          "Complete 10 Operations with Battle Brothers of the Imperial Fists server",
          "Have at least one Astartes Class at Full Prestige"
        ] },
        { group: "Ordeals", items: [{ anyOf: ["thousand-dead-sons", "xenos-exterminator"] }] },
        { group: "Creative output", items: [
          "Submit at least 1 Battle Saga or several smaller narrative pieces, or verify and document at least 2 member honor submissions under supervision of a Codicier or above"
        ] },
        { group: "Endorsement", items: [
          "Endorsement from a Codicier or above (High Command may endorse if no Codicier is available)",
          "Internal poll among Librarium members and relevant High Command officers; any reservations must be addressed before promotion"
        ] }
      ],
      source: "Codex Librarium"
    },
    {
      id: "codicier",
      type: "trial",
      branch: "librarium",
      name: "Codicier",
      order: 2,
      equivalent: "Sergeant / NCO equivalent",
      motto: "The Quill of the Chapter. The reliable path to the Legion's vision.",
      summary: "Trusted senior narrator. Codiciers connect events into ongoing story threads, mentor Lexicanum, verify honors and recruit for the Librarium.",
      requirements: [
        { group: "Time and service", items: ["Hold the role of Lexicanum for at least 15 days"] },
        { group: "Battlefield proficiency", items: [
          "Complete 10 Lethal or higher Operations with Battle Brothers of the Imperial Fists server, guiding Brothers in killing Terminus enemies",
          "Have at least 3 Astartes Classes at Full Prestige"
        ] },
        { group: "Ordeals", items: [{ anyOf: ["rubricae-eliminator", "tyranid-warrior-eliminator"] }] },
        { group: "Mentorship and recruitment", items: [
          "Complete at least 3 Operations alongside a member undertaking Scout or Battle Brother trials, in an active supporting role (separate from the 10 Lethal Operations)",
          "Submit a brief AAR note for each mentorship Operation, and where appropriate report the member's interest in the Librarium to an Epistolary or above"
        ] },
        { group: "Creative output", items: [
          "Submit at least 4 Battle Sagas or one longer story arc, or independently verify and document at least 6 member honor submissions",
          "Write at least 1 short lore piece expanding the Chapter's culture or legends",
          "Contribute to or start at least one creative project or server initiative (an Epistolary or above decides what counts)"
        ] },
        { group: "Endorsement", items: [
          "Endorsement from an Epistolary or above (High Command may endorse if no Epistolary is available)",
          "Internal poll among Librarium members and relevant High Command officers"
        ] }
      ],
      source: "Codex Librarium"
    },
    {
      id: "epistolary",
      type: "trial",
      branch: "librarium",
      name: "Epistolary",
      order: 3,
      equivalent: "Lieutenant equivalent",
      motto: "The Architect of Memory. Herald of the Phalanx and Dorn's wisdom incarnate.",
      summary: "Shapes long-form narrative arcs, advises High Command, keeps the Librarium archive and is the public voice of the Chief Librarian's decisions.",
      requirements: [
        { group: "Time and service", items: ["Hold the role of Codicier for at least 21 days"] },
        { group: "Battlefield proficiency", items: [
          "Complete 10 Absolute difficulty Operations, or organize 3 narrative-focused missions with supporting pre- or post-op lore"
        ] },
        { group: "Ordeals", items: ["No ordeal is required at this rank"] },
        { group: "Creative output", items: [
          "Submit a completed narrative cycle (for example a 3-part short story, character arc, campaign document or connected Battle Sagas)",
          "Create and publish 1 masterwork lore entry (for example a Chapter doctrine, war sermon or remembrancer report)"
        ] },
        { group: "Leadership and mentorship", items: [
          "Serve as a narrative advisor to High Command or coordinate 1 lore-supporting campaign or server event",
          "Give documented feedback on at least 2 narrative submissions by Lexicanum members"
        ] },
        { group: "Honor verification", items: [
          "Lead at least one full honor verification cycle, resolving any disputed claims with documented reasoning"
        ] },
        { group: "Endorsement", items: [
          "Endorsement from the Chief Librarian (High Command endorses if the seat is vacant)",
          "Internal poll among Librarium members and relevant High Command officers"
        ] }
      ],
      source: "Codex Librarium"
    },
    {
      id: "chief-librarian",
      type: "trial",
      branch: "librarium",
      name: "Chief Librarian",
      order: 4,
      equivalent: "Captain equivalent",
      motto: "The living memory of the Chapter. Keeper of the Phalanx's soul.",
      summary: "Head of the Librarium, with sole authority over its rules, honor standards and narrative canon. Appointed by High Command, not earned by trial.",
      requirements: [
        { group: "Appointment", items: [
          "Appointed by High Command, not by trial",
          "Time served as Epistolary is the main criterion; High Command may also weigh narrative contribution, leadership conduct and the Chapter's needs",
          "Endorsement from at least one active Epistolary"
        ] }
      ],
      source: "Codex Librarium"
    },

    {
      id: "thousand-dead-sons",
      type: "ordeal",
      branch: "chapter",
      name: "Thousand Dead Sons Ordeal",
      summary: null,
      requirements: [],
      source: "Referenced in Codex Librarium"
    },
    {
      id: "xenos-exterminator",
      type: "ordeal",
      branch: "chapter",
      name: "Xenos Exterminator Ordeal",
      summary: null,
      requirements: [],
      source: "Referenced in Codex Librarium"
    },
    {
      id: "rubricae-eliminator",
      type: "ordeal",
      branch: "chapter",
      name: "Rubricae Eliminator Ordeal",
      summary: null,
      requirements: [],
      source: "Referenced in Codex Librarium"
    },
    {
      id: "tyranid-warrior-eliminator",
      type: "ordeal",
      branch: "chapter",
      name: "Tyranid Warrior Eliminator Ordeal",
      summary: null,
      requirements: [],
      source: "Referenced in Codex Librarium"
    }
  ]
};
