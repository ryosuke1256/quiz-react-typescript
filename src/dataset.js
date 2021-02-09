const dataset = {
  Computer: [
    {
      question:
        '問1 トランスポート層のプロトコルであり、信頼性よりもリアルタイム性が重視される場合に用いられるものはどれか?',
      answers: ['HTTP', 'UDP', 'TCP', 'IP'],
      correct: 'UDP',
      explain: [
        'HTTPはアプリケーション層のプロトコルです',
        'UDPはトランスポート層のプロトコルで信頼性よりも速度を重視したものです',
        'TCPはトランスポート層のプロトコルですが違います',
        'IPはインターネット層のプロトコルです',
      ],
    },
    {
      question:
        'ソフトウェア開発の活動のうち、アジャイル開発においても重視されているリファクタリングはどれか？',
      answers: [
        'ソフトウェアの品質を高めるために、２人のプログラマが協力して、一つのプログラムをコーディングする。',
        '動作するソフトウェアを迅速に開発するために、テストケースを先に設定してから、プログラムをコーディングする。',
        'ソフトウェアの保守性を高めるために、外部仕様を変更することなく、プログラムの内部構造を変更する',
        '利用者からフィードバックを得るために、提供予定のソフトウェアの試作品を早期に作成する',
      ],
      correct: '2.2',
      explain: ['あ', 'い', 'う', 'え'],
    },
    {
      question: 'computerクイズ3',
      answers: ['1.3', '2.3', '3.3', '4.3'],
      correct: '2.3',
      explain: ['か', 'き', 'く', 'け'],
    },
    {
      question: 'computerクイズ4',
      answers: ['1.4', '2.4', '3.4', '4.4'],
      correct: '2.4',
      explain: ['さ', 'し', 'す', 'せ'],
    },
  ],
  Finance: [
    {
      question: '実質金利とは？',
      answers: [
        '名目金利＋物価上昇率',
        '名目金利ー物価上昇率',
        '平均賃金×物価上昇率',
        '平均賃金÷物価上昇率',
      ],
      correct: '名目金利ー物価上昇率',
      explain: [
        '惜しい！年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
      ],
    },
    {
      question: 'financeクイズ2',
      answers: ['1.2', '2.2', '3.2', '4.2'],
      correct: '名目金利ー物価上昇率',
      explain: [
        '惜しい！年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
      ],
    },
    {
      question: 'financeクイズ3',
      answers: ['1.3', '2.3', '3.3', '4.3'],
      correct: '名目金利ー物価上昇率',
      explain: [
        '惜しい！年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
      ],
    },
    {
      question: 'financeクイズ4',
      answers: ['1.4', '2.4', '3.4', '4.4'],
      correct: '名目金利ー物価上昇率',
      explain: [
        '惜しい！年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
        '年2%の金利が付いても年3%物価が上昇すればお金の価値は年1%下がります！',
      ],
    },
  ],
  Game: [
    {
      question: 'FF10の主人公の名前は？',
      answers: ['アーロン', 'クラウド', 'ユウナ', 'ティーダ'],
      correct: 'ティーダ',
      explain: [
        'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
        'FF7の主人公です！',
        'FF10のヒロインですが主人公ではありません！',
        'FF10は名作ですね!',
      ],
    },
    {
      question: 'computerクイズ2',
      answers: ['1.2', '2.2', '3.2', '4.2'],
      explain: [
        'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
        'FF7の主人公です！',
        'FF10のヒロインですが主人公ではありません！',
        'FF10は名作ですね!',
      ],
    },
    {
      question: 'computerクイズ3',
      answers: ['1.3', '2.3', '3.3', '4.3'],
      explain: [
        'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
        'FF7の主人公です！',
        'FF10のヒロインですが主人公ではありません！',
        'FF10は名作ですね!',
      ],
    },
    {
      question: 'computerクイズ4',
      answers: ['1.4', '2.4', '3.4', '4.4'],
      explain: [
        'FF10に出てくるかっこいいおじさんですが主人公ではありません笑',
        'FF7の主人公です！',
        'FF10のヒロインですが主人公ではありません！',
        'FF10は名作ですね!',
      ],
    },
  ],
  History: [
    {
      question: '本能寺の変を起こした人物の名前はなんでしょう？',
      answers: ['伊達政宗', '徳川家康', '明智光秀', '豊臣秀吉'],
      correct: '明智光秀',
      explain: ['残念！', '残念！', 'さすがです！', '残念!'],
    },
    {
      question: 'computerクイズ2',
      answers: ['1.2', '2.2', '3.2', '4.2'],
      correct: '明智光秀',
      explain: ['残念！', '残念！', 'さすがです！', '残念!'],
    },
    {
      question: 'computerクイズ3',
      answers: ['1.3', '2.3', '3.3', '4.3'],
      correct: '明智光秀',
      explain: ['残念！', '残念！', 'さすがです！', '残念!'],
    },
    {
      question: 'computerクイズ4',
      answers: ['1.4', '2.4', '3.4', '4.4'],
      correct: '明智光秀',
      explain: ['残念！', '残念！', 'さすがです！', '残念!'],
    },
  ],
};

export default dataset;
