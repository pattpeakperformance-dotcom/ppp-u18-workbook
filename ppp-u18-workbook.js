(function () {
  'use strict';

  // ============================================================
  // CONTENT — single source of truth for all questions/items
  // Keep aligned with the docx workbook content.
  // ============================================================

  var part1Questions = [
    "Where are you in your football right now? Club, age group, level you are playing at.",
    "What is going well at the moment? Be specific.",
    "What is not going well? Be honest.",
    "When was the last time you played and felt fully like yourself? What was different about that day?",
    "When was the last time you played and didn't feel like yourself? What was different about that day?",
    "If a coach who didn't know you watched you train this week, what would they notice first? Strengths and habits.",
    "What do you think you are working towards? Not the cliche answer. The real one."
  ];

  var copeBlocks = [
    {
      key: "contained",
      title: "Contained.  Calm when the load comes on.",
      blurb: "Steady. Hard to rattle. Pace doesn't change much from a 0-0 to a 4-0.",
      items: [
        "When the score gets tight, my body stays calm.",
        "I don't get pulled around by what other players are saying or doing.",
        "After a mistake, I move on quickly and keep playing my game.",
        "I make the same kind of decisions whether the stakes are high or low.",
        "Before a big game, I am pretty steady. Not flat, not buzzing.",
        "Pressure is something I notice but it doesn't run me."
      ],
      open: "When was the last time you stayed calm and it gave you an edge? What did the situation look like, and what did you do?"
    },
    {
      key: "optimistic",
      title: "Optimistic.  Looks for the upside first.",
      blurb: "Sees the chance before the risk. Tries the pass. Believes the next one is going in.",
      items: [
        "When I get the ball, I look to make something happen rather than play safe.",
        "After a missed chance, I expect the next one to come.",
        "I believe I am going to do well, even on tough days.",
        "I would rather try something and fail than play it safe and pass it on.",
        "I see opportunities other players don't seem to spot.",
        "I am usually one of the more confident voices in the changing room."
      ],
      open: "When was the last time your confidence helped you, and when was the last time it cost you? Both."
    },
    {
      key: "prudent",
      title: "Prudent.  Measured and alert to risk.",
      blurb: "Reads the danger early. Picks the right pass for the situation. Thinks about what could go wrong before it does.",
      items: [
        "I notice problems before other players do.",
        "I think about what could go wrong, and that helps me prepare.",
        "I would rather make the safer pass and keep the ball than try the risky one.",
        "I check things twice before I commit.",
        "I plan how I am going to play before I play.",
        "I look at what is in front of me before I take any decision."
      ],
      open: "Is there a situation where being careful served you well, and a different situation where you wish you had been bolder?"
    },
    {
      key: "engaged",
      title: "Engaged.  Dynamic and instinctive.",
      blurb: "Reads the game in real time. Reacts fast. Energy on, attention sharp, picking up everything.",
      items: [
        "I rely on my instinct in fast-moving situations.",
        "I pick up small details that others miss.",
        "When the game is open, I am in the middle of everything.",
        "I respond quickly to what is happening rather than sticking to a plan.",
        "I am aware of where everyone is on the pitch most of the time.",
        "I feel most alive when the game is end to end."
      ],
      open: "Describe a moment in a recent game where your instinct made the difference. What did you see, and what did you do without thinking about it?"
    }
  ];

  var flexBlocks = [
    {
      key: "forceful",
      title: "Forceful.  Direct. Drives the tempo.",
      blurb: "Says it straight. Pushes the team forward. The voice that lifts the standard when standards drop.",
      items: [
        "I tell teammates what I think, even when it might not land well.",
        "I drive the tempo of training and games.",
        "I push back when I don't agree with something.",
        "I am demanding of myself, and of the people around me.",
        "I say the difficult thing rather than letting it sit.",
        "When something needs doing, I take the lead."
      ],
      open: "Has your directness ever helped a teammate, and has it ever cost you a relationship? Describe one of each."
    },
    {
      key: "logical",
      title: "Logical.  Structured. Thinks it through.",
      blurb: "Plans the run. Watches the clip. Knows the why behind the what. Quiet competence, repeated.",
      items: [
        "I think before I act in most situations.",
        "I want to understand why a decision is being made, not just what the decision is.",
        "I notice details about how I play that other players don't seem to think about.",
        "I prepare for games and training sessions properly.",
        "I keep my own notes or routines that help me improve.",
        "I would rather get something right than get it done quickly."
      ],
      open: "What is one thing you analyse about your own game that nobody has asked you about? Walk through it."
    },
    {
      key: "empathic",
      title: "Empathic.  Patient. Reads the group.",
      blurb: "Notices when a teammate is off. Picks up on what isn't being said. Holds the room together when it gets shaky.",
      items: [
        "I notice when a teammate is having a bad day before they say anything.",
        "I am the person other players come to when something is wrong.",
        "I think carefully about how my words land before I say them.",
        "I am patient with players who are struggling.",
        "I am aware of what other people are feeling in the changing room.",
        "I would rather support a teammate than score the goal."
      ],
      open: "When did you last support a teammate who was struggling? What did you do, and what did you choose not to do?"
    },
    {
      key: "expressive",
      title: "eXpressive.  Energetic. Lifts the room.",
      blurb: "Brings the energy. Talks. Makes the changing room a better place to be. The atmosphere shifts when this player walks in.",
      items: [
        "I am one of the louder voices in the changing room.",
        "I bring energy to training when the group is flat.",
        "I get on with most people quickly.",
        "I enjoy being the centre of things on a good day.",
        "I find it easy to get teammates going.",
        "I am usually the person making others laugh."
      ],
      open: "Where does your energy help the team, and where does it sometimes get in the way of your own performance?"
    }
  ];

  var pressureTriggers = [
    "Big games. Cup, derby, scout in the stands.",
    "When my parent is on the touchline.",
    "When the manager has been quiet with me all week.",
    "After I make a mistake in the first ten minutes.",
    "When a teammate I rate is having a great game and I'm not.",
    "When a contract or release decision is coming up.",
    "Late in a game when we are a goal down.",
    "Late in a game when we are a goal up.",
    "Training the day after a poor performance.",
    "Talking to my parents on the drive home after a bad game.",
    "Talking to my parents on the drive home after a good game.",
    "When I'm tired or carrying a knock and don't want to say it."
  ];

  var pressureShows = [
    "I go quiet. The talking dries up.",
    "I get louder. I start talking over people.",
    "I try harder. Run further. Push more, even when push isn't what's needed.",
    "I switch off. Go through the motions.",
    "I get angry. With myself, with teammates, with the ref.",
    "I get careful. Stop trying things, play it safe, pass to the easier option.",
    "I get reckless. Take on shots, passes, tackles I wouldn't normally.",
    "I overthink. Every touch becomes a decision.",
    "I freeze. The game speeds up and I slow down.",
    "I look for someone to blame.",
    "I rush. Everything happens too fast.",
    "I look fine on the outside. Inside, it's something else."
  ];

  var pressureOpens = [
    "What is the most recent moment you can remember where pressure changed how you played?",
    "What do you do that you are not proud of, and that mostly only shows up when the pressure is on?",
    "If a teammate watched you under that kind of pressure for a season, what one thing would they say is the pattern?"
  ];

  var othersSayQs = [
    "What your parents say about you as a footballer:",
    "What your coach has said about you most recently:",
    "What a teammate would say is your best quality on a pitch:",
    "What a friend who isn't in football would say about you:"
  ];

  var fuelQs = [
    "Coaching style that brings the best out of you:",
    "Type of teammate you play your best football alongside:",
    "Pre-match routine that works for you:",
    "What your parents do that helps:"
  ];

  var drainerQs = [
    "Coaching style that doesn't work for you:",
    "Type of teammate that knocks you off your game:",
    "Things in your week outside football that drain you:",
    "What your parents sometimes do that doesn't help, even though they mean well:"
  ];

  var recoveryQs = [
    "How do you recover after a poor performance?",
    "How long does it usually take you to feel like yourself again?",
    "Who do you talk to honestly when football is hard? What do they actually do that helps?",
    "Is there anyone in your life you wish you could talk to about football, and don't?"
  ];

  var priorities = [
    "The thing I most want to understand about myself is...",
    "The thing I most want to change about how I play or train is...",
    "If I could leave the session with one thing, it would be..."
  ];

  // ============================================================
  // STATE
  // ============================================================
  var TOTAL_PARTS = 7;
  var currentPart = 1;
  var answers = {
    name: "",
    club: "",
    part1: {},
    cope: {},
    flex: {},
    pressure_triggers: [],
    pressure_shows: [],
    pressure_open: {},
    strengths: [],
    others_say: {},
    fuel: {},
    drainers: {},
    recovery: {},
    priorities: {},
    anything_else: ""
  };

  // ============================================================
  // HELPERS
  // ============================================================
  function el(tag, props, children) {
    var e = document.createElement(tag);
    if (props) {
      for (var k in props) {
        if (k === 'class') e.className = props[k];
        else if (k === 'html') e.innerHTML = props[k];
        else if (k.indexOf('on') === 0) e[k] = props[k];
        else e.setAttribute(k, props[k]);
      }
    }
    if (children) {
      for (var i = 0; i < children.length; i++) {
        if (typeof children[i] === 'string') e.appendChild(document.createTextNode(children[i]));
        else if (children[i]) e.appendChild(children[i]);
      }
    }
    return e;
  }

  function buildOpenQuestion(num, text, onChange) {
    var div = el('div', { class: 'u18-q' });
    div.appendChild(el('div', null, [
      el('span', { class: 'u18-q-num' }, [String(num).padStart(2, '0')]),
      el('span', { class: 'u18-q-text' }, [text])
    ]));
    var ta = el('textarea', { class: 'u18-textarea', rows: '3', placeholder: 'Your answer' });
    ta.addEventListener('input', function () { onChange(ta.value); });
    div.appendChild(ta);
    return div;
  }

  function buildLabeledTextarea(label, onChange) {
    var div = el('div', { class: 'u18-q' });
    div.appendChild(el('label', { class: 'u18-q-prompt' }, [label]));
    var ta = el('textarea', { class: 'u18-textarea', rows: '2', placeholder: 'Your answer' });
    ta.addEventListener('input', function () { onChange(ta.value); });
    div.appendChild(ta);
    return div;
  }

  function buildLikertItem(text, onChange) {
    var wrap = el('div', { class: 'u18-likert-item' });
    wrap.appendChild(el('div', { class: 'u18-likert-text' }, [text]));
    var scale = el('div', { class: 'u18-likert-scale' });
    var labels = ['Not at all', 'A bit', 'Sometimes', 'Often', 'A lot'];
    var radios = [];
    for (var i = 1; i <= 5; i++) {
      (function (val) {
        var label = el('label', { class: 'u18-likert-radio' });
        var input = el('input', { type: 'radio', name: 'lk_' + Math.random().toString(36).slice(2) });
        label.appendChild(input);
        label.appendChild(el('span', { class: 'u18-likert-radio-num' }, [String(val)]));
        label.appendChild(el('span', { class: 'u18-likert-radio-label' }, [labels[val - 1]]));
        label.addEventListener('click', function (e) {
          e.preventDefault();
          radios.forEach(function (r) { r.classList.remove('is-selected'); });
          label.classList.add('is-selected');
          input.checked = true;
          onChange(val);
        });
        radios.push(label);
        scale.appendChild(label);
      })(i);
    }
    wrap.appendChild(scale);
    return wrap;
  }

  function buildLikertBlock(block, store) {
    var wrap = el('div', { class: 'u18-likert-block' });
    wrap.appendChild(el('div', { class: 'u18-likert-title' }, [block.title]));
    wrap.appendChild(el('div', { class: 'u18-likert-blurb' }, [block.blurb]));
    wrap.appendChild(el('div', { class: 'u18-likert-instruction' }, ['Tap the box that best describes you.']));

    var items = {};
    block.items.forEach(function (it, i) {
      var itemKey = 'i' + i;
      wrap.appendChild(buildLikertItem(it, function (val) {
        items[itemKey] = { text: it, value: val };
        store(items, openVal);
      }));
    });

    var openVal = '';
    var openWrap = el('div', { class: 'u18-open-q' });
    openWrap.appendChild(el('div', null, [
      el('span', { class: 'u18-open-q-label' }, ['OPEN QUESTION.']),
      el('span', { class: 'u18-open-q-text' }, [block.open])
    ]));
    var openTa = el('textarea', { class: 'u18-textarea', rows: '3', placeholder: 'Your answer' });
    openTa.addEventListener('input', function () {
      openVal = openTa.value;
      store(items, openVal);
    });
    openWrap.appendChild(openTa);
    wrap.appendChild(openWrap);

    return wrap;
  }

  function buildCheckList(items, container, store) {
    items.forEach(function (text, i) {
      var li = el('li');
      var label = el('label', { class: 'u18-check-label' });
      var input = el('input', { type: 'checkbox' });
      input.addEventListener('change', function () {
        if (input.checked && store.indexOf(text) === -1) store.push(text);
        else if (!input.checked) {
          var idx = store.indexOf(text);
          if (idx > -1) store.splice(idx, 1);
        }
      });
      label.appendChild(input);
      label.appendChild(el('span', { class: 'u18-check-box' }));
      label.appendChild(el('span', { class: 'u18-check-text' }, [text]));
      li.appendChild(label);
      container.appendChild(li);
    });
  }

  function buildStrengthBlock(num, store) {
    var wrap = el('div', { class: 'u18-strength-block' });
    wrap.appendChild(el('div', { class: 'u18-strength-block-title' }, ['STRENGTH ' + String(num).padStart(2, '0')]));

    var s = { strength: '', best: '', worst: '' };

    var ta1 = el('textarea', { class: 'u18-textarea', rows: '2', placeholder: 'Name the strength' });
    ta1.addEventListener('input', function () { s.strength = ta1.value; store(num, s); });
    wrap.appendChild(ta1);

    wrap.appendChild(el('label', { class: 'u18-q-prompt' }, ['When does it serve you best?']));
    var ta2 = el('textarea', { class: 'u18-textarea', rows: '2', placeholder: 'Your answer' });
    ta2.addEventListener('input', function () { s.best = ta2.value; store(num, s); });
    wrap.appendChild(ta2);

    wrap.appendChild(el('label', { class: 'u18-q-prompt' }, ['When does it work against you?']));
    var ta3 = el('textarea', { class: 'u18-textarea', rows: '2', placeholder: 'Your answer' });
    ta3.addEventListener('input', function () { s.worst = ta3.value; store(num, s); });
    wrap.appendChild(ta3);

    return wrap;
  }

  // ============================================================
  // BUILD UI
  // ============================================================
  function buildAll() {
    var p1 = document.getElementById('u18-part1-questions');
    part1Questions.forEach(function (q, i) {
      p1.appendChild(buildOpenQuestion(i + 1, q, function (v) { answers.part1[i] = { q: q, a: v }; }));
    });

    var p2 = document.getElementById('u18-part2-blocks');
    copeBlocks.forEach(function (b) {
      p2.appendChild(buildLikertBlock(b, function (items, openVal) {
        answers.cope[b.key] = { title: b.title, items: items, open_q: b.open, open_a: openVal };
      }));
    });

    var p3 = document.getElementById('u18-part3-blocks');
    flexBlocks.forEach(function (b) {
      p3.appendChild(buildLikertBlock(b, function (items, openVal) {
        answers.flex[b.key] = { title: b.title, items: items, open_q: b.open, open_a: openVal };
      }));
    });

    buildCheckList(pressureTriggers, document.getElementById('u18-pressure-triggers'), answers.pressure_triggers);
    buildCheckList(pressureShows, document.getElementById('u18-pressure-shows'), answers.pressure_shows);

    var po = document.getElementById('u18-pressure-opens');
    pressureOpens.forEach(function (q, i) {
      po.appendChild(buildOpenQuestion(i + 1, q, function (v) { answers.pressure_open[i] = { q: q, a: v }; }));
    });

    var sg = document.getElementById('u18-strengths');
    for (var i = 1; i <= 3; i++) {
      sg.appendChild(buildStrengthBlock(i, function (n, s) { answers.strengths[n - 1] = s; }));
    }

    var os = document.getElementById('u18-others-say');
    othersSayQs.forEach(function (q, i) {
      os.appendChild(buildLabeledTextarea(q, function (v) { answers.others_say[i] = { q: q, a: v }; }));
    });

    var fu = document.getElementById('u18-fuel');
    fuelQs.forEach(function (q, i) {
      fu.appendChild(buildLabeledTextarea(q, function (v) { answers.fuel[i] = { q: q, a: v }; }));
    });

    var dr = document.getElementById('u18-drainers');
    drainerQs.forEach(function (q, i) {
      dr.appendChild(buildLabeledTextarea(q, function (v) { answers.drainers[i] = { q: q, a: v }; }));
    });

    var rc = document.getElementById('u18-recovery');
    recoveryQs.forEach(function (q, i) {
      rc.appendChild(buildLabeledTextarea(q, function (v) { answers.recovery[i] = { q: q, a: v }; }));
    });

    var pr = document.getElementById('u18-priorities');
    priorities.forEach(function (q, i) {
      pr.appendChild(buildOpenQuestion(i + 1, q, function (v) { answers.priorities[i] = { q: q, a: v }; }));
    });

    document.getElementById('u18-anything-else').addEventListener('input', function (e) {
      answers.anything_else = e.target.value;
    });
  }

  // ============================================================
  // NAVIGATION
  // ============================================================
  function showPart(n) {
    document.querySelectorAll('.u18-part').forEach(function (p) {
      p.classList.toggle('is-active', Number(p.getAttribute('data-part')) === n);
    });
    var pct = (n / TOTAL_PARTS) * 100;
    document.getElementById('u18-progress-fill').style.width = pct + '%';
    document.getElementById('u18-progress-text').textContent = 'Part ' + String(n).padStart(2, '0') + ' of ' + String(TOTAL_PARTS).padStart(2, '0');

    document.getElementById('u18-prev').classList.toggle('u18-btn-disabled', n === 1);
    document.getElementById('u18-next').textContent = (n === TOTAL_PARTS) ? 'Finish' : 'Next';

    window.scrollTo({ top: document.querySelector('.u18-progress-wrap').offsetTop, behavior: 'smooth' });
  }

  function goNext() {
    if (currentPart < TOTAL_PARTS) {
      currentPart++;
      showPart(currentPart);
    } else {
      complete();
    }
  }

  function goPrev() {
    if (currentPart > 1) {
      currentPart--;
      showPart(currentPart);
    }
  }

  function begin() {
    answers.name = document.getElementById('u18-player-name').value || '';
    answers.club = document.getElementById('u18-player-club').value || '';

    document.getElementById('u18-intro').style.display = 'none';
    document.getElementById('u18-progress').style.display = 'block';
    document.getElementById('u18-nav').style.display = 'flex';
    showPart(1);
  }

  function complete() {
    document.getElementById('u18-form').style.display = 'none';
    document.getElementById('u18-progress').style.display = 'none';
    document.getElementById('u18-complete').classList.add('is-active');

    var emailLink = buildEmailLink();
    document.getElementById('u18-email-link').setAttribute('href', emailLink);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ============================================================
  // PDF GENERATION
  // ============================================================
  function generatePDF() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit: 'pt', format: 'a4' });

    var PAGE_W = doc.internal.pageSize.getWidth();   // ~595
    var PAGE_H = doc.internal.pageSize.getHeight();  // ~842
    var MARGIN = 50;
    var CONTENT_W = PAGE_W - MARGIN * 2;
    var y = MARGIN;

    // Colours
    var NAVY = [13, 24, 41];
    var SLATE = [30, 58, 95];
    var STEEL = [74, 158, 204];
    var RED = [224, 53, 53];
    var ICE = [237, 244, 250];
    var TEXT = [26, 31, 46];
    var MUTE = [107, 114, 128];

    function setFont(size, weight, color) {
      doc.setFont('helvetica', weight || 'normal');
      doc.setFontSize(size);
      var c = color || TEXT;
      doc.setTextColor(c[0], c[1], c[2]);
    }

    function newPage() {
      doc.addPage();
      y = MARGIN;
      drawFooter();
    }

    function ensureSpace(needed) {
      if (y + needed > PAGE_H - MARGIN - 20) newPage();
    }

    function drawFooter() {
      var footerY = PAGE_H - 25;
      setFont(8, 'bold', NAVY);
      doc.text('Pattenden Peak Performance', MARGIN, footerY);
      setFont(8, 'normal', MUTE);
      doc.text('  ·  Self-Assessment Workbook', MARGIN + 130, footerY);
      doc.text('Page ' + doc.internal.getCurrentPageInfo().pageNumber, PAGE_W - MARGIN, footerY, { align: 'right' });
    }

    function drawText(text, options) {
      options = options || {};
      var size = options.size || 10;
      var weight = options.weight || 'normal';
      var color = options.color || TEXT;
      var spacing = options.spacing || 6;
      var indent = options.indent || 0;
      var maxW = CONTENT_W - indent;

      setFont(size, weight, color);
      var lines = doc.splitTextToSize(text, maxW);
      var lineHeight = size * 1.35;

      for (var i = 0; i < lines.length; i++) {
        ensureSpace(lineHeight);
        doc.text(lines[i], MARGIN + indent, y);
        y += lineHeight;
      }
      y += spacing;
    }

    function drawSectionPanel(part, title, sub) {
      ensureSpace(85);
      // navy block
      doc.setFillColor(NAVY[0], NAVY[1], NAVY[2]);
      doc.rect(MARGIN, y, CONTENT_W, 70, 'F');
      // red bottom rule
      doc.setFillColor(RED[0], RED[1], RED[2]);
      doc.rect(MARGIN, y + 70, CONTENT_W, 3, 'F');

      setFont(7, 'bold', STEEL);
      doc.text(part.toUpperCase(), MARGIN + 14, y + 18);
      setFont(20, 'bold', [255, 255, 255]);
      doc.text(title, MARGIN + 14, y + 42);
      if (sub) {
        setFont(9, 'normal', ICE);
        var sl = doc.splitTextToSize(sub, CONTENT_W - 28);
        doc.text(sl[0], MARGIN + 14, y + 60);
      }
      y += 88;
    }

    function drawCheckedItem(text, isChecked) {
      var size = 9;
      var lineHeight = size * 1.35;
      ensureSpace(lineHeight + 4);
      // Box
      doc.setDrawColor(SLATE[0], SLATE[1], SLATE[2]);
      doc.setLineWidth(0.8);
      if (isChecked) {
        doc.setFillColor(SLATE[0], SLATE[1], SLATE[2]);
        doc.rect(MARGIN, y - 8, 8, 8, 'FD');
        // checkmark
        doc.setDrawColor(255, 255, 255);
        doc.setLineWidth(1.2);
        doc.line(MARGIN + 1.5, y - 4, MARGIN + 3.5, y - 2);
        doc.line(MARGIN + 3.5, y - 2, MARGIN + 6.5, y - 6);
        doc.setLineWidth(0.8);
      } else {
        doc.rect(MARGIN, y - 8, 8, 8, 'D');
      }
      setFont(size, isChecked ? 'bold' : 'normal', isChecked ? NAVY : MUTE);
      var lines = doc.splitTextToSize(text, CONTENT_W - 18);
      doc.text(lines[0], MARGIN + 14, y);
      y += lineHeight + 1;
    }

    function drawAnswerBox(text) {
      var t = (text || '').trim();
      if (!t) {
        setFont(9, 'italic', MUTE);
        ensureSpace(14);
        doc.text('(Not answered)', MARGIN + 8, y);
        y += 14;
        return;
      }
      setFont(10, 'normal', TEXT);
      var lines = doc.splitTextToSize(t, CONTENT_W - 16);
      var totalHeight = lines.length * 13.5 + 12;
      ensureSpace(totalHeight);
      doc.setFillColor(247, 245, 240); // very light cream
      doc.setDrawColor(214, 210, 199);
      doc.rect(MARGIN, y - 9, CONTENT_W, totalHeight, 'FD');
      for (var i = 0; i < lines.length; i++) {
        doc.text(lines[i], MARGIN + 8, y + (i * 13.5) + 4);
      }
      y += totalHeight + 8;
    }

    function drawScale(value) {
      var labelW = 38;
      var startX = MARGIN + 14;
      ensureSpace(20);
      doc.setDrawColor(214, 210, 199);
      doc.setLineWidth(0.6);

      var hasValue = (typeof value === 'number' && value >= 1 && value <= 5);

      for (var i = 1; i <= 5; i++) {
        var bx = startX + (i - 1) * (labelW + 4);
        if (hasValue && value === i) {
          doc.setFillColor(SLATE[0], SLATE[1], SLATE[2]);
          doc.rect(bx, y - 8, labelW, 14, 'FD');
          setFont(8, 'bold', [255, 255, 255]);
        } else {
          doc.setFillColor(255, 255, 255);
          doc.rect(bx, y - 8, labelW, 14, 'FD');
          setFont(8, 'normal', MUTE);
        }
        doc.text(String(i), bx + labelW / 2, y, { align: 'center' });
      }
      y += 18;
    }

    function drawLikertItem(text, value) {
      ensureSpace(34);
      setFont(9, 'normal', TEXT);
      var lines = doc.splitTextToSize(text, CONTENT_W);
      for (var i = 0; i < lines.length; i++) {
        doc.text(lines[i], MARGIN, y);
        y += 12;
      }
      y += 2;
      drawScale(value);
      y += 4;
    }

    // ====================== COVER PAGE ======================
    doc.setFillColor(NAVY[0], NAVY[1], NAVY[2]);
    doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
    doc.setFillColor(RED[0], RED[1], RED[2]);
    doc.rect(0, 0, PAGE_W, 4, 'F');

    setFont(8, 'bold', [255, 255, 255]);
    doc.text('PATTENDEN PEAK PERFORMANCE', MARGIN, 80);
    setFont(7, 'bold', STEEL);
    doc.text('FOR ACADEMY FOOTBALLERS', MARGIN, 96);

    setFont(7, 'bold', STEEL);
    doc.text('SELF-ASSESSMENT WORKBOOK', MARGIN, 220);

    setFont(36, 'bold', [255, 255, 255]);
    doc.text('Get to know', MARGIN, 280);
    doc.text('yourself, on purpose.', MARGIN, 325);

    doc.setFillColor(RED[0], RED[1], RED[2]);
    doc.rect(MARGIN, 350, 50, 3, 'F');

    setFont(11, 'normal', ICE);
    var heroSub = 'A guided self-assessment for academy players. Used in the ninety-minute session, and yours to keep.';
    var heroLines = doc.splitTextToSize(heroSub, CONTENT_W - 100);
    for (var i = 0; i < heroLines.length; i++) {
      doc.text(heroLines[i], MARGIN, 380 + i * 16);
    }

    // Player name strip
    setFont(7, 'bold', STEEL);
    doc.text('PLAYER NAME', MARGIN, 580);
    setFont(13, 'bold', [255, 255, 255]);
    doc.text(answers.name || '_________________________', MARGIN, 605);

    setFont(7, 'bold', STEEL);
    doc.text('CLUB / ACADEMY', MARGIN, 645);
    setFont(13, 'bold', [255, 255, 255]);
    doc.text(answers.club || '_________________________', MARGIN, 670);

    setFont(7, 'bold', STEEL);
    doc.text('DATE COMPLETED', MARGIN, 710);
    setFont(13, 'bold', [255, 255, 255]);
    var today = new Date();
    var dateStr = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    doc.text(dateStr, MARGIN, 735);

    setFont(8, 'normal', MUTE);
    doc.text('Tim Pattenden  ·  Leadership and Performance Consultant  ·  Pattenden Peak Performance', MARGIN, PAGE_H - 50);
    doc.text('Accredited Spotlight Practitioner  ·  Safeguarding Lead L3  ·  pattpeakperformance.com', MARGIN, PAGE_H - 36);

    // ====================== PART 01 ======================
    newPage();
    drawSectionPanel('Part 01', 'Your football right now.', 'Where you are. Not where you should be. Where you actually are.');
    Object.keys(answers.part1).sort(function (a, b) { return Number(a) - Number(b); }).forEach(function (k) {
      var item = answers.part1[k];
      drawText(String(Number(k) + 1).padStart(2, '0') + '  ' + item.q, { weight: 'bold', size: 10, color: NAVY, spacing: 4 });
      drawAnswerBox(item.a);
    });

    // ====================== PART 02 ======================
    newPage();
    drawSectionPanel('Part 02', 'Mindset (COPE).', 'How you view it. Calm or alert, hopeful or careful, holding back or jumping in.');
    copeBlocks.forEach(function (block) {
      var b = answers.cope[block.key];
      ensureSpace(60);
      drawText(block.title, { weight: 'bold', size: 12, color: NAVY, spacing: 4 });
      block.items.forEach(function (itText, idx) {
        var val = (b && b.items && b.items['i' + idx]) ? b.items['i' + idx].value : null;
        drawLikertItem(itText, val);
      });
      ensureSpace(40);
      drawText('OPEN QUESTION.  ' + block.open, { weight: 'bold', size: 9, color: RED, spacing: 4 });
      drawAnswerBox(b ? b.open_a : '');
      y += 8;
    });

    // ====================== PART 03 ======================
    newPage();
    drawSectionPanel('Part 03', 'Behaviour (FLEX).', 'How you do it. The way you actually show up, on and off the pitch.');
    flexBlocks.forEach(function (block) {
      var b = answers.flex[block.key];
      ensureSpace(60);
      drawText(block.title, { weight: 'bold', size: 12, color: NAVY, spacing: 4 });
      block.items.forEach(function (itText, idx) {
        var val = (b && b.items && b.items['i' + idx]) ? b.items['i' + idx].value : null;
        drawLikertItem(itText, val);
      });
      ensureSpace(40);
      drawText('OPEN QUESTION.  ' + block.open, { weight: 'bold', size: 9, color: RED, spacing: 4 });
      drawAnswerBox(b ? b.open_a : '');
      y += 8;
    });

    // ====================== PART 04 ======================
    newPage();
    drawSectionPanel('Part 04', 'Under pressure.', 'What changes when the load comes on.');
    drawText('Pressure triggers (ticked).', { weight: 'bold', size: 11, color: NAVY, spacing: 6 });
    pressureTriggers.forEach(function (t) {
      drawCheckedItem(t, answers.pressure_triggers.indexOf(t) > -1);
    });
    y += 10;
    drawText('What shows up under pressure (ticked).', { weight: 'bold', size: 11, color: NAVY, spacing: 6 });
    pressureShows.forEach(function (t) {
      drawCheckedItem(t, answers.pressure_shows.indexOf(t) > -1);
    });
    y += 10;
    drawText('Three open questions.', { weight: 'bold', size: 11, color: NAVY, spacing: 6 });
    Object.keys(answers.pressure_open).sort().forEach(function (k) {
      var item = answers.pressure_open[k];
      drawText(String(Number(k) + 1).padStart(2, '0') + '  ' + item.q, { weight: 'bold', size: 10, color: NAVY, spacing: 4 });
      drawAnswerBox(item.a);
    });

    // ====================== PART 05 ======================
    newPage();
    drawSectionPanel('Part 05', 'Strengths in motion.', 'What works for you, and where it sometimes works against you.');
    drawText('Top three strengths.', { weight: 'bold', size: 11, color: NAVY, spacing: 6 });
    answers.strengths.forEach(function (s, i) {
      if (!s) return;
      drawText('Strength ' + String(i + 1).padStart(2, '0') + '.', { weight: 'bold', size: 10, color: NAVY, spacing: 2 });
      drawAnswerBox(s.strength);
      drawText('When it serves you best:', { weight: 'normal', size: 9, color: SLATE, spacing: 2 });
      drawAnswerBox(s.best);
      drawText('When it works against you:', { weight: 'normal', size: 9, color: SLATE, spacing: 2 });
      drawAnswerBox(s.worst);
      y += 6;
    });
    y += 6;
    drawText('What people who know you well say.', { weight: 'bold', size: 11, color: NAVY, spacing: 6 });
    Object.keys(answers.others_say).sort().forEach(function (k) {
      var item = answers.others_say[k];
      drawText(item.q, { weight: 'bold', size: 9, color: NAVY, spacing: 2 });
      drawAnswerBox(item.a);
    });

    // ====================== PART 06 ======================
    newPage();
    drawSectionPanel('Part 06', 'Your engine.', 'What gets the best out of you, and what drains it.');
    drawText('Fuel.', { weight: 'bold', size: 11, color: NAVY, spacing: 6 });
    Object.keys(answers.fuel).sort().forEach(function (k) {
      var item = answers.fuel[k];
      drawText(item.q, { weight: 'bold', size: 9, color: NAVY, spacing: 2 });
      drawAnswerBox(item.a);
    });
    y += 8;
    drawText('Drainers.', { weight: 'bold', size: 11, color: NAVY, spacing: 6 });
    Object.keys(answers.drainers).sort().forEach(function (k) {
      var item = answers.drainers[k];
      drawText(item.q, { weight: 'bold', size: 9, color: NAVY, spacing: 2 });
      drawAnswerBox(item.a);
    });
    y += 8;
    drawText('Recovery.', { weight: 'bold', size: 11, color: NAVY, spacing: 6 });
    Object.keys(answers.recovery).sort().forEach(function (k) {
      var item = answers.recovery[k];
      drawText(item.q, { weight: 'bold', size: 9, color: NAVY, spacing: 2 });
      drawAnswerBox(item.a);
    });

    // ====================== PART 07 ======================
    newPage();
    drawSectionPanel('Part 07', 'What you want from the session.', 'Three priorities. In your words.');
    Object.keys(answers.priorities).sort().forEach(function (k) {
      var item = answers.priorities[k];
      drawText(String(Number(k) + 1).padStart(2, '0') + '  ' + item.q, { weight: 'bold', size: 10, color: NAVY, spacing: 4 });
      drawAnswerBox(item.a);
    });
    y += 8;
    drawText('Anything else you want me to know.', { weight: 'bold', size: 11, color: NAVY, spacing: 6 });
    drawAnswerBox(answers.anything_else);

    // Draw footer on first page (cover doesn't get one — it's the hero)
    // Each newPage already calls drawFooter, so all body pages have footers.

    var fname = 'PPP_U18_Self_Assessment_' + (answers.name || 'Player').replace(/[^a-zA-Z0-9]+/g, '_') + '.pdf';
    doc.save(fname);
  }

  // ============================================================
  // EMAIL LINK
  // ============================================================
  function buildEmailLink() {
    var subject = 'U18 Self-Assessment Workbook - ' + (answers.name || 'Player');
    var body = "Hi Tim,\n\n";
    body += "I've completed the U18 Self-Assessment Workbook. The PDF is attached.\n\n";
    body += "Player: " + (answers.name || '') + "\n";
    body += "Club / academy: " + (answers.club || '') + "\n";
    body += "Date completed: " + new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + "\n\n";
    body += "See you in the session.\n";
    return 'mailto:pattpeakperformance@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  // ============================================================
  // BIND
  // ============================================================
  buildAll();
  document.getElementById('u18-begin').addEventListener('click', begin);
  document.getElementById('u18-prev').addEventListener('click', goPrev);
  document.getElementById('u18-next').addEventListener('click', goNext);
  document.getElementById('u18-download').addEventListener('click', generatePDF);

})();