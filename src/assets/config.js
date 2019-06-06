// JSON structured collection of strings, links, and default values to be used throughout the app

const data = {
    title: 'Network Assisted Genomic Analysis',
    subheader: 'Network Assisted Genomic Analysis re-prioritizes significant single nucleotide polymorphisms ' +
        '(SNPs) to genes using network diffusion methods including random walk and heat diffusion.',
    version: '0.1.5',
    url: {
        sample_file: '/nagadata/schizophrenia.txt',
        sample_results: '/nagadata/example_output/example_schizophrenia_output.json',
        github: 'https://github.com/shfong/naga',
        swagger: '/rest/v1',
        data: '/nagadata',
        endpoint: "/rest/v1/snp_analyzer",
        ndex_query: 'http://www.ndexbio.org/v2/search/network/{networkid}/interconnectquery?save=false',
        ndex_link: 'http://www.ndexbio.org',
        // publication: "/", // ADD link to publication to generate a link in the app
    },
    defaults: {
        ndex: '',
        snp_level_summary: null,
        protein_coding: 'hg18',
        alpha: '',
        window: 10000,
        size_adjustment: false

    },
    // Add protein coding files here.
    protein_codings: [{
        name: "Human - hg18",
        path: "hg18",
        description: ""
    },
    {
        name: "Human - hg19",
        path: "hg19",
        description: ""
    },
    {
      name: "Rat - rn6",
      path: "rn6",
      description: ""

    },
    {
      name: "Mouse - mm10",
      path: "mm10",
      description: ""
    }],
    networks: [{
      name: "Human PCNet",
      path: "f93f402c-86d4-11e7-a10d-0ac135e8bacf",
      description: ""
    },
  {
    name: "Rat PCNet",
    path: "acb87f15-678e-11e9-848d-0ac135e8bacf",
    description: ""
  },
  {
    name: "Mouse PCNet",
    path: "5565aa25-3c5a-11e9-9f06-0ac135e8bacf",
    description: ""
  }],
    tooltips: {
        run_button_disabled: "'UUID in NDEx' field and 'UPLOAD GWAS SUMMARY STATISTICS' must be set to run NAGA processing",
        run_button_enabled: "Runs NAGA processing"
    },
    text: {
        snp_level_summary: 'Upload GWAS Summary Statistics',
        ndex_dropdown: 'Select Network',
        ndex: 'UUID in NDEx',
        alpha: 'Restart Probability (Leave blank to auto-generate)',
        window: 'Window Size',
        protein_coding: 'Genome build',
        run: 'Run',
        view_previous: 'View previous result by task ID',
        ndex_placeholder: "Select network or input a NDEx network UUID",
        size_adjustment: 'Adjustment to gene size'
    },
    help: {
        snp_level_summary: 'Comma delimited file  that includes a header line with columns that have the following names: chromosome, basepair, pvalue',
        alpha: 'Sets propagation constant alpha with allowed values between 0 and 1, representing the restart ' +
            'probability of walking to network neighbors as opposed to reseting to the original distribution. Larger ' +
            'values increases the likelihood of starting with the original distribution again. ',
        window: 'Window search size in base pairs used in snp search',
        protein_coding: 'Set genome reference to map SNPs to protein coding regions',
        size_adjustment: 'Adjust initial heat to gene size'
    },
    sample_ndex: 'f93f402c-86d4-11e7-a10d-0ac135e8bacf',
    topN: 25,
    columns: {
        negativelog: 'Gene Input Heat',
        finalheat: 'Final Heat'
    },


}

export default data;
