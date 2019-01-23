const data = {
    title: 'Network Assisted Genomic Analysis',
    subheader: 'The network-boosted GWAS package re-prioritizes significant single nucleotide polymorphisms ' + 
        '(SNPs) to genes using network diffusion methods including random walk and heat diffusion.',
    url: {
        sample_file: '/nagadata/schizophrenia.txt',
        sample_results: '/nagadata/example_output/example_schizophrenia_output.json',
        github: 'https://github.com/shfong/nbgwas',
        swagger: '/rest/v1',
        data: '/nagadata',
        endpoint: "/rest/v1/snp_analyzer",
        // publication: "/",
    },
    defaults: {
        ndex: '',
        snp_level_summary: null,
        protein_coding: 'hg18',
        alpha: '',
        window: 10000
    },
    text: {
        snp_level_summary: 'Upload GWAS Summary Statistics',
        ndex: 'Network UUID',
        alpha: 'Restart Probability (Leave blank to auto-generate)',
        window: 'Window Size',
        protein_coding: 'Protein Coding',
        run: 'Run'
    },
    help: {
        snp_level_summary: 'Comma delimited file  that includes a header line with columns that have the following names: chromosome, basepair, pvalue',
        ndex: 'NDEx (http://www.ndexbio.org) UUID of network to load.',
        alpha: 'Sets propagation constant alpha with allowed values between 0 and 1, representing the restart ' +
            'probability of walking to network neighbors as opposed to reseting to the original distribution. Larger ' +
            'values increases the likelihood of starting with the original distribution again. ',
        window: 'Window search size in base pairs used in snp search',
        protein_coding: 'Sets which protein coding table to use data relatedto NCBI human genome build hg18 or hg19',
    },
    sample_ndex: 'f93f402c-86d4-11e7-a10d-0ac135e8bacf',
    
    
}

export default data;