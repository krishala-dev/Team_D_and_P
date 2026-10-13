# D&P Promotional Website — Updated Design Documentation
## CET257 Enterprise Project — B2

### 1. Purpose
The promotional website advertises Deploy & Pray as a software company. It is deliberately separate from the AutoTrain 3D trainee login portal.

### 2. Design goals
1. Communicate the D&P identity immediately.
2. Explain the company mission, vision and values clearly.
3. Present AutoTrain 3D as the featured portfolio case study.
4. Show relevant software capabilities without overloading the visitor.
5. Provide a simple route for a prospective client to make an enquiry.
6. Work on desktop and mobile browsers and run without a backend.

### 3. Information architecture
**Home → About → What We Do → Our Work → Team → Contact**

The navigation is persistent on desktop and becomes a mobile menu on smaller screens.

### 4. Visual system
The implementation follows the supplied corporate identity:
- Rose Pink `#E76F93`
- Soft Blush `#F7DCE6`
- Champagne `#D0AD71`
- Warm Ivory `#FFF8F1`
- Dark Ink `#49383F`

The supplied D&P logo, icon and reverse logo are stored in `/assets`.

### 5. Page/section design
**Home:** Hero statement, value proposition, calls to action and featured AutoTrain 3D card.

**About:** Mission, vision and core values.

**What We Do:** Web development, UI/UX, interactive 3D, and testing/documentation.

**Our Work:** AutoTrain 3D case study showing its training, 3D warehouse, assessment and administration focus.

**Team:** Four team members — Sweta, Krishala, Rustam and Sambriddhi.

**Contact:** Name, email and enquiry form. The current B2 prototype handles submission locally and confirms that the enquiry was captured.

### 6. Responsive behaviour
- Desktop: multi-column hero, service cards and case-study layout.
- Tablet: grids reduce to two columns.
- Mobile: sections stack into one column and navigation becomes a menu button.
- Images use responsive sizing and descriptive alternative text.

### 7. Technology
- HTML5
- CSS3
- Vanilla JavaScript
- Supplied image assets
- No database or server required
- Can be opened locally in VS Code or served with a simple static server.

### 8. Testing checklist
| Test | Expected result |
|---|---|
| Open `index.html` | Website loads without a build step |
| Click navigation | Page scrolls to correct section |
| Mobile width | Layout stacks and menu is usable |
| Contact form | Required fields prevent empty submission |
| Valid contact form | Prototype displays confirmation |
| Logo/assets | Brand images load from `/assets` |
| External dependency unavailable | Core page remains readable and usable |

### 9. Design rationale
The visual hierarchy uses the approved rose/ivory palette to create a friendly corporate identity, while dark ink sections provide contrast for the AutoTrain 3D case study. Large headings and short sections make the company proposition easy to scan. The design keeps the promotional site distinct from the operational training system, matching the original website plan.
