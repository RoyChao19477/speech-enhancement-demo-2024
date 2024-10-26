document.addEventListener("DOMContentLoaded", function() {
    // Initialize WaveSurfer instances for each audio sample

    // Additive Noise Samples
    var wavesurferNoisy13 = WaveSurfer.create({
        container: '#waveform-fileid-13-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy13.load('9_noisy/fileid_13.flac');

    var wavesurferEnhanced13 = WaveSurfer.create({
        container: '#waveform-fileid-13-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced13.load('1_Additive Noise/fileid_13.wav');

    var wavesurferNoisy14 = WaveSurfer.create({
        container: '#waveform-fileid-14-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy14.load('9_noisy/fileid_14.flac');

    var wavesurferEnhanced14 = WaveSurfer.create({
        container: '#waveform-fileid-14-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced14.load('1_Additive Noise/fileid_14.wav');

    var wavesurferNoisy17 = WaveSurfer.create({
        container: '#waveform-fileid-17-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy17.load('9_noisy/fileid_17.flac');

    var wavesurferEnhanced17 = WaveSurfer.create({
        container: '#waveform-fileid-17-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced17.load('1_Additive Noise/fileid_17.wav');

    var wavesurferNoisy20 = WaveSurfer.create({
        container: '#waveform-fileid-20-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy20.load('9_noisy/fileid_20.flac');

    var wavesurferEnhanced20 = WaveSurfer.create({
        container: '#waveform-fileid-20-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced20.load('1_Additive Noise/fileid_20.wav');

    var wavesurferNoisy549 = WaveSurfer.create({
        container: '#waveform-fileid-549-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy549.load('9_noisy/fileid_549.flac');

    var wavesurferEnhanced549 = WaveSurfer.create({
        container: '#waveform-fileid-549-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced549.load('1_Additive Noise/fileid_549.wav');

    var wavesurferNoisy690 = WaveSurfer.create({
        container: '#waveform-fileid-690-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy690.load('9_noisy/fileid_690.flac');

    var wavesurferEnhanced690 = WaveSurfer.create({
        container: '#waveform-fileid-690-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced690.load('1_Additive Noise/fileid_690.wav');

    var wavesurferNoisy834 = WaveSurfer.create({
        container: '#waveform-fileid-834-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy834.load('9_noisy/fileid_834.flac');

    var wavesurferEnhanced834 = WaveSurfer.create({
        container: '#waveform-fileid-834-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced834.load('1_Additive Noise/fileid_834.wav');

    var wavesurferNoisy975 = WaveSurfer.create({
        container: '#waveform-fileid-975-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy975.load('9_noisy/fileid_975.flac');

    var wavesurferEnhanced975 = WaveSurfer.create({
        container: '#waveform-fileid-975-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced975.load('1_Additive Noise/fileid_975.wav');

    // Clipping Samples
    var wavesurferNoisy28 = WaveSurfer.create({
        container: '#waveform-fileid-28-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy28.load('9_noisy/fileid_28.flac');

    var wavesurferEnhanced28 = WaveSurfer.create({
        container: '#waveform-fileid-28-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced28.load('2_Clipping/fileid_28.wav');

    var wavesurferNoisy45 = WaveSurfer.create({
        container: '#waveform-fileid-45-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy45.load('9_noisy/fileid_45.flac');

    var wavesurferEnhanced45 = WaveSurfer.create({
        container: '#waveform-fileid-45-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced45.load('2_Clipping/fileid_45.wav');

    var wavesurferNoisy646 = WaveSurfer.create({
        container: '#waveform-fileid-646-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy646.load('9_noisy/fileid_646.flac');

    var wavesurferEnhanced646 = WaveSurfer.create({
        container: '#waveform-fileid-646-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced646.load('2_Clipping/fileid_646.wav');

    var wavesurferNoisy735 = WaveSurfer.create({
        container: '#waveform-fileid-735-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy735.load('9_noisy/fileid_735.flac');

    var wavesurferEnhanced735 = WaveSurfer.create({
        container: '#waveform-fileid-735-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced735.load('2_Clipping/fileid_735.wav');

    var wavesurferNoisy986 = WaveSurfer.create({
        container: '#waveform-fileid-986-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy986.load('9_noisy/fileid_986.flac');

    var wavesurferEnhanced986 = WaveSurfer.create({
        container: '#waveform-fileid-986-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced986.load('2_Clipping/fileid_986.wav');

    // Reverberation Samples
    var wavesurferNoisy22 = WaveSurfer.create({
        container: '#waveform-fileid-22-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy22.load('9_noisy/fileid_22.flac');

    var wavesurferEnhanced22 = WaveSurfer.create({
        container: '#waveform-fileid-22-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced22.load('3_Reverberation/fileid_22.wav');

    var wavesurferNoisy843 = WaveSurfer.create({
        container: '#waveform-fileid-843-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy843.load('9_noisy/fileid_843.flac');

    var wavesurferEnhanced843 = WaveSurfer.create({
        container: '#waveform-fileid-843-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced843.load('3_Reverberation/fileid_843.wav');

    var wavesurferNoisy995 = WaveSurfer.create({
        container: '#waveform-fileid-995-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy995.load('9_noisy/fileid_995.flac');

    var wavesurferEnhanced995 = WaveSurfer.create({
        container: '#waveform-fileid-995-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced995.load('3_Reverberation/fileid_995.wav');

    var wavesurferNoisy999 = WaveSurfer.create({
        container: '#waveform-fileid-999-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy999.load('9_noisy/fileid_999.flac');

    var wavesurferEnhanced999 = WaveSurfer.create({
        container: '#waveform-fileid-999-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced999.load('3_Reverberation/fileid_999.wav');

    // Bandwidth Limitation Samples
    var wavesurferNoisy3 = WaveSurfer.create({
        container: '#waveform-fileid-3-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy3.load('9_noisy/fileid_3.flac');

    var wavesurferEnhanced3 = WaveSurfer.create({
        container: '#waveform-fileid-3-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced3.load('4_BWLimitation/fileid_3.wav');

    var wavesurferNoisy21 = WaveSurfer.create({
        container: '#waveform-fileid-21-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy21.load('9_noisy/fileid_21.flac');

    var wavesurferEnhanced21 = WaveSurfer.create({
        container: '#waveform-fileid-21-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced21.load('4_BWLimitation/fileid_21.wav');

    var wavesurferNoisy92 = WaveSurfer.create({
        container: '#waveform-fileid-92-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy92.load('9_noisy/fileid_92.flac');

    var wavesurferEnhanced92 = WaveSurfer.create({
        container: '#waveform-fileid-92-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced92.load('4_BWLimitation/fileid_92.wav');

    var wavesurferNoisy841 = WaveSurfer.create({
        container: '#waveform-fileid-841-noisy',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    wavesurferNoisy841.load('9_noisy/fileid_841.flac');

    var wavesurferEnhanced841 = WaveSurfer.create({
        container: '#waveform-fileid-841-enhanced',
        waveColor: 'green',
        progressColor: 'blue'
    });
    wavesurferEnhanced841.load('4_BWLimitation/fileid_841.wav');
});
