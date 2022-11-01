module.exports = {
	convert: function(string, skip) {
		// net 9 \((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*\))*\))*\))*\)
	 string = this.escape_html(string);
    if(!skip) {
    	let data = string.match(/latex\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\)/g), tmp;
			if(data) {
				let length = data.length;
				for (let i = 0; i < length; i++) {
					if(data[i].length > 0) {
						tmp = this.equation_to_latex(data[i].slice(6,-1));
						string = string.replace(data[i], '$$$$'+tmp+'$$$$')
					}
				}
			}
    } else string = this.equation_to_latex(string);
		return string
	},
	escape_html: function(text) {
		let map = {
			'&amp;': '&',
			'&lt;': ' < ',
			'&amp;lt;': ' ≤ ',
			'&gt;': ' > ',
			'&amp;gt;': ' ≥ ',
			'&nbsp;': ' ',
			'𝑎': 'a', '𝑏': 'b', '𝑐': 'c', '𝑑': 'd', '𝑒': 'e', '𝑓': 'f', '𝑔': 'g', 'ℎ': 'h', '𝑖': 'i', '𝑗': 'j', '𝑘': 'k', '𝑙': 'l', '𝑚': 'm', '𝑛': 'n', '𝑜': 'o', '𝑢': 'u', '𝑝': 'p', '𝑞': 'q', '𝑟': 'r', '𝑡': 't', '𝑠': 's', '𝑣': 'v', '𝑤': 'w', '𝑥': 'x', '𝑦': 'y', '𝑧': 'z',
			'𝐴': 'A', '𝐵': 'B', '𝐶': 'C', '𝐷': 'D', '𝐸': 'E', '𝐹': 'F', '𝐺': 'G', '𝐻': 'H', '𝐼': 'I', '𝐽': 'J', '𝐾': 'K', '𝐿': 'L', '𝑀': 'M', '𝑁': 'N', '𝑂': 'O', '𝑃': 'P', '𝑄': 'Q', '𝑅': 'R', '𝑆': 'S', '𝑇': 'T', '𝑈': 'U', '𝑉': 'V', '𝑊': 'W', '𝑋': 'X', '𝑌': 'Y', '𝑍': 'Z',
			'^′': '′'
		};
		return text.replace(/(&amp;lt;|&amp;gt;|&amp;|&lt;|&gt;|&nbsp;|𝑎|𝑏|𝑐|𝑑|𝑒|𝑓|𝑔|ℎ|𝑖|𝑗|𝑘|𝑙|𝑚|𝑛|𝑜|𝑢|𝑝|𝑞|𝑟|𝑡|𝑠|𝑣|𝑤|𝑥|𝑦|𝑧|𝐴|𝐵|𝐶|𝐷|𝐸|𝐹|𝐺|𝐻|𝐼|𝐽|𝐾|𝐿|𝑀|𝑁|𝑂|𝑃|𝑄|𝑅|𝑆|𝑇|𝑈|𝑉|𝑊|𝑋|𝑌|𝑍|\^′)/g, (m) => map[m] );
	},
	equation_to_latex: function(string) {
		string = string.replace(/\{/g, ' !** ').replace(/\}/g, ' **! ')
			.replace(/(\s*(\u{3016}|\u{3017})[\s]*)/gu,' ')
			.replace(/\u{00B1}/gu,'\\pmspxx')
			.replace(/\u{221E}/gu,'\\inftyspxx')
			.replace(/\u{2260}/gu,'\\nespxx')
			.replace(/\u{00D7}/gu,'\\timesspxx')
			.replace(/\u{00F7}/gu,'\\divspxx')
			.replace(/\u{221D}/gu,'\\proptospxx')
			.replace(/\u{226A}/gu,'\\llspxx')
			.replace(/\u{226B}/gu,'\\ggspxx')
			.replace(/\u{2264}/gu,'\\lespxx')
			.replace(/\u{2265}/gu,'\\gespxx')
			.replace(/\u{2213}/gu,'\\mpspxx')
			.replace(/\u{2245}/gu,'\\congspxx')
			.replace(/\u{2248}/gu,'\\approxspxx')
			.replace(/\u{2249}/gu,'\\not\\approxspxx')
			.replace(/\u{2241}/gu,'\\not\\simspxx')
			.replace(/\u{2261}/gu,'\\equivspxx')
			.replace(/\u{2262}/gu,'\\not\\equivspxx')
			.replace(/\u{2200}/gu,'\\forallspxx')
			.replace(/\u{2202}/gu,'\\partialspxx')
			.replace(/\u{222A}/gu,'\\cupspxx')
			.replace(/\u{2229}/gu,'\\capspxx')
			.replace(/\u{2205}/gu,'\\emptysetspxx')
			.replace(/\u{2206}/gu,'\\trianglespxx')
			.replace(/\u{2207}/gu,'\\nablaspxx')
			.replace(/\u{2203}/gu,'\\existsspxx')
			.replace(/\u{2204}/gu,'\\nexistsspxx')
			.replace(/\u{2208}/gu,'\\inspxx')
			.replace(/\u{2209}/gu,'\\not\\inspxx')
			.replace(/\u{220B}/gu,'\\nispxx')
			.replace(/\u{220C}/gu,'\\not\\nispxx')
			.replace(/\u{2190}/gu,'\\leftarrowspxx')
			.replace(/\u{2191}/gu,'\\uparrowspxx')
			.replace(/\u{2192}/gu,'\\tospxx')
			.replace(/\u{2193}/gu,'\\downarrowspxx')
			.replace(/\u{2194}/gu,'\\leftrightarrowspxx')
			.replace(/\u{21D0}/gu,'\\Leftarrowspxx')
			.replace(/\u{21D1}/gu,'\\Uparrowspxx')
			.replace(/\u{21D2}/gu,'\\Rightarrowspxx')
			.replace(/\u{21D3}/gu,'\\Downarrowspxx')
			.replace(/\u{21D4}/gu,'\\Leftrightarrowspxx')
			.replace(/\u{21CB}/gu,'\\leftrightharpoonsspxx')
			.replace(/\u{21CC}/gu,'\\rightleftharpoonsspxx')
			.replace(/\u{21A6}/gu,'\\mapstospxx')
			.replace(/\u{21A4}/gu,'\\leftmapstospxx')
			.replace(/\u{296A}/gu,'\\leftbarharpoonspxx')
			.replace(/\u{296D}/gu,'\\rightbarharpoonspxx')
			.replace(/\u{00AC}/gu,'\\negspxx')
			.replace(/\u{03C0}|\u{1D70B}/gu,'\\pispxx')
			.replace(/\u{03B1}|\u{1D6FC}/gu,'\\alphaspxx')
			.replace(/\u{03B2}|\u{1D6FD}/gu,'\\betaspxx')
			.replace(/\u{03B3}|\u{1D6FE}/gu,'\\gammaspxx')
			.replace(/\u{03B4}|\u{1D6FF}/gu,'\\deltaspxx')
			.replace(/\u{03BB}|\u{1D706}/gu,'\\lambdaspxx')
			.replace(/\u{03B5}/gu,'\\varepsilospxxn')
			.replace(/\u{03F5}|\u{1D700}/gu,'\\epsilonspxx')
			.replace(/\u{03B8}/gu,'\\thetaspxx')
			.replace(/\u{03D1}/gu,'\\varthetaspxx')
			.replace(/\u{03BC}|\u{1D707}/gu,'\\muspxx')
			.replace(/\u{03C1}/gu,'\\rhospxx')
			.replace(/\u{03C3}/gu,'\\sigmaspxx')
			.replace(/\u{03C4}/gu,'\\tauspxx')
			.replace(/\u{03BE}/gu,'\\xispxx')
			.replace(/\u{03C6}|\u{1D711}/gu,'\\varphispxx')
			.replace(/\u{03C9}/gu,'\\omegaspxx')
			.replace(/\u{0394}/gu,'\\Deltaspxx')
			.replace(/\u{03A0}/gu,'\\Pispxx')
			.replace(/\u{03A3}/gu,'\\Sigmaspxx')
			.replace(/\u{03A6}/gu,'\\Phispxx')
			.replace(/\u{03A9}/gu,'\\Omegaspxx')
			.replace(/\u{222B}/gu,'\\intspxx')
			.replace(/\u{222C}/gu,'\\iintspxx')
			.replace(/\u{222D}/gu,'\\iiintspxx')
			.replace(/\u{222E}/gu,'\\ointspxx')
			.replace(/\u{2211}/gu,'\\sumspxx')
			.replace(/\u{22C3}/gu,'\\bigcupspxx')
			.replace(/\u{22C2}/gu,'\\bigcapspxx')
			.replace(/\u{27FA}/gu,'\\iffspxx')
			.replace(/\u{2227}/gu,'\\wedgespxx')
			.replace(/\u{2228}/gu,'\\veespxx')
			.replace(/\u{22A5}/gu,'\\perpspxx')
			.replace(/\u{2220}/gu,'\\anglespxx')
			.replace(/\u{2221}/gu,'\\measuredanglespxx')
			.replace(/\u{2222}/gu,'\\sphericalanglespxx')
			.replace(/\u{2225}/gu,'\\parallelspxx')
			.replace(/\u{2282}/gu,'\\subsetspxx')
			.replace(/\u{2283}/gu,'\\supsetspxx')
			.replace(/\u{2286}/gu,'\\subseteqspxx')
			.replace(/\u{2287}/gu,'\\supseteqspxx')
			.replace(/\u{2293}/gu,'\\sqcapspxx')
			.replace(/\u{2294}/gu,'\\sqcupspxx')
			.replace(/\u{2216}/gu,'\\setminusspxx')
			.replace(/\u{2217}/gu,'\\astspxx')
			.replace(/\u{2113}/gu,'\\ellspxx')
			.replace(/\u{2115}/gu,'\\mathbb{N}')
			.replace(/\u{2124}/gu,'\\mathbb{Z}')
			.replace(/\u{211A}/gu,'\\mathbb{Q}')
			.replace(/\u{2102}/gu,'\\mathbb{C}')
			.replace(/\u{2119}/gu,'\\mathbb{P}')
			.replace(/\u{211D}/gu,'\\mathbb{R}')
			.replace(/\u{2212}/gu,'-')
			.replace(/\u{2592}|\u{25A1}/gu,' ')
			.replace(/\u{006F}/gu,'o')
			.replace(/_\u{2061}/gu,'_')
			.replace(/\u{0026}|\u{002B}|\u{002D}|\u{003D}|\u{003A}/gu, (x) => ` ${x} `)
			.replace(/(ln|lim|log|min|max|sin|cos|tan|cot|csc|sec)\u{2061}(\(([^()]*?)\)|[\w\\\{\}]*)/gu,(match, x, y) => x+y )
		
		while(string.match(/\u{221A}/gu)) {
			string = string.replace(/\u{221A}(\(([^()]*?)&([\w\\\{\}\^⁡]*|.*)\)|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\)|[\w\\\{\}]*)/gu, function(match, x, y, z) {
				if(z) return `\\sqrt[${y}]{${z}}`;
				return `\\sqrt{${y || x}}`
			})
		}

		while(string.match(/\u{221B}/gu)) {
			string = string.replace(/\u{221B}(\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\)|[\w\\\{\}]*)/gu,(match, x, y) => `\\sqrt[3]{${x}}`)
		}

		while(string.match(/\u{221C}/gu)) {
			string = string.replace(/\u{221C}(\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\)|[\w\\\{\}]*)/gu, (match, x) => `\\sqrt[4]{${x}}`)
		}

		string = string.replace(/\u{005E}(\(.*?\)|.[-+*]{1}|\\\w*\{.*?\}|\\\w*|[\w\^]*)/gu, (match, x) => `^{${x}}`)

			.replace(/(\([^()]*?\)|.{1})(?:\s\u{20D7}|\u{20D7})/gu, (match, x) => `\\overrightarrow{${x}}`)

			.replace(/(\([^()]*?\)|.{1})(?:\s\u{0302}|\u{0302})/gu, (match, x) => `\\widehat{${x}}`)

			.replace(/\u{23DC}(\([^()]*?\)|[\w\\\{\}\^\u{2061}]*)/gu, (match, x) => `\\overset\\frown{${x}}`)

			.replace(/\u{23DE}(\([^()]*?\)|[\w\\\{\}\^\u{2061}]*)/gu, (match, x) => `\\overbrace{${x}}`)

			.replace(/\u{00AF}(\([^()]*?\)|[\w\\\{\}\^\u{2061}]*)/gu, (match, x) => `\\overline{${x}}`)

			.replace(/(\([^()]*?\)|[\w\\\{\}\^\u{2061}]*)\s\u{0305}/gu, (match, x) => `\\overline{${x}}`)

			.replace(/[\w\\\{\}\^]*\u{2534}(\([^()]*?\)|[\w\\\{\}\^\u{2061}]*)/gu, (match, x) => `\\xrightarrow{${x}}`)

			.replace(/([^=() ]*)\u{252C}(\(.*?\)|[-+*;,.\w\\\{\}\[\]\^\u{2061}]*)/gu, (match, x, y) => `\\underset{${y}}{${x}}`)

			.replace(/_(\([^()]*?\)|[\w\\\{\}]+)/gu,(match, x) => `_{${x}}`)

			.replace(/([^=\w()]*)\u{25A0}\(([^\u{25A0}]*)\)/gu, function(match, x, y) {
				let form = '';
				x = x.trim();
				if(x === '(') form = 'p';
				if(x === '[') form = 'b';
				if(x === '**') form = 'B';
				if(x === '|') form = 'v';
				if(x === '||') form = 'V';
				y = y.replace(/@/g, ' \\\\ ');
				return `\\begin{${form}matrix} ${y} \\end{${form}matrix}`
			})
			.replace(/\s*([^=:.;\w()]*)\u{2588}\((.*)\)(?:.*?\u{2524})/gu,function(match, x, y) {
				
				let form = x.trim();
				if(form === '**') form = '\\{';
				if(form === '||') form = '\\|';
				y = y.replace(/@/g, ' \\\\ ');
				return `\\Bigg${form}\\begin{array}{l} ${y} \\end{array}`
			})
			.replace(/(\(.*?\)|[\w\\\{\}\^\u{2061}]*)[\u{00A6}@](\(.*?\)|[\w\\\{\}\^\u{2061}]*)/gu,(match, x, y) => `\\begin{array}{l} ${x}\\\\${y} \\end{array}`)

		let frac_regex_item = "(\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\))*\\))*\\)|(?:\\\\|[^\\s()]*)\\w*\\{(?:[^\\{\\}]|\\{(?:[^\\{\\}]|\\{(?:[^\\{\\}]|\\{(?:[^\\{\\}]|\\{[^\\{\\}]*\\})*\\})*\\})*\\})*\\}|[-+_*\\w\\\\\\{\\}\\^\\u{2061}\\u{2032}]*)";
		//let frac_regex_item = "(\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\)|(?:\\|[^\s]*)\w*\{(?:[^\{\}]|\{(?:[^\{\}]|\{(?:[^\{\}]|\{(?:[^\{\}]|\{[^\{\}]*\})*\})*\})*\})*\}|[-+_*\w\\\{\}\^\u{2061}\u{2032}]*)";
		let frac_regex = new RegExp(frac_regex_item+'\\u{002F}'+frac_regex_item, 'u');
		console.log(frac_regex)
		console.log(string);
		while(string.match(/\u{002F}/u)) {
			string = string.replace(frac_regex, (match, x, y) => `\\frac{${x}}{${y}}`)
		}

		string = string.replace(/spxx/g,' ').replace(/!\*{2}/g, '\\{').replace(/\*{2}!/g, '\\}');

		let need_clean = /\{\s*\(((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*)\)\s*\}/g;
		while(string.match(need_clean)) {
			string = string.replace(need_clean, (match, x) => `{${x}}`)
		}
		string = string.replace(/</g, ' < ');
		return string
	}
}
