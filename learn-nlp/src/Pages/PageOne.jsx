import React, { useState } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageOne() {
  let navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
  }

  const copyToClipboard = (text) => {
    if (navigator.clipboard) { // Modern async clipboard API
      navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    } else { // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        alert('Text copied to clipboard');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
      document.body.removeChild(textarea);
    }
  };

  const [isOpen, setIsOpen] = useState(false);  // State to manage the collapsible section
  const [isOpenText, setIsOpenText] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const toggleCollapseText = () => {
    setIsOpenText(!isOpenText);
  };

  const installCommands = `
  pip install nltk
  pip install matplotlib
  `;

  const snippet1 = `
  import string  # For handling punctuation
  from nltk.tokenize import word_tokenize  # For splitting text into words

  # Reading text from a file
  text = open('read.txt', encoding='utf-8').read()  # Read the text file

  # Converting text to lowercase
  lower_case = text.lower()  # Makes the text lowercase
  `;

  const snippet2 = `
  # Removing punctuation from the text
  cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))  # Removes punctuation  
  `

  const snippet3 = `
  # Tokenizing the text into words
  tokenized_words = word_tokenize(cleaned_text, "english")  # Splits the text into words  
  `

  const emotionsText = `
    'victimized': 'cheated',
    'accused': 'cheated',
    'acquitted': 'singled out',
    'adorable': 'loved',
    'adored': 'loved',
    'affected': 'attracted',
    'afflicted': 'sad',
    'aghast': 'fearful',
    'agog': 'attracted',
    'agonized': 'sad',
    'alarmed': 'fearful',
    'amused': 'happy',
    'angry': 'angry',
    'anguished': 'sad',
    'animated': 'happy',
    'annoyed': 'angry',
    'anxious': 'attracted',
    'apathetic': 'bored',
    'appalled': 'angry',
    'appeased': 'singled out',
    'appreciated': 'esteemed',
    'apprehensive': 'fearful',
    'approved of': 'loved',
    'ardent': 'lustful',
    'aroused': 'lustful',
    'attached': 'attached',
    'attracted': 'attracted',
    'autonomous': 'independent',
    'awed': 'fearful',
    'awkward': 'embarrassed',
    'beaten down': 'powerless',
    'beatific': 'happy',
    'belonging': 'attached',
    'bereaved': 'sad',
    'betrayed': 'cheated',
    'bewildered': 'surprise',
    'bitter': 'angry',
    'blissful': 'happy',
    'blithe': 'happy',
    'blocked': 'powerless',
    'blue': 'sad',
    'boiling': 'angry',
    'bold': 'fearless',
    'bored': 'bored',
    'brave': 'fearless',
    'bright': 'happy',
    'brisk': 'happy',
    'calm': 'safe',
    'capable': 'adequate',
    'captivated': 'attached',
    'careless': 'powerless',
    'categorized': 'singled out',
    'cautious': 'fearful',
    'certain': 'fearless',
    'chagrined': 'belittled',
    'challenged': 'attracted',
    'chastised': 'hated',
    'cheated': 'cheated',
    'cheerful': 'happy',
    'cheerless': 'sad',
    'cheery': 'happy',
    'cherished': 'attached',
    'chicken': 'fearful',
    'cocky': 'independent',
    'codependent': 'codependent',
    'coerced': 'cheated',
    'comfortable': 'happy',
    'common': 'average',
    'competent': 'adequate',
    'complacent': 'apathetic',
    'composed': 'adequate',
    'concerned': 'attracted',
    'confident': 'adequate',
    'confused': 'surprise',
    'connected': 'attached',
    'conned': 'cheated',
    'consumed': 'obsessed',
    'contented': 'happy',
    'controlled': 'powerless',
    'convivial': 'happy',
    'cornered': 'entitled',
    'courageous': 'fearless',
    'cowardly': 'fearful',
    'craving': 'attracted',
    'crestfallen': 'sad',
    'criticized': 'hated',
    'cross': 'angry',
    'cross-examined': 'singled out',
    'crushed': 'sad',
    'curious': 'attracted',
    'cut off': 'alone',
    'daring': 'fearless',
    'dark': 'sad',
    'dedicated': 'attracted',
    'defeated': 'powerless',
    'defenseless': 'fearful',
    'degraded': 'belittled',
    'dejected': 'sad',
    'depressed': 'sad',
    'deserted': 'hated',
    'desirable': 'loved',
    'despondent': 'sad',
    'detached': 'alone',
    'determined': 'focused',
    'diminished': 'belittled',
    'disappointed': 'demoralized',
    'discarded': 'hated',
    'disconsolate': 'sad',
    'discontented': 'sad',
    'discounted': 'belittled',
    'discouraged': 'powerless',
    'disgraced': 'belittled',
    'disgusted': 'angry',
    'disheartened': 'demoralized',
    'disillusioned': 'demoralized',
    'disjointed': 'derailed',
    'dismal': 'sad',
    'dismayed': 'fearful',
    'disoriented': 'derailed',
    'disparaged': 'cheated',
    'displeased': 'sad',
    'disrespected': 'belittled',
    'distressed': 'sad',
    'distrustful': 'anxious',
    'dolorous': 'sad',
    'doubtful': 'fearful',
    'down': 'sad',
    'downhearted': 'sad',
    'dreadful': 'sad',
    'dreary': 'sad',
    'dubious': 'anxious',
    'dull': 'sad',
    'duped': 'cheated',
    'eager': 'attracted',
    'earnest': 'attracted',
    'ecstatic': 'happy',
    'elated': 'happy',
    'embarrassed': 'embarrassed',
    'empathetic': 'attached',
    'enchanted': 'attracted',
    'encouraged': 'adequate',
    'engrossed': 'attracted',
    'enraged': 'angry',
    'enterprising': 'fearless',
    'enthusiastic': 'happy',
    'entrusted': 'loved',
    'esteemed': 'esteemed',
    'excited': 'happy',
    'excluded': 'alone',
    'exempt': 'entitled',
    'exhausted hopeless': 'powerless',
    'exhilarated': 'happy',
    'exploited': 'cheated',
    'exposed': 'fearful',
    'fabulous': 'ecstatic',
    'fainthearted': 'fearful',
    'fantastic': 'ecstatic',
    'fascinated': 'attracted',
    'favored': 'entitled',
    'fearful': 'fearful',
    'fervent': 'attracted',
    'fervid': 'attracted',
    'festive': 'happy',
    'flat': 'sad',
    'focused': 'focused',
    'forced': 'powerless',
    'forsaken': 'hated',
    'framed': 'cheated',
    'free': 'free',
    'free & easy': 'happy',
    'frightened': 'fearful',
    'frisky': 'happy',
    'frustrated': 'angry',
    'full of anticipation': 'attracted',
    'full of ennui': 'apathetic',
    'fuming': 'angry',
    'funereal': 'sad',
    'furious': 'angry',
    'gallant': 'fearless',
    'genial': 'happy',
    'glad': 'happy',
    'gleeful': 'happy',
    'gloomy': 'sad',
    'glum': 'sad',
    'grief-stricken': 'sad',
    'grieved': 'sad',
    'guilt': 'sad',
    'guilty': 'singled out',
    'happy': 'happy',
    'hardy': 'fearless',
    'heartbroken': 'sad',
    'heavyhearted': 'sad',
    'hesitant': 'fearful',
    'high-spirited': 'happy',
    'hilarious': 'happy',
    'hopeful': 'attracted',
    'horny': 'lustful',
    'horrified': 'fearful',
    'hot and bothered': 'lustful',
    'humiliated': 'sad',
    'humorous': 'happy',
    'hurt': 'sad',
    'hysterical': 'fearful',
    'ignored': 'hated',
    'ill at ease': 'sad',
    'immobilized': 'apathetic',
    'immune': 'entitled',
    'important': 'happy',
    'impotent': 'powerless',
    'imprisoned': 'entitled',
    'in a huff': 'angry',
    'in a stew': 'angry',
    'in control': 'adequate',
    'in fear': 'fearful',
    'in pain': 'sad',
    'in the dumps': 'sad',
    'in the zone': 'focused',
    'incensed': 'angry',
    'included': 'attached',
    'indecisive': 'anxious',
    'independent': 'free',
    'indignant': 'angry',
    'infatuated': 'lustful',
    'inflamed': 'angry',
    'injured': 'sad',
    'inquisitive': 'attracted',
    'insecure': 'codependent',
    'insignificant': 'belittled',
    'intent': 'attracted',
    'interested': 'attracted',
    'interrogated': 'singled out',
    'intrigued': 'attracted',
    'irate': 'angry',
    'irresolute': 'fearful',
    'irresponsible': 'powerless',
    'irritated': 'angry',
    'isolated': 'alone',
    'jaunty': 'happy',
    'jocular': 'happy',
    'jolly': 'happy',
    'jovial': 'happy',
    'joyful': 'happy',
    'joyless': 'sad',
    'joyous': 'happy',
    'jubilant': 'happy',
    'justified': 'singled out',
    'keen': 'attracted',
    'labeled': 'singled out',
    'lackadaisical': 'bored',
    'lazy': 'apathetic',
    'left out': 'hated',
    'let down': 'hated',
    'lethargic': 'apathetic',
    'lied to': 'cheated',
    'lighthearted': 'happy',
    'liked': 'attached',
    'lively': 'happy',
    'livid': 'angry',
    'lonely': 'alone',
    'lonesome': 'alone',
    'lost': 'lost',
    'loved': 'attached',
    'low': 'sad',
    'lucky': 'happy',
    'lugubrious': 'sad',
    'macho': 'independent',
    'mad': 'angry',
    'melancholy': 'sad',
    'menaced': 'fearful',
    'merry': 'happy',
    'mirthful': 'happy',
    'misgiving': 'fearful',
    'misunderstood': 'alone',
    'moody': 'sad',
    'moping': 'sad',
    'motivated': 'attracted',
    'mournful': 'sad',
    'needed': 'attracted',
    'needy': 'codependent',
    'nervous': 'fearful',
    'obligated': 'powerless',
    'obsessed': 'obsessed',
    'offended': 'angry',
    'oppressed': 'sad',
    'optionless': 'entitled',
    'ordinary': 'average',
    'organized': 'adequate',
    'out of control': 'powerless',
    'out of sorts': 'sad',
    'outmaneuvered': 'entitled',
    'outraged': 'angry',
    'overjoyed': 'happy',
    'overlooked': 'hated',
    'overwhelmed': 'powerless',
    'panicked': 'fearful',
    'passionate': 'lustful',
    'passive': 'apathetic',
    'pathetic': 'sad',
    'peaceful': 'safe',
    'pensive': 'anxious',
    'perplexed': 'anxious',
    'phobic': 'fearful',
    'playful': 'happy',
    'pleased': 'happy',
    'powerless': 'powerless',
    'pressured': 'burdened',
    'privileged': 'entitled',
    'proud': 'happy',
    'provoked': 'angry',
    'punished': 'hated',
    'put upon': 'burdened',
    'quaking': 'fearful',
    'quiescent': 'apathetic',
    'rageful': 'angry',
    'rapturous': 'happy',
    'rated': 'singled out',
    'reassured': 'fearless',
    'reckless': 'powerless',
    'redeemed': 'singled out',
    'regretful': 'sad',
    'rejected': 'alone',
    'released': 'free',
    'remorse': 'sad',
    'replaced': 'hated',
    'repulsed': 'demoralized',
    'resentful': 'angry',
    'resolute': 'fearless',
    'respected': 'esteemed',
    'responsible': 'adequate',
    'restful': 'fearful',
    'revered': 'esteemed',
    'rueful': 'sad',
    'sad': 'sad',
    'satisfied': 'happy',
    'saucy': 'happy',
    'scared': 'fearful',
    'secure': 'fearless',
    'self-reliant': 'fearless',
    'serene': 'happy',
    'shaky': 'fearful',
    'shamed': 'sad',
    'shocked': 'surprise',
    'significant': 'esteemed',
    'singled out': 'singled out',
    'skeptical': 'anxious',
    'snoopy': 'attracted',
    'somber': 'sad',
    'sparkling': 'happy',
    'spirited': 'happy',
    'spiritless': 'sad',
    'sprightly': 'happy',
    'startled': 'surprise',
    'stereotyped': 'singled out',
    'stifled': 'powerless',
    'stout hearted': 'fearless',
    'strong': 'independent',
    'suffering': 'sad',
    'sulky': 'sad',
    'sullen': 'angry',
    'sunny': 'happy',
    'surprised': 'surprise',
    'suspicious': 'anxious',
    'sympathetic': 'codependent',
    'tense': 'anxious',
    'terrified': 'fearful',
    'terrorized': 'fearful',
    'thankful': 'happy',
    'threatened': 'fearful',
    'thwarted': 'powerless',
    'timid': 'fearful',
    'timorous': 'fearful',
    'torn': 'derailed',
    'tortured': 'sad',
    'tragic': 'sad',
    'tranquil': 'happy',
    'transported': 'happy',
    'trapped': 'entitled',
    'tremulous': 'fearful',
    'tricked': 'entitled',
    'turned on': 'lustful',
    'unapproved of': 'hated',
    'unbelieving': 'anxious',
    'uncertain': 'anxious',
    'unconcerned': 'apathetic',
    'understood': 'attached',
    'unfocussed': 'lost',
    'unlovable': 'hated',
    'unloved': 'hated',
    'unmotivated': 'apathetic',
    'unshackled': 'free',
    'unsupported': 'belittled',
    'up in arms': 'angry',
    'upset': 'fearful',
    'validated': 'loved',
    'valued': 'esteemed',
    'victimized': 'sad',
    'violated': 'cheated',
    'virulent': 'angry',
    'vivacious': 'happy',
    'vulnerable': 'powerless',
    'wavering': 'anxious',
    'weak': 'powerless',
    'welcomed': 'loved',
    'woebegone': 'sad',
    'woeful': 'sad',
    'worn down': 'powerless',
    'worn out': 'powerless',
    'worried': 'fearful',
    'worshiped': 'esteemed',
    'wrathful': 'angry',
    'wronged': 'singled out',
    'wrought up': 'angry',
    'yearning': 'lustful',
    'yellow': 'fearful',
    'zealous': 'attracted',
    'abandoned': 'hated',
    'absolved': 'singled out',
    'absorbed': 'attracted',
    'abused': 'powerless',
    'accepted': 'loved',
    'aching': 'sad',
    'acrimonious': 'angry',
    'addicted': 'codependent',
    'adequate': 'adequate',
    'admired': 'esteemed',
    'affectionate': 'attached',
    'affronted': 'singled out',
    'afraid': 'fearful',
    'airy': 'happy',
    'alone': 'alone',
    'ambivalent': 'bored',
    'apathetic': 'apathetic',
    'apprehensive': 'anxious',
    'arrogant': 'independent',
    'ashamed': 'embarrassed',
    'astonished': 'surprise',
    'at ease': 'safe',
    'attacked': 'fearful',
    'audacious': 'fearless',
    'autonomous': 'free',
    'average': 'average',
    'avid': 'attracted',
    'baffled': 'lost',
    'bashful': 'powerless',
    'belittled': 'belittled',
    'buoyant': 'happy',
    'burdened': 'burdened',
    'clouded': 'sad',
    'committed': 'focused',
    'compassionate': 'attached',
    'compelled': 'obsessed',
    'dauntless': 'fearless',
    'debonair': 'happy',
    'deceived': 'entitled',
    'delighted': 'ecstatic',
    'demoralized': 'demoralized',
    'derailed': 'derailed',
    'desirous': 'attracted',
    'despairing': 'sad',
    'devastated': 'angry',
    'diffident': 'fearful',
    'discredited': 'belittled',
    'disheartened': 'sad',
    'disinclined': 'demoralized',
    'disorganized': 'powerless',
    'downcast': 'sad',
    'entitled': 'entitled',
    'excited': 'adequate',
    'exultant': 'happy',
    'fidgety': 'fearful',
    'frowning': 'sad',
    'full of misgiving': 'anxious',
    'great': 'happy',
    'hapless': 'sad',
    'hated': 'hated',
    'heroic': 'fearless',
    'hostile': 'angry',
    'in despair': 'sad',
    'indifferent': 'bored',
    'infuriated': 'angry',
    'insecure': 'fearful',
    'inspired': 'happy',
    'inspiring': 'attracted',
    'judged': 'singled out',
    'justified': 'singled out',
    'laughting': 'happy',
    'loved': 'loved',
    'loving': 'attached',
    'low': 'sad',
    'lustful': 'lustful',
    'manipulated': 'cheated',
    'mumpish': 'sad',
    'nosey': 'attracted',
    'numb': 'apathetic',
    'obliterated': 'powerless',
    'peaceful': 'happy',
    'petrified': 'fearful',
    'piqued': 'angry',
    'piteous': 'sad',
    'powerless': 'powerless',
    'questioning': 'anxious',
    'rejected': 'hated',
    'self-satisfied': 'happy',
    'set up': 'entitled',
    'shut out': 'alone',
    'sorrowful': 'sad',
    'spirited': 'sad',
    'supported': 'esteemed',
    'suspicious': 'fearful',
    'terrific': 'happy',
    'trapped': 'entitled',
    'trembling': 'fearful',
    'uncomfortable': 'anxious',
    'underestimated': 'belittled',
    'unhappy': 'sad',
    'vindicated': 'singled out',
    'worked up': 'angry'
  `;

  const readText = `
  As early as I could remember myself, my memories have been colored with melancholy and sad feelings. Yes, I admit it: I am a person who loves being sad. As a child, I loved gloomy fairy tales; as a teenager, I loved tragic novels and films, which made my parents worry a lot. I realized that I did not meet their expectations: in their ideal world, a happy person must irradiate joy all the time. In my view, this state of constant life enjoyment looked slightly idiotic. And I kept asking myself if sadness is really so bad.

  One of the points, which I have discovered, is that people very seldom differentiate between sadness and misery and mistake one feeling for the other, although they are very different in nature. Misery can only be caused by some deeply traumatic experience; however, sadness in a natural middle between being extremely happy and feeling deep sorrow.

  Another important issue is that sadness often accompanies the process of thinking, consideration, and evaluation. If, for example, you once watch the facial expression of a person who is writing something deep in thought, you will see that he/she looks sad.

  Furthermore, sadness is absolutely natural: almost all our important events in life are colored with it. We feel it when we have to leave a place where we felt good, we experience it when we are happy because deep down we all know it will not last forever, when parents see their children getting married, they are happy, but at the same time they are sad, because their kids have grown up.

  So, sadness is positive. Next time you wake up in the morning and realize you feel sad, do not get upset, it only means you are normal and experience the whole range of emotions.

  `

  return (
    <div className="page">
      <h1 className="page-title">1 - NLP Setup & Introduction</h1>
        <hr></hr>
      <div className="section-divider">
        <p className="description">Natural language processing, or NLP, combines computational linguistics—rule-based modeling of human language—with statistical and machine learning models to enable computers and digital devices to recognize, understand and generate text and speech. (Source: IBM) For our case, we will be focused on <strong>text-based NLP</strong> and deal with <strong>Sentiment Analysis</strong>.</p>
        <p className="description">If this is a foreign concept to you: DO NOT WORRY! These series of modules will guide you to become an NLP expert.</p>
        <p className="description">This first module will introduce you to basic NLP techniques. You will learn to read text from a file, convert it to lowercase, and remove punctuation. This is important because it standardizes the text, making it easier to analyze later on. Cleaned and standardized text ensures that words are consistently recognized, regardless of their original formatting.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h1 className="heading">Setup</h1>
          <h2 className="subheading">Installation Commands</h2>
          <p className="description">Before we start analyzing text, you need to set up your environment by installing some necessary Python libraries. These libraries will help us process and analyze the text.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="bash" style={ solarizedlight }>
              {installCommands}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(installCommands)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
        </div>
        <p className="description"><strong>NLTK</strong> stands for Natural Language Toolkit and is one of the most essential Python modules for NLP.</p>
        <p className="description"><strong>Matplotlib</strong> is a Python visualization library that can quickly create graphs and charts with data.</p>
      </div>
      <div className="section-divider">
        <h2 className="subheading">Create read.txt</h2>
        <p className="description">For our example, create a text file in your IDE named <strong>read.txt</strong> and copy the text below:</p>
        <p className="description">This is the text that will get analyzed later.</p>
        <button onClick={toggleCollapseText} className="toggle-button" style={{ marginTop: '20px', cursor: 'pointer' }}>
          {isOpenText ? 'Hide' : 'Show'} read.txt
        </button>
        {isOpenText && (
          <div className="collapsible-content" style={{ marginTop: '10px', position: 'relative' }}>
            <SyntaxHighlighter language="text" style={ solarizedlight }>
              { readText }
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(readText)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
          </div>
        )}
      </div>
      <div className="section-divider">
        <h2 className="subheading">Create emotions.txt</h2>
        <p className="description">For our example, create a text file in your IDE named <strong>emotion.txt</strong> and copy the text below:</p>
        <p className="description">This will be used later to manually connect different words with different emotions.</p>
        <button onClick={toggleCollapse} className="toggle-button" style={{ marginTop: '20px', cursor: 'pointer' }}>
          {isOpen ? 'Hide' : 'Show'} emotions.txt
        </button>
        {isOpen && (
          <div className="collapsible-content" style={{ marginTop: '10px', position: 'relative' }}>
            <SyntaxHighlighter language="text" style={ solarizedlight }>
              { emotionsText }
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(emotionsText)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
          </div>
        )}
      </div>
      <hr></hr>
      <div className="section-divider">
        <h1 className="heading">NLP Introduction</h1>
        <h2 className="subheading">Basic NLP Technique 1: Reading Text and Converting to Lowercase</h2>
        <p className="description">We read the text from a file and convert it to lowercase to ensure consistency. This means that 'Apple' and 'apple' will be treated as the same word.</p>
        <div className="code-container" style={{ position: 'relative' }}>
          <SyntaxHighlighter language="bash" style={ solarizedlight }>
            {snippet1}
          </SyntaxHighlighter>
          <button onClick={() => copyToClipboard(installCommands)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
            Copy
          </button>
        </div>
      </div>
      <div className="section-divider">
        <h2 className="subheading">Basic NLP Technique 2: Removing Punctuation</h2>
        <p className="description">Removing punctuation helps in focusing on the words themselves, making further analysis more straightforward.</p>
        <div className="code-container" style={{ position: 'relative' }}>
          <SyntaxHighlighter language="bash" style={ solarizedlight }>
            {snippet2}
          </SyntaxHighlighter>
          <button onClick={() => copyToClipboard(installCommands)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
            Copy
          </button>
        </div>
      </div>
      <div className="section-divider">
        <h2 className="subheading">Basic NLP Technique 3: Tokenizing the Text into Words</h2>
        <p className="description">Tokenization breaks down the cleaned text into individual words, which are the building blocks for further analysis.</p>
        <div className="code-container" style={{ position: 'relative' }}>
          <SyntaxHighlighter language="bash" style={ solarizedlight }>
            {snippet3}
          </SyntaxHighlighter>
          <button onClick={() => copyToClipboard(installCommands)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
            Copy
          </button>
        </div>
      </div>
      <hr></hr>
      <button className="back-button" style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => handleNavigate('/')}>
        Back
      </button>
    </div>
  );
}

export default PageOne;