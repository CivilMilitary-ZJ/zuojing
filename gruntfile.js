module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        imagemin: {
            /* ѹ��ͼƬ��С */
            dist: {
                options: {
                    optimizationLevel: 1 //���� PNG ͼƬ�Ż�ˮƽ
                },
                files: [
                       {
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,jpeg}'], // �Ż� img Ŀ¼������ png/jpg/jpeg ͼƬ
                    dest: 'images2/' // �Ż����ͼƬ����λ�ã����Ǿ�ͼƬ�����Ҳ�����ʾ
                    }
                    ]
                }
            },
            });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('img', ['imagemin']);
};