const data = {
    "ტრიგონომეტრია": [
        { q: "$\\sin(30^\\circ)=?$", a: "$\\frac{1}{2}$" },
        { q: "$\\sin^2x + \\cos^2x = ?$", a: "$1$" },
        { q: "$\\tan(x)$ $\\text{განისაზღვრება როგორც:}$", a: "$\\frac{\\sin(x)}{\\cos(x)}$" },
        { q: "$\\sin(60^\\circ)=?$", a: "$\\frac{\\sqrt{3}}{2}$" },
        { q: "$\\sin(90^\\circ)=?$", a: "$1$" },
        { q: "$\\cos(30^\\circ)=?$", a: "$\\frac{\\sqrt{3}}{2}$" },
        { q: "$\\cos(60^\\circ)=?$", a: "$\\frac{1}{2}$" },
        { q: "$\\cos(90^\\circ)=?$", a: "$0$" },
        { q: "$\\text{tg}(30^\\circ)=?$", a: "$\\frac{\\sqrt{3}}{3}$" },
        { q: "$\\text{tg}(60^\\circ)=?$", a: "$\\sqrt{3}$" },
        { q: "$\\text{tg}(90^\\circ)=?$", a: "არ განისაზღვრება" },
        { q: "$\\sin(45^\\circ)=?$", a: "$\\frac{\\sqrt{2}}{2}$" },
        { q: "$\\cos(45^\\circ)=?$", a: "$\\frac{\\sqrt{2}}{2}$" },
        { q: "თუ სამკუთხედის გვერდებია $a$, $b$, და $c$, მაშინ კოსინუსების თეორემის თანახმად $a^2=$", a: "$b^2+c^2-2bccos(\\alpha)$"},
        { q: "რისი ტოლია $y=sin(x)$ ფუნქციის მნიშვნელობათა არე", a: "$[-1;1]$"},
        { q: "რისი ტოლია $y=arcsin(x)$ ფუნქციის განსაზღვრის არე", a: "$[-1;1]$"},
        { q: "რისი ტოლია $y=arccos(x)$ ფუნქციის განსაზღვრის არე", a: "$[-1;1]$"},
        { q: "$\\text{tg}(45^\\circ)=?$", a: "$1$" }
    ],
    "პითაგორას თეორემა" : [
      { q : "მართკუთხა სამკუთხედის კათეტის კვადრატი ტოლია მისი გეგმილისა და ", a: "ჰიპოტენუზის ნამრავლის"},
      { q : "მართკუთხა სამკუთხედში კათეტების კვადრატების ჯამი ტოლია", a: "ჰიპოტენუზის კვადრატის"},
      { q : "მართკუთხა სამკუთხედში, მართი კუთხის წვეროდან დაშვებული სიმაღლის კვადრატი ტოლია", a: "ჰიპოტენუზაზე კათეტების გეგმილების ნამრავლის"},
      { q : "ტოლფერდა მართკუთხა სამკუთხედის ჰიპოტენუზისა და კათეტის შეფარდებაა  ", a: "$\\sqrt{2}$"}
    ],
    "წესიერი მრავალკუთხედები" : [
      { q: "$n$-კუთხედის შიდა კუთხეების ჯამი გამოითვლება ფორმულით:", 
        a: "$180(n-2)$", 
        help: "როცა მრავალკუთხედის გვერდების რაოდენობა იზრდება 1-ით, შიდა კუთხეების ჯამი იზრდება 180 გრადუსით.",             
       tasks: [ { q: "რას უდრის ხუთკუთხედის შიდა კუთხეების ჯამი?", a: "540"},
                 { q: "რას უდრის ექვსკუთხედის შიდა კუთხეების ჯამი?", a: "720"}
               ]},
      { q: "წესიერი $n$-კუთხედის ერთი შიდა კუთხე გამოითვლება ფორმულით:" , a: "$\\frac{180(n-2)}{n}$"},
      { q: "წესიერი ხუთკუთხედის თითოეული შიდა კუთხის ზომაა", a: "$108^\\circ$"},
      { q: "რისი ტოლია წესიერ სამკუთხედში ჩახაზული წრეწირის რადიუსის სიგრძე", a: "$\\frac{a}{2\\sqrt{3}}$"},
      { q: "რისი ტოლია წესიერ სამკუთხედზე შემოხაზული წრეწირის რადიუსის სიგრძე", a: "$\\frac{a}{\\sqrt{3}}$"},
      { q: "როგორ გამოითვლება წესიერი ექვსკუთხედის ფართობი?", a: "$\\frac{3\\sqrt{3}}{2}a^2$"},
      { q: "წესიერი ექვსკუთხედის თითოეული შიდა კუთხის ზომაა ", a: "$120^\\circ$"}
    ],
    "სამკუთხედის მსგავსება": [
        { q: "მსგავსი სამკუთხედების ფართობების შეფარდება ტოლია...", a: " $k^2$-ის" },
        { q: "მსგავსი სამკუთხედების შესაბამისი გვერდების სიგრძეები ერთმანეთის ტოლია. კი თუ არა?", a: "არა"},
        { q: "მსგავსი სამკუთხედების შესაბამისი გვერდების სიგრძეები ერთმანეთის პროპორციულია. კი თუ არა?", a: "კი"},
        { q: "სამკუთხედები რომ მსგავსი იყოს საკმარისია მათ ორი შესაბამისი კუთხე ტოლი ჰქონდეთ. კი თუ არა? ", a: "კი"},
        { q: "რისი ტოლია მსგავსი სამკუთხედების პერიმეტრების შეფარდება?", a: "$K$ კოეფიციენტის" }
    ],
    "წრფივი ფუნქცია": [
        { q: "წრფის განტოლებაა:", a: "$y=kx+b$"},
        { q: "თუ ორი წრფე ერთმანეთის მართობულია, მაშინ მათი საკუთხო კოეფიცინეტების ნამრავლი ...", a: "$-1$"},
        { q: "თუ ორი წრფე პარალელურია, მაშინ მათი საკუთხო კოეფიციენტები ...", a: "ერთმანეთის ტოლია"},
        { q: "წრფის საკუთხო $k$ კოეფიციენტი გამოითვლება ფორმულით:", a: "$\\dfrac{y_2-y_1}{x_2-x_1}$"},
        { q: "$y=kx+b$ სახით მოცემული წრფის განტოლებაში $b$ კოეფიციენტი გამოსახავს ...", a: "$y$ ღერძთან გადაკვეთის წერტილს"},
        { q: "$y=kx+b$ სახით მოცემული ფუნქცია ზრდადია თუკი ...", a: "$k$ კოეფიციენტი დადებითია"},
        { q: "$y=kx+b$ სახით მოცემული სახით მოცემული ფუნქცია კლებადია თუკი ...", a: "$k$ კოეფიციენტი უარყოფითია"},
        { q: "$ax=b$ სახის განტოლებას არ აქვს ამონახსნი თუკი ...", a: "$a=0$ და $b \\neq 0$"},
        { q: "$ax=b$ სახის განტოლებას აქვს უამრავი ამონახსნი თუკი ...", a: "$a=0$ და $b=0$"},
        { q: "რისი ტოლია $y=kx+b$ წრფესა და აბსცისათა ღერძს შორის მდებარე კუთხის ტანგენსი?", a: "$k$ კოეფიციენტის"},
        { q: "წრფის, როგორც გეომეტრიული ფიგურის, ზოგადი განტოლებაა: ", a: "$Ax+By=C$"}
    ],
  
    "კვადრატული ფუნქცია": [
        { q: "ვიეტას თეორემის მიხედვით: თუ $ax^2+bx+c=0$ განტოლების დისკრიმინანტი დადებითია, მაშინ ...", a: "$x_1+x_2=-\\dfrac{b}{a}$ და $x_1 \\cdot x_2=\\dfrac{c}{a}$ "},
        { q: "როგორ გამოითვლება პარაბოლას წვეროს კოორდინატები?", a: "$(\\dfrac{-b}{2a};\\dfrac{-D}{4a})$"},
        { q: "რამდენი ამონახსნი აქვს კვადრატულ განტოლებას, თუ მისი დისკრიმინანტი დადებითია?", a: "2"},
        { q: "$ax^2+bx=0$ სახის განტოლების ამოსახსნელად საჭიროა ...", a: "$x$ გავიტანოთ ფრჩხილებს გარეთ და მამრავლები გავუტოლოთ 0-ს."},
        { q: "როგორ ვიპოვოთ კვადრატული ფუნქციის უმცირესი მნიშვნელობა?", a: "$\\dfrac{-D}{4a}$"},
        { q: "როგორ ვიპოვოთ არგუმენტის მნიშვნელობა, რომლისთვისაც კვადრატული ფუნქცია ღებულობს უდიდეს მნიშვნელობას?", a: "$\\dfrac{-b}{2a}$"},
        { q: "პარაბოლას სიმეტრიის ღერძის განტოლებაა...", a: "$x=\\dfrac{-b}{2a}$"},
        { q: "პარაბოლას შტოები მიმართულია ზემოთ, როცა ...", a: "$a$ კოეფიციენტი დადებითია"},
        { q: "$x^2+bx$ არასრული სამწევრის სრულ კვადრატამდე შესავსებად საჭიროა ...", a: "დავუმატოთ $(\\dfrac{b}{2})^2$"},
        { q: "თუ $y=ax^2+bx+c$ ფუნქციის განტოლებას გავყოფთ $a$-კოეფიციენტზე, მაშინ ფუნქციის მინიმუმი უცვლელი დარჩება. კი თუ არა?", a: "არა"},
        { q: "თუ $ax^2+bx+c=0$  განტოლებას გავყოფთ $a$-კოეფიციენტზე, მაშინ განტოლების ამონახსნები უცვლელი დარჩება. კი თუ არა?", a: "კი"}
    ], 
  
    "ფიგურათა ფართობები": [
        { q: "როგორ გამოითვლება ტოლგვერდა სამკუთხედის ფართობი?", a: "$\\dfrac{\\sqrt{3}}{4}a^2$"},
        { q: "როგორ გამოითვლება პარალელოგრამის ფართობი ორი გვერდითა და მათ შორის მდებარე კუთხით?", a: "$absin(C)$"},
        { q: "რისი ტოლია მსგავსი ფიგურების ფართობების შეფარდება?", a: "მსგავსების კოეფიციენტის კვადრატის"},
        { q: "როგორ გამოითვლება ტრაპეციის ფართობი?", a: "შუახაზისა და სიმაღლის ნამრავლი"},
        { q: "როგორ გამოითვლება რომბის ფართობი?", a: "დიაგონალების ნამრავლის ნახევარი"},
        { q: "როგორ გამოითვლება კვადრატის ფართობი მისი დიაგონალის მეშვეობით?", a: "დიაგონალის კვადრატის ნახევარი"},
        { q: "როგორ გამოითვლება სამკუთხედის ფართობი მასზე შემოხაზული წრეწირის რადიუსის მეშვეობით?", a: "$S=\\dfrac{abc}{4R}$"},
        { q: "როგორ გამოითვლება სამკუთხედის ფართობი მასში ჩახაზული წრეწირის რადიუსის მეშვეობით?", a: "$S=\\dfrac{a+b+c}{2}r$"},
        { q: "როგორ გამოითვლება სამკუთხედის ფართობი მისი ფუძისა და ამ ფუძეზე დაშვებული სიმღლის მეშვეობით?", a: "$S=\\dfrac{1}{2}ah$"},
        { q: "როგორ გადავიყვანოთ კვადრატული მეტრი კვადრატულ სანტიმეტრში?", a: "კვადრატული მეტრი გავამრავლოთ 10 000-ზე"}
    ],
    "ვექტორები" :[
        {q: "როგორ გამოითვლება ვექტორებს შორის კუთხის კოსინუსი?", a: "$\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|}$"},
        {q: "როგორ გამოითვლება ვექტორის სიგრძე?", a: "$\\sqrt{x^2+y^2}$"},
        {q: "როგორ გამოითვლება ვექტორის კოორდინატები?", a: "$(x_2-x_1;y_2-y_1)$"},
        {q: "რას ეწოდება კოლინეარული ვექტორები?", a: "პაალელურ წრფეებზე მდებარე ვექტორებს"},
        {q: "ტოლი სიგრძის ვექტორები ერთმანეთის ტოლი ვექტორებია. კი თუ არა?", a: "არა"},
        {q: "ვექტორების ჯამით მიიღება ახალი ვექტორი. კი თუ არა?", a: "კი"},
        {q: "ვექტორები სკალარული ნამრავლი ახალი ვექტორია. კი თუ არა?", a: "არა"},
        {q: "მართობული ვექტორების სკალარული ნამრავლი ტოლია ...", a: "0"},
        {q: "თუ ვექტორებს შორის კუთხე ბლაგვია მაშინ...", a: "მათი სკალარული ნამრავლი უარყოფითია"},
        {q: "მოპირდაპირე ვექტორების ჯამი არის ...", a: "ნულოვანი ვექტორი"},
        {q: "ვექტორის სკალარზე გამრავლებით მიიღება უფრო დიდი სიგრძის ვექტორი. კი თუ არა?", a: "არა"},
        {q: "როგორ გამოითვლება ორი ვექტორის სკალარული ნამრავლი?", a: "$x_1 \\cdot x_2+y_1 \\cdot y_2$"}
    ],
    "სტატისტიკა" : [
        {q: "როგორ გამოითვლება მონაცემთა ერთობლიობის საშუალო არითმეტიკული?", a: "მონაცემთა ჯამი უნდა გავყოთ მათ რაოდენობაზე"},
        {q: "როგორ გამოითვლება ზრდადობით დალაგებული ლუწი რაოდენობის მონაცემთა მედიანა?", a: "შუა ორი მონაცემბის საშუალო"},
        {q: "რისი ტოლია მონაცემთა ფარდობითი სიხშირეების ჯამი?", a: "1"},
        {q: "რაც მეტად გაფანტულია მონაცემები, მით მეტია მონაცემთა სტანდარტული გადახრა. კი თუ არა?", a: "კი"},
        {q: "როგორ გამოითვლება მონაცემის სიხშირე?", a: "დავითვალოთ მონაცამის განმეორებათა რაოდენობა"},
        {q: "რას ეწოდება მონაცემთა ერთობლიობის მოდა? ", a: "მონაცემს, რომელიც ყველაზე ხშირად მეორდება"},
        {q: "რომელი მონაცემი შეგვიძლია ამოვაგდადოთ მონაცემთა ერთობლიობიდან, რომ საშუალო არითმეტიკული არ შეიცვალოს?", a: "საშუალოს ტოლი მონაცემი"},
        {q: "თუ მონაცემთა ეთობლიობიდან უდიდეს და უმცირეს მონაცემებს ამოვაგდებთ, მაშინ მედიანა უცვლელი დარჩება. კი თუ არა?", a: "კი"}
    ],
    "პროცენტი, ნაწილი, პროპორცია" : [
        {q: "რიცხვის 0.75-ზე გამრავლება ნიშნავს ამ რიცხვის ___ პროცენტით შემცირებას", a: "25"},
        {q: "რიცხვის 1.14-ზე გამრავლება ნიშნავს ამ რიცხვის ___ პროცენტით გაზრდას", a: "14"},
        {q: "რიცხვის გაორმაგება ნიშნავს ამ რიცხვის ___ პროცენტით გაზრდას", a: "100"},
        {q: "რიცხვის 3/5 ნაწილი იგივეა რაც ამ რიცხვის 60%. კი თუ არა?", a: "კი"},
        {q: "როგორ გავარკვიოთ პირველი რიცხვი მეორე რიცხვის რამდენი პროცენტია?", a: "პირველი რიცხვის მეორესთან შეფარდება გავამრავლოთ 100-ზე"},
        {q: "თუ პროდუქციის ფასი შემცირდა, როგორ გავარკვიოთ რამდენი პროცენტით დაიკლო ფასმა? ", a: "ფასების სხვაობა გავყოთ 100-ზე"},
        {q: "როგორ გავარკვიოთ ერთი რიცხვი მეორის ნაწილია?", a: "პირველი რიცხვი მეორესთან შევაფარდოთ და თუ შესაძლებელია შევკვეცოთ"},
        {q: "ჩანაწერი 64*1.45 ნიშნავს, რომ 64 გაიზარდა ___ პროცენტით.", a: "45"},
        {q: "ჩანაწერი 80*0.60 ნიშნავს, რომ 80 შემცირდა ___ პროცენტით. ", a: "40"},
        {q: "ჩანაწერი 37/100 იგივეა, რაც ___ %", a: "37"},
        {q: "1:500 მასშტაბის რუკაზე 1 სანტიმეტრს შეესაბამება ნამდვილი ზომის ___ სმ", a: "500"},
        {q: "თუ 1 : K მასშტაბის რუკაზე ფიგურის ფართობი გადაგვყავს ნამდვილი ზომის ფართობში, მაშინ ...", a: "რუკის ფართობს ვამრავლებთ $k^2$-ზე"},
        {q: "ფიგურის ფართობი მისი 1: K მასშტაბის გეგმის ფართობზე k-ჯერ მეტია. კი თუ არა?", a: "არა"}   
    ],
    "იცანი ფორმულა" : [
        {q: "$r=\\dfrac{a}{2\\sqrt{3}}$", a: "წესიერ სამკუთხედში ჩახაზული წრეწირის რადიუსი"},
        {q: "$R=\\dfrac{a}{2sin(x)}$", a: "სამკუთხედზე შემოხაზული წრეწირის რადიუსი"},
        {q: "$h^2=a_c \\cdot b_c$", a: "მართკუთხა სამკუთხედის სიმაღლე კათეტების გეგმილების მიხედვით"},
        {q: "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$", a: "მანძილი ორ წერტილს შორის სიბრტყეზე"},
        {q: "$absin(C)$", a: "პარალელოგრამის ფართობი"},
        {q: "$\\sqrt{x^2+y^2}$", a: "ვექტორის სიგრძე"},
        {q: "$\\sqrt{a^2+b^2-2abcos(C)}$", a: "სამკუთხედის გვერდის სიგრძე კოსინუსების თეორემის მეშვეობით"},
        {q: "$\\dfrac{1}{2}d^2$", a: "კვადრატის ფართობი დიაგონალის მეშვეობით"},
        {q: "$\\dfrac{-D}{4a}$", a: "კვადრატული ფუნქციის უდიდესი/უმცირესი მნიშვნელობა"},
        {q: "$\\dfrac{3\\sqrt{3}}{2}a^2$", a: "წესიერი ექვსკუთხედის ფართობი"},
        {q: "$\\dfrac{a}{sin(A)}=\\dfrac{b}{sin(B)}$", a: "სინუსების თეორემა"},
        {q: "$(-1)^karcsin(a)+\\pi k$", a: "$sinx=a$ განტოლების ამონახსნთა სიმრავლე"},
        {q: "$(x_2-x_1;y_2-y_1)$", a: "ვექტორის კოორდინატები"},
        {q: "$\\dfrac{a}{b}100$", a: "$a$ რიცხვი რამდენი პროცენტია $b$ რიცხვისა"},
        {q: "$(a-b)(a^2+ab+b^2)$", a: "$a^3-b^3$"},
        {q: "$2^n$", a: "$n$-ელემენეტიანი სიმრავლის ქვესიმრავლეთა რიცხვი"},
        {q: "$\\dfrac{2a_1+d(n-1)}{2}n$", a: "არითმეტიკული პროგრესიის პირველი $n$ წევრის ჯამი"},
        {q: "$\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|}$", a: "$a$ და $b$ ვექტორებს შორის კუთხის კოსინუსი"},
        {q: "$x+y\\geq\\2sqrt{x \\cdot y}$", a: "დამოკიდებულება $x$ და $y$ რიცხვების საშუალო არითმეტიკულსა და საშუალო გეომეტრიულს შორის"},
        {q: "$\\pm\\sqrt{1-cos^2(x)}$", a: "$sin(x)$"},
        {q: "$\\dfrac{a_n-a_m}{n-m}$", a: "არითმეტიკული პროგრესიის სხვაობა"},
        {q: "$(a+b)^2-2ab$", a: "$a^2+b^2$"},
        {q: "$d_1^2+d_2^2=2(a^2+b^2)$", a: "პარალელოგრამის დიაგონალების კვადრატების ჯამი მისი გვერდების სიგრძეების მიხედვით"},
        {q: "$x_1 \\cdot x_2+y_1 \\cdot y_2$", a: "ორი ვექტორის სკალარული ნამრავლი"},
        {q: "$a(x-x_0)^2+y_0$", a: "კვადრატული ფუნქცია წვეროს ფორმით"},
        {q: "$K_1 \\cdot K_2=-1$", a: "მართობული წრფეების საკუთხო კოეფიციენტები"},
        {q: "$\\dfrac{S_1}{S_2}=K^2$", a: "მსგავსი ფიგურების ფართობების შეფარდება"}
    ], 
    "გრაფიკები" : [
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=x^2$", func: "x*x" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=sin(x)$", func: "Math.sin(x)" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=|x|$", func: "Math.abs(x)" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=-x$", func: "-x" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=\\frac{1}{x}$", func: "1/x" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=\\sqrt{x}$", func: "Math.sqrt(x)" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=-x^2$", func: "-x*x" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=x^3$", func: "x*x*x" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=cos(x)$", func: "Math.cos(x)" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=2^x$", func: "2 ** x" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=log(x)$", func: "Math.log(x)" },
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=5$", func: "5"},
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=x^2+2$", func: "x*x+2"},
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=(x-2)^2$", func: "(x-2) ** 2"},
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=-x+3$", func: "-x+3"},
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=\\sqrt{x+2}$", func: "Math.sqrt(x+2)"},
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=x$", func: "x"},
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=3x$", func: "3*x"},
        { q: "რომელი ფუნქციის გრაფიკია გამოსახული სურათზე?", a: "$y=\\frac{1}{x^2}$", func: "1 /(x*x)"}
        
    ]
};

// 1. GLOBAL STATE
let currentStack = [];
let currentIndex = 0;
let board = null;
let currentTaskIndex = 0;

// 2. CORE UTILITIES
function shuffleArray(array) {
    if (!array) return;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 3. NAVIGATION FUNCTIONS
function startStack(name) {
    if (!data || !data[name]) return;
    const categorySource = data[name].cards ? data[name].cards : data[name];
    currentStack = [...categorySource];
    shuffleArray(currentStack);
    currentIndex = 0;
    const titleEl = document.getElementById('category-title');
    if (titleEl) titleEl.innerText = name;
    document.getElementById('menu').style.display = 'none';
    document.getElementById('player').style.display = 'block';
    updateCard();
}

function updateCard() {
    if (currentStack.length === 0) return;

    const card = currentStack[currentIndex];
    const textEl = document.getElementById('q-text-content');
    const aEl = document.getElementById('a-text');
    const imgEl = document.getElementById('q-img'); 
    const graphEl = document.getElementById('jxgbox');
    const flashcard = document.querySelector('.flashcard');
    const helpBtn = document.getElementById('help-btn');
    const taskBtn = document.getElementById('task-btn');
  
    closeTask();
    closeTheory();

    if (flashcard) {
        flashcard.classList.remove('flipped');
        flashcard.onclick = toggleFlip; 
    }

    if (textEl) textEl.innerHTML = card.q || "";
    if (aEl) aEl.innerHTML = card.a || "";

    if (imgEl) {
        if (card.img) {
            imgEl.src = card.img;
            imgEl.style.display = "block";
        } else {
            imgEl.style.display = "none";
        }
    }

    if (helpBtn) {
        if (card.help && card.help.trim() !== "") {
            helpBtn.style.display = "inline-block";
        } else {
            helpBtn.style.display = "none";
        }
    }

    // FIXED: Added the onclick assignment so the button actually works
    if (taskBtn) {
        if (card.tasks && Array.isArray(card.tasks) && card.tasks.length > 0) {
            taskBtn.style.display = "inline-block";
            taskBtn.onclick = openTask; 
        } else {
            taskBtn.style.display = "none";
        }
    }

    if (graphEl) {
        if (board) {
            JXG.JSXGraph.freeBoard(board);
            board = null; 
        }
        if (card.func && card.func.trim() !== "") {
            graphEl.style.display = "block";
            graphEl.style.visibility = "visible"; 
            graphEl.style.pointerEvents = "none"; 
            setTimeout(() => { renderGraph(card.func); }, 50);
        } else {
            graphEl.style.display = "none";
        }
    }

    const progressEl = document.getElementById('progress');
    if (progressEl) progressEl.innerText = `${currentIndex + 1} / ${currentStack.length}`;
    
    if (typeof window.renderMathInElement === 'function') {
        renderMathInElement(document.getElementById('player'), {
            delimiters: [
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '$$', right: '$$', display: true}
            ],
            throwOnError: false
        });
    }
}

// 4. THEORY MODAL FUNCTIONS
function openTheory(event) {
    if (event) event.stopPropagation();
    const card = currentStack[currentIndex];
    const modal = document.getElementById('theory-modal');
    const helpTextModal = document.getElementById('help-text-modal');

    if (modal && helpTextModal && card.help) {
        helpTextModal.innerHTML = card.help;
        modal.style.display = "block";
        if (typeof renderMathInElement === 'function') {
            renderMathInElement(helpTextModal, {
                delimiters: [
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false}
                ]
            });
        }
    }
}

function closeTheory() {
    const modal = document.getElementById('theory-modal');
    if (modal) modal.style.display = "none";
}

window.onclick = function(event) {
    const tModal = document.getElementById('theory-modal');
    const taskModal = document.getElementById('task-modal');
    if (event.target == tModal) closeTheory();
    if (event.target == taskModal) closeTask();
};

// 5. CORE GRAPHING & FLIPPING
function renderGraph(functionString) {
    if (typeof JXG === 'undefined') return;
    if (board) { JXG.JSXGraph.freeBoard(board); board = null; }
    try {
        board = JXG.JSXGraph.initBoard('jxgbox', {
            boundingbox: [-10, 10, 10, -10],
            axis: true,
            showCopyright: false,
            showNavigation: false,
            keepaspectratio: true
        });
        board.create('functiongraph', [function(x) {
            try { return eval(functionString); } catch(e) { return 0; }
        }], { strokeWidth: 3, strokeColor: '#4a90e2' });
    } catch (err) {
        console.error("Board Initialization Failed:", err);
    }
}

function nextCard() {
    currentIndex = (currentIndex + 1) % currentStack.length;
    updateCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + currentStack.length) % currentStack.length;
    updateCard();
}

function goHome() {
    if (board) { JXG.JSXGraph.freeBoard(board); board = null; }
    document.getElementById('menu').style.display = 'grid';
    document.getElementById('player').style.display = 'none';
} 

function toggleFlip() {
    const flashcard = document.querySelector('.flashcard');
    const graphEl = document.getElementById('jxgbox');
    if (!flashcard) return;
    flashcard.classList.toggle('flipped');
    if (graphEl) {
        if (flashcard.classList.contains('flipped')) {
            graphEl.style.visibility = "hidden";
        } else {
            if (currentStack[currentIndex] && currentStack[currentIndex].func) {
                graphEl.style.visibility = "visible";
            }
        }
    }
}

// 6. TASK MODAL LOGIC
function openTask(event) {
    if (event) event.stopPropagation();
    const card = currentStack[currentIndex];
    if (!card.tasks || card.tasks.length === 0) return;
    currentTaskIndex = 0; 
    displayTask();
    document.getElementById('task-modal').style.display = "block";
}

function displayTask() {
    const card = currentStack[currentIndex];
    const task = card.tasks[currentTaskIndex];
    document.getElementById('task-text-modal').innerHTML = task.q;
    document.getElementById('task-answer-text').innerHTML = "პასუხი: " + task.a;
    document.getElementById('task-number').innerText = `${currentTaskIndex + 1} / ${card.tasks.length}`;
    document.getElementById('task-answer-text').style.display = "none";
    document.getElementById('show-task-answer-btn').innerText = "პასუხის ნახვა";
    document.getElementById('task-nav-controls').style.visibility = (card.tasks.length > 1) ? "visible" : "hidden";

    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.getElementById('task-modal'), {
            delimiters: [
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false}
            ]
        });
    }
}

function changeTask(direction) {
    const card = currentStack[currentIndex];
    currentTaskIndex = (currentTaskIndex + direction + card.tasks.length) % card.tasks.length;
    displayTask();
}

function closeTask() {
    const modal = document.getElementById('task-modal');
    if (modal) modal.style.display = "none";
}

// ADDED: The missing function that makes the button work
function toggleTaskAnswer() {
    const ansText = document.getElementById('task-answer-text');
    const btn = document.getElementById('show-task-answer-btn');
    
    if (!ansText || !btn) return;

    if (ansText.style.display === "none" || ansText.style.display === "") {
        ansText.style.display = "block";
        btn.innerText = "პასუხის დამალვა";
        
        // Re-render math in the answer in case it was hidden
        if (typeof renderMathInElement === 'function') {
            renderMathInElement(ansText, {
                delimiters: [{left: '$', right: '$', display: false}]
            });
        }
    } else {
        ansText.style.display = "none";
        btn.innerText = "პასუხის ნახვა";
    }
}
