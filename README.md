<!-- <p align="center"><img src="https://raw.githubusercontent.com/wiki/gosling-lang/gosling.js/master/images/logo.png" width="450" /></p> -->

<div align="center">
<h1>Gosling.js</h1>

[![npm version](https://img.shields.io/npm/v/gosling.js.svg?style=flat-square)](https://www.npmjs.com/package/gosling.js) [![build status](https://img.shields.io/travis/sehilyi/geminid/master.svg?style=flat-square)](https://travis-ci.com/gosling-lang/gosling.js) [![codecov](https://img.shields.io/codecov/c/github/gosling-lang/gosling.js/master.svg?style=flat-square&?cacheSeconds=60)](https://codecov.io/gh/gosling-lang/gosling.js) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![online editor](https://img.shields.io/badge/demo-online_editor-E08243.svg?style=flat-square)](https://gosling.js.org/) [![docs](https://img.shields.io/badge/docs-📖-57B4E9.svg?style=flat-square)](https://gosling-lang.github.io/gosling-website/docs/)

</div>

<img width="1549" alt="teaser" src="https://user-images.githubusercontent.com/9922882/109852545-e05f3400-7c22-11eb-90f3-7371e4ddeb42.png">

<!--<p align="center"><img src="https://raw.githubusercontent.com/gosling-lang/gosling.js/master/img/cover.png" width="700"/></p>-->

<br/>

> ⚠️ Please be aware that the grammar of Gosling.js may change to some extent before the first official release.

## Introduction

Gosling.js is a declarative grammar for interactive (epi)genomics visualization on the Web.

<div align="center">
<table>
<tr><td>  
<pre>
{
  // A simple example
  "tracks": [{
      "data": {
        "url": "https://data-url.com",
        "type": "multivec",
        "row": "sample",
        "column": "position",
        "value": "peak",
        "categories": [
          "sample 1", 
          "sample 2", 
          "sample 3", 
          "sample 4"
        ]
      },
      "mark": "area",
      "overrideTemplate": true,
      "width": 400,
      "height": 100
  }]
}
</pre>

</td>
<td align="center">
<img src="https://raw.githubusercontent.com/gosling-lang/gosling.js/master/img/demo.gif"  width="400"/>

<a href="https://gosling.js.org/">Try Online</a>

</td>
</tr>
</table>
</div>

## Why Gosling?

The Gosling's key features compared to existing visualization libraries and grammars are as follows:

-   **Encoding/Data Scalability**: Gosling scales from whole genomes to single nucleotides via semantic zooming that updates visual encodings dynamically and by using the rendering and data access capabilities of [our HiGlass genomics visualization framework](http://higlass.io/).

-   **Expressiveness**: Gosling is designed to be expressive enough to generate pretty much any visualization of genome-mapped data, which we accomplished by basing the grammar on [our taxonomy of (epi)genomics data visualizations](https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.13727).

-   **Interactivity**: Gosling has intuitive and effective user interactions built in, including zooming and panning and [brushing and linking](https://infovis-wiki.net/wiki/Linking_and_Brushing). This enables flexible visualizations that cover a wide range of visual analysis scenarios, like overview + detail views with brushes or comparative views.

## Learn More About Gosling

-   [Documentation](https://gosling-lang.github.io/gosling-website/)
-   [Gosling.js Editor](https://gosling.js.org/)
-   [Community Examples](https://github.com/gosling-lang/gosling-examples)
-   [Roadmap](https://github.com/gosling-lang/gosling.js/projects/1)

## Contributing to Gosling.js
We welcome and greatly appreciate your contribution to this project! Please read [CONTRIBUTING.md](/CONTRIBUTING.md) to find guidelines.

## Contact

-   Open [Github Issues](https://github.com/gosling-lang/gosling.js/issues/) to ask questions or request features.

## Team

-   Sehi L'Yi (<sehi_lyi@hms.harvard.edu>)
-   Qianwen Wang (<qianwen_wang@hms.harvard.edu>)
-   Fritz Lekschas ([@flekschas](https://twitter.com/flekschas) | [lekschas.de](https://lekschas.de))
-   Nils Gehlenborg (<nils@hms.harvard.edu>)

## Citation

[L'Yi et al., 2021. “Gosling: A Grammar-based Toolkit for Scalable and Interactive Genomics Data Visualization.”](https://osf.io/6evmb)

```bib
@article{lyi2021gosling,
  title={Gosling: A Grammar-based Toolkit for Scalable and Interactive Genomics Data Visualization},
  author={Sehi L'Yi and Qianwen Wang and Fritz Lekschas and Nils Gehlenborg},
  year={2021},
  publisher={OSF Preprints},
  url={osf.io/6evmb},
  doi={10.31219/osf.io/6evmb},
}
```

## License

This project is licensed under the terms of the [MIT license](https://github.com/gosling-lang/gosling.js/blob/master/LICENSE.md).
