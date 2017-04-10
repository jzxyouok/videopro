/*
Navicat MySQL Data Transfer

Source Server         : 本地windows上的mysql
Source Server Version : 50626
Source Host           : 192.168.222.1:3306
Source Database       : yii

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2017-01-06 23:33:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `videos`
-- ----------------------------
DROP TABLE IF EXISTS `videos`;
CREATE TABLE `videos` (
  `v_id` int(11) NOT NULL AUTO_INCREMENT,
  `v_title` varchar(50) NOT NULL COMMENT '分类(连navbar)',
  `v_class` int(11) NOT NULL COMMENT '简介',
  `v_intr` text NOT NULL,
  `v_userid` int(11) NOT NULL DEFAULT '0' COMMENT '0代表超级管理员传',
  `v_addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '入库时间',
  `v_lastmod` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后修改时间',
  `v_playlist` int(11) NOT NULL DEFAULT '0' COMMENT '所属播单',
  PRIMARY KEY (`v_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of videos
-- ----------------------------
