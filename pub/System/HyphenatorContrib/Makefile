FOSWIKI_ROOT?=~/foswiki/trunk/core
TARGET=hyphenator.js patterns

PKG_SOURCE=Hyphenator.js hyphenator.init.uncompressed.js

-include $(FOSWIKI_ROOT)/pub/System/JQueryPlugin/Makefile.include

hyphenator.uncompressed.js: $(PKG_SOURCE)
	@echo generating $@
	@cat $^ > $@

clean:
	rm *.gz $(TARGET)

.PHONY: git

git:
	git clone -b release https://github.com/mnater/Hyphenator.git git

ifneq (,$(wildcard git))
Hyphenator.js: git/Hyphenator.js
	cp $< $@

patterns: 
	cp -r git/patterns .
endif
