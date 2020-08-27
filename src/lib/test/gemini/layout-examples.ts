import { GeminiSpec } from '../../gemini.schema';

const MULTIVEC_FILE_CISTROME = 'https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ';
const MULTIVEC_FA = [
    'http://localhost:8001/api/v1/tileset_info/?d=XX4dPR0dSCGzD2n-xtlhbA',
    'https://resgen.io/api/v1/tileset_info/?d=WipsnEDMStahGPpRfH9adA'
][1];

export const SPEC_TO_SUPPORT: GeminiSpec = {
    tracks: [
        {
            data: {
                url: 'https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ',
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            superpose: [
                {
                    mark: 'line',
                    color: { field: 'sample', type: 'nominal' }
                },
                {
                    mark: 'point',
                    size: { field: 'peak', type: 'quantitative', range: [0, 6] },
                    color: { field: 'peak', type: 'quantitative' }
                }
            ],
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'peak', type: 'quantitative' },
            row: { field: 'sample', type: 'nominal' },
            width: 1000,
            height: 180
        }
    ]
};

export const GEMINI_PLUGIN_TRACK_SUPERPOSE: GeminiSpec = {
    tracks: [
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            superpose: [
                {
                    mark: 'line'
                },
                {
                    mark: 'point',
                    size: { field: 'peak', type: 'quantitative', range: [0, 6] }
                }
            ],
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'peak', type: 'quantitative' },
            row: { field: 'sample', type: 'nominal' },
            color: { field: 'sample', type: 'nominal' },
            width: 1000,
            height: 180
        },
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'area',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            superpose: [
                { y: { field: 'peak', type: 'quantitative', domain: [0, 1] } },
                { y: { field: 'peak', type: 'quantitative', domain: [1, 8] } },
                { y: { field: 'peak', type: 'quantitative', domain: [8, 15] } }
            ],
            color: { field: 'sample', type: 'nominal' },
            row: { field: 'sample', type: 'nominal' },
            opacity: { value: 0.4 },
            width: 1000,
            height: 180
        }
    ]
};

export const GEMINI_PLUGIN_TRACK_BASIC_MARKS: GeminiSpec = {
    tracks: [
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'rect',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            row: { field: 'sample', type: 'nominal' },
            // row: { field: 'sample', type: 'nominal' },
            color: { field: 'peak', type: 'quantitative' },
            // stroke: {value: 'white'},
            // strokeWidth: {value: 1},
            width: 1000,
            height: 180
        },
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'area',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'peak', type: 'quantitative' },
            row: { field: 'sample', type: 'nominal' },
            color: { field: 'sample', type: 'nominal' },
            stroke: { value: 'white' },
            strokeWidth: { value: 0.5 },
            width: 1000,
            height: 180
        },
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'bar',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'peak', type: 'quantitative' },
            row: { field: 'sample', type: 'nominal' },
            color: { field: 'sample', type: 'nominal' },
            stroke: { value: 'white' },
            strokeWidth: { value: 0.5 },
            width: 1000,
            height: 180
        },
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'line',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'peak', type: 'quantitative' },
            row: { field: 'sample', type: 'nominal' },
            color: { field: 'sample', type: 'nominal' },
            width: 1000,
            height: 180
        },
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'point',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'peak', type: 'quantitative' },
            row: { field: 'sample', type: 'nominal' },
            size: { field: 'peak', type: 'quantitative' },
            color: { field: 'sample', type: 'nominal' },
            stroke: { value: 'white' },
            strokeWidth: { value: 1 },
            width: 1000,
            height: 180
        }
    ]
};

export const GEMINI_TRACK_EXAMPLE: GeminiSpec = {
    tracks: [
        {
            data: {
                url: MULTIVEC_FA,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'base',
                column: 'position',
                value: 'count',
                categories: ['A', 'T', 'G', 'C']
            },
            zoomAction: { type: 'auto' },
            mark: 'bar',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [3000000, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'count', type: 'quantitative' },
            color: {
                field: 'base',
                type: 'nominal',
                domain: ['A', 'T', 'G', 'C', 'N', 'other'],
                range: ['#007FFF', '#e8e500', '#008000', '#FF0038', '#800080', '#DCDCDC']
            },
            width: 1000,
            height: 180
        }
    ]
};

export const GEMINI_TRACK_EXAMPLE2: GeminiSpec = {
    tracks: [
        {
            data: {
                url: MULTIVEC_FA,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'base',
                column: 'position',
                value: 'count',
                categories: ['A', 'T', 'G', 'C']
            },
            zoomAction: {
                type: 'alternative-encoding',
                spec: {
                    row: { field: 'base', type: 'nominal' }
                }
            },
            mark: 'bar',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [3000000, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'count', type: 'quantitative' },
            color: {
                field: 'base',
                type: 'nominal',
                domain: ['A', 'T', 'G', 'C', 'N', 'other'],
                range: ['#007FFF', '#e8e500', '#008000', '#FF0038', '#800080', '#DCDCDC']
            },
            width: 1000,
            height: 180
        }
    ]
};

export const GEMINI_TRACK_EXAMPLE3: GeminiSpec = {
    tracks: [
        {
            data: {
                url: MULTIVEC_FA,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'base',
                column: 'position',
                value: 'count',
                categories: ['A', 'T', 'G', 'C']
            },
            zoomAction: {
                type: 'alternative-encoding',
                spec: {
                    mark: 'line',
                    row: { field: 'base', type: 'nominal' }
                }
            },
            mark: 'bar',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [3000000, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'count', type: 'quantitative' },
            color: {
                field: 'base',
                type: 'nominal',
                domain: ['A', 'T', 'G', 'C', 'N', 'other'],
                range: ['#007FFF', '#e8e500', '#008000', '#FF0038', '#800080', '#DCDCDC']
            },
            width: 1000,
            height: 180
        }
    ]
};

export const LAYOUT_EXAMPLE_LINK: GeminiSpec = {
    tracks: [
        {
            data: {
                url:
                    'https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/potint-to-point-relation.csv',
                type: 'csv'
            },
            mark: 'link-between',
            x: { field: 'from', type: 'nominal' },
            y: { field: 'to', type: 'nominal' },
            width: 50,
            height: 50
        },
        {
            data: {
                url:
                    'https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/potint-to-point-relation.csv',
                type: 'csv'
            },
            mark: 'link-between',
            x1: { field: 'from', type: 'nominal' },
            y: { field: 'to', type: 'nominal' },
            width: 50,
            height: 50
        },
        {
            data: {
                url:
                    'https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/potint-to-point-relation.csv',
                type: 'csv'
            },
            mark: 'link-between',
            x1: { field: 'from', type: 'nominal' },
            y1: { field: 'to', type: 'nominal' },
            width: 50,
            height: 50
        },
        {
            data: {
                url:
                    'https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/potint-to-point-relation.csv',
                type: 'csv'
            },
            mark: 'link-between',
            x: { field: 'from', type: 'nominal' },
            y1: { field: 'to', type: 'nominal' },
            width: 50,
            height: 50
        },
        {
            data: {
                url:
                    'https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/potint-to-point-relation.csv',
                type: 'csv'
            },
            mark: 'link-between',
            x: { field: 'from', type: 'nominal' },
            x1: { field: 'to', type: 'nominal' },
            width: 50,
            height: 50
        },
        {
            data: {
                url:
                    'https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/potint-to-point-relation.csv',
                type: 'csv'
            },
            mark: 'link-between',
            y: { field: 'from', type: 'nominal' },
            y1: { field: 'to', type: 'nominal' },
            width: 50,
            height: 50
        }
    ]
};

export const LAYOUT_EXAMPLE_COMBO: GeminiSpec = {
    references: [
        'http://genocat.tools/tools/combo.html',
        'http://genocat.tools/tools/gbrowse_syn.html',
        'http://genocat.tools/tools/ggbio.html',
        'http://genocat.tools/tools/give.html',
        'http://genocat.tools/tools/variant_view.html'
    ],
    tracks: [
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 800,
            height: 50
        },
        {
            data: {
                url:
                    'https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/potint-to-point-relation.csv',
                type: 'csv'
            },
            mark: 'link-between',
            x1: { field: 'from', type: 'nominal' },
            x: { field: 'to', type: 'nominal' },
            width: 800,
            height: 50
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 800,
            height: 50
        }
    ]
};

export const LAYOUT_EXAMPLE_COMBO_HORIZONTAL: GeminiSpec = {
    layout: { type: 'linear', direction: 'horizontal' },
    tracks: [
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 60,
            height: 500
        },
        {
            data: {
                url:
                    'https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/potint-to-point-relation.csv',
                type: 'csv'
            },
            mark: 'link-between',
            y: { field: 'from', type: 'nominal' },
            y1: { field: 'to', type: 'nominal' },
            width: 60,
            height: 500
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 60,
            height: 500
        }
    ]
};

export const LAYOUT_EXAMPLE_COMBO_BAND: GeminiSpec = {
    references: [
        'http://genocat.tools/tools/combo.html',
        'http://genocat.tools/tools/gbrowse_syn.html',
        'http://genocat.tools/tools/ggbio.html',
        'http://genocat.tools/tools/give.html',
        'http://genocat.tools/tools/variant_view.html'
    ],
    tracks: [
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'rect',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'sample', type: 'nominal' },
            color: { field: 'peak', type: 'quantitative' },
            width: 800,
            height: 90
        },
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'line',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'peak', type: 'quantitative' },
            row: { field: 'sample', type: 'nominal' },
            color: { field: 'sample', type: 'nominal' },
            width: 800,
            height: 90
        },
        // {
        //     data: {
        //         url: 'https://higlass.io/api/v1/tileset_info/?d=OHJakQICQD6gTD7skx4EWA',
        //         type: 'tileset'
        //     },
        //     mark: {
        //         type: 'gene-annotation-higlass',
        //         server: 'gemini-v1'
        //     },
        //     x: { type: 'genomic', axis: true, domain: { chromosome: '2' } },
        //     width: 800,
        //     height: 140
        // },
        {
            data: {
                url:
                    'https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/range-to-range-relation.csv',
                type: 'csv'
            },
            mark: 'link-between',
            x1: { field: 'from' },
            x1e: { field: 'from1' },
            x: { field: 'to' },
            xe: { field: 'to1' },
            width: 800,
            height: 260,
            stroke: { value: 'none' }
        },
        // {
        //     data: {
        //         url: 'https://higlass.io/api/v1/tileset_info/?d=OHJakQICQD6gTD7skx4EWA',
        //         type: 'tileset'
        //     },
        //     mark: {
        //         type: 'gene-annotation-higlass',
        //         server: 'gemini-v1'
        //     },
        //     x: { type: 'genomic', domain: { chromosome: '3' } },
        //     x1: { axis: true },
        //     width: 800,
        //     height: 140
        // },
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'bar',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'peak', type: 'quantitative' },
            row: { field: 'sample', type: 'nominal' },
            color: { field: 'sample', type: 'nominal' },
            width: 800,
            height: 90
        },
        {
            data: {
                url: MULTIVEC_FILE_CISTROME,
                type: 'tileset'
            },
            metadata: {
                type: 'higlass-multivec',
                row: 'sample',
                column: 'position',
                value: 'peak',
                categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
            },
            mark: 'point',
            x: {
                field: 'position',
                type: 'genomic',
                domain: { chromosome: '1', interval: [1, 3000500] }
            },
            x1: { axis: true },
            y: { field: 'peak', type: 'quantitative' },
            row: { field: 'sample', type: 'nominal' },
            color: { field: 'sample', type: 'nominal' },
            width: 800,
            height: 90
        }
    ]
};

export const LAYOUT_EXAMPLE_STACKED_MULTI_TRACKS: GeminiSpec = {
    layout: { type: 'linear', direction: 'horizontal', wrap: 2 },
    tracks: [
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 350,
            height: 30,
            style: { background: '#FAF9F7' }
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 350,
            height: 30
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 350,
            height: 30,
            style: { background: '#FAF9F7' }
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 350,
            height: 30
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 350,
            height: 30,
            style: { background: '#FAF9F7' }
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 350,
            height: 30
        }
    ]
};

export const LAYOUT_EXAMPLE_STACKED_MULTI_TRACKS_CIRCULAR: GeminiSpec = {
    layout: { type: 'circular', direction: 'horizontal', wrap: 2 },
    tracks: [
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 500,
            height: 30,
            style: { background: '#FAF9F7' }
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 500,
            height: 30
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 500,
            height: 30,
            style: { background: '#FAF9F7' }
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 500,
            height: 30
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 500,
            height: 30,
            style: { background: '#FAF9F7' }
        },
        {
            data: { url: 'dummy', type: 'csv' },
            mark: 'dummy',
            width: 500,
            height: 30
        }
    ]
};
