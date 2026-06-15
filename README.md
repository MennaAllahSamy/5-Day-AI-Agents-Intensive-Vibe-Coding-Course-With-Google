# 5-Day AI Agents: Intensive Vibe Coding Course — With Google

My work, notes, and code for the **5-Day AI Agents: Intensive Vibe Coding Course** by Google & Kaggle (June 15–19, 2026).

> Vibe coding = using natural language as the primary programming interface to build, integrate, and ship AI agents — from local prototype to production-ready enterprise fleet.

[![Course](https://img.shields.io/badge/Kaggle-5--Day%20AI%20Agents-20BEFF?logo=kaggle&logoColor=white)](https://www.kaggle.com/competitions/5-day-ai-agents-intensive-vibecoding-course-with-google)
[![Made with](https://img.shields.io/badge/Built%20with-Gemini%20%2B%20ADK-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)

---

## 📅 Course Map

| Day | Theme | Headline | Folder |
|----|-------|----------|--------|
| 1 | Introduction to Agents & Vibe Coding | *Natural language as the new coding language* | [`day-01`](./day-01-intro-agents-vibecoding) |
| 2 | Agent Tools & Interoperability | *10x agents* — APIs, code execution, A2A | [`day-02`](./day-02-tools-interoperability) |
| 3 | Context Engineering: Sessions, Skills & Memory | *Skilled agents* — long-term memory & state | [`day-03`](./day-03-context-sessions-memory) |
| 4 | Quality & Security | Testing, guardrails, threat vectors | [`day-04`](./day-04-quality-security) |
| 5 | Prototype to Production | Governed, scalable, observable fleets | [`day-05`](./day-05-prototype-to-production) |
| 🏁 | Capstone | Final Kaggle project | [`capstone`](./capstone) |

## 🗂 Structure

```
5-day-ai-agents-vibecoding/
├── day-01-intro-agents-vibecoding/   # whitepaper notes + codelab
│   ├── notebooks/                    # Kaggle / Colab notebooks (.ipynb)
│   ├── code/                         # standalone scripts
│   └── notes.md                      # my summary of the day
├── day-02-tools-interoperability/
├── day-03-context-sessions-memory/
├── day-04-quality-security/
├── day-05-prototype-to-production/
├── capstone/                         # final project
│   ├── src/
│   └── docs/
├── assets/                           # diagrams, screenshots
├── requirements.txt
└── .gitignore
```

## ⚙️ Setup

```bash
# clone
git clone https://github.com/<your-username>/5-day-ai-agents-vibecoding.git
cd 5-day-ai-agents-vibecoding

# environment
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Add your keys to a local `.env` (never commit it — already in `.gitignore`):

```
GOOGLE_API_KEY=your_key_here
```

## 🧰 Tools used

- **Google AI Studio** + **Gemini API**
- **Agent Development Kit (ADK)**
- **Kaggle Notebooks**

> ⚠️ Gemini API & Kaggle Notebooks require an 18+ verified account outside sanctioned regions.

## 📈 Progress

- [ ] Day 1 — Intro & Vibe Coding
- [ ] Day 2 — Tools & Interoperability
- [ ] Day 3 — Context, Sessions & Memory
- [ ] Day 4 — Quality & Security
- [ ] Day 5 — Prototype to Production
- [ ] 🏁 Capstone submitted

---

*Maintained by Menna Allah · AIU · 2026*
